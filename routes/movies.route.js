import express from "express";
const router = express.Router();

// C - Creating movie
router.post('/', (req, res) => {
    res.send("creating new movie list using post")
 });
// R - Reading movie
router.get('/', (req, res) => { 
    res.send("Reading all movie list using get")
});

// U - Updating movie
router.put('/:id', (req, res) => { 
    res.send("Updating particular a movie")
});

// D - Deleting movie
router.delete('/:id', (req, res) => {
    res.send("deleting particular a movie in the list")
 });

export default router;
