require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/second', (req, res) => {
  res.send('This is the second message')
})

app.get('/line-items', async (req, res) => {
  try {
    const items = await prisma.line_items.findMany();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})