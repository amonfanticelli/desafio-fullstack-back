import { Router } from "express";
import { createContactController } from "../controllers/contacts/createContact.controller";
import { listContactsInClientController } from "../controllers/contacts/listContactsInClient.controller";
import { deleteContactController } from "../controllers/contacts/deleteContact.controller";
import { updateContactController } from "../controllers/contacts/updateContact.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.get("", ensureAuthMiddleware, listContactsInClientController);
contactRoutes.post("", ensureAuthMiddleware, createContactController);
contactRoutes.patch("/:id", ensureAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export { contactRoutes };
