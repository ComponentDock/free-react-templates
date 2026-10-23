# Forgehub — Design Notes

Reference: **Create** — `https://colorlib.com/wp/template/create/`  
Live preview: `https://preview.colorlib.com/theme/create/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/create-free-template.jpg  
Shipped: https://forgehub.free.componentdock.com

ForgeHub is a creative agency and portfolio template featuring a dark top bar with contact info, a white sticky navbar, a full-width hero with parallax background, services overview cards, a portfolio grid with hover overlays, a dark features section, testimonials, a services list, about section, team members, blog cards, a contact form,…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand:300,400,500,700,900**

## Design tokens (`apps/forgehub/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#32dbc6` | primary |
| `--color-primary-hover` | `#2bc4b2` | primary hover |
| `--color-secondary` | `#8bc34a` | secondary |
| `--color-body` | `#4d4d4d` | body |
| `--color-dark` | `#000000` | dark |
| `--color-light-bg` | `#f4f5f9` | light bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero Section | see fidelity note below |
| 4 | `ServicesOverview` | ServicesOverview | see fidelity note below |
| 5 | `Portfolio` | Portfolio | see fidelity note below |
| 6 | `Features` | Features | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Services` | ServicesOverview | see fidelity note below |
| 9 | `About` | About | see fidelity note below |
| 10 | `Team` | Team | see fidelity note below |
| 11 | `Blog` | Blog | see fidelity note below |
| 12 | `Contact` | Contact | see fidelity note below |
| 13 | `CTABanner` | CTA Banner | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL render a dark background top bar with phone and email contact info on the left and social media icons on the right.

### `Navbar`
The template SHALL render a white sticky navbar with the "ForgeHub" brand logo (with teal dot accent) and navigation links for Home, Work, Services, About, Blog, and Contact.

### `Hero`
The template SHALL render a full-width hero section with a background image, the heading "We Love To Build", and a "Watch Video" CTA button.

### `ServicesOverview`
The template SHALL render three service overview cards (Innovate, Create, Scale) with numbered badges and checklist items.

### `Portfolio`
The template SHALL render a "Our Works" section with a 3-column grid of 6 portfolio items, each with an image, title, and category overlay on hover.

### `Features`
The template SHALL render a dark background features section with an image and 4 feature items (Strategy, Web Development, Art Direction, Copywriting) with icons and Read More links.

### `Testimonials`
The template SHALL render a testimonials section with quotes, author names, and avatar images.

### `Services`
The template SHALL render three service overview cards (Innovate, Create, Scale) with numbered badges and checklist items.

### `About`
The template SHALL render an "About Us" section with a heading, description text, an image, and 2 sub-feature items (Web & Mobile Specialties, Intuitive Thinkers).

### `Team`
The template SHALL render a "Our Team" section with 3 team member cards, each showing a circular photo, name, role, description, and social media links.

### `Blog`
The template SHALL render a "Blog" section with 3 blog cards, each with an image, title, author, date, category, excerpt, and "Continue Reading" link.

### `Contact`
The template SHALL render a "Contact Us" section with a contact form (first name, last name, email, subject, message fields) and a sidebar with address, phone, and email info.

### `CTABanner`
The template SHALL render a teal background CTA banner with the heading "Let's Get Started".

### `Footer`
The template SHALL render a dark background footer with About Us, Features links, Follow Us social icons, a newsletter signup form, a Component Dock link, and copyright text.

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
- **Provenance ban.** No file under `apps/forgehub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forgehub/public/CNAME` = `forgehub.free.componentdock.com`
  and the package `homepage` = `https://forgehub.free.componentdock.com`.
