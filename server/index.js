import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL)

    if (conn) {
        console.log('MongoDB Connected');
    }
    else {
        console.log('Failure in connection')
    }
}
connectDB();

app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "server is working successfully!!!"
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
