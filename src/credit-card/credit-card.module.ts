import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';

@Module({
  providers: [CreditCardService]
})
export class CreditCardModule {}
