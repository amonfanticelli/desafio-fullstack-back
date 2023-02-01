export interface IContactRequest {
  fullName: string;
  email: string;
  cellphone: string;
}

export interface IContactAllData {
  id: string;
  fullName: string;
  email: string;
  cellphone: string;
  createdAt: Date;
}
export interface IContactUpdate {
  fullName?: string;
  email?: string;
  cellphone?: string;
  createdAt?: Date;
}
