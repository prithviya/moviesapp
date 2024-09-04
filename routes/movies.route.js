import express from "express";
const router = express.Router();

// C - creating movie
router.post('/movie', ()=> {});
// R - Reading movie
router.get('/movies', ()=> {});

// U - updating movie
router.put('/movies/:id', ()=> {});

// D - deleting movie
router.delete('/movies/:id', ()=> {});

export default router;