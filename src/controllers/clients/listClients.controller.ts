import { Request, Response } from "express";
import { listClientsService } from "../../services/clients/listClients.services";

const listClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();

  return res.json(clients);
};

export default listClientsController;
