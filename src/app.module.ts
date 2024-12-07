import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CreditCardModule } from './credit-card/credit-card.module';
import { ValidateHeaderMiddleware } from './validate-header/validate-header.middleware';

@Module({
  imports: [CreditCardModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateHeaderMiddleware).forRoutes('*');
  }
}
