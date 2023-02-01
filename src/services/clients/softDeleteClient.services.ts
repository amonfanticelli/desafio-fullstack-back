import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { AppError } from "../../errors/appError";

const softDeleteClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    id: id,
  });
  if (!client) {
    throw new AppError("user not found!", 404);
  }

  if (!client.isActive) {
    throw new AppError("user already soft deleted");
  }

  await clientRepository.update(id, {
    isActive: false,
  });
};

export { softDeleteClientService };
