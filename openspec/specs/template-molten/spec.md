# Template: Molten (Construction / Industrial)

## Purpose

Recreation of the ColorLib **Inds** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source slug:** `inds`
- **ColorLib URL:** https://colorlib.com/wp/template/inds/
- **Preview URL:** https://preview.colorlib.com/theme/inds/
- **New name:** `molten` (apps/molten, @free-react-templates/molten)
- **Category:** Construction

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#f27420` | Warm orange — buttons, gallery hover, CTA banner |
| Brand dark / navy | `#021a47` | Dark navy — button bg, hero text, headings |
| Text dark | `#04080f` | Body text |
| Light background | `#fafafa` | Services cards bg |
| Off-white | `#fbf9ff` / `#f9f9ff` | Section alternating bg |
| White | `#ffffff` | Default section bg |
| CTA accent shadow | `#ca611b` | Box-shadow on hero button |
| Font heading | Barlow | `font-family: "Barlow", sans-serif` |
| Font body | Roboto | `font-family: "Roboto", sans-serif` |
| Button shape | Sharp corners (`border-radius: 0`) | Buttons have no rounded corners |
| Hero button shadow | `box-shadow: -8px 8px 0 #ca611b` | Offset shadow, flips on hover |
| Gallery hover overlay | `#f27420` at 0 → 0.85 opacity | Orange overlay slides in on hover |
| CTA banner bg | `#f27420` solid | Full-width orange band |

## Section Structure (in order)

1. **Navbar** — Top info bar (phone, email, hours) + sticky nav with logo, links (Home, About, Industries, Works, Blog dropdown, Pages dropdown), "Get A Quote" button
2. **Hero Slider** — Carousel with dark navy overlay, heading "Industrial Solutions!", subtitle text, "Our Services" CTA button with orange shadow
3. **Services** — 3-column grid of service cards on #fafafa bg: Automotive Manufacturing, Heavy Industry Market, Industry Analysis — each with icon, h4 title, description, arrow-btn link
4. **About / Safe Industrial Solutions** — Split layout: heading, three paragraphs of copy, "Our Services" button on left; image + mission stat badges (01–04 numbered counters) on right
5. **Gallery** — 4-column project showcase grid: numbered items (01–04) with h4 title, short description, "Read more" link; orange hover overlay
6. **Team** — "Our Team Best Members" heading + subtitle + 4 team member cards with photo, name link, role; "Contact Us" button
7. **Testimonial** — Dark navy background, slider with avatar, quote text, attribution; quote icon decoration
8. **Blog / Featured Post** — "David Droga" area: two blog post cards with category tag, date, title, "Read more" button
9. **CTA Banner** — Full-width orange (#f27420) banner: "Want To Work With Us? Hit The Button." heading + "Let's Work Together" white button
10. **Footer** — Dark background, 4 columns: About Us blurb, Contact Info (address, phone, gallery link), Important Links, Newsletter (email input + submit)
11. **Footer Bottom** — Copyright + social icons

## Gherkin Requirements

### Navbar
- GIVEN the page loads, WHEN the user sees the header, THEN a top info bar shows phone number, email, and business hours
- GIVEN the page loads, WHEN the user sees the nav, THEN a sticky navigation bar displays logo, 5 menu items (Home, About, Industries, Works, Blog), and a "Get A Quote" button
- GIVEN the user scrolls down, WHEN the nav leaves the viewport, THEN the nav sticks to the top of the page

### Hero Slider
- GIVEN the page loads, WHEN the hero section renders, THEN a carousel displays with heading "Industrial Solutions!", subtitle text, and "Our Services" button
- GIVEN the hero loads, WHEN the CTA button renders, THEN it has a dark navy background with an orange offset box-shadow

### Services
- GIVEN the services section loads, WHEN the user sees it, THEN 3 service cards are displayed in a row: Automotive Manufacturing, Heavy Industry Market, Industry Analysis
- GIVEN a service card renders, WHEN the user hovers over it, THEN the card background transitions from #fafafa to white

### About
- GIVEN the about section loads, WHEN the user sees it, THEN a split layout shows heading + paragraphs + button on left and an image + numbered mission badges on right

### Gallery
- GIVEN the gallery section loads, WHEN the user sees it, THEN 4 project items are displayed in a grid with numbered labels, titles, descriptions, and "Read more" links
- GIVEN a gallery item renders, WHEN the user hovers over it, THEN an orange overlay fades in covering the image

### Team
- GIVEN the team section loads, WHEN the user sees it, THEN 4 team member cards display with photos, names, and roles
- GIVEN the team section renders, WHEN the user sees the heading area, THEN a "Contact Us" button appears below the subtitle

### Testimonial
- GIVEN the testimonial section loads, WHEN the user sees it, THEN a slider shows a quote with avatar and attribution on a dark background

### Blog
- GIVEN the blog section loads, WHEN the user sees it, THEN 2 blog post cards display with category, date, title, and "Read more" button

### CTA Banner
- GIVEN the CTA section loads, WHEN the user sees it, THEN a full-width orange banner displays "Want To Work With Us?" heading and a "Let's Work Together" white button

### Footer
- GIVEN the footer loads, WHEN the user sees it, THEN 4 columns appear: About Us, Contact Info, Important Links, Newsletter
- GIVEN the newsletter renders, WHEN the user sees it, THEN an email input and submit button are displayed
- GIVEN the footer bottom renders, WHEN the user sees it, THEN a copyright line and social media icons are shown, with a link to https://www.componentdock.com/

## Verification Checklist

- [ ] App renders at `apps/molten/` with package `@free-react-templates/molten`
- [ ] All 11 sections present in correct order
- [ ] Brand tokens applied: #f27420 orange, #021a47 navy, Barlow headings, Roboto body
- [ ] Buttons: sharp corners (no border-radius), dark bg, white text
- [ ] Hero button has orange offset box-shadow that flips on hover
- [ ] Gallery items have orange hover overlay
- [ ] CTA banner is full-width orange
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images
- [ ] Responsive layout (mobile/tablet/desktop)
- [ ] `public/CNAME` = `molten.free.componentdock.com`
- [ ] `homepage` = `https://molten.free.componentdock.com`
