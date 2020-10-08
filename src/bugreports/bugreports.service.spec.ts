import { Test, TestingModule } from '@nestjs/testing';
import { BugreportsService } from './bugreports.service';

describe('BugreportsService', () => {
  let service: BugreportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BugreportsService],
    }).compile();

    service = module.get<BugreportsService>(BugreportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
