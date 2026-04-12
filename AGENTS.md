# AGENTS.md

## Purpose

This repository contains a small browser-side JavaScript library that inspects computed CSS values and renders them inside a Bootstrap popover.

Use this file as the first-stop guide for coding agents working in this repo.

## Repository layout

- `js/popover-css-inspector.js`: primary source file and the main place for feature work or bug fixes.
- `js/popover-css-inspector.min.js`: built artifact generated from the main source file with `terser`.
- `index.html`: local demo page used for manual verification.
- `README.md`: public documentation and usage examples.
- `.github/workflows/*.yml`: CI, release, and publishing workflows.
- `package.json`: npm scripts, package metadata, and tool versions.
- `composer.json`: Packagist metadata for PHP users consuming the packaged asset.

## Working agreements

- Check `git status --short` before editing. The worktree may already contain user changes.
- Do not overwrite or revert unrelated local edits unless the user explicitly asks.
- Prefer minimal, targeted changes. This is a small library with a single main source file.
- Keep documentation in US English.
- Preserve compatibility with Bootstrap 5 usage patterns described in `README.md`.
- Treat `js/popover-css-inspector.min.js` as generated output. If the source changes, regenerate the minified file before finishing.

## Local environment

- Node is managed via `.nvmrc`.
- `package-lock.json` is present, so prefer `npm` over other package managers for repo maintenance.
- Dependencies are already installed in `node_modules` in this workspace, but verify commands rather than assuming they still pass.

## Commands

- Install dependencies: `npm ci`
- Lint JS: `npm run lint-js`
- Lint all configured checks: `npm run lint`
- Format files: `npm run prettier`
- Build distributable output: `npm run build`
- Regenerate minified file only: `npm run minify`
- Run size check: `npm run size`
- Serve demo locally: `npm run serve`
- Markdown lint: `npm run lint-markdown`
- Spellcheck: `npm run spellcheck`

## Edit guidance

- Make source changes in `js/popover-css-inspector.js`, not directly in the minified file.
- When behavior changes, update `README.md` and `index.html` if examples or docs need to stay in sync.
- Keep the distributed script browser-friendly and avoid introducing bundler-only patterns.
- Follow the existing code style enforced by Prettier and ESLint.
- Avoid adding new dependencies unless the user asks or the change clearly requires one.
- Keep comments sparse and useful.

## Validation checklist

For code changes, prefer this order:

1. Run `npm run lint-js`.
2. If source changed, run `npm run minify` or `npm run build`.
3. If docs changed, consider `npm run lint-markdown`.
4. If bundle size could change meaningfully, run `npm run size`.
5. Manually sanity-check `index.html` when UI behavior or popover rendering changes.

## CI and release notes

- Workflow files should stay in `.github/workflows/`.
- GitHub Actions are pinned to commit SHAs in this repo; preserve that convention.
- `actions/checkout` should keep `persist-credentials: false`.
- Dependabot config uses a 7-day cooldown period; keep that policy intact unless asked to change it.

## Common pitfalls

- `npm run build` formats files and runs `eslint --fix`, so it may produce broader diffs than expected.
- `npm test` currently maps to `npm run lint-js`; there is no separate automated browser test suite in the repo.
- Publishing expects the package version in `package.json` to match the release tag.

## Handoff expectations

- In the final summary, mention which verification commands were run and whether they passed.
- Call out any files intentionally left untouched because they had pre-existing user changes.
- If you changed behavior but did not update docs or demo content, explain why.
