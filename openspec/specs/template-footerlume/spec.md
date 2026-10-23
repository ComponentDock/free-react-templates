# Template: FooterLume (Footer)

## Purpose

FooterLume is a minimal dark Bootstrap footer template — a near-black
footer pairing a `Menu` navigation row with a row of circular social
icons above a copyright bar credited to Component Dock.

It is an original React recreation of the ColorLib "Bootstrap Footer 17"
free template (source: https://colorlib.com/wp/template/bootstrap-footer-17/),
built under a DIFFERENT name (**FooterLume**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a footer showcase rather than a full page: white page
above (a centred placeholder heading in the demo), then a `#121212`
footer with white column headings, `rgba(255,255,255,0.7)` links,
`rgba(255,255,255,0.5)` body copy and 10%-white hairline dividers. Type
is Poppins throughout. The recreation keeps the demo framing so the
footer can be judged on its own.

## Design Tokens

| Token               | Value                        | Notes                            |
| ------------------- | ---------------------------- | -------------------------------- |
| Font family         | `'Poppins', sans-serif`      | Whole page                       |
| Page background     | `#ffffff`                    | Demo area above the footer       |
| Footer background   | `#121212`                    | `--color-footer-bg`              |
| Footer heading      | `#ffffff`                    | 14px, uppercase, wide tracking   |
| Footer link         | `rgba(255, 255, 255, 0.7)`   | Hover brightens to full white    |
| Footer body text    | `rgba(255, 255, 255, 0.5)`   | Address / blurb copy             |
| Footer muted        | `rgba(255, 255, 255, 0.3)`   | Copyright line                   |
| Divider             | `rgba(255, 255, 255, 0.1)`   | Column and bar separators        |

## Requirements

### Requirement 1: Demo Framing

The page SHALL show a 60vh white area containing a centred light-grey
`Footer #17`-style placeholder heading, with the dark footer pinned below.

#### Scenario: Visitor opens the page

- **WHEN** the page loads
- **THEN** a single h1 is visible in the white area
- **AND** the dark footer fills the width below it
- **AND** the document title is `FooterLume — Footer Template`

### Requirement 2: Footer Navigation And Social Row

The footer SHALL render one navigation block — the `Menu` heading over an
inline list of `navLinks` — beside a row of circular social icon links
(Facebook, Twitter/X, LinkedIn, Instagram, YouTube), each with an
`aria-label` and opening in a new tab.

#### Scenario: Visitor reads the footer

- **WHEN** the visitor scrolls into the footer
- **THEN** a `contentinfo` landmark is present
- **AND** the `Menu` heading is visible with its navigation links
- **AND** every social link carries an accessible name (Facebook, …)

### Requirement 3: Component Dock Credit And Copyright

The copyright bar SHALL read `© <year> All rights reserved. Made with
Component Dock` and that credit SHALL be a link to
`https://www.componentdock.com/`.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reads the copyright bar
- **THEN** a link named `Component Dock` points at
  `https://www.componentdock.com/`
- **AND** the line contains `All rights reserved` and the current year

### Requirement 4: Link Semantics

Every footer link SHALL be a real anchor with a resolvable `href` and an
accessible name, so the footer is usable by keyboard and screen readers.

#### Scenario: Visitor tabs through the footer

- **WHEN** the visitor tabs from the first footer link
- **THEN** focus visits each link in DOM order and each exposes a name

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/footerlume/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/footerlume/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/footerlume`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/footerlume`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/footerlume`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `footerlume.free.componentdock.com` and `homepage` matches
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
