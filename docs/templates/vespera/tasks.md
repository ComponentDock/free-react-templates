# Vespera — Implementation Notes

**Source:** ColorLib Samira (https://preview.colorlib.com/theme/samira/)
**New name:** Vespera
**Category:** Hotel / Luxury Resort

## Tasks

1. [ ] Create app workspace: `apps/vespera/` (copy from simplest hotel app, rename package)
2. [ ] Set up `index.html` with Google Fonts: Playfair Display + Montserrat
3. [ ] Create `src/index.css` with Tailwind `@theme` tokens (brand purple, gold accent, dark backgrounds)
4. [ ] Implement `src/components/Header.tsx` — sticky nav with logo + stars + links + CTA
5. [ ] Implement `src/components/HeroSlider.tsx` — full-width slider with overlay text + dots
6. [ ] Implement `src/components/SearchBar.tsx` — horizontal form strip with 3 dropdowns + button
7. [ ] Implement `src/components/Intro.tsx` — split layout: text left, 3-image collage right
8. [ ] Implement `src/components/BigRoom.tsx` — split: image slider left, text + testimonial right
9. [ ] Implement `src/components/RoomCards.tsx` — 3-column grid of room cards
10. [ ] Implement `src/components/Gallery.tsx` — horizontal slider on dark bg with hover overlays
11. [ ] Implement `src/components/Newsletter.tsx` — split: text left, email form right
12. [ ] Implement `src/components/Footer.tsx` — 3-column with Component Dock link
13. [ ] Compose all sections in `src/App.tsx`
14. [ ] Write tests for each component (100% coverage)
15. [ ] Run `scripts/verify-app.sh vespera` and fix any issues
16. [ ] Update `TEMPLATES.md` with `[x]` mark + Surge URL

## Section-by-section fidelity notes

### Header
- Logo is centered vertically in left column, with "hotel" subtitle in small text above the hotel name
- 5 gold stars below the name
- Nav links are lowercase, horizontal
- "Book Your Stay" button in brand purple with white text
- Mobile: hamburger icon, full-screen overlay menu

### Hero Slider
- 3 slides, all using the same background image in the original (our placeholder will vary)
- Centered text: "luxury resort" in small caps, headline in Playfair Display, CTA button
- Numbered dots (01, 02, 03) at bottom — active dot highlighted

### Search Bar
- Dark purple (#320d36) background, full-width
- 3 native select dropdowns with placeholder text
- "Request a Quote" button aligned right
- Bottom border: salmon (#ffa07f) thin line

### Intro
- 2-column layout (5/7 split on large screens)
- Left: section subtitle ("luxury resort"), heading ("Relax in our Hotel"), description, "View Rooms" text link, "Book Your Stay" button
- Right: 3 images in a collage — 2 small stacked on left, 1 tall on right
- Scroll-triggered animation (GSAP `.magic_up` in original → use intersection observer)

### Big Room Feature
- Full-width, container-fluid, no padding on sides
- Left: full-height image slider with prev/next arrows
- Right: dark navy (#0b1423) background, subtitle + heading + description
- Testimonial block: 5 gold stars, quoted text, author avatar (circle), author name + role

### Room Cards
- 3 equal columns
- Each card: image (top), price with "From $X / Night", room type label, title link, description, "Book Now" button
- Cards have subtle shadow/border

### Gallery
- Dark charcoal (#282428) background
- Horizontal scrolling image slider
- On hover: semi-transparent overlay with "+" icon centered
- Prev/next arrows below the slider

### Newsletter
- White background
- Left: subtitle + heading + description
- Right: email input (full-width within column) + "Subscribe" button
- Bottom border separator

### Footer
- White background
- Left column: logo with stars + copyright line (replaced with Component Dock link)
- Middle column: nav links + short description paragraph
- Right column: contact info list (address, phone, email)
