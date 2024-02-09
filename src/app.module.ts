import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import appConfig from './config/appConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      envFilePath: '.enviroment',
      ignoreEnvFile: false,
    }),
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
