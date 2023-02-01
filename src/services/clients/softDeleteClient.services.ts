import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { AppError } from "../../errors/appError";

const softDeleteUserService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    id: id,
  });
  if (!client) {
    throw new AppError("client not found!", 404);
  }

  if (!client.isActive) {
    throw new AppError("client already soft deleted");
  }

  await clientRepository.update(id, {
    isActive: false,
  });
};

export default softDeleteUserService;
