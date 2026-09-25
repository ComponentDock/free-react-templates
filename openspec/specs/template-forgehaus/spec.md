# Template: Forgehaus (Creative Agency)

## Purpose

Recreation of ColorLib's **Create** template.
- Source slug: `create`
- Preview URL: https://preview.colorlib.com/theme/create/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/create-free-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- Category: Creative Agency / Studio one-page
- Style: Clean, modern agency site with dark accents, teal brand color, Quicksand font, pill-shaped buttons, and a single-page scroll layout with typed text hero animation.

## Section Order (from live preview DOM)

1. Top bar — dark (#000) background, phone + email on left, social icons on right
2. Navbar — white sticky header, "Forgehaus." logo with teal dot accent
3. Hero — full-width background image with dark overlay, animated typed text ("We Love To Build [Web Apps|WordPress|Mobile Apps]"), "Watch Video" pill button
4. Innovate / Create / Scale — 3-column feature cards with number-behind (01. 02. 03.), title in teal, checkmark bullet lists
5. Our Works — portfolio gallery, 3-column grid, 6 items with hover overlay showing title + category
6. About (dark section) — full-width dark (#000) background, image on left, 2-column feature items (Strategy, Web Dev, Art Direction, Copywriting) with icons
7. Testimonials — carousel (owl-style), centered quote + person photo + name
8. Our Services — 3-column, 6 items with icon + title + description + "Learn More" link
9. About Us — two-column layout, text on left with heading + description + 2 specialty items, image on right
10. Our Team — 3 team members, circular photos, name + role + bio + social icons
11. Blog — 3 posts in 3-column grid, image + title + meta (author, date, category) + excerpt + "Continue Reading"
12. Contact Us — light bg (#f4f5f9), form (first/last name, email, subject, message, send button) + address/phone/email card
13. CTA Banner — full-width teal (#32dbc6) background, "Let's Get Started" heading
14. Footer — dark bg (#333333), about text, features links, social icons, newsletter subscribe form, copyright line

## Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand/Primary | `#32dbc6` | Teal/mint — headings, buttons, links, CTA banner bg, accent dots |
| Dark BG | `#000` | Top bar, about-dark section |
| Dark Gray | `#333333` | Footer background |
| Body Text | `#4d4d4d` | Main paragraph text |
| Secondary Text | `#737373` | Muted text |
| Light Muted | `#999999` | Secondary muted |
| White BG | `#fff` | Navbar, cards, form background |
| Light BG | `#f4f5f9` | Contact section, hover states |
| Accent Green | `#8bc34a` | Secondary accent (sparingly used) |
| Button text | `#fff` | Primary button text |

### Typography
- Font family: `"Quicksand", sans-serif` (Google Fonts, weights 300–900)
- Headings: Quicksand bold (700), black (#000)
- Body: Quicksand regular (400), color #4d4d4d

### Button / Interactive
- Button border-radius: `30px` (pill shape)
- Button padding: standard Bootstrap md
- Button background: brand teal `#32dbc6` (as Bootstrap primary)
- Button text: white
- Links: brand teal, no underline

### Section Patterns
- Section padding: standard site-section (Bootstrap)
- Dark sections: full-width dark bg (#000 or #333333) with white text
- Light sections: white or #f4f5f9 bg
- Border-bottom on some sections for visual separation
- AOS fade animations on scroll

## Gherkin Requirements

### Top Bar
Scenario: Top bar shows contact info and social icons
  Given the user visits the homepage
  When the top bar renders
  Then a phone number and email are displayed
  And social media icons (Facebook, Twitter, Instagram, LinkedIn) are present
  And the top bar has a dark background (#000)

### Navbar
Scenario: Sticky navbar with logo and navigation links
  Given the user visits the homepage
  When the navbar renders
  Then the logo "Forgehaus." is displayed with a teal accent dot
  And navigation links include Home, Work, Services, About, Blog, Contact
  And the About link has a dropdown with "Specialties" and "Our Team"
  And the navbar is sticky and white

Scenario: Mobile hamburger menu
  Given the user is on a mobile viewport
  When the user taps the hamburger icon
  Then the mobile menu opens with all navigation links

### Hero
Scenario: Hero with animated text and CTA
  Given the user visits the homepage
  When the hero section loads
  Then a full-width background image with dark overlay is displayed
  And animated typed text cycles through agency services
  And a "Watch Video" button is visible

### Features (Innovate/Create/Scale)
Scenario: Three-column feature cards
  Given the user scrolls to the features section
  When the section renders
  Then three feature cards are displayed in a row
  And each card has a number-behind element (01, 02, 03)
  And each card has a teal title and bullet list

### Portfolio (Our Works)
Scenario: Portfolio gallery grid
  Given the user scrolls to the works section
  When the section renders
  Then six portfolio items are displayed in a 3-column grid
  And each item shows an image with hover overlay
  And the overlay shows a title and category

### About Dark Section
Scenario: Dark about section with feature items
  Given the user scrolls to the about section
  When the section renders
  Then a full-width dark background is displayed
  And an image appears on the left
  And four feature items with icons appear (Strategy, Web Development, Art Direction, Copywriting)
  And each item has a "Read More" link

### Testimonials
Scenario: Testimonial carousel
  Given the user scrolls to the testimonials section
  When the section renders
  Then a carousel of testimonials is displayed
  And each testimonial has a quote, person photo, and name

### Services
Scenario: Services grid
  Given the user scrolls to the services section
  When the section renders
  Then six service items are displayed in a 3-column grid
  And each item has an icon, title, description, and "Learn More" link

### About Us
Scenario: About us section with specialties
  Given the user scrolls to the about-us section
  When the section renders
  Then a heading "About Us" and paragraph text appear
  And an image is shown on the right
  And two specialty items with icons are displayed (Web & Mobile Specialties, Intuitive Thinkers)

### Team
Scenario: Team members section
  Given the user scrolls to the team section
  When the section renders
  Then three team member cards are displayed
  And each card has a circular photo, name, role, bio, and social icons

### Blog
Scenario: Blog post previews
  Given the user scrolls to the blog section
  When the section renders
  Then three blog post cards are displayed in a 3-column grid
  And each card has an image, title, meta (author, date, category), excerpt, and "Continue Reading" link

### Contact
Scenario: Contact form and info
  Given the user scrolls to the contact section
  When the section renders
  Then a contact form with first name, last name, email, subject, message fields appears
  And a "Send Message" button is present
  And address, phone, and email info cards appear on the right
  And the section has a light background

### CTA Banner
Scenario: Call to action banner
  Given the user scrolls to the CTA section
  When the section renders
  Then a full-width teal (#32dbc6) banner is displayed
  And the text "Let's Get Started" is shown in white

### Footer
Scenario: Footer with links and newsletter
  Given the user visits the page
  When the footer renders
  Then a dark background (#333333) footer is displayed
  And it contains About Us text, Features links, Follow Us social icons, and a newsletter subscribe form
  And the copyright line includes a link to Component Dock (https://www.componentdock.com/)

## Verification Checklist

- [ ] Top bar: dark bg, phone/email, social icons
- [ ] Navbar: sticky white, "Forgehaus." logo with teal dot, dropdown on About
- [ ] Hero: background image, dark overlay, typed text animation, "Watch Video" button
- [ ] Features: 3-column, numbered (01-03), teal titles, bullet lists
- [ ] Portfolio: 3-col grid, 6 items, hover overlay with title+category
- [ ] About Dark: dark bg, image left, 4 icon features with "Read More"
- [ ] Testimonials: carousel with quotes, photos, names
- [ ] Services: 3-col, 6 items, icon+title+description+"Learn More"
- [ ] About Us: heading, text, image, 2 specialty items
- [ ] Team: 3 members, circular photos, bios, social icons
- [ ] Blog: 3 posts, image+title+meta+excerpt+"Continue Reading"
- [ ] Contact: form (5 fields + button) + info cards, light bg
- [ ] CTA: teal full-width banner, "Let's Get Started"
- [ ] Footer: dark bg, about/features/social/newsletter, Component Dock link
- [ ] Brand color #32dbc6 used consistently for accents
- [ ] Quicksand font loaded and applied
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] AOS scroll animations on sections
- [ ] Responsive layout works on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] npm run gate passes
