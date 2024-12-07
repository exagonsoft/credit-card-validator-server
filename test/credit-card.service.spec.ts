import { Test, TestingModule } from '@nestjs/testing';
import { CreditCardService } from '../src/credit-card/credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditCardService],
    }).compile();

    service = module.get<CreditCardService>(CreditCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return true for a valid credit card number', () => {
    const validCardNumber = '4532015112830366'; // Passes Luhn algorithm
    expect(service.validateCreditCardNumber(validCardNumber)).toBe(true);
  });

  it('should return false for an invalid credit card number', () => {
    const invalidCardNumber = '1234567890123456'; // Fails Luhn algorithm
    expect(service.validateCreditCardNumber(invalidCardNumber)).toBe(false);
  });

  it('should return false for a non-numeric input', () => {
    const nonNumericInput = 'abcd1234';
    expect(service.validateCreditCardNumber(nonNumericInput)).toBe(false);
  });

  it('should return true for a valid card number with spaces or dashes', () => {
    const formattedCardNumber = '4532 0151 1283 0366'; // Passes Luhn algorithm
    expect(service.validateCreditCardNumber(formattedCardNumber)).toBe(true);
  });

  it('should return false for an empty string', () => {
    const emptyInput = '';
    expect(service.validateCreditCardNumber(emptyInput)).toBe(false);
  });
});
