import express from "express";
import { connect } from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";
import {limiter} from "./limmiter/rate-limit.js";
dotenv.config();

import googleRoutes from "./routes/googleroute.js";
import designRoutes from "./routes/designroute.js";

const app = express();
app.use(limiter);


app.use(express.json());
app.use(cors());

app.use('/google', googleRoutes);
app.use('/api/designs', designRoutes);

connect();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});