# Template: Snapshot (Photographer Portfolio)

## Purpose

Recreation of ColorLib "Credo" — a photographer portfolio single-page template with hero cover, services, about with skill bars, photo gallery, testimonials, blog, and contact form.

- **ColorLib source:** https://colorlib.com/wp/template/credo/
- **Live preview:** https://preview.colorlib.com/theme/credo/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/credo-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from `style.css` and the customized Bootstrap CSS on the live preview:

| Token                  | Value                              | Notes                                                  |
| ---------------------- | ---------------------------------- | ------------------------------------------------------ |
| Font (body)            | `'Nunito', sans-serif`             | Google Fonts, Bootstrap override via `--font-family-sans-serif` |
| Brand accent           | `#fab95b`                          | Golden/amber — buttons, icons, progress bars, links, section underlines |
| Brand hover            | `#f89911` / `#f8a42a`             | Darker amber on link/button hover                      |
| Heading text           | `#212529`                          | Bootstrap default dark                                  |
| Body text              | `#212529`                          | Default Bootstrap body color                           |
| Muted text             | `#6c757d`                          | Secondary/muted text, placeholders                     |
| Page background        | `#fff`                             | White                                                  |
| Section light bg       | `#f8f9fa`                          | Bootstrap `bg-light` — services, blog, footer          |
| Section primary bg     | `#fab95b`                          | Bootstrap `bg-primary` customized — testimonials, contact |
| Dark text on primary   | `#212529`                          | Text on golden sections                                |
| White text             | `#fff`                             | Headings/text on primary bg sections                   |
| Button primary bg      | `#fab95b`                          | Golden amber                                           |
| Button primary text    | `#fff`                             | White                                                  |
| Button primary hover   | `#000` bg / `#fff` text           | Dark on hover                                          |
| Button dark bg         | `#343a40`                          | Contact "Send Message" button                          |
| Button dark hover      | `#23272b`                          | Darker on hover                                        |
| Button radius          | `30px`                             | Rounded pill shape (Bootstrap override)                |
| Form control radius    | `30px`                             | Pill-shaped inputs                                     |
| Service icon bg        | `#fab95b`                          | Golden circle behind service icons                     |
| Progress bar bg        | `#fab95b`                          | Golden fill                                            |
| Section title underline| `#fab95b`                          | 2px golden line under section titles (50px wide)       |
| Image hover overlay    | Search icon with opacity transition| Gallery items show search icon on hover                |
| Border radius small    | `2px`–`4px`                        | Blog cards, minor elements                             |
| Border radius round    | `50%`                              | Service icons, social circles                          |

## Visual Design (from screenshot)

The Credo template is a clean, warm photographer portfolio:

- Sticky navbar with "Credo" logo left, nav links right, golden accent on active/hover
- Full-viewport hero cover with background image, centered white text (name, role, CTA), face photo centered on right side
- Services section on light gray: centered heading with golden underline, 4 service items in 2x2 grid with golden circle icons
- About Me: split layout — image + text left, skill progress bars right (golden fills)
- Photography gallery: 3-column masonry grid of images with hover overlay (search icon)
- Testimonials on golden (#fab95b) background: carousel of blockquotes with white text
- Blog section on light gray: 3-column grid of blog cards (image + white card with title, date, excerpt, "Read More")
- Contact on golden (#fab95b): centered heading, form with rounded inputs, "Send Message" dark button
- Footer on light gray: 4-column layout (info, services, resources, quick links, social icons), copyright with Component Dock
- Overall aesthetic: warm golden (#fab95b) as dominant accent, Nunito font, rounded/pill buttons and inputs, clean white/light gray alternating sections

## Section Order (from HTML structure)

1. **Navbar** — Sticky header, logo "Snapshot" left, nav links (Home, About, Services, Photography, Blog, Contact), hamburger menu for mobile
2. **Hero Cover** — Full-viewport background image with overlay, centered content (heading "I'm [Name]", subtitle "Photographer | Speaker", paragraph, "Contact Me" golden CTA button), face/portrait image positioned right-center
3. **Services** — Light gray bg, centered "Services" heading with golden underline, 2-column grid of 4 service items: Wedding (glass icon), Events (video-camera icon), Conferences (fire icon), Culture (magnet icon) — each with golden circle icon + heading + description
4. **About Me** — White bg, split layout: left (image + 2 paragraphs), right (4 progress bars: Photographer 89%, Wedding 75%, Events 94%, Conferences 94% with golden fill)
5. **Photography Gallery** — White bg, centered "My Photography" heading, 3-column masonry grid of 12 images with hover overlay (search icon, fancybox lightbox)
6. **Testimonials** — Golden (#fab95b) bg, centered "What Client Are Saying" heading in white, carousel of 3 blockquotes with citations (Graig Smith, Carl Spencer, Ryan Peters)
7. **Blog Posts** — Light gray bg, centered "Blog Posts" heading, 3-column grid of blog cards (image + white card with title, date, excerpt, "Read More" link)
8. **Contact** — Golden (#fab95b) bg, centered "Say Hello" heading in white, form (first name, full name, email, subject, textarea, "Send Message" dark button)
9. **Footer** — Light gray bg, 4-column layout: Snapshot info + address, Services links, Resources links, Quick Links + Follow Me social icons (Twitter, Facebook, Instagram, Dribbble, LinkedIn), copyright with Component Dock link

## Gherkin Requirements

### Feature: Snapshot Photographer Portfolio

#### Scenario: Navbar renders with navigation links

- GIVEN the user visits the Snapshot page
- THEN the header displays the brand name "Snapshot"
- AND navigation links are present: Home, About, Services, Photography, Blog, Contact
- AND the navbar is sticky (fixed to top on scroll)
- AND a hamburger menu icon is visible for mobile viewports

#### Scenario: Hero displays full-viewport cover with portrait

- GIVEN the hero section is visible
- THEN a full-viewport background image is displayed with an overlay
- AND centered white text shows the photographer's name and role "Photographer | Speaker"
- AND a descriptive paragraph is shown below the subtitle
- AND a "Contact Me" CTA button with golden (#fab95b) background and pill shape (border-radius 30px) is present
- AND a portrait/face image is positioned at the center-right of the section

#### Scenario: Services section shows 4 service items

- GIVEN the services section is visible
- THEN a centered "Services" heading with golden underline is displayed
- AND 4 service items are shown in a 2-column grid
- AND each service item has a golden circle icon, heading, and description
- AND the services include: Wedding, Events, Conferences, Culture
- AND the section background is light gray (#f8f9fa)

#### Scenario: About Me section displays skill progress bars

- GIVEN the about section is visible
- THEN a heading "About Me" is displayed
- AND an image appears on the left side with paragraphs below
- AND 4 progress bars appear on the right side with golden (#fab95b) fill
- AND the progress bars show: Photographer (89%), Wedding (75%), Events (94%), Conferences (94%)
- AND skill labels are displayed above each progress bar

#### Scenario: Photography gallery shows masonry grid

- GIVEN the photography section is visible
- THEN a centered "My Photography" heading is displayed
- AND a 3-column masonry grid of 12 images is shown
- AND each image shows a search icon overlay on hover
- AND clicking an image opens it in a lightbox/fancybox view

#### Scenario: Testimonials carousel displays client quotes

- GIVEN the testimonials section is visible
- THEN a golden (#fab95b) background section is displayed
- AND a centered "What Client Are Saying" heading in white is shown
- AND a carousel of 3 blockquotes is present
- AND each blockquote has quote text and a citation with author name
- AND authors include Graig Smith, Carl Spencer, and Ryan Peters

#### Scenario: Blog section shows 3 blog cards

- GIVEN the blog section is visible
- THEN a centered "Blog Posts" heading is displayed on light gray background
- AND 3 blog cards are shown in a 3-column grid
- AND each card has an image, white card body with title, date, excerpt, and "Read More" link
- AND all cards share the same placeholder content

#### Scenario: Contact form collects user message

- GIVEN the contact section is visible
- THEN a golden (#fab95b) background section is displayed
- AND a centered "Say Hello" heading in white is shown
- AND a form with first name, full name, email, subject, and message fields is present
- AND all inputs have pill-shaped borders (border-radius 30px) and transparent background
- AND a "Send Message" button with dark (#343a40) background is present

#### Scenario: Footer shows four-column layout

- GIVEN the footer is visible
- THEN a light gray background footer is displayed
- AND the first column shows the brand name "Snapshot" with description and address
- AND three link columns are present: Services, Resources, Quick Links
- AND social media icons (Twitter, Facebook, Instagram, Dribbble, LinkedIn) are shown
- AND a copyright line with "Component Dock" link is displayed

## Verification Checklist

- [ ] All 9 sections present in correct order
- [ ] Nunito font applied to all text
- [ ] Golden (#fab95b) accent used consistently for buttons, icons, progress bars, links, section underlines
- [ ] Navbar: sticky, logo + 6 nav links + hamburger for mobile
- [ ] Hero: full-viewport cover, centered white text, "Contact Me" golden pill button, portrait image
- [ ] Services: light gray bg, 4 items in 2-col grid with golden circle icons
- [ ] About Me: split layout, image left, 4 golden progress bars right
- [ ] Photography: 3-column masonry grid, 12 images, hover overlay with search icon
- [ ] Testimonials: golden bg, white text, 3 blockquotes in carousel
- [ ] Blog: light gray bg, 3 blog cards with image + white card body
- [ ] Contact: golden bg, form with pill-shaped inputs, dark "Send Message" button
- [ ] Footer: light gray bg, 4 columns, social icons, copyright with Component Dock link
- [ ] All buttons and inputs use pill shape (border-radius 30px)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] Responsive layout works on mobile
