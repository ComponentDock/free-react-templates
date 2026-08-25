# Template: Reedfold (Accordion Component)

## Purpose

Recreation of the ColorLib "Accordion 05" template — a clean, centered account-style accordion component with icon-labeled cards and expandable content panels. Designed for account settings, FAQ, or navigation menus.

- **Source:** https://colorlib.com/wp/template/accordion-05/
- **Preview:** https://preview.colorlib.com/theme/bac/accordion-05/
- **Category:** Component (Accordion)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token                    | Value                                                                                 | Usage                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Font family              | `"Poppins", Arial, sans-serif`                                                        | Body + headings                                                 |
| Font weights             | 300 (light), 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold), 800, 900        | Various                                                         |
| Body font-size           | 15px                                                                                  | Base text                                                       |
| Body line-height         | 1.8                                                                                   | Base text                                                       |
| Body background          | `#fafafa` (light gray)                                                                | Page background                                                 |
| Body text color          | `gray`                                                                                | Default text                                                    |
| Primary/accent color     | `#75d6d1` (teal)                                                                      | Icon backgrounds, card-body background, links, expanded chevron |
| Heading text color       | `#000` (black)                                                                        | h1–h5                                                           |
| Accordion container bg   | `#fff` (white)                                                                        | `.myaccordion`                                                  |
| Accordion box-shadow     | `0px 10px 29px -16px rgba(0,0,0,0.12)`                                                | Subtle drop shadow                                              |
| Accordion border-radius  | `0` (sharp corners)                                                                   | `.myaccordion`                                                  |
| Icon box                 | 60×60px, background `#75d6d1`, icon color `#fff`, font-size 20px                      | `.icon span`                                                    |
| Card header button       | 18px font, color `#000`, border-bottom `1px solid rgba(0,0,0,0.05)`, no border-radius | `.myaccordion .btn`                                             |
| Expanded chevron         | color `#75d6d1` (teal)                                                                | `button[aria-expanded="true"] .fa`                              |
| Collapsed chevron        | color `rgba(0,0,0,0.3)`                                                               | `.myaccordion .fa`                                              |
| Card-body background     | `#75d6d1` (teal)                                                                      | Expanded content area                                           |
| Card-body text color     | `rgba(255,255,255,0.8)` (white 80%)                                                   | Content text                                                    |
| Card-body border         | `1px solid rgba(255,255,255,0.2555)`                                                  | Between list items                                              |
| List item padding        | `15px 30px`                                                                           | `.card-body ul li a`                                            |
| Numbered list span color | `rgba(255,255,255,0.5)` (white 50%)                                                   | `.card-body ul li a p span`                                     |
| List item link color     | `rgba(255,255,255,0.8)`                                                               | `.card-body ul li a p`                                          |
| Heading section          | 28px, color `#000`                                                                    | `.heading-section`                                              |
| Section padding          | `7em 0`                                                                               | `.ftco-section`                                                 |

## Visual Design Notes (from screenshot)

The preview shows a single-column centered layout on a light gray (#fafafa) background. A centered "Accordion #05" heading sits above a white card container with a subtle box-shadow. Each accordion card has a 60×60px teal (#75d6d1) icon square on the left with a white Ionicons icon, a category title (e.g. "Manage", "Location", "Hobbies"), and a chevron arrow on the right. When expanded, the content area turns solid teal with white text — either a numbered list of sub-items (e.g. "01 Account", "02 Settings") or a text paragraph. The overall feel is clean, minimal, and modern with flat styling (no border-radius).

## Gherkin Requirements

### Scenario: Page renders with centered heading

```gherkin
Given the page loads
When the user views the template
Then a centered heading "Accordion #05" is displayed
And the heading has font-size 28px and color black
And the page background is light gray (#fafafa)
```

### Scenario: Accordion container is styled correctly

```gherkin
Given the page loads
When the user views the accordion container
Then it has a white background
And a subtle box-shadow (0px 10px 29px -16px rgba(0,0,0,0.12))
And sharp corners (border-radius: 0)
And is centered within the layout
```

### Scenario: Accordion cards display headers with icons

```gherkin
Given the page loads
When the user views any accordion card header
Then a 60×60px teal (#75d6d1) icon square is displayed on the left
And a category title is displayed next to the icon
And a chevron arrow is displayed on the right
And the header button spans full width
And the header has a subtle bottom border (1px solid rgba(0,0,0,0.05))
```

### Scenario: First accordion card is expanded by default

```gherkin
Given the page loads
When the user views the accordion
Then the first card ("Manage") is expanded
And its content area has a teal (#75d6d1) background
And its chevron icon is teal-colored
And the content shows a numbered list (01 Account, 02 Settings, 03 Profile)
And each list item has a forward arrow icon
```

### Scenario: Clicking a collapsed card expands it

```gherkin
Given the accordion is loaded with the first card expanded
When the user clicks the second card header ("Location")
Then the second card expands with a smooth transition
And the second card's content area shows a paragraph of text
And the second card's chevron becomes teal-colored
And the first card collapses
```

### Scenario: Clicking an expanded card collapses it

```gherkin
Given the first card ("Manage") is expanded
When the user clicks the "Manage" card header
Then the card collapses
And its content area is hidden
And the chevron reverts to gray (rgba(0,0,0,0.3))
```

### Scenario: Card-body list items have correct styling

```gherkin
Given a card with a list (e.g. "Manage" or "Hobbies")
When the card is expanded
Then each list item has white text (80% opacity)
And list items are separated by white border lines (25.5% opacity)
And list items have 15px 30px padding
And the numbered spans are dimmer (50% opacity white)
And forward arrow icons are white (80% opacity)
```

### Scenario: Accordion is single-expand (only one open at a time)

```gherkin
Given two accordion cards are present
When the user opens the first card
And then opens the second card
Then only the second card remains open
And the first card is collapsed
```

### Scenario: Responsive layout

```gherkin
Given the page loads on a mobile device
When the user views the accordion
Then the accordion remains centered
And the icon boxes scale appropriately
And list item text remains readable
And touch targets are at least 44px
```

## Verification Checklist

- [ ] Page loads with centered "Accordion #05" heading (28px, black, font Poppins)
- [ ] Page background is #fafafa (light gray)
- [ ] Accordion container has white bg, box-shadow, sharp corners, centered
- [ ] Each card header shows: 60×60 teal icon box + title + chevron
- [ ] First card ("Manage") is expanded by default with teal content area
- [ ] Expanded content has teal (#75d6d1) background, white text
- [ ] Numbered sub-items show "01 Account", "02 Settings", "03 Profile" with forward arrows
- [ ] Second card ("Location") has a text paragraph in expanded state
- [ ] Third card ("Hobbies") has a list: Playing Basketball, Playing Baseball, Running
- [ ] Clicking a header expands that card and collapses others (single-expand behavior)
- [ ] Chevron changes from gray to teal when expanded
- [ ] List items have correct padding (15px 30px), white borders, numbered spans
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md/PR)
- [ ] public/CNAME contains reedfold.free.componentdock.com
- [ ] package.json homepage is https://reedfold.free.componentdock.com
- [ ] Uses Ionicons (or lucide-react equivalents) for icons
- [ ] Uses picsum.photos for any placeholder images (if applicable)
