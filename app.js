require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client } = require('pg'); // Certifique-se de que isso está aqui

const app = express();
app.use(cors());
app.use(express.json());

// 1. Você PRECISA definir o client aqui em cima, antes das rotas
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 2. Conectar ao banco
client.connect()
  .then(() => console.log("✅ Conectado ao banco com sucesso!"))
  .catch(err => console.error("❌ Erro ao conectar:", err));

// 3. Agora as rotas podem usar o 'client'
app.get('/stacks', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM stacks ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

app.post('/mover', async (req, res) => {
    try {
      const { id } = req.body;
      await client.query("UPDATE stacks SET lado = 'direita' WHERE id = $1", [id]);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

app.post('/voltar', async (req, res) => {
  try {
    const { id } = req.body;
    await client.query("UPDATE stacks SET lado = 'esquerda' WHERE id = $1", [id]);
    res.json({ sucess: true });
  } catch (err) {
    console.error(err)
    res.status(500).json({error: err.message });
  }
})

app.listen(3000, () => console.log("🚀 Back-end rodando em http://localhost:3000"));