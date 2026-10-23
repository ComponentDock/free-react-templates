# Workfolio — Design Notes

Reference: **Gilb** — `https://colorlib.com/wp/template/gilb/`  
Live preview: `https://preview.colorlib.com/theme/gilb/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gilb-free-template.jpg  
Shipped: https://workfolio.free.componentdock.com

A personal resume/portfolio template with a dark navy background, coral accent, masonry portfolio grid, services cards, and client review carousel. Recreation of ColorLib "Gilb".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/workfolio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-navy` | `#0d0f5b` | navy |
| `--color-navy-deep` | `#0a0b4d` | navy deep |
| `--color-coral` | `#ea5267` | coral |
| `--color-coral-hover` | `#d94558` | coral hover |
| `--color-cream` | `#fbf9ff` | cream |
| `--color-card-border` | `#f0e9ff` | card border |
| `--color-heading` | `#0a0b4d` | heading |
| `--color-body` | `#5b5b5b` | body |
| `--color-muted` | `#999999` | muted |
| `--color-muted-dark` | `#777777` | muted dark |
| `--color-icon-bg` | `#f3f3f7` | icon bg |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays navigation links and social icons | see fidelity note below |
| 2 | `Hero` | Hero displays greeting and CTA | see fidelity note below |
| 3 | `About` | About section displays experience info | see fidelity note below |
| 4 | `Portfolio` | Portfolio section displays masonry grid | see fidelity note below |
| 5 | `Services` | Services section displays 3 service cards | see fidelity note below |
| 6 | `Reviews` | Reviews section displays client testimonials | see fidelity note below |
| 7 | `Footer` | Footer displays contact info and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL contain links for Home, Blog, Pages, and Contact, with social media icons (Facebook, Instagram, Behance, Globe) visible. The navbar SHALL be positioned above the hero banner section with a transparent background.

### `Hero`
The hero section SHALL display "Hi there, This is Alex" greeting, "Digital product designer" as the main heading, and a "Contact me" button on a dark navy (#0d0f5b) background.

### `About`
The about section SHALL show "about me" heading, a descriptive paragraph, "07" years of experience, and an experiences list with 6 entries on a dark navy (#0a0b4d) background.

### `Portfolio`
The portfolio section SHALL display "My portfolio" heading, "Take a look around some of my awesome works" subheading, a "More works" button, and 5 portfolio items in a masonry grid with coral hover overlay.

### `Services`
The services section SHALL display 3 cards for "User experience design", "Digital art", and "Social media marketing", each with an icon, title, description, and "learn more" link on white background.

### `Reviews`
The reviews section SHALL display "Word from my clients" heading, 6 client review items in a carousel with quoted text, client photo, name, and role on a dark navy background.

### `Footer`
The footer SHALL display "Discuss your project now", an email address, "Download CV" button, navigation links (About, Work, Contact), social media icons, and a copyright line with a Component Dock link on a dark navy (#0a0b4d) background.

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
- **Provenance ban.** No file under `apps/workfolio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/workfolio/public/CNAME` = `workfolio.free.componentdock.com`
  and the package `homepage` = `https://workfolio.free.componentdock.com`.
