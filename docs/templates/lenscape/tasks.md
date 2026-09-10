# Lenscape — Implementation Tasks

## Template Info
- **Name:** lenscape
- **Source:** ColorLib "Bato" (https://colorlib.com/wp/template/bato/)
- **Preview:** https://preview.colorlib.com/theme/bato/
- **Category:** Photography Portfolio
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Tasks

### Phase 1: Scaffold
- [ ] Create `apps/lenscape/` by copying simplest existing app (e.g. `apps/abjure/`)
- [ ] Rename package to `@free-react-templates/lenscape`
- [ ] Update `public/CNAME` to `lenscape.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://lenscape.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` helper
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify `grep -c "free-react-templates/lenscape" package-lock.json` > 0

### Phase 2: Design Tokens (index.css)
- [ ] Add Google Fonts link in `index.html`: Karla (400,700) + Playfair Display (400,700)
- [ ] Define `@theme` tokens: brand-yellow (#F9CE00), sage-footer (#b7c2c2), text colors
- [ ] Configure Tailwind with custom colors for brand, footer, text

### Phase 3: Components (TDD)
- [ ] **Navbar.tsx** — centered logo + hamburger toggle
  - Logo text "Lenscape" centered
  - Hamburger icon on right (square 2px radius, black bg on hover)
  - Open/close toggle state
- [ ] **NavPanel.tsx** — off-canvas side panel
  - Full-height white panel slides in from left
  - Search input with yellow submit button
  - Nav links: Home, Work, About, Contact (active = brand yellow)
  - Thumbnail gallery (4 images)
  - Click outside or X to close
- [ ] **Hero.tsx** — full-height carousel with 3 slides
  - Each slide: 75/25 split (image left, text panel right)
  - Text panel: slide number (Playfair Display), tag (uppercase, letter-spacing 7px), heading, description, CTA
  - Carousel auto-advance every 5s
  - Next/prev navigation arrows
  - Images: picsum.photos/seed/lenscape-hero-N/1200/800
- [ ] **WorkGallery.tsx** — 6 alternating work entries
  - Each entry: 75/25 split alternating left/right
  - Odd entries: image right, text left (text-inner-right)
  - Even entries: image left, text right (text-inner-left)
  - Each has heading (link), description, "View Photo" CTA
  - Images: picsum.photos/seed/lenscape-work-N/1200/800
- [ ] **AboutSection.tsx** — 50/50 split with carousel
  - Left: full-height background image (picsum.photos/seed/lenscape-about/800/900)
  - Right: 3-slide carousel (About Us, My Story, Career)
  - Each slide: category title, heading, body text
  - Career slide: checklist with check icons (lucide-react Check)
- [ ] **ContactSection.tsx** — address + form
  - 3-column address block (MapPin, Phone, Mail, Globe icons from lucide-react)
  - Contact form: Name, Email, Message (textarea) + "Send Message" button
  - Yellow primary button styling
- [ ] **NewsletterSection.tsx** — subscribe form
  - Centered heading "Subscribe Newsletter"
  - Subtitle text
  - Email input + "Subscribe Now" yellow button
  - Dark overlay background
- [ ] **Footer.tsx** — 3-column footer
  - Office, Get in Touch, Social columns (centered text)
  - Social icons (lucide-react): Facebook, Twitter, Google, Dribbble
  - Copyright line + "Made with ❤ by Component Dock" linking to componentdock.com
  - Sage background (#b7c2c2)
- [ ] **App.tsx** — compose all sections in order:
  Navbar → Hero → WorkGallery → AboutSection → ContactSection → NewsletterSection → Footer
  (NavPanel rendered conditionally based on nav open state)

### Phase 4: Testing
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Test navbar toggle open/close
- [ ] Test hero carousel navigation
- [ ] Test work gallery renders 6 entries with alternating layout
- [ ] Test about carousel navigation
- [ ] Test contact form renders all fields
- [ ] Test newsletter form renders input + button
- [ ] Test footer renders 3 columns and Component Dock link
- [ ] Verify 100% coverage: `npm run test:coverage -- --workspace=apps/lenscape`

### Phase 5: Verification
- [ ] Run `scripts/verify-app.sh lenscape`
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] All tests pass at 100% coverage
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
