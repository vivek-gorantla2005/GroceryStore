import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title : {
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    category : {
        type: 'string',
        required: true
    },
    image:{
        type: 'string',
        required: true
    },
    quantity:{
        type: 'number',
        required: true
    },
    price:{
        type: 'number',
        required: true
    },
    popular:{
        type: 'boolean',
        default: false
    }
})

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;