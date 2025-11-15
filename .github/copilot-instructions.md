# Copilot Instructions

- Code is formatted with Prettier.
- For development, Node v22 or later is recommended.
- JavaScript code should be linted with ESLint 8.57.1.
- Documentation is in US English.
- Test page is hosted on GitHub Pages.
- Package is published to npmjs

## GitHub Actions

- The GitHub Actions workflows should be placed in the .github/workflows directory.
- The workflows should be named `<workflow-name>.yml`.
- All GitHub Actions should be pinned versions to avoid breaking changes (SHA-1).
- If using actions/checkout, it should have `persist-credentials: false` set.
