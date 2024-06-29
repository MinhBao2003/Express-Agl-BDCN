const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Đọc dữ liệu từ file JSON và gửi về client
app.get('/tivi', (req, res) => {
  fs.readFile('tivi.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.get('/phone', (req, res) => {
  fs.readFile('phone.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
