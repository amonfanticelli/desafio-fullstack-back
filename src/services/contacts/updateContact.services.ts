import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { IClientUpdate } from "../../interfaces/clients";
import { AppError } from "../../errors/appError";

const updateContactService = async (
  { fullName, email, cellphone, isActive }: IClientUpdate,
  id: string,
  bodyId: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({
    id: id,
  });

  if (isActive !== undefined || bodyId !== undefined) {
    throw new AppError("Cannot update isActive or Id properties", 401);
  }

  if (!contact) {
    throw new AppError("contact not found!", 404);
  }

  await contactRepository.update(id, {
    fullName: fullName ? fullName : contact.fullName,
    email: email ? email : contact.email,
    cellphone: cellphone ? cellphone : contact.cellphone,
  });

  const updatedContact = await contactRepository.findOneBy({
    id,
  });

  return updatedContact!;
};

export default updateContactService;
