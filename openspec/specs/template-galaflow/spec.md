# Template: GalaFlow (Concert / Event)

## Purpose

Recreation of ColorLib **Eventro** — a conference/event landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/eventro/
- **Live preview:** https://preview.colorlib.com/theme/eventro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eventro-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `galaflow` (never reuse the source name "eventro")

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand / Primary | `#FDE449` | Bright yellow — buttons, accents, back-top |
| Secondary / Dark | `#302072` | Deep purple — headings, header btn bg, hover, dropdown |
| Text headings | `#302072` | Deep purple — h1-h6 |
| Body text | `#79709D` | Muted purple-gray — paragraphs |
| Link text | `#635c5c` | Gray — anchor base |
| Background (light sections) | `#F6F7FF` | `.section-bg1` — light purple-white |
| Background (blue) | `#0154F7` | `.section-bg2` — bright blue |
| Background (dark) | `#000000` | `.black-bg` |
| Font — Headings | `"Oswald"` | sans-serif, weights 200-700 |
| Font — Body | `"Roboto"` | sans-serif, weights 300-900 |
| Button primary | `#FDE449` bg, `#302072` text | Rounded 5px, Roboto font, animated underline hover |
| Button hover | `#302072` bg with scaleX animation | White text, purple sweep from left |
| Header button | `#302072` bg, `#FDE449` text | Rounded 5px, Roboto, 17px |
| Video button | Transparent, `#fff` border, 5px radius | Play icon + "Watch Video" |
| Scroll-to-top | `#FDE449` circle, 50px | White icon |
| Section title | 60px Oswald, `#302072`, uppercase | With `#FDE449` underline on hover |
| Subtitle span | 20px Oswald, `#140C40`, uppercase | Letter-spacing 0.05em |

## Section Structure (in order)

1. **Navbar** — Transparent header over hero. Logo left, centered nav links (Home, About, Programs, Speakers, Blog dropdown, Contact), "Buy Ticket" button right (`#302072` bg, `#FDE449` text). Sticky on scroll with white bg.
2. **Hero Slider** — Full-viewport slider (2 slides). Each: bg image with dark overlay, date span "12 Jan-20 Jan 2020" in `#FDE449`, large heading "Business Conference" (120px Oswald white), description text, two CTAs: "Join Now" yellow button + "Watch Video" outlined button with play icon. Decorative vertical text "Innovative" rotated -90deg on right edge.
3. **About Conference** — White bg, centered section title "About the Conference" (60px Oswald). Two-column: left has about image, right has "Fully innovative conference" subtitle, description paragraph, two info items (location icon + address, clock icon + time) in flex layout.
4. **The New Era** — White bg, two-column: left has section title "The New Era of Tech Companies", two description paragraphs, "Join Now" button; right has about image.
5. **Subscribe** — Background image (parallax), right-aligned subscribe card: heading "We have top executive & start up here", description, email input + "Subscribe" button.
6. **Program Schedule** — White bg, centered section title "Program Details" with description. Bootstrap tabs (4 tabs: 12 Jan, 13 Jan, 14 Jan, 15 Jan). Each tab: 3 program entries with speaker image, title "Fully innovative conference", description, time, speaker name.
7. **Our Speakers** — Light purple bg (`#F6F7FF`), centered section title "Our Speakers" with description. 4-column grid of 4 speaker cards. Each: portrait image with purple gradient overlay on hover, social icons (Facebook, Twitter, LinkedIn) revealed on hover, name + position below.
8. **Book Your Seat** — Background image with overlay, centered content: heading "Book your seat", description text, "Buy Ticket" yellow button.
9. **Footer** — Dark bg (`#302072`). 3-column: about text + social icons, quick links, newsletter form. Copyright bar at bottom. Component Dock link added per convention.

## Gherkin Requirements

```gherkin
Feature: GalaFlow conference event template

  Background:
    Given the template is loaded at the root URL

  Scenario: Navbar displays correctly
    Then the logo is visible
    And navigation links "Home", "About", "Programs", "Speakers", "Blog", "Contact" are present
    And a "Buy Ticket" button is visible in the header

  Scenario: Hero slider renders
    Then a full-viewport image slider is displayed
    And the date "12 Jan-20 Jan 2020" is visible in yellow
    And the heading "Business Conference" is displayed in large white text
    And a "Join Now" yellow button is present
    And a "Watch Video" outlined button with play icon is present

  Scenario: About Conference section renders
    Then the section title "About the Conference" is visible
    And an about image is displayed on the left
    And the subtitle "Fully innovative conference" is visible
    And location and time info items are shown with icons

  Scenario: The New Era section renders
    Then the section title "The New Era of Tech Companies" is visible
    And description paragraphs are displayed
    And a "Join Now" button is present

  Scenario: Subscribe section renders
    Then a background image with parallax is displayed
    And the heading "We have top executive & start up here" is visible
    And an email input field is present
    And a "Subscribe" button is present

  Scenario: Program Schedule renders with tabs
    Then the section title "Program Details" is visible
    And 4 date tabs are displayed (12 Jan, 13 Jan, 14 Jan, 15 Jan)
    And each tab shows 3 program entries
    And each entry has a speaker image, title, description, time, and speaker name

  Scenario: Speakers section renders
    Then the section title "Our Speakers" is visible
    And 4 speaker cards are displayed in a row
    And each card shows a portrait image and name/position
    And hovering reveals social icons (Facebook, Twitter, LinkedIn)

  Scenario: Book Your Seat section renders
    Then a background image with overlay is displayed
    And the heading "Book your seat" is visible
    And a "Buy Ticket" yellow button is present

  Scenario: Footer renders
    Then a dark purple footer is displayed
    And social media icons are present
    And quick links are listed
    And a newsletter form with email input is present
    And a Component Dock attribution link is present
```

## Verification Checklist

- [ ] All 9 sections render in the correct order
- [ ] Design tokens match: `#FDE449` primary yellow, `#302072` secondary purple, `#79709D` body text
- [ ] Fonts: Oswald for headings, Roboto for body (loaded via Google Fonts)
- [ ] Buttons: `#FDE449` yellow bg with `#302072` text, animated hover sweep
- [ ] Hero: full-viewport slider, 120px heading, yellow date, two CTAs
- [ ] About: two-column with image + info items (location, clock)
- [ ] Program Schedule: tabbed interface with 4 date tabs
- [ ] Speakers: 4-col grid, hover-reveal social icons
- [ ] Footer: dark purple bg, 3-col layout, newsletter form
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `galaflow.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://galaflow.free.componentdock.com`
