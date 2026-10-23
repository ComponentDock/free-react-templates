# Renovo — Design Notes

Reference: **Repair** — `https://colorlib.com/wp/template/repair/`  
Live preview: `https://preview.colorlib.com/theme/repair/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/repair-free-template-1.jpg  
Shipped: https://renovo.free.componentdock.com

Provide a professional tech repair services landing page with hero, services, about, discount CTA, work process, FAQ, testimonials, blog, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/renovo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#988fff` | brand |
| `--color-brand-dark` | `#7b6fe0` | brand dark |
| `--color-footer-dark` | `#04091e` | footer dark |
| `--font-body` | `'Poppins', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation | see fidelity note below |
| 3 | `Hero` | Hero section showcases the brand | see fidelity note below |
| 4 | `Services` | Services section displays offerings | see fidelity note below |
| 5 | `About` | About section describes capabilities | see fidelity note below |
| 6 | `DiscountCTA` | Discount CTA collects estimates | see fidelity note below |
| 7 | `WorkProcess` | Work process shows steps | see fidelity note below |
| 8 | `FAQ` | FAQ section with accordion and skills | see fidelity note below |
| 9 | `Testimonials` | Testimonials showcase client feedback | see fidelity note below |
| 10 | `Blog` | Blog shows recent posts | see fidelity note below |
| 11 | `Brands` | — | no dedicated spec block |
| 12 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The top bar SHALL display social media icons (Facebook, Twitter, Dribbble, Behance) on the left and phone number plus email on the right.

### `Navbar`
The navbar SHALL display the "Renovo" logo and navigation links (Home, About, Services, Process, FAQ, Testimonials, Blog, Contact). On mobile, a hamburger menu toggles open/closed.

### `Hero`
The hero SHALL display a background image with gradient overlay, heading "All things need to repair", subtitle, description, and a "Get Started" CTA button.

### `Services`
The services section SHALL display 4 service cards in a grid, each with an image, title, and description.

### `About`
The about section SHALL display a heading about fixing computers and mobiles, a description, two feature boxes (Expert Services, Great Support), and an image.

### `DiscountCTA`
The discount section SHALL display a promotional heading, description, CTA button, and an estimate form with name, phone, email, message fields and a submit button.

### `WorkProcess`
The work process section SHALL display 4 steps with icons: Detect problem, Split solution into parts, Analyzing method, Final result comes out.

### `FAQ`
The FAQ section SHALL display an accordion with 4 items and skill bars for Hardware Repair, Software Support, Data Recovery, and Network Setup with percentage labels.

### `Testimonials`
The testimonials section SHALL display 3 testimonial cards with avatar, quote, name, and role on a gradient background.

### `Blog`
The blog section SHALL display 4 blog cards with image, date, title, excerpt, and a details link.

### `Brands`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
The footer SHALL display 4 columns (About, Navigation, Newsletter, InstaFeed), a bottom bar with copyright, and a link to https://www.componentdock.com/ branded "Component Dock".

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
- **Provenance ban.** No file under `apps/renovo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/renovo/public/CNAME` = `renovo.free.componentdock.com`
  and the package `homepage` = `https://renovo.free.componentdock.com`.
