# Givecause — Design Notes

Reference: **Charity Works** — `https://colorlib.com/wp/template/charity-works/`  
Live preview: `https://preview.colorlib.com/theme/charityworks/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/charityworks-free-template.jpg  
Shipped: https://givecause.free.componentdock.com

GiveCause is a single-page charity / non-profit landing page in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@900**, **Great Vibes**, **Josefin Sans**, **Montserrat**

## Design tokens (`apps/givecause/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c6a16e` | brand |
| `--color-brand-hover` | `#e6373d` | brand hover |
| `--color-heading` | `#0b1c39` | heading |
| `--color-body` | `#506172` | body |
| `--color-muted` | `#868c98` | muted |
| `--color-muted-light` | `#888888` | muted light |
| `--color-surface` | `#f9f9ff` | surface |
| `--color-surface-alt` | `#f0e9ff` | surface alt |
| `--color-footer-border` | `#2d3544` | footer border |
| `--font-heading` | `'Josefin Sans', sans-serif` | font heading |
| `--font-hero` | `'Barlow', sans-serif` | font hero |
| `--font-body` | `'Great Vibes', cursive` | font body |
| `--font-utility` | `'Montserrat', sans-serif` | font utility |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section displays | see fidelity note below |
| 3 | `About` | About section displays | see fidelity note below |
| 4 | `Services` | Services section displays | see fidelity note below |
| 5 | `Causes` | Causes section displays | see fidelity note below |
| 6 | `FeaturedEvents` | Featured Events section displays | see fidelity note below |
| 7 | `Countdown` | Countdown section displays | see fidelity note below |
| 8 | `Team` | Team section displays | see fidelity note below |
| 9 | `Testimonials` | Testimonials section displays | see fidelity note below |
| 10 | `CTABanner` | CTA banner displays | see fidelity note below |
| 11 | `Blog` | Blog section displays | see fidelity note below |
| 12 | `Footer` | Footer renders | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Facebook · Twitter · Instagram

### `Hero`
Users SHALL see a full-width hero section with headline, subtext, and two CTA buttons.

### `About`
Users SHALL see an About section with heading, descriptive text, and an image.

### `Services`
Users SHALL see 3 service cards with icons, titles, and descriptions.

### `Causes`
Users SHALL see 3 cause cards with images, titles, descriptions, and fundraising progress.

### `FeaturedEvents`
Users SHALL see event cards on a light background with titles, descriptions, and locations.

### `Countdown`
Users SHALL see a countdown timer with days, hours, minutes, and seconds.

### `Team`
Users SHALL see 4 team member cards with photos, names, roles, and hover effects.

### `Testimonials`
Users SHALL see a testimonial slider with navigation controls.

### `CTABanner`
Users SHALL see a gold banner with headline and CTA button.

### `Blog`
Users SHALL see 2–3 blog post cards with images, dates, titles, excerpts, and metadata.

### `Footer`
Users SHALL see a 4-column footer with logo, links, newsletter, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/givecause/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/givecause/public/CNAME` = `givecause.free.componentdock.com`
  and the package `homepage` = `https://givecause.free.componentdock.com`.
