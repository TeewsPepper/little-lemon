export default {
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
      "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
  };
  
  