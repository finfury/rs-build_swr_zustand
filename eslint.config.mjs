import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';

export default [
    js.configs.recommended,
    {
        files: ['**!/!*.{js,jsx,ts,tsx}'],
        plugins: {
            '@typescript-eslint': typescript,
            'react': react,
        },
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // TypeScript правила
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // React правила
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/prop-types': 'error',
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/no-unused-state': 'error',

            // Общие правила
            'no-console': 'warn',
            'no-unused-expressions': 'error',
            'no-unreachable': 'error',
        },
    },
];
