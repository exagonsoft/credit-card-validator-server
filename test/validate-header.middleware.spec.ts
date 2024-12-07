import { ValidateHeaderMiddleware } from '../src/validate-header/validate-header.middleware';
import { Request, Response, NextFunction } from 'express';
import { ForbiddenException } from '@nestjs/common';

describe('ValidateHeaderMiddleware', () => {
  let middleware: ValidateHeaderMiddleware;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    process.env.FRONTEND_KEY = 'credit-card-validator-client-key';
    middleware = new ValidateHeaderMiddleware();
    mockRequest = {};
    mockResponse = {};
    mockNext = jest.fn();
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should call next() if the header is valid', () => {
    mockRequest.headers = { 'x-ccvc-key': 'credit-card-validator-client-key' };

    middleware.use(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should throw ForbiddenException if the header is missing', () => {
    mockRequest.headers = {};

    expect(() => {
      middleware.use(
        mockRequest as Request,
        mockResponse as Response,
        mockNext,
      );
    }).toThrow(ForbiddenException);
  });

  it('should throw ForbiddenException if the header value is incorrect', () => {
    mockRequest.headers = { 'x-ccvc-key': 'wrong-key' };

    expect(() => {
      middleware.use(
        mockRequest as Request,
        mockResponse as Response,
        mockNext,
      );
    }).toThrow(ForbiddenException);
  });
});
