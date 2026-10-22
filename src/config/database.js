import mongoose from "mongoose";

export const startDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/primerPracticoMongo')

        console.log("Se conecto a la BD mongo");
    } catch (error) {
        console.error("No se pudo conectar la BD", error);
        throw error;
    }
}