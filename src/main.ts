import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ConfigModule.forRoot({
    ignoreEnvFile: true,
  });

  // default postman support
  const config = new DocumentBuilder()
    .setTitle('Learning nestjs api')
    .setDescription('The learning API description')
    .setVersion('1.0')
    .addTag('Learning')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8800, () => {
    console.log('App is running on port :--', 8800);
  });
}
bootstrap();
