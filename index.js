const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MELON API Siap!');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Contoh akun sementara
  if (email === 'owner@melon.com' && password === '123456') {
    return res.status(200).json({ nama: 'Owner MELON' });
  }

  return res.status(401).json({ message: 'Email atau password salah' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
