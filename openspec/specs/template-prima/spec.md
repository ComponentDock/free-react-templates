# Template: Prima (Education)

## Purpose

Recreation of ColorLib "Unica" — a university/education website template.

- **Source slug:** `unica`
- **Preview URL:** https://preview.colorlib.com/theme/unica/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unica-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `prima` (never reuse source name)

## Design Tokens

Extracted from live preview CSS (style.css) and HTML DOM:

| Token | Value | Usage |
|---|---|---|
| Font family | `Rubik`, sans-serif | All text (400, 500, 700 weights) |
| Brand / primary | `#f6783a` (orange) | Buttons, accents, nav active bg, counter icon, course category badges, links |
| Dark background | `#020031` (navy) | Nav bar, counter section, footer background |
| Heading color | `#111111` | h2–h6 |
| Body text | `#636363` | Paragraphs |
| Button border-radius | `50px` (pill) | `.site-btn` |
| Card border-radius | `10px` | Counter icon circle, course/event cards |
| Newsletter bg | `#f7f7f7` | Newsletter section |
| Footer border | `#312f56` | Copyright border-top |
| Footer text | `#b7b7b7` | Copyright paragraph |

### Button Style
- Pill shape (border-radius: 50px), orange background (#f6783a), white text, uppercase, min-width 170px, padding 18px 30px, font-size 14px.

### Visual Design (from screenshot)
- White header bar with logo left, info items (working time + address) with orange clock/pin icons right.
- Dark navy nav bar with white menu items; active item has orange background pill.
- Full-width hero slider with dark image overlay, white text, orange subtitle, orange pill CTA.
- Dark navy countdown bar with white graduation-cap icon in white circle, countdown numbers.
- Light section with 6 service cards (icon + title + description) in 3-column grid.
- Enrollment section (dark overlay bg) with checkmark list.
- Courses section: 3-column card grid with image, category badge, title, read-more link.
- Fact/stats section with background image, 4 stat counters with icons.
- Events section: 3 cards with image, date badge, title, description.
- Gallery section: grid of images.
- Blog section: 3-column card grid with image, title, meta.
- Newsletter section (light gray bg) with email input + orange button.
- Footer: dark navy bg, multi-column links, copyright with border.

## Gherkin Requirements

### Section Order (1:1 with original)

The template MUST render sections in this exact order:
1. Navbar (logo + menu + search/cart icons)
2. Hero (slider with CTA)
3. Counter (next course countdown)
4. Services (6 items)
5. Enroll (checklist + CTA)
6. Courses (3 cards)
7. Facts (4 stat counters)
8. Events (3 cards)
9. Gallery (image grid)
10. Blog (3 cards)
11. Newsletter (email input)
12. Footer (multi-column + copyright)

### Scenarios

#### Navbar
- GIVEN the page loads, WHEN I look at the top, THEN I see a logo on the left and info items (working time, address) on the right.
- GIVEN the page loads, WHEN I look below the header, THEN I see a dark navy bar with navigation links and search/cart icons.
- GIVEN the navbar is visible, WHEN I click a nav link, THEN it navigates to the correct section.
- GIVEN the navbar is visible on mobile, WHEN I click the hamburger icon, THEN the mobile menu opens.

#### Hero
- GIVEN the page loads, WHEN I see the hero, THEN I see a full-width background image with text overlay.
- GIVEN the hero is visible, WHEN I read the content, THEN I see an orange subtitle ("Award Winning University"), a large white heading, body text, and an orange pill "GET STARTED" button.
- GIVEN the hero is visible, WHEN I look at the bottom, THEN I see slider dots for navigation.

#### Counter
- GIVEN the page loads, WHEN I scroll to the counter section, THEN I see a dark navy bar with a graduation-cap icon, next course info, and a countdown timer (days, hours, minutes, seconds).

#### Services
- GIVEN the page loads, WHEN I scroll to services, THEN I see a centered section title "OUR SERVICES" and 6 service cards in a 3-column grid.
- GIVEN I see a service card, WHEN I look at it, THEN I see an icon, a title, and a description paragraph.

#### Enroll
- GIVEN the page loads, WHEN I scroll to the enroll section, THEN I see a list of enrollment benefits with checkmark icons and a CTA button.

#### Courses
- GIVEN the page loads, WHEN I scroll to courses, THEN I see 3 course cards in a row.
- GIVEN I see a course card, WHEN I look at it, THEN I see a thumbnail image with an orange category badge, a title, and a read-more link.

#### Facts
- GIVEN the page loads, WHEN I scroll to facts, THEN I see a background image section with 4 stat counters, each showing an icon, a large number, and a label.

#### Events
- GIVEN the page loads, WHEN I scroll to events, THEN I see 3 event cards.
- GIVEN I see an event card, WHEN I look at it, THEN I see a thumbnail image with a date badge, a title, a description, and a read-more link.

#### Gallery
- GIVEN the page loads, WHEN I scroll to the gallery, THEN I see a grid of images that can be enlarged via popup.

#### Blog
- GIVEN the page loads, WHEN I scroll to blog, THEN I see 3 blog cards.
- GIVEN I see a blog card, WHEN I look at it, THEN I see a thumbnail image, a title, and meta info.

#### Newsletter
- GIVEN the page loads, WHEN I scroll to newsletter, THEN I see a light gray section with a centered title, description, and an email input with an orange submit button.

#### Footer
- GIVEN the page loads, WHEN I scroll to the footer, THEN I see a dark navy background with multi-column link sections and a copyright line with a border.
- GIVEN the footer is visible, WHEN I read the copyright, THEN it includes a link to Component Dock.

## Verification Checklist

- [ ] All 12 sections present in correct order
- [ ] Font: Rubik loaded via Google Fonts
- [ ] Brand color #f6783a used for buttons, accents, active nav, badges
- [ ] Dark navy #020031 used for nav bar, counter section, footer
- [ ] Buttons are pill-shaped (border-radius: 50px)
- [ ] Hero has background image + text overlay + CTA
- [ ] Counter shows countdown timer
- [ ] Services: 6 cards in 3-column grid with icons
- [ ] Courses: 3 cards with category badges
- [ ] Facts: 4 stat counters with background image
- [ ] Events: 3 cards with date badges
- [ ] Gallery: image grid with popup
- [ ] Blog: 3 cards with meta
- [ ] Newsletter: email input + orange button
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Footer component from packages/ui used
- [ ] Placeholder images via picsum.photos
