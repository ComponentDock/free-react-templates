# Template: Collegium (Education & School)

## Purpose

Recreation of ColorLib UniversityEdu (`https://colorlib.com/wp/template/universityedu/`), preview URL: `https://preview.colorlib.com/theme/universityedu/`.
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript + Lucide React.
New original name: `collegium` (replaces ColorLib source name `universityedu`).

## Design Tokens (extracted from preview)

- **Primary Brand Color**: `#007A5C` (Emerald Green)
- **Background Section Accent**: `#FCF2EB` (Warm Cream) / `#F2FBF9` (Light Mint)
- **Footer Dark Background**: `#32404D` (Slate Gray)
- **Text Color**: `#5C6168` (Muted Gray), `#191d34` (Heading Dark)
- **Typography**: `Chivo`, sans-serif
- **Buttons**: Sharp or subtle rounded corners, primary solid emerald green (`#007A5C`), hover transitions.

---

## Requirements

### Feature: Collegium Landing Page Sections

#### Scenario: 1. Header & Top Bar

- **GIVEN** the user visits the Collegium home page
- **WHEN** the page loads
- **THEN** the top announcement bar displays "ENDS TOMORROW: Join Teachable for $4,800 in bonus content" with a live countdown timer and "Learn More" button
- **AND** the main navigation bar displays the logo, navigation links (Home, About, Programs, Blog, Contact), phone contact "0 (78) 675 3674", and social media icons

#### Scenario: 2. Hero Section

- **GIVEN** the user is viewing the top of the home page
- **WHEN** the hero section is displayed
- **THEN** it shows the main headline "EDUCATION & SCHOOL SHOWCASE COURSES, EVENTS AND MORE!"
- **AND** displays descriptive body copy and a prominent "Get Started Now" button over a styled background overlay

#### Scenario: 3. About Section

- **GIVEN** the user scrolls to the About section
- **WHEN** the section renders
- **THEN** it displays a section heading "A comprehensive teaching approach"
- **AND** shows editorial paragraphs, a "Learn More" button, and high-quality photography placeholder images via Picsum

#### Scenario: 4. Programs Offer Section

- **GIVEN** the user views the programs section
- **WHEN** the program cards are rendered
- **THEN** it displays "Programs we Offer" with cards for Faculty of Science, Faculty of Arts, and detailed descriptions and action links

#### Scenario: 5. Essential Resources Section

- **GIVEN** the user views the essential resources section
- **WHEN** the section loads
- **THEN** it displays cards for "First year students", "Tuition & fees", and "International students" with clear explanatory blurbs

#### Scenario: 6. Blog / Top Stories Section

- **GIVEN** the user scrolls to the blog section
- **WHEN** the top stories render
- **THEN** it displays recent articles such as "Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories" with imagery and metadata

#### Scenario: 7. Partners / Trusted By Section

- **GIVEN** the user scrolls near the footer
- **WHEN** the trusted students section loads
- **THEN** it displays "Trusted by over 6000+ students" with supportive testimonials and a "Join Now" CTA

#### Scenario: 8. Footer Component Dock attribution

- **GIVEN** the user reaches the footer
- **WHEN** the footer renders
- **THEN** it includes newsletter subscription, links, copyright, and a required link to `https://www.componentdock.com/` ("Component Dock")

---

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage on changed files
- [ ] App builds successfully (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] CNAME configured as `collegium.free.componentdock.com`
