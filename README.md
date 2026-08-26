# budujsamsebe.cz

Statický web — Astro 5 + Tailwind 4, design „Deník". Hostování: GitHub Pages.

## Lokální vývoj

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # výstup do dist/
```

## Nasazení na GitHub Pages

1. Založ repo (např. `budujsamsebe`) a pushni obsah této složky na větev `main`.
2. V repu: **Settings → Pages → Source: GitHub Actions**. Workflow `.github/workflows/deploy.yml` se spustí při každém pushi.
3. Vlastní doména: v **Settings → Pages → Custom domain** zadej `budujsamsebe.cz` (soubor `public/CNAME` už v repu je). V DNS u registrátora nastav:
   - `A` záznamy pro apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` pro `www` → `<github-user>.github.io`
4. Zaškrtni **Enforce HTTPS**, jakmile se vydá certifikát.

## Kam co doplnit

- **Ecomail formulář** (tracker za e-mail): `src/pages/tracker.astro` — komentář `ECOMAIL EMBED`.
- **SimpleShop prodejní formulář**: dopaminový detox je hotový — formulář `0MYKV` (form#154814) je v sekci `#objednavka` v `src/pages/plany/dopaminovy-detox.astro`. Zbývá 75 dní: `src/pages/plany/75-dni.astro`, komentář `SIMPLESHOP EMBED`. Skript SimpleShopu musí mít `is:inline`, jinak ho Astro zabundluje a formulář se nevykreslí.
- **Nový článek**: přidej `.md` do `src/content/vyzvy/` s frontmatter `title, description, kategorie, datum (MM/RRRR), cteni, zdroje[]`. URL vznikne z názvu souboru (`/vyzvy/<soubor>/`).
- **Recenze na LP**: pole `recenze` nahoře v `src/pages/plany/*.astro` — sekce se zobrazí až s první reálnou recenzí (nikdy vymyšlenou).
- **GA4**: ID měření do `src/components/CookieLista.astro` (`GA4_ID`); načítá se až po souhlasu v liště.
- **og:image**: stránka předá `image="/cesta/og.png"` do `Base` (viz LP detoxu). Výchozí obrázek pro celý web: vyrob `public/og.png` a nastav ho jako default v `src/layouts/Base.astro`.
- **Ecomail formulář pro ukázku Dne 0**: `src/pages/plany/dopaminovy-detox/ukazka.astro` — tag `ukazka-detox`. Formulář trackeru přesměruj po odeslání na `/tracker/dekujeme/` (nabídka 7denního plánu).
- **Právní minimum**: `src/pages/ochrana-osobnich-udaju.astro` a `src/pages/obchodni-podminky.astro` — identifikace (jméno/firma, sídlo, IČO, DIČ) je v konstantě nahoře v každém souboru, doplň ji na obou místech. Cookie lišta + GA4 po souhlasu: `src/components/CookieLista.astro`, doplň `GA4_ID`.
- **Mini-huby na homepage**: `src/pages/index.astro`, pole `huby`. Odkazy se automaticky filtrují proti kolekci `vyzvy` — slug, ke kterému článek neexistuje, se nezobrazí, prázdná karta hlásí „Články připravujeme". Stačí tedy jen přidat `.md` se správným názvem souboru.
- **Box „Z posledního vydání"** v newsletterové sekci homepage: doplnit až po prvním reálném vydání (komentář v kódu).

## SEO

- Sitemapa: `@astrojs/sitemap` → `/sitemap-index.xml`, odkazovaná z `public/robots.txt` i z `<head>`.
- Meta, canonical, OG a Twitter tagy a JSON-LD (Organization + WebSite) jsou v `src/layouts/Base.astro`.
- Stránkové schema se vkládá přes pojmenovaný slot: `<script type="application/ld+json" is:inline set:html={...} slot="head" />` (homepage takhle přidává `FAQPage`).

## Logo a ikony

Zdroj: `src/assets/budujsamsebelogo.svg` — pozor, není to pravý vektor, ale rastr 1024×1024
zabalený v SVG (barvy v jednom `<image>`, průhlednost v druhém jako maska). Hotové odvozeniny
leží v `public/`: `logo.png` (256, průhledné pozadí — značka v hlavičce), `favicon.ico`
(48/32/16), `favicon-32.png`, `apple-touch-icon.png` a `icon-192/512.png` (iOS a Android alfu
zahazují, proto mají podloženo barvou paper) a `site.webmanifest`.

Když se logo změní, je potřeba všechny odvozeniny přegenerovat — složit RGB z prvního `<image>`
s maskou z druhého, oříznout na obsah, doplnit ~6 % vzduchu a zmenšit.

## Design tokeny (Tailwind theme, `src/styles/global.css`)

paper `#f4f2ec` · paper-dark `#edeae0` · ink `#141412` · muted `#6b6a64` · line `#c9c5b8` · accent `#d43518` — fonty Space Grotesk (sans) + IBM Plex Mono (mono). Vizuální předloha: https://claude.ai/code/artifact/20617497-2129-44a7-8de8-d74ecfabdc20
