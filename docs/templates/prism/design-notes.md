# Prism — Design Notes

Reference: **Dup** — `https://colorlib.com/wp/template/dup/`  
Live preview: `https://preview.colorlib.com/theme/dup/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dup-free-creative-agency-website-template.jpg  
Shipped: https://prism.free.componentdock.com

Recreation of ColorLib "Dup" (https://preview.colorlib.com/theme/dup/) as a React + Tailwind CSS creative agency template named "Prism". The template showcases a creative agency with sections for studio introduction, achievements, video, skills, testimonials, and contact.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/prism/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fde8ee` | primary 50 |
| `--color-primary-100` | `#fbc5d4` | primary 100 |
| `--color-primary-200` | `#f79ab3` | primary 200 |
| `--color-primary-300` | `#f26b8e` | primary 300 |
| `--color-primary-400` | `#e0003b` | primary 400 |
| `--color-primary-500` | `#c40033` | primary 500 |
| `--color-primary-600` | `#a3002a` | primary 600 |
| `--color-primary-700` | `#7d0020` | primary 700 |
| `--color-primary-800` | `#5c0018` | primary 800 |
| `--color-primary-900` | `#3d0010` | primary 900 |
| `--color-mist` | `#f9f9ff` | mist |
| `--color-smoke` | `#777777` | smoke |
| `--color-ink` | `#222222` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero banner with CTA | see fidelity note below |
| 3 | `Studio` | Studio section about the agency | see fidelity note below |
| 4 | `Achievements` | Achievements grid with social proof | see fidelity note below |
| 5 | `Video` | Video showcase section | see fidelity note below |
| 6 | `Skills` | Skills progress bars | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Contact` | Contact information section | see fidelity note below |
| 9 | `Footer` | Footer with subscription and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a fixed header with the "Prism" logo and navigation links (Home, About, Services, Portfolio, Contact). On mobile, a hamburger menu toggles a mobile navigation panel.

### `Hero`
The template SHALL render a hero section with the headline "Sleek and Clean with same perspective", a subtitle about metropolitan technology, and a "Get Started" CTA button.

### `Studio`
The template SHALL render a studio section with a red overlay background, a studio image, and a white content card about "Green Forest Studio".

### `Achievements`
The template SHALL render a grid of 6 achievement items with icons and labels (Portfolio Pieces, Design Shots, Video Subscribers, Code Commits, Awards Won, Revenue Generated).

### `Video`
The template SHALL render a video section with a dark red overlay, a play button, and the heading "Everyone wants to be unique".

### `Skills`
The template SHALL render progress bars for 4 design tools: Adobe Photoshop CC (70%), Adobe Illustrator CC (60%), Adobe InDesign CC (50%), Adobe After Effects CC (40%).

### `Testimonials`
The template SHALL render a testimonials section with 3 client quotes, each including a name and role.

### `Contact`
The template SHALL render a contact section with 3 contact cards (Address, Phone, Email) each with relevant details.

### `Footer`
The template SHALL render a footer with a newsletter subscription form, 4 columns (About Agency, Navigation Links x2, Instafeed), and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/prism/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prism/public/CNAME` = `prism.free.componentdock.com`
  and the package `homepage` = `https://prism.free.componentdock.com`.
