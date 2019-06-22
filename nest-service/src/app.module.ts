import { Module } from '@nestjs/common';

import { MessageBrokerModule } from './modules/message-broker/message-broker.module';

@Module({
  imports: [MessageBrokerModule],
})
export class AppModule {}
