import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        exclude: ['<rootDir>/src/providers'],
    },
});
