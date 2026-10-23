# Verdant — Design Notes

Reference: **Neos** — `https://colorlib.com/wp/template/neos/`  
Live preview: `https://preview.colorlib.com/theme/neos/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/neos-free-template.jpg  
Shipped: https://verdant.free.componentdock.com

Verdant is a single-page template-showcase landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Work Sans**

## Design tokens (`apps/verdant/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#71bc42` | brand |
| `--color-brand-dark` | `#5da334` | brand dark |
| `--color-ink` | `#1e1e1c` | ink |
| `--color-mist` | `#f7f7f7` | mist |
| `--color-fog` | `#f8f9fa` | fog |
| `--color-line` | `#e6e6e6` | line |
| `--color-primary-50` | `#f2f9ec` | primary 50 |
| `--color-primary-100` | `#e2f2d3` | primary 100 |
| `--color-primary-200` | `#c6e5aa` | primary 200 |
| `--color-primary-300` | `#a4d47a` | primary 300 |
| `--color-primary-400` | `#89c557` | primary 400 |
| `--color-primary-500` | `#71bc42` | primary 500 |
| `--color-primary-600` | `#5da334` | primary 600 |
| `--color-primary-700` | `#4a8229` | primary 700 |
| `--color-primary-800` | `#3a6520` | primary 800 |
| `--color-primary-900` | `#2c4d19` | primary 900 |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | White navbar with logo, links and Get Started button | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Portfolio` | — | no dedicated spec block |
| 6 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 7 | `Products` | Recent Blog Posts strip | see fidelity note below |
| 8 | `Blog` | Recent Blog Posts strip | see fidelity note below |
| 9 | `Newsletter` | Near-black footer with newsletter | see fidelity note below |
| 10 | `Contact` | Green CTA band | see fidelity note below |
| 11 | `Footer` | Near-black footer with newsletter | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a white navbar (`.site-navbar-wrap` bg-white, z-index 99) with the brand "Verdant" in bold uppercase on the left and, on the right, uppercase navigation links Home (active), About (with a dropdown of Testimonials / Gallery / FAQ / Why Choose Us / Sub Menus, itself a nested dropdown of Testimonials / Gallery / Why Choose Us), Services, Blog, Contact, and a green "Get Started" button.

### `Hero`
The system SHALL render a full-width hero carousel with exactly two slides. Each slide SHALL show a background photo with a dark overlay (`rgba(0,0,0,.2)`), a centered white uppercase headline in the Oswald heading font, and NO buttons. The hero SHALL be at least 600px tall (`calc(80vh)`), with carousel prev/next arrows and dots.

### `Services`
*anchors only* — Play video · OUR SERVICES · We provide the perfect service for you.

### `About`
*anchors only* — ABOUT US · We are leading in the plants service fields.

### `Portfolio`
*anchors only* — OUR PORTFOLIO · We devote all of our experience and efforts for creation

### `Testimonials`
The system SHALL render a Testimonials section with the uppercase heading "Testimonials" and a carousel of four testimonials, each showing a circular photo avatar, a name (Katie Johnson, Jun Mars, Shane Holmes, Mark Johnson), and an italic quote. White carousel arrows SHALL be shown below center.

### `Products`
The system SHALL render a Blog section with the uppercase heading "Recent Blog Posts" and three cards, each showing a photo, the title "Where Do You Learn HTML & CSS in 2019?", the meta line "By James — Jan. 20, 2019", a short blurb, and a "Read More" link.

### `Blog`
The system SHALL render a Blog section with the uppercase heading "Recent Blog Posts" and three cards, each showing a photo, the title "Where Do You Learn HTML & CSS in 2019?", the meta line "By James — Jan. 20, 2019", a short blurb, and a "Read More" link.

### `Newsletter`
The system SHALL render a footer with a near-black background (`#1e1e1c`) and three widgets: "About" (paragraph + Read More link), a wider column with "Quick Menu" (Home / About / Blog / Contacts / Privacy), "Free Templates" (HTML5 / CSS3 / Clean Design / Responsive / Multi Purpose Template) and "Stay up to date" (email input with placeholder "Enter your email" + "Subscribe" button), and "Social Icons" (Facebook, Twitter, Instagram, LinkedIn). A copyright line SHALL appear at the bottom.

### `Contact`
The system SHALL render a full-width green (`#71bc42`) band after the blog section with the centered white uppercase heading "Try For Your Next Project" and an outline "Contact Us" button (white 2px border, white text, hover → white background with green text).

### `Footer`
The system SHALL render a footer with a near-black background (`#1e1e1c`) and three widgets: "About" (paragraph + Read More link), a wider column with "Quick Menu" (Home / About / Blog / Contacts / Privacy), "Free Templates" (HTML5 / CSS3 / Clean Design / Responsive / Multi Purpose Template) and "Stay up to date" (email input with placeholder "Enter your email" + "Subscribe" button), and "Social Icons" (Facebook, Twitter, Instagram, LinkedIn). A copyright line SHALL appear at the bottom.

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
- **Provenance ban.** No file under `apps/verdant/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/verdant/public/CNAME` = `verdant.free.componentdock.com`
  and the package `homepage` = `https://verdant.free.componentdock.com`.
