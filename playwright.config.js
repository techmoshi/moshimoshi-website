import { defineConfig } from '@playwright/test';

export default defineConfig({

  use: {

    baseURL: 'http://localhost:4035',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'

  }

});
