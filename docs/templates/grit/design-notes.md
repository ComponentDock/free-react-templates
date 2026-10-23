# Grit — Design Notes

Reference: **Stamina** — `https://colorlib.com/wp/template/stamina/`  
Live preview: `https://preview.colorlib.com/theme/stamina/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/stamina-free-template.jpg  
Shipped: https://grit.free.componentdock.com

Grit is a single-page gym/fitness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700;900**

## Design tokens (`apps/grit/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f1` | primary 50 |
| `--color-primary-100` | `#fde3e0` | primary 100 |
| `--color-primary-200` | `#fbc5c0` | primary 200 |
| `--color-primary-300` | `#f79a91` | primary 300 |
| `--color-primary-400` | `#f2665a` | primary 400 |
| `--color-primary-500` | `#f23a2e` | primary 500 |
| `--color-primary-600` | `#f23a2e` | primary 600 |
| `--color-primary-700` | `#d62c21` | primary 700 |
| `--color-primary-800` | `#b0251c` | primary 800 |
| `--color-primary-900` | `#8f211a` | primary 900 |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-2` | `#d62c21` | brand 2 |
| `--color-accent` | `#f89d13` | accent |
| `--color-coral` | `#ff7c67` | coral |
| `--color-ink` | `#25262a` | ink |
| `--color-muted` | `#989898` | muted |
| `--color-light` | `#f8f9fa` | light |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header and navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `HoursBar` | Hours bar (overlapping hero) | see fidelity note below |
| 4 | `Features` | Features ("Get A Perfect Body") | see fidelity note below |
| 5 | `CtaBand` | CTA band ("Get The Result You Want") | see fidelity note below |
| 6 | `Classes` | Classes | see fidelity note below |
| 7 | `Schedule` | Schedule (day tabs) | see fidelity note below |
| 8 | `Trainers` | Trainers | see fidelity note below |
| 9 | `Services` | Services | see fidelity note below |
| 10 | `Contact` | Contact | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky full-width white header: the brand wordmark "Grit" on the left (dark ink, bold, uppercase) and nav links Home, Classes, Schedule, Trainer, Services, Contact on the right (dark ink, uppercase, 12px-ish). The active link (Home) SHALL show a red underline.

### `Hero`
The system SHALL render a full-width hero with a dark background image (placeholder — the source uses a muted YouTube background video with a `rgba(0,0,0,0.4)` overlay; do NOT embed the video, use a dark picsum image + overlay; the chosen `picsum.photos/id/593` tiger photo reads as a dark, powerful "strength" hero since picsum has no gym photography) and centered white content: `h1` "We Believe Little Things Matter" (3rem, weight 900), a `p.lead` supporting sentence (1.4rem, max-width 700px), and a "Get Started" outline button (transparent, white 2px border, white text; hover inverts to white bg / black text).

### `HoursBar`
The system SHALL render a red (`#f23a2e`) box skewed −12° that overlaps the bottom of the hero, containing "Hours" (bold) with "Opening: 7:30am — Closing: 9:00pm" on the left and a "Contact us" button with a right-arrow icon on the right, the button in accent orange (`#f89d13`).

### `Features`
The system SHALL render a section with the eyebrow "Stay Healthy", heading "Get A Perfect Body", and an intro paragraph, followed by five feature cards (Be Fit, Join Club, Gym Fitness, Eat Vegie, Fruit Juices, Body Warmup). Each card SHALL have a circular red icon, a bold 20px heading, and a muted paragraph. On hover the card background SHALL turn brand red with the icon circle inverting to white and the text turning white.

### `CtaBand`
The system SHALL render the FIRST full-width parallax-style band (dark cover image + overlay) with centered white content: heading "Get The Result You Want" and a lead paragraph whose text contains an inline "Get Started" link (the source renders it as a text link inside the lead, not a button).

### `Classes`
The system SHALL render a section with the eyebrow "Fitness Class", heading "Classes", and an intro paragraph, followed by a carousel/row of five class cards. Each card SHALL have a square thumbnail image, a linked heading "Fitness Class Name #1"–"#5", "By Ava Martinez" (source "By Justin Daniel" — instructor name paraphrased to match the trainer portraits), and "30 minutes".

### `Schedule`
The system SHALL render a section with the eyebrow "Fitness Sched", heading "Schedule", and an intro paragraph, followed by single-letter day tabs S M T W T F S (active tab marked with a 2px red top border). Each day pane SHALL list up to five class entries in a two-column grid, each entry with a thumbnail, the time span (e.g. "Sunday 7:30am - 9:00am"), a class name heading, "By Ava Martinez", and "30 minutes".

### `Trainers`
The system SHALL render a section with the eyebrow "Trainer", heading "Our Trainers", and an intro paragraph, followed by a 4-column grid of trainer cards. Each card SHALL have a photo, name ("Ava Martinez", "Elena Reyes", "Mia Chen", "Sofia Alvarez" — the source uses "Justin Daniel" + three "Matthew Davidson" cards, but picsum has no male portraits, so names are paraphrased to match the available verified person photos), position "Trainer", and a paragraph. On hover the card background SHALL turn brand red with the name in coral (`#ff7c67`) and the text white.

### `Services`
The system SHALL render a section with the eyebrow "Fitness Services", heading "Services", and an intro paragraph, followed by a 3-column grid of six service cards reusing the feature-card style (Be Fit, Join Club, Gym Fitness, Eat Vegie, Fruit Juices, Body Warmup), each with a circular red icon, bold heading, and muted paragraph.

### `Contact`
The system SHALL render a light-background section with the eyebrow "Get In Touch", heading "Contact Us", and an intro paragraph, followed by a centered contact form: First name + Last name (two-column row), Subject, Email, a message textarea, and a full-width "Send Message" submit button in brand red. Inputs SHALL be 50px tall with a 2px border and no rounded corners, focusing to a red border.

### `Footer`
The system SHALL render a white footer with three columns: "About Grit" (paragraph), "Links" (Home, Classes, Schedule, Trainer), and "Subscribe" (paragraph + email input + "Subscribe" button). The copyright bar SHALL link https://www.componentdock.com/ ("Component Dock") replacing the source's Colorlib credit.

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
- **Provenance ban.** No file under `apps/grit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grit/public/CNAME` = `grit.free.componentdock.com`
  and the package `homepage` = `https://grit.free.componentdock.com`.
