import { Injectable,OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        // here we are connecting to the database 
        await this.$connect();
    }   
}
// working on building rest api 

