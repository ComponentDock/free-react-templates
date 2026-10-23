# Sculpt — Design Notes

Reference: **Flawless** — `https://colorlib.com/wp/template/flawless/`  
Live preview: `https://preview.colorlib.com/theme/flawless/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/flawless-free-template.jpg  
Shipped: https://sculpt.free.componentdock.com

Sculpt is a single-page gym / fitness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;700**

## Design tokens (`apps/sculpt/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f17445` | brand |
| `--color-brand-hover` | `#f3865d` | brand hover |
| `--color-light` | `#f2f3f7` | light |
| `--color-footer` | `#25282a` | footer |
| `--color-gold` | `#f7af1d` | gold |
| `--color-ink` | `#000000` | ink |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `IntroCards` | Intro program cards | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Schedule` | Class schedule | see fidelity note below |
| 6 | `Shop` | Shop row | see fidelity note below |
| 7 | `Counters` | Counter band | see fidelity note below |
| 8 | `Trainers` | Trainers carousel | see fidelity note below |
| 9 | `Testimonials` | Testimonial band | see fidelity note below |
| 10 | `Classes` | Classes cards | see fidelity note below |
| 11 | `RequestForm` | Request form | see fidelity note below |
| 12 | `Events` | Upcoming events | see fidelity note below |
| 13 | `Blog` | Recent blog | see fidelity note below |
| 14 | `Gallery` | Gallery | see fidelity note below |
| 15 | `Newsletter` | Newsletter band | see fidelity note below |
| 16 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with the uppercase wordmark on the left and the site links on the right.

### `Hero`
The system SHALL render a full-screen photo carousel with four motivational headlines and a scroll indicator.

### `IntroCards`
The system SHALL render five equal-width solid-orange cards overlapping the hero bottom edge, each with a program name, price, blurb, and MORE link.

### `Services`
The system SHALL render a "Work hard stay humble" heading, a 2×2 grid of program services with icons, and a photo collage on the right.

### `Schedule`
The system SHALL render a light-grey schedule section with pill weekday tabs and a grid of daily classes.

### `Shop`
The system SHALL render four products with images, uppercase titles, orange prices, and a hover cart bar.

### `Counters`
The system SHALL render a photo-background band with four animated statistics.

### `Trainers`
The system SHALL render a carousel of five trainer cards with photos, names, and roles.

### `Testimonials`
The system SHALL render a photo-background band with five testimonial columns.

### `Classes`
The system SHALL render three class cards with circular photos and orange price badges.

### `RequestForm`
The system SHALL render a solid-orange section with a request form (service select, fullname, phone, date, and a pill submit button).

### `Events`
The system SHALL render three event cards with a date block, organizer, title, and location.

### `Blog`
The system SHALL render a light-grey blog strip with three article cards carrying a date chip on the image.

### `Gallery`
The system SHALL render a gallery grid of ten photos with a hover icon.

### `Newsletter`
The system SHALL render an orange newsletter band with an email input and a Subscribe Now button.

### `Footer`
The system SHALL render a dark four-column footer and a copyright bar.

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
- **Provenance ban.** No file under `apps/sculpt/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sculpt/public/CNAME` = `sculpt.free.componentdock.com`
  and the package `homepage` = `https://sculpt.free.componentdock.com`.
