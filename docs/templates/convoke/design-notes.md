# Convoke — Design Notes

Reference: **Wemeet** — `https://colorlib.com/wp/template/wemeet/`  
Live preview: `https://preview.colorlib.com/theme/wemeet/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wemeet-free-template.jpg  
Shipped: https://convoke.free.componentdock.com

Convoke is a single-page conference & event website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/convoke/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-rainbow-1` | `#ff9600` | Brand palette — rainbow conference gradient (orange → magenta → blue). |
| `--color-rainbow-2` | `#fe531e` | rainbow 2 |
| `--color-rainbow-3` | `#c022a5` | rainbow 3 |
| `--color-rainbow-4` | `#1bb8f9` | rainbow 4 |
| `--color-brand-red` | `#ff0000` | brand red |
| `--color-body` | `#707070` | body |
| `--color-heading` | `#131313` | heading |
| `--color-tint` | `#f9f9ff` | tint |
| `--color-tint-2` | `#fbf9ff` | tint 2 |
| `--color-tint-3` | `#f0e9ff` | tint 3 |
| `--color-subheading` | `#c9c9c9` | subheading |
| `--color-faq-border` | `#f0e9ff` | faq border |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins (300–900) via Google Fonts — headings + body. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Countdown` | Event info and countdown | see fidelity note below |
| 4 | `Welcome` | Welcome section | see fidelity note below |
| 5 | `Speakers` | Speakers | see fidelity note below |
| 6 | `Schedule` | Event schedule | see fidelity note below |
| 7 | `Register` | Register / book | see fidelity note below |
| 8 | `Brands` | Brand logos | see fidelity note below |
| 9 | `Faq` | FAQ accordion | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a sticky header with logo, nav links, and a Buy Ticket CTA.

### `Hero`
The system SHALL render a full-width gradient hero with a headline and a calendar CTA.

### `Countdown`
The system SHALL render the event location, dates, and a live countdown.

### `Welcome`
The system SHALL render a welcome block after the hero.

### `Speakers`
The system SHALL render four speaker cards.

### `Schedule`
The system SHALL render a day-tabbed event schedule.

### `Register`
The system SHALL render a register-to-book band.

### `Brands`
The system SHALL render a row of sponsor brand logos.

### `Faq`
The system SHALL render a collapsible FAQ accordion.

### `Footer`
The system SHALL render a three-column footer with a copyright bar.

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
- **Provenance ban.** No file under `apps/convoke/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/convoke/public/CNAME` = `convoke.free.componentdock.com`
  and the package `homepage` = `https://convoke.free.componentdock.com`.
