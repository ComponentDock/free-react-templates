# Template: Prism (Creative Agency / Small Company)

## Purpose

Recreation of the ColorLib **Bbs** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page website. The original is a modern creative/agency landing page with a bold purple gradient hero, feature grid, about section with tabs, video area, blog cards, story section, newsletter subscription, and footer.

- **Source template:** ColorLib Bbs
- **Source slug:** `bbs`
- **ColorLib page:** https://colorlib.com/wp/template/bbs/
- **Live preview:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **New name:** `prism`
- **App path:** `apps/prism`
- **Package:** `@free-react-templates/prism`
- **Deploy target:** `prism.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) at https://preview.colorlib.com/theme/bbs/css/main.css and visual analysis of the screenshot.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand purple | `#7539dd` → `#7034db` | Hero radial gradient bg, video overlay, story section bg |
| Hero h1 | `#793ae9` | Banner heading text with text-shadow |
| Hero h1 shadow | `rgba(94, 36, 198, 0.75)` | Text-shadow on hero heading |
| Primary accent | `#f58e9a` | Buttons, tab active gradient start, list bullets, footer hover |
| Gradient end | `#fbe44c` / `#f58e9a` | Button/tab gradient (pink → yellow) |
| Body text | `#777777` | Paragraphs, body text |
| Heading text | `#222222` | All headings (h1–h6) |
| Light bg | `#f9f9ff` | About section, subscription, input backgrounds |
| White bg | `#ffffff` | Featured area, blog area |
| Footer bg | `#333333` | Footer section |

### Typography

| Property | Value |
|----------|-------|
| Font family | `Poppins`, sans-serif |
| Weights used | 300 (body), 500 (headings, buttons), 600 (section titles), 900 (hero h1) |
| Body size | 14px |
| h1 | 36px (hero: 100px mobile: 60px) |
| h2 | 30px |
| h3 | 24px |
| h4 | 18px |
| Line-height | 1.5em (general), 1.15em (hero, section titles) |

### Button Styles

| Element | Shape | Padding | Radius | Colors |
|---------|-------|---------|--------|--------|
| `.primary-btn` | Pill/oval | 0 30px, line-height 40px | 20px | Transparent bg, white border, white text; gradient bg on hover (#f58e9a → #fbe44c) |
| Tab pills | Pill/oval | 0 25px, line-height 40px | 25px | Transparent, 1px solid #eee border; gradient active state |

### Section Backgrounds

| Section | Background |
|---------|------------|
| Hero/Banner | Radial gradient #7539dd → #7034db, decorative translucent circles |
| Featured | White (#ffffff) |
| About | Light blue-white (#f9f9ff) |
| Video | Background image with purple overlay (#7539dd → #7034db, opacity 0.8) |
| Blog | White (#ffffff) |
| Story | Solid purple #7034db, right-half background image |
| Subscription | Light (#f9f9ff) |
| Footer | Dark #333333 |

### Spacing

| Section | Padding |
|---------|---------|
| Featured area | 60px top, 100px bottom |
| About area | 100px vertical |
| Video content | 100px vertical |
| Blog area | 70px top, 100px bottom |
| Story area | 100px vertical |
| Subscription | 100px vertical |
| Footer | 100px vertical, 6rem bottom margin |

## Requirements (Gherkin)

### Feature: Header / Navigation

```gherkin
Scenario: Header renders with logo and navigation links
  Given the page loads
  Then a header is visible at the top
  And a logo image is displayed on the left
  And navigation links "Home", "Generic", "Elements" are present
  And a hamburger menu icon is visible on mobile

Scenario: Navigation links scroll to sections
  Given the header is rendered
  When the user clicks "Home"
  Then the page scrolls to the hero section
```

### Feature: Hero / Banner

```gherkin
Scenario: Hero section displays headline and CTA
  Given the page loads
  Then a hero section fills the viewport height
  And the heading reads "We're Creative" in uppercase
  And a "Get Started" pill button is centered below the heading
  And the background is a purple radial gradient with decorative translucent circles

Scenario: Hero button hover shows gradient
  Given the hero section is visible
  When the user hovers over "Get Started"
  Then the button background transitions to a pink-to-yellow gradient
  And the text color changes to dark
```

### Feature: Features Grid

```gherkin
Scenario: Four feature cards display in a 2x2 grid
  Given the features section is visible
  Then 4 feature cards are displayed in a 2-column grid
  And each card has an icon, a title, and a description paragraph
  And the section background is white

Scenario: Feature card content
  Given the features section is visible
  Then the first feature title is "Unlimited Colors"
  And the second feature title is "Smart Security"
  And the third feature title is "Endless Support"
  And the fourth feature title is "Smart Security"
```

### Feature: About Section

```gherkin
Scenario: About section displays with title, image, and tabs
  Given the about section is visible
  Then an "About Our Company" heading is displayed on the left
  And an about image is shown in the middle column
  And two tab buttons "History" and "Mission & Vision" are on the right
  And the section background is light (#f9f9ff)

Scenario: Tab switching shows different content
  Given the about section is visible
  And the "History" tab is active
  Then the "History" tab content is visible with a heading and paragraph
  When the user clicks "Mission & Vision"
  Then the "Mission & Vision" tab content becomes visible
  And the "History" tab content is hidden
```

### Feature: Video Section

```gherkin
Scenario: Video section displays with play button
  Given the video section is visible
  Then a background image is shown with a purple overlay
  And the heading reads "New Features that open the door of future"
  And a play button icon is displayed
  And a description paragraph is below the play button
  And all text is white
```

### Feature: Blog Section

```gherkin
Scenario: Three blog cards display in a row
  Given the blog section is visible
  Then 3 blog cards are displayed in a 3-column grid
  And each card has a background image thumbnail, a title, and a description
  And the section background is white

Scenario: Blog card content
  Given the blog section is visible
  Then the first blog card title is "Ultimate pet lover"
  And the second blog card title is "Upcoming role model"
  And the third blog card title is "Colors of Life"
```

### Feature: Story Section

```gherkin
Scenario: Story section displays with purple background
  Given the story section is visible
  Then the heading reads "Crafting Our Experiences" in white
  And a description paragraph is below the heading in white
  And the section background is solid purple (#7034db)
  And on desktop, the right half shows a background image
```

### Feature: Newsletter Subscription

```gherkin
Scenario: Subscription form renders correctly
  Given the subscription section is visible
  Then the heading reads "Subscribe Newsletter"
  And a description paragraph is below the heading
  And an email input field with placeholder "Email address" is visible
  And a "Get Started" button with arrow icon is inside the input
  And the section background is light (#f9f9ff)

Scenario: Email input accepts text
  Given the subscription form is visible
  When the user types "test@example.com" in the email field
  Then the input displays "test@example.com"
```

### Feature: Footer

```gherkin
Scenario: Footer displays navigation, social links, and copyright
  Given the footer is visible
  Then navigation links "Home", "Generic", "Elements" are displayed
  And social media icons (Facebook, Twitter, Dribbble, Behance) are shown
  And a copyright line is present
  And the footer background is dark (#333333)
  And the footer contains a link to "https://www.componentdock.com/" branded as "Component Dock"

Scenario: Footer hover effects
  Given the footer is visible
  When the user hovers over a social icon
  Then the icon color changes to pink (#f58e9a)
```

### Feature: Responsive Design

```gherkin
Scenario: Mobile layout adjusts hero heading size
  Given the viewport is narrower than 768px
  Then the hero h1 font size reduces to 60px

Scenario: Mobile layout stacks feature cards
  Given the viewport is narrower than 768px
  Then feature cards center-align their content
  And descriptions take full width

Scenario: Mobile layout adjusts subscription button
  Given the viewport is narrower than 768px
  Then the subscription input loses right padding
  And the button moves below the input field
```

## Verification Checklist

- [ ] Header renders with logo and nav links (Home, Generic, Elements)
- [ ] Hero section: purple gradient background, "We're Creative" h1 at 100px/900 weight, pill button
- [ ] Hero button gradient hover effect (#f58e9a → #fbe44c)
- [ ] Features grid: 2×2 layout, 4 cards with icons + titles + descriptions on white bg
- [ ] About section: title, image, tabbed content (History / Mission & Vision) on #f9f9ff bg
- [ ] Tab switching works (active state with gradient)
- [ ] Video section: background image, purple overlay (opacity 0.8), play button, white text
- [ ] Blog section: 3-column grid, image thumbnails + titles + descriptions on white bg
- [ ] Story section: solid purple bg (#7034db), white text, desktop right-half bg image
- [ ] Subscription section: "Subscribe Newsletter" heading, email input with pill shape, Get Started button on #f9f9ff bg
- [ ] Footer: dark bg (#333333), nav links, social icons with hover → pink, copyright, Component Dock link
- [ ] Responsive: hero h1 60px mobile, feature cards stack, subscription adjusts
- [ ] All colors match extracted tokens
- [ ] Font: Poppins loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
