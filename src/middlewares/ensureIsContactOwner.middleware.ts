import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clients.entities";
import { Contact } from "../entities/contacts.entities";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  //   const clientRepository = AppDataSource.getRepository(Client);
  //   const client = await clientRepository.findOneBy({
  //     id:id
  //   });
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({
    id,
  });
  if (req.client.id === contact?.client.id) {
    return next();
  } else {
    return res.status(403).json({
      message: "You are not the owner",
    });
  }
};

export default ensureIsAdmMiddleware;
