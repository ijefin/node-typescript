import resolve from "path";
const root = resolve(__dirname, "...");
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  rootDir: root,
  displayName: "end2end-tests",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
  testMatch: ["<rootDir>/test/**/*.test.ts"],
};
