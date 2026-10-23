import { booksModel } from "../models/book.model.js";

export const createBook = async (req, res) => {
    try {
        const { bookname, synopsis,category } = req.body;
        const newBook = await booksModel.create({ bookname, synopsis,category });

        return res.status(201).json({
            msg: "Se creó el libro correctamente",
            data: newBook,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor al crear el libro",
        });
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const books = await booksModel.find();

        return res.status(200).json({
            data: books,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir los libros",
        });
    }
};

export const getAllbooks = getAllBooks;

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await booksModel.findById(id);

        return res.status(200).json({
            data: book,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir el libro",
        });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookname, synopsis } = req.body;
        const updatedBook = await booksModel.findByIdAndUpdate(
            id,
            { bookname, synopsis },
            { returnDocument: "after" }
        );

        return res.status(201).json({
            msg: "Se actualizó correctamente",
            data: updatedBook,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al actualizar el libro",
        });
    }
};

export const updatePerson = updateBook;

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await booksModel.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "Se eliminó correctamente",
            data: deletedBook,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al eliminar el libro",
        });
    }
};

export const deletePerson = deleteBook;