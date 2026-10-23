# Amplify — Design Notes

Reference: **Uza** — `https://colorlib.com/wp/template/uza/`  
Live preview: `https://preview.colorlib.com/theme/uza/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/uza-free-template.jpg  
Shipped: https://amplify.free.componentdock.com

Amplify is a single-page digital-marketing agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Uza" agency website template (see TEMPLATES.md, Bootstrap section, line 525), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/amplify/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1583e9` | brand |
| `--color-brand-dark` | `#3851bc` | brand dark |
| `--color-tint` | `#e7f2fd` | tint |
| `--color-ink` | `#303030` | ink |
| `--color-body` | `#707070` | body |
| `--color-muted` | `#a6a6a6` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with text logo, flat links and action cluster | see fidelity note below |
| 2 | `Hero` | Hero carousel | see fidelity note below |
| 3 | `About` | About split with video button | see fidelity note below |
| 4 | `Services` | Services with blob icon plates | see fidelity note below |
| 5 | `Portfolio` | Portfolio carousel | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 7 | `CTA` | CTA band with call-now link | see fidelity note below |
| 8 | `Blog` | Latest Blogs cards | see fidelity note below |
| 9 | `Newsletter` | Newsletter band | see fidelity note below |
| 10 | `Footer` | Footer with four columns and Component Dock credit | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navbar with a text logo, flat nav links, a "Get A Quote" pill button, a "Login / Register" link and a search icon, collapsing to a hamburger menu on mobile.

### `Hero`
The system SHALL render a hero carousel of three slides, each with a headline (accent-colored final word), sub-line, solid blue pill CTA and a device-mockup image on the right, over a pale-blue decorative curve.

### `About`
The system SHALL render a two-column about section with a photo and a circular play-button overlay, a heading, two paragraphs and a solid blue CTA.

### `Services`
The system SHALL render a services section with a centered heading and three centered columns, each with an icon inside a light-blue blob-shaped plate, a title and a paragraph.

### `Portfolio`
The system SHALL render a portfolio section with a heading + sub-line and an image carousel whose slides show a title overlay and a circular arrow button.

### `Testimonials`
The system SHALL render a testimonials section with carousel slides (photo, quote, five stars, author name + role, quote icon).

### `CTA`
The system SHALL render a CTA band with a heading, sub-line and a call-now phone text link.

### `Blog`
The system SHALL render a blog section with a centered heading and three white card posts over background photos (date, title, excerpt, Read More).

### `Newsletter`
The system SHALL render a newsletter band framed by 1px light-blue border lines with a heading, sub-line and an email form with a pill Subscribe button.

### `Footer`
The system SHALL render a footer with four widget columns (contact info, two link lists, brand blurb + social icons) and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/amplify/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/amplify/public/CNAME` = `amplify.free.componentdock.com`
  and the package `homepage` = `https://amplify.free.componentdock.com`.
