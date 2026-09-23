# Plano — Implementation Tasks & Design Notes

Source: ColorLib "Interior 2" — https://colorlib.com/wp/template/interior-2/
Preview: https://preview.colorlib.com/theme/interior2/
New name: plano

## Task checklist (implementer)

1. **Scaffold app**: copy simplest existing app, rename package to
   `@free-react-templates/plano`, set CNAME to `plano.free.componentdock.com`,
   set homepage to `https://plano.free.componentdock.com`.
2. **Install deps**: run `npm install` at repo root to register workspace.
3. **index.html**: add Google Fonts `<link>` for Poppins (weights 400, 500, 600, 700).
4. **index.css / theme tokens**: define `@theme` block with:
   - `--color-primary: #001D38`
   - `--color-accent: #FFE8C3`
   - `--color-skills-bg: #F5FBFF`
   - `--color-footer-border: #334A60`
5. **Component tree** (src/App.tsx):
   - `<Navbar />`
   - `<HeroSlider />`
   - `<ServicesStrip />`
   - `<PortfolioGallery />`
   - `<SkillsSection />`
   - `<Testimonials />`
   - `<InstagramGrid />`
   - `<Footer />`
6. **Tests**: Vitest + RTL, 100% coverage, one describe per component.
7. **Build & verify**: `npm run verify:app plano`.

## Section-by-section design notes

### 1. Navbar (`Navbar.tsx`)
- Sticky header with white/transparent background.
- Logo: text "Plano." (bold, dark navy).
- Nav links: Home, Projects, Pages (dropdown: About, Project Details, Elements),
  Blog (dropdown: Blog, Single Blog), Contact.
- Right side: "Say Hello" link/button (white text, underlined on hover).
- Mobile: hamburger menu.

### 2. Hero Slider (`HeroSlider.tsx`)
- Full-width carousel (2 slides minimum).
- Each slide: background image (use picsum.photos/seed/plano-hero-1/1920/1080),
  dark navy overlay (::before, #001D38 at opacity 0.6).
- Content: large heading "Interior Design Solution For Your Business" (white,
  bold, ~48px) + "View Works" button (cream #FFE8C3 bg, navy text, 0px radius,
  padding ~14px 30px).
- Auto-transition between slides (CSS animation or simple interval).

### 3. Services Strip (`ServicesStrip.tsx`)
- 3-column equal-width grid, white background, full-width fluid container.
- Each column: title (h5, dark navy, bold), description paragraph (gray),
  large faded number below (01/02/03, very light gray, large font ~120px,
  low opacity).
- Services: Planing, Architecture, 3D Design.
- Column padding: ~65px 85px desktop, ~20px mobile.

### 4. Portfolio Gallery (`PortfolioGallery.tsx`)
- Container with "Our Works" section heading (h3, dark navy).
- 4 rows, alternating layout:
  - Row 1: image left (7 cols) + text right (5 cols): "White Blocks House"
  - Row 2: text left (5 cols) + image right (7 cols): "Art Gallery Design"
  - Row 3: image left (7 cols) + text right (5 cols): "Art Gallery Design"
  - Row 4: text left (5 cols) + image right (7 cols): "Office Space"
- Each text block: title (h3), description, "Details" outline button
  (border #001D38, 0px radius, padding 14px 47px).
- Images: use picsum.photos/seed/plano-work-N/800/600.

### 5. Skills Section (`SkillsSection.tsx`)
- Split layout: image left (6 cols, full bleed) + content right (5 cols).
- Background: #F5FBFF (very light blue-gray).
- Content: heading "Professional and creative mind" (h3, dark navy),
  description paragraph, 3 progress bars:
  - Architecture: 60%
  - 3D Design: 65%
  - Interior: 80%
- Progress bars: dark navy fill (#001D38), percentage label on right.
- "About Us" outline button at bottom.
- Image: picsum.photos/seed/plano-skills/800/800.

### 6. Testimonials (`Testimonials.tsx`)
- Dark overlay background image (use picsum.photos/seed/plano-testimonial/1920/800).
- Overlay: #001D38 at opacity 0.6.
- Carousel (auto-play) with slides containing:
  - Quote icon (use lucide-react Quote).
  - Testimonial paragraph (white text, centered).
  - Author: circular photo, name (h3), role (span, lighter color).
- Sample: Robert Thomson, Business Owner.

### 7. Instagram Grid (`InstagramGrid.tsx`)
- Centered "@Instagram" heading (h3, dark navy).
- 3-column image grid, equal width.
- Each image: square/rectangular, clickable, hover overlay.
- Images: picsum.photos/seed/plano-insta-N/600/600.

### 8. Footer (`Footer.tsx`)
- **Query CTA bar**: dark navy background (#001D38), two columns:
  - Left: "Have any project or query? Just say hello Mail Us" (white text)
  - Right: phone number "+10 673 563 629" + email link
  - Border bottom: 1px solid #334A60.
- **Footer top**: 4 columns — Address, Services, Company, Subscribe.
  - Address: address text, phone, email.
  - Services: Interior, Architecture, 3D Modeling links.
  - Company: About, Blog, Contact, Appointment links.
  - Subscribe: email input + "Subscribe" button + note text.
  - All text white on dark navy.
- **Copyright bar**: centered text, "Made with Component Dock" linking to
  https://www.componentdock.com/.
- Background: #001D38 throughout.

## Fidelity notes

- Match the exact section order as listed above — no additions, no reordering.
- Buttons are sharp-cornered (border-radius: 0px) — do NOT add rounding.
- The "Say Hello" in the header is a text link with underline, not a filled button.
- Progress bars in the skills section show percentage labels on the right side.
- The large numbers (01, 02, 03) in the services strip are decorative/watermark-style
  (very large font, low opacity, below the text content).
- The testimonial overlay covers the full section with a background image + dark tint.
- Instagram grid images should be equal-sized squares or near-squares.
