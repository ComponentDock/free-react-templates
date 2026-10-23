# Benevol — Design Notes

Reference: **Foundation** — `https://colorlib.com/wp/template/foundation/`  
Live preview: `https://preview.colorlib.com/theme/foundation/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foundation-free-template.jpg  
Shipped: https://benevol.free.componentdock.com

Benevol is a single-page charity / nonprofit website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Foundation" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Anton**, **Dancing Script**, **Nunito**

## Design tokens (`apps/benevol/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff3ec` | primary 50 |
| `--color-primary-100` | `#ffe4d4` | primary 100 |
| `--color-primary-200` | `#ffc5a8` | primary 200 |
| `--color-primary-300` | `#ff9d70` | primary 300 |
| `--color-primary-400` | `#ff7438` | primary 400 |
| `--color-primary-500` | `#fd5f00` | primary 500 |
| `--color-primary-600` | `#fd5f00` | primary 600 |
| `--color-primary-700` | `#d75100` | primary 700 |
| `--color-primary-800` | `#b84700` | primary 800 |
| `--color-primary-900` | `#963a00` | primary 900 |
| `--color-gold` | `#cda558` | gold |
| `--color-panel` | `#4e4e4e` | panel |
| `--color-maroon` | `#a23131` | maroon |
| `--color-footer` | `#333333` | footer |
| `--color-ink` | `#25262a` | ink |
| `--color-light` | `#f8f9fa` | light |
| `--color-line` | `#e9ecef` | line |
| `--color-role` | `#b8b8b8` | role |
| `--color-footlink` | `#999999` | footlink |
| `--color-secondary` | `#6c757d` | secondary |
| `--font-display` | `'Anton', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Dancing Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar with wordmark and anchor links | see fidelity note below |
| 2 | `HeroSlider` | Hero image slider | see fidelity note below |
| 3 | `IntroPanels` | Intro engagement panels | see fidelity note below |
| 4 | `Mission` | About / mission with video popup and counters | see fidelity note below |
| 5 | `Discover` | Discover section with alternating rows | see fidelity note below |
| 6 | `DonateCta` | Donate call-to-action | see fidelity note below |
| 7 | `Causes` | Causes grid | see fidelity note below |
| 8 | `Team` | Leadership team | see fidelity note below |
| 9 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Contact` | Contact form | see fidelity note below |
| 12 | `Footer` | Footer with newsletter and social links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a white sticky navbar with an Anton uppercase wordmark on the left, six smooth-scroll anchor links on the right, an active-link accent, and a mobile slide-in menu.

### `HeroSlider`
The system SHALL render a full-width two-image hero slider with previous and next controls.

### `IntroPanels`
The system SHALL render three equal solid-color panels directly below the hero, each with a framed inner box, an uppercase white heading, and a muted paragraph.

### `Mission`
The system SHALL render a background-image section with a gold overlay containing a video-popup figure, a "Our Mission" heading with two paragraphs, and four animated stat counters.

### `Discover`
The system SHALL render a "Discover" heading block followed by two alternating image/text rows, each with a heading, a paragraph, and two mini counters.

### `DonateCta`
The system SHALL render a gold-overlay background section with a white headline and a full-width orange "Donate Now" button.

### `Causes`
The system SHALL render a three-column grid of six cause cards, each with a grey icon, an orange uppercase heading, and a paragraph.

### `Team`
The system SHALL render an "Our Leadership" section with three member cards, each with a circular avatar, name, role, blurb, and three orange social buttons.

### `Testimonials`
The system SHALL render a gold-overlay background section with a "Testimonial" heading and a carousel of four quotes with avatars and names.

### `Blog`
The system SHALL render a light-grey blog section with a heading and two large article cards with image, title, date/byline, excerpt, and an orange link.

### `Contact`
The system SHALL render a contact section with a two-column name row, an email input, a message textarea, and an orange submit button.

### `Footer`
The system SHALL render a dark grey footer with an About column, a Features link column, a paragraph/newsletter column with a subscribe input and button, a Follow Us social row, and a copyright line.

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
- **Provenance ban.** No file under `apps/benevol/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/benevol/public/CNAME` = `benevol.free.componentdock.com`
  and the package `homepage` = `https://benevol.free.componentdock.com`.
