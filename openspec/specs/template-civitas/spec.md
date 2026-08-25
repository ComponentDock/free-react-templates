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

## Gherkin Requirements & Scenarios

### Feature: Navigation Bar

As a visitor, I want a clean top navigation bar with brand logo, nav links, and CTA button.

- **Scenario**: View navigation items and mobile menu toggle
  - **Given** I am on the Civitas landing page
  - **Then** I should see the brand title "Civitas"
  - **And** navigation links for "Home", "Why Civitas", "Services", "Blog", and "Contact"
  - **And** a "Get Started" call-to-action button

### Feature: Hero Section

As a visitor, I want a bold hero header with value proposition and stats.

- **Scenario**: View hero heading, subtitle, CTA buttons, and key stats
  - **Given** I am on the Civitas landing page
  - **When** I view the hero section
  - **Then** I should see the headline "We have the best solution for your business to grow"
  - **And** action buttons "Get started" and "About us"
  - **And** statistics badges for "12 Years of experience" and "34 Team members"

### Feature: Why Choose Us / Services Section

As a visitor, I want to explore company features and core services (Web Design, Web Development, Branding, Graphic Design).

- **Scenario**: View service offerings and value proposition cards
  - **Given** I am scrolling through the Civitas page
  - **When** I reach the services section
  - **Then** I should see cards for "Web Design", "Web Development", "Branding & Identity", and "Graphic Design"
  - **And** distinct styling with brand blue accents

### Feature: Recent Blog Posts

As a visitor, I want to read recent blog posts and updates.

- **Scenario**: View blog articles with dates and snippets
  - **Given** I am viewing the blog section
  - **Then** I should see 3 recent article entries with date badges ("23 Aug 2020") and descriptions

### Feature: Footer

As a visitor, I want footer navigation, company info, and Component Dock attribution.

- **Scenario**: View footer links and Component Dock attribution
  - **Given** I scroll to the bottom of the page
  - **Then** I should see the "About Orbit" / company overview, navigation links, and contact info
  - **And** the footer MUST link `https://www.componentdock.com/` ("Component Dock")

---

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Component Dock attribution link present in footer
- [ ] Responsive layout on mobile and desktop
- [ ] Zero references to ColorLib in app code
