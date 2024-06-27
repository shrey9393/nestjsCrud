import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';`
`

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // creating constructor of userService to use it in the class
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: 'Intern' | 'Employee') {
    return this.userService.findAll(role);
  }

  // :id is a route parameter
  @Get(':id') 
  findOne(@Param('id',ParseIntPipe) id: number) {
    // here we used + as a unary oprator as the findone method expects a number
    // but the id is a string'
    // so we converted it to number
    // by using parseInt pipe
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) user: createUserDto) {
    // console.log('user :>> ', user);
    return this.userService.create(user);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: updateUserDto) {
    return this.userService.update(id, userUpdate);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
