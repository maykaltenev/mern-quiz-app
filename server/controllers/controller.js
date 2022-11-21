import Questions from "../models/questionsSchema.js";
import Result from "../models/ResultSchema.js";

/** get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
    res.json("questions api get req")
}
/** insert all questions */
export async function insertQuestions(req, res) {
    res.json("questions api post request");
}
/** delete all questions */
export async function dropQuestions(req, res) {
    res.json("questions api delete request");
}
/** delete all result */
export async function getResult(req, res) {
    res.json("result api get request")
}
/** post all result */
export async function storeResult(req, res) {
    res.json("result api post request")
}
/** delete all result */
export async function droptResult(req, res) {
    res.json("result api delete request")
}