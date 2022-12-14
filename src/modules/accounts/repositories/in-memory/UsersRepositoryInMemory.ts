import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import {IcreateUserDTO} from "../../dtos/ICreateUserDTO"


class UsersRepositoryInMemory implements IUsersRepository{
  users: User[] = [];


async create({ driver_license, email, name, password }: IcreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user,{
      driver_license, email, name, password 
    });

    this.users.push(user);
    
}

async findByEmail(email: string): Promise<User> {
  return this.users.find((user) => user.email === email)
}

async findById(id: string): Promise<User> {
  return this.users.find((user) => user.id === id)
}

}
export {UsersRepositoryInMemory}