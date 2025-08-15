import { loadProducts, products } from '../data/products.js';

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                    src="${product.image}">
            </div>
        </div> 
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;
}
