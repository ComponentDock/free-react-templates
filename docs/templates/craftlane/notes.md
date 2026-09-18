# CraftLane — Prep Notes

**Source:** ColorLib "Five Star" (https://colorlib.com/wp/template/five-star/)
**Preview:** https://preview.colorlib.com/theme/five-star/
**New name:** craftlane
**App folder:** apps/craftlane

## Task outline

1. Copy simplest existing app as scaffold, rename package to @free-react-templates/craftlane
2. Set up index.css with Tailwind v4 theme tokens (brand: #f5204b, font: Poppins)
3. Add Poppins font link to index.html
4. Create section components in order:
   - Navbar.tsx
   - Hero.tsx (fullscreen banner with overlay)
   - ExperienceArea.tsx (images + content block)
   - TestimonialCarousel.tsx (parallax bg + carousel)
   - ServiceGrid.tsx (4-column centered icons)
   - VideoSection.tsx (split video thumbnail + text)
   - ServiceRow.tsx (3-column horizontal items)
   - ContactSection.tsx (info + form)
   - Footer.tsx (3 columns + bottom bar)
5. Compose all sections in App.tsx
6. Write tests for each component (100% coverage)
7. Run verify-app.sh, fix any issues
8. Commit, push, merge PR

## Design notes — section-by-section fidelity

### Navbar
- Simple logo text (no image), hamburger icon on mobile
- Uses `lnr-menu` icon in original; use lucide-react Menu icon
- Fixed/sticky positioning optional; original is static

### Hero (Banner)
- Fullscreen height, background image with dark overlay (rgba(0,0,0,0.75))
- Centered heading: large white text, subtitle below
- On mobile: height constrained to 600px
- Use picsum.photos seed for background image

### Experience Area
- Light background (#f9f9ff)
- Row: 2 image thumbnails (col-3 each) + content block (col-6)
- Content: h2 heading, h6 subtitle (gray), paragraph, primary-btn CTA
- Images use picsum.photos with deterministic seeds

### Carousel / Testimonials
- Parallax background image + dark overlay
- Right-aligned carousel (col-6) with quote/headline slides
- Prev/next arrow triggers below the carousel content
- Use simple React state for slide navigation (no library needed)

### Service Area 1
- White background, 4-column grid
- Each item: circular icon (use lucide-react), h4 title, short paragraph
- Items centered horizontally within columns
- Icons: Monitor, Image, Smartphone, Settings (matching originals)

### Video Area
- Dark overlay background (full section)
- Left: video thumbnail (picsum) with circular play button overlay
- Right: white heading + white paragraph text
- Split 6/6 columns, stacks on mobile

### Service Area 2
- Light background (#f9f9ff)
- 3-column horizontal layout: icon + text side by side per item
- Uses `d-flex justify-content-between align-items-center` pattern
- Same icons/titles as Service Area 1

### Contact Area
- White background
- Left (col-5): address, email, phone with pin/earth/phone icons
- Right (col-7): form with name, email, message fields + submit button
- Form uses `text-right` alignment on the right side

### Footer
- Dark background (#222)
- 3 columns: About Agency (nav links), Newsletter (email form + CTA), Instafeed (6 thumbnail images)
- Bottom bar: copyright text (left) + social icons (right: Facebook, Twitter, Dribbble, Behance)
- Must include ComponentDock attribution link

## Color palette quick reference

| Role        | Hex       |
| ----------- | --------- |
| Brand       | #f5204b   |
| Cyan accent | #4cd3e3   |
| Blue accent | #38a4ff   |
| Dark text   | #222222   |
| Gray text   | #777777   |
| Light bg    | #f9f9ff   |
| White bg    | #ffffff   |
| Overlay     | rgba(0,0,0,0.75) |
