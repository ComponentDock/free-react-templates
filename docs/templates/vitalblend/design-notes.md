# Vitalblend — Design Notes

Reference: **Healthcouch** — `https://colorlib.com/wp/template/healthcouch/`  
Live preview: `https://preview.colorlib.com/theme/healthcouch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/healthcouch-free-template.jpg  
Shipped: https://vitalblend.free.componentdock.com

VitalBlend is a single-page health & wellness landing page in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/vitalblend/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5aac4e` | brand |
| `--color-brand-dark` | `#234821` | brand dark |
| `--color-brand-heading` | `#0d210b` | brand heading |
| `--color-brand-body` | `#635c5c` | brand body |
| `--color-brand-accent` | `#f04e3c` | brand accent |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar with logo, nav links, and CTA button | see fidelity note below |
| 2 | `Hero` | Hero section with headline, subtitle, CTA, and video icon | see fidelity note below |
| 3 | `About` | About section with image and text | see fidelity note below |
| 4 | `CtaBanner` | Green CTA banner between sections | see fidelity note below |
| 5 | `Services` | Three-column services section with icons | see fidelity note below |
| 6 | `Testimonial` | Testimonial carousel with quote, avatar, and name | see fidelity note below |
| 7 | `VideoSection` | Video background section with play button | see fidelity note below |
| 8 | `Blog` | Blog section with rounded image cards | see fidelity note below |
| 9 | `Satisfaction` | Satisfaction section overlapping the blog area | see fidelity note below |
| 10 | `Footer` | Footer with navigation, newsletter, social links, and Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a sticky navbar at the top with a logo on the left, navigation links (Home, About, Services, Blog, Contact) displayed horizontally, and a green "Make an Appointment" CTA button on the right. On mobile, a hamburger menu icon SHALL replace the horizontal nav.

### `Hero`
The page SHALL display a full-width hero area with a background image, a large heading "Health is wealth keep it healthy", a subtitle paragraph, a dark green "Take a Service" CTA button, and a green circular video play icon with pulsing animation.

### `About`
The page SHALL display a two-column about section with an image on the left and text on the right, including a heading "Create a healthy life you love!", a subtitle paragraph, a description paragraph, and trust/feature icons.

### `CtaBanner`
The page SHALL display a full-width green background banner with the heading "Happy mind healthy life", a subtitle paragraph, and a white-bordered "Take a Service" button positioned on the right.

### `Services`
The page SHALL display a three-column centered grid of service cards. Each card SHALL have a large icon, a heading, a short description, and a green plus-icon link.

### `Testimonial`
The page SHALL display a testimonial section with a carousel of testimonials. Each testimonial SHALL show a quote icon, paragraph text, a circular avatar, a name, and a role. Dot navigation indicators SHALL be visible below.

### `VideoSection`
The page SHALL display a full-width dark background area with a centered green circular play button.

### `Blog`
The page SHALL display a "Latest Blog" heading centered above three blog cards. Each card SHALL show a large image with rounded corners (50px radius), a heading link, and a short paragraph description.

### `Satisfaction`
The page SHALL display a satisfaction section with a green background shape on the left containing the heading "100% satisfaction guaranteed." in white, a white-bordered "Make an Appointment" button, and an image on the right side.

### `Footer`
The page SHALL display a dark background footer with a white logo on the left, horizontal navigation links, social media icon links, a "Subscribe newsletter" heading with email input and green Subscribe button on the right, a copyright line, and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/vitalblend/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitalblend/public/CNAME` = `vitalblend.free.componentdock.com`
  and the package `homepage` = `https://vitalblend.free.componentdock.com`.
