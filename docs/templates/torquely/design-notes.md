# Torquely — Design Notes

Reference: **Autorepair** — `https://colorlib.com/wp/template/autorepair/`  
Live preview: `https://preview.colorlib.com/theme/autorepair/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/autorepair-free-template.jpg  
Shipped: https://torquely.free.componentdock.com

Torquely is a single-page car repair service landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;800**

## Design tokens (`apps/torquely/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f79f24` | brand |
| `--color-brand-dark` | `#d97f0d` | brand dark |
| `--color-accent` | `#064acb` | Accent — blue #064acb secondary (intro strip, service icons). |
| `--color-ink` | `#212529` | Ink — headings (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#212529` | Coal — dark top bar / footer (#212529 from the original). |
| `--color-primary-50` | `#fff8eb` | primary 50 |
| `--color-primary-100` | `#ffedd0` | primary 100 |
| `--color-primary-200` | `#ffd79e` | primary 200 |
| `--color-primary-300` | `#ffbb66` | primary 300 |
| `--color-primary-400` | `#ff9d33` | primary 400 |
| `--color-primary-500` | `#f79f24` | primary 500 |
| `--color-primary-600` | `#e0820d` | primary 600 |
| `--color-primary-700` | `#b9680a` | primary 700 |
| `--color-primary-800` | `#93530d` | primary 800 |
| `--color-primary-900` | `#78440f` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts via index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IntroStrip` | Intro strip | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Stats` | Statistics section | see fidelity note below |
| 7 | `Appointment` | Appointment section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Pricing` | Pricing section | see fidelity note below |
| 11 | `Projects` | Projects section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with a dark top strip (address, phone, social icons), the site name "Torquely", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero carousel with two slides, each with a kicker, a level-1 headline, and a booking button, plus dot indicators.

### `IntroStrip`
The system SHALL render a blue intro strip with a wrench icon, a readiness headline, and a booking call-to-action.

### `Services`
The system SHALL render a services section with six service cards.

### `About`
The system SHALL render an about section with a headline, a paragraph, an image, and three value columns (Mission, Vision, Value).

### `Stats`
The system SHALL render a statistics section with four counters.

### `Appointment`
The system SHALL render an appointment booking section with a form that shows a confirmation after a valid submit.

### `Testimonials`
The system SHALL render a testimonials carousel with three slides and dot indicators.

### `Blog`
The system SHALL render a blog section with three post cards.

### `Pricing`
The system SHALL render a pricing section with four plans.

### `Projects`
The system SHALL render a projects section with four image cards.

### `Footer`
The system SHALL render a footer with contact information, business hours, and a copyright line.

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
- **Provenance ban.** No file under `apps/torquely/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/torquely/public/CNAME` = `torquely.free.componentdock.com`
  and the package `homepage` = `https://torquely.free.componentdock.com`.
