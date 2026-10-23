# Caritas — Design Notes

Reference: **Amor** — `https://colorlib.com/wp/template/amor/`  
Live preview: `https://preview.colorlib.com/theme/amor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/amor-free-template.jpg  
Shipped: https://caritas.free.componentdock.com

Caritas is a single-page charity/non-profit website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/caritas/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8d00ff` | brand |
| `--color-brand-deep` | `#7f00ff` | Gradient ends — signature button fill #7f00ff → #e100ff → #7f00ff. |
| `--color-brand-pink` | `#e100ff` | brand pink |
| `--color-brand-violet` | `#9300ff` | Overlay gradient — CTA band #9300ff → #d500ff (0.7 opacity). |
| `--color-brand-magenta` | `#d500ff` | brand magenta |
| `--color-mist` | `#fafafa` | Mist — cause/event/blog card backgrounds (#fafafa). |
| `--color-lavender` | `#faf4ff` | Lavender — footer background (#faf4ff). |
| `--color-ink` | `#060606` | Ink — headings (#060606). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with nav and learn-more button | see fidelity note below |
| 2 | `Hero` | Photo hero with Start Donation CTA and video block | see fidelity note below |
| 3 | `Services` | Services row (4 boxes) | see fidelity note below |
| 4 | `About` | About split with counters | see fidelity note below |
| 5 | `Causes` | Our Causes section with progress bars | see fidelity note below |
| 6 | `CtaBand` | CTA band with photo background | see fidelity note below |
| 7 | `Events` | Upcoming Events list | see fidelity note below |
| 8 | `BlogSection` | Blog section | see fidelity note below |
| 9 | `Clients` | Client logos strip | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a navbar: logo left, nav links, and a purple-bordered "learn more" button on the right, over the hero photo.

### `Hero`
The system SHALL render a full-screen hero: photo backdrop with a purple overlay, centered headline + paragraph + white CTA button, and a video-play block below the hero text.

### `Services`
The system SHALL render a services section: a heading on the left and 4 icon boxes (Donation / Adopt A Child / Become A Volunteer / Donation) on the right in a 2×2 grid.

### `About`
The system SHALL render an about section: image block with a "since" badge on one side, text + 3 animated counters on the other, and a centered button below.

### `Causes`
The system SHALL render a "Our Causes" section with 3 cards, each showing a photo, an icon, a 75% progress bar, a title, and a read-more button.

### `CtaBand`
The system SHALL render a full-width CTA band on a photo backdrop with a purple overlay, a white heading, and a volunteer button.

### `Events`
The system SHALL render an "Upcoming Event" section with 4 event rows: thumb, title, and description.

### `BlogSection`
The system SHALL render a "Blog Post" section with 3 blog cards: photo, title, meta, and read-more link.

### `Clients`
The system SHALL render a "Who Donate us" section with a heading, a one-liner, and a row of 5 client logos.

### `Footer`
The system SHALL render a footer (lavender `#faf4ff` bg) with 4 columns: brand + working hours + socials; Causes links; gallery grid; newsletter form — plus a copyright bar.

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
- **Provenance ban.** No file under `apps/caritas/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/caritas/public/CNAME` = `caritas.free.componentdock.com`
  and the package `homepage` = `https://caritas.free.componentdock.com`.
