import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  email: string;
  
  @IsEnum(['Intern', 'Employee'], {
    message: 'Role must be either Intern or Employee',
  })
  role: 'Intern' | 'Employee';
}
