# Vinyasa — Design Notes

Reference: **Yogaflex** — `https://colorlib.com/wp/template/yogaflex/`  
Live preview: `https://preview.colorlib.com/theme/yogaflex/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yogaflex-free-template.jpg  
Shipped: https://vinyasa.free.componentdock.com

Vinyasa is a single-page yoga/fitness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@100;300;400;500;700**

## Design tokens (`apps/vinyasa/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0093df` | brand |
| `--color-brand-dark` | `#0084c5` | brand dark |
| `--color-ink` | `#222222` | Ink — headings (#222222 from the original). |
| `--color-muted` | `#777777` | Muted — secondary text (#777777 from the original). |
| `--color-mist` | `#f9f9ff` | Mist — light section background (#f9f9ff from the original). |
| `--color-primary-50` | `#e8f6fe` | primary 50 |
| `--color-primary-100` | `#c9eafe` | primary 100 |
| `--color-primary-200` | `#92d5fd` | primary 200 |
| `--color-primary-300` | `#5cc0fb` | primary 300 |
| `--color-primary-400` | `#26abf9` | primary 400 |
| `--color-primary-500` | `#0093df` | primary 500 |
| `--color-primary-600` | `#0093df` | primary 600 |
| `--color-primary-700` | `#0084c5` | primary 700 |
| `--color-primary-800` | `#006fa3` | primary 800 |
| `--color-primary-900` | `#005a82` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original font: "Roboto" (100/300/400/500/700). |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top info bar | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero banner | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `FeaturedClasses` | Featured classes | see fidelity note below |
| 6 | `Schedule` | Weekly schedule table | see fidelity note below |
| 7 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 8 | `Cta` | CTA band | see fidelity note below |
| 9 | `Blog` | Blog cards | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a dark top strip above the header with a phone number and a "Book Now" link.

### `Navbar`
*anchors only* — Primary · Mobile navigation

### `Hero`
The system SHALL render a full-width hero with a background photo, a small uppercase brand label, a headline with the brand-colored word, and a "Become a Member" button.

### `About`
The system SHALL render an about section with a centered title, a paragraph, and a 2x2 grid of feature cards next to an image.

### `FeaturedClasses`
The system SHALL render a "Our Featured Classes" section with exactly four class cards, each with an image and a "Book an appointment" link.

### `Schedule`
The system SHALL render a "Schedule your Fitness Process" section with a centered weekly table (Course name + Mon–Fri columns) whose rows highlight on hover.

### `Testimonials`
The system SHALL render a "Client's Feedback" section with a carousel of testimonial cards, each with a round avatar, a quote, an author name, and a role.

### `Cta`
The system SHALL render a full-width photo CTA section with a headline, a paragraph, and a "Become a Member" button.

### `Blog`
The system SHALL render an "Our Recent Blogs" section with exactly three blog cards, each with an image, a title link, an excerpt, and a meta row with date, likes, and comments.

### `Footer`
The system SHALL render a black footer with an "About Us" blurb, a "Contact Us" block with address and phone, a "Newsletter" block with an email input, a copyright line, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/vinyasa/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vinyasa/public/CNAME` = `vinyasa.free.componentdock.com`
  and the package `homepage` = `https://vinyasa.free.componentdock.com`.
