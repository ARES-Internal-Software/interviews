import { DynamicModule, Injectable } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { MyConfigModule } from './myconfig.module';

@Injectable()
export class MyConfigService {

    static getDBConfig(): DynamicModule {

        const config = {
            imports: [
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    //entities: [User], 
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                UsersModule,
            ]
        }

        return { ...config, ...this.getDBLessConfig() };
    }


    static getDBLessConfig(): DynamicModule {
        return {
            module: MyConfigModule,
            providers: [MyConfigService],
            exports: [MyConfigService],
        }
    }
} 
