# Pillar — Design Notes

Reference: **Archs** — `https://colorlib.com/wp/template/archs/`  
Live preview: `https://preview.colorlib.com/theme/archs/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/archs-free-template.jpg  
Shipped: https://pillar.free.componentdock.com

Pillar is an architecture and interior design landing page template recreating the ColorLib "Archs" design in React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/pillar/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#ff5733` | accent |
| `--color-accent-dark` | `#e64a25` | accent dark |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Inter — clean modern typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | Navbar renders with logo and navigation links | see fidelity note below |
| 3 | `Hero` | Hero section displays with heading and CTA | see fidelity note below |
| 4 | `Features` | Features section displays three feature cards | see fidelity note below |
| 5 | `About` | About section displays with image and text | see fidelity note below |
| 6 | `Team` | Team section displays six team members | see fidelity note below |
| 7 | `Pricing` | Pricing section displays three plans | see fidelity note below |
| 8 | `FAQ` | FAQ section displays expandable questions | see fidelity note below |
| 9 | `Testimonials` | Testimonials section displays client quotes | see fidelity note below |
| 10 | `Projects` | Projects section displays project gallery | see fidelity note below |
| 11 | `Blog` | Blog section displays recent posts | see fidelity note below |
| 12 | `Services` | Services section displays service items | see fidelity note below |
| 13 | `Contact` | Contact section displays a form | see fidelity note below |
| 14 | `Footer` | Footer displays navigation, newsletter, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
The template SHALL display a sticky navigation bar with the "Pillar" logo and links to Home, About, Team, Pricing, Projects, Blog, Services, and Contact sections.

### `Hero`
The template SHALL display a full-width hero section with a dark overlay background image, the heading "Interior Design", a subtitle, and a "Get Started" call-to-action button.

### `Features`
The template SHALL display a features section with three icon cards: Innovative Structure, Architectural Design, and Interior Design.

### `About`
The template SHALL display an about section with a split layout: an image on the left and "About Us" text with bullet points and a CTA on the right.

### `Team`
The template SHALL display a team section with six members in a 3-column grid, each with a photo, name, role, and social media icons.

### `Pricing`
The template SHALL display a pricing section with three plans: Starter ($99/yr), Professional ($199/yr), and Enterprise ($299/yr), each with a features list and "Buy Now" button.

### `FAQ`
The template SHALL display an FAQ section with five expandable questions using an accordion pattern.

### `Testimonials`
The template SHALL display a testimonials section with client quotes in a grid layout.

### `Projects`
The template SHALL display a projects section with six project cards in a 3-column grid, each with an image, title, and category label.

### `Blog`
The template SHALL display a blog section with three post cards showing dates, images, and titles, plus a "View All Posts" link.

### `Services`
The template SHALL display a services section with six service items in a 3-column grid, each with an icon, title, and description.

### `Contact`
The template SHALL display a contact section with a form containing Full Name, Email, and Message fields, plus a "Send Message" submit button.

### `Footer`
The template SHALL display a four-column footer with About, Navigation, More Links, and Recent News sections, a newsletter signup form, social media links, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/pillar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pillar/public/CNAME` = `pillar.free.componentdock.com`
  and the package `homepage` = `https://pillar.free.componentdock.com`.
