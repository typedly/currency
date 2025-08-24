import { ValueWithCurrency } from '../type/value-with-currency.type';
/**
 * @description
 * @export
 * @interface CurrencyValueType
 * @template {number} Value 
 * @template {string} [Currency=string] 
 */
export interface CurrencyValueType<
  Value extends number,
  Currency extends string = string
> {
  /**
   * @description The formatted string representation of the value (e.g., "$1,234.56").
   * @type {string}
   */
  formatted: string;

  /**
   * @description The raw numeric value.
   * @type {Value}
   */
  of: Value;

  /**
   * @description The value paired with its currency code, for strict typing or display.
   * @type {ValueWithCurrency<Value, Currency>}
   */
  withCurrency: ValueWithCurrency<Value, Currency>;
}
