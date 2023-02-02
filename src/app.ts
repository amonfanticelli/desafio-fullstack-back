import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { contactRoutes } from "./routes/contacts.routes";
import { clientRoutes } from "./routes/clients.routes";
import { sessionRoutes } from "./routes/sessions.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/contacts", contactRoutes);
app.use("/users", clientRoutes);
app.use("/session", sessionRoutes);
app.use(handleErrorMiddleware);

export { app };
