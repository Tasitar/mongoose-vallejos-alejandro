import { Schema, Types, model } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },

        person: {
            type: Types.ObjectId,
            ref: "Person",
            requierd: true,
            unique: true,
        }
    }
)
export const UserModel = model("User", userSchema)