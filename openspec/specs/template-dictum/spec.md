# Template: Dictum (Business Consulting)

## Purpose

Recreation of the ColorLib "Consula" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site.

- **Source slug:** `consula`
- **ColorLib page:** https://colorlib.com/wp/template/consula/
- **Live preview:** https://preview.colorlib.com/theme/consula/
- **New name:** `dictum`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Deploy target:** https://dictum.free.componentdock.com

## Design Tokens (extracted from preview CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | CSS headings, form controls |
| Primary accent | `#46ddb0` (teal/green) | `.btn.btn-primary`, `.section-sub-title`, `.form-control:focus` |
| Primary hover (button) | `#fff` bg, `#46ddb0` text | `.btn.btn-primary:hover` |
| Dark hover | `#666666` | `.btn.btn-primary.btn-black--hover:hover` |
| Body color | `gray` | `body` |
| Body weight | 400, font-size 1rem, line-height 1.7 | `body` |
| Selection | `#000` bg, `#fff` text | `::selection` |
| Button border-radius | 30px | `.btn` |
| Button padding | 10px 30px | `.btn` |
| Button font-size | 16px | `.btn` |
| Form height | 43px, border-radius 30px | `.form-control` |
| Footer bg | `#333333` | `.site-footer` |
| Footer padding | 4em 0 | `.site-footer` |
| Section sub-title | font-size 13px, color `#46ddb0` | `.section-sub-title` |
| Text-muted | `#737373` | `.text-muted` |
| Navbar | White bg, sticky header, fixed position | `.site-navbar` |
| Top bar | `bg-light`, py-3 | `.top-bar` |
| Hero | Background image with overlay (`.overlay:before`) | `.site-blocks-cover` |
| Testimonial | max-width 800px, centered, blockquote 1.5rem italic, circular avatar (border-radius 50%) | `.testimonial` |
| Brand color in headings | `#46ddb0` for dot in logo, nav active state | `.text-primary` |

## Visual Design Notes (from screenshot + preview DOM)

- **Top Bar:** Light gray bg, social icons (Facebook, Twitter, Instagram, LinkedIn) on left, phone + email on right. Social icons and contact use teal accent.
- **Navbar:** White bg, sticky, logo "Consula." (bold black + teal dot) on left, nav links on right (Home, About Us, Team, Services, Testimonials, Blog, Contact). Active link in teal.
- **Hero:** Full-width background image (casual office/cafe setting with people), dark overlay, large white heading "We Are The Best Consulting Agency", subtext, "Get Started" teal CTA button.
- **About Us:** Split layout — left has image with "50 years of experience" badge overlay, right has "About Us" sub-title + "Welcome To Consula" heading + description text.
- **Team:** 3-column grid — each member has circular avatar, name, role/title.
- **How It Works:** 3-column layout — Innovate, Create, Scale — each with heading and description.
- **Services:** 6 service cards in 3-column grid — Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, Financial Management. Each has icon, title, description.
- **Testimonials:** Centered carousel, blockquote with avatar, italic text, author name.
- **About/Specialties:** 2 items — "Web & Mobile Specialties" and "Intuitive Thinkers" with descriptions.
- **Blog:** 3-column with post titles/dates.
- **Contact:** Left sidebar "Our Services" list, right has contact form (first name, last name, email, subject, message + submit button).
- **CTA Banner:** Full-width teal (#46ddb0) bg, "Let's Get Started" heading in white.
- **Footer:** Dark (#333) bg, 4 columns: About Us, Quick Links, Follow Us (social icons), Subscribe Newsletter (email input). Copyright line.

## Gherkin Requirements

### Feature: Top Bar

Scenario: Top bar with social links and contact info
  Given the user views the top bar
  Then social media icons (Facebook, Twitter, Instagram, LinkedIn) are on the left
  And phone number and email are on the right
  And the top bar has a light gray background

### Feature: Navigation Bar

Scenario: Sticky navbar with logo and navigation
  Given the user is on any section
  When they look at the top
  Then a white sticky navbar is visible
  And a logo "Dictum" (bold black + teal dot) is on the left
  And nav links are: Home, About Us, Team, Services, Testimonials, Blog, Contact
  And the active nav link uses teal accent color

Scenario: Clicking a nav link scrolls to the section
  Given the user clicks "Team" in the navigation
  Then the page scrolls to the team section

### Feature: Hero Section

Scenario: Hero displays heading, subtext, and CTA
  Given the user views the hero
  Then a background image fills the hero area
  And a dark overlay covers the background
  And a large white heading "We Are The Best Consulting Agency" is shown
  And a descriptive paragraph is present
  And a "Get Started" teal button (border-radius 30px) is visible

### Feature: About Us Section

Scenario: Split layout with experience badge and text
  Given the user scrolls to the about section
  Then an image is on the left with a "50 years of experience" badge overlay
  And a heading "Welcome To Dictum" is on the right
  And a descriptive paragraph is below the heading
  And the section sub-title "About Us" is in teal (#46ddb0)

### Feature: Team Section

Scenario: Three team members in a grid
  Given the user scrolls to the team section
  Then three team member cards are displayed in a 3-column grid
  And each card has a circular avatar, name, and role
  And the section sub-title "Team" is in teal

### Feature: How It Works Section

Scenario: Three process steps displayed
  Given the user scrolls to the how-it-works section
  Then three steps are shown: Innovate, Create, Scale
  And each step has a heading and description paragraph

### Feature: Services Section

Scenario: Six service cards in a grid
  Given the user scrolls to the services section
  Then six service cards are displayed in a 3-column grid
  And each card has an icon, title, and description
  And the cards are: Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, Financial Management

### Feature: Testimonials Section

Scenario: Testimonial carousel with quotes
  Given the user scrolls to the testimonials section
  Then a carousel of testimonials is shown
  And each testimonial has a circular avatar, quote text, and author
  And testimonials are centered with max-width 800px

### Feature: Blog Section

Scenario: Three blog post previews
  Given the user scrolls to the blog section
  Then three blog post cards are shown
  And each has a title and brief description

### Feature: Contact Section

Scenario: Contact form with sidebar
  Given the user scrolls to the contact section
  Then a "Our Services" sidebar is on the left
  And a contact form is on the right
  And the form has fields: First Name, Last Name, Email, Subject, Message
  And a submit button is below the form

### Feature: CTA Banner

Scenario: Full-width call-to-action banner
  Given the user scrolls to the CTA banner
  Then a full-width teal (#46ddb0) background is shown
  And a white heading "Let's Get Started" is centered

### Feature: Footer

Scenario: Four-column footer with newsletter
  Given the user scrolls to the footer
  Then a dark (#333) background is visible
  And four columns are shown: About Us, Quick Links, Follow Us, Subscribe Newsletter
  And social icons are in the Follow Us column
  And the newsletter has an email input and subscribe button
  And a copyright line with "Made with ❤ by Component Dock" is at the bottom
  And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] All sections present in correct order: Top Bar, Navbar, Hero, About Us, Team, How It Works, Services, Testimonials, Blog, Contact, CTA Banner, Footer
- [ ] Font family is Roboto (loaded via Google Fonts in index.html)
- [ ] Primary accent #46ddb0 used for buttons, section sub-titles, nav active, form focus
- [ ] Button border-radius 30px, correct padding
- [ ] Hero: background image with dark overlay, white heading, teal CTA
- [ ] Top bar: light gray bg, social icons, contact info
- [ ] Navbar: white bg, sticky, logo with teal dot
- [ ] About: split layout with experience badge
- [ ] Team: 3 cards with circular avatars
- [ ] How It Works: 3 steps (Innovate, Create, Scale)
- [ ] Services: 6 cards in 3-col grid
- [ ] Testimonials: centered carousel with avatars
- [ ] Blog: 3 post previews
- [ ] Contact: form with 5 fields + sidebar
- [ ] CTA Banner: full-width teal bg, white heading
- [ ] Footer: 4 columns, dark bg, social icons, newsletter
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME file: dictum.free.componentdock.com
- [ ] Placeholder images use picsum.photos
- [ ] Icons from lucide-react
