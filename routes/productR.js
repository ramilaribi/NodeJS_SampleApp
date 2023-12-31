import {getall,getbyId,add,deleteP,update} from "../controllers/productC.js";

import Router from "express";
import multer from "multer";
const router = Router();

//////////multer config ////////
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/"); // Set the destination folder for uploads
    },
    filename: (req, file, cb) => {
      cb(null,req.body["name"]+ Date.now() +".jpeg"); // Set the filename
    },
  });
  
  const upload = multer({ storage: storage });
//////////multer config ////////

router.get("/getall",getall);
router.get("/",getbyId);
router.post("/add",upload.single('image'),add);
router.delete("/delete",deleteP);
router.put("/update",update);





export default router ;