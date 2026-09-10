# Consultex — Implementation Task Outline

Source: ColorLib Bizcon (https://colorlib.com/wp/template/bizcon/)
Preview: https://preview.colorlib.com/theme/bizcon/
App name: consultex
Package: @free-react-templates/consultex

## Section-by-section implementation order

### 1. Navbar
- Logo image (placeholder via picsum) on left
- Right-aligned nav: Home, About, Blog ▾, Page ▾, Contact
- Dropdowns for Blog and Page (hover-triggered)
- Mobile hamburger toggler
- White background, clean minimal style

### 2. Hero / Banner
- Asymmetric split: text left (col-7), background image right
- Headline: "Lead from Front in Business Innovation." (Martel serif, 55px, weight 800)
- Subtext paragraph below
- Primary CTA: "learn more" — btn_1 gradient pill
- Secondary CTA: video play icon + "Intro Video" text
- Background: subtle image at top-right corner (use placeholder)
- Decorative floating dots: simplify or omit (they are animated SVG icons)

### 3. About Section
- Two-column split: image right, text left
- Heading: "We Have 24 Year Experience in consulting"
- Subtitle: lighter italic-weight line
- Body paragraph
- "read more" button (btn_2 style: gradient pill + shadow)
- Decorative animated dots (simplify/omit)

### 4. Services Section
- Gray (#f7f7f7) background
- Three-column layout: left = heading + text + "Load More" button; center = Business Opportunity card; right = Commercial Approach card
- Each card: icon (use lucide-react), heading, paragraph, "Learn More →" link (btn_3 style with green arrow box)
- Service icon backgrounds: #e3f1da light green

### 5. Reviews / Testimonials
- Section heading: "Customer Are Saying" + subtitle
- Thumbnail row on left (small avatar images)
- Main review card: quote icon (SVG), testimonial text, reviewer name, title
- Implement as a simple carousel or static display

### 6. Portfolio
- Card grid (CSS columns / masonry-like)
- First card: blockquote style with heading "Explore Our Best Practice Area" + paragraph
- Remaining 4 cards: image + title + short description
- Use placeholder images

### 7. Second About / Our Service
- Same split layout as About section but image on left, text on right
- Heading: "We Providing high quality adviser service"
- Same button style

### 8. Blog Section
- Section heading: "Update From Blog" + subtitle
- 3 blog cards in a row
- Each: image, category + date tag, heading, comment + like counts (with icons)
- Use lucide-react for comment and heart icons

### 9. Footer Area
- 5 columns: Top Products, Quick Links, Features, Resources (4 links each), Newsletter
- Newsletter: text + email input + "subscribe" button
- White background, 140px vertical padding

### 10. Copyright Footer
- Dark (#303030) background bar
- Copyright text left side
- Social icons right side (Facebook, Twitter, Instagram, Skype)
- Social icons: 35px square, #ff7e5f border, fill on hover
- Footer links to https://www.componentdock.com/ branded "Component Dock"

## Design notes

### Fidelity priorities
- The hero headline MUST use Martel serif font (not Poppins). Import from Google Fonts.
- All pill buttons use gradient from #feb47b to #ff7e5f with border-radius 50px.
- The service section's gray background (#f7f7f7) is a key visual landmark.
- Service card arrow icons use green (#e3f1da) backgrounds with radius 5px.
- Copyright bar is #303030 — not the same as footer area (white).

### What to simplify
- Animated decorative floating dots: omit or use subtle CSS-only animations.
- Background banner image: use placeholder.
- Masonry card layout: use CSS columns or Tailwind grid.
- Carousel/slider: implement as simple static display or CSS-only scroll.
- Dropdown menus: use React state or CSS hover groups.

### Naming rules
- App folder: `apps/consultex/`
- Package: `@free-react-templates/consultex`
- CNAME: `consultex.free.componentdock.com`
- Homepage: `https://consultex.free.componentdock.com`
- No references to "Colorlib", "Bizcon", or "bizcon" in any app file.
