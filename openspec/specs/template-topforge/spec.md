# Template: TopForge (Construction Company)

## Purpose

TopForge is a single-page construction company website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Topbuilder" free template (source:
https://colorlib.com/wp/template/topbuilder/), built under a DIFFERENT name
(**TopForge**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 3 multi-section construction company landing page:
a top utility bar with contact info + social icons, a full-width hero slider
with dark overlay text, a 4-column "Professional Builder" icon row, an
About Us section (7/5 split with image), a "What We Offer" 3-column card
grid with images, a "Our Features" split (image left / checklist right),
a "Our Services" tabbed portfolio filter with 8-item gallery, a 4-member
team grid with social overlays, an achievements/counter section (dark
parallax background), a testimonial carousel, a featured works 8-item
gallery (dark parallax), a blog 3-column cards section, a partners logo
carousel + booking CTA strip, and a 4-column footer with social icons,
quick links, recent posts, and newsletter. Color scheme: brand yellow
`#f6b60b`, dark `#222222` / `#111f29`, light `#f5f5f5` / `#f7f7f7`,
white `#fff`, text `#555555`. Font: Roboto (Google Fonts). Buttons:
rectangular (border-radius: 0), brand yellow background.

**WHAT MAKES TOPFORGE DISTINCT (signature behaviors):**

1. **Full-width hero slider with dark overlay.** Camera slider with two
   slides, each showing a construction photo with centered white text
   overlay (small "Welcome to our" subheading, bold ALL-CAPS heading,
   paragraph, and a CTA link). The slider fills the full viewport width
   with no container constraint.

2. **4-column "Professional Builder" icon row.** Immediately below the
   hero: a 4-column grid with icons (fa-home, fa-building, fa-clock-o,
   fa-thumbs-up), headings ("Professional Builder", "We Deliver Quality",
   "Always On Time", "We Are Pasionate"), and lorem ipsum paragraphs.
   This section has a white background and no padding-top (flush with
   the slider).

3. **About Us — 7/5 image-text split.** Left column (col-md-7): "WHO WE
   ARE" heading + paragraph + "Contact Now" CTA button. Right column
   (col-md-5): a construction worker/team photo. Background: light
   grey `#f5f5f5`.

4. **What We Offer — 3-column image cards.** Each card has a full-width
   image on top, an icon + uppercase link title + paragraph below.
   Categories: Building Construction, Project Planning, House Renovation.
   Background: white `#fff`.

5. **Our Features — 2-column split (image left / checklist right).**
   Left: a construction professional photo. Right: "WHY CHOOSE US"
   heading with 3 feature items, each with an icon (fa-wrench,
   fa-rocket, fa-users), a bold title, and a paragraph. Background:
   light `#f7f7f7`.

6. **Our Services — tabbed portfolio filter.** Filter tabs (All,
   Architecture, Building, Construction, Design, Painting) above an
   8-item masonry-style gallery grid. Each item shows a construction
   image with a hover overlay (project name + link/search icons).

7. **Our Team — 4-member grid with social overlay.** Each member card
   shows a portrait photo, and on hover: social icons (Facebook, Twitter,
   LinkedIn) slide up from below, with name and role displayed. Background:
   light `#f5f5f5`.

8. **Our Achievements — dark parallax counter section.** Dark background
   (`#222222` or `#111f29`) with parallax scroll. Four counters: 800
   Projects Completed, 230 House Renovations, 1390 Workers Employed,
   125 Awards Won. Each has an icon + number + label. Numbers animate
   on scroll.

9. **Testimonials — carousel.** 3-column carousel with avatar photo,
   name, role, and quote text with decorative quote marks. Auto-rotates.

10. **Featured Works — dark parallax gallery.** Dark background with
    parallax. 8-item full-width grid, each with an image and hover
    overlay (project name + "VIEW PROJECT" link).

11. **Latest Blog — 3-column cards.** Each card: featured image,
    heading link, author + date, excerpt with "Read More" link.
    Background: white.

12. **Partners + Booking CTA strip.** Logo carousel (5 client logos)
    followed by a full-width yellow `#f6b60b` strip with "Booking now"
    text + "book now" CTA button.

13. **4-column footer.** About company (logo + social icons), Quick Links,
    Recent Posts (3 items with thumbnails), and Newsletter signup.
    Background: dark `#111f29`.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#f6b60b` (golden yellow) | Buttons, accents, CTA strip, hover states |
| Dark background | `#222222` / `#111f29` | Parallax sections, footer, counters |
| Light background | `#f5f5f5` / `#f7f7f7` | Alternating section backgrounds |
| White | `#fff` / `#fefefe` | Content areas, cards |
| Text primary | `#222222` | Headings |
| Text secondary | `#555555` | Body copy |
| Text muted | `#888888` / `#d3dadf` | Secondary labels, footer text |
| Font family | `"Roboto", sans-serif` | All text (Google Fonts) |
| Button radius | `0` (rectangular) | All CTA buttons |
| Social icon radius | `50%` (circular) | Social media icon links |
| Section padding | ~80px vertical | Consistent rhythm across sections |

## Gherkin requirements

### Hero section

```gherkin
Scenario: Hero slider displays with overlay text
  Given the user is on the TopForge page
  Then a full-width hero slider should be visible
  And the slider should contain construction imagery with dark overlay
  And the slider should display "Welcome to our" as a subheading
  And the slider should display a bold ALL-CAPS heading
  And a "Read More" CTA button should be visible

Scenario: Hero slider advances slides
  Given the hero slider is displayed
  When the user waits for the auto-advance interval
  Then the slider should transition to the next slide
```

### Professional Builder section

```gherkin
Scenario: Four feature columns are displayed
  Given the user scrolls to the professional builder section
  Then 4 feature columns should be visible
  And each column should contain an icon, heading, and paragraph
  And the headings should be "Professional Builder", "We Deliver Quality", "Always On Time", and "We Are Pasionate"
```

### About Us section

```gherkin
Scenario: About Us section displays correctly
  Given the user scrolls to the About Us section
  Then a "WHO WE ARE" heading should be visible
  And a paragraph of text should be displayed
  And a "Contact Now" button should be visible
  And a construction image should be visible in the right column
```

### What We Offer section

```gherkin
Scenario: Three service cards are displayed
  Given the user scrolls to the What We Offer section
  Then 3 service cards should be visible
  And each card should have an image, icon, title, and description
  And the titles should be "Building Construction", "Project Planning", and "House Renovation"
```

### Our Features section

```gherkin
Scenario: Features section shows image and checklist
  Given the user scrolls to the Our Features section
  Then a "WHY CHOOSE US" heading should be visible
  And 3 feature items should be displayed
  And each item should have an icon, bold title, and description paragraph
  And a construction professional image should be visible in the left column
```

### Our Services section

```gherkin
Scenario: Portfolio filter tabs are functional
  Given the user scrolls to the Our Services section
  Then 6 filter tabs should be visible: All, Architecture, Building, Construction, Design, Painting
  And 8 gallery items should be displayed
  When the user clicks a filter tab
  Then only matching gallery items should be visible

Scenario: Gallery items show hover overlay
  Given the gallery items are displayed
  When the user hovers over a gallery item
  Then a dark overlay should appear with project name and action icons
```

### Our Team section

```gherkin
Scenario: Team members are displayed in a grid
  Given the user scrolls to the Our Team section
  Then 4 team member cards should be visible
  And each card should show a portrait image, name, and role
  When the user hovers over a team card
  Then social media icons (Facebook, Twitter, LinkedIn) should become visible
```

### Achievements section

```gherkin
Scenario: Counter section displays stats
  Given the user scrolls to the Achievements section
  Then 4 stat counters should be visible
  And the counters should show: 800 Projects Completed, 230 House Renovations, 1390 Workers Employed, 125 Awards Won
  And each counter should have an icon above the number

Scenario: Counters animate on scroll
  Given the counter section is off-screen
  When the user scrolls the counter section into view
  Then the numbers should animate from 0 to their target values
```

### Testimonials section

```gherkin
Scenario: Testimonial carousel displays
  Given the user scrolls to the Testimonials section
  Then a testimonial carousel should be visible
  And each testimonial should show an avatar, name, role, and quote text
  And decorative quote marks should surround the quote text

Scenario: Testimonials auto-rotate
  Given the testimonial carousel is displayed
  When the user waits for the auto-advance interval
  Then the carousel should transition to the next testimonial
```

### Featured Works section

```gherkin
Scenario: Featured works gallery displays
  Given the user scrolls to the Featured Works section
  Then 8 gallery items should be visible in a full-width grid
  And each item should show a construction image
  When the user hovers over a gallery item
  Then a dark overlay should appear with project name and "VIEW PROJECT" link
```

### Latest Blog section

```gherkin
Scenario: Blog posts are displayed
  Given the user scrolls to the Latest Blog section
  Then 3 blog cards should be visible
  And each card should have a featured image, heading link, author, date, and excerpt
  And each excerpt should end with a "Read More" link
```

### Partners + Booking CTA

```gherkin
Scenario: Partners logos are displayed
  Given the user scrolls to the Partners section
  Then 5 partner logos should be visible in a carousel
  And a yellow booking strip should appear below
  And the strip should display "Booking now" text and a "book now" button
```

### Footer

```gherkin
Scenario: Footer displays all columns
  Given the user scrolls to the footer
  Then an "ABOUT OUR COMPANY" column should be visible with logo and social icons
  And a "Quick Links" column should be visible with 3+ links
  And a "Recent Posts" column should be visible with 3 items
  And a "Newsletter" column should be visible with a signup form
  And a "Made with Component Dock" link should be present

Scenario: Footer social icons are clickable
  Given the footer is displayed
  When the user clicks a social icon
  Then the icon should be interactive (not a dead link)

Scenario: Newsletter form validates email
  Given the newsletter form is displayed
  When the user submits with an invalid email
  Then an error state should be shown
  When the user submits with a valid email
  Then the form should accept the submission
```

### Responsive behavior

```gherkin
Scenario: Navigation collapses on mobile
  Given the user is on a mobile viewport
  Then the navigation should collapse into a hamburger menu
  And clicking the hamburger should toggle the menu

Scenario: Sections stack vertically on mobile
  Given the user is on a mobile viewport
  Then multi-column sections should stack into single columns
  And the hero slider should remain full-width
```

## Verification checklist

- [ ] All 13 sections render in correct order
- [ ] Hero slider auto-advances and displays overlay text
- [ ] Professional Builder shows 4 icon columns
- [ ] About Us has 7/5 split with "Contact Now" CTA
- [ ] What We Offer shows 3 image cards
- [ ] Our Features has 2-column split with 3 checklist items
- [ ] Portfolio filter tabs work and filter gallery items
- [ ] Team grid shows 4 members with hover social icons
- [ ] Achievement counters animate on scroll
- [ ] Testimonial carousel auto-rotates
- [ ] Featured Works gallery has hover overlays
- [ ] Blog section shows 3 cards with Read More links
- [ ] Partners carousel + yellow booking CTA strip
- [ ] Footer has all 4 columns + Component Dock link
- [ ] Newsletter form validates email
- [ ] Responsive: nav collapses, sections stack on mobile
- [ ] All images use picsum.photos placeholders
- [ ] Roboto font loaded via Google Fonts
- [ ] Brand color #f6b60b applied consistently
- [ ] No ColorLib references in app code
