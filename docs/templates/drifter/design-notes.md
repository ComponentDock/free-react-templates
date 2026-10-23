# Drifter — Design Notes

Reference: **Ronin** — `https://colorlib.com/wp/template/ronin/`  
Live preview: `https://preview.colorlib.com/theme/ronin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ronin-free-template.jpg  
Shipped: https://drifter.free.componentdock.com

Build a personal portfolio landing page for a freelancer/designer, showcasing services, work samples, testimonials, and blog posts. The design follows the ColorLib "Ronin" template layout with a dark hero banner, skill bars, service cards, portfolio grid with filtering, and a dark footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;600;700;800**, **Roboto**

## Design tokens (`apps/drifter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-purple` | `#6382e6` | Drifter brand palette — measured from the reference design. |
| `--color-brand-teal` | `#2ebccd` | brand teal |
| `--color-brand-coral` | `#eb6b55` | brand coral |
| `--color-brand-pink` | `#e66686` | brand pink |
| `--color-dark-bg` | `#000410` | dark bg |
| `--color-light-bg` | `#f9f9ff` | light bg |
| `--color-body-muted` | `#777777` | body muted |
| `--color-heading` | `#222222` | heading |
| `--color-border` | `#e1e1e1` | border |
| `--font-heading` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | Font families |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with responsive mobile menu | see fidelity note below |
| 2 | `Hero` | Hero banner with background image | see fidelity note below |
| 3 | `About` | About section with stats and skill bars | see fidelity note below |
| 4 | `Services` | Services section with 3 service cards | see fidelity note below |
| 5 | `Portfolio` | Portfolio section with filter tabs and project grid | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Blog` | Blog section with 3 post cards | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed top navigation bar with logo and links for Home, About, Services, Portfolio, Blog, Contact. On mobile, a hamburger menu toggles the nav links.

### `Hero`
The template SHALL render a full-width hero section with a background image overlay, heading "This is me", name, description, and a "Discover Now" CTA button linking to the about section.

### `About`
The template SHALL render an "About Myself" section with descriptive text, 3 stat cards (Total Projects, Happy Clients, Cups of Coffee), and 6 tool expertness progress bars with percentage labels.

### `Services`
The template SHALL render an "Offerings to My Clients" section with 3 service cards (Architecture, Interior Design, Concept Design), each with an icon, title, and description.

### `Portfolio`
The template SHALL render an "Our Recent Completed Projects" section with filter tabs (All, Branding, Creative, Web Design) and a 6-item image grid that filters by selected category.

### `Testimonials`
The template SHALL render a testimonials section with 3 testimonial cards, each containing a quote, author name, and role.

### `Blog`
The template SHALL render a "Latest Posts from Blog" section with 3 blog post cards, each showing an image, date, title, excerpt, and "Read More" link.

### `Footer`
The template SHALL render a dark footer with About Me text, Newsletter signup form, social media links, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/drifter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/drifter/public/CNAME` = `drifter.free.componentdock.com`
  and the package `homepage` = `https://drifter.free.componentdock.com`.
