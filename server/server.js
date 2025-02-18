const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./cvInfo.db', (err) => {
  if (err) {
    console.error('Erreur d\'ouverture de la base de données:', err.message);
  }
  console.log('Connecté à la base de données SQLite');
});

app.get('/api/info', (req, res) => {
  db.all('SELECT * FROM info', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
