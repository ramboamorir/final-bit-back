import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name:{
            type: String,
        },
        category:{
            type: String,
        },
        price:{
            type: Number,
        },
        weight:{
            type: Number,
        }
    },
    {versionKey: false, timestamps: true},
);

export default model('Product', productSchema);