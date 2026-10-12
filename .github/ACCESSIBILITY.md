# Accessibility

Popover CSS Inspector aims to be usable by everyone, including people who rely on assistive technologies such as screen readers, keyboard navigation, or magnification.

## Our approach

- The inspector renders computed CSS values inside a standard Bootstrap 5 popover, so it inherits Bootstrap's popover semantics and behavior.
- The property list is output as a labeled table so assistive technologies can identify its purpose.
- The demo page is checked with [HTMLHint](https://htmlhint.com/) in CI, and can be audited with [pa11y](https://pa11y.org/) using `npm run pa11y`.
- We aim to follow the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) at level AA where it applies to this library and its demo page.

## Known limitations

- The inspector is a developer tool for design systems and style guides. Popovers are triggered on the elements you choose to inspect, so the accessibility of the trigger elements depends on your own markup.
- Some demo elements are intentionally non-interactive (`pe-none`) so the popover can be shown without changing the element's state.

## Reporting an issue

If you find an accessibility barrier, please [open an issue](https://github.com/coliff/popover-css-inspector/issues/new) and include:

- The page or markup where the problem occurs
- The browser, operating system, and assistive technology (with versions) you used
- What you expected to happen and what actually happened

We welcome pull requests that improve accessibility.
