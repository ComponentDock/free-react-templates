# Template: Silverleaf (Elderly Care / Senior Living)

## Purpose

Recreation of the ColorLib "Elderly" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template for senior care and elderly living services.

- **Source:** [ColorLib Elderly](https://colorlib.com/wp/template/elderly/)
- **Preview:** https://preview.colorlib.com/theme/elderly/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elderly-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `silverleaf` (apps/silverleaf, @free-react-templates/silverleaf)

## Design Tokens

Extracted from https://preview.colorlib.com/theme/elderly/css/style.css:

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (primary) | `#3c90f7` | Blue — buttons, active nav, checkmarks, feature bar, counter bg, meta icons, custom media text bg |
| Text color | `gray` | Body text default |
| Heading color | `#000` | `.text-black` used on section headings |
| Background (light sections) | `#f8f9fa` | Feature v1 pagination items bg, testimonial border |
| Background (counter/CTA) | `#3c90f7` | `bg-primary` on counter section + about CTA section |
| Footer background | `#f8f9fa` | `.bg-light` on site-footer |
| Font: Body | `"Open Sans", sans-serif` | font-weight: 400, line-height: 1.7 |
| Font: Headings | `"Playfair Display", serif` | h1–h5; font-weight: 700 on hero |
| Button shape | `border-radius: 30px` (pill) | font-size: 12px, text-transform: uppercase, padding: 10px 30px |
| Button primary bg | `#3c90f7` | White text, hover: same color (no change) |
| Button white bg | `#fff` | Text: `#3c90f7`, hover: transparent with white text |
| Button outline-white | transparent | Border + text: white, hover: white bg + blue text |
| Feature icon circle | 80px diameter, `border-radius: 50%`, white bg | Icon centered via transform |
| Avatar circle | 80px, `border-radius: 50%` | Testimonial avatars, box-shadow |
| Service card border | `1px solid rgba(0,0,0,0.05)` | No top border, hover lifts with shadow |
| Hero overlay | `rgba(0,0,0,0.2)` | Dark semi-transparent on background image |
| Section padding | 90px 0 | `.site-section` desktop |
| Counter font size | 60px | White, on primary bg |
| Dropdown border-top | `2px solid #3c90f7` | Navbar dropdown indicator |

## Section Structure (from preview DOM)

Order matches the ColorLib preview 1:1:

1. **Navbar** — Sticky, absolute top. Logo "Silverleaf." (bold). Nav links: Home, Services (dropdown), Testimonials, Blog, About, Contact. Social icon circles (fb, twitter, linkedin).
2. **Hero** — Full viewport (min-height 760px), background image with dark overlay. Heading "Expert Care for the Elderly", subtext, "Get In Touch" primary pill button.
3. **Feature Strip** — 3-column row, each with SVG icon (90px), subheading "Try Our Services", heading, "Learn More" link. Light gray bg `#f8f9fa`, active item white with blue top bar.
4. **Services Grid** — 4-column image cards. Square images with "Special Care" title + description in bordered card.
5. **Statistics Counter** — Full-width primary bg (#3c90f7). 4 counters: Rooms Available (5890), Nurse Staff (530), Senior Living (4029), Happy People (7020). Large white numbers, subtle label color.
6. **About / Why Us** — Split: left text with heading, description, image + checklist (blue checkmarks); right side: media card with blue text bg + image.
7. **Cover / Goals** — Full-width background image overlay. Centered heading "Our Goal is to Make Your Life Better". 3 feature items with white circle icons + titles.
8. **Testimonials** — Light gray bg. 3 testimonial cards: avatar (80px circle), Playfair Display italic quote, author citation.
9. **Other Opportunities** — 2-column media cards with blue text panel + background image. "Learn More" outline-white button.
10. **About CTA** — Primary bg section. Left: illustration image. Right: heading, description, blockquote, "Learn More" white button.
11. **Blog / News** — 3-column blog cards: image, meta bar (date, author, comments with blue icons), title, excerpt.
12. **Footer** — Light bg. 4-col: About + social icons, Quick Links, Helpful Links, Resources. Copyright bar at bottom. Replace Colorlib attribution with Component Dock link.

## Gherkin Requirements

### Feature: Navbar
```
Scenario: Logo renders correctly
  Given the page loads
  Then the logo "Silverleaf." is visible in the navbar
  And the period after "Silverleaf" uses the primary brand color

Scenario: Navigation links are present
  Given the page loads
  Then the navbar contains links: Home, Services, Testimonials, Blog, About, Contact

Scenario: Social icons in navbar
  Given the page loads
  Then social icon links for Facebook, Twitter, and LinkedIn are visible

Scenario: Sticky navbar on scroll
  Given the user scrolls past the hero
  Then the navbar becomes sticky with white background and shadow
  And nav link colors change to black with blue hover
```

### Feature: Hero Section
```
Scenario: Hero displays full viewport
  Given the page loads
  Then the hero section fills at least 760px height
  And a background image is displayed with a dark overlay

Scenario: Hero content
  Given the page loads
  Then the hero heading reads "Expert Care for the Elderly"
  And a subtext paragraph is visible
  And a "Get In Touch" primary pill button is rendered
```

### Feature: Feature Strip
```
Scenario: Three feature items render
  Given the page loads
  Then 3 feature items are displayed in a row
  And each item has an SVG icon, "Try Our Services" subheading, a heading, and a "Learn More" link

Scenario: Active item styling
  Given the page loads
  Then the first feature item has a white background
  And a blue top border accent (3px)
```

### Feature: Services Grid
```
Scenario: Four service cards
  Given the page loads
  Then 4 service cards are displayed in a grid
  And each card has a square image, title "Special Care", and a short description

Scenario: Service card hover
  Given the user hovers over a service card
  Then the card lifts slightly with a subtle shadow
```

### Feature: Statistics Counter
```
Scenario: Counter section displays stats
  Given the page loads
  Then a counter section with primary blue background is visible
  And 4 statistics are displayed: Rooms Available, Nurse Staff, Senior Living, Happy People
  And each statistic shows a large number and a label
```

### Feature: About / Why Us
```
Scenario: About section layout
  Given the page loads
  Then the about section shows a heading "Senior Care Center is for Your Family"
  And a description paragraph
  And an image with a checklist of features (blue checkmarks)
  And a side media card with blue text background and image

Scenario: Checklist items render
  Given the about section loads
  Then the checklist shows 3 items with blue checkmark icons
```

### Feature: Cover / Goals
```
Scenario: Cover section displays
  Given the page loads
  Then a full-width background image overlay section is visible
  And the heading reads "Our Goal is to Make Your Life Better"
  And 3 feature items with white circle icons and "Expert Nursing Staff" labels are shown
```

### Feature: Testimonials
```
Scenario: Three testimonial cards
  Given the page loads
  Then 3 testimonial cards are displayed on a light gray background
  And each card has a circular avatar, italic quote text, and author citation

Scenario: Testimonial typography
  Given a testimonial card renders
  Then the quote uses Playfair Display italic font
  And the author name uses Open Sans
```

### Feature: Other Opportunities
```
Scenario: Two opportunity cards
  Given the page loads
  Then 2 media cards are displayed side by side
  And each has a blue text panel with heading, description, and "Learn More" outline-white button
  And a background image panel
```

### Feature: About CTA
```
Scenario: CTA section displays
  Given the page loads
  Then a primary blue background section is visible
  And an illustration image is shown on the left
  And heading "Senior & Elder Home Care Center" on the right
  And a blockquote "We care for elderly people"
  And a "Learn More" white button
```

### Feature: Blog / News
```
Scenario: Three blog cards
  Given the page loads
  Then 3 blog cards are displayed in a column layout
  And each card has a cover image, meta bar (date, author, comments), title, and excerpt

Scenario: Blog meta icons
  Given a blog card renders
  Then the meta bar shows calendar, user, and comment icons in primary blue
```

### Feature: Footer
```
Scenario: Footer layout
  Given the page loads
  Then a light gray footer is visible with 4 columns: About, Quick Links, Helpful Links, Resources

Scenario: Footer social links
  Given the footer loads
  Then social icon links for Facebook, Twitter, Instagram, and LinkedIn are shown

Scenario: Footer copyright
  Given the footer loads
  Then a copyright line is displayed
  And a "Component Dock" link replaces any external attribution
```

## Verification Checklist

- [ ] All 12 sections render in correct order
- [ ] Navbar is sticky on scroll with correct color transitions
- [ ] Hero fills viewport with dark overlay on background image
- [ ] Feature strip shows 3 items with SVG icons and blue accent
- [ ] Services grid shows 4 cards with hover lift effect
- [ ] Counter section uses primary blue background with 4 stats
- [ ] About section has checklist with blue checkmarks + side media card
- [ ] Cover section has full-width overlay + 3 circle-icon features
- [ ] Testimonials show 3 cards with Playfair Display italic quotes
- [ ] Other Opportunities shows 2 media cards with outline-white buttons
- [ ] About CTA has primary bg, illustration, blockquote, white button
- [ ] Blog shows 3 cards with meta icons in blue
- [ ] Footer has 4 columns, social icons, Component Dock link
- [ ] All design tokens match: #3c90f7 brand, Open Sans body, Playfair Display headings, 30px pill buttons
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/silverleaf-N/W/H
- [ ] Google Fonts loaded via <link> in index.html (Open Sans + Playfair Display)
- [ ] Icons from lucide-react (no icomoon/flaticon)
