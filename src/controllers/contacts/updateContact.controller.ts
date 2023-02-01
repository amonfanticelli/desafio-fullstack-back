import { Request, Response } from "express";
import { updateClientService } from "../../services/clients/updateClient.services";

const updateContactController = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  const updatedClient = await updateClientService(
    req.body,
    req.client.id,
    req.body.id
  );
  return res.json(updatedClient);
};

export { updateContactController };
