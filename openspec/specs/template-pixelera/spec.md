# Template: Pixelera (Creative Digital Agency)

## Purpose

Recreation of ColorLib "Boxus" — a creative digital agency one-page template.

- **Source:** https://colorlib.com/wp/template/boxus/
- **Preview:** https://preview.colorlib.com/theme/boxus/
- **Category:** Creative Digital Agency (one-page, single-page scroll)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens

Extracted from the live preview's `style.css` and inline styles.

| Token | Value | Usage |
| --- | --- | --- |
| brand-primary | `#221C5A` (deep purple) | Navbar, footer background, menu bar |
| brand-secondary | `#32DB8A` (teal green) | Section title boxes, progress bar fills (HTML) |
| brand-accent | `#E74C78` / `#e54b76` (pink/rose) | CTA buttons, hover states, highlights, submit button border |
| brand-warm | `#FFBA42` / `#E3A536` (amber) | Progress bar fills (CSS), accent date text in video section |
| brand-cool | `#4C9EE7` (blue) | Progress bar fill (DESIGN skill) |
| text-primary | `#23214c` (dark purple-navy) | Body text, link default color |
| text-secondary | `#727190` (gray-purple) | Timeline italic text, member info |
| text-footer | `#5b5881` | Footer text and links |
| bg-white | `#fff` | Section content backgrounds, doc-loader |
| font-body | `"Roboto", sans-serif` | Body text, 16px/26px, weight 400 |
| font-heading | `"Montserrat", sans-serif` | Section titles, service titles, content titles, weight 700 |
| section-title-box | 370x370px, bg `#32DB8A`, white text | Left/right rotated section titles with oversized numbers |
| section-number | Montserrat 180px, color `#55B286` | Large offset number inside title boxes |
| section-title-text | Montserrat 109px, white, uppercase, -3px letter-spacing | Vertical section name inside title box |
| button-style | 2px solid `#e54b76`, no radius, text `#e54b76`, hover fills pink | Submit/contact CTA |
| link-hover | `#ee87a4` (light pink) | Body link hover |
| navbar | Fixed top, bg `#221C5A`, white text, 13px uppercase, letter-spacing 0.03cm | Sticky navigation |

## Layout notes

- Content max-width: 1170px, centered.
- Sections alternate the title box between left and right.
- Section title boxes are 370px wide and float; content holders offset by 370px margin.
- The large section number overlaps the box edge (negative margin-left: -64px).

## Gherkin requirements

### Scenario: Hero section renders with logo, headline, and subtitle
```gherkin
Given the user opens the page
When the hero section loads
Then a centered logo is displayed
And a large headline "We Craft Awesome Web And Graphic Design Solutions" is shown
And a subtitle describing the agency mission is visible
```

### Scenario: Navbar displays fixed top with navigation links
```gherkin
Given the user opens the page
When the navbar renders
Then it is fixed to the top of the viewport
And it has a deep purple background (#221C5A)
And it shows links: Home, Services, Portfolio, About, News, Video, Skills, Contact
And all link text is white, uppercase, 13px
```

### Scenario: Navbar scrolls to sections on link click
```gherkin
Given the navbar is visible
When the user clicks a nav link (e.g. "Services")
Then the page smoothly scrolls to the corresponding section
```

### Scenario: Services section displays with numbered title box
```gherkin
Given the user scrolls to the Services section
Then a green title box (370x370px, #32DB8A) is shown on the left
And the number "01" is displayed large (180px) in muted green
And the title "SERVICES" is shown vertically in white Montserrat
And the content area on the right contains an image slider
And 8 service items with titles and descriptions are listed
```

### Scenario: Portfolio section displays masonry grid
```gherkin
Given the user scrolls to the Portfolio section
Then a green title box is shown on the right with number "02" and title "PORTFOLIO"
And a masonry grid of 4 portfolio items is shown on the left
And each item has a hover overlay with icon, category text, and title
And a "LOAD MORE" button with infinity icon is below the grid
```

### Scenario: About section shows bio text, image slider, and team members
```gherkin
Given the user scrolls to the About section
Then a green title box is shown on the left with number "03" and title "CRAFTERS"
And the content area has a two-column layout with bio text and timeline
And the timeline shows dates in pink (#e54b76) with italic descriptions in gray
And an image slider shows about images
And a team member carousel shows member name, position, and bio
```

### Scenario: News section lists blog articles
```gherkin
Given the user scrolls to the News section
Then a green title box is shown on the right with number "04" and title "STORIES"
And 4 blog articles are listed with number, author, category, and title
And each article has a numbered badge (01-04)
And a "GO TO BLOG" link is at the bottom
```

### Scenario: Video section shows video popup and icon carousel
```gherkin
Given the user scrolls to the Video section
Then a green title box is shown on the left with number "05" and title "OFFER"
And the content has a two-column layout with description and timeline (amber dates)
And a video thumbnail with play button overlay links to Vimeo
And an icon carousel shows 7 service icons (Video Editing, Premium Clean, etc.)
```

### Scenario: Skills section shows animated progress bars
```gherkin
Given the user scrolls to the Skills section
Then a green title box is shown on the right with number "06" and title "EXPERTISE"
And 4 progress bars are displayed: HTML (81%, green), CSS (93%, amber), PSD (72%, pink), DESIGN (99%, blue)
And each bar shows the skill name, percentage, and colored fill
```

### Scenario: Contact section renders form and map
```gherkin
Given the user scrolls to the Contact section
Then a green title box is shown on the left with number "07" and title "CONTACT"
And the content area has a two-column layout
And the left column has descriptive text with a pink-highlighted phrase
And the right column has a contact form with Name, Email, Subject, Message fields
And a "SEND" button with pink border that fills on hover
And a Google Maps embed is below the form
```

### Scenario: Footer displays copyright and social links
```gherkin
Given the user scrolls to the bottom
Then a deep purple (#221C5A) footer is displayed
And it contains copyright text
And social media icon links (Twitter, Behance, Dribbble, Facebook, RSS) are shown
And a "Component Dock" attribution link is present
```

### Scenario: Section title boxes alternate left/right
```gherkin
Given sections 01 through 07
Then odd-numbered sections (01, 03, 05, 07) have the title box on the left
And even-numbered sections (02, 04, 06) have the title box on the right
And each box is 370x370px with green background
```

### Scenario: Page is responsive on mobile
```gherkin
Given the user views the page on a mobile viewport
Then the navbar collapses to a hamburger menu
And the section title boxes stack above their content
And the two-column layouts become single-column
And the masonry grid becomes single-column
```

## Verification checklist

- [ ] Navbar fixed at top, deep purple bg, 8 nav links, smooth scroll
- [ ] Hero: centered logo + headline + subtitle
- [ ] Services: numbered green title box (left), image slider, 8 service items
- [ ] Portfolio: numbered green title box (right), masonry grid (4 items), hover overlays, "LOAD MORE"
- [ ] About: numbered green title box (left), bio text, timeline (pink dates), image slider, team carousel
- [ ] News: numbered green title box (right), 4 blog articles with numbered badges, "GO TO BLOG"
- [ ] Video: numbered green title box (left), video popup with play overlay, icon carousel (7 items)
- [ ] Skills: numbered green title box (right), 4 progress bars with correct colors/percentages
- [ ] Contact: numbered green title box (left), 2-column (text + form), form fields, "SEND" button, map
- [ ] Footer: deep purple bg, copyright, social icons, Component Dock link
- [ ] Section title boxes: 370x370px, green (#32DB8A), alternating left/right, large number + vertical title
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] Fonts: Roboto (body), Montserrat (headings) loaded from Google Fonts
- [ ] Brand colors match tokens (#221C5A, #32DB8A, #E74C78, #FFBA42, #4C9EE7)
