import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/route.js'
import mongoose from 'mongoose';
const app = express();

/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
dotenv.config();

/** application port */
const port = process.env.PORT || 8080;

/** routes */
app.use('/api', router) /** apis */

app.get('/', (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error);
    }
})
/** start server only when we have connection */
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
    .then(() => {
        console.log("Database connected! 🟢");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("❌");
    });

app.listen(port, () =>
    console.log(`The server is listening on port ${port} ... 🐒`)
);