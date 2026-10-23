import { categoryModel } from "../models/category.models.js";

export const createCategory = async (req, res) => {
    try {
        const { tag } = req.body;
        const newCategory = await categoryModel.create({ tag });

        return res.status(201).json({
            msg: "Se creo la categoría correctamente",
            data: newCategory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al crear la categoria",
        });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();

        return res.status(200).json({
            data: categories,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir las categorías",
        });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findById(id);

        return res.status(200).json({
            data: category,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir la categoría",
        });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { tag } = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            id,
            { tag },
            { returnDocument: "after" }
        );

        return res.status(201).json({
            msg: "Se actualizó correctamente",
            data: updatedCategory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al actualizar la categoría",
        });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "Se eliminó correctamente",
            data: deletedCategory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al eliminar la categoría",
        });
    }
};
