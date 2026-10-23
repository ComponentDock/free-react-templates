# Template: Bokeh (Photography Portfolio)

## Purpose

Bokeh is a single-page photography portfolio template with a full-bleed
hero, a filterable-style portfolio gallery, service cards, three pricing
packages, an about block and client testimonials.

It is an original React recreation of the ColorLib "Pentax" free template
(source: https://colorlib.com/wp/template/pentax/), built under a
DIFFERENT name (**Bokeh**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a dark-and-red photography studio page: a crimson
`#f81c1c` accent over near-black `#1a1d24` headings, Playfair Display
serif headings paired with Roboto body copy, image-led cards and quiet
`#f7f7f7` section bands. The recreation keeps that editorial rhythm —
large imagery, generous whitespace, small uppercase labels — and makes
the portfolio, pricing and testimonial content interactive rather than
static.

## Design Tokens

| Token         | Value                  | Notes                             |
| ------------- | ---------------------- | --------------------------------- |
| Heading font  | `'Playfair Display', serif` | h1–h3 and card titles        |
| Body font     | `'Roboto', sans-serif` | Paragraphs, labels, nav           |
| Brand         | `#f81c1c`              | Accent, CTA, active state         |
| Brand dark    | `#d41515`              | Hover                             |
| Brand light   | `#ff4444`              | Secondary accent                  |
| Heading ink   | `#1a1d24`              | Headings on light sections        |
| Body text     | `#797979`              | Paragraph copy                    |
| Surface       | `#ffffff`              | Cards and light sections          |
| Muted band    | `#f7f7f7`              | Alternating section background    |
| Border        | `#eeeeee`              | Hairlines                         |
| Surface (measured) | `#f8b600` | paints it ×15 — `background` on `.genric-btn.primary`; style.css (76,165 B, sha256 d71bf3c38b9c) · <https://preview.colorlib.com/theme/pentax/> |

## Requirements

### Requirement 1: Navbar And Hero

The page SHALL open with a navbar (brand mark, section links, mobile
toggle with `aria-expanded`) above a full-bleed photographic hero.

#### Scenario: Visitor opens the page

- **WHEN** the page loads
- **THEN** the navbar and hero image are visible with a single h1
- **AND** the mobile toggle reports `aria-expanded="false"` while closed

### Requirement 2: Filterable Portfolio Gallery

The portfolio section SHALL present the studio's work as an image grid
with five filter buttons — `all`, `wedding`, `motion`, `portrait`,
`fashion` — where the active filter is visually distinguished and the
grid shows only items whose category matches it (`all` shows everything).

#### Scenario: Visitor filters the portfolio

- **WHEN** the visitor activates the `fashion` filter
- **THEN** only fashion-categorised items remain in the grid and the
  filter button reports itself as active

#### Scenario: Visitor returns to all work

- **WHEN** the visitor activates `all`
- **THEN** every portfolio item is rendered again

### Requirement 3: Services And Pricing

The page SHALL render service cards (including `Event Coverage` and
`Fashion Shot`) and three pricing packages priced at 76, 86 and 96.

#### Scenario: Visitor compares packages

- **WHEN** the visitor reaches the pricing section
- **THEN** three cards are visible showing `$76`, `$86` and `$96`
- **AND** each card lists its included features and a CTA

### Requirement 4: About And Testimonials

The page SHALL include an about block and a testimonial section whose
cards carry a quote, a client name (e.g. `Emma Davis`) and a role (e.g.
`Fashion Designer`, `Bride`).

#### Scenario: Visitor reads testimonials

- **WHEN** the visitor scrolls to the testimonials section
- **THEN** each card shows the quote, client name and role
- **AND** decorative icons are `aria-hidden`

### Requirement 5: Component Dock Footer

The footer SHALL link `https://www.componentdock.com/` and expose the
studio's social links with accessible names.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a link named `Component Dock` points at
  `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bokeh/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bokeh/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/bokeh`)
- [ ] Lint passes (`npm run lint`)
- [x] Vitest coverage is 100% for `apps/bokeh`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/bokeh`)
- [ ] Footer links to Component Dock
- [x] `public/CNAME` is `bokeh.free.componentdock.com` and `homepage` matches
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar And Hero — the navbar and hero image are visible with a single h1
- [ ] Filterable Portfolio Gallery — only fashion-categorised items remain in the grid and the
- [ ] Services And Pricing — three cards are visible showing `$76`, `$86` and `$96
- [ ] About And Testimonials — each card shows the quote, client name and role
