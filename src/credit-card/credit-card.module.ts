import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardController } from './credit-card.controller';

@Module({
  providers: [CreditCardService],
  controllers: [CreditCardController],
})
export class CreditCardModule {}
