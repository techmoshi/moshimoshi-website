import { test, expect } from '@playwright/test';

test('Homepage opens', async ({ page }) => {

  await page.goto('/');

  await expect(page).toHaveTitle(/Moshi/i);

});
