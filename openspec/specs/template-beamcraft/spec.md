# Template: BeamCraft (Construction Company)

## Purpose

Recreation of ColorLib **Topbuilder** — a construction company website template.
- **Source:** https://colorlib.com/wp/template/topbuilder/
- **Preview:** https://preview.colorlib.com/theme/topbuilder/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `beamcraft` (never reuse the ColorLib source name)

## Design Tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#f6b60b` | Buttons, icon accents, nav hover, CTA, highlights |
| brand-secondary | `#f8b81d` | "What We Offer" section bg (near-identical yellow) |
| top-bar-bg | `#111f29` | Dark navy top header bar |
| services-bg | `#2e3841` | Dark gray-blue services section |
| heading-text | `#222222` | Primary heading color |
| body-text | `#555555` | Paragraph/body text |
| section-light | `#fefefe` | About, Features, Team, Testimonials, Blog bg |
| section-gray | `#f5f5f5` | Professional Builder, Partners bg |
| white | `#ffffff` | Top bar text, slider text |

### Typography
- **Font:** `"Roboto", sans-serif` (Google Fonts)
- **Body:** 400 14px/26px Roboto
- **Nav links:** 700 14px/100px Roboto, uppercase
- **Top bar links:** 400 14px/50px Roboto
- **Button CTA:** 700 18px/59px Roboto

### Buttons
- CTA `.button_all`: `#f6b60b` bg, bold 18px Roboto, 180px wide, block
- Search icon: `#f6b60b` bg circle in nav

## Visual Reference (Screenshot Analysis)

Dark industrial-construction aesthetic:
- **Top bar:** Dark navy `#111f29` with phone/email/hours in white, social icons right
- **Nav:** White bar, "TOPBUILDER" logo left, uppercase nav links, yellow search icon right
- **Hero:** Full-width bg image (construction worker with chains), dark overlay, centered white text + yellow "READ MORE" CTA, carousel arrows
- **Professional Builder:** 4 icon-cards on gray `#f5f5f5` — house/building/clock/thumbs-up icons in yellow
- **Overall:** Clean corporate construction; yellow + dark navy; Roboto font; parallax sections

## Section Structure (page order)

| # | Section | CSS class | Background |
|---|---------|-----------|------------|
| 1 | Top Header Bar | `top_header_area` | `#111f29` dark navy |
| 2 | Navigation | `header_aera` | White |
| 3 | Hero Slider | `slider_area` | Bg image + dark overlay |
| 4 | Professional Builder | `professional_builder` | `#f5f5f5` |
| 5 | About Us | `about_us_area` | `#fefefe` |
| 6 | What We Offer | `what_we_area` | `#f8b81d` yellow |
| 7 | Our Features | `our_feature_area` | `#fefefe` |
| 8 | Our Services | `our_services_area` | `#2e3841` dark |
| 9 | Our Team | `our_team_area` | `#fefefe` |
| 10 | Achievements | `our_achievments_area` | Parallax bg + overlay |
| 11 | Testimonials | `testimonial_area` | `#fefefe` |
| 12 | Featured Works | `featured_works` | Parallax bg + overlay |
| 13 | Latest Blog | `latest_blog_area` | `#fefefe` |
| 14 | Partners | `our_partners_area` | `#f5f5f5` |
| 15 | Footer | `footer_area` | Bg image + overlay |

## Gherkin Requirements

### Top Header Bar
```gherkin
Scenario: Top bar displays contact info
  Given the user views the page
  Then the top bar shows a phone number, email, and business hours
  And social media icon links are displayed on the right
  And the top bar background is dark navy (#111f29)
```

### Navigation
```gherkin
Scenario: Navigation displays all menu items
  Given the user views the page
  Then the nav shows links: Home, About Us, Services, Gallery, Blog, Contact
  And a yellow search icon button is displayed at the end
  And the logo text "BeamCraft" is visible on the left
  And nav links turn yellow on hover
```

### Hero Slider
```gherkin
Scenario: Hero section shows welcome message
  Given the user views the page
  Then a full-width hero area with a construction background image is shown
  And a dark semi-transparent overlay covers the image
  And centered white text reads "Welcome to our" and a main headline
  And a yellow "Read More" CTA button is centered below the text
  And left/right carousel navigation arrows are present
```

### Professional Builder
```gherkin
Scenario: Feature cards display builder services
  Given the user scrolls to the builder section
  Then 4 feature cards are shown in a row on a light gray background
  And each card has a yellow icon, a title, and descriptive text
```

### About Us
```gherkin
Scenario: About section shows company info
  Given the user scrolls to about section
  Then a section heading "About Us" is displayed
  And a two-column layout shows an image on one side and text on the other
  And a "Who We Are" sub-heading is present
```

### What We Offer
```gherkin
Scenario: What We Offer section on yellow background
  Given the user scrolls to the offer section
  Then the section has a yellow (#f8b81d) background
  And a "What We Offer" heading is displayed
  And service categories or tabs are shown
```

### Our Features
```gherkin
Scenario: Features section shows Why Choose Us
  Given the user scrolls to the features section
  Then a "Why Choose Us" sub-heading is shown
  And feature items with descriptions are in a two-column layout
```

### Our Services
```gherkin
Scenario: Services section on dark background
  Given the user scrolls to the services section
  Then the section has a dark (#2e3841) background
  And an "Our Services" heading in white text is displayed
  And service cards with icons and descriptions are shown
```

### Our Team
```gherkin
Scenario: Team section displays members
  Given the user scrolls to the team section
  Then an "Our Team" heading is displayed
  And team member cards show photo, name, and role
```

### Achievements
```gherkin
Scenario: Achievements with counters
  Given the user scrolls to achievements
  Then a parallax background image with dark overlay is displayed
  And counter stats are shown (e.g. "Projects Completed")
```

### Testimonials
```gherkin
Scenario: Testimonials carousel
  Given the user scrolls to testimonials
  Then a carousel shows client quotes with photos and names
  And carousel navigation is present
```

### Featured Works
```gherkin
Scenario: Portfolio gallery on parallax
  Given the user scrolls to featured works
  Then a parallax background with dark overlay is shown
  And portfolio item cards are in a grid (image + title)
```

### Latest Blog
```gherkin
Scenario: Blog posts displayed
  Given the user scrolls to blog section
  Then 3 blog post cards are shown in a row
  And each card has a thumbnail, title, author/date, and excerpt
```

### Partners
```gherkin
Scenario: Partners logo carousel
  Given the user scrolls to partners
  Then a carousel of partner logos is shown on a light gray background
```

### Footer
```gherkin
Scenario: Footer with multiple columns
  Given the user scrolls to the footer
  Then a dark bg image with overlay is displayed
  And footer contains multiple columns of links
  And a "Made with Component Dock" link is present
```

## Verification Checklist

- [ ] All 15 sections render in correct order
- [ ] Brand color #f6b60b used for CTAs, icons, hover states
- [ ] Top bar #111f29 dark navy background
- [ ] Services section #2e3841 dark background
- [ ] What We Offer section #f8b81d yellow background
- [ ] Roboto font loaded and applied throughout
- [ ] Hero full-width bg image + dark overlay
- [ ] Achievements + Featured Works use parallax backgrounds
- [ ] All section headings match original hierarchy
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
