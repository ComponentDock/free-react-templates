# Credentia — Design Notes

Reference: **Civic** — `https://colorlib.com/wp/template/civic/`  
Live preview: `https://preview.colorlib.com/theme/civic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/civic-free-template-1.jpg  
Shipped: https://credentia.free.componentdock.com

Credentia is a single-page CV/resume template — a personal portfolio template for showcasing work experience, education, skills, and contact information.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:ital,wght@0,400;0,600;0,700;1,400**

## Design tokens (`apps/credentia/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f2f7f8` | Civic design tokens |
| `--color-primary-100` | `#e4eef1` | primary 100 |
| `--color-primary-200` | `#c9dde3` | primary 200 |
| `--color-primary-300` | `#a3c4d0` | primary 300 |
| `--color-primary-400` | `#72a1b5` | primary 400 |
| `--color-primary-500` | `#52859b` | primary 500 |
| `--color-primary-600` | `#476d84` | primary 600 |
| `--color-primary-700` | `#3e5a6d` | primary 700 |
| `--color-primary-800` | `#394c5b` | primary 800 |
| `--color-primary-900` | `#33414d` | primary 900 |
| `--color-primary-950` | `#212a33` | primary 950 |
| `--color-accent` | `#ff0f3c` | accent |
| `--color-accent-dark` | `#cc0c30` | accent dark |
| `--color-dark` | `#40424a` | dark |
| `--color-muted` | `#808181` | muted |
| `--color-light` | `#f2f7f8` | light |
| `--color-border` | `#cacaca` | border |
| `--font-sans` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `SocialLinks` | Social links section | see fidelity note below |
| 4 | `WorkExperience` | Work experience section | see fidelity note below |
| 5 | `Education` | Education section | see fidelity note below |
| 6 | `References` | References section | see fidelity note below |
| 7 | `Portfolio` | Portfolio section | see fidelity note below |
| 8 | `ExtraSkills` | Extra skills section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a sticky header with the site name "Credentia", a tagline "Enhance your online presence", and two CTA buttons ("Download CV" and "Discover me").

### `Hero`
The system SHALL render a two-column hero with the person's name, bio paragraph, general info list (Date of Birth, Address, Email, Phone), and a portrait image.

### `SocialLinks`
The system SHALL render a social links section with 5 social media icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter) and a "My Social Profiles" heading.

### `WorkExperience`
The system SHALL render a work experience section with the heading "Work Experience" and a timeline list of work entries (year range, company name, role, description).

### `Education`
The system SHALL render an education section with the heading "Education" and a timeline list of education entries (year, diploma name, school, description) on an alternate background.

### `References`
The system SHALL render a references section with the heading "References" and a grid of testimonial cards (quote, name, role).

### `Portfolio`
The system SHALL render a portfolio section with the heading "Portfolio", a "See All Portfolio" button, and a 4-column grid of portfolio items (image, title, category).

### `ExtraSkills`
The system SHALL render an extra skills section with the heading "Extra Skills" and circular progress indicators (percentage + label) alongside stat boxes (years of experience, happy clients, awards won).

### `Contact`
The system SHALL render a contact section with the heading "Get In Touch", a contact form (name, email, subject, message fields + submit button), and contact information (address, phone, email).

### `Footer`
The system SHALL render a footer with copyright text and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/credentia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/credentia/public/CNAME` = `credentia.free.componentdock.com`
  and the package `homepage` = `https://credentia.free.componentdock.com`.
