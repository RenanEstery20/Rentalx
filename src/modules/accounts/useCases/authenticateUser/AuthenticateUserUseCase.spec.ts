import { AppError } from "../../../../errors/AppError"
import { IcreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe("Authenticate User", () =>{
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })

  it("should be able to authenticate an user", async () =>{
    const user: IcreateUserDTO = {
      driver_license: "000123",
      email: "user@teste.com",
      password: "1234",
      name: "User teste"
    }
    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })
    expect(result).toHaveProperty("token")
  })

  it("should not be able to authenticate an noneexistent user", async () =>{

    expect(async () => {
        await authenticateUserUseCase.execute({
          email: "false@email.com",
          password: "1234"
        })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not be able to authenticate with incorrect password", async () =>{

    expect(async () => {
        const user: IcreateUserDTO ={
          driver_license: "9999",
          email: "user@example.com",
          password: "1234",
          name: "user test error",
        }
        await createUserUseCase.execute(user)

        await authenticateUserUseCase.execute({
          email: user.email,
          password: "incorrect password"
        })
    }).rejects.toBeInstanceOf(AppError)
  })

})