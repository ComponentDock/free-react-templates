# Chalet — Implementation Tasks & Design Notes

## Task Outline

### Phase 1: Scaffold & Config

- [ ] Create `apps/chalet/` from template (copy `apps/aurora` or simplest existing)
- [ ] Update `package.json`: name `@free-react-templates/chalet`, homepage `https://chalet.free.componentdock.com`
- [ ] Add `public/CNAME` with `chalet.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()` (copy pattern from existing app)
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify `grep -c "free-react-templates/chalet" package-lock.json` returns >0

### Phase 2: Tailwind Theme & Global Styles

- [ ] Define design tokens in `src/index.css` `@theme`:
  - Colors: `--color-brand-gold`, `--color-brand-gold-hover`, `--color-text-primary`, `--color-text-muted`, `--color-bg-light`, `--color-bg-white`, `--color-bg-dark`, `--color-border-subtle`
  - Font family: `--font-family-sans: "Poppins", system-ui, sans-serif`
  - Border radius: `--radius-btn: 0.25rem`
  - Shadows: `--shadow-card`, `--shadow-focus-gold`
- [ ] Add Google Fonts link for Poppins in `index.html`
- [ ] Set base styles: body font, colors, smooth scroll

### Phase 3: Components (Section by Section)

#### Navbar

- [ ] `Navbar.tsx`: Fixed top, logo "Chalet.", nav links, mobile hamburger
- [ ] Smooth scroll to sections via `id` anchors
- [ ] Active section highlight on scroll (IntersectionObserver)
- [ ] Mobile drawer animation

#### Hero (Split-Screen)

- [ ] `Hero.tsx`: Two-column flex (lg+) / stacked (md-)
- [ ] Left: role label (uppercase, gold, letter-spacing), headline (split lines), dual CTAs
- [ ] Right: portrait placeholder (picsum seed `chalet-1`), gold bg
- [ ] Buttons: primary (gold bg), secondary (white bg), hover states per spec
- [ ] Copyright footer with Component Dock link

#### About

- [ ] `About.tsx`: Two-column (lg) / stacked
- [ ] Left: heading, 2-3 paragraphs
- [ ] Right: 3 stat cards with icons (lucide-react), counter animation

#### Services

- [ ] `Services.tsx`: 3-column grid (lg) / 2-col (md) / 1-col (sm)
- [ ] ServiceCard: icon, title, description, hover elevation

#### Skills

- [ ] `Skills.tsx`: Progress bars with labels and %
- [ ] Animate width on scroll (IntersectionObserver + CSS transition)

#### Portfolio

- [ ] `Portfolio.tsx`: Filter tabs + grid
- [ ] PortfolioItem: image, category badge, title, hover overlay with link
- [ ] Filter logic (client-side state)
- [ ] 6 items, placeholder images (picsum seeds `chalet-2` through `chalet-7`)

#### Testimonials

- [ ] `Testimonials.tsx`: Carousel (embla-carousel-react or simple state)
- [ ] TestimonialCard: avatar, quote, name, role
- [ ] Nav arrows + dot indicators

#### Blog

- [ ] `Blog.tsx`: 3-column grid (lg) / 2-col (md) / 1-col (sm)
- [ ] BlogCard: featured image, date/category, title, excerpt, read more link
- [ ] Placeholder images (picsum seeds `chalet-8` through `chalet-10`)

#### Contact

- [ ] `Contact.tsx`: Two-column (form + info)
- [ ] Form: Name, Email, Subject, Message, Submit (react-hook-form + zod)
- [ ] Validation: required, email format
- [ ] Success/error toast states
- [ ] Info cards: address, phone, email with icons

#### Footer

- [ ] `Footer.tsx`: Copyright + "Made with Component Dock" link
- [ ] No Colorlib references

### Phase 4: App Assembly & Polish

- [ ] `App.tsx`: Compose all sections in order with proper `id` anchors
- [ ] Ensure all sections have correct vertical padding (py-20 lg:py-24)
- [ ] Verify scroll behavior, animations, responsive breakpoints
- [ ] Add `data-testid` attributes for test queries

### Phase 5: Tests (TDD - RED first)

- [ ] Write component tests for each section (Vitest + Testing Library)
- [ ] Test rendering, interactions, responsive classes, accessibility
- [ ] Achieve 100% coverage on app code (exclude main.tsx, configs, CSS)

### Phase 6: Verification & Deploy Prep

- [ ] Run `scripts/verify-app.sh chalet` (typecheck + lint + test:coverage + build + knip + fallow)
- [ ] Fix any failures
- [ ] Build succeeds, output in `dist/`
- [ ] Ready for PR

## Design Notes (Fidelity Reference)

### Visual Design Summary (from screenshot + live preview)

**Overall aesthetic:** Clean, modern, professional personal portfolio. Split-screen hero is the signature. Gold accent (#d5c455) provides warmth against white/light-gray. Poppins gives contemporary sans-serif feel. Generous whitespace, clear hierarchy.

**Color palette in practice:**

- Gold `#d5c455`: Primary buttons, accent lines, icons, stats numbers, portfolio category badges, testimonial quote marks, form focus rings
- White `#fff`: Secondary buttons, card backgrounds, hero left panel
- Dark `#212529`: All headings, body text, secondary button text
- Muted `#6c757d`: Subtext, meta, placeholder text
- Light gray `#f8f8f8`: Alternate section backgrounds (About, Skills, Blog)
- Dark `#222222`: Footer background areas

**Typography details:**

- Role label: `text-xs sm:text-sm uppercase tracking-wider font-medium text-brand-gold`
- Headlines: `text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary`
- Body: `text-base lg:text-lg leading-relaxed text-text-primary`
- Buttons: `text-sm uppercase tracking-wider font-semibold`
- Stat numbers: `text-3xl sm:text-4xl font-bold text-brand-gold`
- Section headings: `text-3xl sm:text-4xl font-bold text-text-primary` + gold accent line

**Button specs:**

- Primary: `bg-brand-gold text-white hover:bg-transparent hover:text-brand-gold hover:border-brand-gold border-brand-gold rounded-btn px-6 py-3 transition-colors`
- Secondary: `bg-white text-text-primary border-white hover:bg-transparent hover:text-white hover:border-white rounded-btn px-6 py-3 transition-colors`

**Spacing rhythm:**

- Section padding: `py-20 lg:py-24` (80px → 96px)
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`
- Grid gap: `gap-6 lg:gap-8`

**Border radius:** Consistently `rounded-[4px]` (0.25rem) for buttons, cards, inputs. No fully-rounded (pill) elements.

**Shadows:** Subtle. Cards: `shadow-sm hover:shadow-lg transition-shadow`. Focus rings: `focus:ring-2 focus:ring-brand-gold/25 focus:ring-offset-2`.

**Animations:**

- AOS (Animate On Scroll) style: fade-up on section enter
- Progress bars: width transition 1.5s ease-out
- Portfolio hover: overlay fade-in, scale(1.02) on image
- Button transitions: 200ms color/bg
- Carousel: slide transition 300ms

**Imagery strategy (picsum seeds):**

| Section            | Seeds                  | Aspect         | Notes                                      |
| ------------------ | ---------------------- | -------------- | ------------------------------------------ |
| Hero portrait      | chalet-1               | 3:4 (portrait) | Right panel fill                           |
| Portfolio (6)      | chalet-2 to chalet-7   | 3:2            | Grid thumbs                                |
| Blog (3)           | chalet-8 to chalet-10  | 16:9           | Featured images                            |
| Testimonials (3)   | chalet-11 to chalet-13 | 1:1            | Circular avatars                           |
| About stats icons  | —                      | —              | lucide-react: Briefcase, FolderOpen, Users |
| Services icons     | —                      | —              | lucide-react: Layout, Code, PenTool        |
| Contact info icons | —                      | —              | lucide-react: MapPin, Phone, Mail          |

**Responsive behavior (from Bootstrap 5 breakpoints):**

- Hero: side-by-side at `lg` (992px+), stacked at `md` and below
- Services: 3-col `lg`, 2-col `md`, 1-col `sm`
- Portfolio: 3-col `lg`, 2-col `md`, 1-col `sm`
- Blog: 3-col `lg`, 2-col `md`, 1-col `sm`
- Testimonials: 1 visible at all sizes (carousel)
- Contact: 2-col `lg+`, stacked `md-`
- Navbar: hamburger at `md` (992px), expanded at `lg+`

**Accessibility checklist:**

- Semantic landmarks: header, main, section[aria-labelledby], footer
- All images: descriptive alt text
- Forms: label[htmlFor] + input[id], aria-describedby for errors
- Focus: visible ring on all interactive (buttons, links, inputs)
- Color contrast: gold on white = 3.1:1 (AA large text only) — use gold on dark for body, white on gold for buttons
- Reduced motion: respect `prefers-reduced-motion`

**Component Dock link:** Footer must say "Made with Component Dock" linking to `https://www.componentdock.com/` — no Colorlib mention anywhere in app code.

**No ColorLib in app code:** Provenance only in spec, TEMPLATES.md, PR. Replace any "template by Colorlib" with design-token comments.
