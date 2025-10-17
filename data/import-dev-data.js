const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./../models/productModel');

dotenv.config({ path: `${__dirname}/../config.env` });

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    /*     useUnifiedTopology: true,
    useNewUrlParser: true */
  })
  .then(() => console.log('DB connection succsesful!'));

//READ FILE
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../backend/products.json`, 'utf-8')
);

//IMPORT DATA FROM DATABASE
const importData = async () => {
  try {
    await Product.create(products);
    process.exit();
    console.log('Data succesufuly loaded');
  } catch (err) {
    console.log(err);
  }
};

//DELETE DATA FROM DB
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data succesufuly deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

//console.log(process.argv);
