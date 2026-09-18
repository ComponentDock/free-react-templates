# Template: Tandem (Creative Agency)

## Purpose

Recreation of ColorLib **Dup** — a creative agency website template with a bold
crimson-red dominant palette, boxed layout with shadow frame, full-bleed
background images with red semi-transparent overlays, and a clean minimal
aesthetic.

- **Source:** https://colorlib.com/wp/template/dup/
- **Preview:** https://preview.colorlib.com/theme/dup/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dup-free-creative-agency-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/main.css`).

| Token             | Value                                      | Usage                                |
| ----------------- | ------------------------------------------ | ------------------------------------ |
| Font family       | `"Poppins", sans-serif`                    | All text (weights 300, 500, 600)     |
| Brand crimson     | `#e0003b`                                  | Body background, overlays (80% opacity), progress bars, button hover fill |
| Brand crimson alt | `#df003a`                                  | Hover states, inline highlights (effectively same as brand crimson) |
| Text dark         | `#222222`                                  | Headings                             |
| Text gray         | `#777777`                                  | Body text, descriptions, links       |
| Section bg white  | `#ffffff`                                  | Banner, achievements, skills, contact areas |
| Section bg light  | `#f9fcff`                                  | Achievement link cards, progress bar backgrounds |
| Button style      | Transparent bg, asymmetric padding (L:30px R:60px), pill shape | `.primary-btn` throughout |
| Button hover      | `#e0003b` bg, white text, arrow slides right | Primary CTA interaction           |
| Button white var  | White border, white text, hover fills white with crimson text | Carousel CTAs |
| Overlay           | `rgba(224, 0, 59, 0.8)`                   | Studio, video, carousel, footer background overlays |
| Body background   | `#e0003b` solid crimson                    | The body element itself is red       |
| Content frame     | White bg, `margin: 50px`, `box-shadow: 0 0 50px rgba(0,0,0,0.2)` | Boxed layout wrapper (`.dup-body-wrap`) |
| Section gap       | `padding: 90px 0`                          | Consistent vertical rhythm between sections |
| Progress bar      | `#e0003b` fill on `#f9fcff` bg             | Skill progress indicators            |
| Social colors     | Standard Font Awesome icon colors           | Footer social icons                  |

## Section Structure (order preserved)

1. **Header** — Logo left, nav links (Home, Generic, Elements) right, hamburger menu toggle (`.lnr-menu` icon)
2. **Banner/Hero** — Full-width white background, 800px height on desktop, overlay (no visual effect on white), two-column layout:
   - Left (col-lg-6): Headline "Sleek and Clean with same perspective", description paragraph, "Get Started" CTA button with arrow icon
   - Right (col-lg-5): Hero image (banner.png)
3. **Studio Area** — Full-bleed background image with crimson overlay (80% opacity), two-column layout:
   - Left (col-md-4): Studio photo thumbnail
   - Right (col-md-8): "Green Forest Studio" heading, description paragraph, "View More" CTA button
4. **Achievement Area** — White background, two-column layout:
   - Left (col-lg-5): "Our Achievements" heading, description paragraph, "View More" button
   - Right (col-lg-6): 6-item grid (3 cols × 2 rows) of achievement cards:
     - Behance Review (fa-behance), Dribbble Shots (fa-dribbble), Youtube Subscribe (fa-youtube), Github Push (fa-github), Offline Trophy (fa-trophy), Cash Prizes (fa-usd)
     - Each: light bg card with icon + title
5. **Video Area** — Full-bleed background image with crimson overlay (80% opacity):
   - Centered play button (play-btn.png image link)
   - "Everyone wants to be unique" heading (white)
6. **Skill Area** — White background, two-column layout:
   - Left (col-lg-5): "Our Tools Expertness" heading, description paragraph, "View More" button
   - Right (col-lg-6): 4 labeled progress bars:
     - Adobe Photoshop CC (70%), Adobe Illustrator CC (60%), Adobe Indesign CC (50%), Adobe After Effects CC (80%)
     - Bar fill: crimson on light background
7. **Carousel Area** — Full-bleed background image with crimson overlay (80% opacity), Owl Carousel (5 items):
   - Each item: image thumbnail left (col-xl-6 col-md-4), text right (col-xl-6 col-md-7)
   - Content: "Glowing Milk Bottle" heading, subtitle, description paragraph, "View More" button (white variant)
8. **Contact Area** — White background, 4-column layout (col-lg-3 col-md-6):
   - Visit Our Office (address), Let's call us (phone numbers), Let's Email Us (email addresses), Customer Support (support emails)
   - Each column: heading + paragraph with contact details
9. **Footer Widget Area** — Full-bleed background image with crimson overlay (80% opacity):
   - **Subscription area**: Centered email input + "Subscribe now" button
   - **Footer columns**: 4-column layout:
     - About Agency (links: Managed Website, Manage Reputation, Power Tools, Marketing Service)
     - Navigation Links (Home, Main Features, Offered Services, Latest Portfolio)
     - Navigation Links (Works & Builders, Works & Wordpress, Works & Templates)
     - Instafeed (8 thumbnail images in flex grid)
   - **Footer bottom bar**: Copyright text left, social icons right (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

```gherkin
Feature: Tandem creative agency template

  Scenario: Page loads with boxed layout on crimson background
    Given I visit the Tandem page
    Then I should see a crimson (#e0003b) body background
    And the page content should be framed in a white centered box with shadow

  Scenario: Header displays logo and navigation
    Given I visit the Tandem page
    Then I should see a logo in the header
    And I should see navigation links for Home, Generic, and Elements
    And I should see a hamburger menu button

  Scenario: Hero banner shows headline and CTA
    Given I visit the Tandem page
    Then I should see the headline "Sleek and Clean with same perspective"
    And I should see a descriptive paragraph below the headline
    And I should see a "Get Started" button with an arrow icon

  Scenario: Studio section displays with red overlay background
    Given I visit the Tandem page
    Then I should see the "Green Forest Studio" heading
    And I should see a description paragraph
    And I should see a "View More" button
    And the section should have a background image with crimson overlay

  Scenario: Achievements section shows 6 metric cards
    Given I visit the Tandem page
    Then I should see the "Our Achievements" heading
    And I should see 6 achievement cards with icons
    And the cards should include Behance Review, Dribbble Shots, Youtube Subscribe, Github Push, Offline Trophy, and Cash Prizes

  Scenario: Video section displays play button
    Given I visit the Tandem page
    Then I should see the "Everyone wants to be unique" heading
    And I should see a play button that links to a video
    And the section should have a background image with crimson overlay

  Scenario: Skills section shows progress bars
    Given I visit the Tandem page
    Then I should see the "Our Tools Expertness" heading
    And I should see 4 labeled progress bars
    And the progress bars should represent Adobe Photoshop CC, Illustrator CC, Indesign CC, and After Effects CC

  Scenario: Carousel displays project items
    Given I visit the Tandem page
    Then I should see carousel slides with images and text
    And each slide should have a "View More" button with white variant styling

  Scenario: Contact section shows 4 contact columns
    Given I visit the Tandem page
    Then I should see Visit Our Office, Let's call us, Let's Email Us, and Customer Support columns
    And each column should contain relevant contact information

  Scenario: Footer contains subscription form and links
    Given I visit the Tandem page
    Then I should see an email subscription input with "Subscribe now" button
    And I should see footer columns with navigation links
    And I should see social icons for Facebook, Twitter, Dribbble, and Behance
    And I should see a Component Dock attribution link

  Scenario: Primary buttons have pill shape and hover animation
    Given I visit the Tandem page
    Then all primary buttons should have pill-shaped rounded corners
    And hovering over a primary button should fill it with crimson and change text to white
    And the arrow icon should slide right on hover
```

## Verification Checklist

- [ ] Poppins font loaded (weights 300, 500, 600)
- [ ] Crimson body background (#e0003b)
- [ ] Boxed white content wrapper with box-shadow and margin
- [ ] Header with logo, nav links, hamburger menu
- [ ] Hero banner: headline, description, CTA button with arrow
- [ ] Studio section: background image + crimson overlay, photo + text layout
- [ ] Achievements: 6 icon cards in 3-column grid
- [ ] Video section: background image + crimson overlay, play button, heading
- [ ] Skills: 4 labeled progress bars with crimson fill
- [ ] Carousel: multiple slides with image + text + white-variant CTA
- [ ] Contact: 4 columns with address/phone/email/support info
- [ ] Footer: subscription form, 4-column links, social icons, Component Dock link
- [ ] Pill-shaped buttons with hover animation (fill + arrow slide)
- [ ] Responsive: columns collapse gracefully on mobile
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` set to `tandem.free.componentdock.com`
- [ ] `homepage` set to `https://tandem.free.componentdock.com`
