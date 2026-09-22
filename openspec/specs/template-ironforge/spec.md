# Template: IronForge (Fitness/Gym)

## Purpose

Recreation of ColorLib **Robust** (https://colorlib.com/wp/template/robust/)
Preview: https://preview.colorlib.com/theme/robust/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

This is a fitness/gym website template with an energetic, high-contrast aesthetic.
Dark hero slider with motivational headlines, class pricing cards, service features,
a weekly schedule grid, trainer profiles, upcoming events, blog teasers, newsletter
subscription, and a dark footer with social links.

## Design Tokens

| Token                | Value                              | Source                    |
|----------------------|------------------------------------|---------------------------|
| Primary brand color  | `#DC2F2F` (red)                   | `.btn-primary`, nav, cards|
| Secondary accent     | `#9870FC` (purple)                | gradient endpoints        |
| Accent gold          | `#F7AF1D`                         | schedule section highlight|
| Gradient             | `linear-gradient(45deg, #DC2F2F 0%, #9870FC 100%)` | CTA buttons, card hovers |
| Dark background      | `#000` / `#25282a`               | hero overlay, footer      |
| Light section bg     | `#f2f3f7`                         | services, schedule, etc.  |
| White bg             | `#fff`                            | page default              |
| Font family          | `"Poppins", Arial, sans-serif`    | global                    |
| Font weights used    | 300, 400, 500, 700, 900          | headings + body           |
| Button border-radius | `100px` (pill shape)              | CTA buttons               |
| Card border-radius   | `4px`                             | intro/trainer cards       |
| Text on dark         | `#fff`, `rgba(255,255,255,0.7)`   | hero, footer              |
| Text on light        | `#000`, `#999999`                 | body, secondary text      |
| Card header bg       | `#DC2F2F`                         | intro-img .desc           |

### Visual Design (from screenshot)

The template has a strong, energetic gym aesthetic:
- Dark full-width hero slider with background photos and dark overlays
- Centered white text headlines with red pill-shaped CTA buttons
- Three intro cards with background images, red bottom bar, price badge
- Light gray (#f2f3f7) alternating section backgrounds
- Circular icon service cards with red accents
- Dark schedule table area
- Trainer cards with red bottom accent
- Dark (#25282a) footer with 4 columns, social icons, recent posts
- Overall feel: bold, high-contrast, fitness-oriented, red + purple gradient accents

## Section Order (top to bottom)

1. **Navbar** — Logo "IronForge" left-aligned, right menu: Home, Classes (dropdown), Schedule, Trainers, Events, Blog, Contact, Cart icon
2. **Hero Slider** — Full-width image slider (4 slides), dark overlay, centered white headline + "Join Classes" red pill CTA
3. **Intro/Class Cards** — 3 equal cards (Body Building, Yoga Program, Aerobics Classes), each with background image, title, description, price ($25/mo)
4. **Services** — Heading "Being fit is attractive" + subtext, 4 icon feature cards (Cardio, Body Building, Karate, Boxing)
5. **Schedule** — Heading "Our Class Schedule", weekly timetable grid showing class types per day/time
6. **Testimonials** — Heading "What People Says" + "Success Stories", testimonial carousel
7. **Trainers** — Heading "Our Experienced Trainers", 3 trainer cards (photo, name, specialty)
8. **Classes** — Heading "Our Classes", 3 class cards (Fitness Gym & Cardio, Strength Training, Yoga Program) with background images
9. **Events** — Heading "Upcoming Events", 3 event cards with images and descriptions
10. **Blog** — Heading "Recent Blog", 3 blog post teasers with images
11. **Newsletter** — Heading "Subscribe Newsletter", email input + "Subscribe Now" red pill button
12. **Footer** — Dark bg (#25282a), 4 columns: About (social icons), Quick Links, Recent Posts, Contact Info + copyright with Component Dock link

## Gherkin Requirements

```gherkin
Feature: IronForge fitness/gym template

  Background:
    Given the user opens the IronForge template

  Scenario: Navbar displays with correct links
    Then the navbar shows logo "IronForge"
    And the navbar has links: Home, Classes, Schedule, Trainers, Events, Blog, Contact
    And a cart icon is visible

  Scenario: Hero slider renders
    Given the hero section is visible
    Then a full-width background image is displayed
    And a dark overlay covers the image
    And a motivational headline is centered in white
    And a "Join Classes" pill button in red is shown

  Scenario: Intro class cards display
    Given the class cards section is visible
    Then 3 class cards are shown: Body Building, Yoga Program, Aerobics Classes
    And each card has a background image
    And each card shows a title, description, and price of $25.00/month

  Scenario: Services section displays feature icons
    Given the services section is visible
    Then the heading "Being fit is attractive" is shown
    And 4 feature cards are displayed: Cardio Program, Body Building, Karate Classes, Boxing Program

  Scenario: Schedule table renders
    Given the schedule section is visible
    Then a weekly class timetable grid is displayed
    And class names appear in their correct time slots

  Scenario: Testimonials carousel shows
    Given the testimonials section is visible
    Then a heading "What People Says" is shown
    And "Success Stories" is displayed
    And testimonial content is navigable

  Scenario: Trainers section displays profiles
    Given the trainers section is visible
    Then 3 trainer cards are shown
    And each card has a photo, name, and specialty

  Scenario: Classes section shows class cards
    Given the classes section is visible
    Then 3 class cards are shown: Fitness Gym & Cardio, Strength Training, Yoga Program
    And each card has a background image and description

  Scenario: Events section shows upcoming events
    Given the events section is visible
    Then the heading "Upcoming Events" is shown
    And 3 event cards are displayed with titles and descriptions

  Scenario: Blog section displays recent posts
    Given the blog section is visible
    Then the heading "Recent Blog" is shown
    And 3 blog post teasers are displayed with images

  Scenario: Newsletter subscription form
    Given the newsletter section is visible
    Then the heading "Subscribe Newsletter" is shown
    And an email input field is present
    And a "Subscribe Now" red pill button is shown

  Scenario: Footer renders all columns
    Given the footer is visible
    Then it has a dark background (#25282a)
    And 4 columns are shown: About, Quick Links, Recent Posts, Contact Info
    And social media icons are present
    And the copyright includes a link to Component Dock
```

## Verification Checklist

- [ ] All 12 sections render in correct order
- [ ] Design tokens match: #DC2F2F primary, #9870FC secondary, #25282a footer, #f2f3f7 light bg
- [ ] Poppins font loads (300, 400, 500, 700, 900)
- [ ] Pill buttons (border-radius: 100px) with red-to-purple gradient
- [ ] Hero slider shows 4 slides with dark overlays
- [ ] Class cards show prices with "/month" suffix
- [ ] Schedule grid is responsive and shows weekly timetable
- [ ] Testimonials carousel is navigable
- [ ] Trainer cards have photos and names
- [ ] Newsletter form has email input + submit button
- [ ] Footer has 4 columns + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] public/CNAME contains `ironforge.free.componentdock.com`
- [ ] package.json homepage matches Surge target
- [ ] 100% test coverage (Vitest + Testing Library)
