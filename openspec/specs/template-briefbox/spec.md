# Template: BriefBox (Small Company Website)

## Purpose

Recreation of ColorLib "Bbs" — a small company / creative agency website template.

- **Source slug:** `bbs`
- **ColorLib page:** https://colorlib.com/wp/template/bbs/
- **Preview URL:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/briefbox`
- **Deploy:** `briefbox.free.componentdock.com`

## Design Tokens

Extracted from the live preview's `css/main.css` and visual analysis.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-purple` | `#7034db` | Story section bg, video overlay, primary accent |
| `--brand-pink` | `#f58e9a` | Primary button gradient start, tab active gradient |
| `--brand-yellow` | `#fbe44c` | Primary button gradient end, tab active gradient |
| `--bg-white` | `#ffffff` | Featured area, blog area backgrounds |
| `--bg-light` | `#f9f9ff` | About area, subscription area backgrounds |
| `--bg-dark` | `#333333` | Footer background |
| `--text-dark` | `#222222` | Headings, body text |
| `--text-muted` | `#777777` | Secondary body text |
| `--text-purple` | `#793ae9` | Accent text |
| `--border-light` | `#eeeeee` | Tab pill borders |

### Typography

- **Font family:** "Poppins", sans-serif (loaded via Google Fonts / Cloudflare)
- **Weights used:** 300 (light), 500 (medium), 600 (semibold), 900 (black)
- Hero headline: heavy/black weight, uppercase
- Section headings: semibold
- Body text: regular/medium weight

### Buttons & Interactive

- **Primary button:** border-radius 20px, padding 0 30px, line-height 40px, gradient background `linear-gradient(0deg, #f58e9a, #fbe44c)`, white text
- **Tab pills:** border-radius 25px, border 1px solid #eee, active state uses same gradient as primary button
- **Social icons:** circular or standard icon buttons in footer

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Banner/Hero | Image (`banner.png`) with gradient overlay |
| Featured | Solid white `#fff` |
| About | Light lavender `#f9f9ff` |
| Video | Image bg with purple radial gradient overlay (`#7539dd → #7034db`, opacity 0.8) |
| Blog | Solid white `#fff` |
| Story | Solid purple `#7034db` |
| Subscription/Newsletter | Light lavender `#f9f9ff` |
| Footer | Dark gray `#333333` |

### Layout Notes

- First wrapper (header + banner + featured + about): 68.75% width, centered
- Full-width wrapper: video + blog + story (purple sections extend full width)
- Third wrapper: subscription + footer (68.75% width)
- Featured area: 2-column grid on md+, 1-column on mobile
- Blog: 3-column grid (col-md-4)

## Gherkin Requirements

### Feature: Header

```gherkin
Scenario: Logo and navigation display
  Given the user visits the BriefBox homepage
  Then a logo link is visible in the header
  And navigation links for "Home", "Generic", and "Elements" are present
  And a hamburger menu toggle is visible on mobile viewports

Scenario: Navigation link click
  Given the user is on the homepage
  When they click a navigation link
  Then the browser navigates to the corresponding section or page
```

### Feature: Hero / Banner Section

```gherkin
Scenario: Hero content renders
  Given the user visits the homepage
  Then a heading "We're Creative" is visible
  And a "Get Started" call-to-action button is visible below the heading

Scenario: Hero CTA click
  Given the user sees the hero section
  When they click "Get Started"
  Then the browser scrolls to or navigates to the features section
```

### Feature: Featured / Features Section

```gherkin
Scenario: Feature cards display in grid
  Given the user scrolls to the features section
  Then 4 feature cards are visible in a 2-column grid
  And each card has an icon, a title, and a description paragraph

Scenario: Feature card content
  Given the features section is visible
  Then the feature titles are "Unlimited Colors", "Smart Security", "Endless Support", and "Smart Security"
  And each feature has descriptive body text
```

### Feature: About Section

```gherkin
Scenario: About section layout
  Given the user scrolls to the about section
  Then a heading "About Our Company" is visible
  And an about image is displayed
  And a tabbed content area with "History" and "Mission & Vision" tabs is visible

Scenario: Tab switching
  Given the about section is visible with "History" tab active
  When the user clicks "Mission & Vision" tab
  Then the tab content switches to show Mission & Vision content
  And the "History" tab is no longer active

Scenario: Default tab is History
  Given the user loads the page
  Then the "History" tab is active by default
  And history content is visible
```

### Feature: Video Section

```gherkin
Scenario: Video section displays
  Given the user scrolls to the video section
  Then a heading "New Features that open the door of future" is visible
  And a play button / video thumbnail is visible
  And descriptive text is shown below the play button
  And the section has a purple gradient overlay background
```

### Feature: Blog Section

```gherkin
Scenario: Blog cards display
  Given the user scrolls to the blog section
  Then 3 blog cards are visible in a row
  And each card has a thumbnail image, a title, and a description paragraph

Scenario: Blog card content
  Given the blog section is visible
  Then the blog titles are "Ultimate pet lover", "Upcoming role model", and "Colors of Life"
```

### Feature: Story Section

```gherkin
Scenario: Story section renders
  Given the user scrolls to the story section
  Then a heading "Crafting Our Experiences" is visible
  And descriptive paragraph text is displayed
  And the section has a solid purple (#7034db) background
  And the text is white
```

### Feature: Newsletter / Subscription Section

```gherkin
Scenario: Newsletter form displays
  Given the user scrolls to the subscription section
  Then a heading "Subscribe Newsletter" is visible
  And an email input field with placeholder "Email address" is visible
  And a "Get Started" submit button is visible

Scenario: Newsletter form interaction
  Given the newsletter form is visible
  When the user types a valid email address
  And clicks the submit button
  Then the form attempts to submit
```

### Feature: Footer

```gherkin
Scenario: Footer content
  Given the user scrolls to the footer
  Then navigation links for "Home", "Generic", and "Elements" are visible
  And social media icons (Facebook, Twitter, Dribbble, Behance) are present
  And a copyright line is displayed
  And a link to "https://www.componentdock.com/" branded as "Component Dock" is present
```

## Verification Checklist

- [ ] Header renders with logo + nav links + hamburger toggle
- [ ] Hero banner shows "We're Creative" heading + "Get Started" CTA
- [ ] Features section shows 4 cards in 2x2 grid with icons, titles, descriptions
- [ ] About section shows heading + image + tabbed content (History / Mission & Vision)
- [ ] Tab switching works between History and Mission & Vision
- [ ] Video section shows heading + play button + description with purple overlay
- [ ] Blog section shows 3 cards in a row with thumbnails, titles, descriptions
- [ ] Story section shows heading + text on solid purple background
- [ ] Newsletter section shows heading + email input + submit button
- [ ] Footer shows nav links + social icons + copyright + Component Dock link
- [ ] All design tokens match: Poppins font, purple (#7034db) brand, gradient buttons (#f58e9a → #fbe44c), rounded buttons (20px radius)
- [ ] Section order matches original: Header → Hero → Features → About → Video → Blog → Story → Newsletter → Footer
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Responsive layout: hamburger nav on mobile, stacked columns
