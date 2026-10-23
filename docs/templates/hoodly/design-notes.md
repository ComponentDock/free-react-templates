# Hoodly — Design Notes

Reference: **Locals Directory** — `https://colorlib.com/wp/template/locals-directory/`  
Live preview: `https://preview.colorlib.com/theme/localsdirectory/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/localsdirectory-free-template.jpg  
Shipped: https://hoodly.free.componentdock.com

Hoodly is a local-business directory landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**

## Design tokens (`apps/hoodly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5581` | brand |
| `--color-ink` | `#242424` | Heading ink (#242424 in the source). |
| `--color-muted` | `#787878` | Body-copy gray (#787878 in the source). |
| `--color-light` | `#f7f8fb` | Light section + card background (#F7F8FB in the source). |
| `--color-dark` | `#1d1d1d` | Dark header + footer background (#1d1d1d in the source). |
| `--color-input-dark` | `#333333` | Newsletter input background (#333333 in the source). |
| `--color-number-dark` | `#2c2c2c` | How-it-works number squares (#2C2C2C in the source). |
| `--color-open-grey` | `#cacdd6` | "Open" pill grey (#CACDD6 in the source). |
| `--color-tag-yellow` | `#ffc600` | FEATURED tag colors per category. |
| `--color-tag-blue` | `#009cff` | tag blue |
| `--color-tag-green` | `#4cca81` | tag green |
| `--color-tag-purple` | `#c55cd8` | tag purple |
| `--color-footer-muted` | `#8e8e8e` | Footer widget link gray (#8e8e8e in the source). |
| `--color-copyright-grey` | `#414141` | Footer copyright gray (#414141 in the source). |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | Original font: "Lato" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / Navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Trending` | Trending listings | see fidelity note below |
| 4 | `Categories` | Categories mosaic | see fidelity note below |
| 5 | `Testimonials` | Testimonials | see fidelity note below |
| 6 | `Work` | How it works | see fidelity note below |
| 7 | `AppSection` | App section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a solid-dark header bar over the hero with a text brand, five nav links (Home active), register/login links, and an "Add Listing" button.

### `Hero`
The system SHALL render a full hero over a city photo with a big city heading and a translucent search panel.

### `Trending`
The system SHALL render the "Top trending for your city" section with four listing cards.

### `Categories`
The system SHALL render the categories mosaic with one large tile and four grid tiles, each with a black text box and a View All link.

### `Testimonials`
The system SHALL render a testimonial carousel with three slides.

### `Work`
The system SHALL render the photo "How it works" band with three numbered steps.

### `AppSection`
The system SHALL render the light "Get the App now!" section with check bullets and store badges.

### `Footer`
The system SHALL render the dark footer with a newsletter form, link widgets, a blog column, and a copyright bar.

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
- **Provenance ban.** No file under `apps/hoodly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hoodly/public/CNAME` = `hoodly.free.componentdock.com`
  and the package `homepage` = `https://hoodly.free.componentdock.com`.
