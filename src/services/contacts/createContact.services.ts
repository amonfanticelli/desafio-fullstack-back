import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { IClientRequest } from "../../interfaces/clients";
import { AppError } from "../../errors/appError";

const createClientService = async ({
  fullName,
  email,
  cellphone,
}: IClientRequest): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

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

  const contact = await contactRepository.create({
    fullName,
    email,
    cellphone,
  });
  await contactRepository.save(contact);

  return contact;
};

export default createClientService;
