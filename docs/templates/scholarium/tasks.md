# Scholarium — Implementation Tasks

Source: ColorLib Unicat (https://colorlib.com/wp/template/unicat/)
Preview: https://preview.colorlib.com/theme/unicat/
New name: scholarium (apps/scholarium)

## Section implementation order

1. Scaffold app from simplest existing app (copy + rename package)
2. Header — TopBar component + Navbar with logo, nav links, search/cart icons
3. HeroSlider — Full-width carousel with 3 slides, search form overlay
4. Features — 4-column icon grid with section heading
5. PopularCourses — Parallax background + 3 course cards
6. CounterRegistration — Left milestones + right form, parallax background
7. Events — 3 event cards with date badges
8. Team — 4 tutor cards with social links, parallax background
9. LatestNews — 7/5 grid: 1 large post + 4 small posts
10. Newsletter — Horizontal form with parallax background
11. Footer — 4-column layout + copyright bar
12. App.tsx — Compose all sections in order
13. Tests — Vitest + Testing Library for each section component
14. Verify — typecheck, lint, 100% coverage, build

## Fidelity notes per section

### Header
- Top bar: dark bg (#232323), phone + email icons (lucide Phone/Mail), "Register or Login" link
- Main nav: white bg, logo "Scholarium" with "ium" in #14bdee, nav links, search + cart icons
- Sticky on scroll (optional — match original behavior)

### HeroSlider
- Full-width background image carousel
- Centered white text: "The Premium System Education" (Roboto Slab, large) + subtitle
- Inline search form: keyword input + 2 selects (category, price) + SEARCH button (#14bdee bg, white text, 3px radius)
- Navigation arrows on left/right sides

### Features
- Section heading "Welcome To Scholarium E-Learning" centered
- 4 cards in a row (lg:3 cols each), each with:
  - Icon (lucide-react replacement for Font Awesome icons)
  - Title (Roboto Slab, #384158)
  - Description text (#76777a)
- Light gray section bg (#f3f3f3) — actually white per CSS

### PopularCourses
- Parallax background image section
- Section heading centered
- 3 course cards: image (picsum), title, teacher name, description, footer with:
  - Student count icon + number
  - Rating icon + number
  - Price (plain or with strikethrough for discount)
- Card: white bg, subtle shadow, 3px radius on elements

### CounterRegistration
- Parallax background image
- Left column: "Register Now" title + description text + 4 milestone counters
  - Animated count-up numbers
  - Labels: years, k, +, etc.
- Right column: Registration form
  - Name input, Phone input, Subject select, Message textarea, Submit button
  - Form inputs have 3px border-radius

### Events
- Section heading "Upcoming Events" centered
- 3 event cards: image, date badge (day large, month small, #14bdee bg), title link, time, location, description

### Team
- Parallax background image
- Section heading "The Best Tutors in Town" centered
- 4 cards: image (picsum), name, specialty, social icons (Facebook, Twitter, Google+ → replace with lucide-react equivalents)

### LatestNews
- Section heading centered
- 7/5 column grid:
  - Large post (col-lg-7): image, title, meta (author + date), excerpt, "read more" link
  - Small posts (col-lg-5): 4 stacked items, each with title + meta

### Newsletter
- Parallax background image
- Horizontal layout: title "sign up for news and offers" + subtitle on left, email input + subscribe button on right
- Button: #14bdee bg, white text

### Footer
- Dark bg (#232323)
- 4 columns:
  1. About: logo, description, social icons
  2. Contact: email, phone, address
  3. Links: Home, About, Contact, Features, Courses, Events, Gallery, FAQs
  4. Mobile: app store badge images (placeholder)
- Copyright bar: "© {year} All rights reserved | Made with ♥ by Component Dock" + componentdock.com link

## Design tokens for Tailwind @theme

```
--color-brand: #14bdee;
--color-heading: #384158;
--color-body: #76777a;
--color-light: #a5a5a5;
--color-dark-bg: #232323;
--color-gray-bg: #f3f3f3;
--color-brown: #937c6f;
--font-heading: 'Roboto Slab', serif;
--font-body: 'Roboto', sans-serif;
--radius-btn: 3px;
```

## Notes

- No ColorLib references anywhere in app code
- Use picsum.photos for all placeholder images (deterministic seeds)
- Lucide-react icons replace Font Awesome (phone, mail, search, cart, graduation-cap, star, clock, map-pin, facebook, twitter, google, instagram, heart)
- Parallax sections: use CSS `background-attachment: fixed` or a lightweight parallax library
- All text content is paraphrased from original but keeps the same kind of content
