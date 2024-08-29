const { execSync } = require('child_process');

async function installDependencies(targetDir) {
  console.log('Installing dependencies...');
  try {
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
    console.log('Dependencies installed successfully!');
  } catch (error) {
    console.error('Failed to install dependencies:', error.message);
    throw error;
  }
}

module.exports = {
  installDependencies,
};
