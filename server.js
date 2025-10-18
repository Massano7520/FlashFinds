const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;

async function startServer() {
  try {
    await mongoose.connect(DB, {
      //useNewUrlParser: true,
      //useUnifiedTopology: trues
    });
    console.log('DB connection successful!');

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log('App running on port', port);
    });
  } catch (error) {
    console.error('DB connection error:', error);
  }
}

startServer();

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
