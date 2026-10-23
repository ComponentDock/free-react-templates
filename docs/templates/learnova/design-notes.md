# Learnova — Design Notes

Reference: **Skwela** — `https://colorlib.com/wp/template/skwela/`  
Live preview: `https://preview.colorlib.com/theme/skwela/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/skwela-free-template.jpg  
Shipped: https://learnova.free.componentdock.com

A clean, Bootstrap-based online education and course platform with a dark-overlay hero, blue primary accent, Source Sans Pro typography. It also includes and course grid layout. Recreation of the ColorLib **Skwela** template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Source Sans Pro**, **Source Sans Pro:wght@300;400;900**

## Design tokens (`apps/learnova/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-blue` | `#007bff` | primary blue |
| `--color-heading-black` | `#000000` | heading black |
| `--color-body-gray` | `#6c757d` | body gray |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--font-display` | `'Source Sans Pro', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-body` | `'Source Sans Pro', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header displays transparent navbar | see fidelity note below |
| 2 | `Hero` | Hero shows headline and CTA | see fidelity note below |
| 3 | `FeaturesDark` | Features section shows learning benefits | see fidelity note below |
| 4 | `FeaturesLight` | — | no dedicated spec block |
| 5 | `FeaturesLast` | — | no dedicated spec block |
| 6 | `CTACover` | — | no dedicated spec block |
| 7 | `TopCourses` | Top Courses shows course grid | see fidelity note below |
| 8 | `Testimonial` | Testimonial shows quote and image | see fidelity note below |
| 9 | `Footer` | Footer shows links and copyright | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Users SHALL see a transparent navbar over the hero with the brand "Learnova" in uppercase.

### `Hero`
Users SHALL see a full-screen hero with dark overlay, main heading, and primary CTA button.

### `FeaturesDark`
Users SHALL see feature items with icons describing learning benefits.

### `FeaturesLight`
*anchors only* — Features light

### `FeaturesLast`
*anchors only* — Features last

### `CTACover`
*anchors only* — Call to action · Sign Up And Get a 7-day Free Trial · Start your learning journey today. No credit card required. · Sign Up Now

### `TopCourses`
Users SHALL see a grid of course cards with images, titles, and enrollment text.

### `Testimonial`
Users SHALL see a testimonial section with a blockquote and person image.

### `Footer`
Users SHALL see a footer with about text, link columns, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/learnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/learnova/public/CNAME` = `learnova.free.componentdock.com`
  and the package `homepage` = `https://learnova.free.componentdock.com`.
