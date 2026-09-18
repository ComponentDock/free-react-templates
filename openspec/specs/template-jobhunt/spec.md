# Template: JobHunt (Job Portal)

## Purpose

Recreation of ColorLib's **Jobsco** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobsco/
- **Preview:** https://preview.colorlib.com/theme/jobsco/
- **New name:** `jobhunt`
- **App folder:** `apps/jobhunt`
- **Package:** `@free-react-templates/jobhunt`
- **Surge target:** `jobhunt.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#000DFF` | Vivid blue — primary buttons, links, accents |
| Text primary | `#00044A` | Very dark navy for headings/body |
| Text muted | `#6D6E8D` | Purple-grey for secondary text |
| Background gray | `#F1F5F9` | Light grey section backgrounds |
| Background alt | `#FBFBFB` | Slightly off-white alternate sections |
| Background white | `#ffffff` | Card and content backgrounds |
| Font family | `"DM Sans", sans-serif` | Google Font — load via `<link>` in index.html |
| Button outlined | border `#000DFF`, text `#000DFF`, bg `#fff`, letter-spacing 3px, uppercase | Primary CTA style |
| Button filled | bg `#000DFF`, text `#fff` | Secondary/filled CTA style |
| Button radius | ~`4px` (Bootstrap default) | Slightly rounded corners |
| Sticker badge | bg `#000DFF`, text `#fff`, small pill | "Remote" tags on job cards |
| Decorative watermark | Large faint text (e.g. "jobs", "Talents") | Background watermark text in hero/about sections |
| Footer background | `#F1F5F9` (gray-bg) | Light grey footer area |

## Section structure (page order)

1. **Header/Navbar** — Transparent header on gray bg, logo left, nav links center (Home, Browse Job, Page dropdown, Contact), buttons right (phone icon + "Post A Job" outlined, "Log In" filled)
2. **Hero** — Gray background, large hero image on right, decorative shapes, "jobs" watermark text, headline "Find Your Next Dream Job", subtitle "Easiest way to find a perfect job", two CTA buttons ("Looking For a Job?" outlined, "Find Talent" filled)
3. **Top Jobs** — White background, "1000+" badge, "Browse From Our Top Jobs" heading, horizontal slider of job category cards (6 cards, each: icon image + title + description + "Apply Now" button), some cards have "Remote" sticker badge
4. **About** — Gray background, split layout: illustration image left, text right, heading "We Build Lasting Relationships Between Candidates & Businesses", two paragraphs, "Find Talent" button, "Talents" watermark
5. **Job Categories** — White background, "Browse From Top Categories" heading, 3x2 grid of category cards (6 total, each: icon image + title + description + "Browse Job" button): Design & creatives, Finance, Marketing, Health/Medical, Corporate, Copywriting
6. **Testimonials** — White background, centered testimonial slider, each card: quote icon, quote text, avatar image, name, role, dot navigation, decorative T-shape
7. **Footer** — Gray background, 3 columns: logo + description + social icons (Instagram, Facebook, Twitter), Useful links list, Subscribe newsletter (email input + "Subscribe" button), copyright with Component Dock link

## Gherkin requirements

### Header/Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user visits the page
  Then the navbar shows a logo
  And it has links: Home, Browse Job, Page, Contact
  And a "Post A Job" button is visible
  And a "Log In" button is visible

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top

Scenario: Mobile hamburger menu
  Given the viewport is under 1024px wide
  Then the nav links are hidden
  And a hamburger/mobile menu icon is visible
  When the user taps the hamburger
  Then the mobile menu slides open
```

### Hero section

```gherkin
Scenario: Hero displays headline and CTAs
  Given the user visits the page
  Then a headline "Find Your Next Dream Job" is visible
  And a subtitle "Easiest way to find a perfect job" is visible
  And two CTA buttons are present: "Looking For a Job?" and "Find Talent"
  And a hero illustration image is displayed on the right

Scenario: Hero has decorative elements
  Given the user views the hero section
  Then a large "jobs" watermark text is visible in the background
  And decorative shape images are present
```

### Top Jobs section

```gherkin
Scenario: Top jobs slider displays job categories
  Given the user scrolls to the top jobs section
  Then a "1000+" badge is visible
  And a heading "Browse From Our Top Jobs" is displayed
  And a horizontal slider shows at least 6 job category cards
  And each card has: an icon, title, description, and "Apply Now" button

Scenario: Some job cards have Remote sticker
  Given the top jobs slider is displayed
  Then some cards show a "Remote" sticker badge

Scenario: Slider is scrollable
  Given the user is on the top jobs section
  When the user scrolls/swipes horizontally
  Then additional job cards become visible
```

### About section

```gherkin
Scenario: About section displays
  Given the user scrolls to the about section
  Then a heading "We Build Lasting Relationships Between Candidates & Businesses" is visible
  And two description paragraphs are shown
  And a "Find Talent" button is present
  And an illustration image is displayed on the left
  And a "Talents" watermark text is in the background
```

### Job Categories section

```gherkin
Scenario: Categories grid displays
  Given the user scrolls to the categories section
  Then a heading "Browse From Top Categories" is visible
  And 6 category cards are displayed in a 3x2 grid
  And each card has: icon, title, description, and "Browse Job" button
  And the categories are: Design & creatives, Finance, Marketing, Health/Medical, Corporate, Copywriting
```

### Testimonials section

```gherkin
Scenario: Testimonial slider
  Given the user scrolls to the testimonials section
  Then a testimonial card is visible with: quote icon, quote text, avatar, name, and role
  And dot navigation allows switching between testimonials
  And a decorative T-shape image is present
```

### Footer

```gherkin
Scenario: Footer content
  Given the user scrolls to the bottom
  Then the footer shows three columns: brand info, Useful links, Subscribe newsletter
  And social media icons are present (Instagram, Facebook, Twitter)
  And a newsletter subscription form with email input and "Subscribe" button is visible
  And a copyright line links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All sections match the original structure and order (1:1)
- [ ] Brand color `#000DFF` used for buttons, links, accents
- [ ] Font "DM Sans" loaded via Google Fonts link in `index.html`
- [ ] Hero has two CTA buttons with correct styles (outlined + filled)
- [ ] Top Jobs slider shows 6+ category cards with icons
- [ ] "Remote" sticker badges on some job cards
- [ ] About section has split layout with image and text
- [ ] Categories grid shows 6 cards in 3x2 layout
- [ ] Testimonial slider with avatars and dot navigation
- [ ] Footer has newsletter subscription form
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib anywhere in app code
- [ ] Placeholder images via `picsum.photos`
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] Tests: 100% line/function/branch/statement coverage
- [ ] TypeCheck passes, Lint passes, Build succeeds
