import { Test, TestingModule } from '@nestjs/testing';
import { BugreportsController } from './bugreports.controller';

describe('BugreportsController', () => {
  let controller: BugreportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BugreportsController],
    }).compile();

    controller = module.get<BugreportsController>(BugreportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
