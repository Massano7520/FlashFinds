// O controller contém as funções que uma rota pode ter associada. Controla as funcionalidades.

const Product = require('./../models/productModel'); //os models instanciam-se sempre com letra grande

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'sucess',
      requestedAt: req.requestTime,
      results: products
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
