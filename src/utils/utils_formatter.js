import moment from 'moment';

export const formatAmountINR = (
  n,
  decimal = true,
  formatWithPrefix = false
) => {
  let isNegative = n < 0;
  if (typeof n == 'undefined') {
    return '';
  }

  n = Math.abs(n);

  const numberPrefixed = addMoneyPrefix(n.toFixed(2));

  n = n.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR',
    useGrouping: true,
  });

  if (formatWithPrefix) {
    return (isNegative ? '- ' : '') + '₹' + numberPrefixed;
  }

  if (!formatWithPrefix && isNegative) {
    return (isNegative ? '- ' : '') + n;
  }

  if (!decimal) {
    // this flag is false if we should not show the decimal points
    n = n.slice(0, -3);
  }
  return n;
};

export const formatDate = (date, format = 'DD MM YYYY') => {
  return moment(date).format(format);
};

export const formatYearMonth = (date) => {
  return moment(date).format('MMM YYYY');
};

export const addMoneyPrefix = (n) => {
  let number = n;
  if (n >= 10000000) {
    number = (number / 10000000).toFixed(2) + 'Cr';
  } else if (n >= 100000) {
    number = (number / 100000).toFixed(2) + 'L';
  } else if (n >= 1000) {
    number = (number / 1000).toFixed(2) + 'K';
  }
  return number;
};
