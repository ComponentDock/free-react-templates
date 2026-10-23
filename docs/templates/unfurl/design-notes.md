# Unfurl — Design Notes

Reference: **Unfold** — `https://colorlib.com/wp/template/unfold/`  
Live preview: `https://preview.colorlib.com/theme/unfold/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unfold-free-template.jpeg  
Shipped: https://unfurl.free.componentdock.com

A dark-themed portfolio and personal website template for creative professionals, featuring a full-viewport hero, isotope-style portfolio grid, skills progress bars, testimonials, blog journal, and contact form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Arimo**, **Arimo:wght@400;500;600;700**, **Raleway**

## Design tokens (`apps/unfurl/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d63447` | brand |
| `--color-brand-dark` | `#b82d3d` | brand dark |
| `--color-dark-bg` | `#191919` | dark bg |
| `--color-dark-section` | `#212121` | dark section |
| `--color-dark-card` | `#2e2e2e` | dark card |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-light-section` | `#f9f9f9` | light section |
| `--font-heading` | `'Raleway', sans-serif` | font heading |
| `--font-body` | `'Arimo', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Portfolio` | Portfolio Grid | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Services` | Services Section | see fidelity note below |
| 6 | `Skills` | Skills Section | see fidelity note below |
| 7 | `Testimonials` | Testimonials Section | see fidelity note below |
| 8 | `Journal` | Journal Section | see fidelity note below |
| 9 | `Contact` | Contact Section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Unfurl

### `Hero`
The template SHALL display a full-viewport hero section with a dark background image, the heading "Unfurl", a subtitle describing the designer, and a scroll-down indicator.

### `Portfolio`
The template SHALL display a 3-column grid of 9 portfolio items, each with an image and a hover overlay showing the title and category tags.

### `About`
The template SHALL display an about section with a heading, description text, a portrait image, and a "Download my CV" button.

### `Services`
The template SHALL display a 3x2 grid of 6 service cards, each with an icon, title, and description.

### `Skills`
The template SHALL display progress bars for 4 skills with labels and percentage values.

### `Testimonials`
The template SHALL display 3 testimonial cards with a quote, avatar, name, and role.

### `Journal`
The template SHALL display 3 blog post cards with an image, title, author, and read time.

### `Contact`
The template SHALL display a contact form (Name, Email, Message fields with Submit button) and contact information (Email, Phone, Address).

### `Footer`
The template SHALL display a footer with the logo, social media icons (Facebook, Twitter, Instagram, Dribbble), and a copyright line with a "Made with Component Dock" link.

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
- **Provenance ban.** No file under `apps/unfurl/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/unfurl/public/CNAME` = `unfurl.free.componentdock.com`
  and the package `homepage` = `https://unfurl.free.componentdock.com`.
