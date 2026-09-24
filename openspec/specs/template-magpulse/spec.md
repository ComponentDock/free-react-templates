# Template: MagPulse (News / Magazine)

## Purpose

Recreation of the ColorLib "Magnews" template as a React 19 + Vite + Tailwind 4 + TypeScript app.
- Source slug: `magnews`
- ColorLib page: https://colorlib.com/wp/template/magnews/
- Preview URL: https://preview.colorlib.com/theme/magnews/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- App folder: `apps/magpulse`
- Package: `@free-react-templates/magpulse`
- Deploy: `magpulse.free.componentdock.com`

## Design tokens (extracted from preview CSS)

| Token            | Value                               | Notes                                  |
| ---------------- | ----------------------------------- | -------------------------------------- |
| Brand accent     | `#EF233C`                           | Red — used for links, active states    |
| Secondary accent | `#FE7E00`                           | Orange — category badges, highlights   |
| Dark background  | `#07090C`                           | Top header, nav, footer backgrounds    |
| Content dark bg  | `#222`                              | Article overlays, gradient overlays    |
| Light background | `#FFF`                              | Body, content sections                 |
| Text on dark     | `#DDD`                              | Muted text on dark backgrounds         |
| Text primary     | `#07090C`                           | Headings on light background           |
| Text body        | `#2C2C2C`                           | Body text on light                     |
| Facebook         | `#3b5999`                           | Social icon background                 |
| Twitter          | `#00aced`                           | Social icon background                 |
| Instagram        | `#8A3AB9`                           | Social icon background                 |
| Google+          | `#d44332`                           | Social icon background                 |
| Font — body      | `'Open Sans', sans-serif`           | Primary body text                      |
| Font — headings  | `'Lato', sans-serif`                | Headings, titles                       |
| Border-radius    | `0` (buttons/cards), `50%` (avatar)| Square buttons, round avatars          |
| Grid system      | Bootstrap 12-col                    | Replicate with Tailwind grid/cols      |

## Sections (in order)

1. **Top Header** — dark bar (#07090C) with nav links (About, Contact, Advertisement, Privacy, Login) + social icons (FB, Twitter, G+, Instagram, YouTube)
2. **Center Header** — logo + ad/banner image area
3. **Nav Header** — secondary nav bar with logo, category links (Home, News, Sport, Lifestyle, Fashion, Music, Business), search button, hamburger menu
4. **Hero Carousel** — full-width owl carousel with large featured article cards (image + category badge + type + title + meta)
5. **Tabbed Content** — tabbed section (News / Sport tabs) each showing a sub-carousel of article cards
6. **Secondary Carousel** — another owl carousel of articles with a custom nav
7. **Trending Posts** — sidebar widget listing trending articles with thumbnails
8. **Stay Connected** — social media follow section with follow buttons
9. **Subscribe to Newsletter** — email subscription form
10. **Most Read** — sidebar widget with most-read articles
11. **Popular Video** — video embed section
12. **Popular Posts** — article card grid
13. **Featured Posts** — article card grid (2-col on desktop)
14. **Footer Top** — 3-column: Featured Posts | Flickr Photos | Recent Tweets
15. **Footer Bottom** — copyright bar

## Gherkin scenarios

### Top Header
```
Scenario: Top header renders links and social icons
  Given the page loads
  Then the top header shows "About us", "Contact", "Advertisement", "Privacy", "Login" links
  And social icons for Facebook, Twitter, Google+, Instagram, YouTube are visible
```

### Center Header
```
Scenario: Center header shows logo and ad area
  Given the page loads
  Then a logo image is displayed
  And an advertisement banner placeholder is shown
```

### Nav Header
```
Scenario: Navigation bar shows category links
  Given the page loads
  Then the nav bar shows Home, News, Sport, Lifestyle, Fashion, Music, Business
  And a search icon button is visible
  And a hamburger menu button is visible for mobile

Scenario: Nav bar sticks on scroll
  Given the user scrolls down
  Then the nav bar remains fixed at the top of the viewport
```

### Hero Carousel
```
Scenario: Hero carousel displays featured articles
  Given the page loads
  Then a carousel shows at least 3 large article cards
  And each card has a background image, category badge, article type, title, and date
  And navigation arrows allow manual sliding

Scenario: Hero carousel auto-plays
  Given the page loads
  Then the carousel advances to the next slide automatically every 5 seconds
```

### Tabbed Content
```
Scenario: Tabbed section shows News and Sport tabs
  Given the page loads
  Then two tabs are visible: "News" and "Sport"
  And the "News" tab is active by default

Scenario: Clicking Sport tab switches content
  Given the user clicks the "Sport" tab
  Then the sport articles carousel is displayed
  And the "Sport" tab becomes active
```

### Secondary Carousel
```
Scenario: Secondary carousel shows more articles
  Given the page loads
  Then a second carousel displays article cards with custom prev/next navigation
```

### Trending Posts
```
Scenario: Trending posts sidebar shows thumbnails
  Given the page loads
  Then a "Trending Posts" widget lists articles with small thumbnail images
  And each item shows the article title
```

### Stay Connected
```
Scenario: Social follow section renders
  Given the page loads
  Then a "Stay Connected" section shows social media follow buttons
```

### Subscribe to Newsletter
```
Scenario: Newsletter form renders
  Given the page loads
  Then a "Subscribe to Newsletter" section shows an email input field
  And a submit button labeled "Subscribe"
```

### Most Read
```
Scenario: Most read widget renders
  Given the page loads
  Then a "Most Read" widget lists the top articles with thumbnails and titles
```

### Popular Video
```
Scenario: Popular video section renders
  Given the page loads
  Then a "Popular Video" section shows a video placeholder with title
```

### Popular Posts
```
Scenario: Popular posts grid renders
  Given the page loads
  Then a "Popular Posts" section shows article cards in a grid layout
```

### Featured Posts
```
Scenario: Featured posts grid renders
  Given the page loads
  Then a "Featured Posts" section shows article cards in a 2-column grid
```

### Footer
```
Scenario: Footer top shows three columns
  Given the page loads
  Then the footer top has 3 columns: Featured Posts, Flickr Photos, Recent Tweets

Scenario: Footer bottom shows copyright
  Given the page loads
  Then the footer bottom shows a copyright notice

Scenario: Footer links to Component Dock
  Given the page loads
  Then the footer contains a link to https://www.componentdock.com/
```

### Back to Top
```
Scenario: Back to top button appears on scroll
  Given the user scrolls past the fold
  Then a back-to-top button becomes visible
  And clicking it scrolls to the top of the page
```

## Verification checklist

- [ ] Top header: dark bg (#07090C), links + social icons
- [ ] Center header: logo + ad placeholder
- [ ] Nav header: sticky, category links, search, hamburger
- [ ] Hero carousel: auto-play, manual arrows, featured article cards
- [ ] Tabbed content: News/Sport tabs with switching
- [ ] Secondary carousel: article cards with custom nav
- [ ] Trending Posts: thumbnail list sidebar
- [ ] Stay Connected: social follow buttons
- [ ] Subscribe to Newsletter: email input + submit
- [ ] Most Read: thumbnail list sidebar
- [ ] Popular Video: video placeholder
- [ ] Popular Posts: article grid
- [ ] Featured Posts: 2-col article grid
- [ ] Footer top: 3-column layout
- [ ] Footer bottom: copyright + Component Dock link
- [ ] Back to top button: appears on scroll, smooth scroll
- [ ] Brand colors match tokens (#EF233C accent, #07090C dark, #FE7E00 orange)
- [ ] Fonts: Open Sans (body), Lato (headings)
- [ ] Responsive layout: mobile hamburger, stacked columns on small screens
- [ ] 100% test coverage
