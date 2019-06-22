import { Test, TestingModule } from '@nestjs/testing';
import { MessageBrokerController } from './message-broker.controller';

describe('MessageBroker Controller', () => {
  let controller: MessageBrokerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageBrokerController],
    }).compile();

    controller = module.get<MessageBrokerController>(MessageBrokerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
