import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send({});
});

app.post('/getPrices', (req, res) => {
  console.log(req.body);
  res.send({});
});

app.listen(port, () => {
  return console.log(`Server is listening on https://localhost:${port}/...`);
});
