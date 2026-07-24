test('Login', async ({ page }) => {

await page.goto('/login');

await page.fill('#email','admin@test.com');

await page.fill('#password','123456');

await page.click('button[type=submit]');

await expect(page).toHaveURL('/dashboard');

});
