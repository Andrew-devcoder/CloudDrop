import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CloudinaryController } from 'src/controllers/cloudinary.controller';

@Module({
  imports: [],
  controllers: [AppController, CloudinaryController],
  providers: [AppService],
})
export class AppModule {}
