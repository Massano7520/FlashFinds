const mongoose = require('mongoose');

// Função para garantir conexão singleton com Mongoose
async function ensureDBConnection() {
  if (mongoose.connection.readyState === 1) {
    // Já conectado
    return;
  }
  try {
    const DB = process.env.DATABASE.replace(
      '<db_password>',
      process.env.DATABASE_PASSWORD
    );
    await mongoose.connect(DB, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000 // timeout de 10s
    });
    console.log('DB connected');
  } catch (err) {
    console.error('DB connection error:', err);
    throw err;
  }
}

module.exports = ensureDBConnection;
