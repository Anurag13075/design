import { Router } from "express";
import { googleauth } from "../auth/googleauth.js";

const app = Router();

app.post('/auth', googleauth);

export default app;
