# Vigor — Design Notes

Reference: **Endurance** — `https://colorlib.com/wp/template/endurance/`  
Live preview: `https://preview.colorlib.com/theme/fitnessgym/` (the ROW's slug `fitnessgym`, probed 200 on 2026-10-23) — the spec names `endurance` and records no demo.  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessgym-free-template.jpg — the ROW's slug `fitnessgym`, not the spec's `endurance`  
Shipped: https://vigor.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `fitnessgym` for this app while the spec records `endurance`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Vigor is a single-page fitness/crossfit gym template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Endurance" free template (source: https://colorlib.com/wp/template/endurance/), built under a DIFFERENT name (**Vigor**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/vigor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#fffde7` | Vigor brand palette — yellow CTA (#fcd307) from the original design |
| `--color-brand-100` | `#fff9c4` | brand 100 |
| `--color-brand-200` | `#fff59d` | brand 200 |
| `--color-brand-300` | `#fff176` | brand 300 |
| `--color-brand-400` | `#fcd307` | brand 400 |
| `--color-brand-500` | `#fbc02d` | brand 500 |
| `--color-brand-600` | `#f9a825` | brand 600 |
| `--color-brand-700` | `#f57f17` | brand 700 |
| `--color-brand-800` | `#ef6c00` | brand 800 |
| `--color-brand-900` | `#e65100` | brand 900 |
| `--color-accent-400` | `#fd5f00` | Secondary — orange (#fd5f00) |
| `--color-accent-500` | `#e65300` | accent 500 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `GymClasses` | Gym Classes section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Testimonies` | Testimonies section | see fidelity note below |
| 8 | `Appointment` | Appointment section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Counter` | Counter section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the brand name "Vigor" flanked by decorative bars, and navigation links (Home, About, Programs, Trainers, Pricing, Blog, Contact). The navbar SHALL include a hamburger toggle that opens a mobile menu on small screens.

### `Hero`
The system SHALL render a full-height hero section with two slides. Each slide SHALL have a background image, a dark overlay (black 50% opacity), a large uppercase heading, and a subheading. The first slide reads "Crossfit is for Everyone" and the second reads "Crossfit Gym".

### `About`
The system SHALL render a split-layout about section with a video placeholder image on the left (with a play button), thumbnail images below, and text content on the right including the heading "Welcome to Vigor Crossfit Gym" and a "Join us" CTA button.

### `Services`
The system SHALL render a services section on a light background with a centered heading "Kick your feet up" and four service cards (Analyze Your Goal, Work Hard On It, Improve Your Performance, Achieve Your Perfect Body) each with an icon and description.

### `GymClasses`
The system SHALL render a dark-background gym classes section with heading "What You Get From Vigor Membership" and five class cards (Muscle Sculpt, Fat Burn, Cycling, Pilates & Stretching, Boxing).

### `Pricing`
The system SHALL render a pricing section on a light background with heading "Membership Plans" and three pricing tiers (One Day Training, Pay Every Month, 1 Year Membership) each with a price, feature list, and "Get Started" CTA.

### `Testimonies`
The system SHALL render a testimonies section with heading "Successful Stories" and three customer testimonials with quotes, names, roles, and profile images.

### `Appointment`
The system SHALL render a dark-background appointment section with heading "Book Your Session" and a form with fields for name, email, date, time, and message. On submit, it SHALL show a thank-you message.

### `Blog`
The system SHALL render a blog section on a light background with heading "Latest Articles" and three blog post cards with images, titles, dates, authors, and comment counts.

### `Counter`
The system SHALL render a counter section with a dark background image overlay and four statistics: Trainers (1,200), Members (8,500), Programs (45), Awards (120).

### `Footer`
The system SHALL render a dark footer with four columns: About Us (with social icons), Services (links), Contact info (address, phone, email), and a "More Templates" section linking to Component Dock. The footer bottom SHALL include a copyright line with a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/vigor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vigor/public/CNAME` = `vigor.free.componentdock.com`
  and the package `homepage` = `https://vigor.free.componentdock.com`.
