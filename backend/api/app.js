import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';

import models from './models/index.js';
import cors from 'cors';

const app = express();
mongoose.connect('mongodb://localhost:27017/Todoapp'); // Connection string for specific database
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);


export default app;