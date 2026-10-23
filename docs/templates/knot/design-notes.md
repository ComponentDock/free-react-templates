# Knot — Design Notes

Reference: **Sunshine** — `https://colorlib.com/wp/template/sunshine/`  
Live preview: `https://preview.colorlib.com/theme/sunshine/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sunshine-free-template.jpg  
Shipped: https://knot.free.componentdock.com

Knot is a single-page wedding website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;600**, **Petit Formal Script**

## Design tokens (`apps/knot/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c78665` | brand |
| `--color-brand-hover` | `#faf0f0` | brand hover |
| `--color-gold` | `#f2c64d` | gold |
| `--color-body` | `#727272` | body |
| `--color-ink` | `#1f1f1f` | ink |
| `--color-cream` | `#fffaf2` | cream |
| `--color-placeholder` | `#919191` | placeholder |
| `--color-line` | `#ddd` | line |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Petit Formal Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header and navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Countdown` | Wedding countdown | see fidelity note below |
| 4 | `LoveStory` | Love story | see fidelity note below |
| 5 | `Gallery` | Photo gallery | see fidelity note below |
| 6 | `Program` | Program details | see fidelity note below |
| 7 | `Rsvp` | RSVP form | see fidelity note below |
| 8 | `Location` | Location | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a white header (padding 0 50px) with the brand logo on the left (recreated wordmark/logo for "Knot" — no image asset copy) and a right-aligned nav with links Home, Our Story, Gallery, Blog, Pages, Contact (15px Muli, `#727272`, padding 38px 23px; hover/active shows a 2px `#C78665` underline that scales in). When the page is scrolled, the header SHALL become sticky/fixed with a white background and `box-shadow: 0 3px 16px rgba(0,0,0,0.1)`. Blog and Pages SHALL show dropdown menus on hover (white panel, 14px links, hover `#C78665`). On mobile a hamburger SHALL open a responsive menu with the same links.

### `Hero`
The system SHALL render an ~800px-tall full-bleed hero with a cover photo (placeholder), a white overlay at 0.2 opacity, and a centered circular badge (rotated 45°, background brand `#C78665`, decorative circular borders in `#C78665` and gold `#F2C64D`) containing counter-rotated content: a date line "14 Jan 2020" (Petit Formal Script 18px white), a headline "Anjelina & Jack — Wedding Ceremony" (Petit Formal Script 36px white), and a "Get Married" span (Muli 16px 600 white). On mobile the badge SHALL unrotate, shrink to ~270px, and stay centered.

### `Countdown`
The system SHALL render a countdown section: a floral divider + section title "THE. WEDDING. Countdown" with a date span "14. January. 2020" (brand color), over a photo band containing a white box with four columns DAYS / HOURS / MINUTES / SECONDS — each with a live 60px Petit Formal Script brand-colored digit value and a 14px uppercase label. The countdown SHALL tick down to a future target date (dynamic, e.g. today + 90 days; the source date is in the past).

### `LoveStory`
The system SHALL render a three-column love-story section: a groom card (circular portrait, "Groom" label, name "Jack Wonner" in 36px brand color, 16px paragraph, three circular social icon links), a center timeline box (background `#FFFAF2`) with four steps — "Fast Meet", "He Proposed", "Love Story", "Wedding Day" (24px brand-colored headings with paragraphs), and a mirrored bride card (label "Bride", name "Anjelina Kona", same layout). Names/photos are placeholder copy — paraphrase freely.

### `Gallery`
The system SHALL render a masonry-style gallery ("Gallery. Photos") of 9 cover-photo cells (410px tall, placeholder images) arranged with the source width ratios (4, 3, 5, 3, 5, 4, 4, 3, 5 / 12), wrapping responsively (2 per row on md, 1 on sm). Each cell SHALL open the photo in a simple accessible lightbox when clicked.

### `Program`
The system SHALL render a "Program. Details" section with three equal-width cards, each a cover photo panel wrapping a white inner panel (padding 57px 30px) with a time ("16.00", "20.00", "22.00"), a brand-styled heading ("Wedding Ceremony", "Lunch Time", "WeParty Time"), and a short paragraph.

### `Rsvp`
The system SHALL render an "Are You Attending?" section (subtext "Kindly respond before 30 August") with a white shadowed card containing a form: text input "Your Name", text input "Email", a guest-count select (default "1 Guest"), a textarea "Additional Message", and a full-width brand "R.S.V.P" button (bg `#C78665`, hover `#FAF0F0`/`#C78665`). Inputs SHALL be 50px high with 1px `#ddd` borders, `#919191` placeholders. Submitting with an empty name or invalid email SHALL be blocked with a validation message; a valid submission SHALL show a success state (no backend).

### `Location`
The system SHALL render a full-width map (embedded iframe or static map placeholder — no API key) with a white venue card (616px, centered at the bottom) containing the "Location" heading (36px brand), the venue line "Mas Montagnette, 19 West 21th Str.", a brand-colored phone line "+1 843-853-1810", and two address columns: "Where to stay" and "Activities" (each with "4:00p – 12:00p / The Secret Shrine Club").

### `Footer`
The system SHALL render a cream footer (background `#FFFAF2`) with centered quick links (Home, Our Story, Gallery, Accommodation, Contact — dark 15px text, brand hover) and a white copyright bar reading "Copyright © <year> All rights reserved | This template is made with ♥ by Component Dock" where "Component Dock" links https://www.componentdock.com/ (replacing the source's Colorlib credit).

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
- **Provenance ban.** No file under `apps/knot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/knot/public/CNAME` = `knot.free.componentdock.com`
  and the package `homepage` = `https://knot.free.componentdock.com`.
