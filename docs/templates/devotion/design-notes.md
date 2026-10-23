# Devotion — Design Notes

Reference: **Faithful** — `https://colorlib.com/wp/template/faithful/`  
Live preview: `https://preview.colorlib.com/theme/faithful/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/faithful-free-template.jpg  
Shipped: https://devotion.free.componentdock.com

Devotion is a single-page church/charity landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Faithful" charity website template, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Amatic SC**, **Amatic SC:wght@400;700**, **Work Sans**

## Design tokens (`apps/devotion/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-dark` | `#d93025` | brand dark |
| `--color-navy` | `#1b2430` | navy |
| `--color-navy-light` | `#243447` | navy light |
| `--color-amber` | `#ffc107` | amber |
| `--color-blue-accent` | `#0d6efd` | blue accent |
| `--color-surface` | `#f8f9fa` | surface |
| `--font-worksans` | `'Work Sans', sans-serif` | font worksans |
| `--font-amatic` | `'Amatic SC', cursive` | font amatic |

> The spec has no section-level requirements; the order below is read from `apps/devotion/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | — | no dedicated spec block |
| 3 | `EventsBanner` | — | no dedicated spec block |
| 4 | `ChurchServices` | — | no dedicated spec block |
| 5 | `LatestSermon` | — | no dedicated spec block |
| 6 | `Features` | — | no dedicated spec block |
| 7 | `UpcomingEvents` | — | no dedicated spec block |
| 8 | `ContactInfo` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · Devotion

### `HeroSlider`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `EventsBanner`
*anchors only* — Upcoming Events · December Camp Meeting · The camp meeting will start in

### `ChurchServices`
*anchors only* — Church Services · Read More

### `LatestSermon`
*anchors only* — Play sermon video · Latest Sermon · God is Love · Ptr. Johnson · If ye love Me, keep My Commandments. · Watch Video

### `Features`
*anchors only* — More Features · Read More

### `UpcomingEvents`
*anchors only* — Upcoming Events

### `ContactInfo`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
*anchors only* — Facebook · Twitter · Instagram

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
- **Provenance ban.** No file under `apps/devotion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/devotion/public/CNAME` = `devotion.free.componentdock.com`
  and the package `homepage` = `https://devotion.free.componentdock.com`.
