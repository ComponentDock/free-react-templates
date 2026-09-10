# Template: Craftlab (Small Company / Creative Agency)

## Purpose

Recreation of ColorLib **Bbs** — a small company / creative agency website
template. Recreated as a single-page React application.

- **ColorLib source:** https://colorlib.com/wp/template/bbs/
- **Live preview:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Lucide React icons
- **Name origin:** "craft" (creative work) + "lab" (studio/exploration) — does not reuse the ColorLib source name.

## Design tokens

Extracted from the live preview CSS (`css/main.css`):

| Token               | Value                              | Usage                                   |
|---------------------|------------------------------------|-----------------------------------------|
| Body font           | `"Poppins", sans-serif`            | All text (weights 300, 500, 600, 900)   |
| Body background     | `#ffffff`                          | Page background                         |
| Body text color     | `#777777`                          | Paragraph text                          |
| Heading text        | `#222222`                          | h1–h4 color                             |
| Brand gradient      | `#f58e9a` → `#fbe44c`             | Pink-to-yellow linear gradient (0deg)   |
| Banner gradient     | `#7539dd` → `#7034db`             | Purple radial gradient (hero/video)     |
| Banner bg image     | `img/banner.png`                   | Hero background image (contain)         |
| Primary button      | border-radius 20px, transparent bg, border 1px solid #fff, white text | Pill-shaped outline button |
| Primary btn gradient| `#f58e9a` → `#fbe44c`             | Gradient overlay on hover/after pseudo  |
| Primary btn hover   | text color → `#222222`            | Dark text on hover                      |
| Tab active/hover    | `#f58e9a` → `#fbe44c`             | Gradient underline for active tabs      |
| About area bg       | `#f9f9ff`                          | Very light purple/white                 |
| About image radius  | `3px`                              | Rounded corners on images               |
| Story area bg       | `#7034db`                          | Solid purple section                    |
| Video area          | background image + purple gradient overlay (opacity 0.8) | Parallax-like section |
| Blog area bg        | `#ffffff`                          | White                                   |
| Blog thumb height   | 215px                              | Blog card image height                  |
| Footer bg           | `#333333`                          | Dark gray footer                        |
| Footer text         | `#ffffff`                          | White footer text                       |
| Footer link hover   | `#f58e9a`                          | Pink hover                              |
| Footer social hover | `#f58e9a`                          | Pink hover on social icons              |
| Subscribe section   | white bg, centered layout          | Newsletter form                         |

### Visual description (from screenshot reference)

The Bbs template is a modern, colorful creative agency website with a purple
hero section featuring a radial gradient and a centered headline "we're Creative"
with a pill-shaped "Get Started" button. Below, a white features section shows
4 icon+text cards in a 2×2 grid. The About section uses a light purple background
with a 3-column layout: heading, image, and tabbed content (History / Mission &
Vision). A video section features a purple gradient overlay with a play button.
Three blog cards follow on white, then a solid purple "Story" section with white
text. The newsletter section has a centered form, and the footer is dark gray
with centered nav links and social icons. The overall aesthetic is clean,
modern, and vibrant with a purple-pink-yellow color scheme.

## Gherkin requirements

### Feature: Craftlab Small Company Website Template

#### Background
  Given the template is loaded in a browser
  And the body font is "Poppins" sans-serif
  And the primary accent is a pink-to-yellow gradient (#f58e9a → #fbe44c)

#### Scenario: Header renders with logo and navigation
  Given the page loads
  When I view the header
  Then I see a logo (text or image) at the left
  And I see a navigation bar with links: Home, Generic, Elements
  And I see a hamburger menu toggle on the right
  And the header is positioned at the top

#### Scenario: Banner/Hero section displays
  Given the page loads
  When I view the hero section
  Then I see a purple gradient background (radial, #7539dd → #7034db)
  And I see the heading "we're Creative" in uppercase, centered
  And I see a "Get Started" pill-shaped outline button (border-radius 20px)
  And the section height is 600px

#### Scenario: Features section shows 4 items in a grid
  Given I scroll to the Features section
  Then I see a white background section with 60px top / 100px bottom padding
  And I see 4 feature cards in a 2×2 grid layout
  And each card has an icon image, a heading (h4), and a description paragraph
  And the features are: "Unlimited Colors", "Smart Security", "Endless Support", "Smart Security"

#### Scenario: About section has tabbed content
  Given I scroll to the About section
  Then I see a light purple background (#f9f9ff)
  And I see 3 columns: heading "About Our Company", an image, and tabbed content
  And there are 2 tabs: "History" and "Mission & Vision"
  And the active tab shows a gradient underline (#f58e9a → #fbe44c)
  And clicking "Mission & Vision" switches the content panel

#### Scenario: Video section displays with play button
  Given I scroll to the Video section
  Then I see a background image with a purple gradient overlay (opacity 0.8)
  And I see a centered heading "New Features that open the door of future"
  And I see a play button that links to a YouTube video
  And I see a white description paragraph below the play button

#### Scenario: Blog section shows 3 cards
  Given I scroll to the Blog section
  Then I see a white background section
  And I see 3 blog cards in a row
  And each card has a thumbnail image (215px height), centered title, and centered description
  And the cards are: "Ultimate pet lover", "Upcoming role model", "Colors of Life"

#### Scenario: Story section renders in solid purple
  Given I scroll to the Story section
  Then I see a solid purple background (#7034db)
  And I see a white heading "Crafting Our Experiences"
  And I see white description text

#### Scenario: Subscribe section has newsletter form
  Given I scroll to the Subscribe section
  Then I see a centered heading "Subscribe Newsletter"
  And I see a subtitle text
  And I see an email input with placeholder "Email address"
  And I see a "Get Started" primary button with gradient

#### Scenario: Newsletter form validates email
  Given the Subscribe section is visible
  When I click "Get Started" with an empty email
  Then the form does not submit
  When I enter a valid email and submit
  Then the form submits successfully

#### Scenario: Footer renders with nav, social, and copyright
  Given I scroll to the footer
  Then I see a dark gray background (#333333)
  And I see centered nav links: Home, Generic, Elements
  And I see 4 social media icons (Facebook, Twitter, Dribbble, Behance)
  And I see a copyright line with "Made with ❤ by Component Dock" attribution
  And footer links turn pink (#f58e9a) on hover

#### Scenario: Footer links to Component Dock
  Given the footer is visible
  When I look at the attribution text
  Then I see a link to "https://www.componentdock.com/" labeled "Component Dock"

#### Scenario: Responsive layout adapts to mobile
  Given the viewport width is less than 768px
  When I view the page
  Then the about section title centers
  And the blog cards stack vertically
  And the navigation becomes a hamburger menu

#### Scenario: Accessibility basics
  Given the page loads
  Then all images have alt text
  And all interactive elements are keyboard-focusable
  And the page has proper heading hierarchy (h1 > h2 > h3 > h4)
  And focus-visible rings appear on interactive elements

## Verification checklist

- [ ] Logo reads "Craftlab" (NOT "Bbs") in header
- [ ] No ColorLib references in any app source file, comment, or data
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] `public/CNAME` contains `craftlab.free.componentdock.com`
- [ ] `package.json` "homepage" is `https://craftlab.free.componentdock.com`
- [ ] Hero has purple radial gradient background (#7539dd → #7034db)
- [ ] "Get Started" button is pill-shaped (border-radius 20px)
- [ ] Features section: 4 cards in 2×2 grid
- [ ] About section: 3-column with tabbed content (History / Mission & Vision)
- [ ] Video section with purple gradient overlay + play button
- [ ] Blog section: 3 cards with thumbnail images
- [ ] Story section: solid purple (#7034db) with white text
- [ ] Subscribe section: email form + gradient "Get Started" button
- [ ] Footer: dark gray (#333333) with centered nav + social icons
- [ ] Design tokens match: font Poppins, gradient #f58e9a → #fbe44c, purple #7034db
- [ ] Placeholder images via `https://picsum.photos/seed/craftlab-<n>/<w>/<h>`
- [ ] Google Fonts loaded in index.html (Poppins)
- [ ] All images have alt text; keyboard navigation works
- [ ] `npm run verify:app craftlab` passes (typecheck + lint + 100% coverage + build)
- [ ] No new dependencies added (reuse packages/ui)
