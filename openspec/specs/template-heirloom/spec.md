# Template: Heirloom (Business / Corporate One-Page)

## Purpose

Recreation of ColorLib's **Classic** one-page business template.

- Source slug: `classic`
- Source URL: https://colorlib.com/wp/template/classic/
- Preview URL: https://preview.colorlib.com/theme/classic/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **heirloom** (`apps/heirloom`, `@free-react-templates/heirloom`)
- Footer link: https://www.componentdock.com/ ("Component Dock")

## Design tokens (extracted from preview CSS)

### Colors

| Token           | Value   | Usage                                     |
| --------------- | ------- | ----------------------------------------- |
| brand-primary   | #a1c4fd | Primary buttons, gradient start           |
| brand-secondary | #c2e9fb | Primary buttons, gradient end             |
| accent          | #f7c336 | Star rating, highlights                   |
| text-dark       | #4f4f4f | Body text, headings                       |
| text-medium     | #6b6d6f | Secondary text                            |
| text-light      | #898989 | Muted text, inputs                        |
| text-lighter    | #969696 | Subtle text                               |
| gray-bg         | #f5f5f5 | Alternating section backgrounds (gray-bg) |
| bg-white        | #ffffff | Default section backgrounds               |
| bg-input        | #f9f99f | Form input backgrounds                    |
| border-gray     | #e8e8e8 | Borders, dividers                         |
| button-gray     | #bdbdbd | Default button background                 |

### Fonts

| Role       | Family            | Weight     |
| ---------- | ----------------- | ---------- |
| Heading    | Montserrat        | 700 (bold) |
| Body       | Roboto            | 300, 400   |
| Decorative | Satisfy (cursive) | 400        |
| Icons      | IcoFont           | —          |

### Button style

- Shape: pill (border-radius: 100px)
- Padding: 10px 30px
- Primary: linear-gradient(to right, #a1c4fd, #c2e9fb), white text
- Default: #bdbdbd background, white text
- Shadow: layered offset box-shadow for 3D effect
- Hover: translateY(-3px) with enhanced shadow

### Section backgrounds

- Alternating: white (#ffffff) → gray (#f5f5f5) per section
- Header: full-screen overlay with background image, dark overlay (rgba(0,0,0,0.4))
- Footer: dark background (likely #1a1a2e or similar dark)

## Section structure (from preview DOM)

Order extracted from the live preview at https://preview.colorlib.com/theme/classic/:

1. **Navbar** — fixed/affixed top navbar with logo, nav links (Home, About, Service, Skill, Portfolio, Team, Price, Blog, Contact), user icon, search toggle, language selector dropdown
2. **Header / Hero** — full-viewport background image with dark overlay, centered text: "We Are Provide Creative Business" with animated dot decoration, search bar, CTA button
3. **About** — two-column: left has heading "We Offer Quick & Powerful Business Solution" with descriptive text + image; right has tabbed panel (Mission / Vision / Support tabs) with "SINCE WE HAVE 25 YEARS EXPERIENCE IN THIS PASSION" stat callout
4. **Services** — 6-card grid in 3 columns: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing — each with icon + title + description
5. **Skills** — progress bars with percentages (95%, 85%, 90%) on gray background, animated counters
6. **Portfolio** — filterable image gallery (filtering tabs: All, Category 1, Category 2, etc.) with hover overlay
7. **Team** — team member cards with photo, name, role, social icons — "Our expert team" heading
8. **Pricing** — toggle between Monthly/Yearly tabs, pricing cards in columns
9. **Blog** — "Latest Blog" section with blog post cards (image, date, title, excerpt)
10. **Contact** — two-column: form (Full Name, Email, Subject, Message textarea + Submit button) + contact info (address, phone, email) with map embed area
11. **Footer** — multi-column: Company info, News links, Company links, Resources links, Solutions links, social icons, copyright "Classic" attribution replaced with Component Dock link

## Gherkin requirements

### Feature: Heirloom Template

#### Scenario: Navbar renders with all navigation links

Given the user loads the Heirloom page
Then the navbar displays links for Home, About, Service, Skill, Portfolio, Team, Price, Blog, Contact
And the navbar is fixed/sticky at the top on scroll

#### Scenario: Hero section shows full-screen overlay with headline

Given the user loads the Heirloom page
Then a full-viewport hero area displays with a background image and dark overlay
And the headline "We Are Provide Creative Business" (or equivalent) is centered
And a CTA button is visible in the hero

#### Scenario: About section shows two-column layout with tabs

Given the user scrolls to the About section
Then a heading "We Offer Quick & Powerful Business Solution" appears
And a tabbed panel shows Mission, Vision, and Support tabs
And clicking each tab reveals its content

#### Scenario: Services section shows 6 service cards

Given the user scrolls to the Services section
Then 6 service cards are displayed in a 3-column grid
And each card has an icon, title, and description

#### Scenario: Skills section shows animated progress bars

Given the user scrolls to the Skills section
Then progress bars display with percentages (95%, 85%, 90%)
And the section has a gray (#f5f5f5) background

#### Scenario: Portfolio section shows filterable gallery

Given the user scrolls to the Portfolio section
Then a filter bar with category tabs appears
And image thumbnails are displayed in a grid
And hovering over a thumbnail shows an overlay effect

#### Scenario: Team section shows member cards

Given the user scrolls to the Team section
Then team member cards display with photo, name, role, and social icons

#### Scenario: Pricing section shows toggleable plans

Given the user scrolls to the Pricing section
Then a Monthly/Yearly toggle is visible
And pricing cards display plan details

#### Scenario: Blog section shows latest posts

Given the user scrolls to the Blog section
Then blog post cards display with image, date, and title

#### Scenario: Contact section shows form and info

Given the user scrolls to the Contact section
Then a form with Full Name, Email, Subject, Message, and Submit is rendered
And contact information is displayed alongside the form

#### Scenario: Footer contains Component Dock link

Given the user scrolls to the footer
Then a link to https://www.componentdock.com/ is present
And the link text reads "Component Dock"

#### Scenario: All sections alternate white/gray backgrounds

Given the user views the full page
Then odd sections have white (#ffffff) backgrounds
And even sections have gray (#f5f5f5) backgrounds
(starting from About as the first content section)

#### Scenario: Buttons use pill shape with gradient

Given the user views any CTA button
Then the button has border-radius: 100px (pill shape)
And the primary button uses a linear-gradient from #a1c4fd to #c2e9fb
And the button text is white

## Verification checklist

- [ ] Navbar: sticky, all 9 nav links present, mobile hamburger menu
- [ ] Hero: full-viewport, background image with overlay, headline, CTA
- [ ] About: two-column, tabbed panel with 3 tabs (Mission/Vision/Support)
- [ ] Services: 6 cards in 3-column grid, icons from lucide-react
- [ ] Skills: progress bars with percentage labels, gray background
- [ ] Portfolio: filter tabs, image grid, hover overlays
- [ ] Team: member cards with photo, name, role, social links
- [ ] Pricing: Monthly/Yearly toggle, pricing cards
- [ ] Blog: post cards with image, date, title
- [ ] Contact: form (4 fields + submit), contact info, map placeholder
- [ ] Footer: multi-column links, Component Dock attribution
- [ ] Design tokens: Montserrat headings, Roboto body, #a1c4fd→#c2e9fb gradient
- [ ] Pill buttons with layered shadow effect
- [ ] Alternating section backgrounds (white / #f5f5f5)
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] 100% test coverage on all new components
