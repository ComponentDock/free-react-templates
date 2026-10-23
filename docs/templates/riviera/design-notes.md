# Riviera — Design Notes

Reference: **Europa** — `https://colorlib.com/wp/template/europa/`  
Live preview: `https://preview.colorlib.com/theme/europa/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/europa-free-template.jpg  
Shipped: https://riviera.free.componentdock.com

Riviera is a single-page hotel & spa template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat Alternates**, **Montserrat Alternates:wght@400;500;600;700**

## Design tokens (`apps/riviera/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f9ad81` | brand |
| `--color-star` | `#ed8a19` | Rating star — the warmer orange used for the guestbook stars. |
| `--color-header` | `#353535` | Header — the dark charcoal bar at the very top. |
| `--color-heading` | `#181717` | Heading — near-black section titles (intro, about). |
| `--color-ink` | `#242424` | Ink — secondary headings, form labels, footer background. |
| `--color-body` | `#9d9d9d` | Body — the grey body-copy colour. |
| `--color-eyebrow` | `#868686` | Eyebrow — the small uppercase section eyebrows. |
| `--color-input` | `#676767` | Input — the newsletter email input background. |
| `--color-copyright` | `#171717` | Copyright — the footer copyright bar background. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Dark header with text logo, nav and reservation CTA | see fidelity note below |
| 2 | `Hero` | Hero with centered headline | see fidelity note below |
| 3 | `BookingForm` | Check Availability booking card | see fidelity note below |
| 4 | `Intro` | Two-column intro section | see fidelity note below |
| 5 | `Facilities` | Facilities photo panels | see fidelity note below |
| 6 | `Guestbook` | Guestbook testimonials | see fidelity note below |
| 7 | `VideoSection` | Video section with play button | see fidelity note below |
| 8 | `About` | Homepage about block | see fidelity note below |
| 9 | `Footer` | Dark footer with newsletter and contact info | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute dark charcoal header with a text logo, a right-floated reservation button and a full nav bar with a Pages dropdown.

### `Hero`
The system SHALL render a full-height hero photo with a huge centered white headline.

### `BookingForm`
The system SHALL render a dark translucent booking card overlapping the hero's bottom edge with date, guest-count and room-type fields.

### `Intro`
The system SHALL render an intro section with an eyebrow-titled heading column and a copy + CTA column.

### `Facilities`
The system SHALL render two full-width photo panels describing hotel facilities, each with a title, subtitle, icon feature list and outline CTA.

### `Guestbook`
The system SHALL render a testimonials section titled "Guestbook" with two dated quote cards.

### `VideoSection`
The system SHALL render a video section with a full-bleed photo and a white circular play button.

### `About`
The system SHALL render an about block with a quote heading, copy, CTA and a stack of three photos.

### `Footer`
The system SHALL render a dark footer with three widget columns, a link row and a copyright bar.

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
- **Provenance ban.** No file under `apps/riviera/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/riviera/public/CNAME` = `riviera.free.componentdock.com`
  and the package `homepage` = `https://riviera.free.componentdock.com`.
