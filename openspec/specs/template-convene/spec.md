# Template: Convene (Conference/Event)

## Purpose

Recreation of the ColorLib **Manup** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **ColorLib source:** https://colorlib.com/wp/template/manup/
- **Live preview:** https://preview.colorlib.com/theme/manup/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/manup-free-template.jpg
- **App name:** `convene` (apps/convene, @free-react-templates/convene)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Description:** A conference/event landing page with hero countdown, speaker cards, tabbed schedule, pricing tiers, blog, newsletter, and contact sections. Bold gradient accents on a clean white/dark layout.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/manup/css/style.css`:

### Colors

| Token | Value | Usage |
|---|---|---|
| Brand gradient start | `#ee8425` (orange) | Buttons, accents, gradient overlays |
| Brand gradient end | `#f9488b` (pink) | Buttons, accents, gradient overlays |
| Accent red | `#f44949` | Highlights, tags, price elements |
| Dark bg | `#171822` | Footer, pricing section bg, text headings |
| Text primary | `#171822` | Headings |
| Text muted | `#a0a1b5` / `#6a6b7c` | Body text, descriptions |
| Light bg | `#f4f6f8` | Alternate section backgrounds |
| White | `#ffffff` | Most section backgrounds, text on dark |

### Typography

| Property | Value |
|---|---|
| Font family | `"Work Sans", sans-serif` |
| Heading weight | 700 |
| Body weight | 400–500 |
| Hero heading size | ~45px |
| Section heading size | ~36px |

### Buttons

| Property | Value |
|---|---|
| Shape | Pill (border-radius: 50px) |
| Padding | 12px 40px |
| Font | 16px, weight 600 |
| Color | White text on gradient bg |
| Gradient | `linear-gradient(to right, #ee8425, #f9488b)` |
| Hover | Slightly darker gradient |

### Section backgrounds

| Section | Background |
|---|---|
| Hero | Full-width background image (dark overlay) |
| Counter | Gradient (`bg-gradient` class: `linear-gradient(120deg, #ee8425, #f9488b)`) |
| About | White |
| Team Members | White |
| Schedule | White |
| Pricing | Dark image background (`#171822` base) |
| Blog | White (`#f4f6f8` alt) |
| Newsletter | Dark (`#171822`) |
| Contact | White |
| Footer | Dark (`#171822`) |

## Section Structure (top to bottom)

1. **Navbar** — Logo left, nav links (Home, About, Speakers, Schedule, Blog, Contact), "Buy Ticket" pill button right. Sticky header.
2. **Hero** — Full-width background image, dark overlay, date/venue subtitle, "Change Your Mind" heading, "Buy Ticket" CTA.
3. **Counter** — Gradient background strip, countdown timer (Days, Hours, Minutes, Seconds), "Count Every Second" subheading.
4. **About** — Two-column: left = image, right = "About Conference" heading + body text + "Discover Now" button.
5. **Team/Speakers** — "Who's speaking" heading, 3 member cards in a row. Each: background image, gradient social overlay on hover (Twitter, Facebook, Google+, Instagram), name.
6. **Schedule** — "Our Schedule" heading, tabbed interface (Day 1–5), each tab shows session items with title/time. Tab pills use active gradient.
7. **Pricing** — Dark bg, "Ticket Pricing" heading, 3 pricing cards (1 Day Pass, Full Pass, Group Pass) each with price, "Get Ticket" button.
8. **Blog** — "Latest News" heading, 3 blog cards: image, category tag, title, date, read-more link.
9. **Newsletter** — Dark bg, "Subscribe Newsletter" heading, description, email input + "Subscribe" button (gradient).
10. **Contact** — "Location" heading, address/phone/email/website info, map placeholder (5-day event schedule table).
11. **Footer** — Dark bg, logo, nav links, social icons, copyright with "Component Dock" link.

## Gherkin Requirements

```gherkin
Feature: Convene conference landing page

  Background:
    Given the app is loaded at the root URL

  Scenario: Navbar renders all navigation links
    Then I should see a "Home" link
    And I should see an "About" link
    And I should see a "Speakers" link
    And I should see a "Schedule" link
    And I should see a "Blog" link
    And I should see a "Contact" link
    And I should see a "Buy Ticket" button

  Scenario: Hero section displays event info
    Then I should see a heading with the event tagline
    And I should see a date and venue line
    And I should see a "Buy Ticket" call-to-action button

  Scenario: Countdown timer shows time units
    Then I should see a days counter
    And I should see an hours counter
    And I should see a minutes counter
    And I should see a seconds counter

  Scenario: About section renders content
    Then I should see an "About Conference" heading
    And I should see descriptive body text
    And I should see a "Discover Now" button

  Scenario: Team section shows speaker cards
    Then I should see a "Who's speaking" heading
    And I should see 3 speaker cards
    And each card should show a name

  Scenario: Schedule section has tabbed days
    Then I should see an "Our Schedule" heading
    And I should see tab buttons for Day 1 through Day 5
    And clicking a tab should show that day's sessions

  Scenario: Pricing section shows ticket tiers
    Then I should see a "Ticket Pricing" heading
    And I should see 3 pricing cards
    And each card should show a tier name and price
    And each card should have a "Get Ticket" button

  Scenario: Blog section shows recent posts
    Then I should see a "Latest News" heading
    And I should see 3 blog post cards
    And each card should show a title and date

  Scenario: Newsletter section accepts email signup
    Then I should see a "Subscribe Newsletter" heading
    And I should see an email input field
    And I should see a "Subscribe" button

  Scenario: Contact section shows location info
    Then I should see a "Location" heading
    And I should see an address
    And I should see a phone number
    And I should see an email address

  Scenario: Footer contains navigation and branding
    Then I should see footer navigation links
    And I should see social media icons
    And I should see a link to componentdock.com
```

## Verification Checklist

- [ ] Section order matches original (Hero → Counter → About → Team → Schedule → Pricing → Blog → Newsletter → Contact → Footer)
- [ ] Brand gradient (#ee8425 → #f9488b) used on buttons and accents
- [ ] Work Sans font family applied
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] Dark sections (pricing, newsletter, footer) use #171822
- [ ] Counter section has gradient background
- [ ] Schedule tabs are interactive (Day 1–5)
- [ ] Pricing cards show 3 tiers on dark bg
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Typecheck passes
- [ ] Build succeeds
