import { newE2EPage } from '@stencil/core/testing';

describe('no-delegates-focus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<no-delegates-focus></no-delegates-focus>');

    const element = await page.find('no-delegates-focus');
    expect(element).toHaveClass('hydrated');
  });
});
