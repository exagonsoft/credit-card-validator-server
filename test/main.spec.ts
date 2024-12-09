import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';

jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn(),
  },
}));

describe('Bootstrap', () => {
  let mockApp: any;

  beforeEach(() => {
    mockApp = {
      useGlobalPipes: jest.fn(),
      listen: jest.fn(),
    };

    (NestFactory.create as jest.Mock).mockResolvedValue(mockApp);
  });

  it('should create the application and set up global validation pipe', async () => {
    const { bootstrap } = await import('../src/main');
    await bootstrap();

    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);

    expect(mockApp.useGlobalPipes).toHaveBeenCalledWith(
      expect.any(ValidationPipe),
    );

    expect(mockApp.listen).toHaveBeenCalledWith(3000);
  });

  it('should log the server URL', async () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const { bootstrap } = await import('../src/main');
    await bootstrap();

    expect(consoleSpy).toHaveBeenCalledWith(
      'Server is running on http://localhost:3000',
    );

    consoleSpy.mockRestore();
  });
});
