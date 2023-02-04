import { Request, Response } from "express";
import { listClientByIdService } from "../../services/clients/listClientById.services";

const listClientByIdController = async (req: Request, res: Response) => {
  const client = await listClientByIdService(req.client.id);

  return res.json(client);
};

export { listClientByIdController };
