# Template: JobPulse (Job Board)

## Purpose

Recreation of ColorLib's **Jobsco** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobsco/
- **Preview:** https://preview.colorlib.com/theme/jobsco/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobsco-free-template.jpg
- **New name:** `jobpulse`
- **App folder:** `apps/jobpulse`
- **Package:** `@free-react-templates/jobpulse`
- **Surge target:** `jobpulse.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#000DFF` | Electric blue — primary buttons, links, accent overlays |
| Dark navy | `#00044A` | Deep navy for headings and strong text |
| Text muted | `#6D6E8D` | Grey for secondary body copy |
| Text secondary | `#635c5c` | Slightly warmer grey for descriptions |
| Background light | `#F1F5F9` | Light grey section backgrounds (hero, about, footer) |
| Background off-white | `#FBFBFB` | Alternate section backgrounds |
| Background warm | `#F7F7F7` | Subtle warm grey |
| White | `#fff` | Card backgrounds, text on brand color |
| Green accent | `#27CB8B` | Secondary accent for tags/badges |
| Font family | `"DM Sans", sans-serif` | Google Font — load via `<link>` in index.html |
| Button radius | `0px` | Sharp square buttons — no border-radius |
| Card radius | `5px` | Subtle rounding on cards |
| Hero button shadow | `0px 15px 20px rgba(0,13,255,0.12)` | Lifted shadow on primary CTA |
| Button hover | `#000DFF` bg, white text, scaleX slide-in overlay | Animated fill on hover |

## Section structure (page order)

1. **Navbar** — Sticky header with brand logo left, navigation links center (Home, Find Jobs, Categories, About, Contact), login/register buttons right. Transparent on hero, solid on scroll. Mobile hamburger menu.
2. **Hero** — Light grey (`#F1F5F9`) background. Left side: subtitle "Easiest way to find a perfect job", headline "Find Your Next Dream Job", two buttons ("Looking For a Job?" primary blue with shadow, "Find Talent" outline/text link). Right side: hero illustration image. Decorative bouncing shapes. Large "jobs" watermark text in background.
3. **Top Jobs** — "Browse From Our Top Jobs" heading. Horizontal slider/carousel of 6 job cards. Each card: company icon, job title, tag pills, salary/company info. Arrow navigation.
4. **About** — Light grey (`#F1F5F9`) background. Split layout: left image, right content with heading "We Build Lasting Relationships Between Candidates & Businesses", two paragraphs, "Find Talent" button. Large "Talents" watermark text.
5. **Job Categories** — "Browse From Top Categories" heading. 6 category cards in a 3-column grid. Each card: icon image + category title (e.g. Web Design, Marketing, Banking, IT, etc.).
6. **Testimonials** — Carousel/swiper with quote text, founder image, person name, role. Dot navigation for multiple slides. Decorative shape overlay.
7. **Footer** — Light grey (`#F1F5F9`) background. 3-column layout: logo + description + social icons, Useful Links list, Subscribe Newsletter form with email input and arrow button. Bottom bar with copyright and Component Dock link.

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user visits the page
  Then the navbar shows "JobPulse" as the brand
  And it has links: Home, Find Jobs, Categories, About, Contact
  And login/register buttons are visible on the right

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top
  And the background becomes solid white

Scenario: Mobile hamburger menu
  Given the viewport is under 1024px wide
  Then the nav links are hidden
  And a hamburger icon is visible
  When the user taps the hamburger
  Then the mobile menu slides open
```

### Hero section

```gherkin
Scenario: Hero displays headline and CTAs
  Given the user visits the page
  Then a subtitle "Easiest way to find a perfect job" is visible
  And a headline "Find Your Next Dream Job" is visible
  And a "Looking For a Job?" button is visible with blue background
  And a "Find Talent" text link is visible

Scenario: Hero has decorative elements
  Given the user views the hero section
  Then a hero illustration image is visible on the right
  And decorative shape images are present
  And a large "jobs" watermark text is in the background

Scenario: Hero primary button has shadow
  Given the user hovers over "Looking For a Job?"
  Then the button shows a blue shadow effect
```

### Top Jobs section

```gherkin
Scenario: Top Jobs displays heading and cards
  Given the user scrolls to the top jobs section
  Then a "Browse From Our Top Jobs" heading is visible
  And at least 6 job cards are displayed in a horizontal layout

Scenario: Each job card shows details
  Given a job card is rendered
  Then it displays a company icon
  And a job title
  And tag pills with job attributes
  And salary or company info

Scenario: Job cards have carousel navigation
  Given multiple job cards exist
  Then left/right arrow buttons are available
  When the user clicks an arrow
  Then the visible cards shift accordingly
```

### About section

```gherkin
Scenario: About section displays split layout
  Given the user scrolls to the about section
  Then an image is visible on the left
  And a heading "We Build Lasting Relationships Between Candidates & Businesses" is visible on the right
  And two paragraphs of descriptive text are visible
  And a "Find Talent" button is visible

Scenario: About section has watermark
  Given the user views the about section
  Then a large "Talents" watermark text is visible in the background
```

### Job Categories section

```gherkin
Scenario: Categories displays grid of cards
  Given the user scrolls to the categories section
  Then a "Browse From Top Categories" heading is visible
  And at least 6 category cards are displayed in a grid

Scenario: Each category card shows icon and title
  Given a category card is rendered
  Then it displays a category icon image
  And a category title text
```

### Testimonials section

```gherkin
Scenario: Testimonials displays carousel
  Given the user scrolls to the testimonials section
  Then a testimonial quote is visible
  And a founder avatar image is visible
  And a person name and role are visible

Scenario: Testimonials has dot navigation
  Given multiple testimonials exist
  Then dot indicators are visible
  When the user clicks a dot
  Then the corresponding testimonial is displayed
```

### Footer

```gherkin
Scenario: Footer displays three columns
  Given the user scrolls to the footer
  Then a logo and description are visible in the first column
  And social media icons are visible
  And "Useful links" list is in the second column
  And "Subscribe Newsletter" form is in the third column

Scenario: Newsletter form accepts email
  Given the user views the newsletter form
  Then an email input field is visible
  And a submit arrow button is visible

Scenario: Footer shows copyright
  Given the user views the footer bottom
  Then a copyright notice is visible
  And a "Component Dock" link is present
```

## Verification checklist

- [ ] All7 sections render in correct page order (Navbar through Footer)
- [ ] Brand color `#000DFF` used on primary buttons and links
- [ ] Font family `"DM Sans"` loaded and applied globally
- [ ] Buttons have sharp square corners (border-radius: 0)
- [ ] Hero section has grey background (`#F1F5F9`)
- [ ] Hero watermark "jobs" text visible in background
- [ ] Top Jobs horizontal card carousel with arrow navigation
- [ ] About section split layout (image left, content right)
- [ ] About section watermark "Talents" text
- [ ] 6 category cards in responsive grid
- [ ] Testimonial carousel with dot navigation
- [ ] Footer 3-column layout with newsletter form
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] All images use `picsum.photos` placeholders
- [ ] Responsive at mobile/tablet/desktop breakpoints
- [ ] No ColorLib references in app source code
