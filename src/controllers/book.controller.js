    import { booksModel } from "../models/book.model.js";


export const createBook = async (req, res) => {
    try {
        const { bookname, synopsis } = req.body;
        const newBook = await personModel.create({ bookname, synopsis });

        return res.status(201).json({
            msg: "Se creo la persona correctamente",
            data: newBook,
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor al crear el libro",
        });
    }
};

export const getAllbooks = async (req, res) => {
    try {
        const book = await booksModel.find();

        return res.status(200).json({
            data: book,
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir los libros",
        });
    }
};

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
            msg: "Error interno del servidor al conseguir la persona",
        });
    }
};

export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookname, synopsis } = req.body;
        const updatedPerson = await personModel.findByIdAndUpdate(id,
            {  bookname, synopsis }, { returnDocument: "after" }
        );

        return res.status(201).json({
            msg: "Se actualizo correctamente",
            data: updatedPerson,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al actualizar la book",
        });
    }
};

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await personModel.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "Se elimino correctamente",
            data: deletedBook,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al eliminar el libro",
        });
    }
};