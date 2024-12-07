import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';

// Mock NestFactory methods
jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn(),
  },
}));

describe('Bootstrap', () => {
  let mockApp: any;

  beforeEach(() => {
    // Mock application instance
    mockApp = {
      useGlobalPipes: jest.fn(),
      listen: jest.fn(),
    };

    // Mock NestFactory.create to return the mock app instance
    (NestFactory.create as jest.Mock).mockResolvedValue(mockApp);
  });

  it('should create the application and set up global validation pipe', async () => {
    // Import the bootstrap function dynamically to test its behavior
    const { bootstrap } = await import('../src/main');
    await bootstrap();

    // Ensure NestFactory.create was called with the correct module
    expect(NestFactory.create).toHaveBeenCalledWith(AppModule);

    // Ensure the global validation pipe is set
    expect(mockApp.useGlobalPipes).toHaveBeenCalledWith(
      expect.any(ValidationPipe),
    );

    // Ensure the app listens on port 3000
    expect(mockApp.listen).toHaveBeenCalledWith(3000);
  });

  it('should log the server URL', async () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const { bootstrap } = await import('../src/main');
    await bootstrap();

    // Ensure console.log was called with the correct URL
    expect(consoleSpy).toHaveBeenCalledWith(
      'Server is running on http://localhost:3000',
    );

    // Restore console.log
    consoleSpy.mockRestore();
  });
});
