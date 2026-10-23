# Spec: Velox — Personal/Freelancer Portfolio Template

Recreation of ColorLib "Ronin" (https://colorlib.com/wp/template/ronin/).
Preview: https://preview.colorlib.com/theme/ronin/

## Purpose

Velox is a personal/freelancer portfolio template with a navbar, hero, welcome about, features services, projects portfolio, testimonials and blog. It recreates the ColorLib **Ronin** design (https://colorlib.com/wp/template/ronin/, preview: https://preview.colorlib.com/theme/ronin/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (extracted from preview CSS)

- **Primary brand color**: `#8490ff` (periwinkle blue)
- **Gradient**: `#8490ff` → `#62bdfc` (blue-to-cyan, used on buttons, progress bars)
- **Heading font**: Heebo (Google Fonts, weight 700)
- **Body font**: Roboto (Google Fonts, weight 400)
- **Heading color**: `#222222`
- **Body text color**: `#777777`
- **Background**: white / `#f9f9ff` (light sections)
- **Section padding**: 120px top/bottom
- **Button radius**: no border-radius (sharp edges, per original)
- **Navbar**: transparent over hero, white on scroll

## Sections (in order)

1. **Navbar** — Logo text "Velox", nav links: Home, About, Services, Portfolio, Blog, Contact. Transparent background overlaying hero, scrolls to white with shadow.
2. **Hero** — Split layout: left = portrait image (from picsum), right = "This is me" subtitle, name "Travor James", description paragraph, "Discover Now" CTA button (gradient `#8490ff`→`#62bdfc`).
3. **Welcome/About** — Two columns: left = "About Myself" heading + paragraph + 3 stat cards ($2.5M Total Donation, 1465 Total Projects, 3965 Total Volunteers with icons); right = "Tools Expertness" with 5 skill bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%) using gradient fill.
4. **Features/Services** — Centered title "Offerings to my clients" + subtitle, 3×2 grid of service cards with icon + title + description (Architecture, Interior Design, Concept Design — repeated).
5. **Projects/Portfolio** — Centered title "Our Recent Completed Projects", filter tabs (All, Branding, Creative Work, Web Design), 3×2 grid of project cards with image + overlay text ("3D Helmet Design", "Client Project").
6. **Testimonials** — Centered title "Testimonials", carousel of testimonial cards with quote text, author name, 4.5 star rating.
7. **Blog** — Centered title "Latest Posts from Blog", 3-column grid of blog cards with image, date/author, title, excerpt.
8. **Footer** — 3 columns: About Me (text + copyright), Newsletter (email input + submit), Follow Me (social icons: Facebook, Twitter, Dribbble, Behance). Bottom: "Made with Component Dock" linking https://www.componentdock.com/.

## Requirements

### G1: Renders all sections

#### Scenario: G1: Renders all sections

- **GIVEN** the page loads, when I scroll from top to bottom, then I see Navbar, Hero, About, Features, Projects, Testimonials, Blog, and Footer — in that order

### G2: Navbar links

#### Scenario: G2: Navbar links

- **GIVEN** the page loads, when I inspect the navbar, then I see links for Home, About, Services, Portfolio, Blog, Contact

### G3: Hero content

#### Scenario: G3: Hero content

- **GIVEN** the page loads, when I read the hero section, then I see the subtitle "This is me", heading "Travor James", a description paragraph, and a "Discover Now" button

### G4: About stats

#### Scenario: G4: About stats

- **GIVEN** the page loads, when I inspect the About section, then I see three stat items: "$2.5M Total Donation", "1465 Total Projects", "3965 Total Volunteers"

### G5: Skill bars

#### Scenario: G5: Skill bars

- **GIVEN** the page loads, when I inspect the About section, then I see 5 skill bars with labels and percentage values

### G6: Feature cards

#### Scenario: G6: Feature cards

- **GIVEN** the page loads, when I inspect the Features section, then I see 6 service cards (Architecture, Interior Design, Concept Design — each appearing twice)

### G7: Project filter tabs

#### Scenario: G7: Project filter tabs

- **GIVEN** the page loads, when I inspect the Projects section, then I see filter tabs: All, Branding, Creative Work, Web Design

### G8: Project grid

#### Scenario: G8: Project grid

- **GIVEN** the page loads, when I inspect the Projects section, then I see 6 project cards with images and titles

### G9: Testimonials

#### Scenario: G9: Testimonials

- **GIVEN** the page loads, when I inspect the Testimonials section, then I see testimonial cards with text, author names, and star ratings

### G10: Blog posts

#### Scenario: G10: Blog posts

- **GIVEN** the page loads, when I inspect the Blog section, then I see 3 blog cards with images, dates, titles, and excerpts

### G11: Footer links

#### Scenario: G11: Footer links

- **GIVEN** the page loads, when I inspect the Footer, then I see a "Made with Component Dock" link pointing to https://www.componentdock.com/

### G12: Responsive layout

#### Scenario: G12: Responsive layout

- **GIVEN** the viewport is mobile (375px), when I view each section, then content stacks vertically and remains readable

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/velox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/velox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
