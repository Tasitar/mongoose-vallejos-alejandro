import { Router } from "express";
import {createPerson,deletePerson,getAllPeople,getPersonById,updatePerson,} from "../controllers/person.controller.js";

export const personRoutes = Router();

personRoutes.post("/persons", createPerson);

personRoutes.get("/persons", getAllPeople);

personRoutes.get("/persons/:id", getPersonById);

personRoutes.put("/persons/:id", updatePerson);

personRoutes.delete("/persons/:id", deletePerson);