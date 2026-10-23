# Tadpole — Design Notes

Reference: **Kindergarten** — `https://colorlib.com/wp/template/kindergarten/`  
Live preview: `https://preview.colorlib.com/theme/kindergarten/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kindergarten-free-template.jpg  
Shipped: https://tadpole.free.componentdock.com

Tadpole is a single-page kindergarten/preschool landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kindergarten" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Baloo 2**, **Baloo 2:wght@400;500;600;700;800**, **Nunito**

## Design tokens (`apps/tadpole/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-pink` | `#ff6b9d` | Tadpole brand palette — kindergarten/preschool theme tokens |
| `--color-brand-yellow` | `#ffc107` | brand yellow |
| `--color-brand-green` | `#28a745` | brand green |
| `--color-brand-blue` | `#4a90d9` | brand blue |
| `--color-brand-orange` | `#fd7e14` | brand orange |
| `--color-brand-dark` | `#2c3e50` | brand dark |
| `--color-brand-light` | `#f8f9fa` | brand light |
| `--font-display` | `'Baloo 2', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-body` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information and social links | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation and mobile menu | see fidelity note below |
| 3 | `Hero` | Hero section displays headline and CTAs | see fidelity note below |
| 4 | `Features` | Features section shows service cards | see fidelity note below |
| 5 | `About` | About section displays content | see fidelity note below |
| 6 | `Programs` | Programs section shows curriculum cards | see fidelity note below |
| 7 | `Teachers` | Teachers section shows staff cards | see fidelity note below |
| 8 | `Events` | Events section shows countdown timer | see fidelity note below |
| 9 | `Testimonials` | Testimonials section shows parent feedback | see fidelity note below |
| 10 | `Blog` | Blog section shows recent posts | see fidelity note below |
| 11 | `Footer` | Footer displays links and newsletter | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
WHEN the page loads THEN a top bar shows address, phone, and email AND social media icons (Facebook, Twitter, Instagram) are displayed

### `Navbar`
WHEN the page loads THEN the navbar displays logo and navigation links AND an "Enroll Now" CTA button is visible

### `Hero`
WHEN the page loads THEN the hero section shows a headline about kids learning and growing AND a subtext describing the kindergarten AND call-to-action buttons are displayed

### `Features`
WHEN the page loads THEN three feature cards are displayed with icons

### `About`
WHEN the page loads THEN the about section shows an image and descriptive text

### `Programs`
WHEN the page loads THEN three program cards are displayed on a green background

### `Teachers`
WHEN the page loads THEN three teacher cards are displayed with photos

### `Events`
WHEN the page loads THEN a countdown timer displays days, hours, minutes, seconds

### `Testimonials`
WHEN the page loads THEN a testimonial carousel displays quotes from parents

### `Blog`
WHEN the page loads THEN three blog post cards are displayed

### `Footer`
WHEN the page loads THEN the footer shows about text, navigation links, programs list, and newsletter form

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
- **Provenance ban.** No file under `apps/tadpole/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tadpole/public/CNAME` = `tadpole.free.componentdock.com`
  and the package `homepage` = `https://tadpole.free.componentdock.com`.
