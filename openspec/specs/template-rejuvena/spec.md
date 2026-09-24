# Template: Rejuvena (Medical / Aesthetic)

## Purpose

Rejuvena is a single-page medical aesthetics landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Aesthetic" free template (source:
https://colorlib.com/wp/template/aesthetic/, preview:
https://preview.colorlib.com/theme/aesthetic/), built under a DIFFERENT name
(**Rejuvena**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 medical aesthetics template using Poppins Google
Font and Font Awesome 7 + Flaticon icons. It has a clean, professional medical
aesthetic with a teal (`#13a2b7`) primary accent on a white/light background.
The page features a sticky navbar with logo and "Appointment" CTA button, a
full-width hero with background image and heading, a consultation section with
a booking form alongside welcome text and a video thumbnail, a "Choose Us"
feature grid, a services section on a dark background image, a team section
with circular doctor photos, an image gallery with hover effects, a latest
news/blog section, and a dark footer with newsletter subscribe and contact
info.

## Design Tokens

| Token            | Value                                     | Source                                      |
| ---------------- | ----------------------------------------- | ------------------------------------------- |
| Brand primary    | `#13a2b7` (teal)                          | Buttons, active states, links, hero span    |
| Brand hover      | `#0e7989` (darker teal)                   | Button hover, header CTA hover              |
| Text primary     | `#111111`                                 | Headings, hero h2, service titles           |
| Text body        | `#444444` / `#666666`                    | Body paragraphs, input placeholders         |
| Text muted       | `#595959`                                 | Blog meta, secondary text                   |
| Background light | `#ffffff`                                 | Page default, service cards, consultation   |
| Background dark  | `#121c1d`                                 | Footer                                      |
| Background off   | `#f2f7f8`                                 | Light section backgrounds (spad)            |
| Border subtle    | `#f2f2f2`                                 | Input borders, dividers                     |
| Heading font     | `"Poppins", sans-serif`                   | All headings, hero text, nav                |
| Body font        | `"Poppins", sans-serif`                   | Body text, paragraphs                       |
| Icon set         | Font Awesome 7 (solid/brands) + Flaticon  | Nav, social, service icons                  |
| Button radius    | `5px`                                     | `.primary-btn`, inputs, form elements       |
| Button bg        | `#13a2b7` (teal)                          | Primary buttons, service item hover         |
| Button text      | `#111111` (default) / `#ffffff` (on bg)   | Primary button default vs filled            |
| Card radius      | `5px`                                     | Service cards, form inputs                  |
| Team photo       | `270px` circle, `10px solid #fff` border  | `.team__item img`                           |
| Gallery item     | `338px` height (normal), `696px` (large)  | `.gc__item`, `.gc__item__large`             |
| Gallery overlay  | `rgba(19, 161, 183, 0.5)`                | Hover overlay on gallery items              |
| Newsletter input | `50px` height, `50px` border-radius       | Footer newsletter form                      |
| Social icon      | `50px` circle, `rgba(255,255,255,0.1)` bg | Footer social icons                         |
| Section padding  | `100px 0` (spad)                          | `.spad` utility class                       |
| Hero height      | Full-width with spad padding              | `.hero.spad.set-bg`                         |

## Visual Description (from TEMPLATES.md screenshot + live preview)

Clean, professional medical aesthetics aesthetic. White backgrounds dominate
with teal (`#13a2b7`) accent on buttons, active states, hero subheadings,
service icons, and team hover borders. The hero section has a full-width
background image with a left-aligned text block containing an uppercase teal
subheading and a large dark heading, plus a teal "Contact us" button. Below
the hero, the consultation section splits into a left booking form (white card
with shadow, 4 fields + submit button) and right welcome text with a video
thumbnail overlay. The "Choose Us" section shows 4 centered feature items with
icons in a row. The services section uses a dark background image with white
text heading and 4 service cards (2x2 grid) that turn teal on hover. The team
section shows 3 doctors in circular photos with social icon links. The gallery
is a 4-column masonry-like grid of 7 images (one tall) with teal hover overlay
and magnifying glass icon. The latest news section has 3 blog cards with title,
author, and date. The footer has a dark teal-green (`#121c1d`) background with
a logo + newsletter form + social icons row on top, then 4 columns (Company
links, Quick links, Contact address, Google Maps embed), and a copyright bar
at the bottom.

## Requirements (Gherkin)

### Header / Navigation

```gherkin
Scenario: Sticky header with logo, nav links, and appointment button
  Given the user loads the Rejuvena page
  Then a header is visible at the top with the logo "Aesthetic" on the left
  And navigation links include Home, Pages, Doctor, Services, Blog, Contact
  And a teal (#13a2b7) "Appointment" button is on the right
  And a dark-mode toggle (moon icon) is visible
  And the header becomes sticky on scroll
  And a hamburger menu icon appears on mobile viewports
```

### Hero Section

```gherkin
Scenario: Full-width hero with background image and CTA
  Given the user loads the Rejuvena page
  Then a full-width hero section is displayed with a background image
  And an uppercase teal (#13a2b7) subheading reads "Eiusmod tempor incididunt"
  And a large dark (#111111) heading reads "Take the world's best quality Treatment"
  And a teal (#13a2b7) "Contact us" button is displayed below the heading
  And the hero text is left-aligned on the first 50% width
```

### Consultation Section

```gherkin
Scenario: Consultation form alongside welcome text and video
  Given the user scrolls to the Consultation section
  Then a left column (col-lg-4) shows a white booking form card with shadow
  And the form has a section title "REQUEST FOR YOUR" / "Consultation"
  And the form includes fields: Name, Email, Date (with calendar icon), Type of service (dropdown)
  And a "Book appointment" submit button is at the bottom
  And the right column (col-lg-8) shows a welcome text area with heading "Find Best Doctors With AESTHETIC"
  And a video thumbnail with a teal play button (50px circle) is shown
  And the text describes 30 years of experience in Cosmetic Surgery
```

### Choose Us Section

```gherkin
Scenario: Four feature items on white background
  Given the user scrolls to the Choose Us section
  Then a centered section title shows "Why choose us?" / "Offer for you"
  And 4 feature items are displayed in a row
  And each item has an icon image, a title, and a short description
  And the items are: Advanced equipment, Qualified doctors, Certified services, Emergency care
  And the section has 100px top/bottom padding (spad)
```

### Services Section

```gherkin
Scenario: Services grid on dark background image
  Given the user scrolls to the Services section
  Then a section with a dark background image is displayed
  And the section title shows "Our services" / "Offer for you" in white text
  And a teal "Contact us" button is aligned right
  And 4 service cards are shown in a 2x2 grid
  And each card has a left-floating teal icon, a title, and a description
  And the cards are: Body procedures, Facial Procedures, Breast procedures, Skin care & Beauty
  And the cards have white background with 5px border-radius
  And on hover, the card background turns teal (#13a2b7) with white text
```

### Team Section

```gherkin
Scenario: Three doctor cards with circular photos
  Given the user scrolls to the Team section
  Then a centered section title shows "Our Team" / "Our Expert Doctors"
  And 3 team member cards are displayed in a row
  And each card has a circular photo (270px, white border with shadow)
  And below the photo: name, specialty "Plastic surgeon", and 4 social icon links
  And the doctors are: Caroline Grant, Dr. Maria Angel, Nathan Mullins
  And on hover, the photo border turns teal (#13a2b7)
```

### Gallery Section

```gherkin
Scenario: Masonry-style image gallery with hover overlay
  Given the user scrolls to the Gallery section
  Then a 4-column image gallery is displayed
  And 7 gallery items are shown (6 regular at 338px height, 1 large at 696px)
  And on hover, a teal overlay (rgba(19, 161, 183, 0.5)) appears
  And a magnifying glass icon becomes visible on hover
  And clicking the icon opens a lightbox
```

### Latest News Section

```gherkin
Scenario: Three blog entry cards
  Given the user scrolls to the Latest News section
  Then a section title shows "Our News" / "Skin care tips"
  And a "View all news" teal button is aligned right
  And 3 blog entry cards are shown in a row
  And each card has a title, excerpt, author name with small avatar, and date
  And the cards have white background with subtle box-shadow
  And the card titles are: "Here's how you can get a natural glow this party season",
      "Get better skin with these top 10 tips for skin care",
      "8 Ways to Save Your Skin if You Exercise Outside This Winter"
```

### Footer

```gherkin
Scenario: Dark footer with newsletter, link columns, and map
  Given the user scrolls to the footer
  Then the footer has a dark (#121c1d) background
  And the footer top row shows: logo on left, newsletter email input + Subscribe button in center, 4 social icons on right
  And the newsletter input has a teal (#13a2b7) border and 50px rounded shape
  And below the top row, 4 columns are shown:
    - Company: About Us, Departments, Find a Doctor, FAQ, News
    - Quick links: Facial Fillers, Breast Surgery, Body Lifts, Face & Neck, Fat Reduction
    - Contact Us: address, phone, email
    - Google Maps embed
  And a copyright bar at the bottom with "All Rights Reserved", "Terms & Use", "Privacy Policy"
  And the footer links to https://www.componentdock.com/
```

### Appointment Modal

```gherkin
Scenario: Appointment booking modal
  Given the user clicks the "Appointment" button in the header
  Then a modal dialog appears with title "Book an Appointment"
  And the modal contains a form with fields: Name, Email, Date, Phone, Service dropdown, Doctor dropdown, Notes
  And the modal has a checkbox for privacy policy consent
  And a "SUBMIT" button at the bottom
  And the modal can be closed with the X button or clicking outside
```

## Verification Checklist

- [ ] Sticky header with logo, nav links (6), appointment button, dark-mode toggle
- [ ] Hero section with background image, teal subheading, dark heading, CTA button
- [ ] Consultation section: booking form (4 fields + submit) alongside welcome text + video thumbnail
- [ ] Choose Us section: 4 feature items in a row with icons
- [ ] Services section: dark bg image, 4 service cards (2x2), teal hover effect
- [ ] Team section: 3 circular doctor photos with social links, teal hover border
- [ ] Gallery: 7-item masonry grid (4 cols, 1 tall), teal overlay + lightbox
- [ ] Latest News: 3 blog cards with title, author, date
- [ ] Footer: dark bg, newsletter form, social icons, 4 link columns, Google Maps, copyright
- [ ] Appointment modal with form fields
- [ ] Responsive: hamburger menu, stacked columns on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains rejuvena.free.componentdock.com
- [ ] All tests pass with 100% coverage
