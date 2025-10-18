const Product = require('./../models/productModel');
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
