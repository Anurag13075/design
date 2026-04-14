import express from "express";
const app = express();
import { connect } from "./db/db.js";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();
import { googleauth } from "./auth/googleauth.js";


app.use(express.json());

app.use(cors());

app.use('/google', googleauth)
connect()

app.listen(3000)