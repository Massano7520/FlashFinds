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

            <div class="product-info-container">
              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>

              <div class="product-new-price">
                ${product.getPrice(product.newPriceCents)}€
              </div>
            </div>
        </div> 

    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;
}
