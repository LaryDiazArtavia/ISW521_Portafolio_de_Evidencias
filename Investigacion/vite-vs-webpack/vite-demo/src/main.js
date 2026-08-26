import './style.css';
import { validateProduct } from './validation.js';
import {
  renderProducts,
  renderSummary,
  showMessage,
  clearMessage,
  clearForm,
} from './ui.js';

const form = document.querySelector('#product-form');
const productList = document.querySelector('#product-list');
const clearButton = document.querySelector('#clear-button');

let products = loadProducts();

function updateApplication() {
  renderProducts(products);
  renderSummary(products);
  saveProducts();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearMessage();

  const formData = new FormData(form);
  const name = String(formData.get('productName') ?? '').trim();
  const price = Number(formData.get('productPrice'));

  const validationMessage = validateProduct(name, price);

  if (validationMessage) {
    showMessage(validationMessage);
    return;
  }

  products.push({
    id: crypto.randomUUID(),
    name,
    price,
  });

  updateApplication();
  clearForm(form);
  showMessage('Producto agregado correctamente.', 'success');
});

productList.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('.delete-button');

  if (!deleteButton) {
    return;
  }

  const productId = deleteButton.dataset.id;
  products = products.filter((product) => product.id !== productId);

  updateApplication();
  showMessage('Producto eliminado.', 'success');
});

clearButton.addEventListener('click', () => {
  products = [];
  updateApplication();
  showMessage('La lista fue vaciada.', 'success');
});

function saveProducts() {
  localStorage.setItem('vite-products', JSON.stringify(products));
}

function loadProducts() {
  try {
    const savedProducts = localStorage.getItem('vite-products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  } catch {
    return [];
  }
}

updateApplication();