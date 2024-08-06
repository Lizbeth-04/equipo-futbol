import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { ConfigModule } from '@nestjs/config';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import configuration from './config/configuration';
import { validationSchema } from './config/validationSchema';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    ConfigModule .forRoot({
        load: [configuration],
        validationSchema,
        isGlobal: true,
      }),
    PrismaModule, 
    TeamsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule {}
