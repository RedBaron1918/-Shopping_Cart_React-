const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency'});

export default function formatCurrency(value) {
    return CURRENCY_FORMAT.format(value);
}