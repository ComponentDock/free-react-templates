# Fellowship — Design Notes

Reference: **Brotherlylove** — `https://colorlib.com/wp/template/brotherlylove/`  
Live preview: `https://preview.colorlib.com/theme/brotherlylove/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/brotherlylove-free-template.jpg  
Shipped: https://fellowship.free.componentdock.com

Fellowship is a free church community landing page template. It recreates a ColorLib Brotherlylove design under a different name with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Rubik**, **Rubik:wght@300;400;500;600;700**

## Design tokens (`apps/fellowship/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6c5b7b` | brand |
| `--color-brand-light` | `#8b7a9b` | brand light |
| `--color-brand-dark` | `#5a4a6a` | brand dark |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-dark-border` | `#2a2a3e` | dark border |
| `--color-text-muted` | `#6c757d` | text muted |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--font-heading` | `'Rubik', sans-serif` | font heading |
| `--font-body` | `'Rubik', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | Navbar with dropdowns | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `LatestSermon` | — | no dedicated spec block |
| 5 | `Welcome` | — | no dedicated spec block |
| 6 | `Features` | — | no dedicated spec block |
| 7 | `ChurchServices` | — | no dedicated spec block |
| 8 | `LatestSermonsEvents` | — | no dedicated spec block |
| 9 | `Testimonials` | Page renders all sections | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — banner · Top navigation

### `Navbar`
The navbar SHALL display desktop navigation links including dropdown menus for Ministries and Sermons, with a mobile hamburger toggle.

### `Hero`
The hero section SHALL display a full-viewport background image with a dark overlay, a heading, and call-to-action buttons.

### `LatestSermon`
*anchors only* — Latest sermon · Latest Sermon: · Rebuilding The Walls · Posted on June 28, 2018, Pastor John Smith

### `Welcome`
*anchors only* — Welcome · Play welcome video · Welcome To Fellowship · Church Pastor Gregg Smith

### `Features`
*anchors only* — Features

### `ChurchServices`
*anchors only* — Church services · Read More

### `LatestSermonsEvents`
*anchors only* — Sermons and events · Latest Sermons · Latest Events · Read More

### `Testimonials`
The template SHALL render a complete church landing page with a top bar, navbar, hero, latest sermon bar, welcome section, features section, church services section, latest sermons and events section, testimonials section, and footer.

### `Footer`
The footer SHALL display church quick links, events, contact information, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/fellowship/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fellowship/public/CNAME` = `fellowship.free.componentdock.com`
  and the package `homepage` = `https://fellowship.free.componentdock.com`.
