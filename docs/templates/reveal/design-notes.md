# Reveal — Design Notes

Reference: **Unfold** — `https://colorlib.com/wp/template/unfold/`  
Live preview: `https://preview.colorlib.com/theme/unfold/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unfold-free-template.jpeg  
Shipped: https://reveal.free.componentdock.com

Modern one-page portfolio template. Recreation of ColorLib "Unfold". **Source:** https://colorlib.com/wp/template/unfold/ **Preview:** https://preview.colorlib.com/theme/unfold/ **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unfold-free-template.jpeg **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript **Category:*…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@400;500;600;700**

## Design tokens (`apps/reveal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-raleway` | `'Raleway', sans-serif` | font raleway |
| `--color-brand` | `#d63447` | brand |
| `--color-dark` | `#000` | dark |
| `--color-dark-lighter` | `#191919` | dark lighter |
| `--color-light-bg` | `#f9f9f9` | light bg |
| `--color-body` | `#333` | body |
| `--color-muted` | `#666` | muted |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with background image | see fidelity note below |
| 3 | `Portfolio` | Portfolio grid with 9 items | see fidelity note below |
| 4 | `ClientLogos` | Client logos row | see fidelity note below |
| 5 | `About` | About me section | see fidelity note below |
| 6 | `Services` | Services section with 6 cards | see fidelity note below |
| 7 | `Skills` | Skills section with counters | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog journal section | see fidelity note below |
| 10 | `Contact` | Contact section with form | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display "Reveal." as the centered logo with navigation links split on both sides. On mobile, a hamburger menu toggle SHALL be visible.

### `Hero`
The hero SHALL display a full-width background image with the heading "Reveal" and a subtitle describing the designer's role and location.

### `Portfolio`
The portfolio section SHALL display 9 project cards in a 3-column grid with hover overlay showing title, tags, and link icon.

### `ClientLogos`
The client logos section SHALL display 4 brand logo placeholders in a horizontal row.

### `About`
The about section SHALL display a two-column layout with a portrait image on the left and descriptive text on the right, including a "Download my CV" pill button.

### `Services`
The services section SHALL display 6 service cards in a 3x2 grid, each with an icon, title, and description.

### `Skills`
The skills section SHALL display 4 skill counters on a dark background: WordPress 90%, HTML/CSS 99%, JavaScript 95%, Design 100%.

### `Testimonials`
The testimonials section SHALL display 3 testimonial cards, each with a quote, author photo, name, and position.

### `Blog`
The journal section SHALL display 5 blog posts in an asymmetric grid with image, title, author, and read time.

### `Contact`
The contact section SHALL display a contact form with name, email, and message fields, a "Send Message" button, and contact info on the right.

### `Footer`
The footer SHALL display the "Reveal." logo, social media links, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/reveal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reveal/public/CNAME` = `reveal.free.componentdock.com`
  and the package `homepage` = `https://reveal.free.componentdock.com`.
