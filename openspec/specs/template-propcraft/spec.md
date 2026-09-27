# Template: PropCraft (Real Estate)

## Purpose

Recreation of ColorLib "Real Estate" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source**: ColorLib "Real Estate"
  - Preview URL: https://preview.colorlib.com/theme/realestate/
  - Source page: https://colorlib.com/wp/template/real-estate/
  - Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate-free-realstate-website-template.jpg
- **New name**: `propcraft`
- **Package**: `@free-react-templates/propcraft`
- **Deploy**: `propcraft.free.componentdock.com`
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Real Estate

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", sans-serif` | Google Fonts, weights 300–700 |
| Brand/accent color | `#f41068` | Hot pink — buttons, selection, highlights |
| Body text color | `#777777` | Light grey for paragraphs |
| Heading color | `#222222` | Dark near-black for h1–h6 |
| Section alt background | `#f9f9ff` | Very light lavender for alternating sections |
| White background | `#ffffff` | Default section background |
| Button border-radius | `25px` | Pill-shaped primary buttons |
| Button padding | `42px line-height, 30px left, 60px right` | Large pill buttons |
| Secondary accent (teal) | `#4cd3e3` | Alternate button/element color |
| Secondary accent (blue) | `#38a4ff` | Alternate button/element color |
| Secondary accent (yellow) | `#f4e700` | Alternate button/element color |
| Overlay bg | `rgba(0,0,0,0.x)` dark | Used on banner and property cards |
| Content overlay | dark gradient on hover | City grid cards fade-in bottom text |
| Selection color | `#f41068` | Text selection background |

## Section structure (from live preview DOM)

1. **Header** — Top bar (phone number, Sell/Rent Property link, Login/Register) + Navbar (logo, nav links: Home, Service, Property, Contact)
2. **Banner/Hero** — Full-screen background image with dark overlay; centered headline "We're Real Estate King"; search form with Sell/Rent toggle switch, Location select, Property Type select, Bedrooms select (x2), Price Range slider, Area Range slider, Search Properties button
3. **Service Area** — "Why we are the best" heading + 6 service cards in 3×2 grid: Expert Technicians, Professional Service, Great Support, Technical Support, Expert Technicians (duplicate), Technical Support (duplicate). Each card: icon + title + description
4. **Property Area** — 3 property listing cards with image, overlay, price badge, property details (beds, baths, sqft), title. Grid layout.
5. **City Area** — Asymmetric image grid: San Francisco (left tall), New York (right top wide), Boston (right bottom-left), Elay (right bottom-right). Hover overlay with city name.
6. **About Area** — Split layout: left text (Why Choose Us, Our Properties, Legal Notice — each with heading + paragraph), right image (full height)
7. **Contact Info Area** — 4-column info cards: Visit Our Office (address), Let's Call Us (phone numbers), Let's Email Us (emails), Customer Support (support emails)
8. **Contact Area** — Split: left = Google Map embed, right = contact form (name, email, message, Send Message button)
9. **Footer** — 4 columns: About Us (text), Newsletter (email input + arrow button), Instagram Feed (8 thumbnail images), Quick Links. Bottom bar with copyright + social links.

## Gherkin requirements

### Scenario: Header renders with navigation
```
Given the user loads the page
Then a top bar shows phone number, "Sell / Rent Property" link, and "login / register" link
And a navbar shows a logo and navigation links: Home, Service, Property, Contact
```

### Scenario: Banner hero section with search form
```
Given the user views the hero section
Then a full-width background image is displayed with a dark overlay
And the headline "We're Real Estate King" is centered
And a Sell/Rent toggle switch is visible
And dropdowns for Location, Property Type, and Bedrooms are shown
And Price Range and Area Range sliders are displayed
And a "Search Properties" pill button is present
```

### Scenario: Service area displays 6 service cards
```
Given the user scrolls to the service section
Then the heading "Why we are the best" is displayed
And 6 service cards are shown in a 3×2 grid
And each card has an icon, title, and description paragraph
```

### Scenario: Property area displays listing cards
```
Given the user scrolls to the property section
Then 3 property cards are displayed
And each card shows a property image with dark overlay
And each card displays price, bed/bath/sqft counts, and a title
```

### Scenario: City area shows asymmetric image grid
```
Given the user scrolls to the city section
Then 4 city property images are shown in an asymmetric grid
And hovering a city card reveals the city name with a fade-in animation
```

### Scenario: About area shows split layout
```
Given the user scrolls to the about section
Then the left side shows three text blocks: "Why Choose Us", "Our Properties", "Legal Notice"
And the right side shows a full-height image
```

### Scenario: Contact info area displays 4 info columns
```
Given the user scrolls to the contact info section
Then 4 columns are shown: Visit Our Office, Let's Call Us, Let's Email Us, Customer Support
And each column has a heading and descriptive text
```

### Scenario: Contact area with map and form
```
Given the user scrolls to the contact section
Then a Google Map is displayed on the left
And a contact form on the right has fields: name, email, message
And a "Send Message" pill button submits the form
```

### Scenario: Footer with 4 columns and bottom bar
```
Given the user views the footer
Then 4 widget columns are shown: About Us, Newsletter, Instagram Feed, Quick Links
And a bottom bar shows copyright text and social media icon links
```

### Scenario: Responsive layout adapts to mobile
```
Given the user views on a mobile viewport
Then the navbar collapses to a hamburger menu
And property cards stack vertically
And the city grid stacks into a single column
And the contact form and map stack vertically
```

## Verification checklist

- [ ] Header renders with top bar and navbar
- [ ] Banner hero has background image, headline, and full search form
- [ ] Sell/Rent toggle switch toggles between modes
- [ ] All dropdowns and range sliders render
- [ ] Service area shows 6 cards in grid
- [ ] Property area shows 3 listing cards with details
- [ ] City area shows 4 images in asymmetric grid with hover overlay
- [ ] About area shows split layout (text + image)
- [ ] Contact info area shows 4 columns
- [ ] Contact area shows map and form
- [ ] Footer shows 4 widget columns and copyright bar
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains propcraft.free.componentdock.com
- [ ] package.json homepage set to https://propcraft.free.componentdock.com
