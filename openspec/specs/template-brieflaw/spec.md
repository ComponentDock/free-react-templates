# Template: Brieflaw (Professional Services / Legal Portfolio)

## Purpose

- Recreation of ColorLib **Schmidt** (`https://colorlib.com/wp/template/schmidt/`, preview: `https://preview.colorlib.com/theme/schmidt/`).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.
- New original name: `brieflaw` (replaces ColorLib "Schmidt").

## Design Tokens & Aesthetic

- **Colors**:
  - Primary / Accent: Gold / Ochre (`#d5c455` / Tailwind yellow-600/amber-500)
  - Neutral Dark: Deep charcoal / black (`#222222`, `#212529`)
  - Neutral Light: Pure white (`#ffffff`) and off-white (`#f8f8f8`)
- **Typography**:
  - Font Family: `Poppins`, sans-serif
  - Headings: Bold, clean sans-serif with prominent display sizing
- **UI Elements**:
  - Buttons: Rounded / pill buttons (`rounded`, `rounded-full`), primary solid gold with hover effects, white secondary buttons with solid text.
  - Layout: Clean modern portfolio / professional service layout with split hero sections, carousel/image display, services breakdown, experience timeline, work showcase, blog list, and contact section.

## Requirements

### Feature: Navbar & Navigation

#### Scenario: Navbar & Navigation

- Scenario: User views the top navigation bar
- **GIVEN** the user loads Brieflaw
- **THEN** they see the brand logo "Brieflaw."
- **AND** navigation links for Home, About, Services, Experiences, Works, Blog, and Contact

### Feature: Hero Section

#### Scenario: Hero Section

- Scenario: User views the hero introduction
- **GIVEN** the user is on the home page
- **THEN** they see the professional subheading "UI/UX Designer & Developer" (adapted for legal/professional services: "Legal Counsel & Advisory")
- **AND** heading "I'm John Schmidt" (adapted: "I'm Arthur Brieflaw")
- **AND** CTA buttons "More About Me" and "Hire Me"
- **AND** professional portrait / showcase carousel imagery

### Feature: Services Section

#### Scenario: Services Section

- Scenario: User views professional services offered
- **GIVEN** the user scrolls to Services
- **THEN** they see a grid of service cards with icons, titles, and descriptions

### Feature: Experience & Work Showcase

#### Scenario: Experience & Work Showcase

- Scenario: User views professional history and projects
- **GIVEN** the user views Experiences and Works sections
- **THEN** they see chronological career milestones and portfolio case studies with preview links

### Feature: Footer

#### Scenario: Footer

- Scenario: User reaches the page footer
- **GIVEN** the user scrolls to the bottom
- **THEN** they see copyright info and the mandatory "Made with Component Dock" link (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] Navbar & Navigation — they see the brand logo "Brieflaw."
- [ ] Hero Section — they see the professional subheading "UI/UX Designer & Developer" (adapted for legal/professional services: "Legal Counsel & Advisory")
- [ ] Services Section — they see a grid of service cards with icons, titles, and descriptions
- [ ] Experience & Work Showcase — they see chronological career milestones and portfolio case studies with preview links
