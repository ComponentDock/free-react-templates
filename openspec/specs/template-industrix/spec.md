# Template: Industrix (Industrial / Construction)

## Purpose

Recreation of ColorLib's **Durg** industrial/construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/durg/
- **Preview (analyzed):** https://preview.colorlib.com/theme/durg/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/durg-free-template.jpg
- **Package:** `@free-react-templates/industrix`
- **Surge target:** `https://industrix.free.componentdock.com`

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand / primary | `#ff5e13` | Buttons, accent text, links, underlines, star ratings |
| Dark | `#020c26` | Header top bar, overlays, headings, footer bg |
| Background light | `#f5f5f5` | Gray sections (brand area) |
| Text body | `#5c5c5c` | Paragraphs |
| Text heading | `#020c26` | h1-h5 |
| Star rating | `#ffba00` | Review stars |
| Font family | `Rubik, sans-serif` | Global body + headings |
| Button style | `.boxed-btn`: padding 13px 32px, no radius, transparent on hover | Primary CTA |
| Button style | `.boxed-btn2`: padding 22px 50px, larger CTA | Secondary CTA |
| Overlay | `rgba(2,12,38,0.851)` | Dark overlay on parallax sections |
| Link underline | `#ff5e13` with hover underline | Footer links, contact links |

## Section Structure (order from preview DOM)

1. **Header Top Bar** — black bg (#020c26), phone/email contact + social icons (Mon-Fri hours, social links)
2. **Sticky Navbar** — white bg, logo image, main nav (Home, About, Services, Projects, Blog [dropdown], Pages [dropdown], Contact), search icon, "Get a quote" CTA button
3. **Hero Slider** — 3-slide carousel, each with parallax bg image, dark overlay, white content card: subheading (orange text), heading "We provide your Industrial solution", two buttons: "Our Services" + "Get a quote"
4. **Brand Logos** — gray bg (#f5f5f5), carousel of 7 partner/client logo images
5. **Services** — "We provide all of your" heading, 3 service cards: Industrial Construction, Mechanical Engineering, Bridge Construction. Each: image, title, paragraph, "Learn More" link
6. **Projects** — parallax bg with dark overlay, white text heading "Take a look around", project carousel: Research and Development Center, Project of Technological Park. Each: image, category span, title
7. **About** — 2-column: left = about image with play video icon overlay; right = "About Company" span + "Deliver innovative Industrial solution" heading + paragraph + "Learn More" button. Below: review carousel with quote icon, 5-star rating, review text, author avatar + name, and "350+" positive review stat
8. **Address** — black bg, 3-column: Our Location (address + "Get Direction"), Opening Hours (Mon-Fri 9-19, Sat-Sun Closed), Drop a Message (email + phone + "Mail Us")
9. **Footer** — logo image, description, social links (Facebook, Twitter, LinkedIn), quick links, services list, newsletter subscribe form, copyright

## Gherkin Requirements

### Feature: Header

Scenario: Top bar displays contact info
  Given the user is on any page
  Then a dark top bar shows phone number and email
  And social media links are visible

Scenario: Sticky navbar with logo and nav
  Given the user is on any page
  Then the logo image is visible in the navbar
  And navigation links "Home", "About", "Services", "Projects", "Blog", "Contact" are visible
  And a "Get a quote" button is displayed

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls down
  Then the navbar sticks to the top of the viewport
  And a subtle box shadow appears

Scenario: Mobile hamburger menu
  Given the viewport is mobile width (< 768px)
  Then a hamburger menu icon is visible
  And clicking it opens a slide-in mobile menu

### Feature: Hero Slider

Scenario: Hero slider displays
  Given the user lands on the page
  Then a full-height hero slider with parallax backgrounds is shown
  And each slide has a white content card with heading and buttons
  And the heading reads "We provide your Industrial solution"
  And two buttons appear: "Our Services" and "Get a quote"

Scenario: Hero auto-slides
  Given the hero slider is loaded
  Then slides advance automatically at regular intervals
  And dot navigation is visible on the right side

### Feature: Brand Logos

Scenario: Partner logos display
  Given the user scrolls past the hero
  Then a row of partner/client logos is shown on a gray background
  And 7 logo images are visible

### Feature: Services

Scenario: Three service cards display
  Given the user scrolls to the services section
  Then "We provide all of your" heading is shown
  And three service cards appear: "Industrial construction", "Mechanical engineering", "Bridge construction"
  And each has an image, title, paragraph, and "Learn More" link

### Feature: Projects

Scenario: Project showcase displays
  Given the user scrolls to the projects section
  Then a parallax background with dark overlay is shown
  And "Take a look around" heading is displayed in white
  And a project carousel shows: "Research and development center" and "Project of technological park"
  And each project has an image, category label, and title

### Feature: About

Scenario: About section displays
  Given the user scrolls to the about section
  Then "About Company" label and "Deliver innovative Industrial solution" heading are shown
  And a video play button overlay is on the about image
  And a "Learn More" button is present

Scenario: Review carousel displays
  Given the about section is visible
  Then a review carousel shows quote icon, 5-star rating, review text, and author info
  And a "350+ Positive review" stat is displayed

### Feature: Address

Scenario: Address section displays
  Given the user scrolls to the address area
  Then a dark background with 3 columns is shown
  And "Our Location" with address and "Get Direction" link is visible
  And "Opening hour" with Mon-Fri times is shown
  And "Drop a Message" with email and phone is displayed

### Feature: Footer

Scenario: Footer layout
  Given the user scrolls to the footer
  Then logo, description, and social links (Facebook, Twitter, LinkedIn) are shown
  And quick links, services list, and newsletter subscribe form are displayed
  And a copyright line is at the bottom

Scenario: Footer links to Component Dock
  Given the footer is visible
  Then a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification Checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#ff5e13` applied to buttons, accents, links
- [ ] Font Rubik applied globally
- [ ] Dark sections use `#020c26`
- [ ] Hero slider with 3 slides, white content cards, parallax bg
- [ ] Brand logos row with 7 images
- [ ] Services section with 3 cards
- [ ] Projects section with parallax bg and carousel
- [ ] About section with video overlay and review carousel
- [ ] Address section with 3-column dark layout
- [ ] Footer with logo, social, newsletter, copyright
- [ ] Sticky navbar on scroll
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage
