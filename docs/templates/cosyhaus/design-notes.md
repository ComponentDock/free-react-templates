# Cosyhaus — Design Notes

Reference: **Theinterior** — `https://colorlib.com/wp/template/theinterior/`  
Live preview: `https://preview.colorlib.com/theme/theinterior/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theinterior-free-template.jpg  
Shipped: https://cosyhaus.free.componentdock.com

Cosyhaus is a single-page interior design landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Theinterior" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow Condensed**, **Barlow Condensed:wght@400;500;600;700**

## Design tokens (`apps/cosyhaus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff1313` | brand |
| `--color-brand-dark` | `#d91010` | brand dark |
| `--color-ink` | `#10285d` | Ink — dark heading color (#10285d from the original). |
| `--color-ink-dark` | `#0b1a40` | ink dark |
| `--color-paper` | `#ffffff` | Paper — light section backgrounds. |
| `--color-paper-alt` | `#f7f7f7` | paper alt |
| `--color-mist` | `#635c5c` | Mist — muted body text (#635c5c from the original). |
| `--color-primary-50` | `#fff1f1` | primary 50 |
| `--color-primary-100` | `#ffe0e0` | primary 100 |
| `--color-primary-200` | `#ffc7c7` | primary 200 |
| `--color-primary-300` | `#ffa0a0` | primary 300 |
| `--color-primary-400` | `#ff6868` | primary 400 |
| `--color-primary-500` | `#ff1313` | primary 500 |
| `--color-primary-600` | `#d91010` | primary 600 |
| `--color-primary-700` | `#b60d0d` | primary 700 |
| `--color-primary-800` | `#960e0e` | primary 800 |
| `--color-primary-900` | `#7c1212` | primary 900 |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Barlow Condensed" (headings) + "Barlow" (body). |
| `--font-display` | `'Barlow Condensed', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and dark mode toggle | see fidelity note below |
| 2 | `Hero` | Hero section with headline | see fidelity note below |
| 3 | `InfoHighlights` | Info highlights section | see fidelity note below |
| 4 | `ProfessionalServices` | Professional services banner | see fidelity note below |
| 5 | `Services` | Professional services banner | see fidelity note below |
| 6 | `Gallery` | Gallery with project images | see fidelity note below |
| 7 | `Team` | Team section with three members | see fidelity note below |
| 8 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 9 | `BrandLogos` | — | no dedicated spec block |
| 10 | `CtaBanner` | CTA banner with contact button | see fidelity note below |
| 11 | `Blog` | Blog section with two posts | see fidelity note below |
| 12 | `Footer` | Footer with Component Dock link and newsletter | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Cosyhaus SHALL display a sticky header with the "Cosyhaus" logo, navigation links (Home, About, Services, Gallery, Blog, Contact), a dark mode toggle button, a "Contact Us" CTA button, and a responsive mobile hamburger menu.

### `Hero`
Cosyhaus SHALL display a full-width hero section with a background image overlay, a "Welcome to Cosyhaus" tagline, and the headline "Modern Interior & Design".

### `InfoHighlights`
Cosyhaus SHALL display a dark-background section with three info columns (Clean and Services, Clean and Modern, Elegant and Modern).

### `ProfessionalServices`
Cosyhaus SHALL display a full-width background image section with the heading "Our Professional Services", descriptive text, and a "Discover More About Us" CTA button.

### `Services`
Cosyhaus SHALL display a full-width background image section with the heading "Our Professional Services", descriptive text, and a "Discover More About Us" CTA button.

### `Gallery`
Cosyhaus SHALL display a 4-column asymmetric grid of 6 project gallery items with overlay labels and arrow links.

### `Team`
Cosyhaus SHALL display three team member cards with circular photos, names, and roles.

### `Testimonials`
Cosyhaus SHALL display a testimonial carousel with author quotes, names, and roles, with prev/next navigation and dot indicators.

### `BrandLogos`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CtaBanner`
Cosyhaus SHALL display a CTA banner with "Are you Searching For a First-Class Consultant?" and a "Contact Us" button.

### `Blog`
Cosyhaus SHALL display two blog post cards with images, dates, author stats, titles, and "Read more" links.

### `Footer`
Cosyhaus SHALL display a dark footer with logo, description, phone/email, address columns, Instagram grid, social icons, newsletter form with validation, and a "Made with Component Dock" attribution linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/cosyhaus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cosyhaus/public/CNAME` = `cosyhaus.free.componentdock.com`
  and the package `homepage` = `https://cosyhaus.free.componentdock.com`.
