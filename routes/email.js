import express from "express";
import {  email } from "../controllers/email.js";
import { multipleUpload } from "../middleware/multer.js";


const router = express.Router();


router.post("/email", multipleUpload, email);




export default router;