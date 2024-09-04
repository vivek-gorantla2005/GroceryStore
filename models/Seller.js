import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    storename:{
        type:String,
        required:true
    },
    storedescription:{
        type:String,
        required:true
    },
    storeaddress:{
        type:String,
        required:true
    },
    storecontact:{
        type:String,
        required:true
    },
})

const Seller = mongoose.models.Seller || mongoose.model('Seller',SellerSchema)
export default Seller;