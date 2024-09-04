import express from "express";
import movieRoutes from './routes/movies.route';

const app = express();
const PORT = 3000;

 app.get('/', (req,res)=>{
    res.json({msg : "HEllo wordld"})
 })

// CRUD Functionality of movies
// client ----> server = middleware
// go flow client --> middleware --> server 
app.use("/movies", movieRoutes);

 app.listen(PORT,()=>
{
    console.log(`the server is running at http://localhost:${PORT}`);
})