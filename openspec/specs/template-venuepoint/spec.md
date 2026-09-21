# Template: VenuePoint (Restaurant / Dining)

## Purpose

Recreation of ColorLib's **Thevenue** restaurant template.
- Source: https://colorlib.com/wp/template/thevenue/
- Preview: https://preview.colorlib.com/theme/thevenue/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens (from preview CSS)

| Token            | Value                       | Notes                             |
|------------------|-----------------------------|-----------------------------------|
| Brand color      | `#b49383` (warm tan/brown)  | Primary accent, buttons, borders  |
| Secondary        | `#c4ab9f` (muted rose-tan)  | Hover state, secondary accent     |
| Light accent     | `#ffa07f` (light salmon)    | Hover underline, highlights       |
| Text primary     | `#232323` (near-black)      | Headings                          |
| Text secondary   | `#636363` (dark gray)       | Body copy                         |
| Text muted       | `#a5a5a5` (medium gray)     | Subtle text                       |
| Background       | `#FFFFFF` (white)           | Main sections                     |
| Alt background   | `#F7F7F7` (off-white)       | Menu section                      |
| Dark overlay     | `rgba(0,0,0,0.85)`          | Menu/mobile overlay               |
| Font heading     | `Edward` (Google Fonts)      | Elegant script/display font       |
| Font body        | `PT Sans Narrow` (sans-serif)| Clean, narrow sans-serif          |
| Button radius    | `7px`                       | Rounded pill shape                |
| Button style     | Outlined (2px border) → filled on hover | Brand color transition |
| Section bg       | Parallax image backgrounds  | Home, video, reservations sections|

## Section Structure (from preview DOM)

1. **Header** — Sticky top bar: logo ("The Venue" + "restaurant" subtitle), nav links (Home, About Us, Menu, Delivery, Blog, Contact), phone reservation number
2. **Home/Hero** — Full-width parallax image background, centered text overlay: subtitle "The Venue is", heading "An Extraordinery Experience", description paragraph, scroll-down icon
3. **Intro** — White background, centered subtitle "Something new", heading "An Extraordinery Experience", description paragraph, two-column image grid (3 col each)
4. **Video Section** — Parallax background image, centered text "Food for the soul", play button icon linking to Vimeo video
5. **Signature Dish** — Two-column layout: left side has subtitle, heading "Our Signature Dish", 5-star rating, dish name, price, ingredient list, "Order Now" button; right side has dish image
6. **The Menu** — Off-white background, "5 Stars" text, 5-star rating, "The Menu" title bar, three equal columns:
   - Starters (5 dishes: title, price, ingredients, order button)
   - Main (5 dishes)
   - Deserts (5 dishes: Lava Cake, Orange Tart, Cheese Cake, Chocolate Mousse, Ice Cream)
7. **Reservations** — Parallax background, centered "Make a Reservation" heading, form with date picker, time picker, party size select (2-6 persons), submit button
8. **Footer** — Dark background, three columns: logo + copyright, about paragraph, contact info (address, phone, email)

## Gherkin Requirements

### Scenario: Header displays navigation and contact
```
Given the user visits the page
When the header renders
Then it shows the restaurant logo
And navigation links: Home, About Us, Menu, Delivery, Blog, Contact
And a reservation phone number
```

### Scenario: Hero section displays parallax background
```
Given the user visits the page
When the hero section renders
Then it shows a full-width parallax background image
And centered heading "An Extraordinery Experience"
And a description paragraph
And a scroll-down indicator
```

### Scenario: Intro section displays two images
```
Given the user scrolls to the intro section
When the intro renders
Then it shows a subtitle "Something new"
And a heading "An Extraordinery Experience"
And a description paragraph
And a two-column image grid
```

### Scenario: Video section shows play button
```
Given the user scrolls to the video section
When the section renders
Then it shows a parallax background
And text "Food for the soul"
And a play button icon
```

### Scenario: Signature dish section shows featured item
```
Given the user scrolls to the signature dish section
When the section renders
Then it shows subtitle "Something new"
And heading "Our Signature Dish"
And a 5-star rating
And dish name, price, ingredient list
And an "Order Now" button
And a dish image on the right
```

### Scenario: Menu section displays three categories
```
Given the user scrolls to the menu section
When the menu renders
Then it shows "The Menu" title
And three columns: Starters, Main, Deserts
And each column contains 5 dishes with title, price, ingredients, and order link
```

### Scenario: Reservation form accepts party details
```
Given the user scrolls to the reservations section
When the reservation form renders
Then it shows a date picker input
And a time picker input
And a party size select (2-6 persons)
And a "Make a Reservation" submit button
```

### Scenario: Footer displays restaurant info
```
Given the user scrolls to the footer
When the footer renders
Then it shows the restaurant logo and subtitle
And a copyright notice
And an about paragraph
And contact details: address, phone, email
And a link to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Header: sticky, logo, nav links, phone number
- [ ] Hero: parallax background, heading, subtitle, description, scroll icon
- [ ] Intro: subtitle, heading, description, two image cards
- [ ] Video: parallax bg, title text, play button
- [ ] Signature Dish: subtitle, heading, rating, dish info, price, ingredients, order button, image
- [ ] Menu: title bar with stars, three columns (Starters/Main/Deserts), 5 dishes each
- [ ] Reservations: parallax bg, form with date/time/party-size, submit button
- [ ] Footer: 3 columns, logo, about, contact, Component Dock link
- [ ] Responsive layout (mobile hamburger menu)
- [ ] Design tokens: brand color #b49383, fonts Edward + PT Sans Narrow
- [ ] Placeholder images via picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
