import express from 'express';
import { GetMomentDataReq } from '../../frontend/src/routes/moment';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send({});
});

app.post('/getPrices', (req, res) => {
  const { url } = req.body as GetMomentDataReq;
  res.send({});
});

app.listen(port, () => {
  return console.log(`Server is listening on https://localhost:${port}/...`);
});
