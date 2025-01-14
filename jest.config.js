/* export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Transforma archivos JavaScript y JSX usando Babel
  },
  extensionsToTreatAsEsm: [".jsx"], // Indica que los archivos .jsx son ESM
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Mapea archivos de estilos
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Configuración adicional para Testing Library
}; */
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Transforma archivos JavaScript y JSX usando Babel
  },
  extensionsToTreatAsEsm: [".jsx"], // Indica que los archivos .jsx son ESM
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Mapea archivos de estilos
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom", // Configuración adicional para Testing Library
    "<rootDir>/jest.setup.js",  // Asegúrate de que la ruta sea correcta
  ],
};



  
  