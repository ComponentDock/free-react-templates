# Boardroom — Implementation Tasks

Recreation of ColorLib "Bbs" → new name `boardroom`

## Section-by-section build order

### 1. Project scaffolding
- [ ] Copy simplest existing app as base (e.g. apps/bold)
- [ ] Rename package to `@free-react-templates/boardroom`
- [ ] Set `public/CNAME` to `boardroom.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://boardroom.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. Theme tokens (index.css)
- [ ] Add `@theme` block with brand color `--color-primary: #f58e9a`
- [ ] Add purple accent `--color-purple: #7034db`
- [ ] Add alt section bg `--color-section-alt: #f9f9ff`
- [ ] Import Google Fonts: Poppins (300, 500, 600, 900)

### 3. Components (build order)

#### 3a. Navbar
- [ ] Logo placeholder (left)
- [ ] Nav links: Home, Generic, Elements (right)
- [ ] Hamburger menu icon (mobile toggle)
- [ ] Sticky header with transparent → solid bg on scroll

#### 3b. Hero/Banner
- [ ] Full-width section with background image (picsum seed)
- [ ] Centered headline: "we're Creative" (uppercase, large, white)
- [ ] "Get Started" pill button (border-radius 20px, primary pink)

#### 3c. Featured Area
- [ ] 2-column grid, 4 cards
- [ ] Each card: icon (lucide-react) + title + description
- [ ] White background, proper spacing

#### 3d. About Area
- [ ] 3-column layout: title + image + tabbed content
- [ ] Two tabs: History / Mission & Vision
- [ ] Tab switching via useState
- [ ] Light lavender bg (#f9f9ff)

#### 3e. Video Area
- [ ] Background image with purple gradient overlay
- [ ] Centered heading + play button + paragraph
- [ ] Purple gradient: radial-gradient from #7539dd to #7034db

#### 3f. Blog Area
- [ ] 3-column grid of blog cards
- [ ] Each card: image thumbnail (picsum seed) + title + description
- [ ] White background

#### 3g. Story Area
- [ ] Full-width purple background (#7034db)
- [ ] White heading "Crafting Our Experiences"
- [ ] White paragraph text

#### 3h. Newsletter/Subscription
- [ ] Centered section with heading "Subscribe Newsletter"
- [ ] Email input field + "Get Started" pill button
- [ ] Light lavender bg (#f9f9ff)

#### 3i. Footer
- [ ] Dark bg (#333333)
- [ ] Nav links centered
- [ ] Social icons (Facebook, Twitter, Dribbble, Behance) via lucide-react
- [ ] Copyright line
- [ ] Link to https://www.componentdock.com/

## Design notes

- **Primary accent:** #f58e9a (pink) — buttons, links, interactive elements
- **Purple sections:** video overlay + story area use #7034db
- **Button style:** pill-shaped (border-radius 20px), pink bg, white text, hover darkens
- **Font:** Poppins throughout, body weight 300, headings 500-600
- **Section rhythm:** alternating white / #f9f9ff backgrounds for light sections
- **Images:** use picsum.photos/seed/boardroom-{1..8}/800/600 for deterministic placeholders
- **Icons:** use lucide-react (e.g. Palette, ShieldCheck, LifeBuoy, Package for features)
