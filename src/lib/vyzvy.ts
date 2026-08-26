import type { CollectionEntry } from 'astro:content';

/** "MM/RRRR" → řadicí klíč rok*100 + měsíc; neplatný formát spadne na 0. */
export function klicData(datum: string): number {
  const shoda = /^(\d{1,2})\/(\d{4})$/.exec(datum.trim());
  if (!shoda) return 0;
  return Number(shoda[2]) * 100 + Number(shoda[1]);
}

/** Nejnovější první. */
export function serazenePodleData(
  posts: CollectionEntry<'vyzvy'>[],
): CollectionEntry<'vyzvy'>[] {
  return [...posts].sort((a, b) => klicData(b.data.datum) - klicData(a.data.datum));
}
