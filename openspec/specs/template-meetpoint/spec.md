# Template: Meetpoint (Events / Conference)

## Purpose

Recreation of ColorLib's "Agenda" template — a single-page events/conference
website with countdown hero, featured events grid, next events cards, regional
events slider, partners bar, newsletter subscribe, and footer.

- **Source slug:** agenda
- **ColorLib page:** https://colorlib.com/wp/template/agenda/
- **Live preview:** https://preview.colorlib.com/theme/agenda/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens (extracted from preview stylesheet)

| Token | Value | Notes |
|---|---|---|
| Font family | Calibri, sans-serif | Body & headings; use system sans-serif fallback |
| Body text color | #2f2f2f | Near-black |
| Primary brand (purple) | #9a24c1 | Button borders, accents |
| Gradient start | #AA00FF | Purple (top of gradient) |
| Gradient end | #581687 | Dark purple (bottom of gradient) |
| Gradient background | linear-gradient(270deg, #AA00FF, #581687) | Hero buttons, newsletter submit, accents |
| Dark button bg | #231e23 | Near-black, white text |
| Button border-radius | 50px | Pill-shaped buttons |
| Button padding | 18px 46px | Primary CTA buttons |
| Section bg (next events) | white | Clean white card section |
| Rating badge bg | #9a28d7 | Purple badge on event cards |
| Header bar bg | transparent (over hero) | Absolute positioned over slider |
| Footer bg | white | Simple footer with social icons |

## Visual Design (from screenshot)

The original ColorLib "Agenda" preview shows:
- Dark purple/violet gradient as primary brand treatment
- Full-width hero slider with countdown timer (days/hours/min/sec)
- Featured events laid out in a masonry-style grid (3 featured + 4 half-size + 4 more)
- "Our next events" section: 3-column card grid with ratings, dates, "Buy Tickets" links
- Regional events: horizontal Swiper slider with overlay "+" links
- Partner logos bar in a row
- Newsletter subscription form with gradient submit button
- Simple footer with logo, nav links, social icons, copyright

## Section Structure (top → bottom)

1. **Navbar** — Logo left, nav links center (Home, About us, Events, News, Contact), "Buy Tickets" gradient button right. Transparent bg, absolute over hero.
2. **Hero Slider** — Swiper slider with 3 slides. Each slide: background image, countdown timer (Days/Hours/Minutes/Seconds), headline "We have the best events. Get your ticket now!", CTA "Order here" gradient button. Prev/next arrow navigation.
3. **Homepage Info** — Logo left, heading "What is Agenda and why choose our services?", description paragraph, two buttons: "Read More" (gradient) and "Register Now" (dark).
4. **Featured Events** — Masonry-style grid. 3 featured cards (image + title + date) spanning rows, 4 half-width image cards, 4 more featured cards. No border, image-driven.
5. **Next Events** — Section header "Our next events" + description. 3-column grid of event cards: image with rating badge (purple circle), title, date (day + span), short description, "Buy Tickets" link.
6. **Regional Events** — "Events in New York" heading + location dropdown. Horizontal Swiper slider of event cards: image with "+" overlay link, title, date. Partners row below.
7. **Newsletter Subscribe** — Heading "Subscribe to our newsletter to get the latest trends & news", subtext "Join our database NOW!", form with Name input, Email input, gradient Submit button.
8. **Footer** — Logo, nav links row (Home, About us, Events, News, Contact), copyright, social icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter).

## Gherkin Requirements

### Scenario: Navbar renders correctly
```gherkin
Given the page loads
Then the navbar displays the site logo
And the navbar shows navigation links: Home, About us, Events, News, Contact
And a "Buy Tickets" button is visible on desktop
And the navbar is transparent and positioned over the hero
```

### Scenario: Hero slider with countdown
```gherkin
Given the page loads
Then a full-width hero slider is displayed
And the slider shows a countdown with Days, Hours, Minutes, Seconds
And the hero displays the headline "We have the best events"
And an "Order here" CTA button is visible
And previous/next arrows allow slide navigation
```

### Scenario: Homepage info section
```gherkin
Given the page loads
Then an info section displays the logo on the left
And a heading "What is Meetpoint and why choose our services?" is shown
And a descriptive paragraph is displayed
And "Read More" (gradient) and "Register Now" (dark) buttons appear
```

### Scenario: Featured events grid
```gherkin
Given the page loads
Then a featured events grid is displayed
And featured events show an image, title, and date
And half-width image cards are included in the grid
```

### Scenario: Next events cards
```gherkin
Given the page loads
Then a "Our next events" section is displayed with a heading and description
And 3 event cards are shown in a row
Each card has an image with a purple rating badge
And each card shows a title, date, description, and "Buy Tickets" link
```

### Scenario: Regional events slider
```gherkin
Given the page loads
Then a regional events section shows "Events in [City]"
And a location dropdown allows city selection
And a horizontal slider displays event cards with images
And each card has an overlay "+" link and a date
And partner logos are displayed below the slider
```

### Scenario: Newsletter subscription
```gherkin
Given the page loads
Then a newsletter section is displayed
And a heading invites users to subscribe
And a form shows Name input, Email input, and a gradient Submit button
```

### Scenario: Footer
```gherkin
Given the page loads
Then the footer displays the site logo
And navigation links are shown (Home, About us, Events, News, Contact)
And copyright text is displayed
And social media icon links (Pinterest, LinkedIn, Instagram, Facebook, Twitter) are present
And a "Component Dock" link is present
```

## Verification Checklist

- [ ] All 8 sections render in correct order matching the original
- [ ] Hero countdown timer functions with Days/Hours/Minutes/Seconds
- [ ] Hero slider cycles through slides with prev/next navigation
- [ ] Gradient buttons use the purple gradient (#AA00FF → #581687)
- [ ] Dark buttons use #231e23 background with white text
- [ ] Event cards display rating badges in purple circles
- [ ] Regional events slider scrolls horizontally
- [ ] Location dropdown filters/changes displayed city
- [ ] Newsletter form has Name, Email, and Submit inputs
- [ ] Footer links to Component Dock (no ColorLib reference)
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] Placeholder images from picsum.photos (deterministic seeds)
- [ ] No ColorLib references in app code
- [ ] CNAME: meetpoint.free.componentdock.com
- [ ] Homepage: https://meetpoint.free.componentdock.com
