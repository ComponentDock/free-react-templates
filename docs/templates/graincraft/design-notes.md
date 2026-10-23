# Graincraft — Design Notes

Reference: **Woodwork** — `https://colorlib.com/wp/template/woodwork/`  
Live preview: `https://preview.colorlib.com/theme/woodwork/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/woodwork-colorlib-template.jpg  
Shipped: https://graincraft.free.componentdock.com

Recreate the ColorLib **Woodwork** template (https://colorlib.com/wp/template/woodwork/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page landing template for a woodworking and construction company. The app lives at `apps/graincraft/` under the package name `@free-react-templates/graincraft`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;600;700**, **Rajdhani**

## Design tokens (`apps/graincraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#bfb332` | brand |
| `--color-brand-dark` | `#a99d2c` | brand dark |
| `--color-ink` | `#111111` | Ink — dark headings/footer (#111111 from the original). |
| `--color-paper` | `#faf5f0` | Paper — light section background (#faf5f0 from the original). |
| `--color-mist` | `#999999` | Mist — muted body text (#999999 from the original). |
| `--color-primary-50` | `#fdfde7` | primary 50 |
| `--color-primary-100` | `#fcfac5` | primary 100 |
| `--color-primary-200` | `#f8f48f` | primary 200 |
| `--color-primary-300` | `#f1eb4f` | primary 300 |
| `--color-primary-400` | `#e5dc26` | primary 400 |
| `--color-primary-500` | `#bfb332` | primary 500 |
| `--color-primary-600` | `#a99d2c` | primary 600 |
| `--color-primary-700` | `#8a7e24` | primary 700 |
| `--color-primary-800` | `#6b611c` | primary 800 |
| `--color-primary-900` | `#5a511a` | primary 900 |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Josefin Sans (body/headings) + Rajdhani (stats/numbers). |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with branding and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with background imagery | see fidelity note below |
| 3 | `About` | About section with stats | see fidelity note below |
| 4 | `Services` | Services section with 4 service cards | see fidelity note below |
| 5 | `Testimonials` | Testimonials section with client quotes | see fidelity note below |
| 6 | `Portfolio` | Portfolio gallery | see fidelity note below |
| 7 | `ChooseUs` | Choose Us section with 4 reasons | see fidelity note below |
| 8 | `FAQ` | FAQ accordion | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a sticky dark (#111111) navbar with the "GRAINCRAFT" logo (gold accent), navigation links (Home, About, Services, Portfolio, FAQ, Contact), and a gold (#bfb332) "Get a Quote" CTA button. On mobile, a hamburger menu SHALL toggle open/closed.

### `Hero`
The page SHALL display a full-width hero section with a dark overlay, a woodworking background image, the heading "New Construction, Remodeling, Additions", and a gold "Contact Us" CTA button.

### `About`
The page SHALL display an about section with a photo grid on the left, the subtitle "About Woodworking", the heading "30 Years of Woodworking Experience", descriptive text, 3 stat counters (1800+ Projects, 1200+ Clients, 150+ Offices), and a "Contact Us" button.

### `Services`
The page SHALL display a services section on a dark background with 4 service cards: Design Solutions, Exterior Design, Moldings & Trim, and Office Furniture.

### `Testimonials`
The page SHALL display a testimonials section on a light background (#faf5f0) with client photos, quotes, and names, with previous/next navigation.

### `Portfolio`
The page SHALL display a portfolio section with a grid of 6 project images.

### `ChooseUs`
The page SHALL display a "Why Choose Us?" section with 4 reason cards: Highly Professional Staff, Latest Machinery, Certified Material, and Affordable Cost, each with an icon and description.

### `FAQ`
The page SHALL display a FAQ section with 3 expandable questions. Clicking a question SHALL toggle its answer open/closed.

### `Footer`
The page SHALL display a dark footer with the GRAINCRAFT logo, address, phone, email, quick links, social icons, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/graincraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/graincraft/public/CNAME` = `graincraft.free.componentdock.com`
  and the package `homepage` = `https://graincraft.free.componentdock.com`.
