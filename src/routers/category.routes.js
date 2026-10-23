import { Router } from "express";
import {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from "../controllers/category.controller.js";

export const categoryRoutes = Router();

categoryRoutes.post("/categories", createCategory);
categoryRoutes.get("/categories", getAllCategories);
categoryRoutes.get("/categories/:id", getCategoryById);
categoryRoutes.put("/categories/:id", updateCategory);
categoryRoutes.delete("/categories/:id", deleteCategory);
