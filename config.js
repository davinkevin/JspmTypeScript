System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "typescript",
  packages: {
    'public': {
      main: 'app.ts',
      format: 'esm',
      defaultExtension: 'ts'
    }
  },
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "typescript": "npm:typescript@1.6.2"
  }
});