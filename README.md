# Neon Postgres Express TypeScript + TypeORM Scaffolding CLI

A CLI tool for quickly scaffolding Neon Postgres and NodeJS/Express Backend Projects with TypeScript, TypeORM, Jest, Basic JWT Authentication, and API Route Versioning.

## Installation

Install the package globally using npm:

```bash
npm install -g neon-express-typeorm-cli
```

## Usage

To create a new project, run:

```bash
neon-express-typeorm-cli create <project-name>
```

Replace `<project-name>` with your desired project name.

On the prompt, select "Basic" For a simple set up or "Full" to get the full setup with the documentation for the Starterkit.

## Features

- Neon Postgres database setup with a connection String
- Express.js with TypeScript
- TypeORM for database operations (Entity, Migrations and CRUD)
- Basic JWT Authentication
- API Route Versioning
- Jest for testing

## Configuration

After creating your project, you'll need to set up your Neon Postgres database credentials in `.env`.

### Learn about the Starter Kit

<https://github.com/Cre8steveDev/Neon_Postgres_Express_TypeScript_TypeORM_Starter_Kit>

## Running the Project

1. Navigate to your project directory:

   ```bash
   cd <project-name>
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Stephen O. (@Cre8steveDev)
