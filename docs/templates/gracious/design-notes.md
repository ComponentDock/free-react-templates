# Gracious — Design Notes

Reference: **Welfare** — `https://colorlib.com/wp/template/welfare/`  
Live preview: `https://preview.colorlib.com/theme/welfare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/welfare-free-template.jpg  
Shipped: https://gracious.free.componentdock.com

Gracious is a single-page charity/non-profit website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dosis**, **Dosis:wght@300;400;500;600;700;800**, **Overpass**

## Design tokens (`apps/gracious/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f86f2d` | Gracious brand palette — orange gradient |
| `--color-brand-dark` | `#e55a1a` | brand dark |
| `--color-brand-medium` | `#fa8f3d` | brand medium |
| `--color-brand-light` | `#faaa3a` | brand light |
| `--color-teal` | `#78d5ef` | Teal accent for buttons/interactive elements |
| `--color-green` | `#7cbd1e` | Green for progress bars |
| `--color-ink` | `#212529` | Ink — dark headings |
| `--color-ink-secondary` | `#495057` | ink secondary |
| `--color-body` | `#666666` | body |
| `--color-meta` | `#96a1af` | meta |
| `--color-navbar` | `#1d2124` | Dark backgrounds |
| `--color-footer` | `#252525` | footer |
| `--color-section` | `#f2f2f2` | Light section bg |
| `--color-primary-50` | `#f0fbfe` | primary 50 |
| `--color-primary-100` | `#ddf5fc` | primary 100 |
| `--color-primary-200` | `#b8ebf9` | primary 200 |
| `--color-primary-300` | `#82ddf4` | primary 300 |
| `--color-primary-400` | `#4ccbe9` | primary 400 |
| `--color-primary-500` | `#78d5ef` | primary 500 |
| `--color-primary-600` | `#1a9fd4` | primary 600 |
| `--color-primary-700` | `#1780ab` | primary 700 |
| `--color-primary-800` | `#186a8c` | primary 800 |
| `--color-primary-900` | `#195874` | primary 900 |
| `--font-sans` | `'Dosis', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-body` | `'Overpass', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with background and CTA | see fidelity note below |
| 3 | `CounterStrip` | Counter strip with donation metrics | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Causes` | Causes section with progress bars | see fidelity note below |
| 6 | `LatestDonations` | Latest Donations section | see fidelity note below |
| 7 | `Gallery` | Gallery section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Events` | Events section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Gracious" brand name and navigation links (Home, About, Causes, Donate, Blog, Gallery, Events, Contact).

### `Hero`
The hero section SHALL display a full-height background image with dark overlay, a headline, subtitle, and a "Watch Video" button.

### `CounterStrip`
The counter strip SHALL display three colored columns: an animated counter, a "Donate Money" block, and a "Be a Volunteer" block.

### `Services`
The services section SHALL display three feature cards: Make Donation, Become A Volunteer, and Sponsorship.

### `Causes`
The causes section SHALL display six cause cards, each with a title, description, progress bar, and "Donate Now" link.

### `LatestDonations`
The donations section SHALL display three donation cards with avatar, donor name, and donation amount.

### `Gallery`
The gallery section SHALL display six image items in a grid with hover overlays.

### `Blog`
The blog section SHALL display three blog cards with thumbnail, date, title, excerpt, and "Read more" link.

### `Events`
The events section SHALL display three event cards with background photo, time/venue, title, description, and "Join Event" link.

### `Footer`
The footer SHALL display about text, quick links, contact info, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/gracious/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gracious/public/CNAME` = `gracious.free.componentdock.com`
  and the package `homepage` = `https://gracious.free.componentdock.com`.
