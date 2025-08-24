import {
  CurrencyValueType,
  CurrencyValueOptions,
  AllCurrencies,
  ConversionRates,
  CryptoCurrencies,
  FiatCurrencyToSymbol,
  ValueWithCurrency
} from "../lib";

const options: CurrencyValueOptions = {
  locales: 'en-US',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
};

const value: CurrencyValueType<1234.56, 'USD'> = {
  formatted: '$1,234.56',
  of: 1234.56,
  withCurrency: 'USD 1234.56',
};

type MyCurrencies = AllCurrencies<'PLN' | 'CZK'>; // Includes all crypto, fiat, plus 'PLN' and 'CZK'
let currency: MyCurrencies = 'BTC'; // valid
currency = 'PLN'; // also valid

const rates: ConversionRates<'USD' | 'EUR' | 'BTC'> = {
  USD: 1,
  EUR: 0.92,
  BTC: 0.000023,
};

const crypto: CryptoCurrencies = 'BTC'; // valid
const another: CryptoCurrencies = 'ETH'; // valid

type Symbol = FiatCurrencyToSymbol<'USD'>; // "$"
type SymbolEUR = FiatCurrencyToSymbol<'EUR'>; // "€"
// Usage example:
const dollarSymbol: Symbol = "$";

const amount: ValueWithCurrency<100, 'USD'> = 'USD 100';
const price: ValueWithCurrency<'99.99', 'EUR'> = 'EUR 99.99';
