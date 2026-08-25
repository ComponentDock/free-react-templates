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

## Gherkin Requirements & Scenarios

### Feature: Collegium Landing Page Sections

#### Scenario: 1. Header & Top Bar

- Given the user visits the Collegium home page
- When the page loads
- Then the top announcement bar displays "ENDS TOMORROW: Join Teachable for $4,800 in bonus content" with a live countdown timer and "Learn More" button
- And the main navigation bar displays the logo, navigation links (Home, About, Programs, Blog, Contact), phone contact "0 (78) 675 3674", and social media icons.

#### Scenario: 2. Hero Section

- Given the user is viewing the top of the home page
- When the hero section is displayed
- Then it shows the main headline "EDUCATION & SCHOOL SHOWCASE COURSES, EVENTS AND MORE!"
- And displays descriptive body copy and a prominent "Get Started Now" button over a styled background overlay.

#### Scenario: 3. About Section

- Given the user scrolls to the About section
- When the section renders
- Then it displays a section heading "A comprehensive teaching approach"
- And shows editorial paragraphs, a "Learn More" button, and high-quality photography placeholder images via Picsum.

#### Scenario: 4. Programs Offer Section

- Given the user views the programs section
- When the program cards are rendered
- Then it displays "Programs we Offer" with cards for Faculty of Science, Faculty of Arts, and detailed descriptions and action links.

#### Scenario: 5. Essential Resources Section

- Given the user views the essential resources section
- When the section loads
- Then it displays cards for "First year students", "Tuition & fees", and "International students" with clear explanatory blurbs.

#### Scenario: 6. Blog / Top Stories Section

- Given the user scrolls to the blog section
- When the top stories render
- Then it displays recent articles such as "Linguistics alumna says recognizing Indigenous Languages Day is crucial to our histories" with imagery and metadata.

#### Scenario: 7. Partners / Trusted By Section

- Given the user scrolls near the footer
- When the trusted students section loads
- Then it displays "Trusted by over 6000+ students" with supportive testimonials and a "Join Now" CTA.

#### Scenario: 8. Footer Component Dock attribution

- Given the user reaches the footer
- When the footer renders
- Then it includes newsletter subscription, links, copyright, and a required link to `https://www.componentdock.com/` ("Component Dock").

---

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage on changed files
- [ ] App builds successfully (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] CNAME configured as `collegium.free.componentdock.com`
