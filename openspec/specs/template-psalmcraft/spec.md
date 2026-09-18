# Template: PsalmCraft (Nonprofit / Church)

## Purpose

Recreation of ColorLib **Libchurch** as a React 19 + Vite + Tailwind 4 + TypeScript template.
- **Source:** https://colorlib.com/wp/template/libchurch/
- **Preview:** https://preview.colorlib.com/theme/libchurch/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/libchurch-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Notes:** Preview DOM successfully fetched and analyzed. CSS tokens extracted from `css/style.css`.

## Design tokens

Extracted from the live preview CSS (`https://preview.colorlib.com/theme/libchurch/css/style.css`).

| Token | Value | Usage |
|-------|-------|-------|
| Brand red | `#dd3e3e` | Primary buttons, event banner bg, newsletter bg, accents |
| Dark maroon | `#3c1919` | Top nav bar, footer background |
| Dark charcoal | `#252525` | Heading text, event date badge bg, body headings |
| Body gray | `#636363` | Paragraph text |
| Light gray bg | `#f6f8f9` | Services section, sermon section backgrounds |
| Blog gray bg | `#f7f8f8` | Blog section background |
| White | `#fff` | Main content background, button text |
| Heading font | `"Lora", serif` | All headings (h1–h5) |
| Body font | `"Open Sans", sans-serif` | Paragraphs, nav, buttons |
| Button radius | `2px` | All `.site-btn` |
| Button padding | `14px 23px` | Standard button; wide variant `14px 35px` |
| Button style | `font-weight: 700; text-transform: uppercase; font-size: 14px;` | All buttons |
| Line button | `transparent bg; 2px solid #dd3e3e` | Ghost/outline variant |
| Light line button | `transparent bg; 2px solid #fff` | White outline variant on dark backgrounds |

## Section structure (in order)

1. **TopNavBar** — Dark maroon (`#3c1919`) background. Social media icons left, donation counter items center, search/input right. Hidden on mobile (`hidden-xs`).
2. **Header/Navbar** — White background. Logo left, horizontal nav links (Home, About Us, Sermons, Event, Blog, Contact), "Donate Now" button (`.site-btn`) right. Mobile hamburger via `nav-switch`.
3. **Hero** — Full-width background image with dark overlay. Centered content: large heading (70px, white, Lora), subtext (18px, white, Open Sans), "Join With Us" CTA button. Height 800px.
4. **EventBanner** — Red (`#dd3e3e`) background strip. Left side: event info (title, time, location). Right side: countdown timer (days, hours, minutes, seconds) with dark charcoal badge cells. "Read More" button. Parallax background image.
5. **About** — Split layout (text left, image right) with `spad` padding. Heading "Let's Make the World Better Together", paragraph description, "Join With Us" CTA button.
6. **Services** — Light gray (`#f6f8f9`) background. 3-column grid. Each card: circular icon, title ("Our Values", "Our Vision", "Our Mission"), description, "Read More" link.
7. **Sermon** — Split layout. Left: parallax background image with icon links (share, audio, video). Right: sermon content card with heading, sermon title, speaker name, categories, date, description text.
8. **EventList** — Heading "Upcoming Events". List of event items, each with: date badge (day + month in colored blocks), thumbnail image, event title, speaker, time, location, description.
9. **Donate** — Parallax background image with dark overlay. Heading, sermon/donation info, circular progress bar (60%), donation amounts (raised vs goal), CTA button.
10. **Blog** — Light gray (`#f7f8f8`) background. Heading "Latest News". Grid of blog cards: thumbnail, date, title, author, category.
11. **Newsletter** — Red (`#dd3e3e`) background. Centered heading, description, email input field + "Subscribe" button.
12. **FooterTop** — Split layout: left side has contact info (address, email, phone), right side has embedded map area.
13. **Footer** — Dark maroon (`#3c1919`) background. Copyright text left, social media icon links right.

## Gherkin requirements

### TopNavBar

```gherkin
Feature: Top navigation bar

  Scenario: Social links are displayed
    Given the page loads
    Then the top nav bar shows social media icon links

  Scenario: Donation counter items visible on desktop
    Given the viewport width is >= 768px
    Then the top nav bar shows counter items with donation statistics

  Scenario: Top nav hidden on mobile
    Given the viewport width is < 768px
    Then the top nav bar is hidden
```

### Header/Navbar

```gherkin
Feature: Main navigation

  Scenario: Logo and nav links visible
    Given the page loads
    Then a logo and 6 nav links are displayed (Home, About Us, Sermons, Event, Blog, Contact)

  Scenario: Donate button visible
    Given the page loads
    Then a "Donate Now" button is visible in the header

  Scenario: Mobile hamburger menu
    Given the viewport width is < 992px
    Then a hamburger toggle is displayed
    When the user clicks the hamburger
    Then the nav menu expands
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Hero content displayed
    Given the page loads
    Then a heading, subtext, and CTA button are centered over a background image

  Scenario: CTA button navigates
    Given the user clicks "Join With Us"
    Then the page scrolls to the about section
```

### EventBanner

```gherkin
Feature: Event banner with countdown

  Scenario: Countdown timer displays
    Given the page loads
    Then a countdown timer shows days, hours, minutes, and seconds

  Scenario: Event details shown
    Given the page loads
    Then the event title, time, and location are displayed
```

### About

```gherkin
Feature: About section

  Scenario: About content visible
    Given the page loads
    Then a heading, two paragraphs, and a CTA button are displayed
    And an image is displayed beside the text
```

### Services

```gherkin
Feature: Services / Values section

  Scenario: Three service cards displayed
    Given the page loads
    Then 3 service cards are shown in a row
    And each card has an icon, title, description, and read-more link
```

### Sermon

```gherkin
Feature: Sermon section

  Scenario: Sermon content displayed
    Given the page loads
    Then a sermon title, speaker, categories, date, and description are shown
    And share icon links are visible
```

### EventList

```gherkin
Feature: Upcoming events list

  Scenario: Event items rendered
    Given the page loads
    Then 2 event items are displayed
    And each item shows a date badge, thumbnail, title, speaker, time, location, and description
```

### Donate

```gherkin
Feature: Donation section

  Scenario: Progress bar visible
    Given the page loads
    Then a circular progress indicator shows the percentage raised
    And raised amount and goal amount are displayed

  Scenario: CTA button present
    Given the page loads
    Then a donation CTA button is displayed
```

### Blog

```gherkin
Feature: Blog / Latest News section

  Scenario: Blog cards displayed
    Given the page loads
    Then 3 blog cards are shown
    And each card has a thumbnail, date, title, author, and category
```

### Newsletter

```gherkin
Feature: Newsletter subscription

  Scenario: Email input visible
    Given the page loads
    Then an email input and subscribe button are displayed

  Scenario: Subscribe button clickable
    Given the user enters an email and clicks subscribe
    Then the form submits (no validation enforcement in original)
```

### Footer

```gherkin
Feature: Footer

  Scenario: Contact information displayed
    Given the page loads
    Then the footer top section shows address, email, and phone

  Scenario: Copyright and social links
    Given the page loads
    Then the footer bottom shows copyright text and social media icon links
    And a "Component Dock" attribution link is present
```

## Verification checklist

- [ ] All 13 sections rendered in correct order
- [ ] Top nav bar: dark maroon bg, social icons, counter items, hidden on mobile
- [ ] Header: logo, 6 nav links, "Donate Now" button
- [ ] Hero: full-width bg image, centered heading (Lora 70px white), subtext, CTA
- [ ] Event banner: red bg, countdown timer, event details
- [ ] About: split layout, heading, paragraphs, CTA, image
- [ ] Services: light gray bg, 3-column cards with icons
- [ ] Sermon: split layout, parallax image, sermon details, icon links
- [ ] Event list: heading, 2 event items with date badges
- [ ] Donate: parallax bg, progress bar, donation amounts
- [ ] Blog: light gray bg, 3 blog cards
- [ ] Newsletter: red bg, email input, subscribe button
- [ ] Footer top: contact info, map placeholder
- [ ] Footer bottom: dark maroon bg, copyright, social links, Component Dock link
- [ ] Brand color (#dd3e3e) used consistently for buttons, event banner, newsletter
- [ ] Fonts: Lora (headings), Open Sans (body)
- [ ] Buttons: 2px radius, 14px 23px padding, uppercase, weight 700
- [ ] Responsive: mobile hamburger, stacked columns on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
