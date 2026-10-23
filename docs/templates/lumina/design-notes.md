# Lumina — Design Notes

Reference: **Ilene Berg** — `https://colorlib.com/wp/template/ilene-berg/`  
Live preview: `https://preview.colorlib.com/theme/ilene-berg/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fullscreen-ilene-berg-free-website-template.jpg  
Shipped: https://lumina.free.componentdock.com

Lumina is a professional agency landing page template with a fullscreen hero, tabbed about/history section, services grid, experience gallery, projects showcase, contact form, newsletter signup, and a branded footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/lumina/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#8460f6` | brand |
| `--color-brand-dark` | `#6b4fd4` | brand dark |
| `--color-pink` | `#f3487f` | pink |
| `--color-service-gray` | `#6f7598` | service gray |
| `--color-yellow` | `#f9c400` | yellow |
| `--color-footer` | `#4e5375` | footer |
| `--color-ink` | `#222222` | ink |
| `--color-mist` | `#777777` | mist |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-primary-50` | `#f3f0ff` | primary 50 |
| `--color-primary-100` | `#e8e0ff` | primary 100 |
| `--color-primary-200` | `#d1c2ff` | primary 200 |
| `--color-primary-300` | `#b49bff` | primary 300 |
| `--color-primary-400` | `#9a78ff` | primary 400 |
| `--color-primary-500` | `#8460f6` | primary 500 |
| `--color-primary-600` | `#6b4fd4` | primary 600 |
| `--color-primary-700` | `#553eb0` | primary 700 |
| `--color-primary-800` | `#432f8c` | primary 800 |
| `--color-primary-900` | `#322368` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with mobile toggle | see fidelity note below |
| 2 | `Hero` | Fullscreen hero with CTA | see fidelity note below |
| 3 | `History` | Tabbed history section | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Experience` | Experience gallery | see fidelity note below |
| 6 | `Projects` | Projects showcase | see fidelity note below |
| 7 | `Contact` | Contact form | see fidelity note below |
| 8 | `Newsletter` | Newsletter signup | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a fixed navbar with the "Lumina" logo and navigation links (Home, About, Services, Contact). On mobile, a hamburger button toggles the nav menu open/closed.

### `Hero`
Users SHALL see a fullscreen hero section with a background image, purple overlay, heading, subtitle, and a "Get Started" call-to-action button.

### `History`
Users SHALL see a "Glorious History" section with three tabs (History, Mission, Vision) that switch content panels.

### `Services`
Users SHALL see a 4-column services grid showing Software, WordPress, Front End, and UX Design with icons and descriptions.

### `Experience`
Users SHALL see a "Beautiful Experiences" section with image thumbnails, descriptive content, and a "View Details" CTA.

### `Projects`
Users SHALL see a "Some Projects" section on a purple background with project cards containing images and descriptions.

### `Contact`
Users SHALL see a "Keep in Touch" section with a contact form (name, email, message fields) and a "Send Message" button.

### `Newsletter`
Users SHALL see a yellow newsletter section with an email input and "Get Started" button.

### `Footer`
Users SHALL see a dark footer with four columns (About Agency, Navigation Links, Navigation Links, Instafeed), social icons, and a "Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/lumina/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lumina/public/CNAME` = `lumina.free.componentdock.com`
  and the package `homepage` = `https://lumina.free.componentdock.com`.
