# Template: Snapvue (Photography Portfolio)

## Purpose

Recreation of ColorLib **Bato** — a photography portfolio website template.
Recreated as a single-page React application with the multi-page structure
consolidated into anchor-sections on one page.

- **ColorLib source:** https://colorlib.com/wp/template/bato/
- **Live preview:** https://preview.colorlib.com/theme/bato/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bato-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Lucide React icons
- **Name origin:** "snap" (photography snap) + "vue" (view) — does not reuse the ColorLib source name.

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token               | Value                              | Usage                                   |
|---------------------|------------------------------------|-----------------------------------------|
| Body font           | `"Karla", Arial, sans-serif`       | Body text, paragraphs, spans            |
| Heading font        | `"Playfair Display", Georgia, serif`| h1–h6, logo, article headings          |
| Body background     | `#ffffff`                          | Page background                         |
| Body text color     | `gray`                             | Paragraph text                          |
| Brand / accent      | `#F9CE00`                          | Links, buttons, active nav, CTA         |
| Brand hover         | `#FFD614`                          | Button hover state                      |
| Heading text        | `rgba(0,0,0,0.8)`                  | h1–h6 color                             |
| Nav panel bg        | `#ffffff`                          | Slide-out navigation background         |
| Nav link text       | `#000000`                          | Navigation link color                   |
| Nav active link     | `#F9CE00`                          | Active navigation item                  |
| Nav toggle bg       | `rgba(0,0,0,0.05)`                | Hamburger button background             |
| Nav toggle hover bg | `#000000`                          | Hamburger hover, white icon lines       |
| Logo                | Playfair Display, 24px, uppercase, `#000`, bold | Header brand              |
| btn-view            | 13px, letter-spacing 7px, `#000`, uppercase, border 1px solid `#000` | Outline CTA buttons |
| btn-primary         | bg `#F9CE00`, color `#fff`, border 2px solid `#F9CE00` | Filled CTA buttons    |
| Selection           | bg `#b7c2c2`, color `#fcfcfc`      | Text selection highlight                |
| Hero slide number   | Absolute bottom, large outline text| Slide counter (01/03)                   |
| Hero tag            | Block, letter-spacing 7px          | Small label above hero heading          |
| Hero heading        | 58px, bold                         | Hero main heading                       |
| Work entry heading  | 40px, bold, letter-spacing 2px     | Portfolio item title                    |
| Footer heading      | 18px, uppercase, bold, `#000`      | Footer column headings                  |
| Footer text         | `#1a1a1a`, 14px                    | Footer body text                        |
| Footer social icons | 24px, `#000`                       | Social media icon links                 |
| Section padding     | 5em–8em vertical                   | Vertical rhythm                         |

### Visual description (from screenshot reference)

The Bato template is a clean, minimalist photography portfolio with a white
background and a bold yellow (`#F9CE00`) accent. The design features a
split-layout hero: a large background image on the left (≈60%) and a text
panel on the right (≈40%) with a slide counter, tag label, heading, and
an outline CTA button. The typography pairs a serif heading font (Playfair
Display) with a sans-serif body font (Karla), creating an editorial feel.
Portfolio entries alternate image-left/text-right and text-left/image-right.
The newsletter section uses a centered layout with a yellow "Subscribe Now"
button. The footer is a 3-column layout with contact info, email, and social
icons — all on a white background.

## Gherkin requirements

### Feature: Snapvue Photography Portfolio Template

#### Background
  Given the template is loaded in a browser
  And the page background is white (#ffffff)
  And the primary accent color is yellow (#F9CE00)

#### Scenario: Navbar renders with logo and navigation toggle
  Given the page is at the top
  When I view the header
  Then I see a logo "Snapvue" styled in Playfair Display uppercase bold
  And I see a hamburger navigation toggle button
  And the logo is positioned at the left
  And the toggle is positioned at the right

#### Scenario: Navigation panel opens and closes
  Given the navigation panel is closed
  When I click the hamburger toggle
  Then the navigation panel slides in from the right
  And it displays links: Home, Work, About, Contact
  And it displays a search input
  And it displays 4 gallery thumbnail images
  When I click the toggle again or click outside
  Then the navigation panel closes

#### Scenario: Hero section displays carousel with 3 slides
  Given I am on the home page
  When the hero section loads
  Then I see a carousel with 3 slides
  And each slide has a full-height background image on the left (60% width)
  And each slide has a text panel on the right (40% width)
  And the text panel contains a slide number (01/03, 02/03, 03/03)
  And the text panel contains a tag label ("Welcome", "Photography", "Discover")
  And the text panel contains a heading
  And the text panel contains a description paragraph
  And the text panel contains a "View Galleries" outline button
  And carousel navigation arrows appear at the bottom

#### Scenario: Hero slide navigation works
  Given slide 1 is displayed
  When I click the next arrow
  Then slide 2 appears
  And the slide number updates to "02/03"
  When I click the previous arrow
  Then slide 1 reappears

#### Scenario: Work/Portfolio section displays projects
  Given I scroll to the Works section
  Then I see a centered heading "Works"
  And I see 6 portfolio entries
  And each entry has a large background image (55% width)
  And each entry has a text panel (45% width) with heading, description, and "View Photo" button
  And entries alternate between image-right/text-left and image-left/text-right layout

#### Scenario: Work entry text panel has correct styling
  Given a work entry is visible
  When I look at the text panel
  Then the heading is in Playfair Display, 40px, bold
  And the text panel has a white background
  And the "View Photo" button is an outline button (1px solid #000, uppercase)

#### Scenario: Newsletter/Subscribe section renders correctly
  Given I scroll to the Subscribe section
  Then I see a centered heading "Subscribe Newsletter"
  And I see a subtitle "Subscribe our newsletter and get latest update"
  And I see an email input field with placeholder "Enter your email"
  And I see a "Subscribe Now" yellow primary button (#F9CE00)
  And the section has 5em vertical padding

#### Scenario: Newsletter form validates email input
  Given I am on the Subscribe section
  When I click "Subscribe Now" with an empty email
  Then the form does not submit
  When I enter a valid email address and click "Subscribe Now"
  Then the form submits successfully

#### Scenario: Footer renders with 3 columns
  Given I scroll to the footer
  Then I see 3 columns: "Office", "Get in Touch", and "Social"
  And the Office column shows a street address
  And the Get in Touch column shows an email link
  And the Social column shows 4 social media icon links
  And there is a copyright line with "Made with ❤ by Component Dock" attribution
  And the footer has 8em vertical padding

#### Scenario: Footer social icons are accessible
  Given the footer is visible
  When I look at the social icons
  Then each icon link has an aria-label
  And each icon is keyboard-focusable

#### Scenario: Responsive layout adapts to mobile
  Given the viewport width is less than 768px
  When I view the page
  Then the navbar padding adjusts to 5em top
  And the hero text heading scales down to 24px
  And the nav panel width reduces to 300px
  And work entry text panels stack vertically
  And the gallery thumbnails in nav show 2 per row (50% width)

#### Scenario: Accessibility basics
  Given the page loads
  Then all images have alt text
  And all interactive elements are keyboard-focusable
  And the page has proper heading hierarchy (h1 > h2 > h3)
  And the nav has role="navigation"
  And focus-visible rings appear on interactive elements

#### Scenario: Footer links to Component Dock
  Given the footer is visible
  When I look at the attribution text
  Then I see a link to "https://www.componentdock.com/" labeled "Component Dock"

## Verification checklist

- [ ] Logo reads "Snapvue" (NOT "Bato") in header
- [ ] No ColorLib references in any app source file, comment, or data
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] `public/CNAME` contains `snapvue.free.componentdock.com`
- [ ] `package.json` "homepage" is `https://snapvue.free.componentdock.com`
- [ ] Hero carousel has 3 slides with correct split layout (60/40)
- [ ] Work section has 6 entries with alternating image/text layout
- [ ] Newsletter section with email input + yellow Subscribe button
- [ ] Footer with 3 columns (Office, Get in Touch, Social)
- [ ] Design tokens match: brand #F9CE00, Karla body font, Playfair Display headings
- [ ] Placeholder images via `https://picsum.photos/seed/snapvue-<n>/<w>/<h>`
- [ ] Google Fonts loaded in index.html (Karla + Playfair Display)
- [ ] All images have alt text; keyboard navigation works
- [ ] `npm run verify:app snapvue` passes (typecheck + lint + 100% coverage + build)
- [ ] No new dependencies added (reuse packages/ui)
