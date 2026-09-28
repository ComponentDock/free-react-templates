# Template: Charhouse (Restaurant)

## Purpose

Charhouse is a single-page restaurant landing page in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Steak" free template (source:
https://colorlib.com/wp/template/steak/), built under a
DIFFERENT name (**Charhouse**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page restaurant site with parallax
hero, split about section, 3×2 service grid, tabbed menu, customer
testimonials carousel, reservation form with opening hours, Google Maps
embed, and a 4-column footer. It uses Playfair Display serif font,
amber/orange brand color (#fba83b), black buttons, and dark hero overlay.

## Source mapping

- **ColorLib item:** "Steak" (TEMPLATES.md line 2701)
- **Source URL:** https://colorlib.com/wp/template/steak/
- **Preview URL:** https://preview.colorlib.com/theme/steak/ (REACHABLE, verified 2026-09-28)
- **Preview CSS:** `css/style.css` (143KB, Bootstrap 4 based + custom TemplateUX styles)
- **Fonts:** "Playfair Display" (Google Fonts — headings), system sans-serif (body)
- **Icons:** Flaticon food icons (REPLACE with lucide-react)
- **Scripts:** jQuery, animsition, AOS (animate on scroll), Fancybox (video), Google Maps API

## Design tokens

| Token              | Value                   | Usage                              |
| ------------------ | ----------------------- | ---------------------------------- |
| brand-primary      | #fba83b (amber/orange)  | Buttons, links, accents            |
| brand-hover        | #fa9209 (darker orange) | Button hover state                 |
| brand-secondary    | #fa9716 (orange)        | Alternate hover                    |
| black              | #000                    | Buttons (btn-black), hero overlay  |
| white              | #fff                    | Hero text, button text             |
| hero-overlay       | #313137                 | Dark overlay on hero image         |
| body-text          | #212529                 | Primary text color                 |
| muted-text         | #6c757d                 | Secondary/muted text               |
| light-bg           | #f8f9fa                 | Services section bg                |
| off-white-bg       | #eeeeee                 | Alternate section bg               |
| heading-font       | "Playfair Display", serif | Display headings (h2, hero h3)  |
| body-font          | system sans-serif       | Body text, nav, buttons            |
| button-radius      | 0.25rem (4px)           | Standard buttons                   |
| circle-radius      | 50%                     | Avatars, circular elements         |
| section-padding    | ~5rem vertical          | Between major sections             |

## Section structure (order from preview)

1. **Navbar** — Fixed/sticky top, logo "Charhouse" left, nav links (Home, About, Menu, Gallery, Contact) center, "Reserve Now" CTA button right. Mobile: hamburger toggle.
2. **Hero** — Full-viewport parallax background image with dark overlay (#313137), centered heading "Welcome To Charhouse Food & Restaurant", "Play Video" outline button, mouse scroll indicator at bottom.
3. **About** — Split layout: food image on left (parallax effect), text content on right with display heading "Welcome To Charhouse Food & Restaurant", two paragraphs of body copy, "Read More" black outline button.
4. **Services** — Light bg (#f8f9fa), heading "Our Services", subtext lead paragraph, 3×2 grid of food category cards with lucide icon + title + description (Noodles, Burger, Chicken, Vegetarian, Fried Chicken, Beef & Rib).
5. **Menu** — White bg, heading "Our Menu", subtext, tabbed navigation (Breakfast / Lunch / Dinner), each tab shows 2-column grid of menu items: thumbnail image + dish name + description + price in brand-primary color.
6. **Testimonials** — Carousel/slider of customer reviews: circular avatar image, quote text, customer name, position. Auto-rotating or manual navigation.
7. **Reservation** — Two-column layout: left side shows opening hours (Mon-Fri hours, Sat closed, Sun hours) with phone number; right side has reservation form (party size dropdown, date input, time input, name, phone, email, "Reserve Now" submit button).
8. **Footer** — Dark bg, 4-column layout: About section with description + "About Us" button, Quick Links, Support links, About Us links, Connect With Us (social icons: Facebook, Twitter, Instagram, YouTube). Bottom copyright row.

## Gherkin requirements

```gherkin
Feature: Charhouse restaurant landing page

  Background:
    Given the user visits the Charhouse landing page

  Scenario: Navbar displays correctly
    Then the navbar is visible at the top of the page
    And the logo text "Charhouse" is displayed
    And navigation links "Home", "About", "Menu", "Gallery", "Contact" are present
    And a "Reserve Now" call-to-action button is visible

  Scenario: Hero section loads
    Then a full-width hero image is displayed
    And the heading "Welcome To Charhouse Food & Restaurant" is visible
    And a "Play Video" outline button is visible
    And a scroll-down indicator is shown at the bottom

  Scenario: About section content
    When the user scrolls to the about section
    Then a food image is displayed on the left
    And the heading "Welcome To Charhouse Food & Restaurant" is visible
    And descriptive paragraphs about the restaurant are shown
    And a "Read More" black outline button is present

  Scenario: Services section displays food categories
    When the user scrolls to the services section
    Then a heading "Our Services" is displayed
    And 6 food category cards are shown in a 3×2 grid
    And each card has an icon, title, and description

  Scenario: Menu section tabbed interface
    When the user scrolls to the menu section
    Then the heading "Our Menu" is displayed
    And three tabs are visible: "Breakfast", "Lunch", "Dinner"
    And the Breakfast tab is active by default
    And each tab shows menu items with image, name, description, and price

  Scenario: Menu tab switching
    When the user clicks the "Lunch" tab
    Then the Lunch menu items are displayed
    And the Breakfast items are hidden
    When the user clicks the "Dinner" tab
    Then the Dinner menu items are displayed

  Scenario: Testimonials carousel
    When the user scrolls to the testimonials section
    Then customer testimonials are displayed
    And each testimonial shows an avatar, quote, name, and position

  Scenario: Reservation form
    When the user scrolls to the reservation section
    Then opening hours are displayed for Monday-Friday and Sunday
    And a reservation form is visible with fields for party size, date, time, name, phone, and email
    And a "Reserve Now" submit button is present

  Scenario: Footer content
    When the user scrolls to the footer
    Then "About Charhouse Restaurant" description is shown
    And Quick Links, Support, About Us, and Connect With Us columns are present
    And social media icons (Facebook, Twitter, Instagram, YouTube) are displayed
    And a copyright notice with "Component Dock" link is shown

  Scenario: Responsive mobile layout
    Given the user is on a mobile viewport
    Then the navbar collapses to a hamburger menu
    And sections stack vertically
    And the reservation form fields stack vertically
```

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Navbar sticky/fixed with logo, links, CTA
- [ ] Hero full-viewport with parallax image + dark overlay
- [ ] About split layout (image left, text right)
- [ ] Services 3×2 grid with icons on light background
- [ ] Menu tabbed interface with Breakfast/Lunch/Dinner
- [ ] Testimonials carousel with avatars
- [ ] Reservation form with opening hours + form fields
- [ ] Footer 4-column with social icons + Component Dock link
- [ ] Brand color #fba83b used consistently
- [ ] Playfair Display font for headings
- [ ] Mobile responsive (hamburger nav, stacked layouts)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
