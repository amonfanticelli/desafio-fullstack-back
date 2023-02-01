import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entities";
import { Contact } from "../../entities/contacts.entities";
import { AppError } from "../../errors/appError";

const listContactsInClientService = async (
  contactId: string
): Promise<Contact> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      client: true,
    },
  });

  if (!contacts) {
    throw new AppError("Contact not found", 404);
  }

  return contacts;
};

export { listContactsInClientService };
