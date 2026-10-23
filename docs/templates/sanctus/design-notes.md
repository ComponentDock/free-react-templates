# Sanctus — Design Notes

Reference: **Byfaith** — `https://colorlib.com/wp/template/byfaith/`  
Live preview: `https://preview.colorlib.com/theme/byfaith/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/byfaith-free-template.jpg  
Shipped: https://sanctus.free.componentdock.com

Sanctus is a single-page warm church / faith website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Byfaith" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/sanctus/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f79918` | brand |
| `--color-brand-hover` | `#f8a431` | brand hover |
| `--color-deep` | `#10495c` | deep |
| `--color-beige` | `#ede1d0` | beige |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-ink` | `#1a1a1a` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with wordmark and dropdown links | see fidelity note below |
| 2 | `Hero` | Full-viewport photo hero with overlay and pill CTA | see fidelity note below |
| 3 | `About` | About section with heading and image | see fidelity note below |
| 4 | `Sermons` | Recent Sermons cards | see fidelity note below |
| 5 | `WhyUs` | Why Us dark-teal section with feature grid | see fidelity note below |
| 6 | `Testimonials` | Living Testimonies carousel | see fidelity note below |
| 7 | `Services` | Church Services icon cards | see fidelity note below |
| 8 | `JoinCta` | Join CTA banner | see fidelity note below |
| 9 | `Footer` | Footer with Contact, Sources, Links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render an absolute-positioned transparent navbar over the hero with a white wordmark, five nav links (one with a dropdown), and a mobile hamburger toggle.

### `Hero`
The system SHALL render a full-width hero with a cover photo, a dark `rgba(0,0,0,0.3)` overlay, an uppercase subheading, a hymn-style headline, copy, a "Go to sermons" pill button, and a right-side image with a circular play icon.

### `About`
The system SHALL render an About section with an amber uppercase subheading, a large heading, two paragraphs, a "Know more about us" pill button, and a rounded photo.

### `Sermons`
The system SHALL render a "Recent Sermons" heading and three sermon cards, each with a rounded image, a date line, a title, copy, and a small pill "Read more" button.

### `WhyUs`
The system SHALL render a `#10495c` section with a heading + paragraph header, a video-bg image with play icon, a 2x2 feature grid, and a "Send us your prayer request" pill button.

### `Testimonials`
The system SHALL render a centered "Living Testimonies" heading and a carousel of nine testimonial cards, each with a heading, an italic quote, an avatar, an author name, and a role, with Prev/Next pill controls and dots.

### `Services`
The system SHALL render a white section with amber icons and three centered service cards, each with an amber icon, a title, copy, and a "+ Read more" link.

### `JoinCta`
The system SHALL render a `#10495c` banner with a white heading and a "Join Us" pill button.

### `Footer`
The system SHALL render a beige `#ede1d0` footer with three widgets (Contact, Sources, Links), six social icon circles, and a copyright bar that links to Component Dock.

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
- **Provenance ban.** No file under `apps/sanctus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sanctus/public/CNAME` = `sanctus.free.componentdock.com`
  and the package `homepage` = `https://sanctus.free.componentdock.com`.
