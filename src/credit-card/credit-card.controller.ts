import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { ValidateCreditCardDto } from './dto/validate-credit-card.dto/validate-credit-card.dto';

@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Post('validate')
  validateCard(@Body() validateCreditCardDto: ValidateCreditCardDto) {
    const { cardNumber } = validateCreditCardDto;

    const isValid = this.creditCardService.validateCreditCardNumber(cardNumber);

    if (!isValid) {
      throw new HttpException(
        '🚫 Invalid credit card number',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { message: '✅ Credit card number is valid' };
  }
}
