const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    // https://www.currency-iso.org/dam/downloads/lists/list_one.xml
    currency: 'BRL',
  }).format(value);
};

console.log(formatCurrency(Number('12,509'.replace(',', '.'))));

export default formatCurrency;
