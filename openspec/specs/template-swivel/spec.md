# Template: Swivel (Featured Posts Carousel)

## Purpose

Recreation of ColorLib `carousel-07` (`https://colorlib.com/wp/template/carousel-07/`).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).
New original name: `swivel` (`apps/swivel`).

## Design Tokens

- **Brand Colors**: Primary deep slate/blue (`#1e293b`), accent warm amber (`#f59e0b`), background clean light gray (`#f8fafc`), card surface white (`#ffffff`).
- **Typography**: Font family `Inter`, sans-serif. Clean modern editorial typography with prominent headings and card titles.
- **Button / Shape**: Rounded-lg / rounded-xl cards with subtle shadow and border; amber CTA buttons with hover transitions.
- **Layout**: Featured posts carousel layout featuring an immersive slider/carousel section for featured content, category tags, author metadata, read-more links, newsletter signup, and footer linking `https://www.componentdock.com/`.

## Requirements

### Requirement 1: Navigation & Header

#### Scenario: Navigation & Header

- As a visitor, I want a clean top navigation bar with brand logo, nav links, and search/social icons.
- Scenario: Viewing header
- **GIVEN** the user is on the Swivel home page
- **WHEN** the page renders
- **THEN** the header displays the brand title "Swivel", navigation items (Home, Featured, Categories, About, Contact), and action buttons

### Requirement 2: Hero & Featured Carousel Section

#### Scenario: Hero & Featured Carousel Section

- As a visitor, I want to browse featured posts in an engaging carousel / slider hero area.
- Scenario: Interacting with the featured carousel
- **GIVEN** the user views the hero carousel section
- **WHEN** the user clicks next/previous slide controls or pagination dots
- **THEN** the active featured post updates smoothly displaying title, excerpt, author, date, and CTA

### Requirement 3: Posts Grid & Categories Section

#### Scenario: Posts Grid & Categories Section

- As a reader, I want to explore grid-based categorized articles with filter pills.
- Scenario: Filtering and browsing posts
- **GIVEN** the user scrolls to the posts grid
- **WHEN** the user clicks category filter tabs (All, Design, Tech, Lifestyle, Culture)
- **THEN** the displayed post cards filter accordingly

### Requirement 4: Newsletter Subscription Section

#### Scenario: Newsletter Subscription Section

- As a reader, I want to subscribe to the newsletter.
- Scenario: Submitting newsletter form
- **GIVEN** the user enters a valid email address into the newsletter input
- **WHEN** the user clicks "Subscribe"
- **THEN** a success confirmation message is displayed

### Requirement 5: Footer with Component Dock Link

#### Scenario: Footer with Component Dock Link

- As a visitor, I want a standard footer with navigation links and proper branding.
- Scenario: Viewing footer attribution
- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays copyright, legal links, and a clear attribution link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Spec validated (`npm run spec:validate`)
- [ ] Tests written and passing with 100% coverage
- [ ] Responsive design verified across viewports
- [ ] Footer links Component Dock correctly
- [ ] No ColorLib provenance in app source code
- [ ] Navigation & Header — the header displays the brand title "Swivel", navigation items (Home, Featured, Categories, About, Contact), and action buttons
- [ ] Hero & Featured Carousel Section — the active featured post updates smoothly displaying title, excerpt, author, date, and CTA
- [ ] Posts Grid & Categories Section — the displayed post cards filter accordingly
- [ ] Newsletter Subscription Section — a success confirmation message is displayed
