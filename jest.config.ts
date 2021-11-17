export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    'src/*.ts',
  ],
  preset: "ts-jest",
    testEnvironment: "node",
    transform: {
      "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!variables/.*)"
    ]
};