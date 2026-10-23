# Bulwark — Design Notes

Reference: **Security** — `https://colorlib.com/wp/template/security/`  
Live preview: `https://preview.colorlib.com/theme/security/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/security-free-template.jpg  
Shipped: https://bulwark.free.componentdock.com

Recreation of ColorLib "Security" (https://colorlib.com/wp/template/security/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page security/IT-services landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/bulwark/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#fab700` | brand |
| `--color-heading` | `#222222` | heading |
| `--color-body` | `#777777` | body |
| `--color-light-bg` | `#f9f9ff` | light bg |
| `--color-footer-bg` | `#04091e` | footer bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with two-tier layout and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `Services` | Service section with three cards | see fidelity note below |
| 4 | `Features` | Feature section with six items on light background | see fidelity note below |
| 5 | `Facts` | Facts/stats counter section | see fidelity note below |
| 6 | `Gallery` | Gallery section with masonry layout | see fidelity note below |
| 7 | `Blog` | Blog section with four cards | see fidelity note below |
| 8 | `Footer` | Footer with dark background and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Header`
The template SHALL render a two-tier header: a top bar with social icons (Facebook, Twitter, Dribbble), a phone number, and "Register / Login" link; and a nav bar with the "BULWARK" brand name, menu links (Home, About, Service, Team, Price, Blog, Contact), and a "Pages" dropdown with "Blog Single" and "Elements" sub-items. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

### `Hero`
The template SHALL render a full-width hero section with a background image, a dark overlay (black/70), a subtitle "Security & IT Solutions", a heading "Protecting Your Digital Future", a description paragraph, and a "Get Started" CTA button with brand color background.

### `Services`
The template SHALL render a service section with a centered title "Our Offered Services", a subtitle, and three service cards (Network Security, Data Protection, Cloud Security) each with an image, title, and description. Cards SHALL hover with brand color background.

### `Features`
The template SHALL render a feature section with light background (#f9f9ff), a centered title "Some Features that Made us Unique", and 6 feature items in a 3x2 grid: Expert Team, Threat Monitoring, Rapid Response, Scalable Solutions, Compliance Ready, Security Training. Each item has an icon, title, and description. Items SHALL hover with shadow and brand color.

### `Facts`
The template SHALL render a full-width facts section with brand color (#fab700) background and 5 stat items: 2536 Projects Completed, 6784 Happy Clients, 1059 Total Tasks, 2239 Cups of Coffee, 435 In House Professionals.

### `Gallery`
The template SHALL render a gallery section with a centered title "Latest From Our Gallery" and 7 gallery images in a CSS grid masonry layout with varied sizes. Images SHALL use picsum.photos placeholders.

### `Blog`
The template SHALL render a blog section with light background (#f9f9ff), a centered title "Latest From Our Blog", and 4 blog cards each with an image, date badge, title, excerpt, and likes/comments meta. Cards SHALL hover with image scale and title color change.

### `Footer`
The template SHALL render a dark navy (#04091e) footer with 3 columns: About Us (text + copyright), Newsletter (email input + submit button), Follow Us (social icons). A "More templates at Component Dock" link pointing to https://www.componentdock.com/ SHALL be present.

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
- **Provenance ban.** No file under `apps/bulwark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bulwark/public/CNAME` = `bulwark.free.componentdock.com`
  and the package `homepage` = `https://bulwark.free.componentdock.com`.
