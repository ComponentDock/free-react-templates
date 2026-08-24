# Tasks & Design Notes: Craftsman (Personal Portfolio)

## Source & Mapping

- **ColorLib Source:** Schmidt (`https://colorlib.com/wp/template/schmidt/`)
- **New Template Name:** `craftsman` (`@free-react-templates/craftsman`)
- **Preview URL:** https://preview.colorlib.com/theme/schmidt/
- **Deploy Domain:** `craftsman.free.componentdock.com`

## Design & Structure Notes

1. **Navbar:**
   - Floating transparent navbar (position absolute, top 20px).
   - Brand text "Schmt." in bold white, z-index 3.
   - Nav links: Home, About, Services, Experiences, Works, Blog, Contact.
   - Active link color: gold `#d5c455`.
   - Mobile: dark bg (`#222`), relative position, collapsible.
   - White dropdown shadow: `0px 5px 25px -2px rgba(0,0,0,0.06)`.

2. **Hero (Home page only):**
   - Full viewport height, background image (center, cover, fixed).
   - Right-half gold overlay: `width: 50%; background: #d5c455`.
   - Left side: text content (subheading + heading + buttons).
   - Subheading: uppercase, gold `#d5c455`, font-weight 700, letter-spacing 1px.
   - Heading: "I'm John Schmidt", dark `#222`, font-size 80px, font-weight 700.
   - Two CTA buttons side by side: "More About Me" (gold primary) + "Hire Me" (white).
   - Right side: person image carousel (two images).
   - Copyright line at bottom: small, muted `rgba(0,0,0,0.4)`.

3. **Page Hero (Inner pages):**
   - Short hero banner (300px height), no overlay, centered breadcrumb text.
   - Page title as `.bread` (font-size 40px, font-weight 600).

4. **About Page:**
   - 2-column: left = person image, right = bio heading + info grid + "Download CV" button.
   - Info grid: Name, DOB, Address, Zip, Email, Phone (2-col layout).
   - Stats counters row: 4 items (5000 Happy Clients, 1200 Projects Done, 500 Cups of Coffee, 587 Working Hours).
   - Skills section: progress bars for 7 skills (Photoshop 90%, Figma 95%, Illustrator 90%, JS 85%, HTML5 95%, CSS3 90%, WordPress 70%).
   - Testimonials carousel at bottom.

5. **Services Page:**
   - 4-column grid, 8 service cards (icon + title + description).
   - Each card: white bg, box-shadow, icon in gold `#d5c455` (70px font-size).
   - Services: UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual Editor, IT Consultancy.
   - Pricing section: 4 tiers (Personal $49, Professional $79, Medium Business $109, Gigantic Business $149).

6. **Experiences Page:**
   - 2-column layout: Education (left), Work Experience (right).
   - Each item: date badge + title + description paragraph.
   - Education: 3 entries (Master Degree, Bachelor's Degree, Diploma).
   - Work: 3 entries (Art Director, Wordpress Developer, UI/UX Designer).

7. **Works/Portfolio Page:**
   - 3-column grid, 9 project cards.
   - Each card: image + gold overlay on hover with title + category.
   - Pagination at bottom.

8. **Blog Page:**
   - Light gray (`#f8f8f8`) background section.
   - 4-column grid, 8 blog entry cards.
   - Each: image + metadata (author, date, comments) + title + excerpt.

9. **Contact Page:**
   - Light gray background, split layout.
   - Left: contact form (Name, Email, Subject, Message).
   - Right: contact info boxes (Address, Email, Phone) + social links.
   - Info boxes with icon + text, 3-column layout.

10. **Footer:**
    - Copyright + Component Dock link (`https://www.componentdock.com/`).

## Section Order (single-page React approach)

Since this is a SPA recreation, combine key sections from all pages into a single scrolling layout:

1. Navbar (fixed/floating)
2. Hero (full viewport, home style)
3. About (bio, info, stats, skills)
4. Services (8 cards + pricing)
5. Experiences (education + work timeline)
6. Works/Portfolio (9-item grid)
7. Blog (8 cards)
8. Contact (form + info)
9. Footer

## Implementation Checklist for Implementers

- [ ] Create `apps/craftsman` workspace (copy structure from a clean reference app).
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Set `public/CNAME` to `craftsman.free.componentdock.com`.
- [ ] Build components: `Navbar`, `Hero`, `About`, `Services`, `Experiences`, `Works`, `Blog`, `Contact`, `Footer`.
- [ ] Use gold `#d5c455` as the brand color in Tailwind `@theme` config.
- [ ] Use `Poppins` font via Google Fonts `<link>` in index.html.
- [ ] Use picsum.photos for all image placeholders with deterministic seeds.
- [ ] Write Vitest unit tests covering all components with 100% coverage.
- [ ] Run `scripts/verify-app.sh craftsman`.
