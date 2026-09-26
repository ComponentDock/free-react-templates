# Snaplens — Implementation Tasks

Source: ColorLib Fotograp (https://colorlib.com/wp/template/fotograp/)
Preview: https://preview.colorlib.com/theme/fotograp/

## Task Breakdown

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/amber or similar small app)
- [ ] Rename package to @free-react-templates/snaplens
- [ ] Set up CNAME → snaplens.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Add Josefin Sans font via Google Fonts in index.html
- [ ] Configure Tailwind theme with tokens:
  - accent: #7971ea
  - footer-bg: #333333
  - footer-text: #737373
  - footer-link: #999999
  - heading: #000000
  - body-text: #4d4d4d
  - border-color: #edf0f5

### Phase 2: Sections (in DOM order)

#### 2a. Navbar (Navbar.tsx)
- [ ] Logo "snaplens." with accent-colored dot
- [ ] Desktop nav links: Home, Photography, Services, About, Contact
- [ ] Dropdown for Photography with sub-menu items
- [ ] Social icons row (Facebook, Twitter, Instagram, YouTube) — desktop only
- [ ] Mobile hamburger toggle with slide-out menu
- [ ] Active link in accent color

#### 2b. Hero Cover (Hero.tsx)
- [ ] Full-width section with background image + dark overlay
- [ ] Parallax effect (use CSS background-attachment: fixed or a library)
- [ ] Centered headline: "I'm a Professional Photographer" + subtext
- [ ] AOS fade-up animation

#### 2c. Profile Picture (ProfilePic.tsx)
- [ ] Centered circular avatar image
- [ ] Links to About page/section
- [ ] Fade-in animation with delay

#### 2d. Specialties (Specialties.tsx)
- [ ] "My Specialties" heading with centered underline
- [ ] 2-column grid of 4 specialty cards
- [ ] Each card: side-by-side image + text (nature, portrait, wedding, food & drink)
- [ ] Responsive: stacks on mobile

#### 2e. Testimonials (Testimonials.tsx)
- [ ] Full-width parallax background section
- [ ] Owl Carousel or Swiper for testimonial cards
- [ ] Each card: avatar image, quote, author name
- [ ] Dark overlay on background

#### 2f. Photo Gallery (Gallery.tsx)
- [ ] "My Photography" heading with centered underline
- [ ] 3-column grid (6 items)
- [ ] Each item: image with gradient overlay, title, "5 photos / Category"
- [ ] Responsive: 1-col mobile, 2-col tablet, 3-col desktop

#### 2g. CTA Bar (CTA.tsx)
- [ ] Two-column layout: headline left, button right
- [ ] "Need a photographer?" heading
- [ ] "Contact Me" button — red (danger) with rounded modifier
- [ ] Responsive stacking on mobile

#### 2h. Footer (Footer.tsx)
- [ ] Dark background (#333333)
- [ ] 3-column layout: About, Navigations, Follow Me
- [ ] Navigation links (8 items in 2 sub-columns)
- [ ] Social icons: Facebook, Twitter, Instagram, LinkedIn
- [ ] Copyright line with Component Dock link
- [ ] Footer heading: white, text: #737373, links: #999999

### Phase 3: App Composition
- [ ] Compose all sections in App.tsx in DOM order
- [ ] Add AOS initialization in main.tsx
- [ ] Verify responsive behavior at all breakpoints

### Phase 4: Tests
- [ ] Write component tests for each section (100% coverage)
- [ ] Verify all interactive elements (nav toggle, CTA button, carousel)
- [ ] Test responsive rendering
- [ ] Run test:coverage — must be 100%

### Phase 5: Polish
- [ ] Run typecheck, lint, build
- [ ] Verify no ColorLib references in app code
- [ ] Self-review per docs/self-review.md
- [ ] Commit and push

## Design Notes

### Structure Order (from reference DOM)
1. Header/Navbar (transparent, absolute positioned)
2. Hero Cover (parallax bg + overlay + centered headline)
3. Profile Picture (centered avatar below hero)
4. My Specialties (2x2 grid with image+text cards)
5. Testimonials (parallax bg section with carousel)
6. My Photography (3-col gallery grid with hover overlays)
7. CTA Bar ("Need a photographer?" + Contact Me button)
8. Footer (dark, 3-col: about/nav/social + copyright)

### Fidelity Notes
- Josefin Sans is the primary font — load from Google Fonts
- #7971ea is the accent color (indigo-purple) — used on nav active, hover, form focus
- Buttons are square (border-radius: 0) except the CTA which adds .rounded
- The profile picture is a distinctive design element — circular, bridging hero and content
- Testimonials use a carousel (reference uses Owl Carousel — use Swiper for React)
- Gallery items have gradient overlays on hover with title/caption text
- AOS animations: fade-up for most elements, fade for testimonials
- Footer uses dark bg (#333) with muted text colors
- Parallax is CSS background-attachment: fixed or a library equivalent
