# Convene — Design Notes

Reference: **Manup** — `https://colorlib.com/wp/template/manup/`  
Live preview: `https://preview.colorlib.com/theme/manup/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/manup-free-template.jpg  
Shipped: https://convene.free.componentdock.com

Convene is a single-page conference and event template with a countdown counter, speaker grid, agenda schedule, three-tier ticket pricing, a blog teaser, newsletter capture and a contact form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Work Sans**

## Design tokens (`apps/convene/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ee8425` | brand |
| `--color-brand-pink` | `#f9488b` | brand pink |
| `--color-brand-dark` | `#d4741f` | brand dark |
| `--color-ink` | `#171822` | Ink — dark heading color (#171822). |
| `--color-paper` | `#ffffff` | Paper — light section background. |
| `--color-mist` | `#6a6b7c` | Mist — muted body text (#6a6b7c). |
| `--color-accent` | `#f44949` | Accent — red (#f44949). |
| `--color-primary-50` | `#fff4ed` | primary 50 |
| `--color-primary-100` | `#ffe5d1` | primary 100 |
| `--color-primary-200` | `#ffc8a3` | primary 200 |
| `--color-primary-300` | `#ffa36b` | primary 300 |
| `--color-primary-400` | `#f5833b` | primary 400 |
| `--color-primary-500` | `#ee8425` | primary 500 |
| `--color-primary-600` | `#d4741f` | primary 600 |
| `--color-primary-700` | `#b85e18` | primary 700 |
| `--color-primary-800` | `#964a14` | primary 800 |
| `--color-primary-900` | `#7a3c11` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (headings) + Work Sans (body) — matching the original. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar And Component Dock Footer | see fidelity note below |
| 2 | `Hero` | Hero And Live Countdown | see fidelity note below |
| 3 | `Counter` | — | no dedicated spec block |
| 4 | `About` | About And Speakers | see fidelity note below |
| 5 | `Speakers` | About And Speakers | see fidelity note below |
| 6 | `Schedule` | Schedule And Pricing | see fidelity note below |
| 7 | `Pricing` | Schedule And Pricing | see fidelity note below |
| 8 | `Blog` | Blog, Newsletter And Contact | see fidelity note below |
| 9 | `Newsletter` | Blog, Newsletter And Contact | see fidelity note below |
| 10 | `Contact` | Blog, Newsletter And Contact | see fidelity note below |
| 11 | `Footer` | Navbar And Component Dock Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL collapse into an `Open menu` / `Close menu` toggle on narrow viewports, and the footer SHALL be a `contentinfo` landmark that links `https://www.componentdock.com/`.

### `Hero`
The hero SHALL headline the event and offer a `Buy Ticket` CTA, and a countdown block SHALL render the remaining days, hours, minutes and seconds to the event date, updating once per second.

### `Counter`
*anchors only* — Conference Date · Count Every Second · Until the Event

### `About`
The page SHALL render an `About Conference` block and a speaker grid in which each speaker card shows a name, role and social links.

### `Speakers`
The page SHALL render an `About Conference` block and a speaker grid in which each speaker card shows a name, role and social links.

### `Schedule`
The page SHALL render the agenda as day-grouped session rows and a pricing section headed `Ticket Pricing` with three tiers (the entry tier being `1 Day Pass`) priced at 79, 129 and 199.

### `Pricing`
The page SHALL render the agenda as day-grouped session rows and a pricing section headed `Ticket Pricing` with three tiers (the entry tier being `1 Day Pass`) priced at 79, 129 and 199.

### `Blog`
The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip with an email field, and a contact form with validated required fields.

### `Newsletter`
The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip with an email field, and a contact form with validated required fields.

### `Contact`
The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip with an email field, and a contact form with validated required fields.

### `Footer`
The navbar SHALL collapse into an `Open menu` / `Close menu` toggle on narrow viewports, and the footer SHALL be a `contentinfo` landmark that links `https://www.componentdock.com/`.

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
- **Provenance ban.** No file under `apps/convene/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/convene/public/CNAME` = `convene.free.componentdock.com`
  and the package `homepage` = `https://convene.free.componentdock.com`.
