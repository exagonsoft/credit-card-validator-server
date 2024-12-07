import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateHeaderMiddleware implements NestMiddleware {
  private readonly requiredHeader = 'x-ccvc-key';
  private readonly validHeaderValue =
    process.env.FRONTEND_KEY || 'credit-card-validator-client-key';

  use(req: Request, res: Response, next: NextFunction): void {
    const headerValue = req.headers[this.requiredHeader];

    if (!headerValue || headerValue !== this.validHeaderValue) {
      throw new ForbiddenException('Invalid or missing frontend key.');
    }

    next();
  }
}
