import { Request, Response } from "express";
import { createClientService } from "../../services/clients/createClient.services";

const createClientController = async (req: Request, res: Response) => {
  const createdClient = await createClientService(req.body);

  return res.status(201).json(createdClient);
};

export { createClientController };
