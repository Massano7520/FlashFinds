const mongoose = require('mongoose');
//const dotenv = require('dotenv');

//dotenv.config({ path: './config.env' });
const app = require('./app');

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config({ path: './config.env' });
}

const DB = process.env.DATABASE;

/* execute: async () => {
  let timeout = 25;
  while (mongoose.connection.readyState === 0) {
    if (timeout === 0) {
      console.log('timeout');
      throw new Error('timeout occured with mongoose connection');
    }
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    timeout--;
  }
  console.log('Database connection status:', mongoose.connection.readyState);
};

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('app running on port 4000');
}); */

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
  })
  .then(() => {
    console.log('DB connection successful!');
    console.log(mongoose.connection.readyState);
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
