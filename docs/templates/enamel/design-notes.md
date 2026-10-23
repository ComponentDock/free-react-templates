# Enamel — Design Notes

Reference: **Dentista** — `https://colorlib.com/wp/template/dentista/`  
Live preview: `https://preview.colorlib.com/theme/dentista/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dentista-free-template.jpg  
Shipped: https://enamel.free.componentdock.com

Enamel is a single-page dental clinic website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/enamel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#46b7de` | primary |
| `--color-ocean` | `#24a1cd` | ocean |
| `--color-lime` | `#a8c337` | lime |
| `--color-lime-hover` | `#93ad30` | lime hover |
| `--color-ink` | `#000000` | ink |
| `--color-mist` | `#6c757d` | mist |
| `--color-cloud` | `#fafafa` | cloud |
| `--color-skyline` | `#c8eaf5` | skyline |
| `--color-primary-50` | `#eff9fd` | primary 50 |
| `--color-primary-100` | `#d9f1fa` | primary 100 |
| `--color-primary-200` | `#b0e3f4` | primary 200 |
| `--color-primary-300` | `#82d1ed` | primary 300 |
| `--color-primary-400` | `#5cc2e6` | primary 400 |
| `--color-primary-500` | `#46b7de` | primary 500 |
| `--color-primary-600` | `#2fa8d3` | primary 600 |
| `--color-primary-700` | `#24a1cd` | primary 700 |
| `--color-primary-800` | `#1c7ea3` | primary 800 |
| `--color-primary-900` | `#175f7b` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: Poppins (300/400/500/600) — Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top contact bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `Welcome` | Welcome section | see fidelity note below |
| 5 | `Consultation` | Consultation band | see fidelity note below |
| 6 | `Services` | Services grid | see fidelity note below |
| 7 | `QuoteIntro` | Quote intro | see fidelity note below |
| 8 | `Doctors` | Doctors grid | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `CtaBand` | Free consultation CTA band | see fidelity note below |
| 11 | `Pricing` | Pricing | see fidelity note below |
| 12 | `Blog` | Blog | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top bar above the navbar with contact info left, the logo centered and opening hours right.

### `Navbar`
The system SHALL render a transparent navbar over the slider with black uppercase links and a blue active link, plus a mobile collapsed menu.

### `HeroSlider`
The system SHALL render a 600px photo slider with two slides, each with a black headline, subheading and a lime button.

### `Welcome`
The system SHALL render a split section with a photo, a "Welcome to Enamel" subheading, a big headline, two paragraphs and a founder card.

### `Consultation`
The system SHALL render a blue three-column band with a services teaser, a Free Consultation appointment form and a Find A Doctor teaser.

### `Services`
The system SHALL render a heading block and eight service cards with icons and titles.

### `QuoteIntro`
The system SHALL render a parallax photo band with a single headline and paragraph.

### `Doctors`
The system SHALL render a heading block and four doctor cards with photo, name, role, blurb and hover-reveal social icons.

### `Testimonials`
The system SHALL render a light-background section with four horizontal testimonial cards (circular photo + quote + name + role).

### `CtaBand`
The system SHALL render a photo band with a dark overlay, a headline and a lime button.

### `Pricing`
The system SHALL render four pricing cards with a plan name, price, feature list and a pill Get Offer button that turns lime on hover.

### `Blog`
The system SHALL render a light-background section with three blog post cards (image with blue date box, title, excerpt, Read More link).

### `Footer`
The system SHALL render a blue footer with four widget columns (About + Questions, Links + Services, Recent Blog, Opening Hours + Subscribe) and a copyright bar.

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
- **Provenance ban.** No file under `apps/enamel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/enamel/public/CNAME` = `enamel.free.componentdock.com`
  and the package `homepage` = `https://enamel.free.componentdock.com`.
