const fs = require('fs-extra');
const path = require('path');

async function copyTemplate(targetDir, templateType) {
  let templateDir = null;
  if (templateType === 'BASIC') {
    templateDir = path.join(__dirname, '..', '..', 'template', 'basic');
  } else {
    templateDir = path.join(__dirname, '..', '..', 'template', 'full');
  }
  await fs.copy(templateDir, targetDir);
  console.log('Template files copied successfully.');
}

module.exports = { copyTemplate };
