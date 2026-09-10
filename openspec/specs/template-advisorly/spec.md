# Template: Advisorly (Consulting / Corporate)

## Purpose

Recreation of the ColorLib "CellOn" template — a light consulting/corporate
landing page.

- **Source:** https://colorlib.com/wp/template/cellon/
- **Preview:** https://preview.colorlib.com/theme/cellon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cellon-free-ligh-consulting-company-template.jpg
- **New name:** advisorly
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview stylesheet (`css/main.css`) on 2026-09-11.

| Token              | Value                         | Notes                                   |
| ------------------ | ----------------------------- | --------------------------------------- |
| Brand color        | `#6cbb23`                     | Bright green — accents, buttons, icons  |
| Brand light        | `#f0f8e9`                     | Light green tint for icon backgrounds   |
| Brand border       | `#a6d477`                     | Contact form input borders              |
| Heading color      | `#222`                        | Dark charcoal for headings              |
| Body text color    | `#777`                        | Medium gray for paragraphs              |
| Dark text          | `#000`                        | Menu items, footer widget headings      |
| Body background    | `#f6f6fc`                     | Very light lavender-gray                |
| Section backgrounds| `#fff`                        | White for about, FAQ, footer            |
| Overlay green      | `rgba(108,187,35,0.85)`       | Green semi-transparent for dark overlays|
| Font family        | `"Poppins", sans-serif`       | Google Fonts (weights 100-600)          |
| Button shape       | `border-radius: 20px` (circle)| Pill-shaped CTA buttons                 |
| Button bg (primary)| `#6cbb23`                     | Green filled                            |
| Button border      | `1px solid transparent`       | Green hover invert                      |
| Light bg           | `#f9f9ff`                     | Button default bg, table bg             |

## Section structure (from preview DOM)

1. **Header** — fixed/absolute top, logo left, nav right (Home, Generic, Elements), hamburger menu icon
2. **Banner/Hero** — fullscreen split: left = hero image, right = headline + subtext + green CTA button
3. **Video section** — background image with green overlay, play button center, headline right-aligned
4. **About section** — white background, split: text left (heading + paragraph + outline button), image right
5. **Features section** — background image + green overlay, 7 feature cards in a 3-column grid, each with icon in light-green square + title + description
6. **FAQ + Stats section** — white background, 4 stat counters left (Projects, New Projects, Tickets, Coffee), 3 FAQ items right
7. **Contact section** — background image + green overlay, centered heading, 2-column form (name, email) + full-width textarea + send button
8. **Footer** — white background, 4-column layout (Top Product, Navigation, Newsletter, Follow Us), bottom bar with copyright

## Gherkin requirements

```gherkin
Feature: Advisorly consulting template
  As a visitor I want a polished consulting company landing page

  Background:
    Given the Advisorly template is loaded at the root URL

  # ── Header ──
  Scenario: Header displays logo and navigation
    Then I see a logo image in the header
    And I see navigation links: "Home", "Generic", "Elements"
    And the header is positioned absolutely at the top of the page

  Scenario: Mobile hamburger menu toggle
    Given the viewport is 768px wide
    Then I see a hamburger menu icon
    When I click the hamburger icon
    Then the navigation menu becomes visible

  # ── Hero / Banner ──
  Scenario: Hero section renders split layout
    Then I see a hero image on the left half
    And I see a headline containing "Success" and "Cactus"
    And I see a subtitle "From the for User interface"
    And I see a green "Get Started" button with a right-arrow icon

  Scenario: Hero CTA button is pill-shaped
    Then the "Get Started" button has rounded pill shape (border-radius ~20px)
    And the button background is the brand green (#6cbb23)

  # ── Video Section ──
  Scenario: Video section shows play button and text
    Then I see a play button icon
    And I see the heading "Being unique is the preference"
    And I see the subtext "Youtube video will appear in popover"
    And the section has a green-tinted overlay background

  # ── About Section ──
  Scenario: About section renders two-column layout
    Then I see a heading "Brief Information About Advisorly"
    And I see a paragraph describing the company
    And I see a "View More" outline button
    And I see an about image on the right column

  # ── Features Section ──
  Scenario: Features section displays 7 feature cards
    Then I see 7 feature cards arranged in a grid
    And each card has an icon, a title, and a description paragraph
    And the icons are displayed inside light-green (#f0f8e9) square backgrounds
    And the section has a green-tinted overlay background

  Scenario: Feature cards have white backgrounds
    Then each feature card has a white (#fff) background
    And each card has 30px padding

  # ── FAQ + Stats Section ──
  Scenario: Stats display four counters
    Then I see 4 stat counters: "5962" Projects Completed, "2394" New Projects, "1439" Tickets Submitted, "933" Cup of Coffee
    And the counter numbers are displayed in brand green (#6cbb23)

  Scenario: FAQ shows three expandable questions
    Then I see 3 FAQ items with headings and answer paragraphs
    And the FAQ headings are uppercase with letter-spacing

  # ── Contact Section ──
  Scenario: Contact form renders on dark background
    Then I see a heading "Send Us Message"
    And I see a form with name input, email input, and textarea
    And the section has a green-tinted overlay background
    And the inputs have light-green borders (#a6d477)
    And I see a "Send Message" button

  Scenario: Contact form inputs are styled
    Then the input placeholders are white text
    And the input backgrounds are transparent
    And the form inputs have 48px line-height

  # ── Footer ──
  Scenario: Footer displays four columns
    Then I see a "Top Product" column with 4 links
    And I see a "Navigation" column with links
    And I see additional footer columns
    And the footer has a bottom bar with copyright text

  Scenario: Footer links have hover effect
    When I hover over a footer link
    Then the link color changes to brand green (#6cbb23)

  # ── General ──
  Scenario: Page uses Poppins font
    Then the page font-family is "Poppins", sans-serif

  Scenario: Page has body shadow wrapper
    Then the body content is wrapped in a container with box-shadow
    And the wrapper has 50px margin on desktop
```

## Verification checklist

- [ ] All 8 sections implemented in order matching preview DOM
- [ ] Split hero layout (image left, text right) at desktop
- [ ] Brand color `#6cbb23` used for accents, buttons, overlays
- [ ] Poppins font loaded from Google Fonts
- [ ] Pill-shaped (circle) CTA buttons
- [ ] 7 feature cards in responsive grid (3-col desktop → stacked mobile)
- [ ] Stats counters display correctly
- [ ] Contact form with name, email, message fields
- [ ] Footer with 4-column layout + Component Dock attribution
- [ ] Green-tinted overlays on video, features, and contact sections
- [ ] Responsive behavior at 768px and 575px breakpoints
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] All Tailwind classes via cn() utility
