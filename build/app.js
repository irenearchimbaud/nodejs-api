import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const app = express();
// Middlewares globaux
app.use(express.json());
app.use(cors());
app.use(helmet());
// Route de test
app.get('/', (_req, res) => {
  res.send('API Todo en ligne 🎉');
});
export default app;
