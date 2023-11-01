import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Capstone Fiverr 33 My').setVersion("1.1.3").build()
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.enableCors({origin: "*"});
  app.use(express.static("."))
  await app.listen(8080);
}
bootstrap();

