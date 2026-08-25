# Spec: Culinary

## Purpose

Recreation of ColorLib **Bootstrap Accordion V02** (`accordion-02`), a free food menu accordion template.

- **Source template**: ColorLib `accordion-02` (`https://colorlib.com/wp/template/accordion-02/`)
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library (100% coverage).
- **Domain**: Food & Drink, Restaurant Menu, Interactive Accordion Showcase.

## Design Tokens

- **Brand Colors**:
  - Primary Amber: `#c59b27` (Tailwind `amber-600` / custom gold)
  - Dark Charcoal: `#1a1a1a` (Neutral 900)
  - Warm Cream Background: `#fcf8f2` (Warm neutral light)
  - Text Muted: `#666666` (Neutral 500)
- **Typography**:
  - Heading & Body Font: `"Poppins", sans-serif` loaded via Google Fonts.
- **Components**:
  - Interactive accordion panels for food categories (Starters, Main Courses, Desserts, Beverages).
  - High-resolution food photography placeholders via Unsplash / Picsum (`https://picsum.photos/seed/culinary-<id>/400/300`).
  - Clean card layouts with item titles, descriptions, and pricing badges.

---

## Gherkin Requirements & Scenarios

### Feature: Culinary Restaurant Menu Accordion

#### Scenario: User views the Hero / Header Section

- **Given** the user visits the Culinary template home page
- **Then** they should see a navigation bar with brand logo and links (Home, Menu, About, Contact)
- **And** a prominent hero banner introducing the restaurant with a headline, subtitle, and CTA button to view the menu

#### Scenario: User explores the Food Menu Accordions

- **Given** the user is viewing the menu section
- **Then** they should see categorized accordion groups (e.g., Starters, Breakfast, Lunch, Dinner, Drinks)
- **When** the user clicks on an accordion category header
- **Then** the corresponding menu items list expands smoothly, showing item names, descriptions, images, and prices

#### Scenario: User views the Restaurant Story / About Section

- **Given** the user scrolls past the menu
- **Then** they should see an about section detailing the culinary philosophy, chef background, and imagery

#### Scenario: User inspects the Footer

- **Given** the user reaches the bottom of the page
- **Then** they should see restaurant contact details, operating hours, newsletter signup, and a branded link to `https://www.componentdock.com/` ("Component Dock")

---

## Verification Checklist

- [ ] App workspace `@free-react-templates/culinary` created at `apps/culinary/`
- [ ] `vite.config.ts` includes `injectUiSource()`
- [ ] `public/CNAME` contains `culinary.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
- [ ] 100% test coverage on all components
- [ ] Passes per-app verification gate (`scripts/verify-app.sh culinary`)
