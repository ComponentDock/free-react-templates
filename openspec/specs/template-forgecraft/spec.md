# Template: ForgeCraft (Creative Agency Onepage)

## Purpose

Recreation of ColorLib's **Create** template — a creative agency / business
onepage website template.

- **Source slug:** `create`
- **Preview URL:** https://preview.colorlib.com/theme/create/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/create-free-template.jpg
- **New name:** `forgecraft`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest

## Design Tokens

Extracted from the live preview's `css/style.css`:

| Token                | Value        | Notes                                    |
| -------------------- | ------------ | ---------------------------------------- |
| Font family          | Quicksand    | Google Fonts 300–900; headings + body     |
| Brand / primary      | `#32dbc6`    | Teal-cyan; buttons, links, active states |
| Text color           | `#4d4d4d`    | Body text                                |
| Heading color        | `#000000`    | Section headings                         |
| Button radius        | `30px`       | Pill-shaped buttons                      |
| Button padding       | `15px 30px`  | `.btn.btn-md`                            |
| Button text          | uppercase    | `letter-spacing: .1em; font-size: 12px`  |
| Top bar bg           | `#000000`    | Dark top bar                             |
| Navbar bg            | `#ffffff`    | White sticky navbar                      |
| Footer bg            | `#333333`    | Dark footer                              |
| Footer text          | `#737373`    | Muted footer paragraphs                  |
| Footer links         | `#999999`    | Hover → white                            |
| Dark section bg      | `#000000`    | About/strategy dark panel                |
| Light section bg     | `#f8f9fa`    | Contact section bg                       |
| Social circle bg     | `#32dbc6`    | Team member social icon circles          |
| Form border focus    | `#32dbc6`    | Input focus ring color                   |

## Section Structure (in order)

1. **Top Bar** — dark bg, phone + email left, social icons right
2. **Navbar** — white bg, logo "ForgeCraft.", nav links (Home, Work, Services, About, Blog, Contact), sticky
3. **Hero** — full-width background image with overlay, animated typed text ("We Love To Build Web Apps / WordPress / Mobile Apps"), "Watch Video" CTA button (pill, primary)
4. **Features (numbered)** — 3-column grid, numbered items (01 Innovate, 02 Create, 03 Scale) with checkmark lists
5. **Our Works** — 6-item gallery grid (3×2) with hover overlay (title + category)
6. **About Dark Panel** — full-width black bg, image left + 4 feature blocks (Strategy, Web Development, Art Direction, Copywriting) with icons
7. **Testimonials** — centered heading, carousel of 4 testimonials (blockquote + photo + name)
8. **Our Services** — 6-item icon grid (Web Design, eCommerce, Web Applications, Branding, Copy Writing, Mobile Applications) with "Learn More" links
9. **About Us** — image right + text left, 2 specialty blocks (Web & Mobile Specialties, Intuitive Thinkers) with secondary-colored icons
10. **Our Team** — 3-column grid, circular photos, names, positions, descriptions, social icon circles
11. **Blog** — 3-column card grid with image, title, meta (author, date, category), excerpt, "Continue Reading" link
12. **Contact** — form (first name, last name, email, subject, message, send) + address/phone/email sidebar cards, light bg
13. **CTA Banner** — primary bg, "Let's Get Started" heading, full-width link
14. **Footer** — dark bg, about text + features list + social icons + newsletter form, copyright line

## Gherkin Requirements

### Top Bar
- GIVEN the page loads, THEN a dark top bar displays phone number and email on the left and social icons (Facebook, Twitter, Instagram, LinkedIn) on the right.

### Navbar
- GIVEN the page loads, THEN a white sticky navbar shows the logo "ForgeCraft." with a teal dot accent.
- GIVEN the user scrolls past the hero, THEN the navbar remains fixed at the top.
- GIVEN the user clicks a nav link, THEN the page scrolls smoothly to the corresponding section.

### Hero
- GIVEN the page loads, THEN a full-width hero section shows a background image with dark overlay.
- GIVEN the hero loads, THEN animated typed text cycles through ["Web Apps", "WordPress", "Mobile Apps"] after "We Love To Build ".
- GIVEN the hero loads, THEN a "Watch Video" pill button is visible below the typed text.

### Features (Numbered)
- GIVEN the features section is visible, THEN 3 numbered cards (01 Innovate, 02 Create, 03 Scale) are displayed in a 3-column grid.
- GIVEN a features card, THEN it contains a title, description paragraph, and a checkmark list of 3 items.

### Our Works
- GIVEN the works section is visible, THEN 6 portfolio items are shown in a 3-column grid.
- GIVEN the user hovers a portfolio item, THEN an overlay shows the item title and category.

### About Dark Panel
- GIVEN the about dark panel is visible, THEN a black full-width section shows an image on the left and 4 feature blocks (Strategy, Web Development, Art Direction, Copywriting) with icons on the right.
- GIVEN a feature block, THEN it contains an icon, title, description, and "Read More" link.

### Testimonials
- GIVEN the testimonials section is visible, THEN a centered heading "Testimonials" is shown.
- GIVEN the testimonials carousel loads, THEN 4 testimonials cycle with blockquote text, circular photo, and name.

### Our Services
- GIVEN the services section is visible, THEN 6 service cards are shown in a 3-column grid.
- GIVEN a service card, THEN it contains a teal icon, title, description, and "Learn More" link.

### About Us
- GIVEN the about us section is visible, THEN a heading "About Us" is displayed with a description paragraph.
- GIVEN the about us section loads, THEN an image appears on the right and 2 specialty blocks (Web & Mobile Specialties, Intuitive Thinkers) with secondary-colored icons appear on the left.

### Our Team
- GIVEN the team section is visible, THEN 3 team members are shown in a 3-column grid.
- GIVEN a team member card, THEN it contains a circular photo, name, position, description, and 4 social icon circles (Facebook, Twitter, LinkedIn, Instagram).

### Blog
- GIVEN the blog section is visible, THEN 3 blog cards are shown in a 3-column grid.
- GIVEN a blog card, THEN it contains an image, title, meta line (author, date, category), excerpt, and "Continue Reading" link.

### Contact
- GIVEN the contact section is visible, THEN a contact form and address info are displayed side by side.
- GIVEN the contact form, THEN it contains fields for first name, last name, email, subject, message, and a "Send Message" pill button.
- GIVEN the address sidebar, THEN it shows address, phone, and email info in white cards.

### CTA Banner
- GIVEN the CTA banner is visible, THEN a teal full-width bar shows "Let's Get Started" heading.
- GIVEN the user clicks the CTA banner, THEN it links to the contact section.

### Footer
- GIVEN the footer is visible, THEN a dark section shows about text, features links, social icons, and a newsletter subscription form.
- GIVEN the footer loads, THEN a copyright line with "Component Dock" link is displayed at the bottom.

## Verification Checklist

- [ ] Font: Quicksand loaded from Google Fonts
- [ ] Brand color: #32dbc6 used for buttons, links, active states, checkmarks
- [ ] Buttons: pill-shaped (border-radius 30px), uppercase, letter-spacing .1em
- [ ] Hero: background image with overlay, typed animation cycling 3 strings
- [ ] Navbar: sticky, white bg, logo with teal dot
- [ ] Sections in correct order: Top Bar → Navbar → Hero → Features → Works → About Dark → Testimonials → Services → About Us → Team → Blog → Contact → CTA → Footer
- [ ] Footer links to https://www.componentdock.com/ as "Component Dock"
- [ ] No ColorLib references in app code
- [ ] Images use picsum.photos placeholder URLs
- [ ] All sections match original layout (3-col grids, split layouts, dark panels)
