import express from "express";
import { Banker } from "../entities/Banker";

const router = express.Router();

router.delete("/api/banker/:bankerId", async (req, res) => {
    const { bankerId } = req.params;

    const response = await Banker.delete(parseInt(bankerId));

    return res.json(response)
})

export { router as deleteBankerRouter }