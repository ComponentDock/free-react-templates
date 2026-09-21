# Template: Revelry (Restaurant / Event Venue)

## Purpose

Recreation of ColorLib "The Venue" — a restaurant/event venue website template.
- **Source:** https://colorlib.com/wp/template/thevenue/
- **Preview:** https://preview.colorlib.com/theme/thevenue/
- **New name:** Revelry (apps/revelry)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`main_styles.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Body font | `PT Sans Narrow`, sans-serif | All body text, headings |
| Decorative font | `Edward` (script) | Subtitles, star ratings |
| Primary (tan) | `#c4ab9f` | Navbar, buttons, section overlays |
| Warm brown | `#b49383` | Secondary brand, backgrounds |
| Salmon accent | `#ffa07f` | Hover states, highlights |
| Red accent | `#db5246` | Price highlights, CTA accents |
| Dark | `#232323` / `#282828` | Text, dark overlays |
| Gray | `#636363` | Body text |
| Light bg | `#F7F7F7` | Section alternating bg |
| White | `#FFFFFF` | Card backgrounds |
| Brown overlay | `rgba(180,147,131,0.97)` | Parallax section overlays |
| Dark overlay | `rgba(0,0,0,0.85)` | Video section overlay |
| Button radius | `7px` | All CTA buttons |
| Button style | Tan bg, white text, 7px radius, padding ~13px 30px | Primary action buttons |

## Sections (in DOM order)

1. **Header** — Sticky nav bar with logo ("Revelry" in script font), navigation links (Home, About Us, Menu, Delivery, Blog, Contact), reservation phone number, hamburger menu for mobile.
2. **Hero** — Full-width parallax background image, centered text: subtitle ("The Venue is"), main title ("An Extraordinery Experience" in script font), description paragraph, scroll-down icon.
3. **Introduction / About** — Section heading with subtitle, description text, 2-column grid with food/venue images.
4. **Video CTA** — Full-width parallax section with dark overlay, centered play button icon, title text.
5. **Signature Dish** — Two-column layout: left side has subtitle, title ("Our Signature Dish"), dish description, star rating, ingredient list, "Order Now" button; right side has food image.
6. **Menu** — Section header with star ratings and title ("The Menu"), 3-column grid (Starters, Main, Desserts), each column lists 5 dishes with title, ingredients, price, and "Order Now" button.
7. **Reservations** — Full-width parallax section with tan overlay, star rating, title ("Make a Reservation"), form with party-size selector (2-6 persons) and submit button.
8. **Footer** — 3-column layout: logo + brand text (left), about paragraph (center), contact info with address/phone/email (right), copyright bar.

## Gherkin requirements

### Scenario: Header navigation
```gherkin
Given the user is on any page
When the header is rendered
Then the logo "Revelry" is displayed in script font
And navigation links "Home", "About Us", "Menu", "Delivery", "Blog", "Contact" are visible
And a reservation phone number is displayed
And the nav is sticky on scroll
And a hamburger menu appears on mobile viewports
```

### Scenario: Hero section
```gherkin
Given the user loads the page
When the hero section renders
Then a full-width parallax background image is displayed
And the subtitle "The Venue is" appears
And the title "An Extraordinery Experience" appears in script font
And a description paragraph is visible below the title
And a scroll-down icon is centered below the text
```

### Scenario: Introduction section
```gherkin
Given the user scrolls past the hero
When the introduction section enters viewport
Then a section subtitle and title are displayed
And a descriptive paragraph is shown
And two food/venue images appear in a 2-column grid
```

### Scenario: Video CTA section
```gherkin
Given the user scrolls to the video section
When the section renders
Then a full-width parallax background with dark overlay is shown
And a centered play button icon is visible
And a title text is displayed
```

### Scenario: Signature Dish section
```gherkin
Given the user scrolls to the specials area
When the signature dish section renders
Then a subtitle and title "Our Signature Dish" are displayed
And the dish name and description are shown
And a 5-star rating is visible
And an ingredient list (Pork, Tenderloin, Green Pepper, Veggies) is shown
And an "Order Now" button is present
And a food image appears on the right side
```

### Scenario: Menu section
```gherkin
Given the user scrolls to the menu
When the menu section renders
Then star ratings and the title "The Menu" are displayed
And three columns are shown: Starters, Main, Desserts
And each column contains 5 dishes
And each dish shows a title, ingredient tags, price, and "Order Now" button
And the columns have tan section header backgrounds
```

### Scenario: Reservations section
```gherkin
Given the user scrolls to reservations
When the reservation section renders
Then a full-width parallax background with tan overlay is displayed
And star ratings and title "Make a Reservation" are shown
And a form with party-size selector (2-6 persons) is present
And a "Make a Reservation" submit button is visible
```

### Scenario: Footer
```gherkin
Given the user scrolls to the bottom
When the footer renders
Then the logo and brand name "Revelry" are displayed
And an about paragraph is shown in the center column
And contact information (address, phone, email) is in the right column
And a copyright bar with Component Dock link is at the bottom
```

### Scenario: Mobile responsiveness
```gherkin
Given the user views the page on a mobile device
When the viewport is less than 768px wide
Then the navigation collapses to a hamburger menu
And sections stack vertically
And the menu columns stack vertically
And the reservation form is full-width
```

## Verification checklist

- [ ] Header: sticky, nav links, phone, hamburger on mobile
- [ ] Hero: parallax bg, title in script font, scroll icon
- [ ] Intro: 2 images, subtitle, description
- [ ] Video CTA: dark overlay, play icon
- [ ] Signature Dish: rating, ingredients, order button, image
- [ ] Menu: 3 columns × 5 dishes, prices, order buttons
- [ ] Reservations: parallax bg, form, party selector
- [ ] Footer: logo, about, contact, copyright with Component Dock link
- [ ] Design tokens match: PT Sans Narrow, Edward script, #c4ab9f tan, #b49383 brown, #ffa07f salmon, #db5246 red, 7px radius buttons
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile hamburger, stacked columns, full-width form
- [ ] Placeholder images use picsum.photos
