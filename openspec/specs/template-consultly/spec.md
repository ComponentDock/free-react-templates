# Template: Consultly (Business / Consulting Agency)

## Purpose

Recreation of the ColorLib "Consula" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page business template for a consulting agency.

- **Source:** ColorLib Consula — https://colorlib.com/wp/template/consula/
- **Live preview:** https://preview.colorlib.com/theme/consula/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/consula-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/consultly`
- **Deploy target:** `consultly.free.componentdock.com`
- **Footer:** Must link `https://www.componentdock.com/` branded as "Component Dock"

## Design tokens (extracted from preview CSS)

| Token              | Value                                           | Notes                                        |
| ------------------ | ----------------------------------------------- | -------------------------------------------- |
| Brand primary      | `#007bff` (Bootstrap blue)                      | Primary buttons, text accents, service icons |
| Accent green       | `#46ddb0` (mint/teal)                           | Accent highlights, link hover                |
| Dark bg            | `#25262a`                                       | Footer background                            |
| Dark secondary     | `#2b2b2b`                                       | Alternate dark surfaces                      |
| Body text          | `#737373`                                       | Paragraph text                               |
| Heading color      | `#25262a`                                       | All h1–h6                                    |
| Light bg           | `#f4f5f9`                                       | Section alternating backgrounds              |
| White bg           | `#fff`                                          | Default sections                             |
| Border gray        | `#dee2e6`                                       | Dividers, borders                            |
| Muted text         | `#999999`                                       | Secondary text                               |
| Font family        | `"Roboto", sans-serif`                          | Body + headings                              |
| Button radius      | 30px (rounded-pill)                             | Primary CTA buttons                          |
| Card border-radius | 0px                                             | No border-radius on cards                    |
| Section padding    | `site-section` (default Bootstrap-like spacing) |

## Page structure (section order, from DOM analysis)

1. **Navbar** — Fixed top, white bg, logo "Consula." left, nav links (Home, About Us, Team, Services, Testimonials, Blog, Contact), mobile hamburger
2. **Top Bar** — Phone (+1 234 5678 9101) and email (info@yourdomain.com) in dark strip above navbar
3. **Hero** — Full-screen bg image (hero_2.jpg), overlay, center-aligned: headline "We Are The Best Consulting Agency", paragraph, "Get Started" CTA button (rounded-pill, primary blue)
4. **About** — Split layout: left has "50 years of experience" stat callout + image, right has "About Us" subtitle + "Welcome To Consula" headline + paragraph + "Learn More" CTA
5. **How It Works** — 3-step horizontal: "Innovate", "Create", "Scale" — each with number, title, description, and bullet list items
6. **Team** — 3-column cards: "John Rooster" (Co-Founder, President), "Tom Sharp" (Co-Founder, COO), "Winston Hodson" (Marketing) — each with avatar, social icons, description
7. **Services** — 6-card grid on light bg: "Business Consulting", "Market Analysis", "User Monitoring", "Insurance Consulting", "Financial Investment", "Financial Management" — each with icon (icomoon), title, description, "Learn More" link
8. **Testimonials** — Carousel/slider: "People Says" subtitle + "Testimonials" headline, quotes with author name and avatar
9. **About (second)** — Split: image left (person), text right with stats and description
10. **Blog** — 3-column card grid: "Our Blog Posts" — each with image, date/author/category tags, title, excerpt, "Continue Reading..." link
11. **Contact** — Light bg, left: contact form (First Name, Last Name, Email, Subject, Message + Send button), right: address/phone/email info cards
12. **Footer** — Dark bg (#25262a): 3 columns (About Us text, Quick Links list, Follow Us social + Newsletter subscribe), copyright bar

## Gherkin requirements

### Feature: Top Bar

- Scenario: Top bar displays contact info
  - Given the page loads
  - Then a thin top bar is visible above the navbar
  - And it shows a phone number and email address

### Feature: Navbar

- Scenario: Navbar displays logo and navigation
  - Given the page loads
  - Then a fixed navbar is visible with logo "Consultly"
  - And navigation links include Home, About, Team, Services, Testimonials, Blog, Contact

- Scenario: Navbar has scroll effect
  - Given the page loads
  - When the user scrolls down
  - Then the navbar gains a box-shadow

### Feature: Hero Banner

- Scenario: Hero displays headline and CTA
  - Given the user is on the home section
  - Then a full-screen hero with background image and overlay is displayed
  - And the headline "We Are The Best Consulting Agency" is centered
  - And a "Get Started" rounded-pill CTA button is present

### Feature: About Section

- Scenario: About displays experience stat and description
  - Given the user scrolls to the about section
  - Then "50 years of experience" stat is displayed
  - And "Welcome To Consula" headline is visible
  - And a "Learn More" CTA is present

### Feature: How It Works Section

- Scenario: Three process steps display
  - Given the user scrolls to the how-it-works section
  - Then three steps are shown: "Innovate", "Create", "Scale"
  - And each step has a number, title, description, and bullet list

### Feature: Team Section

- Scenario: Team members display in cards
  - Given the user scrolls to the team section
  - Then three team member cards are shown
  - And each card shows name, role, avatar, social icons, and description

### Feature: Services Section

- Scenario: Six service cards display
  - Given the user scrolls to the services section
  - Then six service cards are shown in a grid
  - And each card has an icon, title, description, and "Learn More" link
  - And the section has a light background

### Feature: Testimonials Section

- Scenario: Testimonials carousel displays
  - Given the user scrolls to the testimonials section
  - Then a carousel of testimonial quotes is shown
  - And each quote has text, author name, and avatar

### Feature: Blog Section

- Scenario: Three blog post cards display
  - Given the user scrolls to the blog section
  - Then three blog cards are shown
  - And each card has an image, date/author tags, title, excerpt, and "Continue Reading" link

### Feature: Contact Section

- Scenario: Contact form and info display
  - Given the user scrolls to the contact section
  - Then a contact form with First Name, Last Name, Email, Subject, Message fields is shown
  - And a "Send" submit button is present
  - And contact info (address, phone, email) is displayed alongside

### Feature: Footer

- Scenario: Footer with columns and newsletter
  - Given the user scrolls to the footer
  - Then a dark background footer is displayed
  - And three columns show: About Us, Quick Links, Follow Us + Newsletter
  - And a copyright bar with Component Dock link is present

### Feature: Responsiveness

- Scenario: Mobile navigation toggle
  - Given the viewport is under 768px
  - Then a hamburger menu toggle is visible
  - And clicking it opens a slide-in mobile nav

## Verification checklist

- [ ] Top bar: phone + email in thin strip above navbar
- [ ] Navbar: fixed, white bg, logo left, 7 nav links, mobile toggle
- [ ] Hero: full-screen bg image, overlay, centered headline, rounded CTA
- [ ] About: "50 years" stat, image, "Welcome To Consula" headline, "Learn More" CTA
- [ ] How It Works: 3 steps (Innovate/Create/Scale), numbers, descriptions, bullet lists
- [ ] Team: 3 member cards with avatar, name, role, social icons, description
- [ ] Services: 6 cards (Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, Financial Management), icons, "Learn More"
- [ ] Testimonials: carousel with quotes, author names, avatars
- [ ] About (second): split layout, image + text + stats
- [ ] Blog: 3 post cards with image, meta tags, title, excerpt, "Continue Reading"
- [ ] Contact: form (First/Last/Email/Subject/Message) + address/phone/email info
- [ ] Footer: dark bg (#25262a), 3 columns, newsletter, Component Dock link
- [ ] Typography: Roboto font family
- [ ] Color tokens: primary #007bff, accent #46ddb0, dark #25262a
- [ ] Button styles: rounded-pill (30px radius) primary CTA
- [ ] Responsive: mobile nav, stacking columns
- [ ] No ColorLib references in app code
