# Atrium — Design Notes

Reference: **Ararat** — `https://colorlib.com/wp/template/ararat/`  
Live preview: `https://preview.colorlib.com/theme/ararat/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ararat-free-template.jpg  
Shipped: https://atrium.free.componentdock.com

Atrium is a single-page architecture & interior design agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Ararat" website template design (see TEMPLATES.md), built under a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700;900**, **Roboto**

## Design tokens (`apps/atrium/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5e13` | brand |
| `--color-brand-dark` | `#e04e0a` | Deeper orange for hover states. |
| `--color-ink` | `#131313` | Dark ink used for headings, borders, and button outlines. |
| `--color-paper` | `#f9f9ff` | Light neutral tints from the original (section backgrounds). |
| `--color-mist` | `#808080` | Secondary body text gray. |
| `--color-fog` | `#9e9e9e` | Footer / muted text gray. |
| `--color-line` | `#c9c9c9` | Kickers, borders, placeholder gray. |
| `--color-primary-50` | `#fff4ee` | primary 50 |
| `--color-primary-100` | `#ffe6d7` | primary 100 |
| `--color-primary-200` | `#ffcbae` | primary 200 |
| `--color-primary-300` | `#ffa87a` | primary 300 |
| `--color-primary-400` | `#ff8b4d` | primary 400 |
| `--color-primary-500` | `#ff6b1f` | primary 500 |
| `--color-primary-600` | `#ff5e13` | primary 600 |
| `--color-primary-700` | `#e04e0a` | primary 700 |
| `--color-primary-800` | `#b83f08` | primary 800 |
| `--color-primary-900` | `#933306` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Playfair Display', Georgia, 'Times New Roman', serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Projects` | Projects section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Atrium", anchor links to the page's sections, a "Get in touch" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero over a photo with a headline, a blurb, and a "See Our Projects" button.

### `About`
The system SHALL render an about section with a heading "Architectural Plan Design and Build", a blurb, a bulleted list, an "About Us" button, and a "25 Years of Experience" badge over the section image.

### `Services`
The system SHALL render a services section with a heading "Make Your Dream with Us" and three service cards (Interior, Exterior, Bridge).

### `Projects`
The system SHALL render a projects section with a heading "Our Latest Projects" and four project rows (location, name, blurb, "View More" link).

### `Testimonials`
The system SHALL render a testimonials section with a quote, an author name, and the author's role.

### `Contact`
The system SHALL render a contact section with a heading "Send Your Message" and a form with email, subject, and message fields and a "Send Us" button.

### `Footer`
The system SHALL render a footer with a "Do You Have Any Project or Query?" call-to-action, social links, link columns, and a copyright line.

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
- **Provenance ban.** No file under `apps/atrium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/atrium/public/CNAME` = `atrium.free.componentdock.com`
  and the package `homepage` = `https://atrium.free.componentdock.com`.
