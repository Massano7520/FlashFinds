import { loadProducts, products } from '../data/products.js';

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="products-grid">
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                    src="${product.image}">
            </div>

            <div class="product-info-container">
              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>
            

              <div class="product-price-row-container">
                <div class="product-new-price">
                  ${product.getPrice(product.newPriceCents)}€
                </div>

                <div class="product-old-price">
                  ${product.getPrice(product.oldPriceCents)}€
                </div>   

                <div class="product-discount">
                  ${product.discount}%
                </div> 

                <div class="product-divider"> |</div> 

                <div class="product-shop">
                  ${product.shop}
                </div> 

                <div class="product-divider"> |</div>

                <div class="product-category">
                  ${product.category}
                </div> 
                
              </div> 
              
              <a class="button-link" href="${product.link}">
                <div class="product-shop-link button-primary js-product-shop-link">
                  Comprar na ${product.shop}
                  <img class="product-link-icon"
                    src="images/icons/link-icon.png">      
                </div>
              </a> 
              
            </div>  
            
        </div> 
      <div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;
}
