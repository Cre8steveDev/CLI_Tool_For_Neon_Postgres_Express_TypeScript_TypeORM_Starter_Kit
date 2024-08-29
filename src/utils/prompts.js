const inquirer = require('inquirer');

async function promptForProjectDetails() {
  const { default: ps } = inquirer;

  return ps.prompt([
    {
      type: 'input',
      name: 'kitType',
      message: 'Which type of Kit do you want? (Basic or Full):',
      default: 'Basic',
    },
  ]);
}

module.exports = {
  promptForProjectDetails,
};
