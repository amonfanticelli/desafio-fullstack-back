export interface IClientRequest {
  fullName: string;
  email: string;
  cellphone: string;
  password: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientAllData {
  id: string;
  fullName: string;
  email: string;
  cellphone: string;
  password: string;
  isActive: string;
  createdAt: Date;
}

export interface IClientUpdate {
  fullName?: string;
  email?: string;
  cellphone?: string;
  password?: string;
  isActive?: boolean;
}
