const mongoose = require('mongoose');
const ensureDBConnection = require('./../utils/ensure-db-connection');
const Product = require('./../models/productModel');
const formatCurrency = require('../utils/money');

exports.getOverview = async (req, res) => {
  try {
    // Garante que o MongoDB está conectado
    await ensureDBConnection();

    // Faz a query
    let products = await Product.find();

    // Formata preços.
    products = products.map((p) => ({
      ...p._doc,
      newPriceEuros: formatCurrency(p.newPriceCents),
      oldPriceEuros: formatCurrency(p.oldPriceCents)
    }));

    // Renderiza template
    res.status(200).render('overview', {
      title: 'All products',
      products
    });
  } catch (err) {
    console.error('Error in getOverview route:', err);
    res.status(500).send('Internal Server Error');
  }
};

/* const Product = require('./../models/productModel');
const formatCurrency = require('../utils/money');

exports.getOverview = async (req, res) => {
  let products = await Product.find();
  products = products.map((p) => ({
    ...p._doc, // pegas nas propriedades todas e deixa igual
    newPriceEuros: formatCurrency(p.newPriceCents),
    oldPriceEuros: formatCurrency(p.oldPriceCents)
  }));
  res.status(200).render('overview', {
    //overview é o nome do template que ele vai buscar
    title: 'All products',
    products
  });
};
 */
