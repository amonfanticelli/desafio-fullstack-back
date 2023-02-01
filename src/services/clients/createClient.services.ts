import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { IClientRequest } from "../../interfaces/clients";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const createClientService = async ({
  fullName,
  email,
  cellphone,
  password,
}: IClientRequest): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const hashedPassword = await hash(password, 10);
  const clientAlreadyExists = await clientRepository.findOneBy({
    email: email,
  });
  if (clientAlreadyExists) {
    throw new AppError("Email already exists");
  }

  if (!password) {
    throw new AppError("Password is missing");
  }
  const client = await clientRepository.create({
    fullName,
    email,
    cellphone,
    password: hashedPassword,
  });
  await clientRepository.save(client);

  return client;
};

export { createClientService };
