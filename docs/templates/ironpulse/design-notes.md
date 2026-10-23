# Ironpulse — Design Notes

Reference: `https://colorlib.com/wp/template/crossbody/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/crossbody/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/topgym-free-template.jpg — the ROW's slug `topgym`, not the spec's `crossbody`  
Shipped: https://ironpulse.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `topgym` for this app while the spec records `crossbody`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

IronPulse is a free crossfit and fitness landing page template built with React 19, Tailwind CSS 4, and TypeScript. It recreates the ColorLib Crossbody design under a new, original name.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Work Sans**, **Work Sans:wght@300;400;500;600;700;800**

## Design tokens (`apps/ironpulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#78d5ef` | IronPulse brand palette — cyan primary. |
| `--color-brand-dark` | `#5cc4e3` | brand dark |
| `--color-dark` | `#141414` | Dark backgrounds. |
| `--color-darker` | `#0d0d0d` | darker |
| `--color-ink` | `#212529` | Body text. |
| `--color-mist` | `#6c757d` | Muted text. |
| `--color-paper` | `#ffffff` | Paper — white background. |
| `--color-primary-50` | `#eef9fd` | primary 50 |
| `--color-primary-100` | `#d4f1f9` | primary 100 |
| `--color-primary-200` | `#a9e3f3` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#5cc4e3` | primary 400 |
| `--color-primary-500` | `#3ab3d7` | primary 500 |
| `--color-primary-600` | `#2896b8` | primary 600 |
| `--color-primary-700` | `#1e7a97` | primary 700 |
| `--color-primary-800` | `#1a6478` | primary 800 |
| `--color-primary-900` | `#185265` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Font: Work Sans from Google Fonts. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section with headline and video play | see fidelity note below |
| 3 | `Pricing` | Pricing section with 3 course cards | see fidelity note below |
| 4 | `Programs` | Programs section with 5 fitness programs | see fidelity note below |
| 5 | `StatsCounter` | Stats counter with 4 statistics | see fidelity note below |
| 6 | `Coaches` | Coaches section with 4 trainer cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section with 3 posts | see fidelity note below |
| 9 | `Gallery` | Gallery with 4 images | see fidelity note below |
| 10 | `ContactForm` | Contact form with fields | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed dark top navbar with the brand name "IRONPULSE" and navigation links (Home, Program, Coaches, Schedule, About, Blog, Contact). On mobile, a hamburger button SHALL toggle the mobile menu.

### `Hero`
The template SHALL display a full-height hero section with a background image, dark overlay, large "Iron Pulse" headline, subtitle "Crossfit. Working Harder", and a play button that opens a video overlay.

### `Pricing`
The template SHALL display a "Pricing For Courses" section with 3 pricing cards (Weight Lifting, Crossfit Training, Cardio Blast) each showing a price of $240 and an "Enroll Now" CTA button.

### `Programs`
The template SHALL display a split-layout programs section with 5 programs (Crossfit, Aerobic Classes, Fitness, Yoga Classes, Cardio Training) on the left and an image on the right.

### `StatsCounter`
The template SHALL display a dark-background stats section with 4 counters: 5000+ Happy Customers, 4560+ Perfect Bodies, 570+ Working Hours, 900+ Success Stories.

### `Coaches`
The template SHALL display an "Our Coaches" section with 4 coach cards (Travor James, Leonard Smith, James Buffer, Maricar Collins) each with social media icons.

### `Testimonials`
The template SHALL display a dark-background testimonials section with 3 testimonial cards containing quotes and avatars.

### `Blog`
The template SHALL display a "Recent Blog" section with 3 blog cards showing date, author, comments count, title, and excerpt.

### `Gallery`
The template SHALL display a 4-column image gallery with search icon overlay on hover.

### `ContactForm`
The template SHALL display a contact form with First Name, Last Name, Email, Phone, and Message fields plus an "Appointment" submit button. On submit, a thank-you message SHALL appear.

### `Footer`
The template SHALL display a dark 4-column footer (About, Recent Blog, Services, Contact) with a bottom bar linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/ironpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ironpulse/public/CNAME` = `ironpulse.free.componentdock.com`
  and the package `homepage` = `https://ironpulse.free.componentdock.com`.
