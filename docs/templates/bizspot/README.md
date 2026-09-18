# BizSpot — Design Notes

Source: ColorLib "Listio" (https://preview.colorlib.com/theme/listio/)
New name: bizspot

## Section structure (implementation order)

1. **Navbar** — transparent overlay header. Search input left, logo center, nav right. Becomes sticky with semi-transparent pink bg on scroll. Mobile hamburger.

2. **Hero** — full-width bg image (`picsum.photos/seed/bizspot-hero/1920/800`), dark gradient overlay (rgba(0,0,0,0.6) → transparent). Left-aligned: h2 "Find your Destination", form with text input, two selects (category, city), full-width submit button (#FF377B, 4px radius).

3. **Categories** — centered section heading (h2 #072366, subtitle #FF377B). Horizontal scrollable row of icon cards: circular icon, category name, listing count. 5+ items (Hotel, Restaurant, Cafe, Shopping Mall, etc.). Use lucide-react icons.

4. **CTA Banner** — split layout. Left: heading "Best Café & Bars", paragraph, "Explore Now" button (#FF377B, 6px radius). Right: bg image area. Use `picsum.photos/seed/bizspot-cta/800/500`.

5. **Featured Listings** — 3-col grid, 6 cards. Each: image with overlaid badges (price "$$$", status "Closed"/"Open Now"), category icon, title, description, footer row (category icon + name + heart). "Explore More" outlined button. Use `picsum.photos/seed/bizspot-list-N/400/300`.

6. **How It Works** — bg image (`picsum.photos/seed/bizspot-steps/1920/600`), 3 numbered columns (01–03), each with step title + description. White text on overlay.

7. **Testimonials** — centered heading, carousel of testimonial cards. Each: quote paragraph, circular avatar (`picsum.photos/seed/bizspot-avatar-N/80/80`), name, role. Arrow navigation dots.

8. **Newsletter** — bg image (`picsum.photos/seed/bizspot-news/1920/500`), heading "Let's Stay In Touch", paragraph, email input + "Subscribe" button inline.

9. **Blog** — 2-col grid, 2 cards. Each: image, tag pill (#FF377B bg), date + author meta, title link. Use `picsum.photos/seed/bizspot-blog-N/600/400`.

10. **Footer** — 3 cols: (1) logo + description + social icons, (2) Quick Links list, (3) Company list. Footer bottom: copyright + Component Dock link. Dark bg (#140C40 or similar).

11. **BackToTop** — fixed circular button, bottom-right, #FF377B bg, appears after scroll.

## Fidelity notes

- Hero overlay is a CSS gradient, not a separate element
- Header nav text is white (on hero), becomes white-on-pink when sticky
- Section subtitles are #FF377B, section titles are #072366
- Card images use overlay3 class (dark gradient on image)
- Price/status badges are positioned absolute on the image
- "How It Works" uses numbered spans (01, 02, 03) not icons
- Testimonials is a simple carousel (owl carousel in original → use state)
- Newsletter input + button are inline (not stacked)
- Blog date badges overlap the image bottom (absolute positioning)
