import { Module } from '@nestjs/common';

import { MessageBrokerController } from './message-broker.controller';

@Module({
  controllers: [MessageBrokerController],
})
export class MessageBrokerModule {}
