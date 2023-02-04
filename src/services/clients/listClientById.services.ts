import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";

const listClientByIdService = async (clientId: string): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: clientId,
  });

  return client!;
};

export { listClientByIdService };
