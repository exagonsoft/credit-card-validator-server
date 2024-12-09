import { ValidateCreditCardDto } from '../src/credit-card/dto/validate-credit-card.dto/validate-credit-card.dto';
import { validate } from 'class-validator';

describe('ValidateCreditCardDto', () => {
  it('should be defined', () => {
    const dto = new ValidateCreditCardDto();
    expect(dto).toBeDefined();
  });

  it('should validate a valid card number', async () => {
    const dto = new ValidateCreditCardDto();
    dto.cardNumber = '4532015112830366';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail validation for an invalid card number', async () => {
    const dto = new ValidateCreditCardDto();
    dto.cardNumber = '1234abcd';

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty(
      'matches',
      'Credit card number must contain only digits',
    );
  });

  it('should fail validation when card number is empty', async () => {
    const dto = new ValidateCreditCardDto();
    dto.cardNumber = '';

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty(
      'isNotEmpty',
      'cardNumber should not be empty',
    );
  });
});
