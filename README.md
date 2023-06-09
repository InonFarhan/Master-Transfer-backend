# Master Transfer Backend

Welcome to the Master Transfer backend repository! This is the server-side component of the Master Transfer money transfer app, built using Node.js and Express.js.

## Project Overview

Master Transfer aims to simplify and enhance the way friends transfer money to each other. The backend is responsible for handling data transactions, ensuring a smooth and secure money transfer process. It leverages the power of Node.js and Express.js to deliver fast and reliable API endpoints for the frontend to interact with.

## Features

- **Fast and Secure Transactions**: The backend utilizes Node.js and Express.js to provide efficient and secure data transactions, ensuring a smooth money transfer process.

- **Scalable Database Solution**: Master Transfer employs MongoDB as the database of choice, offering a scalable and flexible solution to store and manage transactional data securely.

- **API Endpoints**: The backend exposes a set of API endpoints that the frontend interacts with, allowing users to send and receive money seamlessly.

## Prerequisites

Before running the backend, ensure that you have the following installed:

- Node.js (version X.X.X): [https://nodejs.org](https://nodejs.org)
- MongoDB (version X.X.X): [https://www.mongodb.com](https://www.mongodb.com)

## Getting Started

To get started with the Master Transfer backend, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/InonFarhan/Master-Transfer-backend.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Master-Transfer-backend
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Configure the environment variables:

   - Rename the `.env.example` file to `.env`.
   - Update the values in the `.env` file to match your environment.

5. Start the server:

   ```shell
   npm start
   ```

   The server will start running at `http://localhost:3000`.

## API Documentation

The backend provides the following API endpoints:

- `/api/users`:
  - `POST /register`: Register a new user.
  - `POST /login`: Log in an existing user.
- `/api/transactions`:
  - `GET /`: Get a list of transactions.
  - `POST /`: Create a new transaction.
  - `GET /:id`: Get details of a specific transaction.

For detailed information about each endpoint, please refer to the [API documentation](https://github.com/InonFarhan/Master-Transfer-backend/wiki/API-Documentation).

## Contributing

Contributions to the Master Transfer backend are welcome! If you encounter any bugs or have suggestions for new features, please open an issue on the [GitHub repository](https://github.com/InonFarhan/Master-Transfer-backend/issues). Pull requests are also encouraged.

## License

This project is licensed under the [MIT License](https://github.com/InonFarhan/Master-Transfer-backend/blob/main/LICENSE).

## Contact

For any inquiries or further information, feel free to contact the project maintainer:

- Name: (Inon Farhan)
- LinkedIn: (https://www.linkedin.com/in/your-profile)
- Email: (inon.f4@gmail.com)

---

Thank you for your interest in the Master Transfer backend project! We hope this application simplifies and enhances the way friends handle personal finances. We look forward to your contributions and feedback.

For the frontend project, please refer to the [Master Transfer frontend repository](https://github.com/InonFarhan/Master-Transfer).

[Master Transfer App Demo](https://lnkd.in/dSstsH_3)

[My GitHub Profile](https://lnkd.in/da-PieD7)