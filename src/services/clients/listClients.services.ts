import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";

const listClientsService = async (): Promise<Client[]> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  return clients;
};

export { listClientsService };
