# Tandem — Implementation Tasks

Source: ColorLib Dup (https://colorlib.com/wp/template/dup/)
Preview: https://preview.colorlib.com/theme/dup/

## Design Notes

- **Boxed layout with crimson frame**: The body background is solid crimson (#e0003b). The main content wrapper (`.dup-body-wrap`) has white background, 50px margin on each side, and a `box-shadow: 0 0 50px rgba(0,0,0,0.2)`. Replicate as a white centered container with margin and shadow over a crimson body.
- **Crimson overlay on background images**: Studio, video, carousel, and footer sections all use background images with a `rgba(224, 0, 59, 0.8)` overlay — essentially a deep crimson tint over the image. Use a pseudo-element or absolute-positioned overlay div.
- **Pill-shaped primary button**: `.primary-btn` has asymmetric padding (30px left, 60px right), pill-shaped, transparent bg by default with crimson text. On hover: crimson fill, white text, and the arrow icon (absolutely positioned) slides right from right:35px to right:20px. The white variant has white border/text, hover fills white with crimson text.
- **Background images**: Studio area, video area, carousel area, and footer all have full-bleed background images. Use picsum.photos placeholders with deterministic seeds. Apply the crimson overlay on top.
- **Progress bars**: Light background (#f9fcff) with crimson (#e0003b) fill bar, 5px height. Each bar labeled with software name above it.
- **Achievement cards**: 6 cards in a 3×2 grid. Each has a light background (#f9fcff) with a centered Font Awesome icon and title below. Use lucide-react icons as substitutes.
- **Footer**: Background image with crimson overlay. Contains subscription form (email input + button), 4-column links, and a bottom bar with copyright + social icons.

## Section-by-Section Tasks

### 1. App scaffold
- [ ] Create `apps/tandem/` from simplest existing app
- [ ] Rename package to `@free-react-templates/tandem`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `public/CNAME` with `tandem.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Add Poppins font link to `index.html` (weights 300, 500, 600)
- [ ] Configure Tailwind `@theme` with brand colors (#e0003b, #df003a, #222222, #777777, #f9fcff)

### 2. Layout shell
- [ ] Body: crimson (#e0003b) background, Poppins font, margin on the content wrapper
- [ ] Main wrapper: white background, max-w centered, box-shadow for framed effect
- [ ] Header component with logo + nav links (Home, Generic, Elements) + hamburger menu

### 3. Banner/Hero
- [ ] White background, 800px min-height on desktop
- [ ] Two-column layout: text left, hero image right
- [ ] Headline "Sleek and Clean with same perspective"
- [ ] Description paragraph
- [ ] "Get Started" pill button with arrow icon (use lucide-react ArrowRight)
- [ ] Button hover: fill crimson, text white, arrow slides right

### 4. Studio Area
- [ ] Full-bleed background image (picsum) with crimson overlay (80% opacity)
- [ ] Two-column layout: photo left (col-md-4), text right (col-md-8)
- [ ] "Green Forest Studio" heading, description, "View More" CTA

### 5. Achievement Area
- [ ] White background
- [ ] Two-column layout: text left (col-lg-5), 6-card grid right (col-lg-6)
- [ ] "Our Achievements" heading + description + "View More" button
- [ ] 3×2 grid of achievement cards with lucide-react icons + titles
- [ ] Cards: Behance Review, Dribbble Shots, Youtube Subscribe, Github Push, Offline Trophy, Cash Prizes

### 6. Video Area
- [ ] Full-bleed background image with crimson overlay
- [ ] Centered play button (use lucide-react PlayCircle or similar)
- [ ] "Everyone wants to be unique" heading in white

### 7. Skill Area
- [ ] White background
- [ ] Two-column layout: text left, progress bars right
- [ ] "Our Tools Expertness" heading + description + "View More" button
- [ ] 4 labeled progress bars: Photoshop (70%), Illustrator (60%), Indesign (50%), After Effects (80%)
- [ ] Bar style: crimson fill on light background, 5px height

### 8. Carousel Area
- [ ] Full-bleed background image with crimson overlay
- [ ] Carousel of slides (use simple state-based carousel or CSS scroll-snap)
- [ ] Each slide: image left, text right (heading, subtitle, description, "View More" white-variant button)
- [ ] White-variant button: white border, white text, hover fills white with crimson text

### 9. Contact Area
- [ ] White background
- [ ] 4-column layout (col-lg-3 col-md-6): Office Address, Phone, Email, Support
- [ ] Each column: heading (h6) + paragraph with contact details
- [ ] Links for phone numbers and emails

### 10. Footer Widget Area
- [ ] Full-bleed background image with crimson overlay
- [ ] Subscription area: centered email input + "Subscribe now" button
- [ ] 4-column footer links: About Agency, Navigation Links (×2), Instafeed
- [ ] Footer bottom: copyright text left, social icons right (Facebook, Twitter, Dribbble, Behance via lucide-react)
- [ ] Component Dock attribution link in footer
