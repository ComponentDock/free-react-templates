# Timeless (ColorLib Classic) — Implementation Tasks

**Source:** https://colorlib.com/wp/template/classic/
**Preview:** https://preview.colorlib.com/theme/classic/
**New name:** timeless
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section-by-section task outline

### 1. Scaffold app
- [ ] Copy simplest existing app as template
- [ ] Rename package to `@free-react-templates/timeless`
- [ ] Set up `public/CNAME` → `timeless.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Register Google Fonts in index.html: Roboto, Montserrat, Satisfy
- [ ] Set up Tailwind theme tokens in `index.css` (brand gradient, text colors, button styles)

### 2. Navbar
- [ ] Create `Navbar.tsx`
- [ ] Fixed position, transparent bg → dark on scroll (use IntersectionObserver or scroll listener)
- [ ] Brand logo text "Timeless" (or placeholder)
- [ ] Primary menu: Home, Services, Portfolio, Team, Price, Blog, Contact
- [ ] Help menu: user icon, search toggle, language selector (optional/simplified)
- [ ] Active/hover: white bottom border

### 3. Hero section
- [ ] Create `Hero.tsx`
- [ ] Full-viewport height, background image (picsum.photos placeholder)
- [ ] Dark overlay: `bg-black/40`
- [ ] Left-aligned content: headline, quote, "Contact Now" pill button
- [ ] Animated dot accent (blue gradient circle)
- [ ] Pill button: `rounded-full`, brand gradient bg, 3D shadow effect

### 4. About section
- [ ] Create `About.tsx`
- [ ] Two-column: text left (heading, paragraph, "Learn More" pill), image right
- [ ] Responsive: stack on mobile
- [ ] Device mockup image → placeholder image

### 5. Video + Why Choose Us
- [ ] Create `WhyChooseUs.tsx`
- [ ] Gray bg (`bg-[#f9f9f9]`)
- [ ] Left: video thumbnail placeholder with play button overlay
- [ ] Right: "Why Choose Us?" heading + 3 experience stat rows

### 6. Services grid
- [ ] Create `Services.tsx`
- [ ] 3×2 grid of feature boxes
- [ ] Each box: icon (lucide-react), heading, description, "Read More" link
- [ ] 6 items: Unique Design, Clean Layout, Well Responsive, Pro Developing, Well Documented, Quick Marketing

### 7. Skills section
- [ ] Create `Skills.tsx`
- [ ] Gray bg, two-column: text + charts left, illustration right
- [ ] 6 circular percentage charts (CSS circle + counter animation)
- [ ] Labels: WebDesign 95%, Coding 85%, Developing 90%, JS 95%, Apps Design 85%, Graphics Script 90%

### 8. Portfolio
- [ ] Create `Portfolio.tsx`
- [ ] 7 filter tabs (All, Graphics, UI/UX, Web Design, Coding, Developing, Photography)
- [ ] 4×2 grid of cards with hover overlay
- [ ] Filter functionality with state
- [ ] Each card: image (picsum), hover: title + link

### 9. Team
- [ ] Create `Team.tsx`
- [ ] 4-member grid
- [ ] Each card: team photo, hover overlay with name, role, 3 skill bars, 4 social icons

### 10. Pricing
- [ ] Create `Pricing.tsx`
- [ ] Gray bg, Monthly/Yearly tab switcher
- [ ] 4 pricing cards: Basic $10, Premium $50, Business $80, Ultimate $100
- [ ] Premium highlighted as active
- [ ] Each card: name, price, feature list, "Purchase Now" pill button

### 11. Blog
- [ ] Create `Blog.tsx`
- [ ] "Latest Blog" heading, 3 cards
- [ ] First card: featured (larger, with image + date + title + excerpt)
- [ ] Other two: smaller side-by-side

### 12. Counters
- [ ] Create `Counters.tsx`
- [ ] Gray bg, 4 stat boxes
- [ ] Each: icon, title, animated count number
- [ ] Stats: Project Complete 1172, Happy Clients 1000, Total Clients 1200, Awards 1172

### 13. Contact
- [ ] Create `Contact.tsx`
- [ ] "Contact Now" heading
- [ ] Left: form (name, phone, email, subject, message, "Send Now" button)
- [ ] Right: contact info (address, phone, email) + social icons

### 14. Footer
- [ ] Create `Footer.tsx`
- [ ] 5 columns: brand description + social, News, Company, Resources, Solutions
- [ ] Copyright bar at bottom
- [ ] Link to Component Dock

### 15. App composition
- [ ] Create `App.tsx` composing all sections in order
- [ ] Verify responsive behavior
- [ ] Run tests for 100% coverage
- [ ] Verify build passes

## Design fidelity notes

- **Pill buttons** are the signature: `rounded-full` + layered 3D box-shadow.
  Original uses `0 2px 0 0 rgba(…,0.5), 0 4px 0 0 rgba(…,0.5)`. Replicate
  with Tailwind `shadow-[0_2px_0_0_rgba(…,0.5),0_4px_0_0_rgba(…,0.5)]`.
- **Brand gradient** `#a1c4fd → #c2e9fb` is soft blue-cyan, NOT the harsh
  blue Bootstrap uses. Apply via `bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb]`.
- **Skill charts** are CSS circles with centered numbers. Use Tailwind
  `rounded-full` + `bg-conic-gradient` or SVG circles.
- **Portfolio filter** needs client-side state (no routing). Simple array
  filter by tag.
- **Counter animation** — use `IntersectionObserver` to trigger count-up
  animation when section enters viewport.
- **Navbar scroll behavior** — fixed position, transparent → semi-transparent
  dark bg on scroll.
