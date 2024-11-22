import express from 'express';
import dotenv from 'dotenv';
import dbConnect from "../config/database.js";
import router from "../routes/feedRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/v1', router); 

dotenv.config();
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/",(req,res)=>
  {res.send("Successful");})
