# Template: Rostrum (Event / Conference)

## Purpose

Recreation of ColorLib **Eventalk** (https://colorlib.com/wp/template/eventalk/)
Preview: https://preview.colorlib.com/theme/eventalk/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
New name: **rostrum** (a speaker's platform — fits the conference/event theme)

## Replication reference

### Live preview DOM (fetched 2026-09-20)

**Section order (HTML):**
1. Navbar — dark bg, brand "Even[span]talk.", nav links: Home, About, Speakers, Schedule, Blog, Contact, "Buy ticket" CTA
2. Hero — full-height parallax background image, overlay, headline "Developer Conference 2019", subtext "December 21-24, 2019. Paris, Italy", countdown timer (days/hours/minutes/seconds)
3. Services — 4-column row on light bg: Venue, Transport, Hotel, Restaurant (icon + heading + description)
4. Counter / Fun Facts — split layout: left image, right side with "Fun Facts" heading + 2×2 stat grid (30 Speakers, 200 Sponsor, 2500 Total Seats, 40 Topics)
5. Speakers — centered heading "Our Speakers", horizontal carousel of speaker cards (image, name, role, social icons)
6. Schedule — centered heading "Event Schedule", tabbed days (Day 01–04), each with session rows (speaker photo, time, title, description, speaker name + role)
7. Testimonials — "Happy Clients" heading, carousel of testimonial cards (avatar with quote icon, testimonial text, name, role)
8. Pricing — "Our Ticket Pricing" heading, 3-column cards (Personal $85, Small Team $200, Family Pack $499), each with feature list + "Buy Ticket" button
9. Blog — "Recent Blog" heading, 3-column cards with date overlay (day + month + year), title, excerpt
10. Newsletter — parallax background, "Subscribe to our Newsletter" heading + description + email input + submit button
11. Gallery — 4-column grid of images with Instagram icon overlay on hover
12. Footer — dark bg, 4-column layout: brand + description + social, Useful Links, Privacy links, Have a Questions (address, phone, email), copyright line

### CSS tokens extracted from style.css

| Token | Value | Usage |
|-------|-------|-------|
| Primary / Brand | `#78d5ef` (sky blue) | Buttons, links, accents |
| Primary hover | `#56caeb` | Button hover state |
| Link hover | `#34c0e7` | Anchor hover |
| Pink accent | `#e83e8c` | Secondary accent (icon-quote, etc.) |
| Subscribe button | `#3847ff` (indigo) | Newsletter submit button |
| Dark bg | Bootstrap `.bg-dark` (`#343a40`) | Navbar, footer |
| Light section bg | `#f8f9fa` (Bootstrap --light) | Services, schedule, pricing sections |
| Body text | `#212529` | Default text color |
| Gray text | `#6c757d` | Muted/caption text |
| White | `#fff` | Card backgrounds, subscribe input bg |
| Button radius | `0` (rectangular) | Bootstrap default (no border-radius on .btn) |
| Subscribe input radius | `5px 0 0 5px` | Left-rounded input |
| Subscribe submit radius | `0 5px 5px 0` | Right-rounded button |
| Card reply radius | `4px` | Small rounded |
| Heading size | `40px` / `font-weight: 700` | Section headings |
| Subheading | `18px` uppercase | Section sub-labels |
| Font family | `"Work Sans", sans-serif` | All text |
| Body font size | `1rem` | Base text |
| Body line-height | `1.5` | Base text |
| Section padding | `7em 0` | .ftco-section |
| Gallery item height | `350px` | .gallery |

### Screenshot visual notes

Preview image: https://colorlib.com/wp/wp-content/uploads/sites/2/eventalk-free-template.jpg
- Dark-themed hero with large parallax photo background
- Clean white/light-gray content sections
- Sky-blue (#78d5ef) brand color on buttons and accents
- Work Sans typeface throughout
- Dark footer matching navbar
- Modern conference/event aesthetic with countdown timer prominent in hero

## Gherkin requirements

### Scenario: Navbar renders correctly
```
Given the user loads the page
Then the navbar displays brand "Rostrum"
And nav links include Home, About, Speakers, Schedule, Blog, Contact
And a "Buy Ticket" CTA button is visible
And the navbar has a dark background
```

### Scenario: Hero section displays event details
```
Given the user loads the page
Then a full-height hero section is visible with a background image
And a headline "Developer Conference 2019" is displayed
And the event date "December 21-24, 2019. Paris, Italy" is shown
And a countdown timer shows days, hours, minutes, seconds
```

### Scenario: Services section shows 4 service cards
```
Given the user scrolls to the services section
Then 4 service items are displayed in a row
And each service has an icon, heading, and description
And the services are Venue, Transport, Hotel, Restaurant
And the section has a light background
```

### Scenario: Fun Facts counter section
```
Given the user scrolls to the counter section
Then a split layout shows an image on the left
And 4 stat cards are displayed: Speakers (30), Sponsor (200), Total Seats (2500), Topics (40)
And each stat card has an icon, number, and label
```

### Scenario: Speakers carousel
```
Given the user scrolls to the speakers section
Then a centered heading "Our Speakers" is visible
And speaker cards are displayed in a carousel
And each speaker card shows a photo, name, role, and social icons
```

### Scenario: Schedule section with day tabs
```
Given the user scrolls to the schedule section
Then a centered heading "Event Schedule" is visible
And day tabs (Day 01 through Day 04) are displayed
And clicking a day tab shows sessions for that day
And each session shows a speaker photo, time, title, description, and speaker info
```

### Scenario: Testimonials carousel
```
Given the user scrolls to the testimonials section
Then a heading "Happy Clients" is displayed
And testimonial cards appear in a carousel
And each card shows an avatar, quote icon, testimonial text, name, and role
```

### Scenario: Pricing section
```
Given the user scrolls to the pricing section
Then a heading "Our Ticket Pricing" is displayed
And 3 pricing cards are shown: Personal ($85), Small Team ($200), Family Pack ($499)
And each card lists features and has a "Buy Ticket" button
```

### Scenario: Blog section
```
Given the user scrolls to the blog section
Then a heading "Recent Blog" is displayed
And 3 blog cards are shown with date overlay, title, and excerpt
```

### Scenario: Newsletter subscription
```
Given the user scrolls to the newsletter section
Then a parallax background is visible
And a heading "Subscribe to our Newsletter" is shown
And an email input and subscribe button are displayed
```

### Scenario: Gallery section
```
Given the user scrolls to the gallery section
Then 4 gallery images are displayed in a grid
And hovering over an image shows an Instagram icon overlay
```

### Scenario: Footer
```
Given the user scrolls to the footer
Then a dark background footer is displayed
And 4 columns are shown: brand description + social links, Useful Links, Privacy links, contact info
And a copyright line is present
And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 12 sections present in correct order
- [ ] Navbar: dark bg, brand, nav links, CTA button
- [ ] Hero: full-height, background image, countdown timer
- [ ] Services: 4 cards with icons
- [ ] Counter: split layout with image + 4 stat cards
- [ ] Speakers: carousel with speaker cards
- [ ] Schedule: tabbed interface, session rows
- [ ] Testimonials: carousel with quote cards
- [ ] Pricing: 3 pricing cards with features
- [ ] Blog: 3 cards with date overlays
- [ ] Newsletter: parallax bg, email form
- [ ] Gallery: 4-col grid with hover overlay
- [ ] Footer: 4 columns, dark bg, Component Dock link
- [ ] Brand color #78d5ef applied consistently
- [ ] Font: Work Sans loaded via Google Fonts
- [ ] Responsive: mobile-friendly layout
- [ ] No ColorLib references in app code
- [ ] public/CNAME = rostrum.free.componentdock.com
- [ ] homepage = https://rostrum.free.componentdock.com
