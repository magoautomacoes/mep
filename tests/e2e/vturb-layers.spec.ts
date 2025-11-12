import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://localhost:5173/';

const viewports = [
  { width: 320, height: 640 },
  { width: 375, height: 667 },
  { width: 768, height: 1024 },
  { width: 1280, height: 800 },
  { width: 1920, height: 1080 },
];

test.describe('VTurb player layering and responsiveness', () => {
  for (const vp of viewports) {
    test(`no overlay at ${vp.width}x${vp.height}`, async ({ page, browserName }) => {
      await page.setViewportSize(vp);
      await page.goto(baseUrl);

      const container = page.locator('[data-testid="vturb-container"]');
      await expect(container).toBeVisible();

      // Wait for intersection init (script appended) or fallback poster
      const element = page.locator('vturb-smartplayer[data-testid="vturb-element"]');
      await expect(element).toBeVisible();

      // Poster must not block interaction
      const poster = page.locator('[data-testid="vturb-poster"]');
      if (await poster.count()) {
        const pointerEvents = await poster.evaluate((el) => getComputedStyle(el).pointerEvents);
        expect(pointerEvents).toBe('none');
      }

      // vturb must be the top-most element at center of the player
      const box = await container.boundingBox();
      expect(box).toBeTruthy();
      const centerX = Math.floor((box!.x + box!.x + box!.width) / 2);
      const centerY = Math.floor((box!.y + box!.y + box!.height) / 2);

      const topTag = await page.evaluate(({ x, y }) => {
        const el = document.elementFromPoint(x, y);
        return el?.tagName?.toLowerCase() || null;
      }, { x: centerX, y: centerY });

      expect([topTag]).toContain('vturb-smartplayer');

      // z-index should be >= 10 inside its stacking context
      const zIndex = await element.evaluate((el) => getComputedStyle(el).zIndex);
      expect(Number(zIndex)).toBeGreaterThanOrEqual(10);
    });
  }
});