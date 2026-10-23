# Hush — Design Notes

Reference: **Serenity** — `https://colorlib.com/wp/template/serenity/`  
Live preview: `https://preview.colorlib.com/theme/serenity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/serenity-template-1770211390595.jpg  
Shipped: https://hush.free.componentdock.com

Hush is a single-page contemplative retreat center landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cormorant Garamond**, **Cormorant Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500**, **Inter**

## Design tokens (`apps/hush/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#e3e7e2` | primary 100 |
| `--color-primary-200` | `#c6cfc4` | primary 200 |
| `--color-primary-300` | `#a2b09f` | primary 300 |
| `--color-primary-400` | `#7d8f79` | primary 400 |
| `--color-primary-500` | `#63735f` | primary 500 |
| `--color-primary-600` | `#4d5b4a` | primary 600 |
| `--color-primary-700` | `#3f4a3d` | primary 700 |
| `--color-primary-800` | `#363f34` | primary 800 |
| `--color-primary-900` | `#2d332c` | primary 900 |
| `--color-primary-950` | `#1d211c` | primary 950 |
| `--color-stone-50` | `#faf9f7` | stone 50 |
| `--color-stone-100` | `#f3f1ec` | stone 100 |
| `--color-stone-200` | `#e6e1d8` | stone 200 |
| `--color-stone-300` | `#d6cfc3` | stone 300 |
| `--color-stone-400` | `#b3a99a` | stone 400 |
| `--color-stone-500` | `#94887a` | stone 500 |
| `--color-stone-600` | `#7a6d60` | stone 600 |
| `--color-stone-700` | `#6c5d51` | stone 700 |
| `--color-stone-800` | `#5c4f45` | stone 800 |
| `--color-stone-900` | `#594d44` | stone 900 |
| `--color-stone-950` | `#3a322b` | stone 950 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Body font — the original's Google Fonts pairing (Inter sans) |
| `--font-heading` | `'Cormorant Garamond', Georgia, serif` | Display font — Cormorant Garamond serif for headings |
| `--shadow-soft` | `0 10px 15px -3px rgb(77 91 74 / 0.2)` | Soft shadows from the demo stylesheet (btn-primary shadow) |
| `--shadow-soft-lg` | `0 20px 30px -8px rgb(77 91 74 / 0.28)` | shadow soft lg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `DailyOffice` | Daily Office section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Practices` | Practices section | see fidelity note below |
| 6 | `Retreats` | Retreats section | see fidelity note below |
| 7 | `SacredSpaces` | Sacred Spaces section | see fidelity note below |
| 8 | `Directors` | Spiritual Direction section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `ClosingCta` | Closing CTA | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed top navigation bar with the site name "Hush", anchor links to the page's sections, a "Book a Retreat" CTA, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-bleed hero with a scripture quote, a headline, subtext, two CTAs, and a scroll indicator.

### `DailyOffice`
The system SHALL render a dark band with four daily prayer office cards.

### `About`
The system SHALL render an about section with four stats and a narrative.

### `Practices`
The system SHALL render a practices section with six contemplative practice cards.

### `Retreats`
The system SHALL render a retreats section with three retreat cards, one featured.

### `SacredSpaces`
The system SHALL render a sacred spaces section with four space cards.

### `Directors`
The system SHALL render a spiritual direction section with four director cards.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes.

### `ClosingCta`
The system SHALL render a closing CTA band with a headline and two buttons.

### `Footer`
The system SHALL render a footer with prayer times, link columns, and a bottom bar.

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
- **Provenance ban.** No file under `apps/hush/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hush/public/CNAME` = `hush.free.componentdock.com`
  and the package `homepage` = `https://hush.free.componentdock.com`.
