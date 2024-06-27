import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Employee',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'Intern',
    },
    {
      id: 3,
      name: 'Carol White',
      email: 'carol.white@example.com',
      role: 'Employee',
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.brown@example.com',
      role: 'Intern',
    },
    {
      id: 5,
      name: 'Eve Davis',
      email: 'eve.davis@example.com',
      role: 'Employee',
    },
  ];

  findAll(role?: 'Intern' | 'Employee') {
    if (role) {
      const data =  this.users.filter((user) => user.role === role);
      if(data.length===0){
        throw new NotFoundException(`User with role ${role} not found`)
      }
        return data;


    }
    return this.users;
  }
  findOne(id: number) {
    const userDetails = this.users.find((user) => user.id === id);
    if(!userDetails){
        throw new NotFoundException(`User with id ${id} not found`)
    }
    return userDetails;
    
  }
  create(user: createUserDto) {
    const userByHightestId = [...this.users].sort((a, b) => b.id - a.id)[0];
    // console.log('userByHightestId :>> ', userByHightestId);
    const newUser = {
      id: userByHightestId.id+1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, userUpdate: updateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users = this.users.map(user=>{
        if(user.id===id){
            return {...user,...userUpdate}
        }
        return user
    })
    return this.findOne(id);
  }
  delete(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return `User with id ${id} has been deleted`;
  }

  
}
