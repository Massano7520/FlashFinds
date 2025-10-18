const mongoose = require('mongoose');
const Product = require('./../models/productModel');
const formatCurrency = require('../utils/money');

// Função para garantir conexão singleton com Mongoose
async function ensureDBConnection() {
  if (mongoose.connection.readyState === 1) {
    // Já conectado
    return;
  }
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000 // timeout de 10s
    });
    console.log('DB connected in getOverview');
  } catch (err) {
    console.error('DB connection error in getOverview:', err);
    throw err;
  }
}

exports.getOverview = async (req, res) => {
  try {
    // Garante que o MongoDB está conectado
    await ensureDBConnection();

    // Faz a query
    let products = await Product.find();

    // Formata preços
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
}; */
