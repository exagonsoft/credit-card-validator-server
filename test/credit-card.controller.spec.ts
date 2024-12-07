import { Test, TestingModule } from '@nestjs/testing';
import { CreditCardController } from '../src/credit-card/credit-card.controller';
import { CreditCardService } from '../src/credit-card/credit-card.service';

describe('CreditCardController', () => {
  let controller: CreditCardController;
  let service: CreditCardService;

  const mockCreditCardService = {
    validateCreditCardNumber: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditCardController],
      providers: [
        { provide: CreditCardService, useValue: mockCreditCardService },
      ],
    }).compile();

    controller = module.get<CreditCardController>(CreditCardController);
    service = module.get<CreditCardService>(CreditCardService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a success message for a valid card number', () => {
    const dto = { cardNumber: '4532015112830366' };
    jest.spyOn(service, 'validateCreditCardNumber').mockReturnValue(true);

    expect(controller.validateCard(dto)).toEqual({
      message: 'Credit card number is valid',
    });
    expect(service.validateCreditCardNumber).toHaveBeenCalledWith(
      dto.cardNumber,
    );
  });

  it('should throw an error for an invalid card number', () => {
    const dto = { cardNumber: '1234' };
    jest.spyOn(service, 'validateCreditCardNumber').mockReturnValue(false);

    try {
      controller.validateCard(dto);
    } catch (error) {
      expect(error.status).toBe(400);
      expect(error.message).toBe('Invalid credit card number');
    }

    expect(service.validateCreditCardNumber).toHaveBeenCalledWith(
      dto.cardNumber,
    );
  });
});
