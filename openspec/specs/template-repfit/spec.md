# Template: RepFit (Health Fitness)

## Purpose

Recreation of ColorLib **Ponigym** — a bold, dark-accented gym/fitness single-page template.

- **Source slug:** `ponigym`
- **Source URL:** https://colorlib.com/wp/template/ponigym/
- **Preview URL:** https://preview.colorlib.com/theme/ponigym/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ponigym-free-template.jpg
- **Category:** Health Fitness
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens (extracted from preview CSS)

### Colors

| Token               | Hex       | Usage                                      |
|----------------------|-----------|--------------------------------------------|
| brand-primary        | `#f34e3a` | Primary button bg, accent bar, active nav  |
| brand-dark           | `#191919` | Section headings, nav text                 |
| brand-heading        | `#111111` | Global h1–h6 base color                    |
| brand-body           | `#8f8fa8` | Paragraph text (muted gray-purple)         |
| brand-desc           | `#6e6e6e` | Section description text                   |
| brand-light          | `#252525` | Table cell text, schedule text             |
| brand-white          | `#ffffff` | Button text, hero text, CTA text           |
| schedule-gym         | `#9d69d8` | Schedule table "Gym" cell background        |
| schedule-yoga        | `#62b3d3` | Schedule table "Yoga" cell background       |
| schedule-cardio      | `#5acd57` | Schedule table "Cardio" cell background     |
| schedule-running     | `#ed5e4c` | Schedule table "Running" / boxing bg        |
| footer-bg            | `#232530` | Footer section background                  |

### Fonts

| Role     | Family        | Weights Used         |
|----------|---------------|----------------------|
| Body     | Roboto        | 400, 500, 700        |
| Headings | Oswald        | 300, 400, 500, 600, 700 |

### Buttons

- **Primary button** (`.primary-btn`): bg `#f34e3a`, white text, `Oswald` 14px, uppercase, `letter-spacing: 2px`, `padding: 12px 39px`, **no border-radius** (sharp/square edges).
- **Schedule link** (`.schedule-btn`): outlined / text-style with arrow icon.
- **Footer submit**: bg `#f34e3a`, white text, circular play-style icon.

### Section Backgrounds

| Section              | Background                                    |
|-----------------------|-----------------------------------------------|
| Hero                  | Full-bleed background images (carousel)        |
| Services              | White (default)                                |
| CTA                   | Background image (dark overlay feel)           |
| Classes               | White (default)                                |
| Trainer Schedule      | Background image (`trainer-bg.jpg`)            |
| Team                  | White (default)                                |
| Latest News           | White (default)                                |
| Footer (map half)     | Google Maps embed                              |
| Footer (form half)    | Background image (`contact-form-bg.jpg`)       |
| Copyright bar         | Dark (#232530)                                 |

## Section Order (from preview DOM)

1. **Header/Navbar** — Logo left, nav links right (Home, About, Schedule, Portfolio, Blog, Contacts), search icon, transparent over hero.
2. **Hero** — Carousel/slider with 3 slides. Each: background image, subtitle "Elite Personal Training Services", headline "Make it **Shape**" (Shape in brand color), CTA button "Join Us Now".
3. **Services ("Our Program")** — Two-column: left has section title + 4 service cards (Weight Lifting, Body Building, Healthy, Yoga) each with icon + heading + description; right has video thumbnail with play button overlay.
4. **CTA Banner** — Full-width background image, centered headline "Start your Journey with our exciting offers", subtext, "Join With Us" primary button.
5. **Classes ("Our Class")** — Section title + "View All Schedule" button; tabbed class display with 6 tabs (Body Building, Racing Running, Yoga Fitness, Kick Boxing, Cardio Workout, Martial Arts). Each tab: class image left, description + "View Schedule" link right. Below: trainer-author tab thumbnails (6 circular thumbnails with names).
6. **Trainer Schedule** — Background image, section title "Our Trainer", weekly schedule table (Mon–Sun × 10:00 / 14:00 / 16:00 time slots). Cells color-coded by activity type (gym=purple, yoga=blue, cardio=green, running/boxing=red-orange).
7. **Team ("Our Trainer")** — 3 trainer cards in alternating photo-text layout. Each: large photo, specialty tag, name "Martin Alex", description, social icons (Facebook, Twitter, Pinterest, Vimeo).
8. **Latest News ("Latest News")** — 3 blog post cards: image, date + comment count tags, headline link.
9. **Footer** — Two-column: left = Google Maps iframe + address widget; right = contact form ("Request A Call Back") with name/email/subject/message + submit. Below: copyright bar with links (Privacy Policy, Terms Of Service, Careers) + social icons.

## Gherkin Requirements

### Feature: RepFit Gym/Fitness Template

  Scenario: Hero carousel displays with correct content
    Given the user loads the homepage
    Then a hero carousel with at least 3 slides is visible
    And each slide shows the subtitle "Elite Personal Training Services"
    And each slide shows the headline "Make it Shape"
    And a "Join Us Now" button is present on each slide

  Scenario: Services section displays 4 program cards
    Given the user scrolls to the Services section
    Then a section title "Our Program" is visible
    And 4 service cards are displayed: Weight Lifting, Body Building, Healthy, Yoga
    And each card has an icon, heading, and description paragraph
    And a video thumbnail with play button is shown alongside

  Scenario: CTA banner is visible with action
    Given the user scrolls to the CTA section
    Then a headline "Start your Journey with our exciting offers" is visible
    And a "Join With Us" primary button is present

  Scenario: Class section has 6 tabbed classes
    Given the user scrolls to the Classes section
    Then a section title "Our Class" is visible
    And 6 tab buttons are present: Body Building, Racing Running, Yoga Fitness, Kick Boxing, Cardio Workout, Martial Arts
    And clicking a tab shows the corresponding class image and description
    And a "View Schedule" link is present in each tab panel
    And 6 trainer-author thumbnail tabs are shown below

  Scenario: Trainer schedule table displays weekly timetable
    Given the user scrolls to the Trainer Schedule section
    Then a schedule table with columns Mon–Sun is visible
    And rows for time slots 10:00, 14:00, 16:00 are present
    And cells show activity type, time range, and trainer name

  Scenario: Team section shows 3 trainers
    Given the user scrolls to the Team section
    Then 3 trainer cards are displayed
    And each card shows a photo, specialty tag, name, description, and social icons

  Scenario: Latest News shows 3 blog cards
    Given the user scrolls to the Latest News section
    Then 3 blog post cards are visible
    And each card shows an image, date, comment count, and headline link

  Scenario: Footer contains map and contact form
    Given the user scrolls to the footer
    Then a Google Maps embed is visible on the left
    And address and phone details are shown
    And a "Request A Call Back" contact form is on the right
    And the form has fields: Name, Email, Subject, Message
    And a submit button is present
    And a copyright bar with Privacy Policy, Terms Of Service, Careers links is shown
    And social media icon links (Facebook, Twitter, Instagram) are present

  Scenario: Navigation header works
    Given the user loads the homepage
    Then the navbar shows links: Home, About, Schedule, Portfolio, Blog, Contacts
    And a search icon is present
    And the active link (Home) is highlighted in brand color

  Scenario: Design tokens match reference
    Given any section renders
    Then the primary brand color is #f34e3a
    And headings use Oswald font family
    And body text uses Roboto font family
    And primary buttons are square (no border-radius), uppercase, with letter-spacing

## Verification Checklist

- [ ] Hero carousel with 3 slides, correct copy, and CTA
- [ ] Services section with 4 program cards + video thumbnail
- [ ] CTA banner with background image, headline, and button
- [ ] Class section with 6 tabbed classes and trainer-author thumbnails
- [ ] Trainer schedule table with color-coded weekly timetable
- [ ] Team section with 3 trainer cards (photo + text + social)
- [ ] Latest News with 3 blog cards (image + date + headline)
- [ ] Footer: map + address + contact form + copyright + social links
- [ ] Navbar with all links and search icon
- [ ] Brand color #f34e3a used consistently (buttons, accents, active states)
- [ ] Oswald for headings, Roboto for body text
- [ ] Square buttons (no border-radius) with uppercase + letter-spacing
- [ ] Placeholder images via picsum.photos/seed/repfit-*
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME file with repfit.free.componentdock.com
- [ ] Tests at 100% coverage
