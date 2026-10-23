# Clinica — Design Notes

Reference: **Medicalcenter** — `https://colorlib.com/wp/template/medicalcenter/`  
Live preview: `https://preview.colorlib.com/theme/medicalcenter/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medicalcenter-free-template.jpg  
Shipped: https://clinica.free.componentdock.com

Clinica is a single-page medical/hospital landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/clinica/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0f61ef` | brand |
| `--color-accent` | `#3957ff` | accent |
| `--color-ink` | `#030431` | ink |
| `--color-heroink` | `#102039` | heroink |
| `--color-teamink` | `#161e46` | teamink |
| `--color-formink` | `#112957` | formink |
| `--color-body` | `#10285d` | body |
| `--color-muted` | `#64676c` | muted |
| `--color-footertext` | `#bdbdbd` | footertext |
| `--color-datelabel` | `#aebccb` | datelabel |
| `--color-rolelabel` | `#a5a5a5` | rolelabel |
| `--color-mist` | `#f7fdff` | mist |
| `--color-capbg` | `#fcfcfc` | capbg |
| `--color-line` | `#e9f0f4` | line |
| `--color-footerground` | `#11141b` | footerground |
| `--color-primary-50` | `#eaf2ff` | primary 50 |
| `--color-primary-100` | `#d2e3fe` | primary 100 |
| `--color-primary-200` | `#a5c7fd` | primary 200 |
| `--color-primary-300` | `#6fa3fb` | primary 300 |
| `--color-primary-400` | `#4c8af8` | primary 400 |
| `--color-primary-500` | `#2f72f5` | primary 500 |
| `--color-primary-600` | `#1462f3` | primary 600 |
| `--color-primary-700` | `#0d4fd0` | primary 700 |
| `--color-primary-800` | `#0f3f9e` | primary 800 |
| `--color-primary-900` | `#0f3170` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Preloader` | Preloader | see fidelity note below |
| 2 | `Header` | Sticky header with nav and phone button | see fidelity note below |
| 3 | `Hero` | Hero with rotating headline | see fidelity note below |
| 4 | `About` | About section with overlapping photos | see fidelity note below |
| 5 | `Departments` | Medical services department tabs | see fidelity note below |
| 6 | `Gallery` | Medical camp gallery mosaic | see fidelity note below |
| 7 | `Testimonials` | Split testimonials band | see fidelity note below |
| 8 | `Team` | Specialist team grid | see fidelity note below |
| 9 | `Appointment` | Appointment form | see fidelity note below |
| 10 | `GalleryStrip` | Full-bleed gallery strip | see fidelity note below |
| 11 | `Blog` | Blog news grid | see fidelity note below |
| 12 | `Footer` | Dark footer with newsletter and social icons | see fidelity note below |
| 13 | `BackToTop` | Back to top and mobile stacking | see fidelity note below |

## Section-by-section fidelity

### `Preloader`
The system SHALL render a full-screen `#f7f7f7` preloader with a rotating 100px ring (1px border, `border-top-color: #0f61ef`, other sides transparent) and a centered logo mark, which SHALL fade out shortly after the page loads.

### `Header`
The system SHALL render a white header with a left logo, a centered nav (Home, About, Doctors, Department, Blog, Contact — Blog with a submenu), and a blue gradient phone button; on scroll the header SHALL become fixed with a white background, shadow and compact link padding; on mobile a slide-down menu SHALL replace the nav.

### `Hero`
The system SHALL render a 900px hero on a light-blue contour-map photo background with a kicker line, a 70px uppercase headline containing a rotating highlighted word, a paragraph, and a blue gradient "Appointment" button with an arrow icon.

### `About`
The system SHALL render a white "Welcome To Our Hospital" section with a left column (kicker, 50px heading, paragraph, three stacked buttons) and a right column with two overlapping photos, the front one framed with a `10px solid #f2f2f2` border.

### `Departments`
The system SHALL render a "Our Medical Services" section on a light-blue pattern background with six icon tab buttons (Dentistry, Cardiology, ENT Specialists, Astrology, Neuroanatomy, Blood Screening) where the active tab shows a light-blue gradient, and a white content panel showing a blue-gradient text pane with a heading, paragraph, "Appointment" button and a photo.

### `Gallery`
The system SHALL render a "Our Medical Camp" gallery with two columns (big 690px images + small 330px images) and a dark overlay + scale effect on hover.

### `Testimonials`
The system SHALL render a 50/50 split band: a light-blue photo side with a centered white quote, a quote icon, and a founder attribution, beside a full-height photo side.

### `Team`
The system SHALL render a white "Our Specialist" section with three doctor cards, each with a photo, name, role and four circular social icons, whose caption SHALL turn blue with white text on hover.

### `Appointment`
The system SHALL render a right-aligned "Appointment Form" on a `#f7fdff` wrapper with a tall photo on the left, underline-style inputs (Name, Phone, doctor select, Email), a Message textarea and a blue gradient "Submit Now" button; the form SHALL validate and show a success state on valid submit.

### `GalleryStrip`
The system SHALL render a full-bleed six-image mosaic (3/3/6/6/3/3 column split) below the appointment section with the same hover overlay effect.

### `Blog`
The system SHALL render a white "Our News From Blog" section with three blog cards (image, category + date, title, Read more link) with a zoom effect on the image and a blue Read-more hover.

### `Footer`
The system SHALL render a dark `#11141b` footer over a background image with a logo, an "About Us" column, a phone + email column with a newsletter email input and Send button, and a bottom strip with a re-branded copyright line and four social icons.

### `BackToTop`
The system SHALL render a fixed 50×50 circular `#0f61ef` back-to-top button that scrolls to the top, and SHALL collapse all multi-column sections (hero, about, dept tabs, gallery, testimonials, team, form, gallery strip, blog, footer) to stacked single-column layouts on small screens matching the source's Bootstrap breakpoints.

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
- **Provenance ban.** No file under `apps/clinica/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clinica/public/CNAME` = `clinica.free.componentdock.com`
  and the package `homepage` = `https://clinica.free.componentdock.com`.
