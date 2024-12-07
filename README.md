# Credit Card Validator API

A **NestJS** application for validating credit card numbers using the **Luhn algorithm**, built with best practices in mind.

![Node.js](https://img.shields.io/badge/Node.js-v23.x-green)
![NestJS](https://img.shields.io/badge/NestJS-v10.x-red)
![Jest](https://img.shields.io/badge/Testing-Jest-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🚀 Features

- **Credit Card Validation**: Validates credit card numbers using the Luhn algorithm.
- **REST API**: Simple HTTP endpoint for validation.
- **Global Validation**: Powered by NestJS `ValidationPipe`.
- **Test Coverage**: Comprehensive unit tests with Jest.
- **Extensible Architecture**: Built with NestJS modules for scalability.
- **Dockerized**: Easy to deploy with Docker and Docker Compose.

---

## 🛠️ Installation

### Local Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/exagonsoft/credit-card-validator-server.git
   cd credit-card-validator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run start
   ```

4. **Access the server**:
   Open your browser or Postman and go to:

   ``` text
   http://localhost:3000
   ```

---

### Docker Deployment

You can use Docker to easily run the application locally or deploy it to a server.

1. **Build the Docker image**:

   ```bash
   docker build -t nestjs-app .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 3000:3000 nestjs-app
   ```

3. **Access the server**:

   ``` text
   http://localhost:3000
   ```

---

### Docker Compose Deployment

If you are using Docker Compose, you can deploy the application along with additional services like databases or a reverse proxy.

1. **Run Docker Compose**:

   ```bash
   docker-compose up -d
   ```

2. **Access the server**:

   ``` text
   http://localhost:3000
   ```

---

## 📖 API Usage

### POST `/credit-card/validate`

Validate a credit card number.

#### Request

**Headers**:

- `Content-Type: application/json`

**Body**:

```json
{
  "cardNumber": "4532015112830366"
}
```

#### Response

- **Valid Card**:

  ```json
  {
    "message": "Credit card number is valid"
  }
  ```

- **Invalid Card**:

  ```json
  {
    "statusCode": 400,
    "message": "Invalid credit card number",
    "error": "Bad Request"
  }
  ```

---

## 🧪 Running Tests

Run unit tests using Jest:

```bash
npm run test
```

Generate a test coverage report:

```bash
npm run test:cov
```

---

## 🗂️ Project Structure

```plaintext
src/
├── app.module.ts          # Main application module
├── main.ts                # Bootstrap function
├── credit-card/           # Credit card validation module
│   ├── credit-card.controller.ts # API endpoint logic
│   ├── credit-card.service.ts    # Core validation logic
│   ├── dto/                     # Data Transfer Objects (DTOs)
│       ├── validate-credit-card.dto.ts
test/
├── credit-card/           # Unit tests
    ├── credit-card.controller.spec.ts
    ├── credit-card.service.spec.ts
    ├── validate-credit-card.dto.spec.ts
```

---

## 🌐 Environment Variables

Set up the following environment variables if needed:

| Key    | Default | Description |
| ------ | ------- | ----------- |
| `PORT` | `3000`  | Server port |

---

## 🛡️ Technologies Used

- **[Node.js](https://nodejs.org/)**: JavaScript runtime.
- **[NestJS](https://nestjs.com/)**: Scalable server-side framework.
- **[Jest](https://jestjs.io/)**: Testing framework.

---

## 📚 Learning Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 🧑‍💻 Author

**Msc. Alvaro Raul Martin**  
[GitHub](https://github.com/exagonsoft) • [LinkedIn](https://www.linkedin.com/in/msc-alvaro-raul-martin-peraza-165114210/)
