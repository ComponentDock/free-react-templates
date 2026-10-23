# Corona — Design Notes

Reference: **Eclipse** — `https://colorlib.com/wp/template/eclipse/`  
Live preview: `https://preview.colorlib.com/theme/eclipse/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eclipse-free-template.jpeg  
Shipped: https://corona.free.componentdock.com

Corona is a single-page education-website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@900**, **Roboto**

## Design tokens (`apps/corona/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#7c32ff` | brand |
| `--color-brand-2` | `#c738d8` | brand 2 |
| `--color-ink` | `#222222` | Ink — the #222222 heading/price/footer color. |
| `--color-muted` | `#828bb2` | muted |
| `--color-smoke` | `#777777` | Smoke — the #777777 secondary text color. |
| `--color-card` | `#f9f9fb` | Card — the #f9f9fb details panel behind course cards. |
| `--color-tint` | `#f2f3f7` | Tint — the #f2f3f7 background of the "Features That Can Avail" cards. |
| `--font-display` | `'Playfair Display', Georgia, 'Times New Roman', serif` | Original fonts: Playfair Display (900) for headings, Roboto for body. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header and navbar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Features` | Other features grid | see fidelity note below |
| 4 | `PopularCourses` | Popular courses | see fidelity note below |
| 5 | `Video` | Video area | see fidelity note below |
| 6 | `OtherFeatures` | Feature strip | see fidelity note below |
| 7 | `Registration` | Registration form | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Blog` | Blog posts | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar with a serif wordmark, a right-aligned uppercase menu with two dropdowns, and a mobile burger.

### `Hero`
The system SHALL render a full-cover hero with a white serif headline, a paragraph and a right-side illustration, separated from the next section by a wave edge.

### `Features`
The system SHALL render the "Features That Can Avail By Everyone" grid with six `#f2f3f7` cards.

### `PopularCourses`
The system SHALL render the "Popular Courses Available Right Now" title and four course cards with image, category, price, title, rating and review count.

### `Video`
The system SHALL render the "Watch Our Trainers in Live Action" section on a `#828bb2` band with video thumbnails and centered play buttons.

### `OtherFeatures`
The system SHALL render three icon feature items separated by thin borders.

### `Registration`
The system SHALL render the purple "Courses for Free" band with a glassy centered form (Name, Phone Number, Email Address) and a gradient Submit button.

### `Testimonials`
The system SHALL render a testimonial carousel with a quote, an author name and role, and a photo.

### `Blog`
The system SHALL render three blog post cards with image, meta (date, likes, comments), title and a "View Details" link.

### `Footer`
The system SHALL render a dark footer with five link widgets and a newsletter signup.

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
- **Provenance ban.** No file under `apps/corona/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/corona/public/CNAME` = `corona.free.componentdock.com`
  and the package `homepage` = `https://corona.free.componentdock.com`.
