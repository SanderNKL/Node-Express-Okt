import express from "express";

import { getAllCards } from "../controllers/cards/getAllCards.js";
import { addCard } from "../controllers/cards/addCard.js";

import { validate } from "../middleware/validate.js";
import { addCardSchema } from "../schemas/card.add.schema.js";


const router = express.Router();

// localhost:8000/cards
router.get('/', getAllCards)
router.post('/', validate(addCardSchema), addCard)

export default router;