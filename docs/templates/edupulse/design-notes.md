# EduPulse — Design Notes & Task Outline

## Source Mapping

| Field | Value |
|-------|-------|
| ColorLib source | Etrain |
| Source slug | `etrain` |
| Preview URL | https://preview.colorlib.com/theme/etrain/ |
| New name | edupulse |
| App path | `apps/edupulse` |

## Design Reference Analysis

### Visual Aesthetic
- Clean, professional online education platform
- Light gray background (#f7f7f7) for hero and footer
- White cards for course and blog items
- Warm gradient accent (red #ee390f → gold #f9b700) on CTAs and stats bar
- Navy blue (#0c2e60) as primary text/headings color
- Orange (#ff663b) as section title underline accent
- Pill-shaped (50px radius) primary and secondary buttons
- Small square-corner (4px) category/tag badges in orange

### Typography
- Headings: Poppins (600-700 weight), navy #0c2e60
- Body: Roboto (400 weight), gray #888888
- Line height: 1.929 for body text, 1.222 for h2
- Body font size: 14px

### Section-by-Section Notes

1. **Header/Navbar**
   - Sticky, white background, logo left, nav center-right
   - Pages dropdown with sub-items (Pricing, FAQ, Instructors, Testimonials, Dashboard, Elements)
   - Login button: `.btn_1` gradient pill, desktop only
   - Mobile: hamburger collapse

2. **Banner/Hero**
   - Background image (fallback solid #f7f7f7 on mobile)
   - Left-aligned text, 6-column width
   - h5 subtitle in teal/accent color, h1 bold heading
   - Two CTAs side by side: gradient pill + outline pill
   - Height: 880px desktop, 700-750px mobile

3. **Features**
   - 4-column grid (1 text + 3 cards)
   - Left column: heading + paragraph + button
   - Cards: icon (themify icon) + title + description
   - No card background (clean flat style)
   - Hover: icon span gets gradient background

4. **Learning/About**
   - 7/5 split: image left, text right
   - "About us" h5 label above heading
   - Checklist with pencil/ruler icons (ti-pencil-alt, ti-ruler-pencil)
   - "Read More" button

5. **Counter/Stats**
   - Full-width gradient background: #ee390f → #f9b700
   - 4 equal columns with large number + label
   - Numbers use counter animation (JS)

6. **Featured Courses**
   - Section header with "popular courses" subtitle + "Featured Courses" h2
   - Orange underline accent below h2
   - 3-column card grid
   - Each card: image, category `.btn_4` tag, difficulty badge, price, title, description, duration+enrollment, instructor avatar+name, star rating (1-5 stars as SVG icons)

7. **Advanced Platform Features**
   - 6/6 split (reversed from About): text left, image right
   - "Our platform" label, heading, description paragraph
   - 2 feature items in 2-column sub-grid (icon + title + text)

8. **Testimonials**
   - Full-width (container-fluid)
   - Section title + "Student Success Stories"
   - Swiper carousel with pagination dots
   - Each slide: 2 testimonials side by side
   - Each testimonial: quote paragraph, name (h4), role (h5), circular photo

9. **Blog**
   - 3-column card grid
   - Each card: image, `.btn_4` category tag, title (h5), excerpt (p), comments count + likes count in list

10. **Footer**
    - Light gray (#f7f7f7) background, 100px top padding
    - 3-column layout: logo+description | newsletter form+social icons | contact info
    - Newsletter: email input + subscribe button (`.btn_1` style)
    - Social icons: Facebook, Twitter, Instagram, Email
    - Bottom copyright bar (full-width, centered text)
    - MUST replace Colorlib attribution with Component Dock link

## Implementation Tasks

- [ ] Scaffold `apps/edupulse/` from simplest existing app
- [ ] Rename package to `@free-react-templates/edupulse`
- [ ] Set up `index.html` with Google Fonts (Poppins + Roboto)
- [ ] Create `src/index.css` with Tailwind theme tokens
- [ ] Implement `src/App.tsx` composing all sections
- [ ] Build `src/components/Navbar.tsx` — sticky nav with dropdown
- [ ] Build `src/components/Hero.tsx` — banner with gradient CTAs
- [ ] Build `src/components/Features.tsx` — 4-col feature grid
- [ ] Build `src/components/About.tsx` — 2-col image+text
- [ ] Build `src/components/Stats.tsx` — gradient counter section
- [ ] Build `src/components/Courses.tsx` — 3-col course cards
- [ ] Build `src/components/Platform.tsx` — reversed 2-col features
- [ ] Build `src/components/Testimonials.tsx` — carousel with 2-up slides
- [ ] Build `src/components/Blog.tsx` — 3-col blog cards
- [ ] Build `src/components/Footer.tsx` — 3-col footer + copyright
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Ensure 100% coverage
- [ ] Run `scripts/verify-app.sh edupulse`
- [ ] Create `public/CNAME` with `edupulse.free.componentdock.com`
