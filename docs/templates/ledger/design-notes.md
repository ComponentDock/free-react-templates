# Ledger — Design Notes

Reference: `https://colorlib.com/wp/template/accounting/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/accounting/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/daren-free-template.jpg — the ROW's slug `daren`, not the spec's `accounting`  
Shipped: https://ledger.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `daren` for this app while the spec records `accounting`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Recreation of ColorLib [Accounting](https://colorlib.com/wp/template/accounting/) (`https://preview.colorlib.com/theme/accounting/`), built as a high-conversion modern React single-page application using Vite, React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:ital,wght@0,400;0,600;0,700;1,400**, **Source Serif Pro**

## Design tokens (`apps/ledger/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ef1313` | brand |
| `--color-brand-tint` | `#ffe4e4` | brand tint |
| `--color-ink` | `#2a2a2a` | ink |
| `--color-heading` | `#2f373d` | heading |
| `--color-author` | `#0a0a0a` | author |
| `--color-meta` | `#8a8a8a` | meta |
| `--color-muted` | `#888888` | muted |
| `--color-footer-text` | `#8f8f8f` | footer text |
| `--color-input-text` | `#999999` | input text |
| `--color-footer-bg` | `#111516` | footer bg |
| `--color-dropdown` | `#fafafa` | dropdown |
| `--color-line` | `#e9ecee` | line |
| `--color-hairline` | `#ecf0f2` | hairline |
| `--color-footer-border` | `#3b3f40` | footer border |
| `--color-footer-top` | `#41404f` | footer top |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Source Serif Pro', Georgia, serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/ledger/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | — | no dedicated spec block |
| 2 | `Banner` | — | no dedicated spec block |
| 3 | `FeaturedPosts` | — | no dedicated spec block |
| 4 | `BorderDivider` | — | no dedicated spec block |
| 5 | `CategoryGrid` | — | no dedicated spec block |
| 6 | `PostList` | — | no dedicated spec block |
| 7 | `Sidebar` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
*anchors only* — Main · Open menu · Search

### `Banner`
*anchors only* — Featured story

### `FeaturedPosts`
*anchors only* — Featured posts

### `BorderDivider`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CategoryGrid`
*anchors only* — Categories

### `PostList`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Sidebar`
*anchors only* — Sidebar · search · Search Objects · Search Keyword · Popular Feeds · Categories

### `Footer`
*anchors only* — Subscribe · About Me · Contact us · Newsletter · Email address · Component Dock

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ledger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ledger/public/CNAME` = `ledger.free.componentdock.com`
  and the package `homepage` = `https://ledger.free.componentdock.com`.
