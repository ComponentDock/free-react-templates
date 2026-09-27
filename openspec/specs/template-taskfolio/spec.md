# Template: Taskfolio (Portfolio)

## Purpose

Recreation of ColorLib "Work" — a personal portfolio/freelancer template with a fixed sidebar layout, hero image slider, about section with accordion, services grid, portfolio grid, blog entries, and a CTA contact section.

- **Source:** [ColorLib Work](https://colorlib.com/wp/template/work/)
- **Preview:** https://preview.colorlib.com/theme/work/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/work-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Font family | Quicksand (300, 400, 500, 700) | Google Fonts, sans-serif fallback |
| Brand color | `#F75940` | Coral red-orange — buttons, links, accents |
| Brand hover | `#f86e58` | Lighter coral for hover states |
| Heading color | `#000000` | All headings black |
| Body text | `rgba(0,0,0,0.7)` | Semi-transparent black |
| Muted text | `#999999` | Meta text, section labels |
| Card border | `#e6e6e6` | Blog card borders |
| Card meta | `#999999` | Blog entry metadata |
| Card heading | `#333333` | Blog card titles |
| Section bg (light) | `#fafafa` | About, services, contact sections |
| Sidebar bg | `#ffffff` | White fixed sidebar |
| Sidebar logo bg | `#000000` | Black block with white text |
| Dark overlay | `rgba(0,0,0,0.9)` | Counter/stats section background |
| Selection | white on `#F75940` | Text selection highlight |
| Button primary bg | `#F75940` | Solid coral with 2px border |
| Button primary text | `#ffffff` | White on coral |
| Button pill radius | `30px` | CTA buttons are fully rounded (pill) |
| Button hero (learn) | transparent, 1px solid `#000` | Outlined black button in hero |
| Sidebar width | 20% (desktop), 30% (≤1200px), 270px (≤768px) | Fixed left sidebar |
| Main content | 80% (desktop), 70% (≤1200px), 100% (≤768px) | Right-floated main area |
| Section heading | 18px, uppercase, letter-spacing 5px, weight 500 | `.colorlib-heading` |
| Section meta label | 10px, uppercase, weight 400, `#999` | `.heading-meta` |
| Body font size | 15px (16px mobile) | Base text size |
| Line height | 1.8 | Body paragraph spacing |

## Section Structure (from live preview DOM)

1. **Sidebar** — Fixed left panel: Logo (black block, "Taskfolio" text), navigation (Home, Work, About, Services, Blog, Contact), footer with social icons + copyright
2. **Hero** — Full-width image slider with 3 slides; each slide has a background image with a white overlay box containing: title (44px, weight 300), subtitle (18px, weight 300), and a "Learn More" outlined button
3. **About** — Two-column: left has overlapping images (two stacked with slight offset), right has heading ("Welcome & Introduce"), intro text, and accordion panel (3 items: "Why choose me?", "What I do?", "My Specialties") with expandable content
4. **Services** — Two-column grid, 6 service cards each with: icon (icomoons), title (h3), description paragraph. Services: Branding, Web Design, SEO, Web Development, User Interface, Help & Support
5. **Portfolio/Work** — Two-column grid, 6 project cards with background images and hover overlay showing: title, tags (comma-separated), social stats (share, eye count, heart count)
6. **Blog** — Three-column grid, 3 blog entries with: thumbnail image, meta (date, category, comment count), title, excerpt, "Read More" link
7. **Get in Touch (CTA)** — Full-width section with light gray background (#fafafa): heading "Get in Touch!", lead paragraph, "Contact me!" pill button (coral)
8. **Footer** (inside sidebar) — Social media icon links (Facebook, Twitter, Instagram, LinkedIn), copyright text

## Gherkin Requirements

### Sidebar
```gherkin
Feature: Taskfolio Sidebar

  Scenario: Sidebar displays logo and navigation
    Given the page loads
    Then a fixed sidebar is visible on the left
    And the sidebar contains the logo text "Taskfolio"
    And the sidebar has navigation links: Home, Work, About, Services, Blog, Contact

  Scenario: Sidebar navigation highlights active link
    Given the user is on the Home section
    Then the "Home" link is visually highlighted (bold/black)
    And other links are styled with muted color

  Scenario: Sidebar shows social icons and copyright
    Given the page loads
    Then the sidebar footer shows social media icons (Facebook, Twitter, Instagram, LinkedIn)
    And a copyright notice is visible

  Scenario: Sidebar is responsive
    Given the viewport is ≤768px wide
    Then the sidebar slides off-screen and a toggle button appears
    When the user taps the toggle
    Then the sidebar slides in from the left
```

### Hero
```gherkin
Feature: Taskfolio Hero Slider

  Scenario: Hero displays rotating background images
    Given the page loads
    Then the hero section shows a full-width background image
    And a white box overlay contains a heading and subtitle
    And a "Learn More" button is visible

  Scenario: Hero slides rotate automatically
    Given the page has loaded for 5 seconds
    Then the hero transitions to the next slide
    And the text content updates accordingly

  Scenario: Hero text overlay contains heading and CTA
    Given the hero is visible
    Then the heading reads "Strategic Design for Brands" (or similar)
    And the subtitle is visible below
    And the "Learn More" button is outlined (transparent background, black border)
```

### About
```gherkin
Feature: Taskfolio About Section

  Scenario: About section shows images and intro text
    Given the user scrolls to the About section
    Then two overlapping images are displayed on the left
    And a heading "Welcome & Introduce" is shown
    And the name "Hola! my name is Louie Jie!" appears
    And an introductory paragraph is present

  Scenario: About section has expandable accordion
    Given the About section is visible
    Then three accordion items are shown: "Why choose me?", "What I do?", "My Specialties"
    When the user clicks "Why choose me?"
    Then the panel expands to reveal content
    When the user clicks "What I do?"
    Then the previous panel collapses and this one expands

  Scenario: Accordion defaults to first item open
    Given the About section loads
    Then the "Why choose me?" panel is expanded by default
    And the other two panels are collapsed
```

### Services
```gherkin
Feature: Taskfolio Services Section

  Scenario: Services section displays 6 expertise cards
    Given the user scrolls to the Services section
    Then a section label "What I do?" is shown
    And a heading "Here are some of my expertise" appears
    And 6 service cards are displayed in a 2-column grid
    And each card has an icon, title, and description

  Scenario: Services cards have correct content
    Given the Services section is visible
    Then card 1 shows "Branding" with icon
    And card 2 shows "Web Design" with icon
    And card 3 shows "Search engine optimization" with icon
    And card 4 shows "Web Development" with icon
    And card 5 shows "User Interface" with icon
    And card 6 shows "Help & Support" with icon
```

### Portfolio/Work
```gherkin
Feature: Taskfolio Portfolio Grid

  Scenario: Portfolio section shows 6 project cards
    Given the user scrolls to the Work section
    Then a section label "My Work" is shown
    And a heading "Recent Work" appears
    And 6 project cards are displayed in a 2-column grid

  Scenario: Project card displays on hover
    Given a project card is visible
    Then the card shows a background image
    When the user hovers over the card
    Then an overlay appears with the project title, tags, and stats (share, views, likes)

  Scenario: Project cards have correct content
    Given the Portfolio section is visible
    Then card 1 shows "Work 01" with tags "Branding, Ilustration"
    And card 2 shows "Work 02" with tags "Logo, Web, Branding"
    And card 3 shows "Work 03" with tags "Illustration, Logo"
    And card 4 shows "Work 04" with tags "Web, Logo, Branding"
    And card 5 shows "Work 05" with tags "Illustration, Logo"
    And card 6 shows "Work 06" with tags "Web, Logo, Branding"
```

### Blog
```gherkin
Feature: Taskfolio Blog Section

  Scenario: Blog section shows 3 entries
    Given the user scrolls to the Blog section
    Then a section label "Read" is shown
    And a heading "Recent Blog" appears
    And 3 blog entries are displayed in a 3-column grid

  Scenario: Blog entry displays correctly
    Given a blog entry is visible
    Then it shows a thumbnail image
    And meta information (date, category, comment count)
    And a title link
    And an excerpt paragraph
    And a "Read More" link with arrow icon

  Scenario: Blog entries have correct content
    Given the Blog section is visible
    Then entry 1 title is "18 Awesome sites" in category "Web Design"
    And entry 2 title is "Wordpress for a Beginner" in category "Web Design"
    And entry 3 title is "Make website from scratch" in category "Inspiration"
```

### Get in Touch (CTA)
```gherkin
Feature: Taskfolio Contact CTA

  Scenario: CTA section displays contact prompt
    Given the user scrolls to the CTA section
    Then the heading "Get in Touch!" is visible
    And a lead paragraph is displayed
    And a "Contact me!" button is shown in coral pill style

  Scenario: CTA button is styled as pill
    Given the CTA section is visible
    Then the button has rounded corners (border-radius: 30px)
    And the button background is #F75940
    And the button text is white
```

### Responsive
```gherkin
Feature: Taskfolio Responsive Design

  Scenario: Layout adapts on tablet
    Given the viewport is ≤1200px wide
    Then the sidebar width increases to 30%
    And the main content width decreases to 70%

  Scenario: Layout adapts on mobile
    Given the viewport is ≤768px wide
    Then the sidebar becomes a slide-out drawer (270px)
    And the main content takes full width
    And the hero heading font reduces to 28px
    And service cards stack in a single column
    And blog entries stack in a single column
```

## Verification Checklist

- [ ] Sidebar: fixed position, logo block, nav links, social icons, copyright
- [ ] Hero: image slider with 3 slides, white text overlay, outlined CTA button
- [ ] About: overlapping images left, accordion right, 3 expandable panels
- [ ] Services: 2-column grid, 6 cards with icons, correct titles
- [ ] Portfolio: 2-column grid, 6 project cards with hover overlay
- [ ] Blog: 3-column grid, 3 entries with image/meta/title/excerpt
- [ ] CTA: full-width section, heading, lead text, pill button
- [ ] Sidebar footer: social icons (FB, Twitter, IG, LinkedIn), copyright
- [ ] Responsive: sidebar collapse on mobile, grid stacking, font scaling
- [ ] Design tokens: Quicksand font, #F75940 brand color, 30px pill radius
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code — provenance in spec only
- [ ] All placeholder images use picsum.photos with deterministic seeds
