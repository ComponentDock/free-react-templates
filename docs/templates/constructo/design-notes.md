# Constructo — Design Notes

Reference: **Topbuilder** — `https://colorlib.com/wp/template/topbuilder/`  
Live preview: `https://preview.colorlib.com/theme/topbuilder/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/topbuilder-construction-company-website-template.jpg  
Shipped: https://constructo.free.componentdock.com

Recreate the ColorLib "Topbuilder" construction company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Constructo". The template provides a full-featured construction company website with hero, features, about, services, team, stats, testimonials, gallery, blog, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@300;400;700**, **Roboto**

## Design tokens (`apps/constructo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#111f29` | brand |
| `--color-brand-light` | `#1a2d3d` | brand light |
| `--color-accent` | `#f6b60b` | accent |
| `--color-accent-dark` | `#d9a009` | accent dark |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#555555` | body |
| `--color-paper` | `#ffffff` | paper |
| `--color-light` | `#f8f8f8` | light |
| `--color-muted` | `#eeeeee` | muted |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | Navbar displays navigation links | see fidelity note below |
| 3 | `Hero` | Hero displays heading and CTA | see fidelity note below |
| 4 | `Features` | Features section shows 4 items | see fidelity note below |
| 5 | `About` | About section has contact button | see fidelity note below |
| 6 | `WhatWeOffer` | What We Offer shows 3 services | see fidelity note below |
| 7 | `WhyChooseUs` | Why Choose Us shows 3 feature items | see fidelity note below |
| 8 | `Gallery` | Gallery shows filterable project images | see fidelity note below |
| 9 | `Team` | Team shows 4 members | see fidelity note below |
| 10 | `Stats` | Stats section shows 4 counters | see fidelity note below |
| 11 | `Testimonials` | Testimonials displays quote cards | see fidelity note below |
| 12 | `Projects` | Projects section shows image grid | see fidelity note below |
| 13 | `Blog` | Blog shows 3 posts | see fidelity note below |
| 14 | `Partners` | Partners displays logos | see fidelity note below |
| 15 | `CtaBanner` | CTA banner has book now button | see fidelity note below |
| 16 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Mon - Sat 8:00 - 18:00

### `Navbar`
The navbar SHALL display Home, About, Services, Gallery, Blog, and Contact navigation links with a search button.

### `Hero`
The hero section SHALL display a welcome heading, main heading, description text, and a "Read More" call-to-action button over a background image.

### `Features`
The features section SHALL display 4 feature cards with icons, titles, and descriptions.

### `About`
The about section SHALL display a section title, "Who We Are" heading, descriptive text, and a "Contact Now" button.

### `WhatWeOffer`
The What We Offer section SHALL display 3 service cards with images, icons, titles, and descriptions.

### `WhyChooseUs`
The Why Choose Us section SHALL display 3 feature items with icons, titles, and descriptions alongside a feature image.

### `Gallery`
The gallery section SHALL display 6 project images in a grid with category filter buttons.

### `Team`
The team section SHALL display 4 team member cards with photos, names, and roles.

### `Stats`
The stats section SHALL display 4 stat blocks with icons, numbers, and labels on a dark background.

### `Testimonials`
The testimonials section SHALL display testimonial cards with avatars, names, roles, and quote text.

### `Projects`
The projects section SHALL display 8 project images in a grid on a dark background with hover overlays.

### `Blog`
The blog section SHALL display 3 blog post cards with images, titles, authors, dates, and excerpts.

### `Partners`
The partners section SHALL display placeholder partner logos.

### `CtaBanner`
The CTA banner SHALL display booking text and a "Book Now" button on a yellow background.

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock" in the copyright area.

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
- **Provenance ban.** No file under `apps/constructo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/constructo/public/CNAME` = `constructo.free.componentdock.com`
  and the package `homepage` = `https://constructo.free.componentdock.com`.
