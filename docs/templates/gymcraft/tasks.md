# GymCraft — Implementation Tasks

Source: ColorLib "Activitar" → https://colorlib.com/wp/template/activitar/
Preview: https://preview.colorlib.com/theme/activitar/
New name: GymCraft (apps/gymcraft)

## Task Outline

### Phase 1: Project Setup
- [ ] Copy simplest existing app as base (e.g. apps/flexly or similar)
- [ ] Rename package to `@free-react-templates/gymcraft`
- [ ] Set `public/CNAME` to `gymcraft.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://gymcraft.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile registration

### Phase 2: Design Tokens (index.css)
- [ ] Add Google Fonts: Oswald (headings) + Nunito Sans (body) via `<link>` in index.html
- [ ] Define `@theme` tokens in `src/index.css`:
  - `--color-brand-primary: #e16521`
  - `--color-brand-secondary: #e4381C`
  - `--color-bg-dark: #151515`
  - `--color-text-white: #ffffff`
  - `--color-text-muted: #7b7b7b`
  - `--color-accent-gold: #ffca04`
  - `--font-heading: "Oswald", sans-serif`
  - `--font-body: "Nunito Sans", sans-serif`

### Phase 3: Components (Section by Section)

#### 3.1 Header/Navbar
- [ ] Absolute/transparent navbar overlaying hero
- [ ] Logo (left) + nav links (center) + social icons (right, using lucide-react)
- [ ] Nav links: Home (hero), About (about), Schedule (timetable), Gallery (classes), Blog (blog)
- [ ] Smooth scroll on click

#### 3.2 Hero Section
- [ ] Full-width carousel with 3 slides (use a lightweight carousel or CSS animation)
- [ ] Each slide: background image (picsum.photos/seed/gymcraft-hero-N/1920/1080) + centered text overlay
- [ ] Text: "Join Us Now" (h2, small) + "FITNESS & SPORT" (h1, large, Oswald)
- [ ] Auto-rotate every 5 seconds with fade transition

#### 3.3 Feature Section
- [ ] 3 equal-width cards in a row (flexbox/grid, 3 equal columns)
- [ ] Each card: full background image + dark overlay + bottom-aligned text
- [ ] Cards: "GROUP CLASSES", "PERSONAL TRAINING", "Sports Nutrition"
- [ ] Each has h3 title + "Read More" link
- [ ] Cards ~380px height

#### 3.4 About Section
- [ ] 2-column layout on dark `#151515` background
- [ ] Left: "WELCOME TO CROSSFIT" h2 + paragraph + "Learn More" button
- [ ] Right: image (picsum.photos/seed/gymcraft-about/600/400)
- [ ] Section padding: `spad` equivalent (~90px top/bottom)

#### 3.5 Classes Section
- [ ] "Choose Your Program" section title (centered)
- [ ] 4-column grid of class cards
- [ ] Cards: Crossfit Level 1, BootCamp, Energy Blast, Classic Body Balance
- [ ] Each: image + h4 title + short description + "Read More" link
- [ ] Dark background `#151515`

#### 3.6 Class Timetable
- [ ] "Classtime Table" heading (centered)
- [ ] Filter tabs: all class, crossfit, lunge ball, ppsr, walls, candy
- [ ] Full-width table: Mon–Sun columns, time-slot rows
- [ ] Filter functionality: clicking a tab shows/hides relevant rows
- [ ] Cells show class name + time range
- [ ] Dark background `#151515`

#### 3.7 Pricing Section
- [ ] "CHOOSE YOUR PRICING PLAN" heading
- [ ] Monthly/Yearly toggle switch (styled toggle)
- [ ] 3-column pricing cards: Normal ($55), Professional ($95, star highlight), Advanced ($165)
- [ ] Each card: plan name (h4) + price (h2 with $ span) + "Monthly" label + feature list (ul/li) + "Get Started" button
- [ ] Professional card has gold star accent
- [ ] Background image with dark overlay

#### 3.8 Choose Us Section
- [ ] "Why People Choose Us" heading + subtitle
- [ ] 3×2 grid of advantage items
- [ ] Items: Support 24/24, Our trainer, Personalized sessions, Our equipment, Classes daily, Focus on your health
- [ ] Each: icon (lucide-react) + h5 title + paragraph
- [ ] Dark background `#151515`

#### 3.9 Video Section
- [ ] Full-width parallax background image
- [ ] Dark overlay
- [ ] Centered "Gym In Downtown New York" h2
- [ ] Play button (circle) that opens a YouTube popup/modal
- [ ] Use a simple modal for the video embed

#### 3.10 Blog Section
- [ ] "From Our Blog" heading + subtitle
- [ ] Masonry-style grid of 4 blog cards
- [ ] Cards: background image + category tag + h5 title + dark overlay
- [ ] One card is an Instagram promo variant
- [ ] Dark background `#151515`

#### 3.11 CTA Section
- [ ] Full-width section with orange gradient background (`linear-gradient(45deg, #e16521, #e4381C)`)
- [ ] "Get Started Today" h2 + promotional text paragraph + "Join Now" button
- [ ] Compact padding (~38px vertical)

#### 3.12 Footer
- [ ] 4-column layout on dark `#151515` background
- [ ] Col 1: Logo + description paragraph + social icons (Facebook, Twitter, Google+, LinkedIn, Instagram via lucide-react)
- [ ] Col 2: "Our Blog" with 2 recent post links + dates
- [ ] Col 3: "Program" links: Bodybuilding, Running, Stretching, Weight Loss, Gym Fitness
- [ ] Col 4: "Get Info": phone (123) 456-7890, email, address
- [ ] Copyright bar: "© [year] All rights reserved | Made with ❤️ by Component Dock" with link to https://www.componentdock.com/

### Phase 4: Tests
- [ ] Write Vitest + RTL tests for each component
- [ ] Test carousel auto-rotation
- [ ] Test timetable filter functionality
- [ ] Test pricing toggle
- [ ] Test video popup modal
- [ ] Test nav smooth scroll
- [ ] Achieve 100% line/branch/function/statement coverage

### Phase 5: Verification
- [ ] `scripts/verify-app.sh gymcraft` passes (typecheck + lint + test:coverage + build)
- [ ] No ColorLib references in any app source file
- [ ] Footer links to componentdock.com
