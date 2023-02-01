import { Router } from "express";
import { softDeleteClientController } from "../controllers/clients/softDeleteClient.controller";
import { updateClientController } from "../controllers/clients/updateClient.controller";
import listClientsController from "../controllers/clients/listClients.controller";
import { createClientController } from "../controllers/clients/createClient.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", createcontactController);
contactRoutes.get("", ensureAuthMiddleware, listcontactsController);
contactRoutes.patch("", ensureAuthMiddleware, updatecontactController);
contactRoutes.patch("", ensureAuthMiddleware, softDeletecontactController);

export { contactRoutes };
