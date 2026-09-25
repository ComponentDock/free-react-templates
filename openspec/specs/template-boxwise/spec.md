# Template: Boxwise (Creative Digital Agency)

## Purpose

Recreation of the ColorLib **Boxus** template.
- **Source:** https://colorlib.com/wp/template/boxus/
- **Preview:** https://preview.colorlib.com/theme/boxus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens (extracted from preview stylesheet)

| Token             | Value                         |
| ----------------- | ----------------------------- |
| Primary (dark)    | `#221C5A` (deep navy-purple)  |
| Secondary (pink)  | `#E74C78` / `#e64b77`         |
| Accent (green)    | `#32DB8A`                     |
| Light pink        | `#ee87a4`                     |
| Body text         | `#23214c`                     |
| Muted text        | `#9a9a9a`, `#8e8da9`         |
| Amber/highlight   | `rgb(255, 186, 66)` / `#e3a436` |
| White             | `#fff`                        |
| Font – body       | Roboto 300/400/700/900        |
| Font – headings   | Montserrat 400/700            |
| Font – serif      | PT Serif 400                  |
| Border radius     | 0 (sharp corners)             |
| CTA style         | Inline link "LOAD MORE" (pink)|
| Section bg        | Alternate white / dark navy   |

## Section Order (from live preview DOM)

| #   | ID        | Title/Label | Background  | Notes                              |
| --- | --------- | ----------- | ----------- | ---------------------------------- |
| 1   | home      | Hero/Slider | Dark navy   | Full-screen slider with arrows     |
| 2   | services  | Services    | White       | 6 service cards (icon + title + desc) in horizontal slider |
| 3   | portfolio | Portfolio   | Dark navy   | Grid of project thumbnails + "LOAD MORE" |
| 4   | about     | CRAFTERS    | White       | Team member carousel (photo + name + social icons) |
| 5   | news      | STORIES     | Dark navy   | Blog/news cards in carousel        |
| 6   | video     | Video       | Dark navy   | Full-width background image with video popup |
| 7   | skills    | EXPERTISE   | White       | Two-column: progress bars + text   |
| 8   | contact   | Contact     | White       | Contact form (name, email, subject, message) |

Navigation: Home | Services | Portfolio | About | News | Video | Skills | Contact

## Gherkin Requirements

### Hero Section
- **Scenario:** Full-screen hero slider displays on page load
  - Given the user visits the page
  - Then a full-screen dark navy hero is visible
  - And a left/right arrow navigation is present

### Services Section
- **Scenario:** Service cards are displayed in a scrollable row
  - Given the user scrolls to the services section
  - Then 6 service cards are visible with icon, title, and description
  - And a carousel arrow allows horizontal scrolling

### Portfolio Section
- **Scenario:** Portfolio grid displays project thumbnails on dark navy
  - Given the user scrolls to the portfolio section
  - Then a grid of portfolio images is visible on a dark navy background
  - And a "LOAD MORE" link is present

### About/Crafters Section
- **Scenario:** Team members carousel displays team info
  - Given the user scrolls to the about section
  - Then team member cards are visible with photo, name, and social icons
  - And a carousel arrow allows navigation

### News/Stories Section
- **Scenario:** News cards display in a carousel
  - Given the user scrolls to the news section
  - Then news/blog cards are visible on a dark navy background
  - And a carousel arrow allows navigation

### Video Section
- **Scenario:** Video section displays with popup
  - Given the user scrolls to the video section
  - Then a full-width background image is visible
  - And a play button triggers a video popup overlay

### Skills/Expertise Section
- **Scenario:** Skills section displays progress bars
  - Given the user scrolls to the skills section
  - Then a two-column layout shows progress bars on the left
  - And descriptive text appears on the right

### Contact Section
- **Scenario:** Contact form accepts user input
  - Given the user scrolls to the contact section
  - Then a form with name, email, subject, and message fields is visible
  - And a submit button is present

### Footer
- **Scenario:** Footer links to Component Dock
  - Given the user scrolls to the footer
  - Then a link to "Component Dock" is present

## Verification Checklist

- [ ] Section order matches original: hero → services → portfolio → about → news → video → skills → contact → footer
- [ ] Brand colors match: #221C5A (navy), #E74C78 (pink), #32DB8A (green)
- [ ] Font stack: Roboto (body), Montserrat (headings), PT Serif (testimonials)
- [ ] Hero is full-screen with slider/arrows on dark navy background
- [ ] Services: 6 cards with icon + title + desc in scrollable row
- [ ] Portfolio: grid on dark navy with "LOAD MORE" CTA
- [ ] About: team member carousel with photos + social icons
- [ ] News: blog cards in carousel on dark navy
- [ ] Video: full-width background image with video popup
- [ ] Skills: two-column with progress bars
- [ ] Contact: form with all 4 fields
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] Zero ColorLib references in app code
- [ ] All placeholder images via picsum.photos/seed/boxwise-*
- [ ] No new dependencies added without justification
