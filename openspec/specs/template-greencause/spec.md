# Template: GreenCause (Charity / Nonprofit)

## Purpose

Recreation of ColorLib **Seelife** — a charity/nonprofit website template.

- **Source slug:** `seelife`
- **Preview URL:** https://preview.colorlib.com/theme/seelife/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/seelife-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Charity / Nonprofit

## Design tokens (extracted from ColorLib preview)

| Token                  | Value                                        | Notes                                        |
| ---------------------- | -------------------------------------------- | -------------------------------------------- |
| Primary brand          | `#60bc0f`                                    | Green — buttons, CTA areas, accents           |
| Secondary/CTA          | `#fdbb00`                                    | Yellow/amber — secondary buttons, highlights  |
| Text dark              | `#222222`                                    | Headings, body text                           |
| Text muted             | `#777777`                                    | Subtitles, meta                              |
| Text light             | `#999999`                                    | Light body text                              |
| White                  | `#FFFFFF`                                    | Card backgrounds, text on dark               |
| Body bg                | `#FFFFFF`                                    | Page background                              |
| Light bg               | `#f9fafc`                                    | Section alternating bg                       |
| Light bg 2             | `#f1f1f1`                                    | Card backgrounds                             |
| Footer bg              | `#091b27`                                    | Dark navy footer area                        |
| Footer bottom bg       | `#071721`                                    | Darker navy for copyright row                |
| CTA area bg            | `#60bc0f`                                    | Green CTA section with dark overlay          |
| Button radius          | `0px`                                        | Sharp/square buttons (no rounding)            |
| Rounded button variant | `rounded` class                              | Some buttons use rounded corners             |
| Button bg              | `#60bc0f`                                    | Green primary                                |
| Button hover bg        | `transparent`                                | Outline hover effect                         |
| Yellow button bg       | `#fdbb00`                                    | Secondary action                             |
| Yellow button text     | `#000000`                                    | Black text on yellow                         |
| Body font              | `"Roboto", sans-serif`                       | Main body text                               |
| Heading font           | `"Poppins", sans-serif`                      | Headings, titles, banner                     |
| Section title size     | `36px`, weight `700`                         | Section headings (Poppins)                   |
| Section subtitle color | `#777777`                                    | Muted                                        |
| Banner upper text      | `50px`, uppercase, `#fdbb00`                 | "Give a hand" yellow accent                  |
| Banner heading         | `50px`, bold, white, uppercase               | Main banner headline                         |
| Banner bg              | Dark overlay on image                        | `linear-gradient(rgba(3,1,10,0.5), ...)`      |
| Card box-shadow hover  | `0px 12px 40px rgba(153,153,153,0.2)`       | Subtle lift on hover                         |
| Footer title           | `18px`, Poppins, white, capitalize           | Widget headings                              |
| Footer large title     | `36px`, weight `600`                         | "Our Mission" heading                        |
| Footer text            | white                                        | Body text in footer                          |
| Footer link hover      | `#60bc0f`                                    | Green hover on links                         |

## Section structure (order from live preview)

1. **Header/Navbar** — Absolute positioned over hero. Logo left, nav links right (Home, About, Dropdown submenu items). Hamburger for mobile.
2. **Hero** — Full-width dark-overlay background image. Centered content: yellow accent "Give a hand", white heading "to make the better world", body paragraph, two CTA buttons ("Donate Now" green, "See Causes" yellow).
3. **Causes** — 3-column icon cards: "Give Donation", "Give Inspiration", "Become Volunteer" — each with icon image and description text.
4. **About** — Two-column: left image, right content with heading "We are nonprofit team and work worldwide", two paragraphs, "Learn more" green button.
5. **Featured Causes** — 3-column cards with image, title, description, raised/goal amounts, donor count, green "donate" button. Cards have hover shadow effect.
6. **Upcoming Events** — 2-column event cards: left image with overlay, right content with title, description, countdown timer (days/hours/min/sec), "Learn More" green button.
7. **Team/Volunteers** — 4-column volunteer cards: photo, name, role, description, social icons (Facebook, Twitter, Instagram, Email).
8. **CTA** — Full-width green background with dark overlay: heading "Become a volunteer", body text, yellow rounded "join with us" button.
9. **Stories/Blog** — 3-column story cards: image thumbnail, date + category metadata, title link. Blog-style layout.
10. **Footer** — Dark navy background (4 columns): "Our Mission" text, Quick Links list, Gallery thumbnails (6 small images), Contact Us (address, phone, email). Copyright bar below with social icons.

## Gherkin requirements

```gherkin
Feature: GreenCause charity template

  Scenario: Navbar displays logo and navigation links
    Given I visit the GreenCause page
    Then the header shows a logo linking to Home
    And navigation links include Home, About, and dropdown submenus

  Scenario: Hero section displays headline and CTAs
    Given I visit the GreenCause page
    Then the hero section shows a yellow accent text "Give a hand"
    And a white heading "to make the better world"
    And a body paragraph below the heading
    And a "Donate Now" green CTA button is visible
    And a "See Causes" yellow CTA button is visible

  Scenario: Causes section shows 3 cause icons
    Given I visit the GreenCause page
    Then three cause cards are displayed: Give Donation, Give Inspiration, Become Volunteer
    And each card has an icon image and description text

  Scenario: About section shows nonprofit info
    Given I visit the GreenCause page
    Then the about section shows a heading about nonprofit work
    And an image on the left side
    And descriptive paragraphs on the right
    And a "Learn more" green button

  Scenario: Featured causes show donation progress
    Given I visit the GreenCause page
    Then three featured cause cards are displayed
    And each card shows title, description, raised amount, goal amount
    And each card shows donor count with heart icon
    And each card has a green "donate" button

  Scenario: Events section shows countdown timers
    Given I visit the GreenCause page
    Then two event cards are displayed
    And each event shows an image, title, description
    And each event shows a countdown timer with days, hours, minutes, seconds
    And each event has a "Learn More" button

  Scenario: Team section shows volunteer profiles
    Given I visit the GreenCause page
    Then four volunteer cards are displayed
    And each card shows a photo, name, role, description
    And each card has social media icon links

  Scenario: CTA section prompts volunteer signup
    Given I visit the GreenCause page
    Then a green CTA section shows "Become a volunteer" heading
    And a yellow rounded "join with us" button is visible

  Scenario: Stories section shows blog posts
    Given I visit the GreenCause page
    Then three story cards are displayed
    And each card shows an image, date, category, and title link

  Scenario: Footer displays contact info and links
    Given I visit the GreenCause page
    Then the footer shows a mission statement section
    And quick links (Home, About, Causes, Event, News, Contact)
    And a gallery with thumbnail images
    And contact details (address, phone, email)
    And a copyright bar with social icons
```

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Hero background image with dark overlay applied
- [ ] Green (#60bc0f) primary buttons styled correctly (square, no radius)
- [ ] Yellow (#fdbb00) secondary buttons styled correctly
- [ ] Featured causes cards show raised/goal amounts and donor count
- [ ] Event countdown timers functional
- [ ] Team member social icons render correctly
- [ ] CTA section has green bg with dark overlay
- [ ] Footer dark navy (#091b27) background
- [ ] Footer copyright bar darker (#071721)
- [ ] All placeholder images from picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Responsive layout works (mobile hamburger, stacked columns)
- [ ] 100% test coverage
