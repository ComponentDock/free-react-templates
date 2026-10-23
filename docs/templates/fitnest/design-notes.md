# Fitnest — Design Notes

Reference: **Zogin** — `https://colorlib.com/wp/template/zogin/`  
Live preview: `https://preview.colorlib.com/theme/zogin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/zogin-free-template.jpg  
Shipped: https://fitnest.free.componentdock.com

Fitnest is a yoga and fitness studio landing page template, recreating the ColorLib "Zogin" design under a new name. It provides a complete single-page marketing site for a yoga studio with navigation, hero, about, services, stats, courses, gallery, instructors, appointment booking, testimonials, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;700**

## Design tokens (`apps/fitnest/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5768ad` | brand |
| `--color-brand-dark` | `#4758a0` | brand dark |
| `--color-heading` | `#263246` | heading |
| `--color-text` | `#6e7580` | text |
| `--color-dark-bg` | `#263246` | dark bg |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | DM Sans — the template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with contact info and social links | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTA | see fidelity note below |
| 3 | `About` | About section with images and description | see fidelity note below |
| 4 | `Services` | Services section showcasing yoga disciplines | see fidelity note below |
| 5 | `ChooseUs` | Choose Us section with statistics | see fidelity note below |
| 6 | `Classes` | — | no dedicated spec block |
| 7 | `Gallery` | Gallery section with image grid | see fidelity note below |
| 8 | `Instructors` | Instructors section with team members | see fidelity note below |
| 9 | `Appointment` | Appointment booking form | see fidelity note below |
| 10 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a navigation bar with a logo ("Fitnest"), contact information (phone, email, operating hours), a "JOIN US" CTA button, navigation links (Home, About, Classes, Blog, Contact), and social media icons.

### `Hero`
The template SHALL display a hero section with a background image, subtitle "Welcome to Fitnest", heading "What hurts today makes you stronger tomorrow", and a "DISCOVER MORE" call-to-action button.

### `About`
The template SHALL display an about section with a two-column layout: stacked images on the left and a section title "Welcome to Fitnest", a quote, descriptive paragraphs about yoga teacher training, and a "MORE ABOUT US" button on the right.

### `Services`
The template SHALL display 6 service items (Asana, Meditation, Mudra, Bandhas, Philosophy, Pranayama) each with an icon, heading, and short description.

### `ChooseUs`
The template SHALL display a "Why Choose Us" section with statistics: 2146 Students, 15 Years Of Experience, 48 Branches, and 234 Expert Staff, alongside a descriptive text and an image.

### `Classes`
*anchors only* — Our Classes · Upcoming Yoga Courses · Join Now

### `Gallery`
The template SHALL display 8 gallery images in a responsive grid layout.

### `Instructors`
The template SHALL display 4 instructor cards, each with a photo, name, and "Yoga Trainer" role.

### `Appointment`
The template SHALL display an appointment form on a dark background with fields for Name, Email, Phone, Class selection (dropdown), Message (textarea), and a Submit button.

### `Testimonials`
The template SHALL display a testimonials section with at least 3 testimonial items, each containing a quote, author avatar, name, and role.

### `Footer`
The template SHALL display a footer with 4 columns (about/hours, Inspiration links, About Us links, Contact info), social icons, and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/fitnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitnest/public/CNAME` = `fitnest.free.componentdock.com`
  and the package `homepage` = `https://fitnest.free.componentdock.com`.
