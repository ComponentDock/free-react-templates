# Template: EcoPulse (Environmental Organization)

## Purpose

Recreation of ColorLib's **Environmentalorganization** template.

- **Source**: https://colorlib.com/wp/template/environmentalorganization/
- **Preview**: https://preview.colorlib.com/theme/environmentalorganization/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/environmentalorganization-free-template.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package**: `@free-react-templates/ecopulse`
- **App folder**: `apps/ecopulse`
- **Deploy target**: `ecopulse.free.componentdock.com`

## Design tokens (extracted from preview stylesheet)

| Token | Value | Notes |
|---|---|---|
| Font family | Montserrat (200–700) | Google Fonts; body 400, headings 400–500 |
| Brand green | `#09cc7f` | Primary accent — buttons, hovers, back-to-top, progress bars |
| Green gradient | `linear-gradient(to left, #46C0BE, #6DD56F, #46C0BE)` | CTA `.btn` background |
| Section subtitle color | `#70D76A` | Uppercase subtitle `<span>` under section headings |
| Heading text | `#425140` | Dark green-gray for h1–h6 |
| Body text | `#10285d` | Dark navy for paragraphs |
| Nav link color | `#072366` | Header navigation links |
| Hero overlay | `rgba(35, 39, 35, 0.4)` | Semi-transparent dark overlay on hero images |
| Light section bg | `#EEFFFA` | Visit-tailor / about section background |
| Button radius | `30px` | Pill-shaped buttons |
| Circle radius | `50%` | Video play button, counters |
| Border-btn style | 1px solid `#6fd66c`, bg transparent, hover fills `#09cc7f` | Outline variant |
| Section padding | ~130px top / ~120px bottom | `.section-padding30` |
| Hero min-height | 790px | `.slider-height` |
| Logo area | Sticky header with bottom shadow `0 10px 15px rgba(25,25,25,0.1)` | White bg when sticky |

## Section structure (order from preview DOM)

1. **Header** — Sticky white bar: logo left, nav links (Home, About, What We Do, Projects, Blog, Contact), "Make a Donation" CTA button right. Mobile hamburger menu.
2. **Hero Slider** — Full-width image carousel (3 slides), dark overlay, large white heading ("Environment"), subtitle, CTA button with pill border, dot navigation on right side.
3. **About / Visit Tailor** — Split layout: left text column (subtitle + heading + paragraph + image with video play button overlay), right visual. Background: `#EEFFFA` light green.
4. **Services** — 3 service cards in a row: Clean Water, Renewable Energy, Protect Animals. Each with an icon, title, and description.
5. **Support Company / Why Join** — Split layout: left has heading + description + "Join Us Now" outline button; right has image with two floating counter badges (950 Poaching cases, 230 Volunteers worldwide).
6. **Our Cases** — 3 case study cards: Wildlife in Danger (70%), Our Green Projects (25%), Wildlife in Danger (50%). Each with image, title, description, animated progress bar, and stat counter.
7. **Blog / Latest News** — 2 blog post cards in a row: image + title + excerpt.
8. **Footer** — Dark footer: logo + description + social icons (Twitter, Facebook, Pinterest), 3 link columns (Our Solutions, Company, Contact Us), copyright bar.

## Gherkin requirements

```gherkin
Feature: EcoPulse environmental organization landing page

  Background:
    Given the user is on the EcoPulse homepage

  Scenario: Header displays correctly
    Then the logo is visible in the top-left
    And navigation links "Home", "About", "What We Do", "Projects", "Blog", "Contact" are visible
    And a "Make a Donation" button is visible in the header

  Scenario: Hero slider renders
    Then a full-width hero image is displayed with a dark overlay
    And a large heading is visible
    And a subtitle is visible below the heading
    And a CTA button with pill shape is visible
    And dot navigation indicators are visible

  Scenario: About section displays
    Then a section with light green background (#EEFFFA) is visible
    And a section subtitle is displayed in uppercase green text
    And a heading is visible
    And a descriptive paragraph is present
    And a video play button overlay is visible on an image

  Scenario: Services section displays three cards
    Then three service cards are visible
    And each card has an icon, title, and description
    And the titles are "Clean Water", "Renewable Energy", "Protect Animals"

  Scenario: Support section shows stats
    Then a heading "Why You Should join us" is visible
    And a "Join Us Now" outline button is visible
    And two counter badges are visible: "950 Poaching cases" and "230 Volunteers worldwide"

  Scenario: Cases section shows progress bars
    Then three case study cards are visible
    And each card has an image, title, description, and progress bar
    And the progress bars animate to their target percentages

  Scenario: Blog section shows latest news
    Then two blog post cards are visible
    And each card has an image, title, and excerpt

  Scenario: Footer renders correctly
    Then the footer displays a logo and description
    And social media icons are visible (Twitter, Facebook, Pinterest)
    And three link columns are visible: "Our solutions", "Company", "Contact us"
    And a "Component Dock" attribution link is present

  Scenario: Mobile responsiveness
    When the viewport is narrower than 768px
    Then the navigation collapses to a hamburger menu
    And the hero text size decreases
    And sections stack vertically

  Scenario: All interactive elements are accessible
    Then all buttons have visible focus indicators
    And all images have descriptive alt text
    And navigation links are keyboard-focusable
```

## Verification checklist

- [ ] Hero slider renders with 3 slides, dark overlay, heading, subtitle, CTA button
- [ ] Header is sticky with white background and bottom shadow
- [ ] About section has #EEFFFA background, split layout, video play button
- [ ] Services section shows 3 cards with icons
- [ ] Support section has floating counter badges and "Join Us Now" button
- [ ] Cases section has 3 cards with animated progress bars
- [ ] Blog section shows 2 post cards
- [ ] Footer has logo, social icons, 3 link columns, copyright, Component Dock link
- [ ] All buttons are pill-shaped (border-radius: 30px)
- [ ] Brand green #09cc7f used consistently for accents
- [ ] Font is Montserrat throughout
- [ ] Mobile responsive: hamburger menu, stacked sections
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME set to ecopulse.free.componentdock.com
