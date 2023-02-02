import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { Contact } from "../../entities/contacts.entities";
import { AppError } from "../../errors/appError";

const listContactsInClientService = async (
  clientId: string
): Promise<Contact[]> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  const clients = await clientRepository.findOneBy({
    id: clientId,
    // where: {
    //   id: contactId,
    // },
    // relations: {
    //   client: true,
    // },
  });

  if (!clients) {
    throw new AppError("Contact not found", 404);
  }

  return clients.contacts;
};

export { listContactsInClientService };
