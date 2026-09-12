import express from "express";
import cors from "cors";
import airoutes from "./routes/airoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", airoutes);

app.listen(5000, () => {
  console.log("server is running on port number 5000");
});
