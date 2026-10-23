# Reachly — Design Notes

Reference: **Calvino** — `https://colorlib.com/wp/template/calvino/`  
Live preview: `https://preview.colorlib.com/theme/calvino/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvino-free-template.jpg  
Shipped: https://reachly.free.componentdock.com

Reachly is a single-page digital-marketing / SEO agency website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600**, **Nunito**

## Design tokens (`apps/reachly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff4495` | brand |
| `--color-brand-dark` | `#ff6d6d` | brand dark |
| `--color-navy` | `#192839` | navy |
| `--color-ink` | `#131933` | ink |
| `--color-copy` | `#545454` | copy |
| `--color-band` | `#f8fbfe` | band |
| `--color-footer-text` | `#5e5e5e` | footer text |
| `--color-footer-heading` | `#1a1a1a` | footer heading |
| `--color-orange` | `#e67118` | orange |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Transparent header with nav and pink CTA | see fidelity note below |
| 2 | `Hero` | Split hero with eyebrow pill and pink CTA | see fidelity note below |
| 3 | `Services` | Services section with four hover-fill cards | see fidelity note below |
| 4 | `About` | About section with image and caption | see fidelity note below |
| 5 | `Pricing` | Pricing plan with Yearly/Monthly tabs | see fidelity note below |
| 6 | `WhyChooseUs` | Why Choose Us with stats and quote | see fidelity note below |
| 7 | `BrandStrip` | Client brand logo strip | see fidelity note below |
| 8 | `CaseStudy` | Case Study cards with overlay captions | see fidelity note below |
| 9 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 10 | `CtaBanner` | Pink CTA banner with white border button | see fidelity note below |
| 11 | `Footer` | Footer with five columns and Component Dock credit | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a transparent sticky header with a logo, a centered nav (one dropdown), a call-phone line, and a pink pill "Let's Talk" button; the header SHALL turn solid white on scroll.

### `Hero`
The system SHALL render a hero with a white pill eyebrow, a large dark headline, subcopy, a pink pill "Explore Services" button, and a floating circular play button.

### `Services`
The system SHALL render a centered "Our Services" heading and four white cards, each with a pink icon circle, a title, and copy, that fill dark navy on hover.

### `About`
The system SHALL render an About section with a photo on the left and a caption (eyebrow, heading, paragraph, "Explore More" button) on the right.

### `Pricing`
The system SHALL render a pricing section on a pale `#F8FBFE` band with Yearly/Monthly pill tabs and three pricing cards, each with an icon, plan name, price, feature list, and an orange pill "Get Started" button.

### `WhyChooseUs`
The system SHALL render a "Why Choose Us" heading with an "Explore More" underline link on the same row, two numbered stats, a paragraph, and a staff quote.

### `BrandStrip`
The system SHALL render a strip of six client logo placeholders below the Why Choose Us section.

### `CaseStudy`
The system SHALL render a centered "Case Study" heading and four photo cards, each with a category tag and a title overlaid at the bottom.

### `Testimonials`
The system SHALL render a testimonial carousel with three slides, each with a quote, an avatar, and an author line that does not reference ColorLib.

### `CtaBanner`
The system SHALL render a full-width background-photo band with a big pink-gradient box on the right containing a white heading, copy, and a white-bordered pill "Contact Us" button.

### `Footer`
The system SHALL render a light footer with an about column, three link columns (Navigation, Services, Support), a Contact Us column, and a copyright bar linking Component Dock.

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
- **Provenance ban.** No file under `apps/reachly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reachly/public/CNAME` = `reachly.free.componentdock.com`
  and the package `homepage` = `https://reachly.free.componentdock.com`.
