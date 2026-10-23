# Spectra — Design Notes

Reference: **Niko** — `https://colorlib.com/wp/template/niko/`  
Live preview: `https://preview.colorlib.com/theme/niko/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/niko-free-template.jpg  
Shipped: https://spectra.free.componentdock.com

Spectra is a personal portfolio/freelance developer template, recreating the ColorLib Niko design. It provides a single-page portfolio with navbar, hero section, about section, skills with progress bars, project gallery, blog posts, contact form, and a branded footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/spectra/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |
| `--color-brand` | `#0075f6` | brand |
| `--color-brand-dark` | `#0156b3` | brand dark |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-light` | `#f8f9fa` | light |
| `--color-text` | `#333333` | text |
| `--color-text-light` | `#666666` | text light |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with scroll-aware styling | see fidelity note below |
| 2 | `Hero` | Hero section with greeting and CTA | see fidelity note below |
| 3 | `About` | About section with services and counter | see fidelity note below |
| 4 | `Skills` | Skills section with progress bars | see fidelity note below |
| 5 | `Projects` | Projects gallery with hover overlay | see fidelity note below |
| 6 | `Blog` | Blog section with posts | see fidelity note below |
| 7 | `Contact` | Contact section with form | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed dark navbar with brand logo "S", navigation links (Home, About, Skills, Projects, Blog, Contact), and a mobile hamburger toggle. The navbar SHALL apply a backdrop blur effect when the user scrolls past 50px.

### `Hero`
The template SHALL display a full-width hero section with a background image, a "Hello" subheading, a main heading with the developer name, a subtitle, and a "Hire me" button linking to the contact section.

### `About`
The template SHALL display an about section with a photo, "Welcome" subheading, "About Me" heading, description paragraph, two service cards (Web Design, Web Application), and a counter showing "200 Finished Projects".

### `Skills`
The template SHALL display a skills section on a light background with four progress bars: Photoshop (75%), jQuery (60%), HTML5 (85%), CSS3 (90%). Each progress bar SHALL have proper ARIA attributes.

### `Projects`
The template SHALL display a projects section with six project cards in a responsive grid. Each card SHALL show an image with a hover overlay containing the project title and an icon.

### `Blog`
The template SHALL display a blog section with three blog post cards. Each card SHALL show an image, date, author, title, and a "Read more" link.

### `Contact`
The template SHALL display a contact section with contact information (address, phone, email) and a form with name, email, subject, message fields, and a submit button. On submit, a success message SHALL replace the form.

### `Footer`
The template SHALL display a blue footer with brand name, description, social icons (Twitter, GitHub, LinkedIn), navigation links, latest projects, and a copyright line. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/spectra/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spectra/public/CNAME` = `spectra.free.componentdock.com`
  and the package `homepage` = `https://spectra.free.componentdock.com`.
