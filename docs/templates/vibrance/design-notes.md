# Vibrance — Design Notes

Reference: **Taxx** — `https://colorlib.com/wp/template/taxx/`  
Live preview: `https://preview.colorlib.com/theme/taxx/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/taxx-free-template.jpg  
Shipped: https://vibrance.free.componentdock.com

Vibrance is a design studio landing page template featuring a hero with background image, event calendar, portfolio grid, client logos, stats counter, blog section, and a footer linking to Component Dock.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Allura**, **Poppins**

## Design tokens (`apps/vibrance/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-orange` | `#ff6a00` | brand orange |
| `--color-brand-pink` | `#fe018f` | brand pink |
| `--color-ink` | `#333333` | ink |
| `--color-smoke` | `#777777` | smoke |
| `--color-mist` | `#f5f5f5` | mist |
| `--color-footer` | `#222222` | footer |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Allura', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SocialBar` | Social bar | see fidelity note below |
| 4 | `Intro` | Intro section | see fidelity note below |
| 5 | `Events` | Event calendar | see fidelity note below |
| 6 | `Portfolio` | Portfolio grid | see fidelity note below |
| 7 | `Clients` | Client logos | see fidelity note below |
| 8 | `About` | About section | see fidelity note below |
| 9 | `Counter` | Counter section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a fixed navigation bar with the Vibrance logo and links to Home, About, Services, Portfolio, Blog, and Contact.

### `Hero`
Users SHALL see a full-screen hero with background image, heading "Vibrance Design", script text "Studio", and a gradient CTA button.

### `SocialBar`
Users SHALL see a social media bar with links to Facebook, Twitter, LinkedIn, and Dribbble.

### `Intro`
Users SHALL see a split layout with an image and text about Vibrance being perfect for business.

### `Events`
Users SHALL see an event calendar section with 4 event cards showing date, title, organizer, description, and read-more link.

### `Portfolio`
Users SHALL see a 6-item portfolio grid with hover overlays showing title and category.

### `Clients`
Users SHALL see a row of 5 client logos.

### `About`
Users SHALL see a split layout with image and text about brand expertise.

### `Counter`
Users SHALL see 4 statistics: 14 Years, +1000 Clients, 14K Followers, 732 Projects.

### `Blog`
Users SHALL see 3 blog post cards with category, date, title, author, and read-more button.

### `Footer`
Users SHALL see a footer with office locations and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/vibrance/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vibrance/public/CNAME` = `vibrance.free.componentdock.com`
  and the package `homepage` = `https://vibrance.free.componentdock.com`.
