# Template: Oraxol (Portfolio / Creative Agency)

## Purpose

Recreation of ColorLib **Oraxol** (`https://colorlib.com/wp/template/oraxol/`), preview URL: `https://preview.colorlib.com/theme/oraxol/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Design Tokens

- **Brand Palette:**
  - Primary / Background: Dark / black base (`#161719` / `#18191c` / `#000000`) with crisp white (`#ffffff`) text.
  - Accent / Highlights: Subtle gold/amber or clean minimal gray (`#aaaaaa`, `#6c757d`, `#ffffff`).
- **Typography:**
  - Font Family: `"Poppins", Arial, sans-serif` via Google Fonts.
  - Headings: Bold white sans-serif headings.
- **Buttons & Elements:**
  - Minimalistic rounded buttons (`border-radius: 4px` or `2px`).
  - Subtle borders and hover states.

## Requirements

### 1. Navigation Header

#### Scenario: 1. Navigation Header

- **Requirement:** The header shall display the brand logo ("Oraxol"), navigation links ("Work", "Blog", "About", "Contact"), and a search or menu action.
- **Scenario:** Viewing the header
- **GIVEN** the user loads the Oraxol landing page
- **WHEN** the navigation bar is rendered
- **THEN** it shows the "Oraxol" logo and links for Work, Blog, About, and Contact

### 2. Hero Section

#### Scenario: 2. Hero Section

- **Requirement:** The hero shall feature a bold minimal heading ("We Create Minimal & Functional Website, Powered by The Latest Bootstrap 5 Alpha") and a "Available for freelance work" badge/link.
- **Scenario:** Viewing the hero section
- **GIVEN** the user is on the home view
- **WHEN** the hero section is displayed
- **THEN** it presents the core value proposition and freelance availability indicator

### 3. Services / Solutions Section

#### Scenario: 3. Services / Solutions Section

- **Requirement:** The services section shall display core offerings ("Graphic Design", "Web Design", "Branding & Printing", "Web Development") in a multi-column grid with clean iconography.
- **Scenario:** Exploring solutions
- **GIVEN** the user scrolls to the solutions section
- **WHEN** the service cards are rendered
- **THEN** each card shows a title, description, and icon

### 4. Portfolio / Gallery Section

#### Scenario: 4. Portfolio / Gallery Section

- **Requirement:** The portfolio section shall display high-quality design work items in a grid layout with preview links.
- **Scenario:** Browsing portfolio items
- **GIVEN** the user views the portfolio section
- **WHEN** the gallery loads
- **THEN** multiple design project cards are displayed with hover effects

### 5. Testimonials / Satisfied Clients Section

#### Scenario: 5. Testimonials / Satisfied Clients Section

- **Requirement:** The testimonials section shall feature client feedback and interactive carousel navigation.
- **Scenario:** Reading client feedback
- **GIVEN** the user reaches the testimonials section
- **WHEN** client reviews are displayed
- **THEN** interactive navigation buttons allow browsing client testimonials

### 6. Team / Designers Section

#### Scenario: 6. Team / Designers Section

- **Requirement:** The team section shall highlight key creators and developers ("John McArthur", "Mark Sky", etc.).
- **Scenario:** Viewing team profiles
- **GIVEN** the user views the team section
- **WHEN** the team grid is rendered
- **THEN** member names and professional titles are presented

### 7. Recent Blog Section

#### Scenario: 7. Recent Blog Section

- **Requirement:** The blog section shall show recent insights and articles with author metadata and comments link.
- **Scenario:** Checking recent articles
- **GIVEN** the user scrolls to the blog section
- **WHEN** articles are loaded
- **THEN** article titles, author info ("John Dorf"), and comment counts are shown

### 8. Footer

#### Scenario: 8. Footer

- **Requirement:** The footer shall contain brand intro, exploration links, quick links, category links, contact details (phone, email), social icons, and a branded link to `https://www.componentdock.com/`.
- **Scenario:** Checking footer links and attribution
- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it displays all navigation columns, contact info, and the Component Dock link

## Verification checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] All sections implemented with 100% test coverage
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No mention of ColorLib in app source code
- [ ] 1. Navigation Header — it shows the "Oraxol" logo and links for Work, Blog, About, and Contact
- [ ] 2. Hero Section — it presents the core value proposition and freelance availability indicator
- [ ] 3. Services / Solutions Section — each card shows a title, description, and icon
- [ ] 4. Portfolio / Gallery Section — multiple design project cards are displayed with hover effects
- [ ] 5. Testimonials / Satisfied Clients Section — interactive navigation buttons allow browsing client testimonials
- [ ] 6. Team / Designers Section — member names and professional titles are presented
- [ ] 7. Recent Blog Section — article titles, author info ("John Dorf"), and comment counts are shown
