# Crafty — Design Notes

Reference: **Five Star** — `https://colorlib.com/wp/template/five-star/`  
Live preview: `https://preview.colorlib.com/theme/five-star/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/five-star-art-crafting-website-template.jpg  
Shipped: https://crafty.free.componentdock.com

Crafty is a single-page creative agency template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Five Star" template (art/crafting/acting website), built under a DIFFERENT name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. Design tokens captured from the original:

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/crafty/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff0f3` | primary 50 |
| `--color-primary-100` | `#ffe0e8` | primary 100 |
| `--color-primary-200` | `#ffc6d4` | primary 200 |
| `--color-primary-300` | `#ff9db4` | primary 300 |
| `--color-primary-400` | `#f5204b` | primary 400 |
| `--color-primary-500` | `#e01040` | primary 500 |
| `--color-primary-600` | `#c40a38` | primary 600 |
| `--color-primary-700` | `#a30930` | primary 700 |
| `--color-primary-800` | `#880c2d` | primary 800 |
| `--color-primary-900` | `#740e2c` | primary 900 |
| `--color-smoke` | `#777777` | Muted copy (ColorLib #777777). |
| `--color-ink` | `#222222` | Dark headings (ColorLib #222222). |
| `--color-mist` | `#f9f9ff` | Section backgrounds. |
| `--color-overlay` | `rgba(15, 15, 15, 0.85)` | Overlay darkness. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins font family — matching the ColorLib source. |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero / Banner | see fidelity note below |
| 3 | `Experience` | Experience section | see fidelity note below |
| 4 | `Carousel` | Carousel / Testimonials | see fidelity note below |
| 5 | `Services` | Services grid | see fidelity note below |
| 6 | `VideoSection` | Video section | see fidelity note below |
| 7 | `ServicesHorizontal` | Services horizontal | see fidelity note below |
| 8 | `Contact` | Contact section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky navbar with the site logo "Crafty" on the left and navigation links (Home, Generic, Elements) on the right. The navbar SHALL support a mobile hamburger menu.

### `Hero`
The system SHALL render a fullscreen hero section with a dark overlay (`#0f0f0f` with opacity), a large heading "Crafting Best Experience", a subtitle "Art and Crafting / Acting and Philosophy", and a "View Details" button with the primary brand style.

### `Experience`
The system SHALL render an experience section with two images on the left side and content on the right side including a heading, description text, and a "View Details" button.

### `Carousel`
The system SHALL render a carousel section with a dark overlay background and testimonial slides with previous/next navigation arrows.

### `Services`
The system SHALL render a services section with 4 centered service cards in a 4-column grid layout. Each card SHALL display an icon (vector illustration) and a service title.

### `VideoSection`
The system SHALL render a video section with a dark background, a video thumbnail with a play button on the left, and descriptive text on the right.

### `ServicesHorizontal`
The system SHALL render a second services section with 3 horizontal service cards in a row layout. Each card SHALL display an icon and a service title.

### `Contact`
The system SHALL render a contact section with contact information on the left (address, email, phone) and a contact form on the right (name, email, message fields and a send button).

### `Footer`
The system SHALL render a dark footer with 4 columns: About Agency links, Newsletter signup, Instafeed grid (8 images), and social icons. A bottom bar SHALL show copyright text and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/crafty/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crafty/public/CNAME` = `crafty.free.componentdock.com`
  and the package `homepage` = `https://crafty.free.componentdock.com`.
