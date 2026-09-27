# Template: Emerge (Personal Portfolio / Designer)

## Purpose

Recreation of the ColorLib **Unfold** template as a personal portfolio for a
product designer / freelancer. Original preview:
https://preview.colorlib.com/theme/unfold/
Source: https://colorlib.com/wp/template/unfold/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Name mapping: `apps/emerge` recreates ColorLib "Unfold".

## Design Tokens

| Token | Value | Source |
|---|---|---|
| Brand primary | `#D63447` (crimson red) | `.counter-v1 .number`, buttons, accents |
| Text dark | `#212529` | Body text, headings (dark mode default) |
| Text muted | `#6c757d` | Secondary text |
| Background dark (default) | `#191919` / dark sections | Body, most sections dark by default |
| Background light sections | `#fff` / `#f8f9fa` | Testimonial cards, about area |
| White text | `#fff` | Hero, nav, footer text |
| Font heading | `"Arimo", sans-serif` | H1, counters, headings |
| Font body | `"Raleway", sans-serif` | Body paragraphs |
| Font secondary serif | `Georgia, serif` | Blockquotes |
| Button shape | Pill (`border-radius: 30px`), outline, 2px border | `.btn-outline-pill` |
| Card radius | 0 (square) for portfolio items | Portfolio/blog grid items |
| Counter number | 69px, weight 900, color `#D63447` | Skill percentages |
| Section heading | Divider image under h2, uppercase, letter-spacing | `.heading-h2` with `.divider` |
| Overlay | Dark gradient on hover over portfolio/blog items | `.portfolio-item .overlay` |

## Section Order (fidelity spec)

1. **Navbar** — fixed top, centered logo "Emerge" with dot accent, 3-link nav
   on left (Portfolio, About, Services), 3-link nav on right (Skills,
   Testimonial, Journal), contact link. Mobile: hamburger menu. Dark mode
   toggle button (moon icon) on right side.

2. **Hero / Cover** — full-viewport parallax background image, centered heading
   "Emerge" + subheading (designer tagline). Scroll-down mouse indicator at
   bottom. Dark overlay on background.

3. **Portfolio** — section heading "Portfolio" with divider image. 3-column
   isotope/masonry grid of portfolio items (3x3 = 9 items). Each item has an
   image, dark overlay on hover, link icon, title, and category tags. Items
   have varying aspect ratios (portrait items in 2nd row).

4. **About Me** — section heading "About Me" with divider. Two-column layout:
   left column = large photo with dotted background decoration; right column =
   heading "We can make it together", lead paragraph, body paragraph,
   "Download my CV" pill button.

5. **My Services** — section heading "My Services" with divider. 3-column grid
   (2 rows x 3 cols) of 6 service items. Each has an SVG icon (45px),
   heading (2 words, line-break between), and description paragraph.
   Services: Digital Strategy, Web Design, User Experience, Web Development,
   WordPress Solutions, Mobile Applications.

6. **My Skills** — section heading "My Skills" with divider. 4-column row of
   animated counters: WordPress (90%), HTML/CSS (99%), JavaScript (95%),
   Design (100%). Large red numbers (69px), "%" suffix, uppercase label.

7. **My Happy Clients (Testimonials)** — section heading with divider. Swiper
   carousel of 3 testimonial cards. Each card: quote blockquote, author photo,
   name, role "@company". Authors: Eric Ingram (Facebook), Ryan Mullins
   (Shopify), Erica Miller (Twitter).

8. **My Journal (Blog)** — section heading with divider. Asymmetric grid:
   top row = large post (col-8) + small post (col-4); bottom row = 2 posts
   (col-4 each). Each post: image, overlay, title, author + read time meta.

9. **Get In Touch (Contact)** — section heading with divider. Two-column
   layout: left = form (Name, Email, Message fields + "Send Message" pill
   button); right = contact info (Email, Phone, Address). Form has
   honeypot + timestamp spam protection.

10. **Footer** — centered logo "Emerge" with dot, social links (Facebook,
    Twitter, Instagram, Dribbble, Behance), copyright with Component Dock
    attribution (replacing ColorLib attribution).

## Gherkin Requirements

### Navbar
- Given the page loads, When I look at the top, Then I see a fixed navbar with
  the logo "Emerge" centered.
- Given the navbar is visible, When I look left of the logo, Then I see links:
  Portfolio, About, Services.
- Given the navbar is visible, When I look right of the logo, Then I see
  links: Skills, Testimonial, Journal, Contact.
- Given I am on mobile, When I tap the hamburger, Then a mobile menu opens
  with all nav links.
- Given the navbar is visible, When I look to the far right, Then I see a
  dark/light mode toggle button.

### Hero
- Given the page loads, When I see the hero section, Then there is a full-
  viewport parallax background image with dark overlay.
- Given the hero is visible, When I read the heading, Then it says "Emerge".
- Given the hero is visible, When I read the subheading, Then it shows a
  designer tagline.
- Given the hero is visible, When I look at the bottom, Then I see a scroll
  indicator (mouse icon + "Scroll" label).

### Portfolio
- Given I scroll to portfolio, When I see the section, Then there is a
  heading "Portfolio" with a divider image underneath.
- Given the portfolio grid is visible, When I count the items, Then there
  are 9 portfolio items in a 3-column grid.
- Given a portfolio item, When I hover over it, Then a dark overlay appears
  with a link icon, project title, and category tags.
- Given a portfolio item, When I look at the aspect ratio, Then most items
  are landscape and 1-2 are portrait (taller).

### About Me
- Given I scroll to about, When I see the section, Then there is a heading
  "About Me" with a divider image.
- Given the about section is visible, When I look left, Then I see a large
  designer portrait photo with a dotted background decoration.
- Given the about section is visible, When I look right, Then I see a heading
  "We can make it together", two paragraphs, and a "Download my CV" pill
  button.

### My Services
- Given I scroll to services, When I see the section, Then there is a
  heading "My Services" with a divider image.
- Given the services grid is visible, When I count the items, Then there
  are 6 service cards in a 3-column grid (2 rows).
- Given a service card, When I look at it, Then I see an SVG icon (45px),
  a two-word heading, and a description paragraph.
- Given the services are listed, When I read the headings, Then they are:
  Digital Strategy, Web Design, User Experience, Web Development, WordPress
  Solutions, Mobile Applications.

### My Skills
- Given I scroll to skills, When I see the section, Then there is a heading
  "My Skills" with a divider image.
- Given the skills counters are visible, When I count them, Then there are
  4 animated counter items in a row.
- Given a skill counter, When I look at it, Then I see a large red number
  (90, 99, 95, or 100), a "%" symbol, and an uppercase label.
- Given the skill labels, When I read them, Then they are: WordPress, HTML/
  CSS, JavaScript, Design.

### Testimonials
- Given I scroll to testimonials, When I see the section, Then there is a
  heading "My Happy Clients" with a divider image.
- Given the testimonial carousel is visible, When I look at a slide, Then
  I see a quote blockquote, author photo, name, and role with @company.
- Given the testimonials are loaded, When I count them, Then there are 3
  testimonial slides in the carousel.
- Given a testimonial, When I read the author info, Then the name and role
  are visible below the photo.

### Journal / Blog
- Given I scroll to journal, When I see the section, Then there is a heading
  "My Journal" with a divider image.
- Given the blog grid is visible, When I look at the layout, Then the top
  row has 1 large post (col-8) and 1 small post (col-4), and the bottom
  row has 2 equal posts.
- Given a blog post card, When I hover over it, Then a dark overlay appears
  with the title and author + read time meta.
- Given the blog posts are loaded, When I count them, Then there are 4
  blog post cards total.

### Contact / Get In Touch
- Given I scroll to contact, When I see the section, Then there is a heading
  "Get In Touch" with a divider image.
- Given the contact section is visible, When I look left, Then I see a form
  with Name, Email, Message fields and a "Send Message" pill button.
- Given the contact section is visible, When I look right, Then I see contact
  info: Email, Phone, and Address.
- Given the contact form, When I submit with empty fields, Then validation
  errors are shown (via react-hook-form / zod).

### Footer
- Given I scroll to the footer, When I look at it, Then I see the logo
  "Emerge" centered with a dot accent.
- Given the footer is visible, When I look below the logo, Then I see social
  links: Facebook, Twitter, Instagram, Dribbble, Behance.
- Given the footer is visible, When I read the copyright line, Then it says
  "All rights reserved" with a Component Dock link.

### Dark/Light Mode
- Given the page loads in dark mode (default), When I read body text, Then
  it is white on dark background.
- Given I click the theme toggle, When the page switches to light mode, Then
  backgrounds become light and text becomes dark (#212529).
- Given I am in light mode, When I look at the hero button, Then it stays
  white text (not dark) for contrast over the hero image.

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar: fixed, centered logo, split nav links, mobile hamburger, dark mode toggle
- [ ] Hero: parallax background, heading + subheading, scroll indicator
- [ ] Portfolio: 9 items in 3-col grid, hover overlay, category tags
- [ ] About: 2-col layout, portrait photo with dotted bg, heading + text + CV button
- [ ] Services: 6 cards in 3-col grid, SVG icons, correct headings
- [ ] Skills: 4 animated counters, red numbers, correct percentages and labels
- [ ] Testimonials: Swiper carousel, 3 slides, author info
- [ ] Journal: asymmetric grid (8+4 top, 4+4 bottom), 4 posts, hover overlay
- [ ] Contact: form (Name, Email, Message + Send), contact info column
- [ ] Footer: centered logo, social links, Component Dock attribution
- [ ] Dark/light mode toggle works, all section backgrounds adapt
- [ ] Responsive: mobile hamburger menu, single-column on small screens
- [ ] Design tokens: #D63447 crimson, Arimo headings, Raleway body, pill buttons
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
