import { Specification } from "../entities/Specification";

interface IcreateSpecificationDTO{
  name: string;
  description: string;
}

interface ISpecificationsRepository{
  create({name, description}: IcreateSpecificationDTO):void
  findByName(name:string):Specification
}

export {ISpecificationsRepository, IcreateSpecificationDTO}