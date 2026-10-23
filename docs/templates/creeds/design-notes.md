# Creeds — Design Notes

Reference: **Faith** — `https://colorlib.com/wp/template/faith/`  
Live preview: `https://preview.colorlib.com/theme/faith/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/faith-free-template.jpg  
Shipped: https://creeds.free.componentdock.com

Creeds is a single-page church landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/creeds/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00c8e6` | brand |
| `--color-dark` | `#04091e` | dark |
| `--color-section` | `#f9f9ff` | section |
| `--color-heading` | `#222222` | heading |
| `--color-muted` | `#777777` | muted |
| `--color-cyan-light` | `#4cd3e3` | cyan light |
| `--color-blue` | `#38a4ff` | blue |
| `--color-blue-light` | `#52c5fd` | blue light |
| `--color-yellow` | `#f4e700` | yellow |
| `--color-red` | `#f44a40` | red |
| `--color-red-dark` | `#f54940` | red dark |
| `--color-outline` | `#eeeeee` | outline |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Utility top bar | see fidelity note below |
| 2 | `Hero` | Full-bleed photo hero | see fidelity note below |
| 3 | `Countdown` | Cyan countdown band | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Features` | Alternating features strip | see fidelity note below |
| 6 | `Sermons` | Sermons this week | see fidelity note below |
| 7 | `Donate` | Donation band with form | see fidelity note below |
| 8 | `Events` | Upcoming events | see fidelity note below |
| 9 | `Footer` | Dark footer with newsletter, Instagram and socials | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a thin white top bar above the nav with account, donate and social links.

### `Hero`
The system SHALL render a hero section with a background photo, dark overlay, eyebrow, bold headline and two CTAs.

### `Countdown`
The system SHALL render a bright cyan (`#00c8e6`) band with event info and a live countdown timer.

### `About`
The system SHALL render a two-column about section with a photo and text.

### `Features`
The system SHALL render 4 feature cards alternating cyan and dark backgrounds.

### `Sermons`
The system SHALL render a light-grey (`#f9f9ff`) sermons section with 3 sermon cards.

### `Donate`
The system SHALL render a dark-overlay photo band with a donation form.

### `Events`
The system SHALL render 3 event cards with date and venue meta.

### `Footer`
The system SHALL render a dark navy (`#04091e`) footer with widget columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/creeds/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/creeds/public/CNAME` = `creeds.free.componentdock.com`
  and the package `homepage` = `https://creeds.free.componentdock.com`.
