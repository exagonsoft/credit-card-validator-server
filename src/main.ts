import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log('Server is running on http://localhost:3000');
}

// Call the bootstrap function only when the file is executed directly
if (require.main === module) {
  bootstrap();
}
