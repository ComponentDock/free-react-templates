# Casepoint — Design Notes

Reference: **Thelawyer** — `https://colorlib.com/wp/template/thelawyer/`  
Live preview: `https://preview.colorlib.com/theme/thelawyer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelawyer-free-template.jpg  
Shipped: https://casepoint.free.componentdock.com

A Law Firm template with navigation header, hero, practice areas, about, contact and case studies sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Roboto**, **Rubik**

## Design tokens (`apps/casepoint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3957ff` | brand |
| `--color-brand-dark` | `#112957` | brand dark |
| `--color-brand-darker` | `#0b1416` | brand darker |
| `--color-hero-text` | `#212025` | hero text |
| `--color-text-heading` | `#092c3f` | text heading |
| `--color-text-body` | `#10285d` | text body |
| `--color-text-muted` | `#57667e` | text muted |
| `--color-border-card` | `#dddddd` | border card |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--font-heading` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-hero` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | font hero |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Navigation header | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `PracticeAreas` | Practice Areas | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `ContactForm` | Contact form | see fidelity note below |
| 6 | `CaseStudies` | Case Studies | see fidelity note below |
| 7 | `CtaBanner` | CTA Banner | see fidelity note below |
| 8 | `Team` | Team section | see fidelity note below |
| 9 | `Testimonial` | Testimonial section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a sticky white header with the brand name "Casepoint", navigation links (Home, About, Services, Case Studies, Blog, Contact), a phone number button "01654.066.456", and a hamburger toggle for mobile.

### `Hero`
The system SHALL render a hero section with a background image, a subtitle "Committed to success" with a blue accent line, an h1 heading "Don't Feel Helpless We Fight for Justice", a descriptive paragraph, and a "Learn About Us" CTA button linking to #about.

### `PracticeAreas`
The system SHALL render a section with subtitle "Our Practicing area", heading "Area Of Practice That Can Help You To Win", and three practice area cards (Health Law, Insurance Law, Vehicle Accident) with icons, descriptions, and "Read More >" links.

### `About`
The system SHALL render a split-layout About section with an image on the left, subtitle "About Our Law agency", heading "We are committed for better service", two descriptive paragraphs, and a "Learn About Us" button.

### `ContactForm`
The system SHALL render a contact form section with a background image, subtitle "Fill up to get a quote", heading "World's Leading Law Consultancy Agency!", and form fields: Name, Phone, Practice Area (select), Email, Message, and a "Submit Now" button.

### `CaseStudies`
The system SHALL render a tabbed Case Studies section with subtitle "our recent work", heading "Reliable, Effective & Winning Law For Customers", and three tabs (Accident Law, Health Law, Insurance Law) each showing a 2x2 grid of case cards.

### `CtaBanner`
The system SHALL render a CTA banner with a background image, heading "Are you Searching For a First-Class Consultant?", and a "Contact Now" button.

### `Team`
The system SHALL render a Team section with subtitle "Our lawyers", heading "Meet Our Dedicated Team Members.", and three team member cards (Ethan Welch, Trevor Stanley, Allen Guzman) with photos and role titles.

### `Testimonial`
The system SHALL render a Testimonial section with a background image, a quote SVG icon, a testimonial paragraph, founder name "Oliva Jems", role "Chief Lawyer", and a founder photo.

### `Blog`
The system SHALL render a Blog section with subtitle "Insight and Trends Articles", heading "Lawyers news from around the world selected by us.", and two blog post cards with images, date overlays, titles, and descriptions.

### `Footer`
The system SHALL render a footer with a dark background image, the "Casepoint" logo, description, phone number "+564 7885 3222", email "youremail@gmail.com", "Our Support" links, "Quick Link" links, a newsletter form with email input and Send button, social icons (Twitter, Facebook, Globe, Instagram), copyright line, and a "Component Dock" attribution link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/casepoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/casepoint/public/CNAME` = `casepoint.free.componentdock.com`
  and the package `homepage` = `https://casepoint.free.componentdock.com`.
