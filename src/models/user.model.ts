export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
  registrationDate: Date;
  lastActiveDate: Date;
}