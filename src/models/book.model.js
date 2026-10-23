import { Schema, model, Types } from "mongoose";

const booksSchema = new Schema(
    {
        bookname: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            required: true,
        },
        category: [
            {
                type: Types.ObjectId,
                ref: "Category",
            },
        ],
    },
);

export const booksModel = model("Books", booksSchema);