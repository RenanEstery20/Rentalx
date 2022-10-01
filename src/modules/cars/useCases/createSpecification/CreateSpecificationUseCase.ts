import {inject, injectable} from "tsyringe"
import { AppError } from "../../../../errors/AppError";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository){}

    async execute({ name, description}:IRequest):Promise<void>{

    const specificaitonAlreadyExists = await this.specificationsRepository.findByName(name)

  if(specificaitonAlreadyExists){
    throw new AppError("Specification already Exists!")
  }

  await this.specificationsRepository.create({name, description})
  }
}


export {CreateSpecificationUseCase}