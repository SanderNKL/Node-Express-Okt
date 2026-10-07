import express from "express";

import userRouter from "./routes/userRouter.js";


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Vårt første endepunkt!
app.get('/', (req, res) => {
    res.json({ message: "Hello world!" });
})

/* Routes */
app.use('/users', userRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})