# Rankforge — Design Notes

Reference: **Seos** — `https://colorlib.com/wp/template/seos/`  
Live preview: `https://preview.colorlib.com/theme/seos/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seos-free-template.jpg  
Shipped: https://rankforge.free.componentdock.com

A SEO Agency template with hero, what we do, we create steps, generating customers, pricing and portfolio sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/rankforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8eef8` | Primary (headings): dark navy blue |
| `--color-primary-100` | `#c5d3ed` | primary 100 |
| `--color-primary-200` | `#9eb6e0` | primary 200 |
| `--color-primary-300` | `#7699d3` | primary 300 |
| `--color-primary-400` | `#5682c9` | primary 400 |
| `--color-primary-500` | `#366bbf` | primary 500 |
| `--color-primary-600` | `#2f60b0` | primary 600 |
| `--color-primary-700` | `#2b4b80` | primary 700 |
| `--color-primary-800` | `#1f3660` | primary 800 |
| `--color-primary-900` | `#142240` | primary 900 |
| `--color-accent-300` | `#ff8db5` | Accent: pink |
| `--color-accent-400` | `#ff5c97` | accent 400 |
| `--color-accent-500` | `#ec4683` | accent 500 |
| `--color-secondary-400` | `#6063d4` | Secondary: indigo/purple |
| `--color-secondary-500` | `#4043bc` | secondary 500 |
| `--color-mist` | `#f9f9ff` | Light section backgrounds |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--color-smoke` | `#707b8e` | Muted copy |
| `--color-muted` | `#999999` | muted |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-footer-bg` | `#1b1b2f` | Footer background |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `WhatWeDo` | What We Do section | see fidelity note below |
| 4 | `StepsSection` | We Create Steps section | see fidelity note below |
| 5 | `GeneratingCustomers` | Generating Customers section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Portfolio` | Portfolio section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `BlogTips` | Blog/Tips section | see fidelity note below |
| 10 | `CtaBanner` | CTA Banner | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar with the site name "RankForge", section links (Home, About Us, Services, Contact, Blog), and a "Contact Us" CTA button. The navbar becomes sticky on scroll.

### `Hero`
The system SHALL render a full-width hero with a left-right two-column layout. The left column contains an h1 heading "We Collect High Quality Leads", a description paragraph, and a "Contact Us" button. The right column shows a decorative illustration image.

### `WhatWeDo`
The system SHALL render a "What We Do" section with section title "What We Will Do For Your Business" and 3 service cards in a row: Link Building, Content Marketing (active/highlighted), and On Page SEO. Each card has an icon, title, description, and a "get started" link with arrow.

### `StepsSection`
The system SHALL render a two-column layout with an image on the left and a heading "We Create a Steps to Build a Successful Digital Product", a description paragraph, and a "Contact Us" button on the right.

### `GeneratingCustomers`
The system SHALL render a "Generating Customers" section with section title "Generating New Customers Via Online Mode" and a 2x2 grid of feature items: All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI. Each item has an icon, title, and description in a horizontal layout.

### `Pricing`
The system SHALL render a "Pricing" section with section title "Choose Your Very Best Pricing Plan" and 3 pricing cards: $5/mo, $20/mo (active/highlighted), and $30/mo. Each card has an icon, price, feature list, and a "Get Started" button.

### `Portfolio`
The system SHALL render a "Portfolio" section with section title "Visit Some Of Our Awesome Stuffs" and 4 portfolio images in a row, each with overlay text showing a domain name and category.

### `Testimonials`
The system SHALL render a "Testimonials" section with section title "What Client Say About Us" and a testimonial card with a quote, avatar image, name "Olivia James", and role "UI/UX Designer".

### `BlogTips`
The system SHALL render a "Blog/Tips" section with section title "Tips and Tricks From Our Experts" and 3 blog cards with an image, title, "Continue Reading" link, and date.

### `CtaBanner`
The system SHALL render a CTA banner with a gradient background (pink to purple), heading "Have project in mind?", description text, and a white "Contact Us" button.

### `Footer`
The system SHALL render a dark footer with logo, address, social icons, three link columns (Quick Links, Support, Core Features), and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/rankforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rankforge/public/CNAME` = `rankforge.free.componentdock.com`
  and the package `homepage` = `https://rankforge.free.componentdock.com`.
