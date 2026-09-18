# Template: JobForge (Job Board)

## Purpose

Recreation of ColorLib **Jobstart** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/jobstart/
- **Preview:** https://preview.colorlib.com/theme/jobstart/
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **New name:** `jobforge` (never reuse ColorLib source name)

## Design tokens

| Token | Value | Source |
|---|---|---|
| Primary brand color | `#26baee` (sky blue) | CSS `.btn-primary`, `.block-4` active dot, `.site-block-27` active |
| Secondary button bg | `#e6e7e9` (light gray) | CSS `.btn-secondary` |
| Background light | `#edf0f5` / `#f8f9fa` | CSS `.site-section.bg-light` |
| Dark text | `#000` / `#393e46` / `#25262a` | Various headings |
| Body text | `#4d4d4d` / `#b3b3b3` | Muted paragraph text |
| Footer bg | `#393e46` (dark charcoal) | CSS `.site-footer` |
| Danger/accent (heart icon) | `#f23a2e` | `.btn-danger` for favorited jobs |
| Font family | `"Nunito Sans", sans-serif` | CSS body + headings |
| Font weights used | 200, 300, 400, 700, 900 | Nunito Sans web font |
| Button radius | `30px` (pill shape) | CSS border-radius on buttons |
| Pagination dot radius | `50%` (circle) | `.site-block-27` |
| Hero overlay | `rgba(0,0,0,0.4)` | `.site-blocks-cover` overlay |
| Hero min-height | `600px` (desktop: `100vh`) | CSS `.site-blocks-cover` |

## Visual design (from screenshot)

- **Hero:** Full-width cover image (person with briefcase, left-aligned content) with dark overlay. Large bold heading "Largest Job **Site** On The Net" with two CTA tabs: "FIND A JOB" (blue filled) and "FIND A CANDIDATE" (text). Below: a white search bar with keyword input, category dropdown, location input, and blue "Search" button.
- **Navbar:** White background, right-aligned links (Home, Category dropdown, Blog, About, Contact), blue "+ Post a Job" CTA button.
- **Recent Jobs:** Light gray background section. Section heading left, blue "Post a Job" button right. Job cards in white with: title, badge (Part Time / Full Time / Freelance), company name, location, heart icon (favorite), and blue "Apply Job" button.
- **Why JobForge:** White background. Section heading centered. 6 feature cards in 2 rows of 3: each has an icon, title (Search Millions of Jobs, Location Search, Top Careers, Search Expert Candidates, Easy To Manage Jobs, Online Reviews).
- **Testimonials ("Happy Employers"):** Light gray background. Carousel with profile photos, name, role, quote text. Pagination dots below.
- **Latest Blog:** White background. 4-column grid of blog cards, each with image, title, metadata (author, date), excerpt.
- **Subscribe Newsletter:** Dark section with email input and subscribe button.
- **Footer:** Dark charcoal (`#393e46`). 4 columns: For Candidates, For Employers, Archives, Company + Contact Info. Bottom copyright bar.

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user loads the page
  Then a navbar is visible with the brand "JobForge" on the left
  And navigation links "Home", "Category", "Blog", "About", "Contact" appear on the right
  And a "+ Post a Job" CTA button is visible in the navbar

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls past the hero
  Then the navbar should remain fixed at the top of the viewport
```

### Hero section

```gherkin
Scenario: Hero displays headline and search tabs
  Given the user views the hero section
  Then a background image with dark overlay is displayed
  And the heading "Largest Job Site On The Net" is visible
  And two tab buttons appear: "Find A Job" (active, blue) and "Find A Candidate"

Scenario: Job search form is displayed
  Given the "Find A Job" tab is active
  Then a search bar is visible with inputs for keyword, category (dropdown), and location
  And a "Search" button is displayed

Scenario: Candidate search form switches on tab click
  Given the user clicks "Find A Candidate"
  Then the search form changes to candidate-oriented inputs (name, location)
```

### Recent Jobs section

```gherkin
Scenario: Job listing section renders correctly
  Given the user scrolls to the "Recent Jobs" section
  Then a section heading "Recent Jobs" is displayed
  And a "+ Post a Job" button is shown

Scenario: Job cards display all required information
  Given job listings are loaded
  Then each job card shows: title, job type badge, company name, location, favorite heart icon
  And an "Apply Job" button is visible on each card

Scenario: Job type badges use correct styling
  Given a job has type "Part Time"
  Then the badge displays "Part Time" in a styled pill
```

### Why JobForge (Features) section

```gherkin
Scenario: Features section displays 6 feature cards
  Given the user scrolls to the "Why JobForge" section
  Then a heading "Why JobForge" is displayed
  And 6 feature cards are shown in a 3-column grid (2 rows)
  And each card has an icon, title, and description paragraph

Scenario: Feature titles match the original
  Then the feature titles are: "Search Millions of Jobs", "Location Search", "Top Careers", "Search Expert Candidates", "Easy To Manage Jobs", "Online Reviews"
```

### Testimonials section

```gherkin
Scenario: Testimonials carousel renders
  Given the user scrolls to the "Happy Employers" section
  Then a heading "Happy Employers" is displayed
  And a carousel of testimonials is visible
  And each testimonial shows: profile image, name, role, and quote text

Scenario: Carousel pagination is functional
  Given the testimonials carousel is displayed
  Then pagination dots are visible below the carousel
  And clicking a dot navigates to the corresponding testimonial
```

### Blog section

```gherkin
Scenario: Blog section displays 4 blog cards
  Given the user scrolls to the "Latest Blog" section
  Then a heading "Latest Blog" is displayed
  And 4 blog cards are shown in a 4-column grid
  And each card has: image, title, author name, date, and excerpt text
```

### Subscribe Newsletter section

```gherkin
Scenario: Newsletter section renders
  Given the user scrolls to the "Subscribe Newsletter" section
  Then a heading "Subscribe Newsletter" is displayed
  And an email input field is visible
  And a "Subscribe" button is present
```

### Footer

```gherkin
Scenario: Footer displays link columns
  Given the user scrolls to the footer
  Then columns "For Candidates", "For Employers", "Archives", "Company" are displayed
  And each column contains relevant navigation links
  And a "Contact Info" section is present

Scenario: Footer links Component Dock
  Given the user views the footer
  Then a link to "https://www.componentdock.com/" is present with text "Component Dock"
```

## Verification checklist

- [ ] Brand color `#26baee` used for primary buttons, active states, and accents
- [ ] Font family is Nunito Sans (Google Fonts via `<link>` in index.html)
- [ ] Hero has full-width background image with `rgba(0,0,0,0.4)` overlay
- [ ] Hero heading uses font-weight 900, font-size ~3rem (mobile) / ~5rem (desktop)
- [ ] Buttons have `border-radius: 30px` (pill shape)
- [ ] Job cards: white bg, flex row layout, title + badge + company + location + apply button
- [ ] Feature section: 6 cards in 3-column grid (2 rows) with icon + title + description
- [ ] Testimonial carousel with pagination dots, active dot is brand blue
- [ ] Blog section: 4-column card grid with image + meta + excerpt
- [ ] Subscribe section: dark background with email input + button
- [ ] Footer: dark charcoal (`#393e46`), 4 columns of links, Component Dock link
- [ ] Placeholder images via `https://picsum.photos/seed/jobforge-<n>/<w>/<h>`
- [ ] No references to ColorLib in app source code (comments included)
- [ ] `public/CNAME` contains `jobforge.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
- [ ] `npm install` run at repo root to register new workspace in lockfile
