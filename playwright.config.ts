// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  testDir: './e2e',
  timeout: 1200000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://practice.expandtesting.com',
    
  },
});