test('Search Product', async ({ page }) => {

await page.goto('/');

await page.fill('input[type=search]','cake');

await page.keyboard.press('Enter');

await expect(page.locator('.product')).toHaveCount(1);

});
