# Colloquy — Design Notes

Reference: **The Conference** — `https://colorlib.com/wp/template/the-conference/`  
Live preview: `https://preview.colorlib.com/theme/theconference/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theconference-free-template.jpg  
Shipped: https://colloquy.free.componentdock.com

Colloquy is a single-page conference/event website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/colloquy/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4867c0` | brand |
| `--color-brand-light` | `#329fec` | brand light |
| `--color-ink` | `#4c4c4c` | ink |
| `--color-meta` | `#888888` | meta |
| `--color-card` | `#f3f7f9` | card |
| `--color-calendar` | `#f0f2f6` | calendar |
| `--color-border` | `#e9eef2` | border |
| `--color-accent` | `#ff8416` | accent |
| `--color-footer` | `#0c081d` | footer |
| `--color-footer-extra` | `#050210` | footer extra |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — top bar and navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Intro` | Intro cards | see fidelity note below |
| 4 | `Pricing` | Pricing plans | see fidelity note below |
| 5 | `CalendarSection` | Events calendar | see fidelity note below |
| 6 | `Cta` | CTA band | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header overlaid on the hero with a top row (logo mark + "Colloquy" wordmark 34px/500 `#4867c0` + tagline "August 25, 2018 - Miami Marina Bay" + social icons right) and a nav strip (1px `#e9eef2` top border) with links Home / About Us / Speakers / Events / News / Contact, a search icon, and a blue-gradient "Buy Tickets Now!" button (205×52, white 14px/500 text). On mobile a hamburger SHALL open the full-screen blue-gradient overlay menu with the same links, a close control, and social icons.

### `Hero`
The system SHALL render a full-viewport (100vh) hero with a parallax conference/audience background photo, white left-aligned content: date "August 25, 2018" (18px/700), title "2018 Public Policy Conference" (60px/500), location "Miami Marina Bay, FL" (36px/500), a blurb paragraph (14px/500, line-height 2.14), and two 205×52 blue-gradient rectangular buttons "Buy Tickets Now!" and "Find out more".

### `Intro`
The system SHALL render a white section (padding 115px 144px 67px) with six `#f3f7f9` cards in a 3-column grid (2 rows, 48px gap), each with a photo and a body (padding-left 39px) containing a 24px/500 `#4c4c4c` title and a grey subtitle: Conference Program, Supersessions, The Speakers, Explore Sessions, Directory, Speakers Schedule. On hover the card SHALL fill with the blue gradient (`#4867c0 → #329fec`) and turn title + subtitle white.

### `Pricing`
The system SHALL render a parallax pricing section ("Choose a plan") with three white cards, each topped with a 4px blue-gradient bar: Beginner (Free), the middle plan ($29 90 — full blue-gradient background + white text in the source, label "recommended"), and Professional ($59 90). Each plan SHALL list the features 3 Conference Tickets, Vip Table Drinks, Special PASS, VIP Dinner, show a 19px `#ff8416` circular info badge, and an "Order plan" button (180×54, white bg / transparent on the middle plan).

### `CalendarSection`
The system SHALL render a `#f0f2f6` calendar section (padding 115px 141px 111px) with the title "22 april events calendar" (18px/500 uppercase + a 27×25 calendar icon) and four schedule rows, each with a time (30px/500 `#4c4c4c` + 14px "08 AM - 04 PM"), a small icon, and text (18px/500 `#4c4c4c` venue, 16px `#888888` event name, 14px `#888888` "Speaker: Daniel Hill"): 14:00 Auditorium Business 101 / 15:00 Auditorium About technology / 17:00 Auditorium Conference calls / 20:00 Auditorium Drinks and dinner.

### `Cta`
The system SHALL render a parallax CTA section with the white 48px/400 headline "Get your tickets now!" and a centered "Find out more" button.

### `Footer`
The system SHALL render a dark footer (bg `#0c081d`) with an about column (wordmark + text + "Follow us on Social Media" title + social icon links), two link columns (About Us / Services / Speakers / Event Dates and Information / Calendar / Logistics / Our Partners / Testimonials / Price Plans / News / Contact), and a copyright bar (bg `#050210`) reading "Copyright © <year> All rights reserved | This template is made with ♥ by **Component Dock**" where "Component Dock" links https://www.componentdock.com/ (replacing the source's Colorlib credit).

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
- **Provenance ban.** No file under `apps/colloquy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/colloquy/public/CNAME` = `colloquy.free.componentdock.com`
  and the package `homepage` = `https://colloquy.free.componentdock.com`.
