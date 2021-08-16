import { newSpecPage } from '@stencil/core/testing';
import { NoDelegatesFocus } from '../no-delegates-focus';

describe('no-delegates-focus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NoDelegatesFocus],
      html: `<no-delegates-focus></no-delegates-focus>`,
    });
    expect(page.root).toEqualHtml(`
      <no-delegates-focus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </no-delegates-focus>
    `);
  });
});
