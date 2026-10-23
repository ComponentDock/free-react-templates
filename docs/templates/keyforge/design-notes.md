# Keyforge — Design Notes

Reference: **Locksmith** — `https://colorlib.com/wp/template/locksmith/`  
Live preview: `https://preview.colorlib.com/theme/locksmith/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/locksmith-colorlib-template.jpg  
Shipped: https://keyforge.free.componentdock.com

KeyForge is a locksmith services landing page with a hero slider, a quote request form, a services grid, an about band and testimonials.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cinzel**, **Cinzel:wght@400;600;700**, **Poppins**

## Design tokens (`apps/keyforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f0a500` | brand |
| `--color-brand-dark` | `#d49400` | brand dark |
| `--color-ink` | `#1a1a2e` | ink |
| `--color-paper` | `#ffffff` | paper |
| `--color-slate` | `#f9f9f9` | slate |
| `--color-mist` | `#999999` | mist |
| `--color-body` | `#555555` | body |
| `--color-primary-50` | `#fef9e7` | primary 50 |
| `--color-primary-100` | `#fdf0c4` | primary 100 |
| `--color-primary-200` | `#fbe18a` | primary 200 |
| `--color-primary-300` | `#f9d150` | primary 300 |
| `--color-primary-400` | `#f0a500` | primary 400 |
| `--color-primary-500` | `#d49400` | primary 500 |
| `--color-primary-600` | `#b88200` | primary 600 |
| `--color-primary-700` | `#9c7000` | primary 700 |
| `--color-primary-800` | `#805c00` | primary 800 |
| `--color-primary-900` | `#604500` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Cinzel', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `QuoteForm` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · KeyForge

### `Hero`
*anchors only* — Hero slider · Previous slide · Next slide

### `QuoteForm`
*anchors only* — Name · Phone · Services

### `Services`
*anchors only* — Our Services · Services We Offer

### `About`
*anchors only* — Why Choose Us · Professional Security You Can Trust

### `Testimonials`
*anchors only* — Testimonials · What Our Clients Say

### `Footer`
*anchors only* — contentinfo · Back to top · About KeyForge · Quick Links · Our Services · Contact Us

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
- **Provenance ban.** No file under `apps/keyforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keyforge/public/CNAME` = `keyforge.free.componentdock.com`
  and the package `homepage` = `https://keyforge.free.componentdock.com`.
