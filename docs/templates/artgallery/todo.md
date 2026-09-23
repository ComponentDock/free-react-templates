# ArtGallery — Design Notes & Task Outline

## Source

- ColorLib slug: `art-museum`
- Preview: https://preview.colorlib.com/theme/art-museum/ (unreachable — used screenshot)
- New name: `artgallery`

## Section order (from screenshot + description)

1. **TopBar** — Thin dark navy (#1a2b3c) bar, "Visit Us" + "Buy Ticket" links left, search center, social icons (f, twitter, instagram, google+) right
2. **Navbar** — Transparent overlaid on hero, green circle logo icon + "ArtGallery" wordmark left, nav links (Home, About, Gallery, Events, Ticket, Blog, Contact, Pages▼) right, hamburger on mobile, becomes solid on scroll
3. **Hero** — Full-viewport, painting/art background image with dark overlay, centered: subheading "OPENING ON 21ST FEBRUARY, 2018" (all caps, small, white), heading "Exhibition on Modern Era" (large serif, white), description text, "GET STARTED" button (lime green, rectangular)
4. **InfoCards** — White bg, 3-column cards with light gray backgrounds: clock icon → Opening Hours, rocket icon → Ongoing Exhibitions, calendar icon → Opening Events (all green icons/headings)
5. **Quote** — Large decorative serif quote "Music gives soul to the universe, wings to the mind, flight to the imagination..." with description text on right
6. **Gallery** — Heading "Our Gallery", grid of artwork images with lightbox on click
7. **Events** — Heading "Upcoming Events", event cards with date/title/description/location
8. **Ticket** — Ticket pricing or purchase info section
9. **Blog** — Heading "Latest News", blog post cards with image/title/excerpt/date
10. **Contact** — Contact form (name, email, subject, message) + Google Maps embed
11. **Footer** — Dark bg, multiple columns of links, social icons, copyright + Component Dock link

## Fidelity notes

- Font: "Playfair Display" for headings (serif), "Poppins" for body (sans-serif) — both via Google Fonts
- Green accent: #7ec843 (lime) — used for icons, headings, CTA buttons
- Dark navy: #1a2b3c — top bar, footer, dark section backgrounds
- Button style: rectangular (no border-radius), lime green bg, white text, uppercase
- Hero uses a painting/art-style background image (not photo) — use a similar artistic image from picsum or unsplash
- Info cards have subtle light gray (#f5f5f5) background
- Gallery uses a masonry or grid layout with lightbox (can use a React lightbox library or CSS-only)
- Navbar becomes solid on scroll (sticky + background change)
- Top bar is utility-only, very thin
- Contact section includes a map placeholder
- All sections use the green accent consistently

## Implementation tasks

- [ ] Create app scaffold: `apps/artgallery/` from simplest existing app
- [ ] Set up Tailwind theme tokens in index.css (Playfair Display + Poppins fonts, #7ec843 accent, #1a2b3c dark navy)
- [ ] Build TopBar component (thin dark bar, utility links, social icons)
- [ ] Build Navbar component (transparent → solid on scroll, responsive mobile menu)
- [ ] Build Hero section (full-viewport, art background overlay, heading, CTA button)
- [ ] Build InfoCards component (3-column cards with icons)
- [ ] Build Quote section (decorative serif quote + description)
- [ ] Build Gallery section (image grid with lightbox)
- [ ] Build Events section (upcoming event cards)
- [ ] Build Ticket section (pricing or info cards)
- [ ] Build Blog section (post preview cards)
- [ ] Build Contact section (form + map placeholder)
- [ ] Build Footer (dark bg, multiple columns, social icons, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage) for each component
- [ ] Run verify-app.sh gate
- [ ] Deploy to Surge
