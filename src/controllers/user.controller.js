import { UserModel } from "../models/user.model.js";
import { userRoutes } from "../routers/user.routes.js";

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
           const { id } = req.params
        
           const userID = await UserModel.findById(id)
           
           return res.status(201).json({
            data: userID
           })

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            msg: "Error interno del servidor al conseguir los users por id"
        })
    }
}
export const updateUser = async (req, res) => {
    try {
            const { id } = req.params
            const {username, email, password} = req.body

            const updateUser = await UserModel.findByIdAndDelete(id,
                {username, email, password}, {returnDocument: "after"}
            )

            return res.status(201).json({
                msg: "se actualizo correctamente",
                data: updateUser
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error interno del servidor al actualizar el user",
    });
    }
}
export const deleteUser = async (req, res) => {
    try {
        
        const { id } = req.params

        const deleteUser = await UserModel.findByIdAndDelete(id)

        return res.status(201).json({
            msg: "se elimino correctamente",
            data: deleteUser
        })

    } catch (error) {
                return res.status(500).json({
            msg: "error interno del servidor al aliminar una cuenta",
        })
    }
}