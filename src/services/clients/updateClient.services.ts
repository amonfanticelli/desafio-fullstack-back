import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { IClientUpdate } from "../../interfaces/clients";
import { AppError } from "../../errors/appError";
import { hash } from "bcrypt";

const updateClientService = async (
  { fullName, email, cellphone, password, isActive }: IClientUpdate,
  id: string,
  bodyId: string
): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    id: id,
  });

  if (isActive !== undefined || bodyId !== undefined) {
    throw new AppError("Cannot update isActive or Id properties", 401);
  }

  if (!client) {
    throw new AppError("user not found!", 404);
  }

  await clientRepository.update(id, {
    fullName: fullName ? fullName : client.fullName,
    email: email ? email : client.email,
    cellphone: cellphone ? cellphone : client.cellphone,
    password: password ? await hash(password, 10) : client.password,
  });

  const updatedClient = await clientRepository.findOneBy({
    id,
  });

  return updatedClient!;
};

export { updateClientService };
