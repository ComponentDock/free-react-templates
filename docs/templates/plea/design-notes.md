# Plea — Design Notes

Reference: **Counselor** — `https://colorlib.com/wp/template/counselor/`  
Live preview: `https://preview.colorlib.com/theme/counselor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg  
Shipped: https://plea.free.componentdock.com

A Counseling / Legal Services template with top, hero, intro feature boxes, how it works, about and services sections. Recreation of ColorLib's **Counselor** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/plea/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#589167` | brand |
| `--color-brand-hover` | `#4a7d59` | brand hover |
| `--color-dark` | `#1a1a1a` | dark |
| `--color-body` | `#6c757d` | body |
| `--color-surface` | `#ffffff` | surface |
| `--color-surface-warm` | `#f5f4f0` | surface warm |
| `--color-surface-light` | `#f7f7f7` | surface light |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `IntroFeatures` | Intro feature boxes | see fidelity note below |
| 5 | `HowItWorks` | How It Works section | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Services` | Services section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Pricing` | Pricing section | see fidelity note below |
| 10 | `Appointment` | Appointment section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top bar with phone number, email address, and social media icons (Facebook, Twitter, Instagram, Dribbble).

### `Navbar`
The system SHALL render a sticky dark navigation bar with the brand name "Plea" and navigation links.

### `Hero`
The system SHALL render a full-width hero section with a background image, dark overlay, heading, subtitle, and CTA button.

### `IntroFeatures`
The system SHALL display three feature boxes with icons and labels in the intro section.

### `HowItWorks`
The system SHALL display a three-step process section with icons and descriptions.

### `About`
The system SHALL display a split layout section with an image on the left and text on the right.

### `Services`
The system SHALL display three service cards with icons, titles, and descriptions.

### `Testimonials`
The system SHALL display a carousel of client testimonials with quotes, names, and avatars.

### `Pricing`
The system SHALL display three pricing tiers with plan names, prices, feature lists, and CTA buttons.

### `Appointment`
The system SHALL display a contact form with fields for Name, Email, Phone, Date, Subject, and Message.

### `Blog`
The system SHALL display three blog post cards with images, dates, titles, and excerpts.

### `Footer`
The system SHALL display a multi-column footer with brand info, navigation links, contact details, and a "Made with Component Dock" attribution.

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
- **Provenance ban.** No file under `apps/plea/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/plea/public/CNAME` = `plea.free.componentdock.com`
  and the package `homepage` = `https://plea.free.componentdock.com`.
