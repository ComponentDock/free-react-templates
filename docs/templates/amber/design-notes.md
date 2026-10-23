# Amber — Design Notes

Reference: **The Barber** — `https://colorlib.com/wp/template/the-barber/`  
Live preview: `https://preview.colorlib.com/theme/thebarber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thebarber-free-template.jpg  
Shipped: https://amber.free.componentdock.com

Amber is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "The Barber" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/amber/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5e13` | brand |
| `--color-brand-dark` | `#e04e0a` | brand dark |
| `--color-gold` | `#bc9321` | gold |
| `--color-ink` | `#4a3600` | Ink — dark brown headings/footer (#4A3600 from the original). |
| `--color-ink-dark` | `#382a03` | ink dark |
| `--color-paper` | `#f9f9ff` | Soapstone — light section background (#f9f9ff from the original). |
| `--color-lavender` | `#f0e9ff` | Lavender — secondary light section background (#f0e9ff). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe6d5` | primary 100 |
| `--color-primary-200` | `#ffc8aa` | primary 200 |
| `--color-primary-300` | `#ffa274` | primary 300 |
| `--color-primary-400` | `#ff7c3d` | primary 400 |
| `--color-primary-500` | `#ff5e13` | primary 500 |
| `--color-primary-600` | `#e04e0a` | primary 600 |
| `--color-primary-700` | `#ba3f08` | primary 700 |
| `--color-primary-800` | `#93320a` | primary 800 |
| `--color-primary-900` | `#782b0c` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Playfair Display" (headings) + "Roboto" (body). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Gallery` | Gallery | see fidelity note below |
| 6 | `Video` | Video band | see fidelity note below |
| 7 | `Team` | Cutter masters team | see fidelity note below |
| 8 | `FindUs` | How to Find Us | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Amber", a "Home" link, a "Make an Appointment" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and an opening-hours panel.

### `About`
The system SHALL render an about section with a heading, a blurb, and a "Learn More" link.

### `Services`
The system SHALL render an "our service" section with at least three service price cards.

### `Gallery`
The system SHALL render an "Our Gallery" section with at least four photo tiles.

### `Video`
The system SHALL render a video band with a "Watch the Video How we Work?" heading and a play button.

### `Team`
The system SHALL render an "Our Cutter Masters" section with at least four member cards.

### `FindUs`
The system SHALL render a "How to Find Us" section with contact cards.

### `Footer`
The system SHALL render a footer with the site name, navigation links, a newsletter form, and social links.

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
- **Provenance ban.** No file under `apps/amber/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/amber/public/CNAME` = `amber.free.componentdock.com`
  and the package `homepage` = `https://amber.free.componentdock.com`.
