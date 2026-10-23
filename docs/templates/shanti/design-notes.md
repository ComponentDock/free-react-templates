# Shanti — Design Notes

Reference: **Yogalax** — `https://colorlib.com/wp/template/yogalax/`  
Live preview: `https://preview.colorlib.com/theme/yogalax/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yogalax-free-template.jpg  
Shipped: https://shanti.free.componentdock.com

Shanti is a single-page yoga & wellness template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@200;300;400;500;600**

## Design tokens (`apps/shanti/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-mauve-50` | `#faf0f7` | mauve 50 |
| `--color-mauve-100` | `#f7ebf3` | mauve 100 |
| `--color-mauve-200` | `#ecd9e6` | mauve 200 |
| `--color-mauve-300` | `#e0bfd6` | mauve 300 |
| `--color-mauve-400` | `#d9a8cb` | mauve 400 |
| `--color-mauve-500` | `#d291bc` | mauve 500 |
| `--color-mauve-600` | `#bd6fa3` | mauve 600 |
| `--color-mauve-700` | `#a5548c` | mauve 700 |
| `--color-mauve-800` | `#864372` | mauve 800 |
| `--color-mauve-900` | `#663757` | mauve 900 |
| `--color-night-900` | `#090808` | night 900 |
| `--color-body-500` | `#b3b3b3` | Body copy grey + section light from the reference |
| `--color-body-700` | `#4d4d4d` | body 700 |
| `--color-soft-100` | `#f8f9fa` | soft 100 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Work Sans (body + headings — weight 200/300 thin display) — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navigation bar | see fidelity note below |
| 2 | `Hero` | Full-viewport typewriter hero | see fidelity note below |
| 3 | `Intro` | Intro section with checklist | see fidelity note below |
| 4 | `Services` | Services row | see fidelity note below |
| 5 | `Programs` | Program grid with hover reveal | see fidelity note below |
| 6 | `Pricing` | Membership pricing cards | see fidelity note below |
| 7 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 8 | `Counter` | Dark counter band | see fidelity note below |
| 9 | `Blog` | Blog posts row | see fidelity note below |
| 10 | `Gallery` | Photo gallery strip | see fidelity note below |
| 11 | `Footer` | Mauve footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with the site brand, primary links, and a scroll state that turns it into a fixed white bar.

### `Hero`
The system SHALL render a full-height hero with a photographic background, mauve gradient overlay, rotating typewriter headline, subheading, and a pill CTA button.

### `Intro`
The system SHALL render an image-backed intro section with a right-aligned heading, paragraph, and a five-item benefit checklist.

### `Services`
The system SHALL render a light-background services row of four cards with circular mauve icons.

### `Programs`
The system SHALL render a "Choose Your Level & Focus" grid of six photo cards that reveal a mauve tint and white text on hover.

### `Pricing`
The system SHALL render a "Membership Cards" section with three white pricing cards.

### `Testimonials`
The system SHALL render a "Successful Stories" carousel of testimonial cards with circular quote badges and avatars.

### `Counter`
The system SHALL render a dark parallax counter band with four animated statistics.

### `Blog`
The system SHALL render a "Recent Posts" row of three blog cards with an overlapping date card.

### `Gallery`
The system SHALL render a "See the latest photos" gallery of four photo tiles with hover-revealed Instagram icons.

### `Footer`
The system SHALL render the signature mauve footer with logo, address, social links, and the bottom credit bar.

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
- **Provenance ban.** No file under `apps/shanti/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shanti/public/CNAME` = `shanti.free.componentdock.com`
  and the package `homepage` = `https://shanti.free.componentdock.com`.
