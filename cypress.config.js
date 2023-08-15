const { defineConfig } = require("cypress");
const TestRailReporter = require("cypress-testrail");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  viewportWidth: 1536,
  viewportHeight: 960,
  pageLoadTimeout: 20000,
  e2e: { 
    env:{
      "testrail": {
          "domain": "mmoosstt.testrail.io",
          "username": "tangiev1990@durablecanada.com",
          "password": "Test123.",
          "runId": "1",
          "screenshots": true
      }
  },
     baseUrl: "https://mostly.ai/",

     setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-dev-shm-usage");
          return launchOptions;
        }
      });
      new TestRailReporter(on, config).register();
    }, 
  },
});
