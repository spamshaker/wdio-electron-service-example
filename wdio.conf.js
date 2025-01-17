const { join } = require('path');
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());
const {
  build: { productName },
} = packageJson;

process.env.TEST = 'true';

const config = {
  services: [
    [
      'electron',
      {
        appPath: join(__dirname, 'dist'),
        appName: productName,
        appArgs: ['foo', 'bar=baz'],
        chromedriver: {
          port: 9519,
          logFileName: 'wdio-chromedriver.log',
        },
      },
    ],
  ],
  capabilities: [{}],
  port: 9519,
  waitforTimeout: 5000,
  connectionRetryCount: 10,
  connectionRetryTimeout: 30000,
  logLevel: 'debug',
  runner: 'local',
  outputDir: 'wdio-logs',
  specs: ['./test/*.spec.ts'],
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      files: true,
      project: join(__dirname, 'tsconfig.json'),
    },
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000,
  },
};

module.exports = { config };
