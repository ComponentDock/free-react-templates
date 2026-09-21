# Template: Yogavibe (Health & Fitness — Yoga Studio)

## Purpose

Recreation of ColorLib **Doyoga** — a yoga studio landing page with hero video CTA, featured classes carousel, schedule grid, about section with overlapping images, events, filterable gallery, contact form, and newsletter footer.

- **Source slug:** `doyoga`
- **ColorLib URL:** https://colorlib.com/wp/template/doyoga/
- **Preview URL:** https://preview.colorlib.com/theme/doyoga/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/doyoga-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `yogavibe` (no collision with existing apps or specs)

## Design Tokens (extracted from live preview CSS)

| Token               | Value                                              | Usage                                      |
|---------------------|----------------------------------------------------|--------------------------------------------|
| Font family         | "Quicksand", sans-serif fallback                   | Global body + headings                     |
| Brand primary       | `#6610f2` (indigo/violet)                          | `.btn-primary` bg, nav active, links       |
| White               | `#fff`                                             | Navbar bg, card bg, text on dark overlays  |
| Black               | `#000`                                             | Body text, mobile menu overlay             |
| Text primary        | `#333333`                                          | Body text                                  |
| Text muted          | `#8c8c8c`                                          | Secondary text, subheadings                |
| Light gray          | `#ebeef0`                                          | Subtle section dividers                    |
| Very light gray     | `#f8f9fa`                                          | Alternate section backgrounds              |
| Border gray         | `#dee2e6`                                          | Form inputs, card borders                  |
| Button shape        | Rounded (Bootstrap `.btn` default radius)          | Primary + outline CTAs                     |
| Button primary bg   | `#6610f2`                                          | `.btn-primary` fill                        |
| Button primary text | `#fff`                                             | `.btn-primary` text color                  |
| Button hover        | Transparent bg + `#6610f2` border + black text    | Hover/focus state                          |
| Button outline      | `btn-outline-primary` with `#6610f2` border        | Secondary CTAs (Previous/Next, Join)       |
| Heading font weight | Bold (Quicksand 700)                               | Section headings (uppercase, tracked)      |
| Image style         | Full-width `img-fluid`, rounded default            | All images                                |

### Section backgrounds

- **Top bar:** Dark/transparent with white text (contact info + social icons)
- **Navbar:** White background, sticky on scroll
- **Hero:** Full-viewport background image (yoga practitioners), dark semi-transparent overlay, centered white heading + subtitle + play button CTA
- **Featured Classes:** White section, left-aligned heading with purple underline accent, owl-carousel of class cards (image + price + name overlay)
- **Schedule:** White section, split 2-column grid of schedule items, each with a background image on one side and text (class name, description, time, date, "Join from $15" button) on the other
- **About Us:** White section, split layout (text left 5-col, two overlapping images right 6-col)
- **Events:** White section, 2-column layout of event cards (image + title + date + description + "Read More" button)
- **Yoga Gallery:** White section, filter buttons (All/Classes/Intern/Training), 3-column masonry grid of images with search icon overlay on hover
- **Get In Touch:** Light section, split layout (contact form left, contact details right with address/phone/email)
- **Footer:** Dark background, 3-column layout (About Us text, Quick Links in 2 sub-columns, Newsletter subscribe + Social icons), copyright line

## Gherkin Requirements

### Top Bar
- **Given** the user loads the page, **when** the top bar renders, **then** a dark bar appears with email address on the left, phone number next to it, and social media icons (Twitter, Facebook, LinkedIn, Instagram) on the right
- **Given** the top bar, **when** the viewport is mobile, **then** the top bar is hidden

### Navbar
- **Given** the page loads, **when** the navbar renders, **then** a white sticky navigation bar appears with the brand "YOGAVIBE" (logo text) on the left
- **Given** the navbar, **when** the user sees the links, **then** they see: Home, Classes, About, Events, Gallery, Contact
- **Given** the navbar, **when** the viewport is mobile, **then** a hamburger toggle appears that opens a slide-in mobile menu with black overlay
- **Given** the navbar, **when** the user scrolls down, **then** the navbar becomes sticky with a subtle shadow

### Hero Section
- **Given** the page loads, **when** the hero renders, **then** a full-viewport background image (yoga practitioners) appears with a dark semi-transparent overlay
- **Given** the hero, **when** the heading renders, **then** it reads "A Yoga Studio" in large white bold text, centered
- **Given** the hero, **when** the subtitle renders, **then** a short descriptive paragraph appears below the heading in white
- **Given** the hero, **when** the CTA renders, **then** a circular play button with "Watch the video" text appears centered below the subtitle
- **Given** the hero, **when** the user clicks the play button, **then** a video lightbox/modal opens (or navigates to video URL)

### Featured Classes
- **Given** the user scrolls to the classes section, **when** the heading renders, **then** it reads "Featured Classes" with a short description paragraph below
- **Given** the classes section, **when** the navigation renders, **then** "Previous" and "Next" outline-primary buttons appear aligned right of the heading
- **Given** the classes section, **when** the carousel renders, **then** 4 class cards appear: Ashtanga Foundations ($29.99), Surya Vinyasa ($32.99), Chandra Vinyasa ($22.99), Yinyasa ($19.99)
- **Given** each class card, **when** it renders, **then** it shows a background image with an overlaid text block containing the price and class name
- **Given** the carousel, **when** the user clicks Previous/Next, **then** the carousel scrolls horizontally to show adjacent cards

### Schedule
- **Given** the user scrolls to the schedule section, **when** the heading renders, **then** it reads "Schedule" with a short description paragraph
- **Given** the schedule section, **when** the grid renders, **then** a 2-column layout appears with 4 schedule items total (2 per column)
- **Given** each schedule item, **when** it renders, **then** it shows a background image on one side and text on the other side with: class name (h3), description, time (clock icon + "5:30 PM"), date (calendar icon + "April 22, 2019"), and a "Join from $15" primary button
- **Given** the schedule items, **when** they render, **then** the classes are: Yinyasa, Chandra Vinyasa, Surya Vinyasa, Ashtanga Foundations

### About Us
- **Given** the user scrolls to the about section, **when** the heading renders, **then** it reads "About Us" with two descriptive paragraphs below
- **Given** the about section, **when** the layout renders, **then** a split layout appears: text on the left (5 columns), two overlapping images on the right (6 columns)
- **Given** the about section, **when** the images render, **then** two images overlap vertically with slight offset

### Events
- **Given** the user scrolls to the events section, **when** the heading renders, **then** it reads "Events"
- **Given** the events section, **when** the cards render, **then** 2 event cards appear in a 2-column layout
- **Given** each event card, **when** it renders, **then** it shows a background image on one side and text on the other with: event title, date (calendar icon), description paragraph, and a "Read More" primary button

### Yoga Gallery
- **Given** the user scrolls to the gallery section, **when** the heading renders, **then** it reads "Yoga Gallery" centered
- **Given** the gallery section, **when** the filter buttons render, **then** 4 filter buttons appear: All (active), Classes, Intern, Training
- **Given** the gallery section, **when** the grid renders, **then** a 3-column masonry-style grid of images appears
- **Given** the user hovers over a gallery image, **when** the hover state triggers, **then** a search icon overlay appears on the image
- **Given** the user clicks a filter button, **when** the filter applies, **then** only images matching that category are shown (animated transition)

### Contact (Get In Touch)
- **Given** the user scrolls to the contact section, **when** the heading renders, **then** it reads "Get In Touch" centered
- **Given** the contact section, **when** the form renders, **then** a left-half form appears with fields: Name, Phone, Email, Message (textarea), and a "Send Message" primary button
- **Given** the contact section, **when** the details render, **then** a right-half block appears with "Contact Details" heading, address (location icon), phone (telephone icon), and email (mail icon)

### Footer
- **Given** the user scrolls to the footer, **when** the footer renders, **then** a dark-background footer appears with 3 columns
- **Given** the footer, **when** the left column renders, **then** it shows "About Us" heading with a description paragraph
- **Given** the footer, **when** the middle column renders, **then** it shows "Quick Links" heading with two sub-columns: (Home, Services, Events, Team) and (Ashtanga Foundations, Surya Vinyasa, Chandra Vinyasa, Yinyasa)
- **Given** the footer, **when** the right column renders, **then** it shows "Subscribe Newsletter" heading with an email input + Send button, and "Follow Us" heading with social icons (Facebook, Twitter, Instagram, LinkedIn)
- **Given** the footer, **when** the copyright renders, **then** a centered line reads "Copyright © [year] All rights reserved | Made with ❤ by Component Dock"

## Verification Checklist

- [ ] All 10 sections render in correct order (top bar → navbar → hero → classes → schedule → about → events → gallery → contact → footer)
- [ ] Navbar is sticky on scroll with shadow effect
- [ ] Hero has full-viewport background image with dark overlay
- [ ] Featured Classes carousel navigates with Previous/Next buttons
- [ ] Schedule grid shows 2-column layout with image-text pairs
- [ ] About section has overlapping image layout
- [ ] Events section shows 2 event cards
- [ ] Gallery has filter buttons that show/hide images with animation
- [ ] Gallery images show hover overlay with search icon
- [ ] Contact form has Name, Phone, Email, Message fields
- [ ] Contact details show address, phone, email with icons
- [ ] Footer has 3 columns: About, Quick Links, Newsletter + Social
- [ ] Footer copyright links to Component Dock
- [ ] Mobile responsive: hamburger menu, stacked columns, hidden top bar
- [ ] Brand color `#6610f2` used consistently for buttons and accents
- [ ] Quicksand font loaded and applied globally
- [ ] All placeholder images use picsum.photos with deterministic seeds
