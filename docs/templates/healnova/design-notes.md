# Healnova — Design Notes

Reference: **Medically** — `https://colorlib.com/wp/template/medically/`  
Live preview: `https://preview.colorlib.com/theme/medically/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medically-free-template.jpg  
Shipped: https://healnova.free.componentdock.com

Healnova is a single-page medical/hospital landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Medically" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Playfair Display**

## Design tokens (`apps/healnova/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#31b0d5` | Healnova brand palette — teal/blue from the ColorLib "Medically" design. |
| `--color-brand-dark` | `#2595b8` | brand dark |
| `--color-ink` | `#1a1a2e` | Ink — dark headings. |
| `--color-ink-dark` | `#101020` | ink dark |
| `--color-paper` | `#f7f8f9` | Paper — light section background (#f7f8f9). |
| `--color-mist` | `#6b7280` | Mist — muted body text. |
| `--color-primary-50` | `#ecf8fc` | primary 50 |
| `--color-primary-100` | `#d0eef7` | primary 100 |
| `--color-primary-200` | `#a6dfef` | primary 200 |
| `--color-primary-300` | `#6cc9e3` | primary 300 |
| `--color-primary-400` | `#3badd5` | primary 400 |
| `--color-primary-500` | `#31b0d5` | primary 500 |
| `--color-primary-600` | `#2595b8` | primary 600 |
| `--color-primary-700` | `#1f7a99` | primary 700 |
| `--color-primary-800` | `#1c6580` | primary 800 |
| `--color-primary-900` | `#1a536a` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Open Sans" (body) + "Playfair Display" (headings). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `QuickContact` | Quick contact bar | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Mission` | Mission section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Healnova", links for Home, Services, About, Team, Testimonials, and Contact, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "We Provide High Solutions for Your Health", a "Get started" CTA button, and a background image.

### `QuickContact`
The system SHALL render a quick-contact bar with phone, email, and address.

### `About`
The system SHALL render an about section with the heading "We Are Happy To Serve You!", a description, and "Contact Us" and "Read More" buttons.

### `Mission`
The system SHALL render a mission section with a heading and video play button.

### `Services`
The system SHALL render a services section with 6 service cards.

### `Team`
The system SHALL render a team section with 3 doctor cards.

### `Testimonials`
The system SHALL render a testimonials section with patient quotes.

### `Blog`
The system SHALL render a blog section with post cards.

### `Footer`
The system SHALL render a blue footer with departments, services, navigation, social links, and a newsletter subscription form.

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
- **Provenance ban.** No file under `apps/healnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/healnova/public/CNAME` = `healnova.free.componentdock.com`
  and the package `homepage` = `https://healnova.free.componentdock.com`.
