# Vertex — Design Notes

Reference: **Boxus** — `https://colorlib.com/wp/template/boxus/`  
Live preview: `https://preview.colorlib.com/theme/boxus/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg  
Shipped: https://vertex.free.componentdock.com

Vertex is a creative digital agency single-page landing template with services, portfolio, team, stories, video features and contact sections. It recreates the ColorLib **Boxus** design (https://colorlib.com/wp/template/boxus/) as `apps/vertex`.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/vertex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#32db8a` | brand |
| `--color-brand-dark` | `#28b872` | brand dark |
| `--color-ink` | `#23214c` | Ink — dark navy body text (#23214c). |
| `--color-ink-dark` | `#1a1839` | ink dark |
| `--color-paper` | `#ffffff` | Paper — white section background. |
| `--color-mist` | `#8e8da9` | Mist — muted secondary text (#8e8da9). |
| `--color-primary-50` | `#eafcf3` | Primary scale for shared Button/ButtonLink primary variants. |
| `--color-primary-100` | `#c6f7de` | primary 100 |
| `--color-primary-200` | `#8ef0bd` | primary 200 |
| `--color-primary-300` | `#56e89c` | primary 300 |
| `--color-primary-400` | `#32db8a` | primary 400 |
| `--color-primary-500` | `#28b872` | primary 500 |
| `--color-primary-600` | `#1e945a` | primary 600 |
| `--color-primary-700` | `#157042` | primary 700 |
| `--color-primary-800` | `#0c4c2a` | primary 800 |
| `--color-primary-900` | `#032812` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Roboto (body) + Montserrat (headings). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Portfolio` | Portfolio section | see fidelity note below |
| 5 | `Crafters` | Crafters (team) section | see fidelity note below |
| 6 | `Stories` | Stories (blog) section | see fidelity note below |
| 7 | `Offer` | Offer (video features) section | see fidelity note below |
| 8 | `Expertise` | Expertise (skills) section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed dark purple (#221C5A) top navigation bar with the "Vertex" logo on the left and 8 section anchor links on the right (Home, Services, Portfolio, Crafters, Stories, Offer, Expertise, Contact). The nav SHALL be responsive with a hamburger menu toggle on mobile.

### `Hero`
The template SHALL display a full-width hero with the headline "We Craft Awesome Web And Graphic Design Solutions", a subtitle, and a "Get Started" CTA linking to the contact section.

### `Services`
The template SHALL display 4 service cards (Branding, Mobile Apps, Web, Graphic) each with a lucide-react icon, title, and description paragraph. The section SHALL be numbered "01" in large green text.

### `Portfolio`
The template SHALL display 4 portfolio items in a grid, each with a placeholder image (picsum.photos), a "PSD Mockup" tag, and a title. Items SHALL show a hover overlay effect. The section SHALL be numbered "02".

### `Crafters`
The template SHALL display 3 team member cards with photos (picsum.photos), names, roles (Lead Designer, SEO Master, PSD Guru), and short bio paragraphs. The section SHALL be numbered "03".

### `Stories`
The template SHALL display 4 blog post cards in a 2-column grid, each with a number (01-04), author name, category tag, and excerpt paragraph. A "Go To Blog" CTA SHALL be present. The section SHALL be numbered "04".

### `Offer`
The template SHALL display a dark purple section with 6 feature items (Video Editing, Premium Clear, For All Displays, Right On Time, Innovative Ideas, Perfect Sound), each with a lucide-react icon. The section SHALL be numbered "05".

### `Expertise`
The template SHALL display 4 skill progress bars (HTML 81%, CSS 93%, PSD 72%, Design 99%) with green (#32DB8A) fill. The section SHALL be numbered "06".

### `Contact`
The template SHALL display a contact form with 4 required fields (Name, Email, Subject, Message) and a "Send Message" submit button. The section SHALL be numbered "07".

### `Footer`
The template SHALL display a dark purple footer with the "Vertex" logo, copyright notice, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/vertex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vertex/public/CNAME` = `vertex.free.componentdock.com`
  and the package `homepage` = `https://vertex.free.componentdock.com`.
