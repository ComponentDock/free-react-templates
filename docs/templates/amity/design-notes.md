# Amity — Design Notes

Reference: **The Charity** — `https://colorlib.com/wp/template/the-charity/`  
Live preview: `https://preview.colorlib.com/theme/thecharity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thecharity-free-template.jpg  
Shipped: https://amity.free.componentdock.com

Amity is a single-page charity/non-profit website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/amity/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5a00` | Brand palette — vibrant orange accent of the charity design. |
| `--color-brand-dark` | `#ff3600` | brand dark |
| `--color-topbar` | `#ff4800` | topbar |
| `--color-charcoal` | `#262222` | Charcoal chip behind the header "Donate Now" button. |
| `--color-ink` | `#262626` | ink |
| `--color-body` | `#929191` | body |
| `--color-muted` | `#595858` | muted |
| `--color-soft` | `#b7b7b7` | soft |
| `--color-light` | `#ecf2f5` | light |
| `--color-panel` | `#edf3f5` | panel |
| `--color-track` | `#d6dee1` | track |
| `--color-dark` | `#131212` | dark |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Montserrat (300-700) loaded via Google Fonts in index.html. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — top bar and navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `IconBoxes` | Icon boxes | see fidelity note below |
| 4 | `Welcome` | Welcome section | see fidelity note below |
| 5 | `Events` | Upcoming events and featured cause | see fidelity note below |
| 6 | `CausesSlider` | Our Causes slider | see fidelity note below |
| 7 | `Milestones` | Milestone counters | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a two-part header: an orange (`#ff4800`) top utility bar with white 12px uppercase text (left: "MAIL:" + email `contact@ourcharity.com` and "PHONE:" + `+24 3772 120 091 / +56452 4567` with 48px gap; right: a "Donate Now" link, dark `#262222` bg, white, `padding: 20px 40px`) and a white main bar with the "Amity" wordmark logo (left, heart icon) and a right-aligned nav: Home / About us / Causes / Gallery / News / Contact (14px/600 `#262626`; hover and the active page get a 3px `#ff5a00` bottom border and orange text). On mobile a hamburger SHALL open a 320px off-canvas drawer from the left with the same links.

### `HeroSlider`
The system SHALL render a full-bleed hero carousel (max-height 820px) with three slides, each showing a children/community cover photo under a `rgba(0,0,0,.5)` overlay, the headline "Donate" (white, 102px, weight 600; 48px on ≤992px) with the sub-headline "4 a better world" (46px, weight 600), a short mission paragraph (weight 500), a solid orange-gradient pill button "Donate Now" and an orange-outline pill button "Read More" (pill radius 24px, padding 18px 40px). Navigation SHALL include pagination indicators and two 70px circular orange-gradient arrows (left/right), and the carousel SHALL cycle automatically.

### `IconBoxes`
The system SHALL render a row of three rounded cards (bg `#ecf2f5`, radius 24px, padding 40px, text-center): "Become a Volunteer" (active: orange gradient bg + white text), "Dance & Music", and "Online Conference", each with an icon figure at the top that swaps to white on hover/active and a 24px/600 `#262626` title (margin-top 28px). Hover SHALL fill the card with the orange gradient and turn the text white.

### `Welcome`
The system SHALL render a full-width photo section (cover image + dark `rgba(21,21,21,.9)` overlay) split in two: left, a white 36px/600 heading "Wellcome to our Charity" with a 64×4px orange underline, a `#b7b7b7` paragraph (14px, line-height 2), and white-outline pill buttons "Read More" and "Donate Now" (white border + white text on the dark photo); right, a photo.

### `Events`
The system SHALL render a two-column section: left, an "Upcoming Events" heading (orange underline) with three event rows, each a 144px thumbnail plus content (date "Aug 25, 2018" with a 1px `#262626` divider, category, 18px/600 title, 14px `#929191` excerpt, orange "Read More" link); right, a "Featured Cause" heading with a `#edf3f5` card (padding 40px 24px) containing a 246px thumbnail, the cause title, an excerpt, a "Donate Now" link, and a progress bar (5px track `#d6dee1`, `#333` fill at 83%) with "Raised: $56 880" / "Goal: $70 000".

### `CausesSlider`
The system SHALL render an "Our Causes" section over a light `rgba(232,237,238,.8)` overlay with a carousel of six cause cards, each with a photo (hover reveals a centered overlay icon), a title ("Bring water to the childrens", "Education for all"), an excerpt, a progress bar (83% or 70%), "Raised: $56 880" / "Goal: $70 000", and a "Donate Now" link, plus circular orange-gradient next/prev arrows.

### `Milestones`
The system SHALL render a "milestones" section: left, the heading "We love to help all the children that have problems in the world. After 15 years we have many goals achieved." (36px/600 with orange underline and a 14px `#595858` paragraph); right, three centered counters (48px/500 `#262626`, "K" 24px suffix on the first) with 14px `#595858` labels: 120K Children helped, 79 Water wells, 253 Volunteeres. The numbers SHALL count up when scrolled into view.

### `Footer`
The system SHALL render a dark photo footer (cover image + `rgba(22,22,22,.92)` overlay) with four columns: "About" (wordmark + paragraph + social icon links), "Useful Links" (Privacy Polticy, Become a Volunteer, Donate, Testimonials, Causes, Portfolio, News), "Latest News" (three items with orange `#ff5a00` dates "MArch 12, 2018"), and "Contact" (phone, email, address, and a subscribe form: white email input + orange 68px submit button; validation + success state, no backend). The footer bar (bg `#131212`, 12px `#7b7b7b`) SHALL show "Copyright © <year> All rights reserved | This template is made with ♥ by Component Dock" where "Component Dock" links https://www.componentdock.com/ (replacing the source's Colorlib credit).

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
- **Provenance ban.** No file under `apps/amity/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/amity/public/CNAME` = `amity.free.componentdock.com`
  and the package `homepage` = `https://amity.free.componentdock.com`.
