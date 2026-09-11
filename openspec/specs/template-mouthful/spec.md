# Template: Mouthful (Restaurant / Food & Dining Landing Page)

## Purpose

Recreation of ColorLib's **Dingo** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page restaurant landing page.

- **Source:** [colorlib.com/wp/template/dingo/](https://colorlib.com/wp/template/dingo/)
- **Preview:** [preview.colorlib.com/theme/dingo/](https://preview.colorlib.com/theme/dingo/)
- **New name:** `mouthful` (apps/mouthful, @free-react-templates/mouthful)
- **Category:** Restaurant / Food & Dining landing page

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| body background | `#ffffff` (default) | White body, no dark theme |
| body text color | `#555555` | Medium gray paragraph text |
| heading color | `#2c3033` | Dark charcoal headings |
| heading font | `Cardo` (serif, 400/700) | Google Fonts, used for h1–h6 |
| body font | `Lora` (serif, 400/400i/700/700i) | Google Fonts, paragraph text |
| base font size | 14px | |
| paragraph font size | 15px, line-height 1.7 | |
| gray section bg | `#f6f5f1` | Warm light gray, alternating sections |
| primary brand color | `#ff6426` | Orange-red, buttons and hover states |
| link hover color | `#ff6426` | Orange-red on hover |
| button hover bg | `#ff6426` | Orange fill on hover |
| button hover text | `#ffffff` | White text on hover |
| button border | `2px solid #ff6426` | Outlined style, filled on hover |
| button text color | `#1d272f` | Dark text for outline buttons |
| section padding | 140px top/bottom | `.section_padding` class |
| heading h2 size | 44px, line-height 1.222 | Weight 600 |
| heading h3 size | 24px | |
| heading h5 size | 18px | |
| nav active link | `#ff6426` | Orange |

### Button variants
- **btn_1:** White bg, orange text → orange bg, white text on hover (nav CTA "Book a Table")
- **btn_2:** Dark text (#1d272f), underline effect with #ffeee7 background (hero CTAs)
- **btn_3:** Dark text with arrow icon (read more buttons)
- **btn_4:** Primary action (reservation submit)

## Section structure (1:1 with source)

1. **Navbar** — Full-width top nav. Logo left, center nav links (Home, About, Menu, Chefs, Blog dropdown, Contact), "Book a Table" CTA button right. Navbar toggler on mobile.
2. **Hero / Banner** — Full-width section with background image. Left-aligned text: subtitle "Expensive but the best", headline "Deliciousness jumping into the mouth", paragraph, two CTAs (Reservation link + "Watch our story" video popup).
3. **Popular Dishes / Exclusive Items** — "Our Exclusive Items" heading. 3-column grid of food item cards: image, title, description, "Read More" button. Items: Indian Burger, Creamy Noodles, Honey Meat.
4. **About** — Split layout with full-width container. Left: about illustration image. Right: "Our History" subtitle, headline, sub-headline, paragraph, "Read More" button.
5. **Food Menu** — Gray bg (#f6f5f1). "Delicious Food Menu" heading. Tabbed navigation (Special, Breakfast, Lunch, Dinner, Snacks). Each tab shows 6 food items in 2-column layout: thumbnail, title, description, price.
6. **Chefs / Team** — "Our Experience Chefs" heading. 3-column grid: chef photo, name, role, social icons (Facebook, Twitter, Instagram, Skype). Members: Adam Billiard, Fred Macyard, Justin Stuard.
7. **Reservation** — "Book A Table" heading. Form: Name, Email, Persons (select), Phone, Date (date picker), Time (select), Notes (textarea), "Book A Table" submit button.
8. **Testimonials / Reviews** — Gray bg. "Customers Feedback" heading. Carousel/slider of client reviews: client photo, quote text, reviewer name + title.
9. **Latest Blog** — "Latest From Blog" heading. 3-column grid of blog cards: image, date tags, title, "Read More" link.
10. **Footer** — 4-column: About Us (description), Important Links, Contact info (address, phone, email), Newsletter (email input + submit). Copyright row below with social icons (Facebook, Twitter, Dribbble, Behance). Footer MUST link componentdock.com.

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar renders with all navigation links
  Given the page loads
  Then the navbar displays a logo and links for Home, About, Menu, Chefs, Blog, Contact
  And a "Book a Table" CTA button is visible on the right

Scenario: Navbar collapses on mobile
  Given the viewport width is below 992px
  Then a hamburger toggler button appears
  And the nav links collapse into a mobile menu
```

### Hero
```gherkin
Scenario: Hero displays headline and CTAs
  Given the page loads
  Then the hero section shows a headline "Deliciousness jumping into the mouth"
  And a subtitle "Expensive but the best" is displayed above the headline
  And a "Reservation" CTA and "Watch our story" video link are visible

Scenario: Hero has background image
  Given the page loads
  Then a background image is displayed in the hero section
```

### Popular Dishes
```gherkin
Scenario: Popular dishes grid renders
  Given the page loads
  Then an "Our Exclusive Items" heading is shown
  And 3 food item cards are displayed in a grid
  And each card has an image, title, description, and "Read More" link

Scenario: Food items have correct content
  Given the popular dishes section loads
  Then the items are: Indian Burger, Creamy Noodles, Honey Meat
```

### About
```gherkin
Scenario: About section displays history
  Given the page loads
  Then an "Our History" subtitle and headline are shown
  And an illustration image is displayed alongside the text
  And a "Read More" button is visible
```

### Food Menu
```gherkin
Scenario: Menu section displays tabbed food items
  Given the page loads
  Then a "Delicious Food Menu" heading is shown
  And 5 menu tabs are visible: Special, Breakfast, Lunch, Dinner, Snacks
  And the Special tab is active by default
  And 6 food items with thumbnails, names, descriptions, and prices are displayed

Scenario: Clicking a menu tab switches content
  Given the menu section is visible
  When the user clicks the "Breakfast" tab
  Then the breakfast menu items are displayed

Scenario: Menu items show pricing
  Given a menu tab is active
  Then each food item displays a name, description, and price
```

### Chefs
```gherkin
Scenario: Team section shows chef cards
  Given the page loads
  Then an "Our Experience Chefs" heading is shown
  And 3 chef cards are displayed
  And each card has a photo, name, role, and social links

Scenario: Chef cards have social links
  Given the chefs section loads
  Then each chef card has Facebook, Twitter, Instagram, and Skype social icons
```

### Reservation
```gherkin
Scenario: Reservation form renders with all fields
  Given the page loads
  Then a "Book A Table" heading is shown
  And a form with fields: Name, Email, Persons, Phone, Date, Time, Notes is displayed
  And a "Book A Table" submit button is visible

Scenario: Reservation form has dropdown options
  Given the reservation form is visible
  Then the Persons field has options for 1–4 guests
  And the Time field has time slot options from 8AM to 12PM
```

### Testimonials
```gherkin
Scenario: Reviews section renders customer feedback
  Given the page loads
  Then a "Customers Feedback" heading is shown
  And at least 2 client review items are displayed in a carousel
  And each review has a client photo, quote text, and reviewer name
```

### Blog
```gherkin
Scenario: Blog section displays recent posts
  Given the page loads
  Then a "Latest From Blog" heading is shown
  And 3 blog cards are displayed in a grid
  And each card has an image, date, tags, title, and "Read More" link
```

### Footer
```gherkin
Scenario: Footer renders with columns and newsletter
  Given the page loads
  Then the footer displays 4 columns: About Us, Important Links, Contact, Newsletter
  And a newsletter email input and submit button are visible
  And a copyright line with social icons is displayed
  And a "Component Dock" link is present in the footer
```

## Verification checklist

- [ ] All 10 sections render in correct order (Navbar → Hero → Popular Dishes → About → Food Menu → Chefs → Reservation → Testimonials → Blog → Footer)
- [ ] Design tokens match: white body, #ff6426 orange brand, Cardo/Lora serif fonts, #f6f5f1 gray bg
- [ ] Menu tab switching works (5 tabs: Special, Breakfast, Lunch, Dinner, Snacks)
- [ ] Reservation form renders with all fields (Name, Email, Persons, Phone, Date, Time, Notes)
- [ ] Testimonial carousel/slider works
- [ ] Hero has background image and video popup link
- [ ] Footer links to componentdock.com (no Colorlib attribution)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] public/CNAME set to mouthful.free.componentdock.com
- [ ] homepage set to https://mouthful.free.componentdock.com
- [ ] Placeholder images use picsum.photos/seed/mouthful-N/W/H
- [ ] Google Fonts loaded via <link> in index.html (Cardo + Lora)
- [ ] Icons from lucide-react (no Themify, Flaticon, or Font Awesome)
