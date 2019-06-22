import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { initMessageBroker } from './inits';

dotenv.config({ path: '../.env' });

const { MQ_USER, MQ_PASS, MQ_HOST, MQ_PORT, QUEUE_NAME } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initMessageBroker({
    app,
    config: {
      user: MQ_USER,
      pass: MQ_PASS,
      host: MQ_HOST,
      port: MQ_PORT,
      queueName: QUEUE_NAME,
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
