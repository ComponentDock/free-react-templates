# Template: JobLane (Job Board)

## Purpose

Recreation of ColorLib "Job Board 2" (slug: `jobboard2`).
Preview: https://preview.colorlib.com/theme/jobboard2/
Source: https://colorlib.com/wp/template/job-board-2/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
New name: **joblane** (`apps/joblane`, package `@free-react-templates/joblane`)

## Design tokens

Extracted from `https://preview.colorlib.com/theme/jobboard2/css/style.css`.

| Token | Value | Usage |
|-------|-------|-------|
| brand-primary | `#00D363` | CTA buttons (boxed-btn3), link hover, candidate position badge |
| brand-secondary | `#2B9BFF` | Job search CTA section background |
| brand-secondary-dark | `#0A8CFF` | Overlay on search CTA section |
| footer-bg | `#001D38` | Footer background (dark navy) |
| body-bg | `#F5F7FA` | Featured candidates + top companies sections (light grey) |
| candidate-quote | `#FD8E5E` | Testimonial quote icon background (orange) |
| owl-nav-bg | `#E6F3FF` | Carousel navigation pill background |
| owl-nav-hover | `#7FC1FC` | Carousel navigation pill hover |
| text-dark | `#040E27` | Body text, testimonial paragraph |
| text-heading | `#131313` | Button text, heading links |
| text-subtle | `#7A838B` | Subtitle text, testimonial attribution |
| text-muted | `#7e7e7e` | Generic muted text |
| white | `#ffffff` | Card backgrounds |
| font-family | `"Roboto", sans-serif` | All text |
| button-radius | `5px` | CTA buttons and cards |
| avatar-radius | `50%` | Candidate/testimonial circular images |

## Section structure and Gherkin requirements

Order matches the live preview DOM exactly.

### 1. Navbar

Sticky header on white background. Logo left, nav links center (Home, Browse Job, Pages, Blog, Contact), right side has "Log in" text link and green "Post a Job" CTA button. Mobile: hamburger menu.

```gherkin
Scenario: Navbar displays on page load
  Given I visit the joblane homepage
  Then I see a sticky navbar with logo, navigation links, and "Post a Job" CTA
  And the "Log in" text link is visible in the navbar

Scenario: Navbar is responsive
  Given I visit on a mobile viewport
  Then the hamburger menu icon is visible
  And the desktop nav links are hidden
```

### 2. Hero section

Full-width banner with blue background image. Left side: "4536+ Jobs listed" subtitle, "Find your Dream Job" heading, description text, "Upload Your Resume" green CTA button. Right side: illustration image of people at desks.

```gherkin
Scenario: Hero displays job statistics and CTA
  Given I visit the joblane homepage
  Then I see the heading "Find your Dream Job"
  And I see a stat line like "4536+ Jobs listed"
  And I see an "Upload Your Resume" button

Scenario: Hero has illustration on desktop
  Given I visit on a desktop viewport
  Then I see an illustration image on the right side of the hero
```

### 3. Category search area

White background section with a 4-column search form: keyword input, location dropdown, category dropdown, green "Find Job" button. Below: "Popular Search:" with tag links (Design & Creative, Marketing, Administration, etc.).

```gherkin
Scenario: Search form renders all fields
  Given I visit the joblane homepage
  Then I see a search input for keyword
  And I see a location dropdown
  And I see a category dropdown
  And I see a "Find Job" green button

Scenario: Popular search tags display
  Given I visit the joblane homepage
  Then I see "Popular Search:" label
  And I see clickable tag links for popular categories
```

### 4. Popular Categories

Section title "Popolar Categories" (note: original has typo). 8 category cards in a 4-column grid. Each card: category name heading, position count badge, "Available position" label. Cards are white with 5px border-radius, light border, hover transition.

```gherkin
Scenario: Category grid displays 8 categories
  Given I visit the joblane homepage
  Then I see a "Popular Categories" section
  And there are exactly 8 category cards
  And each card shows a category name, position count, and "Available position"

Scenario: Category cards are styled consistently
  Given I view a category card
  Then it has a white background with rounded corners
  And the position count is displayed in a colored badge
```

### 5. Job Listing

Section title "Job Listing" on left, "Browse More Job" outlined button on right. Below: list of job cards, each with company icon (SVG), job title, location (map marker icon), employment type (clock icon), "Apply Now" green button, heart/favorite icon, and deadline date. Cards have white background.

```gherkin
Scenario: Job listing section displays job cards
  Given I visit the joblane homepage
  Then I see a "Job Listing" heading
  And I see multiple job cards each with a title, location, type, and "Apply Now" button

Scenario: Each job card shows metadata
  Given I view a job card
  Then I see a company icon thumbnail
  And I see location and employment type with icons
  And I see a deadline date
  And I see a heart/favorite icon

Scenario: Browse More Job link is present
  Given I visit the joblane homepage
  Then I see a "Browse More Job" outlined button in the job listing section
```

### 6. Featured Candidates

Light grey background (#F5F7FA). Section title centered. Owl-carousel of candidate cards, each with circular avatar image, candidate name, and role title. White card with 5px border-radius.

```gherkin
Scenario: Featured candidates carousel renders
  Given I visit the joblane homepage
  Then I see a "Featured Candidates" section
  And I see circular candidate avatar images
  And each candidate has a name and role

Scenario: Candidate cards have consistent styling
  Given I view a candidate card
  Then it has a white background with rounded corners
  And the avatar is displayed as a circle
```

### 7. Top Companies

Light grey background. Section title on left, "Browse More Job" outlined button on right. 4-column grid of company cards with company icon, company name, and available position count. White cards with 5px border-radius.

```gherkin
Scenario: Top companies grid displays 4 companies
  Given I visit the joblane homepage
  Then I see a "Top Companies" section
  And there are 4 company cards
  And each card shows a company icon, name, and position count
```

### 8. Job Search CTA

Blue background section (#2B9BFF) with semi-transparent overlay (#0A8CFF, 0.8 opacity). Two columns: "Looking for a Job?" with "Browse Job" button, and "Looking for a Expert?" with "Post a Job" button. Text is white.

```gherkin
Scenario: Job search CTA section displays dual calls to action
  Given I visit the joblane homepage
  Then I see a blue background section with two CTA blocks
  And one says "Looking for a Job?" with a "Browse Job" button
  And the other says "Looking for a Expert?" with a "Post a Job" button
```

### 9. Testimonials

White background, 100px vertical padding. Carousel of testimonial cards, each with circular avatar image, orange quote icon overlay, testimonial paragraph text, and attribution name.

```gherkin
Scenario: Testimonials carousel renders
  Given I visit the joblane homepage
  Then I see a "Testimonial" section
  And I see circular author avatars
  And each testimonial has a quote and attribution

Scenario: Testimonials have consistent styling
  Given I view a testimonial
  Then it displays a circular avatar with an orange quote icon overlay
  And the testimonial text is displayed beside the avatar
```

### 10. Footer

Dark navy background (#001D38). 4-column layout: logo + contact info + social links, Company links, Category links, Newsletter subscribe form. Below: copyright text with "Component Dock" link (replacing original Colorlib attribution).

```gherkin
Scenario: Footer displays four content columns
  Given I scroll to the bottom of the joblane homepage
  Then I see a dark background footer
  And I see a logo column with contact info and social icons
  And I see a Company links column
  And I see a Category links column
  And I see a Newsletter subscribe form

Scenario: Footer links to Component Dock
  Given I view the footer copyright
  Then I see a link to https://www.componentdock.com/
  And the link text says "Component Dock"
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Design tokens match reference (green #00D363 CTAs, Roboto font, 5px radius)
- [ ] Hero illustration on right side (desktop)
- [ ] Category search form with 3 inputs + button
- [ ] 8 popular category cards in grid
- [ ] Job listing with 6 job cards showing all metadata
- [ ] Featured candidates carousel with circular avatars
- [ ] Top companies 4-column grid
- [ ] Blue CTA section with two call-to-action blocks
- [ ] Testimonial carousel with quote styling
- [ ] Dark navy footer with 4 columns
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] No Colorlib references in app code
- [ ] public/CNAME = `joblane.free.componentdock.com`
- [ ] homepage = `https://joblane.free.componentdock.com`
