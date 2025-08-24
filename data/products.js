import {formatCurrency} from '../utils/money.js';

class Product {
  id;
  image;
  name;
  oldPriceCents;
  newPriceCents;
  discount;
  shop;
  category;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.oldPriceCents = productDetails.oldPriceCents;
    this.newPriceCents = productDetails.newPriceCents;
    this.discount = productDetails.discount;
    this.shop = productDetails.shop;
    this.category = productDetails.category;
  }

  getPrice(priceCents) {
    return formatCurrency(priceCents);
  }
}




export let products = [];

export async function loadProducts(fun) {
  // Faz a leitura dos dados dum servidor
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Massano7520/products-flashfinds/refs/heads/main/products.json'
    );

    const data = await response.json(); //faz o parse

    products = data.map((productDetails) => {
      return new Product(productDetails);
    });

    fun();
  } catch (error) {
    console.log('Error on loading products', error);
  }
}
