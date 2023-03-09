import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { MyConfigService } from './myconfig.service';

//export interface ConfigModuleOptions {}  // Nothing for now

@Module({})
export class MyConfigModule {

  static register(): DynamicModule {

    if (process.env.DB_LESS == "yes") {
      console.log('Without DB');
      return MyConfigService.getDBLessConfig();
    }
    else
      return MyConfigService.getDBConfig();
  }
}
