# Template: EduFlow (Online Education & Courses Platform)

## Purpose

EduFlow is an online education and courses platform template. It is an original
React recreation of the ColorLib free **Onedu** template
(preview: `https://preview.colorlib.com/theme/onedu/`), built under the new name
`eduflow` with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see `docs/replication.md`):

- **Brand color**: Deep purple `#5a4e8c` (primary buttons, header accents, footer background)
- **Accent / Testimonial background**: Warm beige `#f3ead8` (`rgb(243, 234, 216)`)
- **Typeface**: Jost (Google Fonts via `<link>`)
- **Button style**: Rounded `4px` rectangle with solid brand purple background (`#5a4e8c`) and white text (`rgb(255, 255, 255)`)
- **Section structure**: Navigation, Hero with search bar, Popular Courses grid, About / Platform Overview, Students Viewing / Course Carousel, Testimonials, Top Categories grid, Become an Instructor banner, Footer.
- **Assets**: Picsum photos seeded placeholders (`https://picsum.photos/seed/eduflow-<n>/<w>/<h>`) + `lucide-react` icons.

EduFlow lives in `apps/eduflow` and uses shared components from `packages/ui`
(`Button`, `cn`).

## Requirements

### Requirement: Navigation bar

The system SHALL render a responsive navbar with the brand name "EduFlow", main navigation links (Home, Browse Courses, About, Blog, Contact), search input, sign-in button, and mobile menu toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered on desktop
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand title "EduFlow" linking to `#home`
- **AND** it SHALL show links to Home, Browse Courses, About, Blog, and Contact
- **AND** it SHALL show a search input and a "Sign In" button with brand purple styling

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger menu toggle
- **THEN** the mobile navigation menu SHALL open with `aria-expanded="true"`
- **AND** clicking a link or clicking toggle again SHALL close the menu

### Requirement: Hero search section

The system SHALL render a hero banner with headline "Learn new skills online with top educators", subtitle, and an interactive course search bar.

#### Scenario: Hero search interaction

- **GIVEN** the hero section is displayed
- **WHEN** the user types a search term into the "What do you want to learn?" input and clicks search
- **THEN** the search action SHALL trigger smoothly or filter courses accordingly

### Requirement: Popular courses grid

The system SHALL render a popular courses section showcasing top video courses with thumbnails, titles, ratings, lessons count, and pricing/enrollment buttons.

#### Scenario: Course cards display

- **GIVEN** the popular courses section is visible
- **WHEN** course cards are rendered
- **THEN** each card SHALL display a picsum-seeded thumbnail image, course title, category tag, rating badge, and "Enroll Now" or details button

### Requirement: Platform overview section

The system SHALL render an informational platform overview section highlighting why learners choose EduFlow with statistics and aggregate course selection stats.

#### Scenario: Overview stats

- **GIVEN** the platform overview section is rendered
- **WHEN** the user scrolls to the section
- **THEN** it SHALL display aggregate statistics (130,000+ courses, expert instructors, millions of students) and a "Browse Courses" CTA button

### Requirement: Students viewing section

The system SHALL render a "Students are viewing" section with course recommendation cards.

#### Scenario: Viewing cards

- **GIVEN** the students viewing section is rendered
- **WHEN** the user views the course grid
- **THEN** it SHALL display highly rated courses with instructor names and pricing details

### Requirement: Testimonials section

The system SHALL render a customer testimonial section on a warm beige background (`#f3ead8`) with student feedback quotes and author avatars.

#### Scenario: Testimonial review display

- **GIVEN** the testimonial section is visible
- **WHEN** user reviews are displayed
- **THEN** they SHALL show student feedback quotes, student names, roles, and avatar images on the distinctive warm background

### Requirement: Top categories grid

The system SHALL render a top course categories grid covering Programming, VFX, App Development, Technology, Graphics Design, Music, Product Design, and Video Editing.

#### Scenario: Category cards

- **GIVEN** the categories section is rendered
- **WHEN** the user inspects the grid
- **THEN** it SHALL display 8 distinct category cards with icons and course count badges

### Requirement: Become an instructor section

The system SHALL render a call-to-action banner inviting experts to become instructors, with buttons for registration and video preview.

#### Scenario: Instructor CTA

- **GIVEN** the become an instructor section is visible
- **WHEN** the user clicks "Become an Instructor" or "Watch Video"
- **THEN** interactive triggers SHALL respond correctly

### Requirement: Footer

The system SHALL render a deep purple footer containing subject links, community links, company links, a newsletter subscription form, copyright, and mandatory Component Dock attribution.

#### Scenario: Footer content and attribution

- **GIVEN** the footer is rendered at the bottom of the page
- **WHEN** the user inspects footer links
- **THEN** it SHALL contain subject/community navigation links, a working email newsletter form, and a prominent link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] Spec validation: `npm run spec:validate` passes
- [ ] Workspace setup: `apps/eduflow` configured in root `package.json` and registered in `package-lock.json`
- [ ] Vite config: `injectUiSource()` present in `vite.config.ts`
- [ ] Component implementation: all 8 sections implemented with Tailwind v4 and Lucide icons
- [ ] TDD coverage: 100% line/function/branch/statement coverage in Vitest (`npm run test:coverage`)
- [ ] Build & Lint: `npm run build` and `npm run lint` succeed cleanly
- [ ] Attribution: Footer links `https://www.componentdock.com/` ("Component Dock"), no ColorLib references in app code
- [ ] CNAME: `public/CNAME` contains `eduflow.free.componentdock.com`
