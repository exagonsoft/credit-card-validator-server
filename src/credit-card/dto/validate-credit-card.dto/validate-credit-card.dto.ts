import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ValidateCreditCardDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d+$/, { message: 'Credit card number must contain only digits' })
  cardNumber: string;
}
