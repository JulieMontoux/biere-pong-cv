const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cvInfo.db', (err) => {
  if (err) {
    console.error('Erreur d\'ouverture de la base de données:', err.message);
  }
  console.log('Connecté à la base de données SQLite');
});

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS info (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT)');

  const stmt = db.prepare('INSERT INTO info (description) VALUES (?)');
  stmt.run('Expérience: Développeur Web');
  stmt.run('Stage: Développement Backend');
  stmt.run('Hobbies: Gaming, Sport');
  stmt.run('test4');
  stmt.run('test5');
  stmt.run('test6');
  stmt.run('test7');
  stmt.run('test8');
  stmt.run('test9');
  stmt.finalize();
});

db.close();
