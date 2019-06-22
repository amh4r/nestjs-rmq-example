import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MessageBrokerController {
  @EventPattern('my-pattern')
  async handler2(data: Record<string, unknown>) {
    console.log('\nReceived!');
    console.log(data);
  }
}
