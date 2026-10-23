# Workhive — Design Notes

Reference: **Sharespace** — `https://colorlib.com/wp/template/sharespace/`  
Live preview: `https://preview.colorlib.com/theme/sharespace/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sharespace-free-template.jpg  
Shipped: https://workhive.free.componentdock.com

Recreation of ColorLib "Sharespace" (https://colorlib.com/wp/template/sharespace/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page coworking/workspace landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400**, **Josefin Sans**

## Design tokens (`apps/workhive/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f86011` | primary |
| `--color-primary-dark` | `#e2560b` | primary dark |
| `--color-ink` | `#072366` | ink |
| `--color-body` | `#5e5e5e` | body |
| `--color-muted` | `#999999` | muted |
| `--color-peach` | `#fff8f5` | peach |
| `--color-peach-light` | `#fff2ed` | peach light |
| `--color-nav-text` | `#1d2547` | nav text |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar with logo, navigation links, and social icons | see fidelity note below |
| 2 | `Hero` | Hero section with background image, heading, and rating badge | see fidelity note below |
| 3 | `About` | About section with 2-column image and text layout | see fidelity note below |
| 4 | `Testimonials` | Testimonials section on peach background | see fidelity note below |
| 5 | `Spaces` | Spaces gallery with 3 hover-overlay cards | see fidelity note below |
| 6 | `Features` | Features section with 4 check-icon cards | see fidelity note below |
| 7 | `VideoSection` | Video section with background image and play button | see fidelity note below |
| 8 | `Brands` | Brands logo strip on peach background | see fidelity note below |
| 9 | `Blog` | Blog section with 3 article cards | see fidelity note below |
| 10 | `Footer` | Footer with subscribe form, nav links, social icons, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky top navbar with the logo text "Workhive" on the left, navigation links (Home, Spaces, About, Blog, Contact) in the center, and social icon links (Twitter, Facebook, LinkedIn) on the right. On mobile, a hamburger toggle button SHALL show/hide a slide-down menu containing all nav links and social icons.

### `Hero`
The template SHALL render a full-width hero section with a background image and dark overlay, a heading "Amazing workspace you will love", a subtitle about discovering spaces, an "Explore Our Spaces" CTA button linking to the spaces section, and a floating rating badge showing "4.8" with 5 star icons.

### `About`
The template SHALL render an "About Us" section with a 2-column grid: a workspace image on the left and text content on the right containing the label "About Us", a heading "Premium quality spaces for agency and personal", a descriptive paragraph, and a "Learn More" link with an arrow icon.

### `Testimonials`
The template SHALL render a testimonials section with a peach background, a centered heading "Spaces that you'd love", a blockquote with testimonial text, and the author name and role.

### `Spaces`
The template SHALL render a spaces gallery section with 3 space cards (Modern Open Space, Private Studio, Collaborative Hub) in a 3-column grid. Each card SHALL show an image that reveals an overlay on hover with the heading "Spaces that you'd love", a price, and an "Explore More Spaces" button.

### `Features`
The template SHALL render a features section with a centered "Features" label, a heading "Make the customer the hero of your story", and 4 feature cards (Money Saver, Locker and Key, Active Listening, Space for Events) each with a check icon, title, and description.

### `VideoSection`
The template SHALL render a video section with a background image, dark overlay, and a centered circular play button.

### `Brands`
The template SHALL render a brands section with a peach background displaying 5 brand name placeholders (Brand Alpha, Brand Beta, Brand Gamma, Brand Delta, Brand Epsilon) in a centered flex layout.

### `Blog`
The template SHALL render a blog section with a centered "Our Insights" label, a heading "Company Insights", and 3 blog article cards each with an image, title, and excerpt.

### `Footer`
The template SHALL render a dark footer with a 3-column grid: brand name "Workhive" with description, Quick Links column with nav links, and a Subscribe section with email input and submit button. Below SHALL be centered social icon links (Twitter, Facebook, LinkedIn) and a copyright line with a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/workhive/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/workhive/public/CNAME` = `workhive.free.componentdock.com`
  and the package `homepage` = `https://workhive.free.componentdock.com`.
