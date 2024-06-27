import { createUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";
// here we can access the data validation of create user without actualy writing the repetative data for update just by useing partial type
export class updateUserDto extends PartialType(createUserDto){}