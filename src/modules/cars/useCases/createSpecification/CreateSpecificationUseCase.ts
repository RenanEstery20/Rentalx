import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository){}

  execute({ name, description}:IRequest):void{

    const specificaitonAlreadyExists = this.specificationsRepository.findByName(name)

  if(specificaitonAlreadyExists){
    throw new Error("Specification already Exists!")
  }

  this.specificationsRepository.create({name, description})
  }
}


export {CreateSpecificationUseCase}