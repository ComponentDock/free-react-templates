# Sanctum — Design Notes

Reference: **Wisdom** — `https://colorlib.com/wp/template/wisdom/`  
Live preview: `https://preview.colorlib.com/theme/wisdom/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wisdom-free-template.jpg  
Shipped: https://sanctum.free.componentdock.com

Sanctum is a single-page church website with a hero, a bible-study countdown, a services grid, video sermon cards, testimonies, event dates and blog. It recreates the ColorLib **Wisdom** design (https://colorlib.com/wp/template/wisdom/).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700;800**

## Design tokens (`apps/sanctum/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#08c299` | brand |
| `--color-brand-hover` | `#06a87e` | brand hover |
| `--color-nav` | `#1a1a1a` | nav |
| `--color-section` | `#f6f8f9` | section |
| `--color-ink` | `#252525` | ink |
| `--color-body` | `#636363` | body |
| `--color-mist` | `#e8eaed` | mist |
| `--color-white` | `#ffffff` | white |
| `--color-dark` | `#16181b` | dark |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with site branding and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `BibleStudy` | Bible Study countdown section | see fidelity note below |
| 4 | `About` | About section with image and text | see fidelity note below |
| 5 | `Services` | Services grid with four cards | see fidelity note below |
| 6 | `Newsletter` | Newsletter subscription section | see fidelity note below |
| 7 | `Sermons` | Sermons section with video cards | see fidelity note below |
| 8 | `Testimonies` | Testimonies section | see fidelity note below |
| 9 | `Counter` | Church Achievements counter section | see fidelity note below |
| 10 | `Events` | Events section with date badges | see fidelity note below |
| 11 | `Blog` | Blog section with cards | see fidelity note below |
| 12 | `ContactInfo` | Footer with Component Dock link and contact info | see fidelity note below |
| 13 | `Footer` | Footer with Component Dock link and contact info | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page SHALL display a dark navbar with the site name "Sanctum Church" and navigation links (Home, About, Events, Sermons, Blog, Contact). A mobile hamburger menu SHALL toggle an expandable mobile nav.

### `Hero`
The page SHALL display a full-height hero with a background image, dark overlay, heading "Needing Jesus Christ Together", and a CTA link "Save your spirit".

### `BibleStudy`
The page SHALL display a "Bible Study" section with a countdown timer and an "Events Details" button.

### `About`
The page SHALL display a split about section with an image (including play button) and text "Loving God, Loving Others and Serving the World".

### `Services`
The page SHALL display a "Giving light to someone" section with four service cards: I'm New Here, Care Ministries, Prayer Request, Podcasts.

### `Newsletter`
The page SHALL display a parallax newsletter section with heading, description, email input, and submit button. Form submission SHALL be prevented (no navigation).

### `Sermons`
The page SHALL display a "Watch our sermons" section with three sermon cards, each having a play button, title, and speaker name. A "Watch all sermons" CTA SHALL be present.

### `Testimonies`
The page SHALL display a "Testimonies" section with cards containing a user photo, quote, name, and role.

### `Counter`
The page SHALL display a "Church Achievements" section with three stat blocks: Churches, Members, Donations.

### `Events`
The page SHALL display an events section with a background image, "Our latest events" heading, and event entries with date badges.

### `Blog`
The page SHALL display a "Recent Blog" section with three blog cards showing date, author, comment count, and title.

### `ContactInfo`
The page SHALL display a dark footer with site name, Quick Links, Contact Information, social icons, copyright, and a "Component Dock" link pointing to https://www.componentdock.com/.

### `Footer`
The page SHALL display a dark footer with site name, Quick Links, Contact Information, social icons, copyright, and a "Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/sanctum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sanctum/public/CNAME` = `sanctum.free.componentdock.com`
  and the package `homepage` = `https://sanctum.free.componentdock.com`.
