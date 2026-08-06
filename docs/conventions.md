# Conventions

Consistent patterns for structure, naming, components, and error handling.

## File structure

- One template = one app folder: `apps/<template-name>/` (kebab-case, matches
  the template name; e.g. `apps/aurora`). Never two templates in one folder.
- **Templates get NEW, original names** — never reuse the ColorLib source name.
  The app folder/package is the NEW name; the source mapping
  (`colorlib.com/wp/template/<slug>/`) is recorded in the spec and PR.
- **When creating a new app/workspace, ALWAYS run `npm install` at the repo
  root before committing** so `package-lock.json` registers the new workspace —
  the deploy GitHub Action runs `npm ci` and fails with
  "Missing: @free-react-templates/<name> from lock file" on a stale lockfile.
  Verify with `grep -c "free-react-templates/<name>" package-lock.json`.
- App source layout:
  - `src/main.tsx` — entry (excluded from coverage)
  - `src/App.tsx` — composes the template's sections
  - `src/components/` — section components (`Navbar.tsx`, `Hero.tsx`, ...)
  - `src/index.css` — Tailwind entry + theme tokens
  - `src/test/setup.ts` — jest-dom import
- Shared UI lives in `packages/ui/src/` with a `cn.ts` utility and an
  `index.ts` barrel (public API).
- Specs: `openspec/specs/template-<name>/spec.md`.
- Docs: `docs/` (context, conventions, contracts, verification, self-review,
  `adr/`).

## Naming

| Thing              | Convention                | Example                            |
| ------------------ | ------------------------- | ---------------------------------- |
| Files/dirs         | kebab-case                | `apps/aurora`, `contact-form.tsx`  |
| Components         | PascalCase                | `Navbar`, `ServiceCard`            |
| Functions/vars     | camelCase                 | `handleSubmit`, `isLoading`        |
| Props interfaces   | `XxxProps`                | `ButtonProps`                      |
| Workspace packages | `@free-react-templates/*` | `@free-react-templates/aurora`     |
| Test files         | colocated `*.test.tsx`    | `Button.test.tsx` next to source   |
| Git commits        | conventional              | `feat:`, `fix:`, `test:`, `chore:` |

## Component patterns

- Function components with typed props (`interface XxxProps`), no default prop
  spreads that lose types.
- Compound components via `Object.assign` (see `Card` in `packages/ui`) when a
  section container needs sub-parts (`<Card.Header>`).
- Class names: always through `cn()` from `packages/ui` (clsx + tailwind-merge)
  so variants and overrides compose predictably. Variant maps are typed
  `Record<Variant, string>`.
- Accessibility: semantic elements (`<button>`, `<nav>`, `<main>`, `<label
htmlFor>`), `aria-label` on icon-only controls, `aria-expanded` on toggles,
  focus-visible rings on interactive elements.
- Dark mode: `dark:` utilities only (class-based variant); toggling flips a
  `.dark` class on `document.documentElement` and effects clean up after
  themselves.

## Error handling

- Forms: validate with zod schemas + react-hook-form patterns where needed;
  show per-field errors; block submit until valid.
- Async actions: try/catch with a user-facing error message; never swallow
  errors silently (log via console.error at minimum).
- Never use `any`; prefer typed error narrowing (`unknown` + type guard).
- Empty/loading/error states for every data-driven section.

## Testing conventions

- Vitest + Testing Library, jsdom, `globals: true` (RTL auto-cleanup).
- Query like a user: `getByRole`, `getByLabelText`, `getByText`; `user-event`
  for interactions.
- One `describe` per component; scenario-style `it` blocks mirroring the spec's
  Gherkin scenarios.
- Coverage must stay 100% lines/functions/branches/statements. If a line is
  genuinely untestable, prefer restructuring over exclusion; only the entry
  point (`main.tsx`), configs, CSS, and test files are excluded.

## Git workflow

- Small atomic commits with conventional messages.
- husky pre-commit runs lint-staged (oxlint --fix + prettier --write).
- husky pre-push runs the full gate — do not bypass with `--no-verify`.
- `TEMPLATES.md` statuses: `[ ]` not started · `[~]` in progress · `[x]` done.
