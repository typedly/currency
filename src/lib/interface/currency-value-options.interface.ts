/**
 * @description The options for formatting currency values.
 * @export
 * @interface CurrencyValueOptions
 */
export interface CurrencyValueOptions {
  /**
   * @description Optional. The locale string (e.g., 'en-US', 'de-DE') used to format the currency value according to local conventions.
   * @type {?string}
   */
  locales?: string;
  
  /**
   * @description Optional. Specifies the maximum number of decimal digits to display (e.g., 2 for cents).
   * @type {?number}
   */
  maximumFractionDigits?: number;

  /**
   * @description Optional. Specifies the minimum number of decimal digits to display (e.g., 2 to always show cents, even for whole numbers).
   * @type {?number}
   */
  minimumFractionDigits?: number;
}
