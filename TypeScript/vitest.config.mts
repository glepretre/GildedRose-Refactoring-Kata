import {defineConfig} from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    include: ['test/vitest/**/*.{spec,test}.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'lcov']
    }
  },
});
