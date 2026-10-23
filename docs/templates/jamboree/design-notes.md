# Jamboree — Design Notes

Reference: **Eventasia** — `https://colorlib.com/wp/template/eventasia/`  
Live preview: `https://preview.colorlib.com/theme/eventasia/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/evantasia-free-fullscreen-event-website-template.jpg  
Shipped: https://jamboree.free.componentdock.com

Jamboree is a single-page conference/event website in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/jamboree/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c732ff` | brand |
| `--color-brand-dark` | `#a020d6` | brand dark |
| `--color-gradient-start` | `#ca2dff` | Gradient stops for the signature purple-blue-cyan gradient. |
| `--color-gradient-mid` | `#8e96f8` | gradient mid |
| `--color-gradient-end` | `#52fff1` | gradient end |
| `--color-ink` | `#222222` | Ink — dark headings (#222 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section background (#f9f9ff for speaker area). |
| `--color-mist` | `#777777` | Mist — muted body text (#777 from the original). |
| `--color-footer` | `#222222` | Footer background (#222222 from the original). |
| `--color-primary-50` | `#fdf2ff` | primary 50 |
| `--color-primary-100` | `#fae5ff` | primary 100 |
| `--color-primary-200` | `#f5c7ff` | primary 200 |
| `--color-primary-300` | `#ee9eff` | primary 300 |
| `--color-primary-400` | `#e066ff` | primary 400 |
| `--color-primary-500` | `#c732ff` | primary 500 |
| `--color-primary-600` | `#a020d6` | primary 600 |
| `--color-primary-700` | `#7d18a8` | primary 700 |
| `--color-primary-800` | `#5e127e` | primary 800 |
| `--color-primary-900` | `#3f0c54` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font: Poppins (loaded via Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero displays conference info and countdown | see fidelity note below |
| 3 | `Facilities` | Facilities section shows 6 service columns | see fidelity note below |
| 4 | `Speakers` | Speakers section shows speaker grid | see fidelity note below |
| 5 | `Calendar` | Calendar section shows upcoming events | see fidelity note below |
| 6 | `Events` | Calendar section shows upcoming events | see fidelity note below |
| 7 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Jamboree" logo and navigation links for Home, Functionalities, Speaker, and Upcoming Event sections.

### `Hero`
The hero section SHALL display a heading, a live countdown timer with days/hours/minutes/seconds, and a "Buy Ticket" gradient CTA button.

### `Facilities`
The facilities section SHALL display 6 service columns with icons, headings, and descriptions.

### `Speakers`
The speakers section SHALL display a grid of speaker cards with photos, names, and roles, with a gradient hover overlay.

### `Calendar`
The calendar section SHALL display a calendar widget and upcoming event cards with a dark overlay background.

### `Events`
The calendar section SHALL display a calendar widget and upcoming event cards with a dark overlay background.

### `Footer`
The footer SHALL include a newsletter form, social links, quick links, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/jamboree/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jamboree/public/CNAME` = `jamboree.free.componentdock.com`
  and the package `homepage` = `https://jamboree.free.componentdock.com`.
