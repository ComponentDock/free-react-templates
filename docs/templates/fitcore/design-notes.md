# Fitcore — Design Notes

Reference: **Fitnessclub** — `https://colorlib.com/wp/template/fitnessclub/`  
Live preview: `https://preview.colorlib.com/theme/fitnessclub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessclub-free-template.jpg  
Shipped: https://fitcore.free.componentdock.com

Recreate the ColorLib **Fitnessclub** design (https://colorlib.com/wp/template/fitnessclub/) as a React 19 + Tailwind CSS 4 + TypeScript single-page template under the name "FitCore".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@300;400;500;600;700**, **Teko**

## Design tokens (`apps/fitcore/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f04e3c` | brand |
| `--color-brand-dark` | `#c20505` | brand dark |
| `--color-ink` | `#2c234d` | Ink — dark text/headings (#2c234d from the original). |
| `--color-ink-dark` | `#1a1530` | ink dark |
| `--color-muted` | `#10285d` | Muted — secondary text. |
| `--color-primary-50` | `#fef2f1` | primary 50 |
| `--color-primary-100` | `#fde1de` | primary 100 |
| `--color-primary-200` | `#fbc4be` | primary 200 |
| `--color-primary-300` | `#f79a8f` | primary 300 |
| `--color-primary-400` | `#f36b5b` | primary 400 |
| `--color-primary-500` | `#f04e3c` | primary 500 |
| `--color-primary-600` | `#dc3322` | primary 600 |
| `--color-primary-700` | `#b9281a` | primary 700 |
| `--color-primary-800` | `#99241a` | primary 800 |
| `--color-primary-900` | `#80241c` | primary 900 |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | Fonts: Teko (display/headings) + Barlow (body). |
| `--font-display` | `'Teko', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header navigation | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `MembershipBanner` | Membership banner | see fidelity note below |
| 9 | `Schedule` | Schedule section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL display a transparent fixed header with brand logo, navigation links, and a "Become a Member" CTA, plus a responsive mobile hamburger menu.

### `Hero`
The template SHALL display a full-height hero with background image, accent subtitle, heading, CTA button, and a video play icon.

### `About`
The template SHALL display a two-column about section with an image and gym description.

### `Services`
The template SHALL display a dark-background services section with three service cards (Quality Equipment, Health Caring, Gym Strategies).

### `Testimonials`
The template SHALL display client feedback with a quote, author name, and role.

### `Gallery`
The template SHALL display a 2-column image gallery with hover overlays.

### `Team`
The template SHALL display trainer cards with images, roles, names, and social links.

### `MembershipBanner`
The template SHALL display a full-width dark membership offer banner with heading and CTA.

### `Schedule`
The template SHALL display a tab-based weekly timetable with day tabs and class rows.

### `Contact`
The template SHALL display contact information and a contact form.

### `Footer`
The template SHALL display a dark footer with about text, quick links, newsletter subscription, and a "Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/fitcore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitcore/public/CNAME` = `fitcore.free.componentdock.com`
  and the package `homepage` = `https://fitcore.free.componentdock.com`.
