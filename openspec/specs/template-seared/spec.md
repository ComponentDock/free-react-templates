# Template: Seared (Restaurant / Fine Dining)

## Purpose

Recreation of ColorLib's **Diner** template as a React 19 + Vite + Tailwind 4 + TypeScript site.
- **Source slug:** `diner`
- **Preview URL:** https://preview.colorlib.com/theme/diner/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/diner-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Restaurant / Fine Dining — single-page restaurant site with hero banner, features/services row, specialties carousel, testimonial carousel, tabbed menu, chef profiles, menu pricing accordion, events section, and footer.

## Design Tokens (extracted from preview stylesheet)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Gold | `#fdb44b` | Buttons, accent icons, highlights |
| Light Gold | `#fec97d` | Button hover/active states |
| Black | `#000000` | Headings, body text |
| Body Gray | `#999999` | Secondary text |
| Light Gray | `#b3b3b3` | Tertiary text |
| Border Gray | `#cccccc` | Borders, dividers |
| Hover Gray | `#e6e6e6` | Hover backgrounds |
| Light BG | `#f2f2f2` | Section backgrounds |
| Near White | `#f7f7f7` | Alt section backgrounds |
| White | `#ffffff` | Page background, text on dark |

### Fonts
| Role | Family | Fallback |
|------|--------|----------|
| Headings | Playfair Display | Arial, sans-serif |
| Body | Open Sans | cursive |
| Icons | Ionicons | — |

### Buttons & Shapes
- **Primary button (.btn-primary):** border-radius 4px, 2px border, white text on gold background
- **Button hover:** Light Gold (#fec97d) background with gold border
- **Outline button (.btn-outline-primary):** transparent bg, 2px border, Gold text → fills gold on hover
- **Border radius:** 4px (buttons), 16px (cards/specialty items), 50% (icon circles)

### Section Backgrounds
- **Hero:** Full-width dark food image with semi-transparent overlay, white heading text
- **Services:** White background, 4 icon cards with gold circular icons
- **Specialties:** White background, 6 recipe cards in owl-carousel
- **Testimonial:** White background, carousel with author photos + quotes
- **Feature Menu:** White background, tab-based (Breakfast/Lunch/Dinner) menu items
- **Chef:** Full-width background image, chef profile cards overlay
- **Menu Pricing:** White background, accordion-style menu with prices
- **Events & News:** Light gray (#f7f7f7) background
- **Footer:** Dark background, restaurant info, hours, quick links, newsletter

## Gherkin Requirements

### Feature: Seared — Restaurant / Fine Dining Template

#### Scenario: Site header and navigation display correctly
- **Given** the user loads the page
- **Then** a sticky site header is visible at the top
- **And** a logo (letter "D" or equivalent) is on the left
- **And** navigation links include: Home, About Us, Our Menu, Our Blog, Reserve A Table, Contact
- **And** a mobile hamburger menu toggle is visible on small screens

#### Scenario: Hero section displays correctly
- **Given** the user views the hero section
- **Then** a full-width dark food image with overlay is displayed
- **And** a large centered heading text is shown in white (Playfair Display font)
- **And** the text reads: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."

#### Scenario: Features/services row shows 4 items
- **Given** the user scrolls past the hero
- **Then** 4 feature cards are displayed in a single row
- **And** each card has a gold circular icon at the top
- **And** the features are: Quality Cuisine, Fresh Food, Friendly Staff, Easy Reservation
- **And** each card has a brief descriptive paragraph below the title

#### Scenario: Specialties carousel displays items
- **Given** the user scrolls to the specialties section
- **Then** an "Our Specialties" heading is shown
- **And** 6 recipe cards are displayed in a carousel/slider
- **And** each card has an image, title (e.g. "Grilled Egg With Garlic"), and brief text
- **And** carousel has prev/next navigation

#### Scenario: Testimonial carousel shows reviews
- **Given** the user scrolls to the testimonial section
- **Then** a carousel of testimonial items is displayed
- **And** each item shows an author photo, author name (h4), and review text
- **And** authors include: Maxim Smith, Geert Green, Dennis Roman

#### Scenario: Feature menu with tabs displays correctly
- **Given** the user scrolls to the Feature Menu section
- **Then** a "Feature Menu" heading is shown
- **And** tab buttons allow switching between: Breakfast, Lunch, Dinner
- **And** each tab shows a list of menu items with images and descriptions
- **And** a "View All Menu" button is available

#### Scenario: Master Chef section displays
- **Given** the user scrolls to the Master Chef section
- **Then** a "Master Chef" heading is shown
- **And** chef profile images are displayed
- **And** a "Meet Our Chef" button is available

#### Scenario: Menu List with Price accordion works
- **Given** the user scrolls to the menu pricing section
- **Then** a "Menu List with Price" heading is shown
- **And** menu items are displayed in an accordion layout
- **And** each item shows: dish name, description, and price
- **And** items include: Warm Spinach Dip & Chips, Key West Machos, Crispy Onion Rings, Lobster & Shrimp Quesadilla, and more

#### Scenario: Events & News section displays
- **Given** the user scrolls to the events section
- **Then** an "Events & News" heading is shown
- **And** event/news cards are displayed

#### Scenario: Why Choose Us section displays
- **Given** the user scrolls to the why choose us section
- **Then** a "Why Choose Us" heading is shown
- **And** supporting content is displayed

#### Scenario: Footer displays correctly
- **Given** the user scrolls to the footer
- **Then** the restaurant name "Diner Restaurant" is displayed
- **And** restaurant description text is shown
- **And** service hours are listed (Lunch Service, Dinner Service)
- **And** a Quick Links section with: Help & Support, Privacy Policy, Get in Touch, Testimonials
- **And** a newsletter subscribe form is present
- **And** a "Made with ❤ by Component Dock" copyright line is shown

#### Scenario: Responsive behavior on mobile
- **Given** the user views the page on a mobile viewport (≤768px)
- **Then** the navbar collapses to a hamburger menu
- **And** the hero text scales down and remains centered
- **And** the features row stacks to a 2-column or single-column layout
- **And** the specialties carousel becomes scrollable
- **And** the menu pricing accordion remains functional
- **And** footer columns stack vertically

#### Scenario: Dark mode styling
- **Given** the user enables dark mode
- **Then** the page background becomes dark
- **And** text colors adjust to white/light
- **And** card backgrounds use dark tones
- **And** Primary Gold (#fdb44b) accents remain visible

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate` passes)
- [ ] All Gherkin scenarios are implementable
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed
- [ ] Screenshot reviewed for visual fidelity
- [ ] Section order matches original: Header → Hero → Features → Specialties → Testimonials → Feature Menu → Chef → Menu Pricing → Events → Why Choose Us → Footer
