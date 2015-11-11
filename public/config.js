System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  packages: {
    'app': {
      defaultExtension: 'ts'
    },
    './public/app': { // ??
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
