import express, { request, response } from "express";
import { port, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";
import router from "./routes/booksRoute.js";
const app = express();

//middleware to parse req body
app.use(express.json());

// app.use(cors());

app.use(
    cors({
        origin:'http://localhost:3000',
        methods:['GET','PUT','POST','DELETE'],
        allowedHeaders:['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('My name is Anit');

});

app.use('/books', router);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to DB');
        app.listen(port, () => {
            console.log('App is listening to port: ${port}');
        });
    })
    .catch((error) => {
        console.log(error.message);
    });