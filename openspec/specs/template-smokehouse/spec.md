# Template: Smokehouse (Restaurant)

## Purpose

A restaurant template with hero, about, menu, reservation, services, counter, news and map sections. Recreation of ColorLib's **Steak** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page restaurant website.

- **Source**: ColorLib Steak — https://colorlib.com/wp/template/steak/
- **Preview**: https://preview.colorlib.com/theme/steak/
- **New name**: `smokehouse` (apps/smokehouse, package `@free-react-templates/smokehouse`)
- **Stack**: Vite latest, React 19, Tailwind CSS 4, TypeScript strict, Vitest + Testing Library

## Design tokens

| Token              | Value                                    | Notes                                          |
| ------------------ | ---------------------------------------- | ---------------------------------------------- |
| Font family        | `"Playfair Display", arial, sans-serif`  | Google Fonts, loaded in index.html             |
| Brand / primary    | `#fba83b` (golden orange)               | Primary buttons, nav active, links, accent     |
| Primary hover      | `#fa9716` / `#fcbe6d`                   | Darker/lighter hover variants                  |
| Text dark          | `#212529`                                | Body text (Bootstrap default)                  |
| Text muted         | `#999999`                                | Body paragraphs, secondary text                |
| Headings           | `#000000`                                | All heading elements                           |
| White              | `#fff`                                   | Hero text, white buttons                       |
| Black              | `#000`                                   | Dark buttons, backgrounds, overlay             |
| Light background   | `#f8f9fa` (`.bg-light`)                 | Services, counters, testimonials sections      |
| Border gray        | `#cccccc`                                | Form controls, tab nav, CTA border             |
| Overlay color      | `rgba(0,0,0,0.3)` / `#313137 @ 0.4`    | Hero parallax overlay                          |
| Button radius      | `0` (sharp square corners)              | All buttons                                    |
| Button text        | Uppercase, `12px`, `letter-spacing: .1em`| Standard button typography                     |
| Button padding     | `py-3 px-5` (hero), `py-3 px-4` (CTA)  | Generous horizontal padding                    |
| Menu item img      | `100px` circle                           | `border-radius: 50%`                           |
| Tab nav            | Uppercase `14px`, `letter-spacing: .2em`, `2px solid #ccc`, no radius | Active: solid black border, no bg |
| Counter number     | `50px`, color `#000`                     | Counter section stats                          |
| Footer             | Dark background, white text              | 4-column layout with social links              |
| Map height         | `680px` (desktop), offset by `-15em` margin-top | Google Maps embed section              |

## Requirements

### Feature: Smokehouse template behaviour

#### Scenario: Hero section renders with parallax background

- **GIVEN** the user visits the Smokehouse homepage
- **THEN** a full-screen hero section is visible
- **AND** the heading reads "Welcome To Smokehouse Food & Restaurant"
- **AND** a "Play Video" button is visible in the hero
- **AND** a scroll-down mouse indicator is shown at the bottom

#### Scenario: Header navigation is sticky

- **GIVEN** the user scrolls past the hero
- **THEN** the header becomes fixed at the top with a white background
- **AND** the logo text switches from white to black

#### Scenario: About section displays with image and text

- **GIVEN** the user scrolls to the About section
- **THEN** an about image is displayed on the left
- **AND** the heading "Welcome To Smokehouse Food & Restaurant" is shown on the right
- **AND** two paragraphs of descriptive text are shown
- **AND** a "Read More" button is visible

#### Scenario: Services section shows 6 food service items

- **GIVEN** the user scrolls to the Services section
- **THEN** the heading "Restaurant Services" is visible
- **AND** 6 service items are displayed in a 3-column grid
- **AND** each service item has an icon, title, and description
- **AND** the service titles are: Noodles & Spaguetti, Big Hamburger, Chicken Leg, Vegetarian Food, Fried Chicken, Beef Steak & Rib

#### Scenario: Menu section has tabbed content

- **GIVEN** the user scrolls to the Menu section
- **THEN** the heading "Our Menu" is visible
- **AND** 3 tabs are shown: Breakfast, Lunch, Dinner
- **AND** Breakfast tab is active by default
- **AND** each tab shows 6 menu items in a 2-column layout
- **AND** each menu item has a circular image, title, description, and price

#### Scenario: Counter section shows fun facts

- **GIVEN** the user scrolls to the Counter section
- **THEN** the heading "Today's Fun Facts" is visible
- **AND** 3 counters are displayed: Noodles Sold (124), Burgers Sold (200), Chicken Sold (234)
- **AND** each counter has an icon and an uppercase label

#### Scenario: News & Events section displays blog cards

- **GIVEN** the user scrolls to the News & Events section
- **THEN** the heading "News & Events" is visible
- **AND** 4 thumbnail cards are displayed in an asymmetric grid
- **AND** each card has a background image, title, and date metadata

#### Scenario: Testimonials section shows customer quotes

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a carousel of testimonials is displayed
- **AND** each testimonial has a quote, author name, position, and circular avatar
- **AND** a large quotation mark decorative element is shown

#### Scenario: Reservation section has a form

- **GIVEN** the user scrolls to the Reservation section
- **THEN** the heading "Reserve A Table" is visible
- **AND** a Time Open panel is displayed with a black background showing hours
- **AND** a reservation form is shown with fields: party size, date, time, name, phone, email
- **AND** a "Reserve Now" submit button is visible

#### Scenario: Footer contains site links and social icons

- **GIVEN** the user scrolls to the Footer
- **THEN** an "About Smokehouse Restaurant" widget is shown
- **AND** Quick Links, Support, About Us, Connect With Us columns are displayed
- **AND** social media icons are visible for Facebook, Twitter, Instagram, YouTube
- **AND** a copyright line with "Made with Component Dock" attribution links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/smokehouse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/smokehouse/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Header: sticky on scroll, logo color switches white → black
- [ ] Hero: parallax background, heading, play video button, scroll mouse indicator
- [x] About: image left, text right, "Read More" button
- [ ] Services: 6 items, 3-column grid, icons + titles + descriptions
- [ ] Menu: 3 tabs (Breakfast/Lunch/Dinner), 6 items per tab, circular images, prices
- [ ] Counters: 3 stats with icons and labels, count-up animation
- [ ] News & Events: 4 asymmetric cards with hover overlay
- [ ] Testimonials: carousel with quotes, avatars, author info
- [ ] Reservation: hours panel (black bg), form with 6 fields + submit
- [ ] Map section placeholder (Google Maps embed area)
- [ ] Footer: 4-column layout, social icons, copyright with Component Dock link
- [ ] Design tokens match: Playfair Display font, #fba83b primary, sharp buttons, dark overlays
- [x] No ColorLib references in app code (provenance only in spec)
- [ ] All tests pass, 100% coverage
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
