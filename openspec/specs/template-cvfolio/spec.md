# Template: CvFolio (CV / Resume)

## Purpose

Recreation of ColorLib "Cvportfolio" — a boxed CV/portfolio/resume single-page
template with a yellow accent, profile photo, portfolio grid, and work experience.

- **ColorLib source:** https://colorlib.com/wp/template/cvportfolio/
- **Preview URL:** https://preview.colorlib.com/theme/cvportfolio/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from live preview CSS)

| Token             | Value                     | Usage                                  |
| ----------------- | ------------------------- | -------------------------------------- |
| Brand primary     | `#FFA804` / `#FFAD01`     | Header bar, accent underline, links    |
| Brand secondary   | `#FFA600`                 | `.font-yellow` class (role headings)   |
| Heading color     | `#333`                    | Body text, h1–h6                       |
| Paragraph color   | `#777`                    | Body copy                              |
| Muted text        | `#999` / `#666`          | Subheadings, filter links              |
| Social icon bg    | `#887392` (purple)        | Social icons before hover              |
| Social icon hover | `#FFA804`                 | Social icons after hover (scale anim)  |
| Font family       | Poppins (400–700)         | Body and headings                      |
| Script font       | Allura (400)              | Loaded but not visible in current page |
| Button radius     | 4px                       | Download CV button                     |
| Section underline | 10px tall × 50px wide, 5px radius, `#FFA804` | Section heading accent |
| Social icon shape | 35px circle, 20px border-radius | Pill icons                  |
| Profile photo     | 200×200px, 100% border-radius | Circular profile image              |
| Header background | `#FFAD01`                 | Rounded top bar (border-radius 5px)    |
| Card bg           | `#fff`                    | Intro card overlay on hero image       |
| Section padding   | 100px top/bottom          | Between major sections                 |

### Hero background

Full-width background image (`slider-1-1920x1080.jpg`) with a dark overlay
(`rgba(0,0,0,0.2)`) and a white gradient/transition at the bottom (150px white
block). The profile photo floats up into the hero via negative margin.

## Section structure (from live DOM)

1. **Header** — absolute-positioned top bar with 3 info columns (address, phone,
   email) and a "Download CV" button; yellow `#FFAD01` background with rounded
   corners.
2. **Intro / Profile** — centered profile photo (circle), name, job title,
   personal info list (DOB, email, marital status), social icons row.
3. **Portfolio** — section heading + filter tabs (ALL / WEB DESIGN / BRANDING /
   GRAPHIC DESIGN) + masonry-style grid of portfolio images (3 columns, some
   items span 2 stacked images).
4. **About Me** — section heading + descriptive paragraph + 4 radial progress
   bars (HTML5 & CSS3 97%, Web Design 78%, Java 67%, PHP 97%).
5. **Work Experience** — section heading + 2 experience entries each with job
   title, company, date range, description, and bullet list.
6. **Education** — section heading + education entries with degree, institution,
   graduation info.
7. **Counter / Stats** — animated number counters (if present in the full DOM).
8. **Footer** — bottom section with Component Dock link.

## Gherkin requirements

### Feature: Header contact bar

```gherkin
Scenario: Header displays contact information
  Given the page is loaded
  Then a header bar is visible at the top
  And the header contains address, phone, and email columns
  And a "Download CV" button is visible in the header
  And the header background is yellow (#FFAD01)

Scenario: Header is fixed above hero content
  Given the page is loaded
  Then the header sits above the hero background image
```

### Feature: Intro / Profile section

```gherkin
Scenario: Profile displays name and job title
  Given the page is loaded
  Then the intro section shows a circular profile photo
  And a name heading is displayed
  And a job title subtitle is displayed

Scenario: Personal info list is shown
  Given the page is loaded
  Then a list of personal details (DOB, email, marital status) is visible

Scenario: Social icons row is interactive
  Given the page is loaded
  Then 5 social icons are displayed (Pinterest, LinkedIn, Instagram, Facebook, Twitter)
  And hovering an icon transitions its background to yellow (#FFA804)
```

### Feature: Portfolio section

```gherkin
Scenario: Portfolio heading with accent underline
  Given the page is loaded
  Then a "Portfolio" heading is displayed with "MY WORK" subtitle
  And a yellow accent bar appears above the heading

Scenario: Filter tabs are rendered
  Given the page is loaded
  Then filter tabs are shown: ALL, WEB DESIGN, BRANDING, GRAPHIC DESIGN
  And "ALL" is the active/default filter

Scenario: Portfolio grid shows images
  Given the page is loaded
  Then a masonry-style grid of portfolio images is displayed
  And items are arranged in 3 columns
  And some items show 2 stacked images side by side
```

### Feature: About Me section

```gherkin
Scenario: About me content and skill bars
  Given the page is loaded
  Then an "About me" heading is displayed with "PROFESSIONAL PATH" subtitle
  And a descriptive paragraph is shown
  And 4 radial progress bars are displayed (HTML5, Web Design, Java, PHP)
```

### Feature: Work Experience section

```gherkin
Scenario: Experience entries are listed
  Given the page is loaded
  Then a "Work Experience" heading is displayed with "PREVIOUS JOBS" subtitle
  And 2 experience entries are shown
  And each entry has a job title, company, date range, description, and bullet list
  And company names are styled in yellow accent color
```

### Feature: Education section

```gherkin
Scenario: Education entries are listed
  Given the page is loaded
  Then an "Education" heading is displayed with "ACADEMIC CAREER" subtitle
  And education entries show degree, institution, and graduation info
```

### Feature: Footer

```gherkin
Scenario: Footer contains Component Dock link
  Given the page is loaded
  Then a footer is visible at the bottom
  And it links to https://www.componentdock.com/
```

## Verification checklist

- [ ] Header: 3-column contact bar with yellow background, Download CV button
- [ ] Intro: circular profile photo, name, title, personal info, social icons with hover
- [ ] Portfolio: heading with yellow accent, filter tabs, masonry grid
- [ ] About: heading with accent, paragraph, 4 radial progress circles
- [ ] Experience: heading with accent, 2 entries with job details and bullets
- [ ] Education: heading with accent, education entries
- [ ] Footer: links to Component Dock
- [ ] Fonts: Poppins loaded via Google Fonts
- [ ] Brand color: #FFA804 used consistently for accents
- [ ] Responsive layout works on mobile
- [ ] 100% test coverage
