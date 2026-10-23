# Gymcore — Design Notes

Reference: **Gutim** — `https://colorlib.com/wp/template/gutim/`  
Live preview: `https://preview.colorlib.com/theme/gutim/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gutim-free-template.jpg  
Shipped: https://gymcore.free.componentdock.com

A Fitness / Gym template with hero, services, classes, team, banner and register form collects user sections. Recreation of ColorLib **Gutim** — a fitness/gym HTML template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/gymcore/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f15d44` | brand |
| `--color-brand-dark` | `#e85d39` | brand dark |
| `--color-ink` | `#111111` | Ink — dark headings (#111111). |
| `--color-mist` | `#6b6b6b` | Body text gray (#6b6b6b). |
| `--color-paper` | `#f5f5f5` | Paper — light section backgrounds (#f5f5f5). |
| `--color-slate` | `#141414` | Slate — dark service background (#141414). |
| `--color-card-gray` | `#1e1e1e` | Card gray (#1e1e1e). |
| `--color-btn-start` | `#eb3c5a` | Button gradient start/end. |
| `--color-btn-end` | `#f67831` | btn end |
| `--color-primary-50` | `#fef2f0` | primary 50 |
| `--color-primary-100` | `#fde1dc` | primary 100 |
| `--color-primary-200` | `#fac3b8` | primary 200 |
| `--color-primary-300` | `#f69c89` | primary 300 |
| `--color-primary-400` | `#f17660` | primary 400 |
| `--color-primary-500` | `#f15d44` | primary 500 |
| `--color-primary-600` | `#e85d39` | primary 600 |
| `--color-primary-700` | `#c93420` | primary 700 |
| `--color-primary-800` | `#a52c1d` | primary 800 |
| `--color-primary-900` | `#86281d` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays navigation and CTA | see fidelity note below |
| 2 | `Hero` | Hero section shows fitness headline | see fidelity note below |
| 3 | `About` | About section describes the gym | see fidelity note below |
| 4 | `Services` | Services section lists offerings | see fidelity note below |
| 5 | `Classes` | Classes section shows available classes | see fidelity note below |
| 6 | `Team` | Team section shows trainers | see fidelity note below |
| 7 | `Testimonials` | Testimonials section shows member reviews | see fidelity note below |
| 8 | `Banner` | Banner section displays contact CTA | see fidelity note below |
| 9 | `Membership` | Membership section shows pricing plans | see fidelity note below |
| 10 | `Register` | Register form collects user info | see fidelity note below |
| 11 | `Blog` | Blog section shows latest posts | see fidelity note below |
| 12 | `FooterBanner` | Footer has contact info and Component Dock branding | see fidelity note below |
| 13 | `Footer` | Footer has contact info and Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display a logo, navigation links, and a "Sign Up Today" CTA button.

### `Hero`
The hero section SHALL display a background image, tagline, heading, description, and CTA button.

### `About`
The about section SHALL display an image with play button and descriptive text.

### `Services`
The services section SHALL display a 2x2 grid of service cards.

### `Classes`
The classes section SHALL display a grid of class cards with background images.

### `Team`
The team section SHALL display trainer cards with photos and names.

### `Testimonials`
The testimonials section SHALL display testimonial cards with quotes and star ratings.

### `Banner`
The banner section SHALL display a contact phone number and CTA button.

### `Membership`
The membership section SHALL display three pricing tier cards.

### `Register`
The register section SHALL display a form with input fields and submit button.

### `Blog`
The blog section SHALL display three blog post cards.

### `FooterBanner`
The footer SHALL display contact information, newsletter form, and a Component Dock link.

### `Footer`
The footer SHALL display contact information, newsletter form, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/gymcore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gymcore/public/CNAME` = `gymcore.free.componentdock.com`
  and the package `homepage` = `https://gymcore.free.componentdock.com`.
