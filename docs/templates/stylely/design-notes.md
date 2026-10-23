# Stylely — Design Notes

Reference: **Hipstyle** — `https://colorlib.com/wp/template/hipstyle/`  
Live preview: `https://preview.colorlib.com/theme/hipstyle/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hipstyle-free-template.jpg  
Shipped: https://stylely.free.componentdock.com

Stylely is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hipstyle" design (https://colorlib.com/wp/template/hipstyle/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Rufina**, **Rufina:wght@400;700**

## Design tokens (`apps/stylely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f81c1c` | brand |
| `--color-brand-dark` | `#d91414` | brand dark |
| `--color-brand-light` | `#f44a40` | brand light |
| `--color-ink` | `#30383b` | Ink — headings + dark footer (#30383b from the original). |
| `--color-ink-dark` | `#242b2e` | ink dark |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — alternating light section background (#f0e9ff original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#f81c1c` | primary 500 |
| `--color-primary-600` | `#d91414` | primary 600 |
| `--color-primary-700` | `#b31212` | primary 700 |
| `--color-primary-800` | `#8c0e0e` | primary 800 |
| `--color-primary-900` | `#660a0a` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Rufina" (serif headings) + "Roboto" (sans body). |
| `--font-display` | `'Rufina', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Service expectations | see fidelity note below |
| 5 | `Offers` | Offers | see fidelity note below |
| 6 | `Pricing` | Pricing plan | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Team` | Artists team | see fidelity note below |
| 9 | `Appointment` | Appointment form | see fidelity note below |
| 10 | `Blog` | Blog | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Stylely", a "Home" link, section links, and a dark-mode toggle button.

### `Hero`
The system SHALL render a coral-red hero with a kicker, a level-1 headline, two call-to-action buttons, and a photograph.

### `About`
The system SHALL render an about section with a heading and supporting copy.

### `Services`
The system SHALL render a "Service Expectation" section with at least three service cards.

### `Offers`
The system SHALL render a "What We Offer" section with four photo cards.

### `Pricing`
The system SHALL render a "Pricing Plan" section with priced rows.

### `Testimonials`
The system SHALL render a "What Clients Say" section with a testimonial slider.

### `Team`
The system SHALL render a "Meet Our Artist" section with at least three member cards.

### `Appointment`
The system SHALL render a "Make an Appointment" section with a validated booking form.

### `Blog`
The system SHALL render a "Latest Style News" section with three news cards.

### `Footer`
The system SHALL render a footer with the site name, contact details, a newsletter form, and social links.

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
- **Provenance ban.** No file under `apps/stylely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stylely/public/CNAME` = `stylely.free.componentdock.com`
  and the package `homepage` = `https://stylely.free.componentdock.com`.
