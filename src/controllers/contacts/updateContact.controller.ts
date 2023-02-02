import { Request, Response } from "express";
import { updateContactService } from "../../services/contacts/updateContact.services";

const updateContactController = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  const updatedClient = await updateContactService(
    req.body,
    req.params.id,
    req.body.id
  );
  return res.json(updatedClient);
};

export { updateContactController };
