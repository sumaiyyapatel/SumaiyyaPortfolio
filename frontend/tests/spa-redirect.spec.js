const { test, expect } = require('@playwright/test');

test('GitHub Pages redirect restores SPA navigation', async ({ page }) => {
  await page.goto('/?/work');
  await page.waitForFunction(() => window.location.pathname === '/work' && !window.location.search.startsWith('/'));
  await expect(page).toHaveURL(/\/work$/);
  await page.waitForSelector('#work');
  await expect(page.getByRole('heading', { name: 'MY WORK' })).toBeVisible();
});
