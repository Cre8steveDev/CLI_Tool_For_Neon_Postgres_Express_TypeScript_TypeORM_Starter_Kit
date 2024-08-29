const { program } = require('commander');
const createCommand = require('./commands/create');

const greenBold = '\x1b[1m\x1b[32m';
const blueBold = '\x1b[1m\x1b[34m';
const reset = '\x1b[0m';

const cliDescription = `${greenBold}A CLI tool for scaffolding Neon Postgres and NodeJS/Express Backend Projects with Typescript, TypeORM (Includes initial set up for Basic JWT Authentication, API Route Versioning and Jest Testing.)${reset}

${blueBold}Brought to you by: Stephen O. (@Cre8steveDev)${reset}`;

program.version('1.0.0').description(cliDescription);

program
  .command('create <project-name>')
  .description('Create a new project')
  .action(createCommand);

program.parse(process.argv);
