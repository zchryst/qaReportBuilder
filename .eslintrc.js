module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // uses typescript-specific linting rules
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // enables additional rules with type definitions
    "plugin:react/recommended", // uses react-specific linting rules
    "plugin:prettier/recommended", // enables eslint-plugin-prettier and eslint-config-prettier
    "prettier/react", // disables react-specific linting rules that conflict with prettier
    "plugin:react-hooks/recommended", // enforces the Rules of Hooks
    "plugin:jest/recommended", // enforces Jest-specific rules
    "plugin:jest/style", // enforces Jest-specific styles
  ],
  ignorePatterns: [
    "node_modules/",
    "metro.config.js",
    "babel.config.js",
    "jest.config.js",
    "dist/",
    "__mocks__/**/*.ts",
    "__mocks__/**/*.js",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  rules: {
    "react/display-name": ["off"],
    "react/prop-types": ["off"],
    // "react-hooks/exhaustive-deps": "off",
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    indent: "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    // "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/interface-name-prefix": ["off"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    // "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-native",
    "jest",
    "react-hooks",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    "react-native/react-native": true,
  },
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx", "*.test.js", "*.test.jsx"],
      rules: {
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};