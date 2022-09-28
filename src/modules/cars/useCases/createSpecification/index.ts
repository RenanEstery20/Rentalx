import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "../createSpecification/CreateSpecificationController";
import { CreateSpecificationUseCase } from "../createSpecification/CreateSpecificationUseCase";


const specificationsRepository = new SpecificationsRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationController =  new CreateSpecificationController(createSpecificationUseCase)


export {createSpecificationController}