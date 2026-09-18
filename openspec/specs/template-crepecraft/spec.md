# Template: CrapeCraft (Creative Digital Agency / Creative Portfolio)

## Purpose

Recreation of **ColorLib "Go Crepe"** — a creative digital agency / portfolio template.

- **Source slug:** `go-crepe`
- **Source URL:** https://colorlib.com/wp/template/go-crepe/
- **Preview URL:** https://preview.colorlib.com/theme/go-crepe/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **App folder:** `apps/crepecraft`
- **Package:** `@free-react-templates/crepecraft`

## Design Tokens

Extracted from live preview CSS (`css/main.css`):

| Token | Value | Usage |
|---|---|---|
| Brand gradient | `linear-gradient(135deg, #49e3ce 0%, #9920ed 100%)` | Hero overlay, story backgrounds, footer widget bg, icon pseudo-elements, primary-btn hover fill |
| Teal accent | `#49e3ce` | Gradient start, success buttons |
| Purple accent | `#9920ed` | Gradient end, primary buttons |
| Deep purple | `#3c408f` | Bold/accent text |
| Text dark | `#222222` | Headings, strong text |
| Text body | `#777777` | Body paragraphs |
| Light background | `#f9f9ff` | Amazing works section bg, subscription input bg, border colors |
| White | `#fff` | Featured area, subscription section, button backgrounds |
| Font family | `"Poppins", sans-serif` | All text (weights: 300 body, 500 headings, 600 emphasis) |
| Button radius | `20px` (pill) | `.primary-btn` — transparent bg, white border, gradient fill on hover via `:after` pseudo-element |
| Icon circle radius | `3px` | `.single-widget .icon` border |
| Section padding | `100px 0` | Standard section vertical rhythm |

## Section Structure (from live preview DOM)

1. **Header** — Logo left, nav links (Home, Generic, Elements) right, hamburger menu icon
2. **Hero Banner Slider** — Full-width carousel with gradient overlay (`#49e3ce` → `#9920ed`), white heading + subtext, "Get Started" CTA button with arrow icon
3. **Features** — 3-column grid (×2 rows = 6 items), icon circles with gradient text, uppercase title + paragraph, icons: sun, code, clock (linearicons)
4. **Our Story** — Split layout: left title "Our Untold Story" on gradient bg, right content box with heading, paragraph, CTA button
5. **Amazing Works** — Section title center, horizontal carousel of portfolio items (image thumb + caption heading + description text)
6. **Our Story 2** — Mirrored layout of Story section (title right side on gradient bg, content box left)
7. **Brand Logos** — Row of 5 partner/brand logo images
8. **Newsletter Subscription** — Centered section title, email input (pill-shaped, `#f9f9ff` bg) + "Get Started" button inline
9. **Footer Widget Area** — 3-column contact info (Address, Email, Phone) with icon boxes on gradient background, copyright line, social icons (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

### Feature: CrapeCraft Template

#### Scenario: Header renders logo and navigation
- Given the page loads
- Then the header displays a logo on the left
- And navigation links "Home", "Generic", "Elements" are visible on the right
- And a hamburger menu icon is present for mobile

#### Scenario: Hero banner displays gradient overlay with CTA
- Given the page loads
- Then a full-width hero section is visible
- And the hero has a gradient background from teal (#49e3ce) to purple (#9920ed)
- And white uppercase heading text is displayed
- And a white subtitle paragraph is visible below the heading
- And a "Get Started" button with arrow icon is rendered

#### Scenario: Features section shows 6 feature cards
- Given the page loads
- Then a "Featured Area" section is visible
- And 6 feature cards are rendered in a 3-column grid
- And each feature card has a gradient icon, uppercase title, and description paragraph

#### Scenario: Our Story section renders split layout
- Given the page loads
- Then an "Our Untold Story" section is visible
- And the left side shows the section title on a gradient background
- And the right side shows a content box with heading, paragraph, and CTA button

#### Scenario: Amazing Works shows portfolio carousel
- Given the page loads
- Then an "Our Amazing Works" section is visible
- And portfolio items are displayed in a horizontal carousel
- And each item has an image thumbnail, uppercase heading, and description text

#### Scenario: Our Story 2 renders mirrored layout
- Given the page loads
- Then a second story section is visible
- And the layout is mirrored from the first story section (title on right, content on left)

#### Scenario: Brand logos section displays partner logos
- Given the page loads
- Then a brand logos row is visible
- And 5 partner logo images are displayed

#### Scenario: Newsletter subscription form renders correctly
- Given the page loads
- Then a "Subscribe for our Newsletter" section is visible
- And an email input field with pill-shaped styling is rendered
- And a "Get Started" button is positioned inside/next to the input

#### Scenario: Footer widget shows contact information
- Given the page loads
- Then a footer widget area with gradient background is visible
- And 3 contact columns (Address, Email, Phone) with icon boxes are rendered
- And a copyright line with "Component Dock" link is present
- And social media icons (Facebook, Twitter, Dribbble, Behance) are displayed

## Verification Checklist

- [ ] Hero section gradient matches `linear-gradient(135deg, #49e3ce 0%, #9920ed 100%)`
- [ ] Font family is Poppins (loaded via Google Fonts link in index.html)
- [ ] Primary button has `border-radius: 20px` (pill shape) with gradient hover fill
- [ ] Feature icons use gradient text (purple-to-teal)
- [ ] Amazing works section background is `#f9f9ff`
- [ ] Newsletter input has pill styling with `#f9f9ff` background
- [ ] Footer links to `https://www.componentdock.com/` (branded "Component Dock")
- [ ] No ColorLib references in app code (source provenance only in spec/PR)
- [ ] Section order matches: Header → Hero → Features → Story → Works → Story2 → Brands → Newsletter → Footer
- [ ] Placeholder images use `https://picsum.photos/seed/<template>-<n>/<w>/<h>`
- [ ] Brand logos use placeholder images (not copied assets)
- [ ] All accessibility: semantic elements, aria labels on icon-only controls
