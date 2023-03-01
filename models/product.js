const mongo = requiere('mongoose');

const productSchema= new moongose.Schema(
    {
        id:Number,
        name:{
            type: String,
            required: true
        },
        prouct: String,
        descripton: String,
        price: Number,
        image: String,
    }
);


module.exports = mongo.Schema('product',productSchema);