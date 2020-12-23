module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'standart',
        'prettier', 
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
          version: "detect"
        }
      },
    plugins: ['react', 'prettier', 'babel', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'func-names': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-underscore-dangle': [
            'error',
            { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] },
        ],
        'react/prop-types': [0],
        'react/button-has-type': [0],
        'arrow-body-style': 0,
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: false,
            },
        ],
    },
};
