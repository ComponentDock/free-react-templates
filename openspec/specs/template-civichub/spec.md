# CivicHub — CV / Resume Personal Portfolio Template

Recreation of ColorLib "Civic" (https://colorlib.com/wp/template/civic/).
Preview: https://preview.colorlib.com/theme/civic/

## Design Tokens (extracted from css/style.css)

| Token            | Value        | Usage                                        |
| ---------------- | ------------ | -------------------------------------------- |
| Primary dark     | #40424a      | Section titles, footer bg, input bg, accents |
| Light background | #f2f7f8      | Header bg, hero bg                           |
| Social section bg| #f9f9f9      | Social links bar background                  |
| Button pill bg   | #fff         | CTA buttons (white on dark sections)         |
| Button hover     | #f2f7f8      | Button hover state                           |
| Section divider  | #cbcbcb      | Social section bottom border                 |
| Input border     | #cacaca      | Form input borders                           |
| Accent red       | #ff0f3c      | Accent (used sparingly)                      |
| Accent blue      | #3a4db4      | Accent (used sparingly)                      |
| Body text        | #505259      | Paragraphs, muted text                       |
| Heading text     | #40424a      | All headings (h1–h4)                         |
| Font family      | Josefin Sans | All text (weights 400, 600, 700 + italic)    |
| Button radius    | 60px (pill)  | All CTA buttons                              |
| Social icon bg   | #f9f9f9      | Social link icon circles                     |
| Footer bg        | #40424a      | Footer section                               |
| Footer text      | #fff         | Footer copyright text                        |

## Section Structure (in order)

1. **Header** — Fixed top bar with logo "CivicHub" (h2) + tagline "Enhance your online presence" left-aligned; two pill buttons right-aligned: "Download CV" + "Discover me". Background: #f2f7f8.

2. **Hero** — Split two-column layout (col-lg-6 each): Left = name "Maria Williams" (h2) + bio paragraph + "General Info" block with 4-item list (Date of Birth, Address, E-mail, Phone). Right = full-height portrait photo. Background: #f2f7f8. Full-width container-fluid.

3. **SocialLinks** — Horizontal bar with 5 social icon circles (Pinterest, LinkedIn, Instagram, Facebook, Twitter) centered, with "My Social Profiles" heading. Background: #f9f9f9, bottom border: #cbcbcb. Full-width container-fluid.

4. **WorkExperience** — Section title "Work Experience" + timeline list of 2 entries. Each entry: year range (h2), company name (h3), role title (h4), description paragraph. Layout: centered col-xl-7 offset. Background: transparent (#fff).

5. **Education** — Section title "Education" + timeline list of 2 entries. Same structure as WorkExperience. Background: background image (resume-bg.jpg) with overlay, full-width. Has `.with-bg` modifier class.

6. **References** — Section title "References" + Owl Carousel with 3 review cards. Each card: large opening quotation mark, quote paragraph, name (h3), role/company (h4). Carousel auto-scrolls. Background: transparent.

7. **Portfolio** — Section title "Portfolio" (left col) + "See All Portfolio" button (right col). Below: 4-column grid of portfolio items. Each: image thumbnail, title (h2), category (p). Background: transparent.

8. **ExtraSkills** — Section title "Extra Skills" + 2x2 grid: Top row = 2 circular progress indicators (75% "Inspiration", 83% "Inspiration") with transparent background boxes. Bottom row = 2 stat boxes with icon + number (14 "Years of Experience", 9 "Awards Won") on dark background. Background: transparent.

9. **ContactForm** — Section title "Contact Me" + form with: Name input, Email input, Subject input, Message textarea, "Send message" pill button right-aligned. Background: transparent. Col-xl-8 centered.

10. **Footer** — Centered copyright text with heart icon + "Component Dock" link to https://www.componentdock.com/. Background: #40424a. Text: white.

## Scenarios

### Header
- GIVEN user loads the page, THEN header shows logo "CivicHub" with tagline and two CTA buttons
- GIVEN user clicks "Download CV" button, THEN action is handled (placeholder link)
- GIVEN user clicks "Discover me" button, THEN page scrolls to hero section

### Hero
- GIVEN user loads the page, THEN hero shows name, bio, and general info list
- GIVEN user loads the page, THEN hero shows portrait photo on the right

### SocialLinks
- GIVEN user scrolls to social section, THEN 5 social icon links are visible
- GIVEN user hovers a social icon, THEN icon shows hover state

### WorkExperience
- GIVEN user scrolls to work experience, THEN section title "Work Experience" is visible
- GIVEN user views work experience, THEN 2 job entries display with year, company, role, and description

### Education
- GIVEN user scrolls to education, THEN section title "Education" is visible with background image
- GIVEN user views education, THEN 2 education entries display with year, degree, school, and description

### References
- GIVEN user scrolls to references, THEN section title "References" is visible
- GIVEN user views references, THEN carousel displays 3 review cards with quote, name, and role

### Portfolio
- GIVEN user scrolls to portfolio, THEN section title and "See All Portfolio" button are visible
- GIVEN user views portfolio, THEN 4 portfolio items display with image, title, and category

### ExtraSkills
- GIVEN user scrolls to extra skills, THEN section title "Extra Skills" is visible
- GIVEN user views extra skills, THEN 2 circular progress indicators and 2 stat boxes display

### ContactForm
- GIVEN user scrolls to contact, THEN form with Name, Email, Subject, Message, and Send button is visible
- GIVEN user submits form with empty fields, THEN form does not navigate (client-side handling)

### Footer
- GIVEN user scrolls to footer, THEN copyright text with "Component Dock" link is visible
- GIVEN user clicks "Component Dock" link, THEN browser navigates to https://www.componentdock.com/

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Josefin Sans font loaded via Google Fonts
- [ ] Design tokens match: #40424a primary, #f2f7f8 light bg, #f9f9f9 social bg
- [ ] Buttons are pill-shaped (border-radius: 60px)
- [ ] Social links section has 5 icon circles
- [ ] Work Experience has 2 timeline entries
- [ ] Education has 2 timeline entries with background image
- [ ] References carousel has 3 cards with quotation marks
- [ ] Portfolio grid has 4 items
- [ ] Extra Skills has circular progress + stat boxes
- [ ] Contact form has all fields + send button
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] 100% test coverage
