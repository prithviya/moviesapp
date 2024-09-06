import express from "express";
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate  } from "../controllers/movies.controllers";



const router = express.Router();

// C - Creating movie
router.post('/', MovieCreate);
// R - Reading movie
router.get('/', MovieIndex);

// U - Updating movie
router.put('/:id', MovieUpdate);

// D - Deleting movie
router.delete('/:id', MovieDelete);

export default router;
