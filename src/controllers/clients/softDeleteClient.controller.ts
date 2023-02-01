import { Request, Response } from "express";
import { softDeleteClientService } from "../../services/clients/softDeleteClient.services";

const softDeleteClientController = async (req: Request, res: Response) => {
  await softDeleteClientService(req.params.id);
  return res.status(204).json();
};

export { softDeleteClientController };
