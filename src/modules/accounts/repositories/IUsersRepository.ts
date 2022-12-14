import {IcreateUserDTO} from '../dtos/ICreateUserDTO'
import { User } from '../entities/User'


interface IUsersRepository{
  create(data: IcreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}

export { IUsersRepository}