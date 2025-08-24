/**
 * @description
 * @export
 * @template {string} OfCurrency 
 */
export type ConversionRates<OfCurrency extends string> = {
  [Key in OfCurrency]?: number;
};
