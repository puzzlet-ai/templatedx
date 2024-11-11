import type { BaseMDXProvidedComponents } from '../types';
import { Filters } from '../filter-plugins';


declare global {
  const capitalize: Filters['capitalize'];
  const upper: Filters['upper'];
  const lower: Filters['lower'];
  const truncate: Filters['truncate'];
  const abs: Filters['abs'];
  const join: Filters['join'];
  const round: Filters['round'];
  const replace: Filters['replace'];
  const urlencode: Filters['urlencode'];
  const dump: Filters['dump'];
  interface MDXProvidedComponents extends BaseMDXProvidedComponents {}
}

export {};
