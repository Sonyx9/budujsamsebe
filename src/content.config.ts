import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vyzvy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vyzvy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kategorie: z.string().default('Výzvy'),
    datum: z.string(), // MM/RRRR — zobrazuje se jako AKTUALIZOVÁNO
    cteni: z.string().optional(), // např. "6 min"
    zdroje: z.array(z.string()).default([]),
  }),
});

export const collections = { vyzvy };
