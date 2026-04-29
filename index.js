const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, 'public')));

// Express 5: named splat instead of '*' (path-to-regexp v8)
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[ALUFICIO] Servidor rodando na porta ${PORT}`);
});
