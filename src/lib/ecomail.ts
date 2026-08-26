// Ecomail — vlastní formulář (webhook seznamu).
// URL najdeš v Ecomailu: Kontakty → seznam `budujsamsebe` → Formuláře → „Vlastní formulář“
// (tvar https://UCET.ecomailapp.cz/public/subscribe/ID/HASH). Dokud je prázdná, formuláře jen
// vizuálně stojí a nic neodesílají.
export const ECOMAIL_FORM_URL = '';

// Vlastní pole seznamu (Kontakty → seznam → Vlastní pole): název MAGNET, typ text.
// Podle jeho hodnoty se v Ecomailu větví automatizace (tracker-75 → tracker, ukazka-detox → Den 0).
export const ECOMAIL_MAGNET_FIELD = 'MAGNET';

export type Magnet = 'tracker-75' | 'ukazka-detox';

// Soubory, které automatizace posílá (jsou v public/soubory/, jméno má náhodnou příponu,
// ať se nedají uhodnout; do sitemapy nepatří a robots.txt je zakazuje).
export const SOUBORY: Record<Magnet, string> = {
  'tracker-75': '/soubory/tracker-75-dni-1.0-k7x2q.pdf',
  'ukazka-detox': '/soubory/dopaminovy-detox-den0-1.0-m4p8r.pdf',
};
