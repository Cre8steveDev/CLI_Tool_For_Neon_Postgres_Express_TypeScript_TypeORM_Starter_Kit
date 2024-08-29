const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const CLI_PATH = path.join(__dirname, '..', 'bin', 'cli.js');
const TEST_DIR = path.join(__dirname, 'test-project');

describe('CLI', () => {
  beforeEach(() => {
    fs.removeSync(TEST_DIR);
  });

  afterEach(() => {
    fs.removeSync(TEST_DIR);
  });

  test('creates a new project', () => {
    execSync(`node ${CLI_PATH} create test-project`, {
      cwd: __dirname,
      input: Buffer.from('Basic\n'),
    });

    expect(fs.existsSync(TEST_DIR)).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, 'package.json'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, 'README.md'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, 'tsconfig.json'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, 'jest.config.js'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, 'src'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, 'tests'))).toBe(true);
    expect(fs.existsSync(path.join(TEST_DIR, '.env'))).toBe(true);
  });
});
