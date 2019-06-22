import { Transport } from '@nestjs/microservices';

export function initMessageBroker({
  app,
  config: { user, pass, host, port, queueName },
}) {
  const url = `amqp://${user}:${pass}@${host}:${port}`;

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [url],
      queue: queueName,
      queueOptions: { durable: false },
    },
  });
}
