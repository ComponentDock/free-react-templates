# Template: IronWatch (Security & IT Services)

## Purpose

Recreation of the ColorLib **Security** template as a single-page React 19 +
Vite + Tailwind 4 + TypeScript application. Deploys to
`https://ironwatch.free.componentdock.com`.

- **Source:** https://colorlib.com/wp/template/security/
- **Preview analyzed:** https://preview.colorlib.com/theme/security/
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/security-free-template.jpg

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| brand-primary | `#fab700` (golden amber) | Primary buttons, facts bar background, accent text, icon backgrounds on hover |
| brand-secondary-cyan | `#4cd3e3` | Icon color for "Professional Service" and "Great Support" features |
| brand-secondary-blue | `` | Icon color for "Expert Technicians" and "Technical Skills" features |
| brand-secondary-yellow | `#f4e700` | Icon color for "Highly Recommended" feature |
| brand-secondary-red | `#f44a40` | Icon color for "Positive Reviews" feature |
| text-dark | `#222222` | Headings, nav links, body text |
| text-muted | `#777777` | Subtitles, descriptions |
| surface-white | `#fff` | Section backgrounds |
| surface-light | `#f9f9ff` | Alternate section backgrounds (very light lavender) |
| footer-bg | `#04091e` | Dark navy footer background |
| banner-overlay | `rgba(0,0,0,0.7)` | Dark overlay on hero banner background image |
| font-family | `"Poppins", sans-serif` | All text (Google Fonts) |
| primary-btn-radius | `0px` (sharp square) | CTA buttons — no border-radius, sharp edges |
| primary-btn-bg | `#fab700` | Button fill |
| primary-btn-text | `#fff` | Button label |
| primary-btn-height | `42px line-height` | Button vertical sizing |
| primary-btn-padding | `0 40px` | Horizontal padding |
| border-radius-input | `3px` | Newsletter input |
| border-radius-pill | `20px` | Newsletter submit button |

## Section structure (from live preview DOM — order is 1:1)

1. **Header** — Two-tier header: top bar (social icons left, phone + register/login right), then logo + main nav (Home, About, Services, Team, Price, Blog, Contact, Pages dropdown). Sticky on scroll.
2. **Banner/Hero** — Full-viewport height, background image with dark overlay (rgba(0,0,0,0.7)). Left-aligned content: subtitle ("Opening on..."), headline ("Exhibition on Modern Era"), description paragraph, CTA button "Get Started".
3. **Services** — "Our Offered Services" — 3 service cards in a row, each with image thumbnail, title link, and description paragraph.
4. **Features** — "Some Features that Made us Unique" — 2x3 grid of feature items, each with a colored icon (Linearicons), title, and short description.
5. **Facts/Counter** — Full-width amber (#fab700) background strip with 5 counter stat columns (number + label).
6. **Gallery** — "Latest From Our Gallery" — 7 images in a masonry-style grid (7/5 col, 4/4/4 col, 5/7 col rows).
7. **Blog** — "Latest From Our Blog" — 4 blog cards in a row, each with thumbnail image, date, title, excerpt, and meta (likes + comments).
8. **Footer** — Dark navy (#04091e) background, 3 columns: About Us (text + copyright), Newsletter (email input + submit), Follow Us (social icons).

## Gherkin requirements

### Feature: Header

```gherkin
Scenario: Header displays top bar with social icons and contact info
  Given I visit the IronWatch homepage
  Then I see social media icon links (Facebook, Twitter, Dribbble, Behance) in the top bar
  And I see a phone number link in the top bar
  And I see a "Register / Login" link in the top bar

Scenario: Header navigation shows all menu items
  Given I visit the IronWatch homepage
  Then the main navigation shows: Home, About, Services, Team, Price, Blog, Contact
  And there is a "Pages" dropdown with sub-items
```

### Feature: Banner / Hero

```gherkin
Scenario: Hero banner displays headline and CTA
  Given I visit the IronWatch homepage
  Then I see a full-viewport hero section with a dark overlay
  And I see a subtitle with an opening date
  And I see a main headline
  And I see a description paragraph
  And I see a "Get Started" primary CTA button in golden amber (#fab700)

Scenario: Hero button is styled as a square-edged primary button
  Given the hero section is visible
  Then the "Get Started" button has no border-radius (sharp square corners)
  And the button background is #fab700
  And the button text is white
```

### Feature: Services

```gherkin
Scenario: Services section displays 3 service cards
  Given I scroll to the Services section
  Then I see the heading "Our Offered Services"
  And I see 3 service cards in a single row
  And each card has an image thumbnail, a linked title, and a description

Scenario: Service cards are clickable
  Given I see a service card
  When I click the card title link
  Then nothing navigates away (placeholder link)
```

### Feature: Features

```gherkin
Scenario: Features section displays 6 items in a 2x3 grid
  Given I scroll to the Features section
  Then I see the heading "Some Features that Made us Unique"
  And I see 6 feature items arranged in a 2-row, 3-column grid
  And each feature has a colored icon, title, and description

Scenario: Feature icons use distinct brand colors
  Given I view the feature items
  Then each feature icon uses a different color from the brand palette
```

### Feature: Facts Counter

```gherkin
Scenario: Facts bar displays 5 statistics on amber background
  Given I scroll to the Facts section
  Then I see a full-width amber (#fab700) background
  And I see 5 stat columns: Projects Completed, Happy Clients, Tasks Completed, Cups of Coffee, In House Professionals
  And each stat shows a number and a label

Scenario: Counter numbers are animated
  Given the Facts section enters the viewport
  Then the numbers animate from 0 to their target values
```

### Feature: Gallery

```gherkin
Scenario: Gallery displays 7 images in masonry grid
  Given I scroll to the Gallery section
  Then I see the heading "Latest From Our Gallery"
  And I see 7 gallery images arranged in 3 rows: 2 images, 3 images, 2 images

Scenario: Gallery images are clickable lightbox triggers
  Given I see a gallery image
  When I click the image
  Then it opens in a lightbox overlay (Magnific Popup style)
```

### Feature: Blog

```gherkin
Scenario: Blog section displays 4 blog cards
  Given I scroll to the Blog section
  Then I see the heading "Latest From Our Blog"
  And I see 4 blog cards in a single row
  And each card has a thumbnail image, date, title, excerpt, and meta (likes + comments)

Scenario: Blog cards show date and engagement metrics
  Given I view a blog card
  Then I see a date in "DD Mon YYYY" format
  And I see a heart icon with a like count
  And I see a bubble icon with a comment count
```

### Feature: Footer

```gherkin
Scenario: Footer has 3 columns on dark background
  Given I scroll to the Footer
  Then I see a dark navy (#04091e) background
  And I see 3 columns: About Us, Newsletter, Follow Us

Scenario: Footer includes Component Dock branding
  Given the footer is visible
  Then I see a link to https://www.componentdock.com/ labeled "Component Dock"
  And I do NOT see any ColorLib attribution

Scenario: Newsletter form has email input and submit button
  Given I view the Newsletter column
  Then I see an email input field with placeholder "Enter Email"
  And I see a submit button styled with a pill shape (20px radius)
```

## Verification checklist

- [ ] All sections match the 1:1 order from the ColorLib preview DOM
- [ ] Primary brand color #fab700 used consistently (buttons, facts bar, accents)
- [ ] Poppins font loaded via Google Fonts link in index.html
- [ ] Hero has dark overlay over background image
- [ ] Primary CTA buttons have sharp square corners (no border-radius)
- [ ] Facts bar is full-width amber with 5 counter columns
- [ ] Gallery uses masonry-style layout (2-3-2 row pattern)
- [ ] Blog cards show date + likes + comments
- [ ] Footer is dark navy with 3 columns
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images use `https://picsum.photos/seed/ironwatch-<n>/<w>/<h>`
- [ ] Responsive: 3-col → 2-col → 1-col on smaller screens
- [ ] All interactive elements have accessible labels
- [ ] No new dependencies added beyond the existing stack
