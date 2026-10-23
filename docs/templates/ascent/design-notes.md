# Ascent — Design Notes

Reference: **Startup 2** — `https://colorlib.com/wp/template/startup-2/`  
Live preview: `https://preview.colorlib.com/theme/startup2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/startup2-free-template.jpg  
Shipped: https://ascent.free.componentdock.com

Ascent is a single-page startup/agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800**, **Roboto**

## Design tokens (`apps/ascent/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#615cfd` | brand |
| `--color-brand-dark` | `#4a47d6` | brand dark |
| `--color-ink` | `#1f1f1f` | ink |
| `--color-line` | `#e8e8e8` | line |
| `--color-muted` | `#999999` | muted |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header and navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services | see fidelity note below |
| 4 | `About` | About band | see fidelity note below |
| 5 | `Portfolio` | Portfolio / Featured Works | see fidelity note below |
| 6 | `HowWeWork` | How we work | see fidelity note below |
| 7 | `Team` | Team | see fidelity note below |
| 8 | `Testimonials` | Testimonials | see fidelity note below |
| 9 | `Contact` | Contact form | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent-over-hero header bar spanning the full width: brand wordmark on the left ("Ascent"), nav links (Home, Services, Portfolio, Pages, Blog, Contact), and a "Say Hello" CTA button on the right (indigo boxed button).

### `Hero`
The system SHALL render a full-width hero with a dark cover image and an indigo/black gradient overlay. The hero text column SHALL contain the headline "Startup you can build a website online using the Bootstrap builder." (reworded: "Launch a startup website online with a proven builder") and a "Visit Our Works" indigo CTA button.

### `Services`
The system SHALL render a white section with the label "Services" and the heading "With more than 20 years of experience we can deliver the best product design." Below the heading a 3-column grid SHALL render three service cards (Graphic design, Web design, Mobile app), each with a line icon, a title, and a muted paragraph, in a 2px #E8E8E8 bordered card that turns indigo-border on hover.

### `About`
The system SHALL render a dark (#1F1F1F) section with a photo on the left and a right text column: label "About Us" (white), heading "Empowering individuals", two paragraphs (the second a short quote), and an "About Us" indigo button.

### `Portfolio`
The system SHALL render a white section titled "Featured Works" with a muted supporting paragraph and a 5-item work grid (first item spanning two columns on desktop). Each work card SHALL show a photo with a hover overlay containing a category label, a work title, and a "View" button.

### `HowWeWork`
The system SHALL render a light section titled "How we work" with a quote line, a supporting paragraph, and a play button + "Watch Video" label (next to the text column).

### `Team`
The system SHALL render a white section titled "Our Creative Team" with a muted paragraph and a 4-column grid of team cards: photo, name, role. On hover the photo SHALL reveal a social-icon overlay (facebook, twitter, instagram). Members: Brandon Yeald (Founder & CEO), Calvin Anderson (Graphics Designer), Roman Solo (Wordpress Developer), Yeald Kin (Software Engineer).

### `Testimonials`
The system SHALL render a dark cover-image section with a 3-slide testimonial carousel. Each slide SHALL show a quote mark, a testimonial paragraph, and an author block (thumb, name "Robert Thomson", role "Business Owner"). The carousel SHALL advance via prev/next controls and autoplay.

### `Contact`
The system SHALL render a white section titled "Get in Touch" with a muted paragraph and a contact form: name, email, and subject inputs in a 2-column row, a full-width message textarea, and a "Send Message" indigo submit button. The form SHALL validate its fields and show per-field errors for invalid input; on valid submit it SHALL show a success confirmation without a page reload.

### `Footer`
The system SHALL render a dark footer: brand wordmark left, menu links (About, Services, Portfolio, Pages, Blog, Contact) centered, social icons right. The footer SHALL include a "Made with Component Dock" line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/ascent/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ascent/public/CNAME` = `ascent.free.componentdock.com`
  and the package `homepage` = `https://ascent.free.componentdock.com`.
