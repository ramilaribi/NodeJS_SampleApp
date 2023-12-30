import {getall,getbyId,add,deleteP,update} from "../controllers/productC.js";

import Router from "express";

const router = Router();

router.get("/getall",getall);
router.get("/",getbyId);
router.post("/add",add);
router.delete("/delete",deleteP);
router.put("/update",update);





export default router ;