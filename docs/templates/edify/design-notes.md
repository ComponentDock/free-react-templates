# Edify — Design Notes

Reference: **Courses** — `https://colorlib.com/wp/template/courses/`  
Live preview: `https://preview.colorlib.com/theme/courses/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/courses-free-template.jpg  
Shipped: https://edify.free.componentdock.com

Edify is a single-page online-learning / education platform template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Mulish**

## Design tokens (`apps/edify/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c86fff` | brand |
| `--color-brand-deep` | `#ae59ff` | brand deep |
| `--color-indigo` | `#4255a4` | indigo |
| `--color-indigo-deep` | `#415094` | indigo deep |
| `--color-navy` | `#1f2b7b` | navy |
| `--color-accent` | `#ff9f67` | accent |
| `--color-star` | `#ff7b2e` | star |
| `--color-lavender` | `#f9f9ff` | lavender |
| `--color-lavender-line` | `#f0e9ff` | lavender line |
| `--color-widget` | `#fbf9ff` | widget |
| `--color-body` | `#10285d` | body |
| `--color-muted` | `#6e7697` | muted |
| `--color-team-muted` | `#57667e` | team muted |
| `--color-grad-a` | `#c054ff` | grad a |
| `--color-grad-b` | `#5274ff` | grad b |
| `--font-sans` | `'Mulish', ui-sans-serif, system-ui, sans-serif` | Josefin Sans headings + Mulish body (Google Fonts <link>). |
| `--font-display` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services | see fidelity note below |
| 4 | `FeaturedCourses` | Featured courses | see fidelity note below |
| 5 | `LearnNewSkills` | Learn new skills | see fidelity note below |
| 6 | `Topics` | Explore top subjects | see fidelity note below |
| 7 | `LearnerOutcomes` | Learner outcomes | see fidelity note below |
| 8 | `Team` | — | no dedicated spec block |
| 9 | `CtaBanner` | — | no dedicated spec block |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a transparent navbar over the hero with a logo, nav links, and Join / Log in actions, becoming a sticky gradient bar on scroll.

### `Hero`
The system SHALL render a full-width hero with a purple-gradient illustration background, headline, subtext, and an orange CTA.

### `Services`
The system SHALL render three white rounded cards with icon, title, and blurb.

### `FeaturedCourses`
The system SHALL render a carousel of course cards with category, title, rating, price, and a button.

### `LearnNewSkills`
The system SHALL render a split section with an icon, heading, three bullet rows, and an image with a video play button.

### `Topics`
The system SHALL render a grid of subject image cards with a hover overlay and a "View More Subjects" button.

### `LearnerOutcomes`
The system SHALL render a flipped split section with an image and three bullet rows.

### `Team`
*anchors only* — Community experts

### `CtaBanner`
*anchors only* — Take the next step toward your personal and professional goals with us. · Join now for Free

### `Footer`
The system SHALL render an indigo multi-column footer with brand blurb, link columns, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/edify/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/edify/public/CNAME` = `edify.free.componentdock.com`
  and the package `homepage` = `https://edify.free.componentdock.com`.
