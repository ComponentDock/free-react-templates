# Template: IronShed (Fitness / Gym)

## Purpose

Recreation of ColorLib's **Ponigym** fitness/gym template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `ponigym`
- **Preview URL:** https://preview.colorlib.com/theme/ponigym/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ponigym-free-template.jpg
- **New name:** `ironshed` (apps/ironshed, @free-react-templates/ironshed)
- **Deploy target:** https://ironshed.free.componentdock.com

## Design tokens

Extracted from `https://preview.colorlib.com/theme/ponigym/css/style.css` and the live DOM.

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto, sans-serif` | 400/500/700 weights |
| Heading font | `Oswald, sans-serif` | 300/400/500/600/700 weights |
| Brand accent | `#f34e3a` | Red-orange — buttons, section-title left bar, active nav, schedule cell highlights |
| Heading color | `#111111` | Base for h1-h6 |
| Section title color | `#191919` | h2 section headings |
| Body text color | `#8f8fa8` | Paragraphs, muted text |
| Description color | `#6e6e6e` | Section subtitle paragraphs, trainer names |
| Schedule cell colors | Gym/Running: `#f34e3a`, Yoga: `#247cc6`, Body/Box: `#6dcff6`, Cardio: `#4cbcc3` | Color-coded workout types in trainer schedule table |
| Team section bg | `#f2f4f5` | Light gray background |
| CTA section | Background image, white text `#ffffff` | Full-width parallax banner |
| Primary button | bg `#f34e3a`, color `#ffffff`, no border-radius, uppercase, letter-spacing 2px, padding 12px 39px, font `Oswald` | Rectangular/square buttons |
| Schedule button | Similar to primary but smaller text | "View Schedule" links |
| Section title accent | Left bar: 3px wide, 29px tall, `#f34e3a`, absolute positioned | Decorative left border |
| Spacing | `.spad`: padding-top 100px, padding-bottom 100px | Consistent section padding |
| Preloader | Black background, rotating border spinner (#f44336 / #673ab7) | Optional — skip in React version |

## Section structure (from live DOM)

Page order (single-page React app — all sections composed in App.tsx):

1. **Navbar** — absolute header, logo left, nav links right (Home, About, Schedule, Portfolio, Blog, Contacts), search icon
2. **Hero** — full-viewport carousel slider with 3 slides, each with background image, h4 subtitle "Elite Personal Training Services", h1 headline "Make it Shape" (Shape is accent-colored), primary CTA button "Join Us Now"
3. **Services** — two-column: left has section title "Our Program" + 4 service items (Weight Lifting, Body Building, Healthy, Yoga) each with icon, title, description; right has video thumbnail with play button popup
4. **CTA Banner** — full-width parallax background, centered white text headline "Start your Journey with our exciting offers", subtitle, primary CTA "Join With Us"
5. **Classes** — section title "Our Class" + "View All Schedule" button; 6 tabbed class panels (Body Building, Racing running, Yoga Fitness, Kick boxing, Cardio workout, Martial Arts) each with image + text + "View Schedule" link; bottom tab bar with trainer thumbnails
6. **Trainer Schedule** — full-width parallax background, section title "Our Trainer", weekly schedule table (Mon-Sun × 10:00/14:00/16:00 time slots), color-coded cells by workout type
7. **Team** — section title "Our Trainer" + "View All" button, 3 team members in 3-column grid, each with photo + specialty span + name + description + social icons (facebook, twitter, pinterest, vimeo)
8. **Latest News** — section title "Latest News", 3 blog cards each with image, date + comment count tags, article title link
9. **Footer** — two-column: left = Google Maps iframe embed + address widget; right = contact form (Name, Email, Subject, Message + Submit) on background image; bottom register bar with copyright + footer links (Privacy Policy, Terms Of Service, Careers) + social icons (facebook, twitter, instagram)

## Gherkin requirements

```gherkin
Feature: IronShed fitness template

  Background:
    Given the user opens the IronShed page at the root URL

  # --- Navbar ---
  Scenario: Navbar displays all navigation links
    Then I should see navigation links: "Home", "About", "Schedule", "Portfolio", "Blog", "Contacts"
    And the logo should be visible on the left
    And a search icon should be visible on the right

  Scenario: Navbar is transparent and overlays the hero
    Then the header should have absolute positioning over the hero section

  # --- Hero ---
  Scenario: Hero section shows the primary headline
    Then I should see the headline "Make it Shape"
    And I should see the subtitle "Elite Personal Training Services"
    And I should see a "Join Us Now" primary button

  Scenario: Hero section renders as a carousel
    Then I should see 3 hero slides with background images
    And navigation dots/arrows should be visible

  # --- Services ---
  Scenario: Services section lists 4 programs
    Then I should see section title "Our Program"
    And I should see 4 service items: "Weight Lifting", "Body Building", "Healthy", "Yoga"
    And each service item should have an icon, title, and description paragraph

  Scenario: Services section shows a video thumbnail
    Then I should see a video background image with a play button overlay

  # --- CTA Banner ---
  Scenario: CTA banner displays the call to action
    Then I should see "Start your Journey with our exciting offers"
    And I should see a "Join With Us" primary button

  Scenario: CTA banner has a parallax background
    Then the CTA section should have a background image with parallax scroll

  # --- Classes ---
  Scenario: Classes section shows tabbed class details
    Then I should see section title "Our Class"
    And I should see 6 tabbed panels: "Body Building", "Racing running", "Yoga Fitness", "Kick boxing", "Cardio workout", "Martial Arts"
    And each panel should show a class image, description, and "View Schedule" link

  Scenario: Class tabs switch content on click
    When I click the "Yoga Fitness" tab
    Then the Yoga Fitness panel should become visible
    And other panels should be hidden

  Scenario: Class section has a "View All Schedule" button
    Then I should see a "View All Schedule" primary button aligned right

  # --- Trainer Schedule ---
  Scenario: Trainer schedule shows weekly timetable
    Then I should see section title "Our Trainer"
    And I should see a schedule table with columns: Monday through Sunday
    And I should see time slot rows for 10:00, 14:00, and 16:00
    And cells should show workout type, time range, and trainer name

  Scenario: Schedule cells are color-coded by workout type
    Then "Gym" cells should have the brand accent color (#f34e3a)
    And "Yoga" cells should have the yoga color (#247cc6)
    And "Body"/"Box" cells should have the body color (#6dcff6)
    And "Cardio" cells should have the cardio color (#4cbcc3)

  # --- Team ---
  Scenario: Team section displays 3 trainers
    Then I should see section title "Our Trainer"
    And I should see 3 team members, each with a photo, specialty, name, description, and social icons

  Scenario: Team section has a "View All" button
    Then I should see a "View All" primary button

  # --- Latest News ---
  Scenario: Latest News section shows 3 blog cards
    Then I should see section title "Latest News"
    And I should see 3 news cards, each with an image, date tag, comment count tag, and article title

  # --- Footer ---
  Scenario: Footer shows a map and contact form
    Then I should see a map embed on the left
    And I should see a "Request A Call Back" form on the right with fields: Name, Email, Subject, Message
    And I should see a Submit button

  Scenario: Footer bottom bar shows copyright and links
    Then I should see copyright text
    And I should see links: "Privacy Policy", "Terms Of Service", "Careers"
    And I should see social icons: facebook, twitter, instagram
    And the footer MUST link to https://www.componentdock.com/

  # --- Design fidelity ---
  Scenario: Typography matches the original
    Then headings should use "Oswald" font family
    And body text should use "Roboto" font family

  Scenario: Buttons match the original style
    Then primary buttons should have background #f34e3a
    And primary buttons should be uppercase with letter-spacing 2px
    And primary buttons should have no border-radius (rectangular)

  Scenario: Section titles have left accent bar
    Then section title h2 elements should have a 3px wide left bar in #f34e3a
```

## Verification checklist

- [ ] Navbar: absolute position, transparent overlay, all 6 nav links, search icon
- [ ] Hero: carousel with 3 slides, background images, "Make it Shape" headline, subtitle, CTA button
- [ ] Services: 4 service items with icons, video thumbnail with play button
- [ ] CTA Banner: parallax background, white text, headline + subtitle + button
- [ ] Classes: 6 tabbed panels with images + descriptions, tab switching works, "View All Schedule" button
- [ ] Trainer Schedule: weekly table, color-coded cells, correct workout labels
- [ ] Team: 3 trainer cards with photo, specialty, name, description, social icons
- [ ] Latest News: 3 blog cards with images, date/comments tags, title links
- [ ] Footer: map embed, contact form (4 fields + submit), copyright, footer links, social icons
- [ ] Footer links to componentdock.com
- [ ] Design tokens: Oswald headings, Roboto body, #f34e3a brand accent, no border-radius buttons
- [ ] Section title left accent bar (3px, #f34e3a)
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage on all components
- [ ] CNAME: ironshed.free.componentdock.com
- [ ] package.json: @free-react-templates/ironshed, homepage set
