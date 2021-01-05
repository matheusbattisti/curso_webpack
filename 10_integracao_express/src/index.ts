import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world'
  })
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta: " + PORT);
});