const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ydmqas",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
      timestamp: "mmddyyy_HHMMss"}
  },
});
