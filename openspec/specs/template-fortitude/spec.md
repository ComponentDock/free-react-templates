# Template: Fortitude (Health Fitness)

## Purpose

Recreation of ColorLib **Robust** — a fitness/gym template with dark overlays, motivational hero sliders, and a comprehensive class schedule system.

- **Source slug:** `robust`
- **Source URL:** https://colorlib.com/wp/template/robust/
- **Preview URL:** https://preview.colorlib.com/theme/robust/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/robust-free-template.jpg
- **Category:** Health Fitness
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens (extracted from preview CSS)

### Colors

| Token               | Hex / Value                                         | Usage                                         |
|----------------------|-----------------------------------------------------|-----------------------------------------------|
| brand-primary        | `#DC2F2F`                                           | Primary buttons, active nav, accent color     |
| brand-accent         | `#9870FC`                                           | Cart badge gradient end, secondary accent     |
| brand-gradient       | `linear-gradient(45deg, #DC2F2F 0%, #9870FC 100%)` | CTA pill button background                    |
| brand-dark           | `#000000`                                           | Hero overlays, dropdown bg, hero btn bg       |
| brand-white          | `#FFFFFF`                                           | Logo text, nav text on dark, button text      |
| brand-body           | `gray` (CSS keyword)                                | Default paragraph text                        |
| brand-heading        | `#000000`                                           | Section headings                              |
| brand-nav-muted      | `rgba(255,255,255,0.7)`                             | Nav link text (non-active)                    |
| brand-dropdown-text  | `#999999`                                           | Dropdown link text                            |

### Fonts

| Role     | Family                      | Weights Used      |
|----------|-----------------------------|--------------------|
| Body     | Poppins, Arial, sans-serif  | 300, 400, 500, 700, 900 |
| Icons    | icomoon                     | custom icon font   |

### Buttons

- **Primary button** (`.btn-primary`): bg `#DC2F2F`, white text, rounded corners (Bootstrap default).
- **CTA pill** (`.btn-cta span`): gradient `#DC2F2F → #9870FC`, `border-radius: 100px` (full pill), white icon.
- **Learn More** (`.btn-learn`): text link with arrow icon, no background.
- **Subscribe** button: primary button style, full-width on mobile.

### Section Backgrounds

| Section               | Background                                     |
|------------------------|------------------------------------------------|
| Hero                   | Background images with dark overlay (`rgba(0,0,0,0.3)` default, `0.7` on hover) |
| Intro cards            | White (card images with overlay text)           |
| Services               | White                                          |
| Schedule               | Light gray (`colorlib-light-grey`)              |
| Testimonials           | Background image + dark overlay                 |
| Trainers               | White                                          |
| Classes                | Light gray (`colorlib-light-grey`)              |
| Events                 | White                                          |
| Blog                   | Light gray (`colorlib-light-grey`)              |
| Newsletter             | Background image + dark overlay                 |
| Footer                 | White                                          |
| Copyright              | White                                          |

## Section Order (from preview DOM)

1. **Navbar** — Logo "Fortitude" left, nav links right (Home, Classes [dropdown with sub-items], Schedule, Trainers, Events, Blog, Contact), CTA pill button (cart icon) with gradient.
2. **Hero** — Flexslider with 4 slides. Each: full-bleed background image, dark overlay, centered headline + "Join Classes" primary button (dark bg).
   - Slide 1: "This is a Lifestyle There is no Finish Line"
   - Slide 2: "Don't Stop When it Hurts, Stop When You're Done"
   - Slide 3: "Stop Wishing, Start Doing"
   - Slide 4: "Working Out is a Reward not a Punishment"
3. **Intro Cards** — 3 equal-width image cards: Body Building, Yoga Program, Aerobics Classes. Each: background image, title, short description, price badge ("$25.00 /month").
4. **Services ("Being fit is attractive")** — Centered heading, 4 service cards: Cardio Program, Body Building, Karate Classes, Boxing Program. Each: icon + title + description.
5. **Schedule ("Our Class Schedule")** — Centered heading, 7-day week tab bar (Sun–Sat), 2 rows × 4 class entries. Each entry: icon, time range, class name, trainer name.
6. **Testimonials ("What People Says" / "Success Stories")** — Background image + overlay, carousel with 3 testimonials. Each: quote text, author name (optional "lost X lbs" subtitle), circular author photo.
7. **Trainers ("Our Experienced Trainers")** — Centered heading, 4 trainer cards in a row. Each: trainer photo (background image), name, specialty title.
8. **Classes ("Our Classes")** — Light gray bg, 3 class cards. Each: class image with price overlay ("$25.00 /month"), title, description, "Learn More" link with arrow.
9. **Events ("Upcoming Events")** — 3 event cards. Each: date badge (day + month), organizer info, event title, location with map icon.
10. **Blog ("Recent Blog")** — Light gray bg, 3 blog cards. Each: blog image with date overlay, author, title, excerpt.
11. **Newsletter ("Subscribe Newsletter")** — Background image + overlay, centered heading, email input + "Subscribe Now" button.
12. **Footer** — 4-column: About (description + social icons), Quick Links (check-icon list), Recent Posts (3 mini blog cards), Contact Info (address, phone, email, website).
13. **Copyright** — Centered text, Colorlib attribution → replace with ComponentDock.

## Gherkin Requirements

### Feature: Fortitude Gym/Fitness Template

  Scenario: Hero slider displays 4 motivational slides
    Given the user loads the homepage
    Then a hero slider with at least 4 slides is visible
    And each slide shows a motivational headline
    And a "Join Classes" button is present on each slide

  Scenario: Intro section shows 3 program cards with pricing
    Given the user scrolls to the Intro section
    Then 3 program cards are displayed: Body Building, Yoga Program, Aerobics Classes
    And each card shows a background image, title, description, and price "$25.00 /month"

  Scenario: Services section shows 4 service types
    Given the user scrolls to the Services section
    Then a heading "Being fit is attractive" is visible
    And 4 service cards are shown: Cardio Program, Body Building, Karate Classes, Boxing Program
    And each card has an icon, title, and description

  Scenario: Schedule section has weekly class timetable
    Given the user scrolls to the Schedule section
    Then a heading "Our Class Schedule" is visible
    And a 7-day week tab bar (Sunday–Saturday) is present
    And class entries show icon, time, class name, and trainer name

  Scenario: Testimonials carousel shows success stories
    Given the user scrolls to the Testimonials section
    Then a heading "What People Says" / "Success Stories" is visible
    And a carousel with at least 3 testimonials is displayed
    And each testimonial shows a quote, author name, and circular photo

  Scenario: Trainers section shows 4 trainers
    Given the user scrolls to the Trainers section
    Then a heading "Our Experienced Trainers" is visible
    And 4 trainer cards are displayed with photos and names

  Scenario: Classes section shows 3 class cards with pricing
    Given the user scrolls to the Classes section
    Then 3 class cards are shown: Fitness Gym & Cardio, Strength Training, Yoga Program
    And each card has an image, price overlay, title, description, and "Learn More" link

  Scenario: Events section shows upcoming events
    Given the user scrolls to the Events section
    Then a heading "Upcoming Events" is visible
    And 3 event cards are displayed with date, organizer, title, and location

  Scenario: Blog section shows recent posts
    Given the user scrolls to the Blog section
    Then a heading "Recent Blog" is visible
    And 3 blog cards are displayed with image, date, author, title, and excerpt

  Scenario: Newsletter subscription form works
    Given the user scrolls to the Newsletter section
    Then a heading "Subscribe Newsletter" is visible
    And an email input field is present
    And a "Subscribe Now" button is present

  Scenario: Footer contains 4 widget columns
    Given the user scrolls to the footer
    Then an "About" column with description and social icons is visible
    And a "Quick Links" column with check-icon list is visible
    And a "Recent Post" column with 3 mini blog cards is visible
    And a "Contact Info" column with address, phone, email is visible

  Scenario: Navigation header with dropdown works
    Given the user loads the homepage
    Then the navbar shows links: Home, Classes, Schedule, Trainers, Events, Blog, Contact
    And a CTA pill button with gradient is present
    And the Classes link has a dropdown with sub-items

  Scenario: Design tokens match reference
    Given any section renders
    Then the primary brand color is #DC2F2F
    And the accent color is #9870FC
    And headings use Poppins font family
    And body text uses Poppins font family
    And CTA pill has a red-to-purple gradient with full border-radius

## Verification Checklist

- [ ] Hero slider with 4 slides, correct copy, and "Join Classes" button
- [ ] Intro section with 3 program cards and pricing badges
- [ ] Services section with 4 service cards (icon + title + description)
- [ ] Schedule section with weekly tab bar and class entries
- [ ] Testimonials carousel with 3 success stories
- [ ] Trainers section with 4 trainer cards
- [ ] Classes section with 3 class cards and pricing
- [ ] Events section with 3 event cards
- [ ] Blog section with 3 blog cards
- [ ] Newsletter subscription form with email input + button
- [ ] Footer with 4 widget columns + copyright
- [ ] Navbar with all links, dropdown, and CTA pill
- [ ] Brand colors #DC2F2F and #9870FC used consistently
- [ ] Poppins font for headings and body text
- [ ] Gradient CTA pill (red→purple, border-radius 100px)
- [ ] Dark overlays on hero, testimonials, and newsletter backgrounds
- [ ] Placeholder images via picsum.photos/seed/fortitude-*
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME file with fortitude.free.componentdock.com
- [ ] Tests at 100% coverage
