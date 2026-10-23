# Template: Civitas (Business & Agency)

## Purpose

Recreation of ColorLib **Stodeo** (`https://colorlib.com/wp/template/stodeo/`), preview URL: `https://preview.colorlib.com/theme/stodeo/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**:
  - Primary Blue: `#133ea1` (`bg-[#133ea1]`)
  - Accent Blue: `#3369e7` (`text-[#3369e7]`)
  - Light Neutral / Section Background: `#efefef` (`bg-[#efefef]`)
  - Dark Text: `#212529` (`text-[#212529]`)
  - Muted Text: `#888080` / `rgba(255, 255, 255, 0.5)`
- **Typography**:
  - Font Family: `"Noto Sans JP", sans-serif`
- **Radii & Spacing**:
  - Border Radius: `0.25rem` (`rounded`)
  - Generous padding on hero and feature boxes.

---

## Requirements

### Feature: Navigation Bar

As a visitor, I want a clean top navigation bar with brand logo, nav links, and CTA button.

#### Scenario: View navigation items and mobile menu toggle

- **GIVEN** I am on the Civitas landing page
- **THEN** I should see the brand title "Civitas"
- **AND** navigation links for "Home", "Why Civitas", "Services", "Blog", and "Contact"
- **AND** a "Get Started" call-to-action button

### Feature: Hero Section

As a visitor, I want a bold hero header with value proposition and stats.

#### Scenario: View hero heading, subtitle, CTA buttons, and key stats

- **GIVEN** I am on the Civitas landing page
- **WHEN** I view the hero section
- **THEN** I should see the headline "We have the best solution for your business to grow"
- **AND** action buttons "Get started" and "About us"
- **AND** statistics badges for "12 Years of experience" and "34 Team members"

### Feature: Why Choose Us / Services Section

As a visitor, I want to explore company features and core services (Web Design, Web Development, Branding, Graphic Design).

#### Scenario: View service offerings and value proposition cards

- **GIVEN** I am scrolling through the Civitas page
- **WHEN** I reach the services section
- **THEN** I should see cards for "Web Design", "Web Development", "Branding & Identity", and "Graphic Design"
- **AND** distinct styling with brand blue accents

### Feature: Recent Blog Posts

As a visitor, I want to read recent blog posts and updates.

#### Scenario: View blog articles with dates and snippets

- **GIVEN** I am viewing the blog section
- **THEN** I should see 3 recent article entries with date badges ("23 Aug 2020") and descriptions

### Feature: Footer

As a visitor, I want footer navigation, company info, and Component Dock attribution.

#### Scenario: View footer links and Component Dock attribution

- **GIVEN** I scroll to the bottom of the page
- **THEN** I should see the "About Orbit" / company overview, navigation links, and contact info
- **AND** the footer MUST link `https://www.componentdock.com/` ("Component Dock")

---

## Verification checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Component Dock attribution link present in footer
- [ ] Responsive layout on mobile and desktop
- [ ] Zero references to ColorLib in app code
- [ ] Navigation Bar — I should see the brand title "Civitas"
- [ ] Hero Section — I should see the headline "We have the best solution for your business to grow"
- [ ] Why Choose Us / Services Section — I should see cards for "Web Design", "Web Development", "Branding & Identity", and "Graphic Design"
- [ ] Recent Blog Posts — I should see 3 recent article entries with date badges ("23 Aug 2020") and descriptions
