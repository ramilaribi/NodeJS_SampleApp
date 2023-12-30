import ProductM from "../models/productM.js";


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
        const {name , description, image , price} = req.body 

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
const productId = req.body.productId;
const {name , description, image , price} = req.body 
const update = {name , description, image , price};

const m= ProductM.findByIdAndUpdate(productId,update ,{new : true})
res.status(200).json(m);
}catch(error) {
        console.log(error);
        res.status(500).json('an error has occured')
    }
};

async function deleteP (req ,res ){
    try {
        const productId = req.body.productId;
    const m = ProductM.findByIdAndDelete(productId);
    res.status(200).json("Product removed succsffuly")
    }catch(error) {
        console.log(error);
        res.status(500).json('an error has occured')
    }
    
};
export {getall,getbyId,add,deleteP,update};