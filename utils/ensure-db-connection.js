const mongoose = require('mongoose');

// Função para garantir conexão singleton com Mongoose
async function ensureDBConnection() {
  if (mongoose.connection.readyState === 1) {
    // Já conectado
    return;
  }
  try {
    await mongoose.connect(process.env.DATABASE, {
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
