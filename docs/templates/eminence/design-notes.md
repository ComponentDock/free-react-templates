# Eminence — Design Notes

Reference: **Meetme** — `https://colorlib.com/wp/template/meetme/`  
Live preview: `https://preview.colorlib.com/theme/meetme/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meetme-free-template.jpg  
Shipped: https://eminence.free.componentdock.com

Eminence is a single-page personal portfolio/resume website in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@400;500;700;800**, **Roboto**

## Design tokens (`apps/eminence/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-heebo` | `'Heebo', sans-serif` | font heebo |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |
| `--color-brand` | `#298cdf` | brand |
| `--color-brand-dark` | `#1e6fa8` | brand dark |
| `--color-accent-purple` | `#766dff` | accent purple |
| `--color-accent-teal` | `#2ebccd` | accent teal |
| `--color-navy` | `#04091e` | navy |
| `--color-navy-light` | `#1e233b` | navy light |
| `--color-text-primary` | `#222222` | text primary |
| `--color-text-secondary` | `#777777` | text secondary |
| `--color-text-light` | `#999999` | text light |
| `--color-bg-light` | `#f9f9ff` | bg light |
| `--color-line` | `#e8e8e8` | line |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with logo and links | see fidelity note below |
| 2 | `Hero` | Hero section with profile info | see fidelity note below |
| 3 | `About` | About section with stats and skills | see fidelity note below |
| 4 | `ExperienceTabs` | Experience and education tabs | see fidelity note below |
| 5 | `Services` | Services section with three offerings | see fidelity note below |
| 6 | `Gallery` | Project gallery with filters | see fidelity note below |
| 7 | `Testimonials` | Testimonials section with star ratings | see fidelity note below |
| 8 | `Footer` | Footer with newsletter and social links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with the "Eminence" logo text and links to Home, About, Services, Gallery, Testimonials, and Contact. On mobile, a hamburger menu toggles a dropdown of nav links.

### `Hero`
The template SHALL display a hero section with a profile photo, name ("Donald McKinney"), title ("Junior UI/UX Developer"), a bio paragraph, contact information (date, phone, email, address), and social media links (Facebook, Twitter, LinkedIn).

### `About`
The template SHALL display an "About Myself" section with a bio paragraph, three stat boxes (Total Donation $2.5M, Total Projects 1465, Total Volunteers 3965), and five skill progress bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%).

### `ExperienceTabs`
The template SHALL display a tabbed section with "My Experiences" and "My Education" tabs. The experiences tab is active by default. Each tab shows a timeline of entries with period, company/school, role/degree, and location.

### `Services`
The template SHALL display three service cards: Architecture, Interior Design, and Concept Design, each with an icon, title, and description.

### `Gallery`
The template SHALL display a filterable project gallery with filter tabs (All, Vector, Raster, UI/UX, Printing) and six project cards with images, titles, and "Client Project" labels. A "Load More Items" button is shown below.

### `Testimonials`
The template SHALL display three testimonial cards with quote text, author name, and star ratings (4.5 or 5 stars).

### `Footer`
The template SHALL display a footer with three columns: About Me with Component Dock copyright link, Newsletter signup form with email input and submit button, and Follow Me social links (Facebook, Twitter, Dribbble, Behance).

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
- **Provenance ban.** No file under `apps/eminence/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/eminence/public/CNAME` = `eminence.free.componentdock.com`
  and the package `homepage` = `https://eminence.free.componentdock.com`.
