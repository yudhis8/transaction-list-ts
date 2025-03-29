import {useCallback} from 'react';

const useCurrencyFormatter = () => {
  const formatCurrency = useCallback((amount: number): string => {
    const formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      currencyDisplay: 'symbol', // Use 'symbol' to get the default format
      minimumFractionDigits: 0,
    }).format(amount);

    // Remove the space between 'Rp' and the number
    if (amount === 0) {
      return 'GRATIS';
    } else {
      return formatted.replace(/\s+/g, '');
    }
  }, []);

  return {formatCurrency};
};

export default useCurrencyFormatter;
