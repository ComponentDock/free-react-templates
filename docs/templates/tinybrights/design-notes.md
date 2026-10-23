# Tinybrights — Design Notes

Reference: **Kiddos** — `https://colorlib.com/wp/template/kiddos/`  
Live preview: `https://preview.colorlib.com/theme/kiddos/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg  
Shipped: https://tinybrights.free.componentdock.com

A children's education & kindergarten website template. Recreation of ColorLib "Kiddos".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Fredericka the Great**, **Work Sans**

## Design tokens (`apps/tinybrights/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#1eaaf1` | brand blue |
| `--color-brand-orange` | `#fda638` | brand orange |
| `--color-brand-green` | `#8cc152` | brand green |
| `--color-brand-red` | `#f1453d` | brand red |
| `--color-brand-purple` | `#5d50c6` | brand purple |
| `--color-brand-dark` | `#232323` | brand dark |
| `--color-brand-light` | `#fafafa` | brand light |
| `--font-body` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font body |
| `--font-display` | `'Fredericka the Great', cursive` | font display |

> The spec has no section-level requirements; the order below is read from `apps/tinybrights/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopInfoBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroSlider` | — | no dedicated spec block |
| 4 | `ServicesBar` | — | no dedicated spec block |
| 5 | `AboutSection` | — | no dedicated spec block |
| 6 | `IntroBanner` | — | no dedicated spec block |
| 7 | `StaffSection` | — | no dedicated spec block |
| 8 | `CoursesSection` | — | no dedicated spec block |
| 9 | `CounterSection` | — | no dedicated spec block |
| 10 | `Testimonials` | — | no dedicated spec block |
| 11 | `ConsultSection` | — | no dedicated spec block |
| 12 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopInfoBar`
*anchors only* — complementary

### `Navbar`
*anchors only* — banner · Primary · Mobile

### `HeroSlider`
*anchors only* — Slide navigation · Learn More

### `ServicesBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `AboutSection`
*anchors only* — Welcome to TinyBrights · Explore Courses

### `IntroBanner`
*anchors only* — Where Every Day is an Adventure

### `StaffSection`
*anchors only* — Meet Our Teachers · Our passionate educators bring creativity and care to every lesson.

### `CoursesSection`
*anchors only* — Popular Courses · Fun-filled programs designed to inspire and educate young learners.

### `CounterSection`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Testimonials`
*anchors only* — What Parents Say

### `ConsultSection`
*anchors only* — Book a Free Consultation · Schedule a visit and discover how TinyBrights can brighten your child&apos;s future. · Send Message

### `Footer`
*anchors only* — contentinfo · Subscribe · TinyBrights · Newsletter · Get updates on events and new programs. · Follow Us

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
- **Provenance ban.** No file under `apps/tinybrights/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tinybrights/public/CNAME` = `tinybrights.free.componentdock.com`
  and the package `homepage` = `https://tinybrights.free.componentdock.com`.
