# Medwell — Design Notes

Reference: **Medcare** — `https://colorlib.com/wp/template/medcare/`  
Live preview: `https://preview.colorlib.com/theme/medcare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medcare-free-template.jpg  
Shipped: https://medwell.free.componentdock.com

Medwell is a single-page medical/healthcare landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Medcare" free template (source: https://colorlib.com/wp/template/medcare/), built under a DIFFERENT name (**Medwell**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Playfair Display**

## Design tokens (`apps/medwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#e6efff` | brand 50 |
| `--color-brand-100` | `#b3cffc` | brand 100 |
| `--color-brand-200` | `#80aff9` | brand 200 |
| `--color-brand-300` | `#4d8ff6` | brand 300 |
| `--color-brand-400` | `#1a6ff3` | brand 400 |
| `--color-brand-500` | `#0051d2` | brand 500 |
| `--color-brand-600` | `#0041a8` | brand 600 |
| `--color-brand-700` | `#00317e` | brand 700 |
| `--color-brand-800` | `#002054` | brand 800 |
| `--color-brand-900` | `#00102a` | brand 900 |
| `--color-surface` | `#f7f7f7` | surface |
| `--color-body` | `#797979` | body |
| `--color-heading` | `#020a21` | heading |
| `--color-border` | `#e8edf1` | border |
| `--font-heading` | `'Playfair Display', serif` | font heading |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Header displays top info bar and main navigation | see fidelity note below |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `HeroBanner` | Hero banner displays main heading and CTAs | see fidelity note below |
| 4 | `FeatureStrip` | Feature strip shows three feature cards | see fidelity note below |
| 5 | `Services` | Services section displays three service items | see fidelity note below |
| 6 | `About` | About section displays company info | see fidelity note below |
| 7 | `Team` | Team section shows doctor cards | see fidelity note below |
| 8 | `Appointment` | Appointment section has FAQ and contact form | see fidelity note below |
| 9 | `Testimonials` | Testimonials section displays quotes | see fidelity note below |
| 10 | `Hotline` | Hotline section shows emergency contact | see fidelity note below |
| 11 | `Blog` | Blog section shows three post cards | see fidelity note below |
| 12 | `Brands` | Brands section displays partner logos | see fidelity note below |
| 13 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
Users SHALL see a top info bar with email and location plus social icons, and a main navigation bar with logo and links (Home, About, Department, Doctors, Blog, Contact). The navigation becomes sticky with white background on scroll.

### `Navbar`
*anchors only* — Primary · Medwell

### `HeroBanner`
Users SHALL see a full-width hero banner with background image, heading "Making Health Care Better Together", descriptive text, and two CTA buttons.

### `FeatureStrip`
Users SHALL see three feature cards (Primary Care, Emergency Cases, Online Appointment) with icons, titles, and subtitles.

### `Services`
Users SHALL see a services heading "Awesome Health Service" and three service cards (Neurology, Dental, Plastic Surgery) with icons, titles, descriptions, and "Learn More" links.

### `About`
Users SHALL see an about section with heading, subtitle, paragraph, and "Learn More" link with decorative background.

### `Team`
Users SHALL see a team heading and three doctor cards with photos, names, specialties, phone numbers, and social icons.

### `Appointment`
Users SHALL see an appointment section with FAQ accordion (5 items) on the left and a contact form (Full Name, Email, Message) on the right.

### `Testimonials`
Users SHALL see testimonial quotes with author names and circular avatars on a decorative background.

### `Hotline`
Users SHALL see an emergency hotline section with dark background, heading, phone number, and support message.

### `Blog`
Users SHALL see a blog heading "Get Every Single Update Here" and three blog cards with thumbnails, tags, titles, and comment/like counts.

### `Brands`
Users SHALL see a brands section with placeholder partner logos.

### `Footer`
Users SHALL see a footer with four link columns (Top Products, Quick Links, Features, Resources), newsletter signup, copyright, and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/medwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medwell/public/CNAME` = `medwell.free.componentdock.com`
  and the package `homepage` = `https://medwell.free.componentdock.com`.
