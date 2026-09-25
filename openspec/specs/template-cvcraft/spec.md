# Template: CVCraft (Portfolio — Personal CV / Resume Portfolio)

## Purpose

CVCraft is a single-page personal CV/portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Cvportfolio"
design (see TEMPLATES.md), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a CV-style personal portfolio: a bold orange header bar with
contact info and a "Download CV" button, a full-width hero with a profile photo,
name and title, a portfolio gallery with filter tabs, an "About Me" section with
radial skill progress bars, a dark-purple work experience timeline, an education
timeline with orange dots, a counter stats section over a background image, and
a dark-purple footer. CVCraft recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cvportfolio" — personal CV/portfolio website
  template (source: https://colorlib.com/wp/template/cvportfolio/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/cvportfolio/
  (HTTP 200, full rendered DOM + `01-cv-portfolio/css/styles.css` (262 lines) +
  `01-cv-portfolio/css/responsive.css` + Bootstrap + Ionicons + Fluidbox extracted
  2026-09-26 during prep). The TEMPLATES.md screenshot (`cvportfolio-free-template.jpg`)
  was referenced for visual confirmation.
- **Section order (1:1):**
  1. Header — absolute-positioned orange (#FFAD01) bar with rounded corners containing
     3-column contact info (address, phone, email) + "Download CV" button (same orange,
     box-shadow inset, 4px radius, hover translate-up).
  2. Intro Section — full-width background image (dark overlay 20% black), profile
     photo (200px circle, pulled up -100px over hero), name h2, title h4 in
     orange (#FFA600), information list (email, age, address, phone), social icons
     row (circular purple #887392 buttons, orange hover via scale transform).
  3. Portfolio Section — heading "Portfolio / MY WORK" left, filter tabs right
     (ALL, etc., active = orange #FFA804), 3-column masonry-like grid of portfolio
     images (some items span 2 images side-by-side), filterable by category.
  4. About Section — heading "About me / PROFESSIONAL PATH" left, paragraph right,
     then 4-column row of radial progress bars (HTML5 & CSS3 97%, Web Design 78%,
     Java 67%, PHP 97%) with orange accents.
  5. Experience Section — dark purple (#28023D) background, heading "Work Experience /
     PREVIOUS JOBS" left, 2 job entries right (title, company in orange, date range,
     description paragraph, bullet list). Left border timeline with white circle dots.
  6. Education Section — white background, heading "Education / ACADEMIC CAREER" left,
     3 education entries right (degree, institution in orange, date, description).
     Left border timeline with orange dots (#FFAB00) + orange glow ring.
  7. Counter Section — background image (dark overlay), 4 stat counters in a row
     (3 Coder Degrees, 25 Project Completed, 311 Satisfied Clients, 732 Finished
     Projects) — large number + small label, right-aligned title, left-aligned desc.
  8. Footer — dark purple (#28023D) background, centered copyright text with
     heart icon, link to ComponentDock (replacing ColorLib link).
- **Screenshot visual notes:** Clean white CV layout with a strong orange header
  bar at top. Profile photo floats over a full-width hero image. White content
  sections alternate with dark purple (#28023D) experience/counter sections.
  Orange accent used consistently for headings, active states, and timeline dots.
  Overall feel: professional, bold, warm-toned CV with clear visual hierarchy.

## Design tokens

| Token                | Value / Notes                                                       |
| -------------------- | ------------------------------------------------------------------- |
| Brand orange         | `#FFA804` (primary accent — buttons, active filter, heading bars, links) |
| Brand orange alt     | `#FFA600`, `#FFAD01`, `#FFAB00` (variations in header bg, title, dots) |
| Dark purple          | `#28023D` (experience section bg, footer bg, counter section overlay) |
| Social icon purple   | `#887392` (social icon button default bg)                           |
| Body text            | `#333` (headings default)                                           |
| Paragraph text       | `#777` (p tags)                                                     |
| Muted text           | `#999` (`.font-lite-black` — subtitles)                             |
| Semi-white text      | `#ddd` (experience section paragraphs)                              |
| White                | `#fff` (header text, intro card bg, counter text)                   |
| Font — primary       | `'Poppins', sans-serif` (body, headings)                            |
| Font — accent        | `'Allura', cursive` (loaded but used sparingly — can use for name)   |
| Button radius        | `4px` (Download CV button)                                          |
| Profile image        | `200px` diameter circle                                              |
| Social icon size     | `35px` circle, `20px` border-radius (pill shape)                    |
| Section heading bar  | `10px` height × `50px` width, `5px` border-radius, `#FFA804`       |
| Section padding      | `100px 0 50px` desktop; `50px 0 0` mobile                           |
| Education dot        | `16px` circle `#FFAB00` + `8px` ring `rgba(255,171,0,.4)`          |
| Education line       | `2px` solid `#ccc` vertical line                                    |
| Timeline dot (exp)   | `10px` circle, `2px` solid `#fff` border                            |

## Requirements (Gherkin)

### Scenario: Header contact bar renders correctly

```gherkin
Given the user visits the CVCraft page
Then a header bar is visible at the top with an orange background
And the header contains 3 contact info columns: address, phone, email
And each contact column has an icon and text
And a "Download CV" button is visible on the right side of the header
When the user hovers over the "Download CV" button
Then the button moves up slightly (translateY effect)
```

### Scenario: Intro hero section displays profile info

```gherkin
Given the user visits the CVCraft page
Then the intro section shows a full-width background image with dark overlay
And a circular profile photo is displayed (centered, overlapping the hero)
And the person's name is shown in bold below the photo
And the person's title is shown in orange below the name
And an information list shows email, age, address, and phone
And social media icon buttons are displayed (Pinterest, LinkedIn, Instagram, Facebook, Twitter)
When the user hovers over a social icon
Then the icon background transitions from purple to orange
```

### Scenario: Portfolio section with filter tabs

```gherkin
Given the user visits the CVCraft page
Then the portfolio section displays a "Portfolio" heading with "MY WORK" subtitle
And filter tabs are visible: ALL (active/orange) and category options
And a grid of portfolio images is displayed in 3 columns
When the user clicks a filter tab
Then only portfolio items matching that category are shown
And the active filter tab text turns orange
```

### Scenario: About section with skill progress bars

```gherkin
Given the user visits the CVCraft page
Then the "About me" section displays with "PROFESSIONAL PATH" subtitle
And a paragraph of professional bio text is shown
And 4 radial progress bars are displayed in a row
And each progress bar shows a skill name and percentage
When the progress bars animate
Then they fill to their respective percentages (97%, 78%, 67%, 97%)
```

### Scenario: Experience section with timeline

```gherkin
Given the user visits the CVCraft page
Then the experience section has a dark purple background (#28023D)
And white text is used throughout the section
And the heading "Work Experience" with "PREVIOUS JOBS" subtitle is shown
And 2 job entries are displayed with title, company (orange), date range, description, and bullet points
And a vertical timeline with white circle dots is visible on the left
```

### Scenario: Education section with timeline

```gherkin
Given the user visits the CVCraft page
Then the education section shows "Education" heading with "ACADEMIC CAREER" subtitle
And 3 education entries are displayed with degree, institution (orange), date, and description
And a vertical timeline with orange dots and glow rings is visible on the left
```

### Scenario: Counter stats section

```gherkin
Given the user visits the CVCraft page
Then the counter section displays over a background image with dark overlay
And 4 statistics are shown in a row: Coder Degrees (3), Project Completed (25), Satisfied Clients (311), Finished Projects (732)
And each stat shows a large number and a small label below
```

### Scenario: Footer

```gherkin
Given the user visits the CVCraft page
Then the footer has a dark purple (#28023D) background
And centered copyright text is displayed
And a link to ComponentDock is present ("Made with Component Dock")
```

### Scenario: Responsive layout

```gherkin
Given the user views the page on a mobile device (max-width 767px)
Then the header stacks contact columns vertically
And the intro section adjusts padding for the taller profile image
And the portfolio grid shows 1-2 columns instead of 3
And the about/education/experience sections stack their heading and content vertically
And the counter section centers the stats and shows 2 columns
```

## Verification checklist

- [ ] Header: orange bg, 3 contact columns with icons, Download CV button with hover effect
- [ ] Intro: background image + dark overlay, circular profile photo (200px), name, orange title, info list, social icons with purple→orange hover
- [ ] Portfolio: heading + filter tabs, 3-column grid, filterable items, active = orange
- [ ] About: heading + bio paragraph, 4 radial progress bars with correct percentages
- [ ] Experience: dark purple bg, white text, 2 job entries, timeline dots
- [ ] Education: white bg, 3 entries, orange timeline dots with glow
- [ ] Counter: background image + overlay, 4 stats in row
- [ ] Footer: dark purple bg, copyright, ComponentDock link
- [ ] Responsive: mobile layout for all sections
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Fonts loaded via Google Fonts link (Poppins + Allura)
- [ ] 100% test coverage (Vitest + Testing Library)
