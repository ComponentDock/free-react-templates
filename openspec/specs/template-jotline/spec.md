# Template: Jotline (Personal Resume Portfolio)

## Purpose

Recreation of ColorLib "Jackson" — a personal resume/portfolio template with a fixed sidebar layout, dark mode toggle, and 9 content sections.

- **Source:** https://colorlib.com/wp/template/jackson/
- **Preview:** https://preview.colorlib.com/theme/jackson/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Layout Overview

Two-column layout on desktop: fixed left sidebar (280px) + scrollable main content area. Sidebar collapses to offcanvas on mobile (<768px). Main content sections scroll vertically.

## Design Tokens

### Colors (Light Mode)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#0066ff` | Links, buttons, icons, timeline accents, progress bars |
| `--color-primary-hover` | `#0052cc` | Hover state for primary elements |
| `--color-primary-light` | `rgba(0,102,255,0.08)` | Subtle blue tint backgrounds |
| `--color-text` | `#1a1a1a` | Body text, headings |
| `--color-text-secondary` | `#555555` | Paragraphs, descriptions |
| `--color-text-muted` | `#888888` | Meta labels, position text, figcaptions |
| `--color-bg` | `#ffffff` | Page background |
| `--color-bg-secondary` | `#f8f9fa` | Sidebar background |
| `--color-bg-tertiary` | `#f1f3f5` | Alternate section backgrounds |
| `--color-border` | `#e5e7eb` | Borders, dividers |

### Colors (Dark Mode)

| Token | Value |
|---|---|
| `--color-primary` | `#4d9fff` |
| `--color-primary-hover` | `#6aadff` |
| `--color-primary-light` | `rgba(77,159,255,0.12)` |
| `--color-text` | `#f0f0f0` |
| `--color-text-secondary` | `#b0b0b0` |
| `--color-text-muted` | `#777777` |
| `--color-bg` | `#121212` |
| `--color-bg-secondary` | `#1a1a1a` |
| `--color-bg-tertiary` | `#242424` |
| `--color-border` | `#333333` |

### Typography

- **Font family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Weights:** 300, 400, 500, 600, 700
- **Body size:** 17px, line-height 1.6
- **Headings:** weight 600, letter-spacing -0.02em, line-height 1.3

### Spacing (8px grid)

| Token | Value |
|---|---|
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-5` | 1.5rem |
| `--space-6` | 2rem |
| `--space-8` | 3rem |
| `--space-10` | 4rem |
| `--space-12` | 5rem |

### Radii

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Form inputs, small cards |
| `--radius-md` | 10px | Accordion items, blog cards |
| `--radius-lg` | 14px | — |
| `--radius-full` | 9999px | Author avatar, skill progress bar ends |

### Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.1)` |

### Buttons

- **Primary:** background `var(--color-primary)`, color `#fff`, border `2px solid var(--color-primary)`, rounded (`--radius-sm` default). Hover: `var(--color-primary-hover)`.
- **Hire button (CTA banner):** white text, 1px semi-transparent white border, `--space-2` / `--space-4` padding. Hover: 10% white bg.
- **Send message:** same as primary btn with `btn-send-message` class.

### Transitions

- `--transition-fast`: 150ms ease
- `--transition-base`: 250ms ease

## Sections (in order)

### 1. Sidebar (fixed, desktop only)

- Profile image (circular, 120px, `--shadow-md`)
- Name (h1, 20px, weight 600)
- Position text (uppercase, 13px, weight 500, `--color-text-muted`)
- Navigation links (9 items): Home, About, Services, Skills, Education, Experience, Work, Blog, Contact
- Dark mode toggle (sun/moon SVG icons + "Dark"/"Light" label)
- Footer: copyright text + social links (Facebook, Twitter, Instagram, LinkedIn via icon fonts)

### 2. Hero (full-height slider)

- Full-viewport height slider with background images and dark overlay (`rgba(0,0,0,0.5)`)
- Two slides: "Hi! I'm Jackson" + "I am a Designer"
- Each slide: h1 headline, h2 subtitle, CTA button (Download CV / View Portfolio)
- On mobile: hero takes full width

### 3. About

- Section meta label "About" + heading "Who Am I?"
- Bio text paragraphs
- 4-column service badges with icon + label: Graphic Design, Web Design, Software, Application
- CTA banner: "300+ projects done successfully!" with "Hire me" button on blue primary bg

### 4. Services (What I Do)

- Section meta "What I do?" + heading "Here are some of my expertise"
- 6 service cards (3-column grid): icon + title + description
- Services: Innovative Ideas, Software, Application, Graphic Design, + 2 more
- All use single accent color (`--color-primary`)

### 5. Skills (My Specialty)

- Section meta "My Specialty" + heading "My Skills"
- Intro paragraph
- 6 skill bars (2-column layout): label + animated progress bar + percentage
- Skills: Photoshop (75%), JavaScript (60%), HTML5 (85%), CSS3 (90%), WordPress + 1 more
- All progress bars use `--color-primary`

### 6. Education

- Section meta "Education" + heading "Education"
- Bootstrap 5 accordion with 3 items:
  - Master Degree Graphic Design (expanded by default)
  - Bachelor Degree of Computer Science
  - Diploma in Information Technology
- Each: title as accordion button, expandable body with description

### 7. Experience (Work Experience)

- Section meta "Experience" + heading "Work Experience"
- Centered timeline layout with alternating left/right entries
- Timeline icons (all primary blue)
- 4 entries: Full Stack Developer, Front End Developer at Google, System Analyst, Creative Designer
- Each: title link + date span + description paragraph

### 8. Work (Portfolio)

- Section meta "My Work" + heading "Recent Work"
- Category filter bar: All, Graphic Design, Web Design, Software, Apps
- 2-column grid of portfolio items (background image + overlay)
- Each item: title, category label, social stats (share, views, likes)
- 6 portfolio items total

### 9. Blog

- Section meta "Latest Articles" + heading "From the Blog"
- Featured article (large card): image + category + date + title + excerpt + "Read article" link
- 2 horizontal blog cards (stacked): image + category + date + title + "Read article" link
- 3 blog posts total

### 10. Contact

- Section meta "Get in Touch" + heading "Contact"
- Left column (col-5): 3 contact items with icon + text (email, address, phone)
- Right column (col-7): contact form (Name, Email, Subject, Message textarea, Send Message button)
- Form uses Bootstrap form controls

## Gherkin Scenarios

### Sidebar

```gherkin
Scenario: Desktop sidebar is visible on wide screens
  Given I am viewing the page on a screen wider than 768px
  Then the sidebar is fixed on the left side
  And it shows a circular profile image
  And it shows the name "Jackson Ford"
  And it shows the position "UI/UX Designer in San Francisco"
  And it shows 9 navigation links

Scenario: Sidebar navigation highlights active section
  Given I am on the About section
  Then the "About" link in the sidebar is visually active

Scenario: Mobile sidebar is hidden behind offcanvas
  Given I am viewing the page on a screen narrower than 768px
  Then the sidebar is not visible
  And a hamburger toggle button is visible

Scenario: Tapping hamburger opens mobile sidebar
  Given I am on mobile
  When I tap the hamburger toggle
  Then the sidebar slides in from the left as an offcanvas panel

Scenario: Mobile sidebar shows profile and navigation
  Given the mobile sidebar is open
  Then it shows the profile image, name, and all 9 navigation links
  And it shows the dark mode toggle
```

### Dark Mode

```gherkin
Scenario: Default theme is light
  Given I load the page
  Then the background is white (#ffffff)
  And the text color is dark (#1a1a1a)

Scenario: Toggling dark mode changes the theme
  Given I am in light mode
  When I click the dark mode toggle
  Then the background changes to dark (#121212)
  And the text changes to light (#f0f0f0)
  And the primary color changes to #4d9fff

Scenario: Dark mode persists across page sections
  Given I have enabled dark mode
  When I scroll through all sections
  Then all sections maintain the dark theme
```

### Hero

```gherkin
Scenario: Hero section is full viewport height
  Given I am on the home section
  Then the hero fills the full viewport height

Scenario: Hero shows slide content
  Given I am viewing the hero
  Then I see a headline "Hi! I'm Jackson"
  And I see a subtitle
  And I see a CTA button "Download CV"

Scenario: Hero slides rotate
  Given I am viewing the hero
  When the slider advances
  Then the second slide shows "I am a Designer"
  And the CTA changes to "View Portfolio"
```

### About

```gherkin
Scenario: About section displays bio and service badges
  Given I scroll to the About section
  Then I see the heading "Who Am I?"
  And I see bio text paragraphs
  And I see 4 service badges (Graphic Design, Web Design, Software, Application)

Scenario: About section shows hire CTA
  Given I scroll to the About section
  Then I see a banner saying "300+ projects done successfully!"
  And I see a "Hire me" button
```

### Services

```gherkin
Scenario: Services section shows expertise cards
  Given I scroll to the Services section
  Then I see the heading "Here are some of my expertise"
  And I see 6 service cards with icon + title + description
```

### Skills

```gherkin
Scenario: Skills section shows progress bars
  Given I scroll to the Skills section
  Then I see the heading "My Skills"
  And I see 6 skill bars with labels and percentages
  And Photoshop is at 75%, JavaScript at 60%, HTML5 at 85%, CSS3 at 90%

Scenario: Skill bars animate on scroll
  Given I scroll to the Skills section
  Then the progress bars animate from 0% to their target width
```

### Education

```gherkin
Scenario: Education section shows accordion
  Given I scroll to the Education section
  Then I see the heading "Education"
  And I see a 3-item accordion
  And the first item "Master Degree Graphic Design" is expanded

Scenario: Clicking accordion item expands it
  Given the Education accordion is shown
  When I click "Bachelor Degree of Computer Science"
  Then that item expands and the previous item collapses
```

### Experience

```gherkin
Scenario: Experience section shows timeline
  Given I scroll to the Experience section
  Then I see the heading "Work Experience"
  And I see a centered timeline with 4 entries
  And entries alternate left and right
  And each entry has an icon, title, date range, and description
```

### Work (Portfolio)

```gherkin
Scenario: Work section shows portfolio grid
  Given I scroll to the Work section
  Then I see the heading "Recent Work"
  And I see a category filter bar
  And I see 6 portfolio items in a 2-column grid

Scenario: Filtering portfolio by category
  Given I am on the Work section
  When I click "Graphic Design" filter
  Then only graphic design items are visible
```

### Blog

```gherkin
Scenario: Blog section shows articles
  Given I scroll to the Blog section
  Then I see the heading "From the Blog"
  And I see 1 featured article card
  And I see 2 horizontal article cards
  And each card has an image, category, date, title, and read link
```

### Contact

```gherkin
Scenario: Contact section shows info and form
  Given I scroll to the Contact section
  Then I see the heading "Contact"
  And I see email, address, and phone info on the left
  And I see a contact form on the right with Name, Email, Subject, Message fields

Scenario: Contact form has send button
  Given the contact form is displayed
  Then I see a "Send Message" button
  And it uses the primary blue style
```

### Responsive

```gherkin
Scenario: Layout adapts to mobile
  Given I am on a screen narrower than 768px
  Then the sidebar is hidden
  And the main content takes full width
  And the hamburger menu is visible
  And portfolio grid stacks to single column
  And blog cards stack vertically
  And contact form stacks below info
```

## Verification Checklist

- [ ] Sidebar fixed on desktop (280px), offcanvas on mobile
- [ ] Dark mode toggle works (sun/moon icons, theme switches)
- [ ] Hero slider with two slides and CTAs
- [ ] About section with bio + 4 service badges + hire CTA banner
- [ ] Services section with 6 cards
- [ ] Skills section with 6 animated progress bars
- [ ] Education section with 3-item Bootstrap accordion
- [ ] Experience section with centered alternating timeline
- [ ] Work section with category filter + 6 portfolio grid items
- [ ] Blog section with featured + 2 horizontal cards
- [ ] Contact section with info icons + form (4 fields + send button)
- [ ] All sections use `--color-primary` (#0066ff) consistently
- [ ] Font: Inter (300-700)
- [ ] Dark mode tokens applied correctly
- [ ] Responsive: single-column on mobile, sidebar hidden
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
- [ ] Build succeeds with no errors
