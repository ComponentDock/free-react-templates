# Websmith — Design Notes

Reference: **Accent** — `https://colorlib.com/wp/template/accent/`  
Live preview: `https://preview.colorlib.com/theme/accent/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accent-free-template.jpg  
Shipped: https://websmith.free.componentdock.com

Websmith is a digital-agency / web-studio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700;900**

## Design tokens (`apps/websmith/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | Websmith brand palette — recreated from the original accent design |
| `--color-brand-dark` | `#0056b3` | brand dark |
| `--color-ink` | `#212529` | Ink — dark headings/text (#000, #212529, #333) |
| `--color-light-bg` | `#f8f9fa` | Light section background |
| `--color-muted` | `#b3b3b3` | Muted gray tones |
| `--color-muted-dark` | `#8c8c8c` | muted dark |
| `--color-card-border` | `#eee` | Card border |
| `--color-success` | `#28a745` | Success green |
| `--color-footer-bg` | `#333333` | Footer background |
| `--color-primary-50` | `#e7f1ff` | primary 50 |
| `--color-primary-100` | `#cce5ff` | primary 100 |
| `--color-primary-200` | `#99caff` | primary 200 |
| `--color-primary-300` | `#66b0ff` | primary 300 |
| `--color-primary-400` | `#3395ff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0062cc` | primary 600 |
| `--color-primary-700` | `#004a99` | primary 700 |
| `--color-primary-800` | `#003166` | primary 800 |
| `--color-primary-900` | `#001933` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Body font: Roboto |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About | see fidelity note below |
| 4 | `Team` | Team | see fidelity note below |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `Portfolio` | Portfolio | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Contact` | Contact | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky white navbar with a brand wordmark, five scrollspy links, and a hamburger-driven off-canvas mobile menu.

### `Hero`
The system SHALL render a full-viewport hero with intro text on the left over a right-anchored sliding image with circular arrow controls and a pill CTA.

### `About`
The system SHALL render an about split with a photo, an eyebrow + heading, a blue-check service list, and a "Watch the video" play link.

### `Team`
The system SHALL render a "Meet The Team" duo with photos, names, and roles.

### `Services`
The system SHALL render six icon cards on the light-gray band, each with a circular blue icon, title, blurb, and "Learn more" link.

### `Portfolio`
The system SHALL render a "Recent Works" project slider with three slides, each with title, description, role line, quote, and a "Visit website" button.

### `Testimonials`
The system SHALL render an "Our Client Sayings" testimonial carousel on the light-gray band with quotes, authors, and controls.

### `Contact`
The system SHALL render a "Get In Touch" section with a four-field contact form and a "Send Message" submit button.

### `Footer`
The system SHALL render a dark footer with brand, navigation links, a newsletter signup, and the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/websmith/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/websmith/public/CNAME` = `websmith.free.componentdock.com`
  and the package `homepage` = `https://websmith.free.componentdock.com`.
