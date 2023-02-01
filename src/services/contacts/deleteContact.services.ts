import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { Client } from "../../entities/clients.entities";
import { AppError } from "../../errors/appError";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);
  const contact = await contactRepository.findOneBy({
    id: id,
  });
  if (!contact) {
    throw new AppError("contact not found!", 404);
  }

  await contactRepository.delete(id);
};

export default deleteContactService;
