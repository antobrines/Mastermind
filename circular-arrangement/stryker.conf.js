module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: ["src/*.js"],
    jest: {
      projectType: 'custom',
      config: require('./jest.config.js'),
      enableFindRelatedTests: true,
    }
  });
};
