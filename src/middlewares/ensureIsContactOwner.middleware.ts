import { Request, Response, NextFunction } from "express";
import { useContainer } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clients.entities";
import { Contact } from "../entities/contacts.entities";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    id:
  });
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({
    client: req.params.id
  });
  if (!req.client.id === contact?.id) {
   
    return res.status(403).json({
      message: "You are not the owner",
    });
  }
  return next();
};

export default ensureIsAdmMiddleware;
