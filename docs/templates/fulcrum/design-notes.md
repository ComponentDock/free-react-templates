# Fulcrum — Design Notes

Reference: **Services** — `https://colorlib.com/wp/template/services/`  
Live preview: `https://preview.colorlib.com/theme/services/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/services-free-template.jpg  
Shipped: https://fulcrum.free.componentdock.com

Recreation of ColorLib "Services" (https://colorlib.com/wp/template/services/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page digital services/agency landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@400;500;600;700**

## Design tokens (`apps/fulcrum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#c2e54f` | primary |
| `--color-primary-dark` | `#a8c845` | primary dark |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#999999` | muted |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | Jost font via Google Fonts <link> in index.html. |
| `--font-display` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar with logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `About` | About Us section with 3-column layout | see fidelity note below |
| 4 | `ServiceCards` | Services section with 6 service cards in a 2x3 grid | see fidelity note below |
| 5 | `Projects` | Projects section with filterable gallery | see fidelity note below |
| 6 | `Testimonials` | Testimonials carousel on lime green background | see fidelity note below |
| 7 | `Blog` | Blog posts section with 3-column cards | see fidelity note below |
| 8 | `Contact` | Contact form with office addresses | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky top navbar with a bordered logo "Fulcrum" on the left and navigation links (Home, About, Services, Projects, Blog, Contact) on the right. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

### `Hero`
The template SHALL render a full-width hero section with a background image, a dark overlay (black/50), a heading "We Are Digital Services", a subtitle paragraph, and an "Our Services" CTA button with lime green background linking to the services section.

### `About`
The template SHALL render an "About Us" section with a centered heading, a 3-column grid containing text in the left column, an image in the center column, and text in the right column.

### `ServiceCards`
The template SHALL render a "Services" section with a centered heading and 6 service cards arranged in a 2-column grid. Each card SHALL contain an icon, a title, and a description. The services are: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, PPC Advertising, Web Design & Development.

### `Projects`
The template SHALL render a "Projects" section with filter tabs (All, Web, Design, Brand) and a grid of project images. Clicking a tab SHALL filter the displayed projects to only show items matching that category.

### `Testimonials`
The template SHALL render a testimonials section with a lime green (#C2E54F) background, a centered heading "What Clients Are Saying", a blockquote with the current testimonial text and author, and previous/next navigation buttons.

### `Blog`
The template SHALL render a "Blog Posts" section with 3 blog post cards, each containing an image, title, date, excerpt, and a "Read More" link.

### `Contact`
The template SHALL render a "Contact Form" section with a form on the left (first name, full name, email, subject, message textarea, submit button) and office addresses (London, New York) on the right. Submitting the form SHALL reset all fields.

### `Footer`
The template SHALL render a footer with the brand name "Fulcrum", three link columns (Services, Resources, Templates), social media icon links (Twitter, Facebook, Instagram, Dribbble, LinkedIn), and a copyright line with a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/fulcrum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fulcrum/public/CNAME` = `fulcrum.free.componentdock.com`
  and the package `homepage` = `https://fulcrum.free.componentdock.com`.
