import ProductM from "../models/productM.js";
import multer from"multer";

async function getall (req ,res){
try {
    const m = await ProductM.find();
    res.status(200).json(m);

}catch(error) {
    console.log(error);
    res.status(500).json('an error has occured')
}



};

async function getbyId (req ,res ){
    try {
const productId = req.params.id ;

const m = ProductM.findById(productId);
if (!m){
    res.status(404).json('not found')
}
res.status(200).json(m)
    }catch(error) {
        console.log(error);
        res.status(500).json('an error has occured')
    }
    
};

async function add (req ,res ){

    try {
        const {name , description , price} = req.body // the image should not appear on const required from the body raw {}

        ///////multer config/////
        const image = req.file ? req.file.filename : null;
        ///////multer config/////

var newProduct = new ProductM({
    name ,  
    description ,
    image,
    price,
});

await newProduct.save();
res.status(200).json(newProduct);
    }catch(error) {
        console.log(error);
        res.status(500).json('an error has occured')
    }
};

async function update (req ,res ){
    try {
const {productId,name , description, image , price} = req.body 
const update = {name , description, image , price};

const m= await ProductM.findByIdAndUpdate(productId,update ,{new : true})
res.status(200).json(m);
}catch(error) {
        console.log(error);
        res.status(500).json('an error has occured')
    }
};

async function deleteP (req ,res ){
    try {
        const productId = req.body.productId;
        console.log(productId);
    const m = await ProductM.findByIdAndDelete( productId);
    console.log(m);
   if (m) {
            return res.status(200).json("Product removed successfully");
        } else {
            return res.status(404).json("Product not found");
        }
    }catch(error) {
        console.log(error);
        res.status(500).json('an error has occured')
    }
    
};
export {getall,getbyId,add,deleteP,update};