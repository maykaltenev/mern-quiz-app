import { Router } from "express";
const router = Router();
/** Questions Routes API */

router.get('/questions', (req, res) => {
    res.json("questions api get req")
})



export default router;