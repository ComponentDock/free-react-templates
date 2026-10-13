# Template: Plisse — Tasks & Design Notes

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`).
New app name: `plisse` (`apps/plisse`, `@free-react-templates/plisse`).
Deploy target: `https://plisse.free.componentdock.com`.

## Why this template got a second pass

`TEMPLATES.md` listed Accordion 12 as done (`- [x]`) with **no app link**, and
no folder in `apps/` recreated the design — only the prep proposal
(`openspec/specs/template-accordion-twelve/`) existed. The row was corrected to
`[~]` while the recreation was built, then `[x]` + the live URL with it.

## Source reference (fetched 2026-10-13)

| Reference            | URL                                                                            | Result                                                        |
| -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| Live preview DOM     | `https://preview.colorlib.com/theme/bac/accordion-12/`                         | 200 (IPv4 only — IPv6 is IP-banned by Cloudflare, error 1106) |
| Source stylesheet    | `https://preview.colorlib.com/theme/bac/accordion-12/css/style.css?v=dd8c4315` | 200, 8,997 bytes                                              |
| Checklist screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-12.jpg`          | 200, AVIF, viewed at 2× zoom                                  |

Preview title `Accordion #2`; only `<h2 class="cl-my-5 cl-text-center">Bootstrap
Accordion #2</h2>` plus `#accordion_1 .custom-accordion` are on the page — the
snippet ships no navbar, hero or footer.

## Structure, in source order

1. `.content` wrapper — `padding: 7rem 0` on a white body.
2. Centred heading "Bootstrap Accordion #2" (measured ≈ 20px, medium weight, `#212529`).
3. `#accordion_1` — three `.cl-accordion-item` rows, `margin-bottom: 10px`, `border-radius: 4px`.
   - Row 1 open: `How to download and register?` — green bar, white text, up-chevron `\e316`.
   - Row 2 closed: `How to create your paypal account?` — hairline border, `#999` text, down-chevron `\e313`.
   - Row 3 closed: `How to link your paypal and bank account?`
   - Same lorem answer paragraph under each row (`#888`, `20px` padding).
4. (Added) Component Dock footer — mandatory for every template in this repo.

## Token table (from the source stylesheet)

`accent #72c02c` · `border-row #efefef` · `muted #999` · `body-copy #888` ·
`heading #212529` · `page #fff` · `radius 4px` · item gap `10px` · header
padding `15px` (label at `40px`) · icon at `left: 15px` · panel padding `20px` ·
page padding `7rem` · Roboto stack · `cl-container` (lg ⇒ 960px).

## Tasks (implementer stream)

1. [x] Copy the base app scaffold from `apps/pleat` (same source family) and rename the workspace to `@free-react-templates/plisse`.
2. [x] `public/CNAME` = `plisse.free.componentdock.com`; `homepage` set to the same host.
3. [x] Keep `injectUiSource()` + `plugins: [react(), injectUiSource(), tailwindcss()]` in `vite.config.ts`.
4. [x] Tests first (`App`, `Accordion`, `Footer`) from the spec scenarios.
5. [x] Implement `Accordion` (single-open, `aria-expanded`/`aria-controls` wiring) and the Component Dock `Footer`; reproduce `#72c02c` / `#efefef` / `#888` tokens in `@theme`.
6. [x] `npm install` at the repo root so `package-lock.json` registers the workspace.
7. [x] `bash scripts/verify-app.sh plisse` at 100% coverage + `openspec validate template-plisse --type spec`.

## Fidelity deltas (documented, intentional)

- **Mandatory footer** — the source snippet has none; the repo contract adds one.
- **Chevrons** — the icomoon glyphs `\e313`/`\e316` are replaced by `lucide-react`
  `ChevronDown`/`ChevronUp`; no font files are copied.
- **Heading level** — the source uses an `<h2>` for the page title; the
  recreation uses `<h1>` for the page and `<h3>` inside each row button so the
  document outline stays valid (same visual size/weight).
- **Container width** — the accordion column takes the Bootstrap `lg` container
  width (960px) rather than the `xl` 1140px, matching the screenshot proportions.
