# Netora — Design Notes

Reference: **Itlock** — `https://colorlib.com/wp/template/itlock/`  
Live preview: `https://preview.colorlib.com/theme/itlock/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/itlock-colorlib-template.jpg  
Shipped: https://netora.free.componentdock.com

Netora is a corporate IT-solutions one-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Fira Sans**, **Fira Sans:wght@400;500;600;700;800**, **Rubik**

## Design tokens (`apps/netora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#316ec2` | brand |
| `--color-brand-hover` | `#2a5fae` | brand hover |
| `--color-navy-band` | `#0e1b50` | navy band |
| `--color-navy-deep` | `#003072` | navy deep |
| `--color-navy` | `#1f2b7b` | navy |
| `--color-body` | `#4c526e` | body |
| `--color-on-navy` | `#c6c9d9` | on navy |
| `--color-section` | `#f9f9ff` | section |
| `--color-card` | `#f3f8ff` | card |
| `--color-testimonial` | `#ebf0f8` | testimonial |
| `--color-hero` | `#f2f4f8` | hero |
| `--color-hairline` | `#d3d5e2` | hairline |
| `--color-star` | `#f4e700` | star |
| `--color-accent` | `#4cd3e3` | accent |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Fira Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `SatisfactionBand` | Satisfaction Guaranteed band | see fidelity note below |
| 4 | `Categories` | — | no dedicated spec block |
| 5 | `About` | About | see fidelity note below |
| 6 | `Services` | Services | see fidelity note below |
| 7 | `Insights` | Insights CTA band | see fidelity note below |
| 8 | `Brands` | Brand logos | see fidelity note below |
| 9 | `CaseStudy` | Our Case Study | see fidelity note below |
| 10 | `Testimonials` | Testimonials | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Search · Main navigation · Mobile navigation

### `Hero`
The system SHALL render a 750px hero slider over a tech photo with a cyan→blue gradient overlay, a white headline, subtext, and a white-outline CTA.

### `SatisfactionBand`
The system SHALL render the deep-navy `#0E1B50` band with a person-check icon, Fira Sans white heading, subtext, and a white-outline Learn More.

### `Categories`
*anchors only* — Industry We Offer · Managed IT services customized for your industry · Tailored technology foundations that fit the way your industry actually works. · Find Out More

### `About`
The system SHALL render the split About section with an image on one side and the "About Us" copy with a solid-blue Learn More button on the other.

### `Services`
The system SHALL render the Services section with three photo cards.

### `Insights`
The system SHALL render the navy `#003072` Insights band with a white heading, paragraph, and white-outline Learn More.

### `Brands`
The system SHALL render the "We work with global brands" caption with a grayscale logo marquee.

### `CaseStudy`
The system SHALL render the "Our Case Study" section with three photo cards carrying a "Netora" tag.

### `Testimonials`
The system SHALL render the testimonial carousel on `#EBF0F8` with "Brilliant work" cards, star ratings, and author names.

### `Footer`
The system SHALL render the 4-column footer with a newsletter form, three link columns, social icons, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/netora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/netora/public/CNAME` = `netora.free.componentdock.com`
  and the package `homepage` = `https://netora.free.componentdock.com`.
