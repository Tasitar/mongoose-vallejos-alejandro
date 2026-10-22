import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const newUser = await UserModel.create({username, email, password}
        );

        return res.status(201).json({
            msg: "Se creo el usuario Correctamente",
            data: newUser,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Error interno del server al crear el usuario"
        })
    }
}



export const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find()

            return res.status(201).json({
                data: users
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al conseguir los users"
        })
    }
}




export const getUserById = async (req, res) => {
    try {
        

    } catch (error) {
        
    }
}
export const updateUser = async (req, res) => {
    try {
        

    } catch (error) {
        
    }
}
export const deleteUser = async (req, res) => {
    try {
        

    } catch (error) {
        
    }
}