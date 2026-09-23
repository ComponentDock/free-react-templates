# Template: Lexcounsel (Law Firm / Legal)

## Purpose

Recreation of ColorLib **The Lawyer** template as a single-page React application.
- Source: [colorlib.com/wp/template/thelawyer/](https://colorlib.com/wp/template/thelawyer/)
- Preview: [preview.colorlib.com/theme/thelawyer/](https://preview.colorlib.com/theme/thelawyer/)
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`assets/css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#3957ff` | Buttons, links, section labels, accent color |
| Navy dark | `#112957` | Hero button bg, submit button bg, footer dark bg |
| Navy deep | `#1f2b7b` | Secondary accent, list bullets, scrollbar |
| Body text | `#10285d` | Paragraph text color |
| Muted text | `#999999` | Secondary/muted text |
| Heading dark | `#092c3f` | H1-H6 base color |
| Dark text | `#212025` | Hero h1, blog headings |
| Light bg | `#f9f9ff` | Section backgrounds, form fields |
| Off-white bg | `#f7f9ff` | Light section tint |
| White | `#fff` | Cards, body bg, nav bg |
| Heading font | `"Josefin Sans", sans-serif` | All headings, nav links, section labels |
| Body font | `"Roboto", sans-serif` | Paragraphs, body text |
| Hero font | `"Rubik", sans-serif` | Hero h1 only |
| Button radius | `0px` (square) | All primary buttons |
| Button padding | `27px 44px` | Primary .btn |
| Hero button padding | `30px 38px` | Hero CTA |
| Section label | Uppercase, 18px, `#3957ff`, left border line |
| Section heading | 40px, weight 600, color `#092c3f` |

## Section Structure

1. **Header** — Sticky navigation bar, white bg, logo left, menu right (Home, About, Services, Cases, Blog, Contact), phone number CTA button (`#3957ff` bg).
2. **Hero Slider** — Full-width background image, two slides, content left-aligned: small label "Committed to success" (blue, uppercase, left line), h1 "Dont Feel Helpless We Fight for Justice" (Rubik, dark), paragraph, "Learn About Us" button (`#112957` bg).
3. **Practice Areas** — 3-column card grid (Health Law, Insurance Law, Vehicle Accident), each card with icon (flaticon), title, description, "Read More >" link. White cards with light border.
4. **About** — Split layout: left image, right text. "We are commited for better service" heading, two paragraphs, "Learn About Us" button (`#112957` bg).
5. **Contact Form** — Dark background section (`#112957`-ish), centered white form: "Fill up to get a qote" label, "World's Leading Law Consultency Agency!" heading, fields: Name, Phone, Practice Area (select), Email, Message textarea, Submit button.
6. **Recent Work (Services)** — Tabbed gallery with 3 tabs (Accident Law, Health Law, Insurance Law), 2-column image cards with captions below.
7. **CTA Banner** — Full-width dark bg, "Are you Searching For a First-Class Consultant?" + "Contact Now" button.
8. **Team** — 3-column grid of team members with image, name, role.
9. **Testimonial** — Full-width background image, carousel with quote marks SVG, testimonial text, founder image + name + role.
10. **Blog** — 2-column blog cards with image, date overlay, title, excerpt, "Read More" link.
11. **Footer** — Dark bg, 4-column: logo + phone/email, Our Support links, Quick Links, Newsletter signup form. Bottom bar: copyright + social icons (Twitter, Facebook, Globe, Instagram).

## Gherkin Requirements

### Background: Lexcounsel law firm template loads correctly

### Scenario: Header renders with navigation and phone CTA
- Given a user visits the page
- Then the header displays with a logo
- And the navigation menu shows Home, About, Services, Cases, Blog, Contact
- And a phone number button is visible in the header

### Scenario: Hero section displays with CTA
- Given a user views the hero section
- Then the section shows a "Committed to success" label
- And a heading "Dont Feel Helpless We Fight for Justice" is displayed
- And a paragraph description is visible
- And a "Learn About Us" button is present

### Scenario: Practice areas section shows 3 practice types
- Given a user scrolls to the practice areas
- Then 3 practice area cards are visible
- And each card has an icon, title, description, and "Read More" link
- The practice types are Health Law, Insurance Law, and Vehicle Accident

### Scenario: About section shows split layout
- Given a user views the about section
- Then a heading "We are commited for better service" is displayed
- And descriptive paragraphs are shown
- And a "Learn About Us" button is present

### Scenario: Contact form renders all fields
- Given a user scrolls to the contact form
- Then the heading "World's Leading Law Consultency Agency!" is visible
- And a Name input field is present
- And a Phone input field is present
- And a Practice Area select dropdown is present
- And an Email input field is present
- And a Message textarea is present
- And a Submit Now button is present

### Scenario: Recent work section has tabbed navigation
- Given a user views the services section
- Then 3 tabs are visible: Accident Law, Health Law, Insurance Law
- And clicking a tab shows relevant service cards
- And each card has an image and caption

### Scenario: CTA banner displays call to action
- Given a user scrolls to the CTA banner
- Then "Are you Searching For a First-Class Consultant?" heading is displayed
- And a "Contact Now" button is present

### Scenario: Team section shows 3 members
- Given a user views the team section
- Then 3 team member cards are visible
- And each card shows a photo, name, and role
- The team includes Ethan Welch, Trevor Stanley, and Allen Guzman

### Scenario: Testimonial carousel works
- Given a user views the testimonial section
- Then a testimonial quote is displayed
- And the testimonial founder image and name are shown

### Scenario: Blog section shows 2 posts
- Given a user views the blog section
- Then 2 blog post cards are visible
- And each card has an image, date, title, excerpt, and "Read More" link

### Scenario: Footer has 4-column layout
- Given a user scrolls to the footer
- Then the footer shows logo, phone, and email
- And "Our Support" links column is present
- And "Quick Links" column is present
- And newsletter signup form with email input and Send button is present
- And a copyright line with social icons (Twitter, Facebook, Instagram) is visible
- And the copyright links to Component Dock

## Verification Checklist

- [ ] All 11 sections rendered in correct order
- [ ] Header sticky on scroll, nav links functional
- [ ] Hero slider cycles between slides (or single static hero)
- [ ] Practice area cards have icons, titles, descriptions, links
- [ ] About section has split image + text layout
- [ ] Contact form has all 5 fields + submit button
- [ ] Services section has working tab navigation
- [ ] CTA banner has dark bg + button
- [ ] Team cards show photo, name, role
- [ ] Testimonial displays quote, name, role
- [ ] Blog cards show image, date, title, excerpt, link
- [ ] Footer has 4 columns, newsletter form, social icons
- [ ] Footer copyright links to componentdock.com
- [ ] Design tokens match: #3957ff primary, square buttons, Josefin Sans headings
- [ ] No ColorLib references in app code (only in this spec)
- [ ] 100% test coverage
