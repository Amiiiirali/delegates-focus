import { newSpecPage } from '@stencil/core/testing';
import { DelegatesFocus } from '../delegates-focus';

describe('delegates-focus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DelegatesFocus],
      html: `<delegates-focus></delegates-focus>`,
    });
    expect(page.root).toEqualHtml(`
      <delegates-focus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </delegates-focus>
    `);
  });
});
