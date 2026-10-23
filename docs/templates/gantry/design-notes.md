# Gantry — Design Notes

Reference: **Engineers** — `https://colorlib.com/wp/template/engineers/`  
Live preview: `https://preview.colorlib.com/theme/engineers/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/engineers-free-template.jpg  
Shipped: https://gantry.free.componentdock.com

Gantry is a single-page construction / engineering company template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Oswald**, **Oswald:wght@300;400;700**

## Design tokens (`apps/gantry/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff5e15` | brand |
| `--color-navy` | `#09162a` | navy |
| `--color-black` | `#000000` | Black — footer background and the newsletter subscribe button. |
| `--color-soft` | `#f8f9fa` | Soft — the light grey header-top strip and blog section. |
| `--color-card-line` | `#efefef` | Card line — the 1px service-card borders. |
| `--font-heading` | `'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header — light top strip + orange navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Services` | What We Do services section | see fidelity note below |
| 4 | `WhyChooseUs` | Why Choose Us section | see fidelity note below |
| 5 | `QuoteForm` | Get A Quote form | see fidelity note below |
| 6 | `Projects` | Our Projects section | see fidelity note below |
| 7 | `Testimonials` | Testimonial section | see fidelity note below |
| 8 | `Blog` | News & Updates blog section | see fidelity note below |
| 9 | `Newsletter` | Newsletter band | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a light header-top strip with the brand on the left and three contact columns on the right (location, phone, email — each an orange icon + bold caption + grey sub-caption, desktop only), and below it a solid orange `#ff5e15` navbar with six white uppercase links (Home, About Us, Our Projects, Testimonials, Blog, Contact). On mobile a hamburger SHALL open the same nav links.

### `HeroSlider`
The system SHALL render a full-viewport hero slider with an engineering-photo background under a dark `#222` overlay (opacity .3), two slides with centered white headlines where one word is highlighted in orange, and square white prev/next arrow controls.

### `Services`
The system SHALL render a white services section with a centered orange subtitle "What We Do", a black section title, and four service cards, each showing a number (01–04), an icon, a heading, and a paragraph.

### `WhyChooseUs`
The system SHALL render a dark-navy `#09162a` split section with a photo on the left (overlapping the section above) and, on the right, the subtitle "Why Choose Us", the heading "More than 50 year experience in industry", a paragraph, and three feature rows (orange icon + white heading + white paragraph).

### `QuoteForm`
The system SHALL render a dark-navy quote panel with the heading "Request A Quote" and a form with four input fields (Your name, Phone number, Your email, Subject), a Message textarea, and a full-width orange "Send Message" submit button. Inputs SHALL be transparent with a 2px white bottom border and no rounding.

### `Projects`
The system SHALL render a dark-navy projects section with the heading "Explore Our Recent Projects" and a carousel of four project cards, each showing a photo, a category label, and a title, with a dark overlay on hover.

### `Testimonials`
The system SHALL render a white testimonial section with the heading "What People Says" and two testimonial blocks, each showing a circular photo, a bold quote, and an orange uppercase client name.

### `Blog`
The system SHALL render a light-grey blog section with the heading "News & Updates" and three blog cards, each showing a photo, a post title, and a meta line ("Posted by … In …").

### `Newsletter`
The system SHALL render an orange `#ff5e15` newsletter band with the heading "Subscribe To Newsletter", a supporting paragraph, a text input with a 2px white border, and a black "Subscribe" button.

### `Footer`
The system SHALL render a black footer with four widget columns (brand + about + "Learn More" link, Our Company 6 links, Our Services 3 links, Contact 5 links) and a bottom copyright bar. The credit SHALL read "This template is made with ♥ by **Component Dock**" linking https://www.componentdock.com/ (no ColorLib credit).

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
- **Provenance ban.** No file under `apps/gantry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gantry/public/CNAME` = `gantry.free.componentdock.com`
  and the package `homepage` = `https://gantry.free.componentdock.com`.
