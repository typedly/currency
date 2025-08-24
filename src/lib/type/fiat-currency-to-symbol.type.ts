// Type.
import { FiatCurrencySymbol } from './fiat-currency-symbol.type';
/**
 * @description
 * @export
 * @template {keyof FiatCurrencySymbol} Currency 
 */
export type FiatCurrencyToSymbol<Currency extends keyof FiatCurrencySymbol> =
  `${FiatCurrencySymbol[Currency]}`;
