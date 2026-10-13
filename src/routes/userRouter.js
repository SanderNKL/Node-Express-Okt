import express from "express";

import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { getUserByEmail } from "../controllers/getUserByEmail.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../schemas/user.create.schema.js";
import { deleteUserSchema } from "../schemas/user.delete.schema.js";


const router = express.Router();

// GET: localhost:8000/users - henter alle brukere
// GET: localhost:8000/users/sander@jobloop.no - henter en bruker
router.get('/', getAllUsers);
router.post('/', validate(createUserSchema), createUser);
router.get('/:email', validate(getUserByEmail), getUserByEmail);
router.delete('/:email', validate(deleteUserSchema), deleteUser)

// DELETE: localhost:8000/users/sander@jobloop.no

export default router;