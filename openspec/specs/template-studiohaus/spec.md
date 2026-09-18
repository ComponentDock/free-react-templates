# Template: Studiohaus (Interior Design Studio)

## Purpose

Studiohaus is an interior design studio business landing template in the
free-react-templates monorepo. It is a faithful React recreation of the
ColorLib free "Theinterior" template design, built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/theinterior/ (interior design template)
Preview URL: https://preview.colorlib.com/theme/theinterior/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/theinterior-free-template.jpg

## Design reference (replication findings)

- **Original:** ColorLib "Theinterior" — interior design studio landing page
  (`<title>Interior Design HTML-5 Template</title>`). A warm, editorial
  one-pager with a gold/tan brand palette, dark navy accents, and serif
  typography.

### Design tokens extracted from preview CSS (`assets/css/main.css`)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (primary) | `#c6a16e` | Warm gold/tan — buttons, CTAs, highlights, hover states |
| Hero overlay | `rgba(1,10,28,0.3)` | Dark navy semi-transparent overlay on hero images |
| Heading color | `#0b1c39` | Dark navy for h1-h6 |
| Body text color | `#506172` | Muted blue-gray for paragraphs |
| Footer background | `#010b1d` | Deep navy/black |
| Section bg (light) | `#fafafa` | Light gray for service cards |
| Dark accent | `#16161a` | Near-black for team card gradient |
| CTA accent (red) | `#e6373d` | Button hover sweep animation color |
| Service highlight | `#ffe7ca` | Warm peach underline on service headings |
| Font: Headings | "Josefin Sans", sans-serif | h1-h6, nav, buttons |
| Font: Hero h1 | "Barlow", sans-serif | Bold 700+, uppercase, hero headline |
| Font: Body | "Great Vibes", cursive | Script font for body text (original) — NOTE: replace with a clean sans for React version |
| Font: Cursive accent | "Great Vibes", cursive | Decorative script font |
| Button radius | `5px` | `.btn` class |
| Button hover | Red slide-in from left (`scaleX`) | `.btn::before` with `#e6373d` background |
| Team card gradient | top-to-bottom `rgba(2,26,71,0)` → `rgba(2,26,71,0.6)` | Dark overlay on team member cards |

### Section structure (from live preview DOM, in order)

1. **Header/Navbar** — Transparent sticky header with logo, nav links (Home, About, Services, Work, Blog, Contact), and CTA button. Becomes white/sticky on scroll.
2. **Hero Slider** — Full-width image slider (2 slides), dark overlay (`rgba(1,10,28,0.3)`), white text. Left-aligned caption with large bold h1 ("Barlow" font, 70px, uppercase), subtitle paragraph, and animated arrow indicator at bottom.
3. **Info Stats Bar** — `our-info-area` — 4-column row with info items (stats/labels) over a background image with dark overlay. Section background image.
4. **Professional Services Banner** — `professional-services` — Full-width background image with dark overlay, left-aligned headline + paragraph, CTA button (`btn btn3`). Hidden on mobile.
5. **Services Grid** — `services-area` — 3-column grid of service cards (`single-services`) with `#fafafa` background, each containing an image, h4 title (with `#ffe7ca` underline accent), and paragraph description. Cards turn white on hover.
6. **Gallery** — `gallery-area` — 6-image masonry grid (`single-gallery` items across 3 columns), images fill container with overflow hidden.
7. **Team** — `team-area` — 3-column team member cards with circular portrait overlay gradient (dark navy), member name + role overlaid at bottom-left. Hover zoom effect (1.1 scale).
8. **Testimonials** — `testimonial-area` — Dark background section with centered testimonial slider. Quote marks icon, large white testimonial text, founder image (circular), founder name. Dot navigation. Slick carousel.
9. **Brand Logos** — `brand-area` — 6 brand/partner logos in a horizontal row with subtle border separators.
10. **Want to Work CTA** — `wantToWork-area` — Full-width gold (`#c6a16e`) bar with large white headline ("Want to work with us?") and black "GET STARTED" button on the right.
11. **Blog** — `home-blog-area` — 2-column blog post cards, each with large image (dark overlay at bottom), date badge (gold bg), post title, excerpt, and "more" link.
12. **Footer** — `footer-area` — Deep navy background (`#010b1d`), 4-column layout: logo + description, quick links, footer links, Instagram gallery grid. Bottom bar with copyright and social icons (Twitter, Facebook, Globe, Instagram).

### Visual design notes (from screenshot analysis)

- The overall aesthetic is warm, luxurious interior design — gold/tan accents on
  dark navy and white backgrounds.
- Hero images are full-bleed interior room photos with dark overlay.
- Buttons have a distinctive red sweep animation on hover.
- The CTA section is a bold full-width gold bar.
- Testimonials section has a dark background with large white script/quote text.
- Team cards have a gradient overlay effect with member names.
- Blog cards have image-first layout with date badges.

## Requirements (Gherkin)

### Scenario: Navbar renders with correct structure
```gherkin
Given the user visits the Studiohaus page
Then the navbar displays the logo "Studiohaus"
And the navbar contains navigation links: Home, About, Services, Work, Blog, Contact
And the navbar has a CTA button labeled "GET STARTED"
And the navbar becomes sticky on scroll
```

### Scenario: Hero section renders correctly
```gherkin
Given the user visits the Studiohaus page
Then the hero section displays a full-width background image
And the hero has a dark overlay
And the hero displays a heading in uppercase with large bold text
And the hero displays a subtitle paragraph
And the hero has an animated scroll indicator arrow
```

### Scenario: Info stats bar displays
```gherkin
Given the user visits the Studiohaus page
Then the info stats section displays 4 info items in a row
And each info item has a label and value
And the section has a background image with overlay
```

### Scenario: Professional services banner renders
```gherkin
Given the user visits the Studiohaus page on desktop
Then the professional services banner displays a background image
And the banner has a headline and description paragraph
And the banner has a CTA button
```

### Scenario: Services grid displays correctly
```gherkin
Given the user visits the Studiohaus page
Then the services section displays 3 service cards in a grid
And each service card has an image, title, and description
And each service card title has a warm accent underline
And hovering a service card changes its background to white
```

### Scenario: Gallery grid renders
```gherkin
Given the user visits the Studiohaus page
Then the gallery section displays 6 images in a masonry-style grid
And images are arranged in a 3-column layout
```

### Scenario: Team section renders
```gherkin
Given the user visits the Studiohaus page
Then the team section displays 3 team member cards
And each card shows a member image with a dark gradient overlay
And each card displays the member name and role at the bottom-left
And hovering a team card applies a subtle zoom effect
```

### Scenario: Testimonials carousel works
```gherkin
Given the user visits the Studiohaus page
Then the testimonials section displays a quote with large white text
And each testimonial shows a founder image and name
And dot navigation indicators are visible
And the user can navigate between testimonials
```

### Scenario: Brand logos row displays
```gherkin
Given the user visits the Studiohaus page
Then the brand logos section displays 6 partner logos
And logos are arranged in a horizontal row with separators
```

### Scenario: Want to Work CTA bar renders
```gherkin
Given the user visits the Studiohaus page
Then the CTA section displays as a full-width gold background bar
And the CTA section has a large white headline
And the CTA section has a dark "GET STARTED" button
```

### Scenario: Blog section displays
```gherkin
Given the user visits the Studiohaus page
Then the blog section displays 2 blog post cards
And each card has a featured image with dark overlay
And each card shows a date badge with gold background
And each card has a post title, excerpt, and "more" link
```

### Scenario: Footer renders correctly
```gherkin
Given the user visits the Studiohaus page
Then the footer displays on a dark navy background
And the footer has 4 columns: logo/description, quick links, footer links, Instagram gallery
And the footer bottom bar shows copyright text and social media icons
And the footer links to "https://www.componentdock.com/"
```

### Scenario: Responsive layout
```gherkin
Given the user views the Studiohaus page on mobile
Then the navbar collapses into a mobile hamburger menu
And the hero heading text is smaller
And the services grid shows 1 column
And the gallery shows 2 columns
And the team section shows 1 column
And the blog section shows 1 column
```

## Verification checklist

- [ ] All sections render in correct order matching the original
- [ ] Brand color `#c6a16e` is used for buttons, CTAs, and highlights
- [ ] Dark navy `#010b1d` background on footer
- [ ] Hero section has dark overlay with white text
- [ ] Button hover animation (red sweep from left) is implemented
- [ ] Service cards have `#ffe7ca` accent underline on headings
- [ ] Team cards have gradient overlay effect
- [ ] Testimonial carousel with dot navigation
- [ ] Responsive: single-column on mobile, multi-column on desktop
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `https://picsum.photos/seed/studiohaus-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build passes (`npm run build`)
