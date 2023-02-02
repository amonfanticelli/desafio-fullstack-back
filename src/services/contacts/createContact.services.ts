import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { IContactRequest } from "../../interfaces/contacts";
import { AppError } from "../../errors/appError";
import { Client } from "../../entities/clients.entities";

const createContactService = async (
  { fullName, email, cellphone }: IContactRequest,
  clientId: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const clientExists = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!clientExists) {
    throw new AppError("User not found");
  }
  const contactAlreadyExists = await contactRepository.findOneBy({
    email: email,
  });
  if (contactAlreadyExists) {
    throw new AppError("Email already exists");
  }

  const contactCellAlreadyExists = await contactRepository.findOneBy({
    cellphone: cellphone,
  });
  if (contactCellAlreadyExists) {
    throw new AppError("Cellphone already exists");
  }

  const contact = contactRepository.create({
    fullName,
    email,
    cellphone,
    client: clientExists,
  });
  await contactRepository.save(contact);

  return { ...contact, fullName, email, cellphone };
};

export { createContactService };
