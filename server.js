const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection successful!');

    // Só aqui inicializa o servidor
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log('App running on port', port);
    });
  })
  .catch((err) => console.error('DB connection error:', err));

/*
try {
  await mongoose
    .connect(DB, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true
    })
   console.log('DB connection succsesful!');
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('app running on port 4000');
});
*/
