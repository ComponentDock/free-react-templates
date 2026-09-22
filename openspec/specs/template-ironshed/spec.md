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

| Token                | Value                                                                                                            | Notes                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Body font            | `Roboto, sans-serif`                                                                                             | 400/500/700 weights                                                                |
| Heading font         | `Oswald, sans-serif`                                                                                             | 300/400/500/600/700 weights                                                        |
| Brand accent         | `#f34e3a`                                                                                                        | Red-orange — buttons, section-title left bar, active nav, schedule cell highlights |
| Heading color        | `#111111`                                                                                                        | Base for h1-h6                                                                     |
| Section title color  | `#191919`                                                                                                        | h2 section headings                                                                |
| Body text color      | `#8f8fa8`                                                                                                        | Paragraphs, muted text                                                             |
| Description color    | `#6e6e6e`                                                                                                        | Section subtitle paragraphs, trainer names                                         |
| Schedule cell colors | Gym/Running: `#f34e3a`, Yoga: `#247cc6`, Body/Box: `#6dcff6`, Cardio: `#4cbcc3`                                  | Color-coded workout types in trainer schedule table                                |
| Team section bg      | `#f2f4f5`                                                                                                        | Light gray background                                                              |
| CTA section          | Background image, white text `#ffffff`                                                                           | Full-width parallax banner                                                         |
| Primary button       | bg `#f34e3a`, color `#ffffff`, no border-radius, uppercase, letter-spacing 2px, padding 12px 39px, font `Oswald` | Rectangular/square buttons                                                         |
| Schedule button      | Similar to primary but smaller text                                                                              | "View Schedule" links                                                              |
| Section title accent | Left bar: 3px wide, 29px tall, `#f34e3a`, absolute positioned                                                    | Decorative left border                                                             |
| Spacing              | `.spad`: padding-top 100px, padding-bottom 100px                                                                 | Consistent section padding                                                         |

## Section structure (from live DOM)

Page order (single-page React app — all sections composed in App.tsx):

1. **Navbar** — absolute header, logo left, nav links right (Home, About, Schedule, Portfolio, Blog, Contacts), search icon
2. **Hero** — full-viewport carousel slider with 3 slides, each with background image, h4 subtitle "Elite Personal Training Services", h1 headline "Make it Shape" (Shape is accent-colored), primary CTA button "Join Us Now"
3. **Services** — two-column: left has section title "Our Program" + 4 service items (Weight Lifting, Body Building, Healthy, Yoga) each with icon, title, description; right has video thumbnail with play button popup
4. **CTA Banner** — full-width parallax background, centered white text headline "Start your Journey with our exciting offers", subtitle, primary CTA "Join With Us"
5. **Classes** — section title "Our Class" + "View All Schedule" button; 6 tabbed class panels (Body Building, Racing running, Yoga Fitness, Kick boxing, Cardio workout, Martial Arts) each with image + text + "View Schedule" link; bottom tab bar with trainer thumbnails
6. **Trainer Schedule** — full-width parallax background, section title "Our Trainer", weekly schedule table (Mon-Sun x 10:00/14:00/16:00 time slots), color-coded cells by workout type
7. **Team** — section title "Our Trainer" + "View All" button, 3 team members in 3-column grid, each with photo + specialty span + name + description + social icons
8. **Latest News** — section title "Latest News", 3 blog cards each with image, date + comment count tags, article title link
9. **Footer** — two-column: left = Google Maps iframe embed + address widget; right = contact form on background image; bottom register bar with copyright + footer links + social icons + Component Dock link

## Requirements

### Requirement: Navbar displays all navigation links

The navbar SHALL be transparent and overlay the hero section, with logo left, 6 nav links right (Home, About, Schedule, Portfolio, Blog, Contacts), and a search icon.

#### Scenario: Navbar renders all links

- **WHEN** the user opens the page
- **THEN** I should see navigation links: Home, About, Schedule, Portfolio, Blog, Contacts
- **AND** the logo should be visible on the left
- **AND** a search icon should be visible on the right

#### Scenario: Navbar is transparent overlay

- **WHEN** the user views the page
- **THEN** the header should have absolute positioning over the hero section

### Requirement: Hero section shows the primary headline

The hero SHALL display a carousel with 3 slides, each with a background image, subtitle "Elite Personal Training Services", headline "Make it Shape" (Shape accent-colored), and a "Join Us Now" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the user views the hero
- **THEN** I should see the headline "Make it Shape"
- **AND** I should see the subtitle "Elite Personal Training Services"
- **AND** I should see a "Join Us Now" primary button

#### Scenario: Hero carousel navigation works

- **WHEN** the user clicks the next/prev arrows or dots
- **THEN** the active slide should change
- **AND** navigation indicators should update

### Requirement: Services section lists 4 programs

The services section SHALL display 4 service items (Weight Lifting, Body Building, Healthy, Yoga) with icons, titles, and descriptions, plus a video thumbnail with play button.

#### Scenario: Services render all items

- **WHEN** the user scrolls to the services section
- **THEN** I should see section title "Our Program"
- **AND** I should see 4 service items with icons, titles, and descriptions

### Requirement: CTA banner displays the call to action

The CTA section SHALL display a parallax background with white text and a primary button.

#### Scenario: CTA banner content

- **WHEN** the user views the CTA section
- **THEN** I should see "Start your Journey with our exciting offers"
- **AND** I should see a "Join With Us" primary button

### Requirement: Classes section shows tabbed class details

The classes section SHALL display 6 tabbed panels with class images, descriptions, and a "View Schedule" link. Tab switching SHALL show the corresponding panel.

#### Scenario: Classes render with tabs

- **WHEN** the user views the classes section
- **THEN** I should see section title "Our Class"
- **AND** I should see 6 tab buttons for each class type

#### Scenario: Class tabs switch content

- **WHEN** the user clicks a class tab
- **THEN** the corresponding class panel should become visible
- **AND** the tab should be highlighted as active

### Requirement: Trainer schedule shows weekly timetable

The schedule section SHALL display a table with day columns (Mon-Sun) and time slot rows, with color-coded cells by workout type.

#### Scenario: Schedule renders table

- **WHEN** the user views the schedule section
- **THEN** I should see a schedule table with day headers
- **AND** cells should be color-coded by workout type

### Requirement: Team section displays 3 trainers

The team section SHALL display 3 trainer cards with photos, specialties, names, descriptions, and social icons.

#### Scenario: Team renders trainer cards

- **WHEN** the user views the team section
- **THEN** I should see 3 trainer cards with names and specialties
- **AND** each card should have social icons

### Requirement: Latest News section shows 3 blog cards

The news section SHALL display 3 blog cards with images, dates, comment counts, and article title links.

#### Scenario: News renders blog cards

- **WHEN** the user views the news section
- **THEN** I should see section title "Latest News"
- **AND** I should see 3 news cards with dates and comment counts

### Requirement: Footer shows contact form and map

The footer SHALL display a map embed on the left, a contact form on the right with 4 fields (Name, Email, Subject, Message) and a Submit button, plus a bottom bar with copyright, footer links, social icons, and a Component Dock link.

#### Scenario: Footer renders contact form

- **WHEN** the user views the footer
- **THEN** I should see a "Request A Call Back" form with Name, Email, Subject, Message fields
- **AND** I should see a Submit button

#### Scenario: Footer links to Component Dock

- **WHEN** the user views the footer bottom
- **THEN** I should see a link to https://www.componentdock.com/

### Requirement: Design tokens match the original

The template SHALL use Oswald for headings, Roboto for body text, and #f34e3a as the brand accent color. Primary buttons SHALL be rectangular with no border-radius.

#### Scenario: Typography matches

- **WHEN** the user views the page
- **THEN** headings should use Oswald font family
- **AND** body text should use Roboto font family

#### Scenario: Brand accent is applied

- **WHEN** the user views buttons and section titles
- **THEN** primary buttons should have background #f34e3a
- **AND** primary buttons should be uppercase with letter-spacing 2px
- **AND** primary buttons should have no border-radius (rectangular)
- **AND** section title h2 elements should have a 3px wide left bar in #f34e3a

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
