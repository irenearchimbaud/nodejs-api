import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.get('/', (_req, res) => {
    res.send('API Todo en ligne 🎉');
});
app.use(errorHandler);
export default app;
