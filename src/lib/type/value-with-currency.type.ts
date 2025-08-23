/**
 * @description The value with currency.
 * @export
 * @template {number | string} Value 
 * @template {string} Currency 
 */
export type ValueWithCurrency<
  Value extends number | string,
  Currency extends string
> = `${Currency} ${Value}`;
