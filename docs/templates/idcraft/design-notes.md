# Idcraft — Design Notes

Reference: **Vcard** — `https://colorlib.com/wp/template/vcard/`  
Live preview: `https://preview.colorlib.com/theme/vcard/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vcard-free-template.jpg  
Shipped: https://idcraft.free.componentdock.com

A Personal vCard & Resume template with hero, about, skills, services, portfolio and cool facts sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/idcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-amber-brand` | `#ffb016` | amber brand |
| `--color-dark-heading` | `#252525` | dark heading |
| `--color-gray-text` | `#828282` | gray text |
| `--color-light-bg` | `#f3f5f8` | light bg |
| `--color-overlay-dark` | `rgba(2, 3, 28, 0.9)` | overlay dark |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Skills` | Skills section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Portfolio` | Portfolio section | see fidelity note below |
| 7 | `CoolFacts` | Cool facts section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar with nav links (About, Skills, Services, Portfolio, Contact) and an "Available for freelance work" CTA button. The navbar SHALL become sticky with a white background and box shadow on scroll.

### `Hero`
The system SHALL render a full-height hero section with a background image, a dark overlay, the greeting "Hello I'm", the name "Maria Smith" in large amber text, the subtitle "Digital Designer & Illustrator", contact info (email, phone, website), and social icons.

### `About`
The system SHALL render an about section with two columns: a heading "Creative & Committed" on the left, and a descriptive paragraph on the right.

### `Skills`
The system SHALL render a skills section with 4 circular progress indicators: Photos Taken (75%), Digital Design (83%), HTML Coding (25%), Illustrations (95%), each with a title and description.

### `Services`
The system SHALL render a services section with 6 service cards on a dark overlay background: Digital Design, Illustrations, Web Design, Logo Design, Brand Identity, and Motion Graphics. Each card SHALL have an icon and description text.

### `Portfolio`
The system SHALL render a portfolio section with a filter bar (Digital Design, Web Design, Brand Identity, Illustrations, Motion Graphics) and a 4-column image gallery with hover overlays showing title, category, and a zoom icon.

### `CoolFacts`
The system SHALL render a cool facts section on a dark background with 4 stat columns: Projects Completed (10+), Happy Clients (87+), Awards Won (10+), and Coffee per day (7+).

### `Testimonials`
The system SHALL render a testimonials section with quote cards containing a heading, testimonial text, author image, name, and role.

### `Contact`
The system SHALL render a contact section with a two-column layout: a contact form (Name, Email, Subject, Message fields + Send Message button) on the left, and a map placeholder on the right. Below SHALL be a contact info bar with Address, Phone, and Email.

### `Footer`
The system SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/idcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/idcraft/public/CNAME` = `idcraft.free.componentdock.com`
  and the package `homepage` = `https://idcraft.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/vcard/` (HTTP 200, title
`Vcard - Resume CV & Vcard Template`) and its single sheet `style.css`
(45,443 B; no Bootstrap).

| Token | Reference | App (`apps/idcraft`) |
| ----- | --------- | -------------------- |
| Brand amber | `#ffb016` (34: section rules, preloader, scrollUp, nav active, 92 px hero name, services band, filter chip, zoom icon) | `--color-amber-brand: #ffb016` ✓ |
| Heading ink | `#252525` (18) | `--color-dark-heading: #252525` ✓ |
| Copy | `#828282` (11) | `--color-gray-text: #828282` ✓ |
| Light band | `#f3f5f8` (6) | `--color-light-bg: #f3f5f8` ✓ |
| Hero scrim | `rgba(2, 3, 28, 0.9)` (×1) | `--color-overlay-dark: rgba(2, 3, 28, 0.9)` ✓ |
| Face | Poppins (single declaration) | `--font-sans: 'Poppins', …` ✓ |
| Buttons | `border-radius: 0`, height 54 px, `min-width: 185px` | matches the screenshot (solid amber, square) |

Exact match across the whole palette — the strongest of the ten. The only
untracked reference value is the `#c7d4dc` skill-bar track (×2), which the
app renders as a neutral.
