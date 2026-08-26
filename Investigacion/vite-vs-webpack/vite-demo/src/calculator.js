export const TAX_RATE = 0.13;

export function calculateSubtotal(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

export function calculateTax(subtotal) {
  return subtotal * TAX_RATE;
}

export function calculateTotal(subtotal, tax) {
  return subtotal + tax;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
  }).format(value);
}