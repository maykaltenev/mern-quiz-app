import mongoose from "mongoose";

export default async function connect() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
    console.log("Database connect!")
}
