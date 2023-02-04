import { AppDataSource } from "../../data-source";
import { IClientLogin } from "../../interfaces/clients";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { Client } from "../../entities/clients.entities";

const createSessionService = async ({
  email,
  password,
}: IClientLogin): Promise<object> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    email: email,
  });
  if (!client) {
    throw new AppError("Invalid user or password", 401);
  }
  const passwordMatch = await compare(password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 401);
  }
  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: client.id,
  });

  const user = { client, token };

  return user;
};
export { createSessionService };
