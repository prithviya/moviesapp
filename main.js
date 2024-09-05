import express from "express";
import movieRoutes from './routes/movies.route.js';  // Ensure the extension is .js

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ msg: "Hello world !!!" });
});

// CRUD Functionality of movies
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
