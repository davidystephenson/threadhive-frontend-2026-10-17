# Project Guidance

## Project Shape

- This is a Vite + React frontend. `src/App.jsx` composes the app; `src/pages/` contains page-level views, `src/components/` contains reusable UI, and `src/services/` provides data access.
- Services currently read demo data from `data/dummyData.js`; treat them as mock adapters, not live API integrations.
- Styling uses React-Bootstrap, Bootstrap utilities, and component-level CSS. Follow the nearest component's pattern and preserve responsive, accessible controls.
- See [resources/prompts.md](resources/prompts.md) for course-provided frontend guidance. Verify commands against `package.json`; its suggested `npm run prettier` is not configured.

## Commands

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production build.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.
- `npm test` runs Vitest. The current config references `tests/setup.js`, and no test suite is present yet, so check the test setup before relying on this command.

## Current Baseline

- `npm run build` succeeds.
- `npm run lint` currently reports unused-variable errors in existing source files; distinguish those baseline issues from diagnostics introduced by your changes.
- Demo user data includes plaintext sample passwords; do not treat it as a real authentication or security implementation.

## Styling

1. React-Bootstrap components over raw HTML:

- Card instead of div wrappers
- Button instead of button
- Badge instead of span with badge classes
- Form components instead of raw inputs
- Container / Row / Col for layout

1. Prefer Bootstrap utility classes over custom CSS:

- Spacing: m-*, p-*, gap-*, mb-*, mt-*
- Layout: d-flex, justify-content-*, align-items-*
- Typography: fw-bold, text-muted, small
- Borders: border, rounded, shadow-sm
- Backgrounds: bg-light, bg-body-tertiary

1. Do NOT:

- Invent unnecessary custom CSS classes
- Use inline styles unless unavoidable
- Add unnecessary wrapper divs
- Over-nest layout structures

1. Maintain:

- Responsiveness
- Proper spacing rhythm (prefer gap-2, gap-3, mb-3)
- Clear visual hierarchy and semantic structure
- Accessibility (aria-label, proper button types)
