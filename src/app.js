import "dotenv/config";
import express from "express";

import userRouter from "./routes/userRouter.js";
import cardsRouter from "./routes/cardsRouter.js"
import sequelize from "./config/database.js";


const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// DETTE TESTER KUN OM VI KAN KOBLE OSS TIL. DEN HAR INGEN VIKTIG FUNKSJON
try {
    await sequelize.authenticate();
    console.log('Database connected!!!')
} catch (err) {
    console.log('Failed to connect to database:', err)
}

// Vårt første endepunkt!
app.get('/', (req, res) => {
    res.json({ message: "Hello world!" });
})

/* Routes */
app.use('/cards', cardsRouter);
app.use('/users', userRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})