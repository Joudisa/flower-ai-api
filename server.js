// server.js

const express = require('express');

const cors = require('cors');


const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

// Beispiel-Endpunkt für dein KI-Bild
app.post('/api/v1/predictions', (req, res) => {
  const prompt = req.body.prompt;
  console.log('Prompt erhalten:', prompt);

  // Hier würde dein KI-Code stehen – als Platzhalter:
  res.json({ imageUrl: 'https://example.com/fake-image.png', prompt });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
