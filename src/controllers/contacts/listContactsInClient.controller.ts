import { Request, Response } from "express";
import { listContactsInClientService } from "../../services/contacts/listContactsInClient.services";

const listContactsInClientController = async (req: Request, res: Response) => {
  const createdContact = await listContactsInClientService(req.client.id);

  return res.status(201).json(createdContact);
};

export { listContactsInClientController };
