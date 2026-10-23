# Mission — Design Notes

Reference: **Nonprofit** — `https://colorlib.com/wp/template/nonprofit/`  
Live preview: `https://preview.colorlib.com/theme/nonprofit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nonprofit-free-template.jpg  
Shipped: https://mission.free.componentdock.com

Mission is a single-page nonprofit / charity website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700;900**, **Roboto**

## Design tokens (`apps/mission/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a70000` | brand |
| `--color-maroon` | `#450000` | maroon |
| `--color-rose` | `#faf0f0` | rose |
| `--color-mist` | `#fff5f5` | mist |
| `--color-ink` | `#4d4d4d` | ink |
| `--color-label` | `#919191` | label |
| `--color-primary-50` | `#fdf0f0` | primary 50 |
| `--color-primary-100` | `#f9d4d4` | primary 100 |
| `--color-primary-200` | `#f0a8a8` | primary 200 |
| `--color-primary-300` | `#e57373` | primary 300 |
| `--color-primary-400` | `#d63c3c` | primary 400 |
| `--color-primary-500` | `#a70000` | primary 500 |
| `--color-primary-600` | `#8f0000` | primary 600 |
| `--color-primary-700` | `#730000` | primary 700 |
| `--color-primary-800` | `#590000` | primary 800 |
| `--color-primary-900` | `#3d0000` | primary 900 |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Transparent header with nav and ghost Donate Now button | see fidelity note below |
| 2 | `Hero` | Full-height photo hero | see fidelity note below |
| 3 | `UpcomingCause` | Upcoming Cause panel with progress bar | see fidelity note below |
| 4 | `About` | About section with stat badge | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `HelpSlider` | Help slider with cause cards | see fidelity note below |
| 7 | `Volunteers` | Volunteers grid | see fidelity note below |
| 8 | `VolunteerCta` | Become a Volunteer CTA band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent header (white nav text, no background) at the top of the page: logo left, nav links centered, and a ghost (white-outlined) "Donate Now" button right.

### `Hero`
The system SHALL render a full-height hero: cover photo backdrop with a red overlay, a large white serif headline, a sub-paragraph, and a solid red CTA button.

### `UpcomingCause`
The system SHALL render an "Upcoming Cause" section whose white panel overlaps the hero (negative top margin): kicker + cause title, Target/Raised amount boxes, a cause photo with a 60% progress bar and circular percentage badge, and a Donate Now button.

### `About`
The system SHALL render an About section on a `#FFF5F5` background: photo with a centered red stat badge on the left, kicker + heading + paragraphs on the right.

### `Services`
The system SHALL render a centered "We Serve For Peoples" section with 3 service cards: Pure Food & Water, Medicine, Education — each with a circular icon and a short description.

### `HelpSlider`
The system SHALL render a "They Need Your Help" section on a `#FFF5F5` background: kicker + heading on the left, a rotating set of cause cards (photo, title, Target/Raised amounts, Donate Now link) on the right.

### `Volunteers`
The system SHALL render a centered volunteers section with 4 volunteer cards: photo, social links overlay on hover, and a centered name/role caption.

### `VolunteerCta`
The system SHALL render a "Become a Volunteer" CTA band: photo backdrop under a solid `#A70000` centered block with heading, paragraph, and two outline buttons.

### `Footer`
The system SHALL render a dark-maroon (`#450000`) footer with address/social, Navigation, and Newsletter columns, plus a copyright bar.

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
- **Provenance ban.** No file under `apps/mission/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mission/public/CNAME` = `mission.free.componentdock.com`
  and the package `homepage` = `https://mission.free.componentdock.com`.
