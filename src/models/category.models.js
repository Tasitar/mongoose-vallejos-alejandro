import { Schema, model } from "mongoose";

const categorySchema = new Schema(
    {
        tag: {
            type: String,
            required: true,
        }
    }
)
export const categoryModel = model("Category", categorySchema)