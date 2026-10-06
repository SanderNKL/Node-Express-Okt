import express from "express";


const app = express();

// Vårt første endepunkt!
app.get('/pokemons', (req, res) => {
    res.json({ message: "Hello world!" });
})

/* Routes */


const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})