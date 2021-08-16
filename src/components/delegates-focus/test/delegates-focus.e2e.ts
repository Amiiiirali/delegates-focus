import { newE2EPage } from '@stencil/core/testing';

describe('delegates-focus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<delegates-focus></delegates-focus>');

    const element = await page.find('delegates-focus');
    expect(element).toHaveClass('hydrated');
  });
});
