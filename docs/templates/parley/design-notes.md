# Parley — Design Notes

Reference: **Negotiate** — `https://colorlib.com/wp/template/negotiate/`  
Live preview: `https://preview.colorlib.com/theme/negotiate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/negotiate-free-template.jpg  
Shipped: https://parley.free.componentdock.com

Parley is a single-page consulting-agency landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/parley/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00bdaa` | brand |
| `--color-brand-hover` | `#00a897` | brand hover |
| `--color-band-blue` | `#48a7f0` | band blue |
| `--color-accent` | `#f1648f` | accent |
| `--color-accent-hover` | `#e04f7d` | accent hover |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--color-soft` | `#fafafa` | soft |
| `--color-primary-50` | `#e6faf8` | primary 50 |
| `--color-primary-100` | `#ccf5f1` | primary 100 |
| `--color-primary-200` | `#99ebe2` | primary 200 |
| `--color-primary-300` | `#66e0d4` | primary 300 |
| `--color-primary-400` | `#33d6c5` | primary 400 |
| `--color-primary-500` | `#00bdaa` | primary 500 |
| `--color-primary-600` | `#00a897` | primary 600 |
| `--color-primary-700` | `#008a7c` | primary 700 |
| `--color-primary-800` | `#006b60` | primary 800 |
| `--color-primary-900` | `#004d45` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: Poppins throughout (headings 600/900, body 400). |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Top contact bar and teal navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `FreeConsulting` | Free Consulting card and quote form | see fidelity note below |
| 4 | `IntroBand` | Intro band (repeated) | see fidelity note below |
| 5 | `About` | About section with tabs and counters | see fidelity note below |
| 6 | `CaseStudies` | Case Studies gallery | see fidelity note below |
| 7 | `WhyChooseUs` | Why Choose Us icon grid | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 9 | `Blog` | Recent Blog strip | see fidelity note below |
| 10 | `Footer` | Black footer with four widgets | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a white top bar above a solid teal navbar. The top bar SHALL show three contact items (address, phone, email) with icons. The navbar SHALL show the brand "Parley" with a "Consulting Agency" tagline, the seven links Home / About / Team / Case Studies / Services / Blog / Contact, and a search input. The navbar background SHALL be the brand teal `#00bdaa` (never transparent-over-hero).

### `HeroSlider`
The system SHALL render a full-width hero carousel with exactly two slides. Each slide SHALL show a background photo with a dark teal overlay, an uppercase subheading "Parley Consulting", a large white headline, and a teal pill button "Our Services". Carousel indicators SHALL be shown.

### `FreeConsulting`
The system SHALL render a white card overlapping the hero (negative top margin ≥992px, soft heavy shadow) split into two columns. The left column SHALL contain the heading "Free Consulting" and a form with fields First Name, Last Name, Select Guidance (Finance / Business / Auto Loan / Real Estate / Other Services), Phone, Message, and a pink "Request A Quote" submit button. The right column SHALL contain the brand block "Parley — A Consulting Agency" and a 2×2 grid of four service cards (Business Solution, Financial Analysis, Marketing Strategy, Investment Planning), each with an icon and a short blurb.

### `IntroBand`
The system SHALL render a full-width band showing a background photo with a 45° blue-to-teal gradient overlay (`#48a7f0` → `#00bdaa`, ~90% opacity). The band SHALL contain the white heading "You Always Get the Best Guidance", a "Request A Quote" text link, and a teal "Our Services" pill button. The band SHALL appear twice on the page (after the Free Consulting section and after Why Choose Us?).

### `About`
The system SHALL render an About section with a left content column (sub- heading "Welcome to Parley", heading "The Smartest Thing To Do With Your Consulting Business", an intro paragraph, and Mission / Vision / Value tabs) and a right photo column. Below the columns SHALL be a row of three animated counters: 1387 Happy Clients, 310 Success Reports, 35 Experienced — each with an icon, a large teal number, and a label.

### `CaseStudies`
The system SHALL render a Case Studies section with the subheading "Projects Done", the heading "Case Studies", an intro paragraph, and six gallery items arranged in a grid. Each item SHALL show a photo, a category tag, a title, and on hover a teal overlay with a pink "Request Quote" button.

### `WhyChooseUs`
The system SHALL render a Why Choose Us section with the subheading "Services", the heading "Why Choose Us?", an intro paragraph, and six icon items in a three-column grid: Business Analysis, Business Consulting, Business Insurance, Global Investigation, Audit & Evaluation, and Marketing Strategy — each with an icon, title, and blurb.

### `Testimonials`
The system SHALL render a Testimonials section with the subheading "Testimonies", the heading "Our Clients Says", an intro paragraph, and a carousel of five testimonials. Each testimonial SHALL show a circular photo avatar, a quote paragraph, a name, and a position.

### `Blog`
The system SHALL render a Blog section with the subheading "Blog Posts", the heading "Recent Blog", an intro paragraph, and three blog cards. Each card SHALL show a photo, a date badge (15 Oct. 2019), a post title, a blurb, meta information (Admin · 3), and a "Read More" link.

### `Footer`
The system SHALL render a black footer with four widgets: "Have a Questions?" (contact details: address, phone, email + social icons), "Links" (Home / About / Services / Projects / Contact), "Recent Blog" (two mini post entries with meta), and "Subscribe Us!" (email input + "Subscribe" button). A copyright line SHALL appear at the bottom.

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
- **Provenance ban.** No file under `apps/parley/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/parley/public/CNAME` = `parley.free.componentdock.com`
  and the package `homepage` = `https://parley.free.componentdock.com`.
