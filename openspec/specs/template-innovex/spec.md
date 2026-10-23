# Template: Innovex (Business)

Recreation of ColorLib "Eroo" (https://colorlib.com/wp/template/eroo/) — a digital innovation/design agency landing page.

## Purpose

Innovex is a business landing page with a top bar, navbar, hero, services, about band, stat counters, team and footer. It recreates the ColorLib **Eroo** design (https://colorlib.com/wp/template/eroo/, preview: https://preview.colorlib.com/theme/eroo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (extracted from preview)

- **Primary dark:** #1a1a2e (deep navy)
- **Accent orange:** #f5a623 (warm gold/orange)
- **White text on dark overlays**
- **Body font:** Roboto (sans-serif, weights 300–700)
- **Script font:** Great Vibes (Google Fonts, decorative subheadings)
- **Section backgrounds:** white, #f8f9fa light gray, dark image overlays with rgba(0,0,0,0.5)
- **Button shapes:** rounded (btn-primary orange, btn-outline white border)

## Sections (in order)

1. **TopBar** — phone number + email left-aligned, social icons (FB/Twitter/Instagram/Dribbble) right-aligned, dark background
2. **Navbar** — dark bg, brand "Innovex" (script font), links: Home, About, Pricing, Portfolio, Blog, Contact, sticky on scroll
3. **Hero** — full-height slider with background image + dark overlay, heading "Digital Innovation Company that Creates Solution", subheading "Welcome to Innovex", two CTA buttons (Get Started primary, View Portfolio outline)
4. **Services** — "We Shape The Perfect Solutions" heading, 6 service cards (Digital Products, Online Marketing, Graphic Design, App Development, Web Development, UX/UI Design), each with icon + title + arrow link
5. **About** — split layout: left image, right text "Highest Creative Standards" + description + "42 Years Experience" counter with lightbulb icon
6. **Counter** — dark overlay bg, 4 stat blocks: 4800 Projects, 1000 Staff, 350 Services, 7650 Happy Customers
7. **FAQ & Skills** — split: left has progress bars (Creative Design 95%, Product Engineering 85%, Marketing Strategy 95%, Support Tips 90%), right has accordion FAQ (4 items)
8. **Team** — "Professional Creative Team Members", 4 member cards with name/position/social links on hover
9. **Footer** — dark bg, 4 columns: brand+description, Company links, Services links, Contact info + newsletter form, copyright with Component Dock link

## Requirements

### Feature: Innovex template behaviour

Feature: Innovex Template

#### Scenario: TopBar renders contact info and social links

- **GIVEN** the Innovex page is loaded
- **THEN** the top bar shows phone number and email
- **AND** the top bar shows 4 social media icon links

#### Scenario: Navbar displays brand and navigation links

- **GIVEN** the Innovex page is loaded
- **THEN** the navbar shows "Innovex" brand text
- **AND** the navbar has 6 navigation links: Home, About, Pricing, Portfolio, Blog, Contact

#### Scenario: Hero section shows main heading and CTAs

- **GIVEN** the Innovex page is loaded
- **THEN** the hero shows "Digital Innovation Company" heading
- **AND** the hero has "Get Started" and "View Portfolio" buttons

#### Scenario: Services section shows 6 service cards

- **GIVEN** the Innovex page is loaded
- **THEN** the services section shows 6 service items
- **AND** each service has a title and icon

#### Scenario: About section shows experience info

- **GIVEN** the Innovex page is loaded
- **THEN** the about section shows "42" years of experience
- **AND** the about section has a description paragraph

#### Scenario: Counter section shows 4 statistics

- **GIVEN** the Innovex page is loaded
- **THEN** the counter section shows 4 stat blocks
- **AND** each stat has a number and label

#### Scenario: FAQ section shows accordion items

- **GIVEN** the Innovex page is loaded
- **THEN** the FAQ section shows 4 questions
- **AND** clicking a question toggles its answer visibility

#### Scenario: Progress bars display skill percentages

- **GIVEN** the Innovex page is loaded
- **THEN** the skills section shows 4 progress bars
- **AND** each progress bar has a label and percentage

#### Scenario: Team section shows 4 members

- **GIVEN** the Innovex page is loaded
- **THEN** the team section shows 4 team member cards
- **AND** each card has a name and position

#### Scenario: Footer has Component Dock link

- **GIVEN** the Innovex page is loaded
- **THEN** the footer contains a link to componentdock.com
- **AND** the footer has company information columns

#### Scenario: App sets document title

- **GIVEN** the Innovex page is loaded
- **THEN** the document title is "Innovex — Digital Agency Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/innovex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/innovex/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar renders contact info and social links — the top bar shows phone number and email
- [x] Navbar displays brand and navigation links — the navbar shows "Innovex" brand text
- [x] Hero section shows main heading and CTAs — the hero shows "Digital Innovation Company" heading
- [ ] Services section shows 6 service cards — the services section shows 6 service items
- [ ] About section shows experience info — the about section shows "42" years of experience
- [ ] Counter section shows 4 statistics — the counter section shows 4 stat blocks
- [ ] FAQ section shows accordion items — the FAQ section shows 4 questions
- [ ] Progress bars display skill percentages — the skills section shows 4 progress bars
- [ ] Team section shows 4 members — the team section shows 4 team member cards
- [x] App sets document title — the document title is "Innovex — Digital Agency Template"
