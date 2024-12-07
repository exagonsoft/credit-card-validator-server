import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditCardService {
  validateCreditCardNumber(cardNumber: string): boolean {
    const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

    // Return false if the sanitized string is empty
    if (sanitizedCardNumber.length === 0) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitizedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedCardNumber.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  }
}
