# Exposure — Design Notes

Reference: **Myphotography** — `https://colorlib.com/wp/template/myphotography/`  
Live preview: `https://preview.colorlib.com/theme/myphotography/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/myphotography-free-template.jpg  
Shipped: https://exposure.free.componentdock.com

Exposure is a single-page photography-portfolio website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Myphotography" website template (source: https://colorlib.com/wp/template/myphotography/ — "MyPhotography

## Typography

Fonts loaded by `index.html` (Google Fonts): **Prompt**, **Prompt:wght@300;400;500;600;700;800;900**, **Rubik**

## Design tokens (`apps/exposure/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f04e3c` | brand |
| `--color-brand-hover` | `#e93b32` | brand hover |
| `--color-ink` | `#121212` | ink |
| `--color-coal` | `#0e0e0e` | coal |
| `--color-muted` | `#d3d3d4` | muted |
| `--color-footlink` | `#868c98` | footlink |
| `--color-social` | `#848493` | social |
| `--color-blogdate` | `#828fa3` | blogdate |
| `--color-role` | `#57667e` | role |
| `--color-primary-50` | `#fff1ef` | primary 50 |
| `--color-primary-100` | `#ffd9d5` | primary 100 |
| `--color-primary-200` | `#ffb0a9` | primary 200 |
| `--color-primary-300` | `#ff847a` | primary 300 |
| `--color-primary-400` | `#fa5c4e` | primary 400 |
| `--color-primary-500` | `#f04e3c` | primary 500 |
| `--color-primary-600` | `#e9432f` | primary 600 |
| `--color-primary-700` | `#c93322` | primary 700 |
| `--color-primary-800` | `#a0281b` | primary 800 |
| `--color-primary-900` | `#7c1f15` | primary 900 |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Prompt', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header / Navbar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About / Experience section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Gallery` | Gallery | see fidelity note below |
| 6 | `Awards` | Brand / Awards section | see fidelity note below |
| 7 | `Testimonial` | Testimonial | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent-over-hero dark header with a brand wordmark on the left, six nav links (Blog with a dropdown), and a "Contact now" button on the right; on scroll the bar SHALL turn solid black.

### `Hero`
The system SHALL render a full-height hero with a background photo, a coral eyebrow, a large uppercase headline, a "Watch Portfolio" button and a portrait image on the right.

### `About`
The system SHALL render a `#121212` about section with the heading "HOW WE MAKE USER EXPERIENCES", a contact email link with underline, a Dali quote, and a "05 YEARS OF DIGITAL EXPERIENCE" stat block.

### `Services`
The system SHALL render a `#0e0e0e` services section with three photo cards (Creative / Wedding / Nature Photography), each with an image, a 26px title link and a muted paragraph.

### `Gallery`
The system SHALL render a full-bleed gallery with six photo tiles of mixed widths; hovering a tile SHALL show a coral overlay, a fullscreen icon and a sliding caption.

### `Awards`
The system SHALL render a `#0e0e0e` awards section with the heading "Take a look at our achivment", a paragraph, a "Get Start" button, and six award cards ("Behance award / Prize 2019").

### `Testimonial`
The system SHALL render a `#121212` testimonial slider with a quote, a round founder photo, the founder name in coral and the role below it.

### `Blog`
The system SHALL render a `#0e0e0e` blog section titled "Tourist Blog" with three cards, each with a photo, a date and a title overlay.

### `Footer`
The system SHALL render a `#121212` footer with an about column, two link columns (Navigation, Useful Links), an Instagram Feed grid, a copyright line and a social row.

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
- **Provenance ban.** No file under `apps/exposure/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/exposure/public/CNAME` = `exposure.free.componentdock.com`
  and the package `homepage` = `https://exposure.free.componentdock.com`.
