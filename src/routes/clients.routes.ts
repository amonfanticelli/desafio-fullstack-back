import { Router } from "express";
import { softDeleteClientController } from "../controllers/clients/softDeleteClient.controller";
import { updateClientController } from "../controllers/clients/updateClient.controller";
import { listClientByIdController } from "../controllers/clients/listClientById.controller";
import { listClientsController } from "../controllers/clients/listClients.controller";
import { createClientController } from "../controllers/clients/createClient.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const clientRoutes = Router();

clientRoutes.post("/users", createClientController);
clientRoutes.get("/users", ensureAuthMiddleware, listClientsController);
clientRoutes.get("/user", ensureAuthMiddleware, listClientByIdController);
clientRoutes.patch("/users", ensureAuthMiddleware, updateClientController);
clientRoutes.delete("/users", ensureAuthMiddleware, softDeleteClientController);

export { clientRoutes };
