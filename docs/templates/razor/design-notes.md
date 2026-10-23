# Razor — Design Notes

Reference: **Barbero** — `https://colorlib.com/wp/template/barbero/`  
Live preview: `https://preview.colorlib.com/theme/barbero/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/barbero-colorlib-template.jpg  
Shipped: https://razor.free.componentdock.com

Razor is a single-page barber-shop landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Barbero" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Condensed**, **Barlow Condensed:wght@500;600;700;800**, **Poppins**

## Design tokens (`apps/razor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#bf925b` | brand |
| `--color-brand-dark` | `#9a7340` | brand dark |
| `--color-ink` | `#090601` | Ink — headings + footer background (#090601 from the original). |
| `--color-mist` | `#777777` | Mist — body text (#777777-ish from the original). |
| `--color-paper` | `#ebe8de` | Paper — light section backgrounds (bg-light tan #ebe8de family). |
| `--color-primary-50` | `#faf5ee` | primary 50 |
| `--color-primary-100` | `#f3e8d6` | primary 100 |
| `--color-primary-200` | `#e6cfab` | primary 200 |
| `--color-primary-300` | `#d8b27a` | primary 300 |
| `--color-primary-400` | `#cc9d57` | primary 400 |
| `--color-primary-500` | `#c08a3f` | primary 500 |
| `--color-primary-600` | `#bf925b` | primary 600 |
| `--color-primary-700` | `#9a7340` | primary 700 |
| `--color-primary-800` | `#7a5a32` | primary 800 |
| `--color-primary-900` | `#5e4527` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Barlow Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services | see fidelity note below |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Counters` | Counters | see fidelity note below |
| 6 | `Team` | Team | see fidelity note below |
| 7 | `VideoBand` | — | no dedicated spec block |
| 8 | `Gallery` | Gallery | see fidelity note below |
| 9 | `Pricing` | Pricing | see fidelity note below |
| 10 | `Testimonials` | — | no dedicated spec block |
| 11 | `AppointmentForm` | Appointment form | see fidelity note below |
| 12 | `Blog` | — | no dedicated spec block |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Razor", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a subheading, a level-1 headline, and a call-to-action button.

### `Services`
The system SHALL render a services section with four photo cards.

### `About`
*anchors only* — About Barber · A Smooth Barber Experience In Your Town · Make an Appointment

### `Counters`
The system SHALL render a counter band with at least four counters.

### `Team`
The system SHALL render an "Our Expert Team" section with team member cards.

### `VideoBand`
*anchors only* — Play video · Watch Our Video Popular Hair Style

### `Gallery`
The system SHALL render a "Photos of Our Events" gallery with a photo grid.

### `Pricing`
The system SHALL render a "Price & Plans" pricing section with three plan cards.

### `Testimonials`
*anchors only* — People Say About Our Barber · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.

### `AppointmentForm`
The system SHALL render an appointment form with at least first name and last name fields plus a submit button.

### `Blog`
*anchors only* — Recent Post · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.

### `Footer`
The system SHALL render a footer with the site name, a short tagline, quick links, and social links.

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
- **Provenance ban.** No file under `apps/razor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/razor/public/CNAME` = `razor.free.componentdock.com`
  and the package `homepage` = `https://razor.free.componentdock.com`.
