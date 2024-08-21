// Este archivo es la configuración predeterminada para TypeScript Analyzer (ESLint).
// La ubicación predeterminada en C# es algo como c:\Users\{UserName}\TypeScriptAnalyzerConfig\.eslintrc.js

// Si el flag prettierEnabled está configurado en false, prettier se deshabilita completamente y se activan las reglas de ESLint menos opinadas
// bajo prettierDisabledConfig a continuación. Elimina estas o apágalas si no deseas NINGUNA regla de formato en el linter.
const prettierEnabled = true;

const config = {
    root: true,
    // Para usar ignorePatterns para archivos locales, copia .eslintrc.js en tu proyecto: las rutas no serán detectables con la configuración predeterminada.
    ignorePatterns: [".eslintrc.js"],

    // Podemos lintar casi cualquier extensión de archivo con un plugin apropiado, por lo que tener reglas que se apliquen a todas no tiene mucho sentido.
    // En su lugar, todas las reglas se definen en secciones de overrides por extensión de archivo, aunque en realidad no estemos sobrescribiendo nada.
    overrides: [
        {
            // Este objeto tiene reglas que se aplican a AMBOS JavaScript y TypeScript.
            // Las reglas que solo se aplican a JavaScript están en un objeto de JavaScript más abajo, y de manera similar para TypeScript.
            files: ["*.js", "*.jsx", "*.mjs", "*.cjs", "*.ts", "*.tsx"],
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true, // Permite soporte de JSX, pero se requiere el uso del plugin de React para soportar semánticas de React.
                },
            },
            // Para deshabilitar un plugin coméntalo aquí y también comenta sus reglas en la sección correspondiente abajo.
            // Revertir esto para habilitar uno.
            plugins: [
                "@typescript-eslint",
                "prettier",
            ],
            env: {
                amd: true,
                browser: true,
                jquery: true,
                node: true,
                es6: true, // Esto habilita variables globales ES6 Y sintaxis ES6.
                worker: true,
            },
            rules: {
                // A continuación se encuentran todas las reglas de eslint:recommended https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js,
                // aparte de las que queremos habilitar solo para JavaScript y no TypeScript, que están en el objeto de JavaScript más abajo.
                // Las opciones son off, warn, error (o 0, 1, 2 si prefieres números sin significado).
                // Para agregar una opción a una regla, usa [] p.ej. "no-inner-declarations": ["error", "both"],
                // Lista completa de todas las reglas: https://eslint.org/docs/rules/
                "for-direction": "error",                 // https://eslint.org/docs/rules/for-direction
                "no-async-promise-executor": "error",     // https://eslint.org/docs/rules/no-async-promise-executor
                "no-case-declarations": "error",          // https://eslint.org/docs/rules/no-case-declarations
                "no-class-assign": "error",               // https://eslint.org/docs/rules/no-class-assign
                "no-compare-neg-zero": "error",           // https://eslint.org/docs/rules/no-compare-neg-zero
                "no-cond-assign": "error",                // https://eslint.org/docs/rules/no-cond-assign
                "no-constant-condition": "error",         // https://eslint.org/docs/rules/no-constant-condition
                "no-control-regex": "error",              // https://eslint.org/docs/rules/no-control-regex
                "no-debugger": "error",                   // https://eslint.org/docs/rules/no-debugger
                "no-delete-var": "error",                 // https://eslint.org/docs/rules/no-delete-var
                "no-dupe-else-if": "error",               // https://eslint.org/docs/rules/no-dupe-else-if
                "no-duplicate-case": "error",             // https://eslint.org/docs/rules/no-duplicate-case
                "no-empty": "error",                      // https://eslint.org/docs/rules/no-empty
                "no-empty-character-class": "error",      // https://eslint.org/docs/rules/no-empty-character-class
                "no-empty-pattern": "error",              // https://eslint.org/docs/rules/no-empty-pattern
                "no-ex-assign": "error",                  // https://eslint.org/docs/rules/no-ex-assign
                "no-extra-boolean-cast": "error",         // https://eslint.org/docs/rules/no-extra-boolean-cast
                "no-fallthrough": "error",                // https://eslint.org/docs/rules/no-fallthrough
                "no-global-assign": "error",              // https://eslint.org/docs/rules/no-global-assign
                "no-inner-declarations": "error",         // https://eslint.org/docs/rules/no-inner-declarations
                "no-invalid-regexp": "error",             // https://eslint.org/docs/rules/no-invalid-regexp
                "no-irregular-whitespace": "error",       // https://eslint.org/docs/rules/no-irregular-whitespace
                "no-misleading-character-class": "error", // https://eslint.org/docs/rules/no-misleading-character-class
                "no-mixed-spaces-and-tabs": "error",      // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
                "no-nonoctal-decimal-escape": "error",    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
                "no-octal": "error",                      // https://eslint.org/docs/rules/no-octal
                "no-prototype-builtins": "error",         // https://eslint.org/docs/rules/no-prototype-builtins
                "no-regex-spaces": "error",               // https://eslint.org/docs/rules/no-regex-spaces
                "no-self-assign": "error",                // https://eslint.org/docs/rules/no-self-assign
                "no-shadow-restricted-names": "error",    // https://eslint.org/docs/rules/no-shadow-restricted-names
                "no-sparse-arrays": "error",              // https://eslint.org/docs/rules/no-sparse-arrays
                "no-unexpected-multiline": "error",       // https://eslint.org/docs/rules/no-unexpected-multiline
                "no-unsafe-finally": "error",             // https://eslint.org/docs/rules/no-unsafe-finally
                "no-unsafe-optional-chaining": "error",   // https://eslint.org/docs/rules/no-unsafe-optional-chaining
                "no-unused-labels": "error",              // https://eslint.org/docs/rules/no-unused-labels
                "no-useless-backreference": "error",      // https://eslint.org/docs/rules/no-useless-backreference
                "no-useless-catch": "error",              // https://eslint.org/docs/rules/no-useless-catch
                "no-useless-escape": "error",             // https://eslint.org/docs/rules/no-useless-escape
                "no-with": "error",                       // https://eslint.org/docs/rules/no-with
                "require-yield": "error",                 // https://eslint.org/docs/rules/require-yield
                "use-isnan": "error",                     // https://eslint.org/docs/rules/use-isnan

                // Otras reglas
                "default-param-last": "warn",             // https://eslint.org/docs/rules/default-param-last
                "eqeqeq": "warn",                         // https://eslint.org/docs/rules/eqeqeq

                // Configuración recomendada del plugin prettier
                // Configuramos explícitamente las opciones de prettier a los valores predeterminados de prettier, aparte de tabWidth y endOfLine, que están configurados para no entrar en conflicto con
                // los valores predeterminados de Visual Studio. Si usamos los valores predeterminados de prettier para estas dos reglas, entonces habrá conflicto con Visual Studio.
                // Todas las opciones están descritas en https://prettier.io/docs/en/options.html
                "prettier/prettier": ["warn", {
                    tabWidth: 4,
                    endOfLine: "crlf",
                    printWidth: 80,
                    semi: true,
                    singleQuote: false,
                    quoteProps: "as-needed",
                    jsxSingleQuote: false,
                    trailingComma: "es5",
                    bracketSpacing: true,
                    arrowParens: "always",
                }],
            }, // reglas
        },
        {
            // Reglas específicas de JavaScript
            "files": ["*.js", "*.jsx", "*.mjs", "*.cjs"],
            "rules": {
                "constructor-super": "error",
                "getter-return": "error",
                "no-const-assign": "error",
                "no-dupe-args": "error",
                "no-dupe-class-members": "error",
                "no-dupe-keys": "error",
                "no-extra-semi": "error",
                "no-func-assign": "error",
                "no-import-assign": "error",
                "no-loss-of-precision": "error",
                "no-new-symbol": "error",
                "no-obj-calls": "error",
                "no-redeclare": "error",
                "no-setter-return": "error",
                "no-this-before-super": "error",
                "no-undef": "error",
                "no-unreachable": "error",
                "no-unsafe-negation": "error",
                "no-unused-vars": "error",
                "valid-typeof": "error",
            },
        },
        {
            // Reglas específicas de TypeScript
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "no-var": "error",
                "prefer-const": "error",
                "prefer-rest-params": "error",
                "prefer-spread": "error",

                // Reglas específicas de TypeScript del plugin typescript-eslint
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/ban-types": "error",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-empty-function": "error",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-extra-semi": "error",
                "@typescript-eslint/no-inferrable-types": "error",
                "@typescript-eslint/no-loss-of-precision": "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
                "@typescript-eslint/no-non-null-assertion": "warn",
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-unnecessary-type-constraint": "error",
                "@typescript-eslint/no-unused-vars": "warn",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/triple-slash-reference": "error",
            },
        },
    ],
};

const prettierDisabledConfig = {
    "overrides": [
        {
            "files": ["*.js", "*.jsx", "*.mjs", "*.cjs", "*.ts", "*.tsx"],
            "rules": {
                // Desactivar la única regla de Prettier.
                "prettier/prettier": "off",
                // Habilitar las reglas adecuadas de ESLint, con un comportamiento similar a Prettier.
                "arrow-parens": "warn",
                "eol-last": "warn",
                "new-parens": "warn",
                "no-multiple-empty-lines": "warn",
                "no-trailing-spaces": "warn",
            },
        },
        {
            "files": ["*.js", "*.jsx", "*.mjs", "*.cjs"],
            "rules": {
                "comma-dangle": ["warn", "always-multiline"],
                "indent": "warn",
                "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
                "semi": "warn",
            },
        },
    ],
};

module.exports = config;