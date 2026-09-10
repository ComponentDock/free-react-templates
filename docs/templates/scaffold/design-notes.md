# Scaffold — Design Notes & Task Outline

**Source:** ColorLib Construct — https://preview.colorlib.com/theme/construct/
**New name:** scaffold
**Category:** Construction Company (multi-section landing page)

## Structure Order (8 sections)

1. **Navbar** — Sticky top, logo "SCAFFOLD" text, nav links + dropdown + CTA button
2. **Hero Slider** — Owl-style carousel with 2 full-width bg-image slides, centered text, dot pagination
3. **CTA Overlap** — Yellow bar overlapping hero bottom, heading + "Get A Quote" button
4. **Services** — 3-column card grid with icons, titles, descriptions, "Learn More" buttons
5. **Recent Works** — 3-column project gallery with bg-image overlays
6. **Company News** — 3 blog cards with prominent date, title, excerpt, "Read more"
7. **Testimonial** — Centered quote with circular author avatar
8. **Footer** — Light gray bg, address + Quick Links + Social + copyright

## Fidelity Notes

### Section-by-section

**Navbar:**
- Logo: text "SCAFFORD" in bold uppercase, left-aligned
- Nav links: Home, Services (dropdown), Works, News, About, Contact
- Services dropdown: Metal Roofing, General Contracting, House Renovation, Laminate Flooring, Construction Consultant
- CTA button: "GET A QUOTE" — yellow bg (#f4b214), black text, uppercase, large vertical padding (~26px), box-shadow glow on hover
- Sticky on scroll, light bg, responsive hamburger on mobile

**Hero Slider:**
- 2 slides, full-width background images (use picsum.photos/seed/scaffold-1/1920/800 and scaffold-2)
- Dark overlay (rgba(0,0,0,0.6)) for text readability
- Slide 1: heading "Creating A Brighter Future" + subtext + "Download Now!" primary button
- Slide 2: heading "Trusted Construction & Development Since 1889" + subtext
- Dot pagination (gray circles, white for active)
- Simulate with state + interval; no carousel library needed

**CTA Overlap:**
- Yellow bar (#f4b214) that overlaps the hero bottom by ~4em (negative margin-top)
- Box-shadow for depth
- Flex row: left = heading text (white), right = "Get A Quote" outline-white button
- On mobile: stacks vertically, text-centered

**Services:**
- Section heading "SERVICES" with yellow underline (::before, 50px × 2px, #f4b214, centered)
- 3-column grid (col-lg-4 col-md-6)
- Each card: icon (use lucide-react: HardHat, Building2, Wrench), title (black), description, "Learn More" outline-primary button
- "Browse All Services" primary button below the grid, centered
- White background

**Recent Works:**
- Top border divider
- Section heading "RECENT WORKS" with yellow underline
- 3-column grid: Wood Polishing, General Construction Building, House Renovation
- Each card: bg image (picsum.photos/seed/scaffold-work-N), dark overlay, title text in white
- "View All Works" primary button below

**Company News:**
- Light bg (#f8f9fa)
- Section heading "COMPANY NEWS" with yellow underline
- 3 blog cards in a row
- Each: date display (large yellow day number #f4b214, month below), title (black), excerpt (gray), "Read more →" link
- Date format: large day number + month/year

**Testimonial:**
- White bg
- Section heading "TESTIMONIAL" with yellow underline
- Centered layout
- Quote: italic text, 20px, black
- Author: name + company in smaller text
- Circular avatar (100px, border-radius: 50%)
- Use slider behavior or single testimonial display

**Footer:**
- Light gray bg (#f2f2f2), 5em padding
- Two columns: Quick Links (About, Services, Works, Contact) + Social
- Address block: street, phone, email
- Footer links colored #f4b214
- Copyright bar: "© All rights reserved | Made with Component Dock" linking to https://www.componentdock.com/
- No ColorLib attribution

## Key Design Patterns

- **Sharp buttons**: All buttons have border-radius: 0 (square corners)
- **Yellow underline on headings**: 50px × 2px centered line below section headings
- **CTA overlap pattern**: Yellow bar with negative margin overlapping previous section
- **Icon cards**: Circular icon containers (border-radius: 50%) with outlined icons
- **Blog date**: Large day number as visual focal point, smaller month below
- **Consistent section padding**: 7em vertical padding on all `.section` elements

## Token Summary for Tailwind @theme

```
--color-primary: #f4b214;
--color-primary-hover: #f6c245;
--color-teal: #5AC8D8;
--color-body: #495057;
--color-muted: #868e96;
--color-heading: #000;
--color-bg: #fff;
--color-bg-alt: #f8f9fa;
--color-bg-footer: #f2f2f2;
--color-border: #dee2e6;
```
