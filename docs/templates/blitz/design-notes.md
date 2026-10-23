# Blitz — Design Notes

Reference: **Rango** — `https://colorlib.com/wp/template/rango/`  
Live preview: `https://preview.colorlib.com/theme/rango/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rango-free-template.jpg  
Shipped: https://blitz.free.componentdock.com

Blitz is a creative agency landing page template featuring a fixed navbar, hero slider section, icon boxes, about/features section with vertical content blocks, services carousel, features grid, call-to-action banner, text line section, newsletter form, and multi-column footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/blitz/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#301b54` | brand |
| `--color-brand-light` | `#452b78` | brand light |
| `--color-brand-dark` | `#1b0b32` | brand dark |
| `--color-accent` | `#ff6b09` | Accent — bright orange CTAs (#ff6b09). |
| `--color-ink` | `#28262d` | Ink — dark text (#28262d). |
| `--color-paper` | `#f9f8fc` | Paper — light section backgrounds (#f9f8fc). |
| `--color-mist` | `#6e6e6e` | Mist — muted text (#6e6e6e). |
| `--color-light` | `#ffd9bf` | Light orange for highlights. |
| `--color-lavender` | `#9988ba` | Lavender accent (#9988ba). |
| `--color-divider` | `#e5e7eb` | Border color. |
| `--color-primary-50` | `#f0eef5` | Primary scale — deep purple. |
| `--color-primary-100` | `#d9d3e8` | primary 100 |
| `--color-primary-200` | `#b3a7d1` | primary 200 |
| `--color-primary-300` | `#8d7bba` | primary 300 |
| `--color-primary-400` | `#6a52a3` | primary 400 |
| `--color-primary-500` | `#301b54` | primary 500 |
| `--color-primary-600` | `#271544` | primary 600 |
| `--color-primary-700` | `#1b0b32` | primary 700 |
| `--color-primary-800` | `#140926` | primary 800 |
| `--color-primary-900` | `#0d051a` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (headings) + Roboto (body). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IconBoxes` | Icon boxes section | see fidelity note below |
| 4 | `AboutSection` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Features` | Features section | see fidelity note below |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `TextLine` | Text line section | see fidelity note below |
| 9 | `Newsletter` | Newsletter section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Blitz SHALL display a fixed navigation bar with the logo "Blitz" (stressed "z" in accent color), desktop navigation links (Home, About Us, Services, Portfolio, Blog, Contact), a search toggle, and a hamburger menu for mobile viewports.

### `Hero`
Blitz SHALL display a full-width hero section with a background image, overlay, headline "Modern design easy to use", subtitle text, and a "Discover More" CTA button.

### `IconBoxes`
Blitz SHALL display a three-column icon boxes section with a heading, CTA, and four feature cards (Great team, Modern Design, Online Marketing, Easy to use).

### `AboutSection`
Blitz SHALL display an about section on a dark purple background with an image on the left and three feature blocks on the right, each containing a heading, description, and person card.

### `Services`
Blitz SHALL display a services section with a grid of service cards, each containing an icon, title, description, and "Discover More" link.

### `Features`
Blitz SHALL display a features section with a three-column layout: left features, center image with CTA, and right features.

### `Cta`
*anchors only* — We love our customers

### `TextLine`
Blitz SHALL display a text line section with an image and "We integrate the future" headline with description and CTA button.

### `Newsletter`
Blitz SHALL display a newsletter section with a dark background, heading "Subscribe to our newsletter", email input, and subscribe button.

### `Footer`
Blitz SHALL display a footer with the brand logo, social icons (Pinterest, Facebook, Twitter, Dribbble, LinkedIn), link columns (Services, Menu, About), and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/blitz/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blitz/public/CNAME` = `blitz.free.componentdock.com`
  and the package `homepage` = `https://blitz.free.componentdock.com`.
