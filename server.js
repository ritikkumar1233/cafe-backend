import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);


app.use(express.json());
mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.7rykw6s.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

app.use("/api/users", userRouter);



// app.use(express.json());
// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });


// app.use(express.json());
// mongoose.connect(`mongodb://${dbpass}:${dbpass}@localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });