interface IcreateUserDTO{
  name: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string;
  avatar?: string;
}

export {IcreateUserDTO}