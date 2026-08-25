# Template: Campusly (Education & University)

## Purpose

Recreation of ColorLib **Universityedu** (`https://colorlib.com/wp/template/universityedu/`) as a modern React 19 + Tailwind CSS 4 + TypeScript application (`apps/campusly`).

## Stack & Conventions

- Vite + React 19 + Tailwind CSS 4 + TypeScript
- Shared components from `@free-react-templates/ui`
- Fully responsive mobile menu & accessible navigation
- Footer links `https://www.componentdock.com/` ("Component Dock")

## Design Tokens (Extracted from Live Preview)

- **Primary Brand Color**: `#007A5C` (Forest Green, `--color-theme: #007A5C`)
- **Accent Color**: `#F15B43` (Coral/Orange for CTAs and badges)
- **Neutral Light**: `#f9f9ff` (Light background tint)
- **Text Color**: `#32404D` (Dark slate headings), `#5D646A` (Body text)
- **Font Family**: `Chivo`, sans-serif (`https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700;900&display=swap`)
- **Border Radius**: Rounded buttons (`rounded-full` or `rounded-md`)

## Section Structure & Gherkin Requirements

### 1. Header & Navigation (`Navbar.tsx`)

- **Requirement**: Fixed/sticky navigation bar with logo, links (Home, Programs, About, Courses, Contact), and CTA button ("Get Started Now").
- **Scenarios**:
  - Given the user views the page, when scrolling down, then the navbar sticks to the top with shadow.
  - Given mobile viewport, when clicking the hamburger menu, then the mobile drawer opens.

### 2. Hero Section (`Hero.tsx`)

- **Requirement**: Full-width hero banner with dark overlay, bold uppercase heading ("SHOWCASE COURSES, EVENTS AND MORE!"), subtext, and call-to-action buttons ("Learn More", "Call Us").
- **Scenarios**:
  - Given the user loads the home page, when viewing the hero, then the headline and primary CTAs are clearly visible.

### 3. About Section (`About.tsx`)

- **Requirement**: Two-column layout with feature illustration/image and heading "A comprehensive teaching approach" with descriptions and learn-more links.
- **Scenarios**:
  - Given the user scrolls to the about section, when observing the content, then side-by-side layout displays correctly on desktop.

### 4. Programs / Featured Courses Section (`Programs.tsx`)

- **Requirement**: Grid of featured academic programs and top stories (Faculty of Science, Faculty of Arts, Linguistics alumna stories).
- **Scenarios**:
  - Given the user browses programs, when viewing cards, then each card shows title, description, and action link.

### 5. Essential Resources Section (`Resources.tsx`)

- **Requirement**: Four-column resource cards (First year students, Tuition & fees, International students, Essential resources).
- **Scenarios**:
  - Given the user reviews student resources, when inspecting resource cards, then clear icons and descriptions are rendered.

### 6. Trusted Students Counter & Partner Logos (`StatsAndBrands.tsx`)

- **Requirement**: Statistic counter banner ("TRUSTED BY OVER 6000+ STUDENTS") and brand logo carousel grid.
- **Scenarios**:
  - Given the user scrolls past statistics, when viewing brand logos, then responsive grayscale logo grid appears.

### 7. Newsletter Section (`Newsletter.tsx`)

- **Requirement**: Email subscription banner for campus updates and admissions alerts.
- **Scenarios**:
  - Given the user enters an email address in the newsletter input, when clicking subscribe, then a success confirmation appears.

### 8. Footer (`Footer.tsx`)

- **Requirement**: Multi-column footer with quick links, programs, resources, newsletter signup, and mandatory link to `https://www.componentdock.com/` (branded as "Component Dock").
- **Scenarios**:
  - Given the user reaches the page bottom, when viewing footer links, then the Component Dock attribution link is present and valid.

## Verification Checklist

- [ ] `npm run spec:validate` passes
- [ ] Per-app gate `scripts/verify-app.sh campusly` passes (typecheck + lint + 100% coverage tests + build)
- [ ] Footer links Component Dock correctly
- [ ] No mention of ColorLib in source code
