import { Router } from "express";

import {
    generateDesign,
    createDesign,
    getAllDesigns,
    getDesignById,
    updateDesign,
    deleteDesign
} from "../controllers/designcontroller.js";

const router = Router();

router.post("/generate", generateDesign);
router.post("/", createDesign);
router.get("/", getAllDesigns);
router.get("/:id", getDesignById);
router.put("/:id", updateDesign);
router.delete("/:id", deleteDesign);

export default router;
