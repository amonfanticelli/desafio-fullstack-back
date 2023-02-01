import { Router } from "express";
import { softDeleteClientController } from "../controllers/clients/softDeleteClient.controller";
import { updateClientController } from "../controllers/clients/updateClient.controller";
import listClientsController from "../controllers/clients/listClients.controller";
import { createClientController } from "../controllers/clients/createClient.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const clientRoutes = Router();

clientRoutes.post("", createClientController);
clientRoutes.get("", ensureAuthMiddleware, listClientsController);
clientRoutes.patch("", ensureAuthMiddleware, updateClientController);
clientRoutes.patch("", ensureAuthMiddleware, softDeleteClientController);

export { clientRoutes };
