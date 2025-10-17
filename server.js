const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
  })
  .then(() => console.log('DB connection succsesful!'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('app running on port 4000');
});
