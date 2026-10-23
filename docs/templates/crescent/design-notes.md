# Crescent — Design Notes

Reference: **Crose** — `https://colorlib.com/wp/template/crose/`  
Live preview: `https://preview.colorlib.com/theme/crose/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/crose-free-template.jpg  
Shipped: https://crescent.free.componentdock.com

Recreation of ColorLib **Crose** (https://colorlib.com/wp/template/crose/). Preview URL: https://preview.colorlib.com/theme/crose/ Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/crescent/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c92f2f` | brand |
| `--color-brand-dark` | `#1f1f2c` | brand dark |
| `--color-body-text` | `#636363` | body text |
| `--color-muted-text` | `#959595` | muted text |
| `--color-light-bg` | `#f3f3f3` | light bg |
| `--font-body` | `'Open Sans', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact info and social links | see fidelity note below |
| 2 | `Navbar` | Navbar provides sticky navigation | see fidelity note below |
| 3 | `Hero` | Hero section displays carousel with background images | see fidelity note below |
| 4 | `About` | About section shows 3 content cards | see fidelity note below |
| 5 | `CallToAction` | Call to Action section shows parallax banner | see fidelity note below |
| 6 | `Sermons` | Latest Sermons displays sermon cards | see fidelity note below |
| 7 | `Events` | Upcoming Events shows event cards with parallax heading | see fidelity note below |
| 8 | `Gallery` | Gallery displays image grid | see fidelity note below |
| 9 | `Blog` | Blog section shows blog post cards | see fidelity note below |
| 10 | `Subscribe` | Subscribe section shows newsletter form | see fidelity note below |
| 11 | `Footer` | Footer displays 4 columns with links and contact info | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The top bar SHALL display opening hours, social media icons (Facebook, Twitter), email address, and phone number on a light background.

### `Navbar`
The navbar SHALL be sticky on scroll, display a logo, navigation links (Home, About, Sermons, Events, Blog, Contact), a search icon, and a "Donate Us" CTA button.

### `Hero`
The hero SHALL show a full-width section with background images, centered white heading, subtext, and a brand-red CTA button.

### `About`
The about section SHALL display a heading "Welcome To Church" and 3 cards with image, title, description, and "Read More" link.

### `CallToAction`
The CTA section SHALL show a parallax background image with dark overlay, centered white text, and a transparent button with red border.

### `Sermons`
The sermons section SHALL show 3 sermon cards with thumbnail image, date badge, media action icons (video, audio, docs, download), title, speaker, categories, and time.

### `Events`
The events section SHALL show a parallax heading area and event cards with thumbnail image, title, date, time, location, description, and "Find Out More" button.

### `Gallery`
The gallery SHALL show 10 images in a responsive grid layout.

### `Blog`
The blog section SHALL show 3 blog cards with image, title, author, date, and excerpt.

### `Subscribe`
The subscribe section SHALL show a heading, subtext, email input, and subscribe button.

### `Footer`
The footer SHALL have a dark navy background (#1f1f2c), 4 columns (about, quick links, latest news, contact info), and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/crescent/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/crescent/public/CNAME` = `crescent.free.componentdock.com`
  and the package `homepage` = `https://crescent.free.componentdock.com`.
