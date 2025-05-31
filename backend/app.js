require('dotenv').config();
const express = require('express');
const axios = require('axios');
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

app.get('/fastapi', async (req, res) => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('FastAPI request failed');
  }
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