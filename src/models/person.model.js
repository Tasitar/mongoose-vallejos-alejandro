import { Schema, model } from "mongoose";

const personSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        adress: {
            type: String,
            required: true
        }
    }
)
export const personModel = model("Person", personSchema)