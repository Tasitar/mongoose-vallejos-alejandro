import { Router } from "express";
import {createBook,getAllBooks,getBookById,updateBook,deleteBook,} from "../controllers/book.controller.js";

export const bookRoutes = Router();

bookRoutes.post("/books", createBook);

bookRoutes.get("/books", getAllBooks);

bookRoutes.get("/books/:id", getBookById);

bookRoutes.put("/books/:id", updateBook);

bookRoutes.delete("/books/:id", deleteBook);
