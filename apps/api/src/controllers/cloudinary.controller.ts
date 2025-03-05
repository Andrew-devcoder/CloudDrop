import { Controller, Get, Header } from '@nestjs/common';

@Controller('api')
export class CloudinaryController {
  @Get('message')
  @Header('Content-Type', 'application/json')
  getMessage(): object {
    return { message: 'Hello from NestJS API!' };
  }
}
