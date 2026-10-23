# Vitae — Design Notes

Reference: **Me** — `https://colorlib.com/wp/template/me/`  
Live preview: `https://preview.colorlib.com/theme/me/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/me-free-template.jpg  
Shipped: https://vitae.free.componentdock.com

Vitae is a single-page personal CV/portfolio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Arbutus Slab**

## Design tokens (`apps/vitae/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#207561` | brand |
| `--color-ink` | `#000000` | ink |
| `--color-body` | `#666666` | body |
| `--color-lead` | `#1a1a1a` | lead |
| `--color-muted` | `#888888` | muted |
| `--color-light` | `#f8f9fa` | light |
| `--color-darkband` | `#343a40` | Dark band — testimonials section (#343a40 in the source). |
| `--color-line` | `#eeeeee` | Underline-style contact input borders (#eee in the source). |
| `--color-primary-50` | `#e6f3ef` | primary 50 |
| `--color-primary-100` | `#c8e6dd` | primary 100 |
| `--color-primary-200` | `#9ed3c3` | primary 200 |
| `--color-primary-300` | `#6fbfa6` | primary 300 |
| `--color-primary-400` | `#46a98c` | primary 400 |
| `--color-primary-500` | `#2d9377` | primary 500 |
| `--color-primary-600` | `#207561` | primary 600 |
| `--color-primary-700` | `#000000` | primary 700 |
| `--font-sans` | `'Arbutus Slab', ui-serif, Georgia, serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Three-part sticky header with center logo | see fidelity note below |
| 2 | `Hero` | Light hero with portrait and green CTA | see fidelity note below |
| 3 | `Services` | My Services card grid | see fidelity note below |
| 4 | `About` | About Me split | see fidelity note below |
| 5 | `Portfolio` | My Portfolio image grid | see fidelity note below |
| 6 | `Testimonials` | Dark testimonials carousel | see fidelity note below |
| 7 | `Clients` | Clients logo row | see fidelity note below |
| 8 | `Contact` | Underline-style contact form | see fidelity note below |
| 9 | `Footer` | Light footer with link lists and social icons | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute-positioned header row with a left nav (Home, Services, About), a centered green "Vitae." logo, and a right nav (Portfolio, Client, Contact), with a mobile hamburger below lg; on scroll the header SHALL become sticky with a white background, soft shadow and black links, and on mobile a slide-in white panel SHALL show the nav links.

### `Hero`
The system SHALL render a 100vh hero on a light `#f8f9fa` background with a left text column ("I'm Ben Carson" 3rem headline, "I'm Web Developer Based on NY City" lead, green pill "Portfolio" button) and a large portrait photo bleeding off the right edge.

### `Services`
The system SHALL render a white section titled "My Services" with a 2-column grid of four service cards, each with a 50px green circular icon badge, a 1.2rem heading and a paragraph, and a hover lift with a deeper shadow.

### `About`
The system SHALL render a white "About Me" section with a left-aligned section title, a light-boxed portrait photo column, two text columns and a green pill "Contact Me" button.

### `Portfolio`
The system SHALL render a white "My Portfolio" section with a centered title and a grid of nine portfolio images whose categories are web, brand and design; hovering an image SHALL zoom it to 1.05, fade in a `rgba(0,0,0,0.4)` overlay and scale in a centered white search icon.

### `Testimonials`
The system SHALL render a `#343a40` dark section titled "testimonials" with a carousel of three slides, each showing an italic white quote and a semi-transparent attribution, with white carousel dots.

### `Clients`
The system SHALL render a white "Clients" section with a centered title and a responsive grid of six client logo images.

### `Contact`
The system SHALL render a white "Contact Form" section with underline-only inputs (First name, Last name, Email address, Subject of the message, message textarea) and a green pill "Send Message" submit button; the form SHALL validate and show a success state on valid submit.

### `Footer`
The system SHALL render a `#f8f9fa` footer with an address column, three mini link lists (Services, Resources, Links), a "Follow Me" column with five PLAIN social icons (no circles), and a centered copyright strip re-branded to Vitae.

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
- **Provenance ban.** No file under `apps/vitae/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitae/public/CNAME` = `vitae.free.componentdock.com`
  and the package `homepage` = `https://vitae.free.componentdock.com`.
