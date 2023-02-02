import { Request, Response } from "express";
import { createContactService } from "../../services/contacts/createContact.services";

const createContactController = async (req: Request, res: Response) => {
  const createdContact = await createContactService(req.body, req.client.id);

  return res.status(201).json(createdContact);
};

export { createContactController };
