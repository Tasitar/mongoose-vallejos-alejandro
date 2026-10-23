    import { personModel } from "../models/person.model.js";

export const createPerson = async (req, res) => {
    try {
        const { name, lastname, adress } = req.body;
        const newPerson = await personModel.create({ name, lastname, adress });

        return res.status(201).json({
            msg: "Se creo la persona correctamente",
            data: newPerson,
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor al crear la persona",
        });
    }
};

export const getAllPeople = async (req, res) => {
    try {
        const people = await personModel.find();

        return res.status(200).json({
            data: people,
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir las personas",
        });
    }
};

export const getPersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await personModel.findById(id);

        return res.status(200).json({
            data: person,
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
        const { name, lastname, adress } = req.body;
        const updatedPerson = await personModel.findByIdAndUpdate(id,
            { name, lastname, adress }, { returnDocument: "after" }
        );

        return res.status(201).json({
            msg: "Se actualizo correctamente",
            data: updatedPerson,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al actualizar la persona",
        });
    }
};

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPerson = await personModel.findByIdAndDelete(id);

        return res.status(201).json({
            msg: "Se elimino correctamente",
            data: deletedPerson,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al eliminar la persona",
        });
    }
};