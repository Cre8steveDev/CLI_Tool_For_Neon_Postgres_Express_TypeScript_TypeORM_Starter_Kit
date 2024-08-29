const path = require('path');
const { copyTemplate, updateConfig } = require('../utils/file-ops');
const { promptForProjectDetails } = require('../utils/prompts');
const { installDependencies } = require('../utils/npm');

async function createCommand(projectName) {
  try {
    const targetDir = path.join(process.cwd(), projectName);

    const { kitType } = await promptForProjectDetails();

    const templateType = String(kitType).toUpperCase();

    await copyTemplate(targetDir, templateType);

    await installDependencies(targetDir);

    console.log(`
Project ${projectName} created successfully!

To get started:
  cd ${projectName}
  npm start
    `);
  } catch (error) {
    console.error('Error creating project:', error.message);
  }
}

module.exports = createCommand;
