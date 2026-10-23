# Roastery — Design Notes

Reference: **Coffee Blend** — `https://colorlib.com/wp/template/coffee-blend/`  
Live preview: `https://preview.colorlib.com/theme/coffeeblend/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coffee-free-template-1.jpg  
Shipped: https://roastery.free.componentdock.com

Roastery is a coffee shop template. It recreates the ColorLib **Coffee Blend** design (https://colorlib.com/wp/template/coffee-blend/, preview: https://preview.colorlib.com/theme/coffeeblend/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Playfair Display**, **Playfair Display:wght@400;600;700;800**

## Design tokens (`apps/roastery/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d4a574` | brand |
| `--color-brand-dark` | `#b8895a` | brand dark |
| `--color-ink` | `#3e2723` | Espresso — dark brown headings/footer (#3e2723). |
| `--color-ink-dark` | `#1a1210` | ink dark |
| `--color-paper` | `#f5f0eb` | Cream — light section background (#f5f0eb). |
| `--color-latte` | `#ede4da` | Latte — secondary warm section background (#ede4da). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999). |
| `--color-charcoal` | `#1a1a1a` | Charcoal — dark background (#1a1a1a). |
| `--color-primary-50` | `#fdf8f3` | primary 50 |
| `--color-primary-100` | `#f9eddf` | primary 100 |
| `--color-primary-200` | `#f0d5b8` | primary 200 |
| `--color-primary-300` | `#e4bb8e` | primary 300 |
| `--color-primary-400` | `#d4a574` | primary 400 |
| `--color-primary-500` | `#c48e5a` | primary 500 |
| `--color-primary-600` | `#b07a45` | primary 600 |
| `--color-primary-700` | `#936438` | primary 700 |
| `--color-primary-800` | `#7a5030` | primary 800 |
| `--color-primary-900` | `#644228` | primary 900 |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Fonts: "Playfair Display" (headings) + "Lato" (body). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Stats` | — | no dedicated spec block |
| 5 | `Menu` | — | no dedicated spec block |
| 6 | `Testimonials` | — | no dedicated spec block |
| 7 | `Blog` | — | no dedicated spec block |
| 8 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Toggle dark mode · Mobile

### `Hero`
*anchors only* — Welcome to Roastery · Crafted Coffee, · Perfectly Blended · Explore Menu · Our Story

### `About`
*anchors only* — Our Story · A Passion for Perfect Coffee

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Menu`
*anchors only* — Our Menu · Explore Our Blends

### `Testimonials`
*anchors only* — Testimonials · What Our Customers Say

### `Blog`
*anchors only* — From Our Blog · Coffee Stories · Read More

### `Footer`
*anchors only* — alert · Roastery · Quick Links · Newsletter · Subscribe to get updates on new blends and seasonal specials. · Thanks for subscribing!

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
- **Provenance ban.** No file under `apps/roastery/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roastery/public/CNAME` = `roastery.free.componentdock.com`
  and the package `homepage` = `https://roastery.free.componentdock.com`.
