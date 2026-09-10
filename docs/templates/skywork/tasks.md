# Skywork (ColorLib Blueline) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-skywork`. Recreation name: **Skywork** (NEW name —
> the ColorLib source keeps its name "Blueline").

## Source mapping

- **ColorLib item:** "Blueline" (TEMPLATES.md line 913)
- **Source URL:** https://colorlib.com/wp/template/blueline/
- **Preview URL:** https://preview.colorlib.com/theme/blueline/ (REACHABLE,
  verified 2026-09-10 by direct curl — returns full HTML with Poppins font,
  Bootstrap 4 grid, `css/main.css` for all styles)
- **Recreation name:** Skywork (app folder `apps/skywork`)

## Reference research (done — do not redo)

### Preview DOM analysis (2026-09-10)

Fetched live preview HTML at `https://preview.colorlib.com/theme/blueline/`.
Sections identified in DOM order:

1. **Header** (`<header class="default-header">`): transparent absolute overlay,
   logo image + hamburger menu icon (`.lnr.lnr-menu`), nav links: Home, Generic, Elements
2. **Banner** (`<section class="banner-area relative">`): full-screen
   (735px height), background image (`header-bg.jpg`), centered text:
   h4 "INTRODUCING" + h1 "BLUELINE", white text with text-shadow
3. **Feature area** (`<section class="feature-area">`): white bg, 3 columns
   (col-lg-4), each with gradient number (h1: 01/02/03), uppercase h2 title,
   p description. Items: "Responsive View", "Multiple Layouts", "Flexible Design"
4. **Video area** (`<section class="video-area">`): video thumbnail with
   dark overlay + play button (play-btn.png), text below: "Great Modern Design /
   Build with usability in mind" with `<span>` highlight, lorem paragraph
5. **Service area** (`<section class="service-area">`): split layout —
   left col-lg-6 black bg with "Services We Offered" heading (white),
   right col-lg-6 white bg with 2x2 grid of "Graphics Design" cards (lnr icons)
6. **Latest works** (`<section class="latest-work-area">`): heading
   "Some Of our Latest Works", owl-carousel slider with `slider.jpg` images,
   2 slider rows (desktop / mobile fallback), active=opaque, inactive=semi-transparent
7. **Newsletter** (`<section class="subscription-area">`): heading
   "Subscribe for our Newsletter", email input (25px radius, #f9f9ff bg),
   "Get Started" primary-btn
8. **Contact** (`<section class="contact-area">`): split — left col-lg-3
   with contact-img.jpg, right col-lg-9 white form with name/email/message
   inputs + "Send Message" primary-btn.primary.circle
9. **Footer** (`<footer class="footer-area">`): black bg, copyright text,
   social icons (Facebook, Twitter, Dribbble, Behance) in #1e1e1e circles,
   hover = gradient

### CSS tokens (from css/main.css)

- **Font:** Poppins (Google Fonts), weights 100–700; body 14px/300
- **Gradient:** `linear-gradient(0deg, #3c50ca 0%, #77d5f7 100%)` — used on
  primary-btn, slider arrows, footer social hover
- **Primary solid:** `#2954c9` (used on links, list bullets, switches)
- **Banner h1:** 124px, weight 300, letter-spacing 25px, text-shadow
- **Feature h1 numbers:** 48px, gradient clip text, uppercase
- **Service area:** left #000, right #fff
- **Footer:** #000, social a bg #1e1e1e, social a hover = gradient
- **Body bg:** #f9f9ff

### Screenshot analysis

The preview screenshot (`blueline-free-fullscreen-business-website-template.jpg`)
shows a macOS browser frame with:
- Fullscreen blue gradient hero (deep blue top-left → cyan bottom-right)
- Geometric angled lighter blue overlay
- White circular logo + "Blueline" brand text (top-left, white)
- Hamburger menu icon (top-right, white)
- "INTRODUCING" small uppercase white text above large "BLUELINE"
- All white text against the vibrant blue gradient
- Minimalist, modern, tech-forward aesthetic

## Implementation tasks (section-by-section)

### 1. Scaffold (`apps/skywork/`)

- [ ] Copy simplest existing app as base (e.g. `apps/aurora/` or another small one)
- [ ] Rename package to `@free-react-templates/skywork`
- [ ] Update `public/CNAME` to `skywork.free.componentdock.com`
- [ ] Update `package.json` `"homepage"` to `https://skywork.free.componentdock.com`
- [ ] Add Poppins font link in `index.html`
- [ ] Run `npm install` at repo root for lockfile registration

### 2. Theme tokens (`src/index.css`)

- [ ] Set `@theme` with brand colors: `--color-brand-blue: #3c50ca`,
  `--color-brand-cyan: #77d5f7`, `--color-primary: #2954c9`
- [ ] Set body font to Poppins, body text #777, heading text #222
- [ ] Set surface colors: `--color-surface: #f9f9ff`, `--color-dark: #000`

### 3. Components (in order)

#### 3a. Navbar

- [ ] Absolute positioned transparent header
- [ ] Logo placeholder (picsum image or SVG placeholder)
- [ ] Hamburger menu icon (lucide `Menu` icon)
- [ ] Nav links (Home, Generic, Elements) — hidden on mobile, toggle via menu
- [ ] White text on transparent bg

#### 3b. Hero/Banner

- [ ] Full-viewport height section
- [ ] Background image via picsum (deterministic seed: `skywork-hero`)
- [ ] Gradient overlay (blue tones matching original)
- [ ] Centered text: "INTRODUCING" (small uppercase) + brand name "Skywork"
    (large, light weight, letter-spacing)
- [ ] Text shadow for depth
- [ ] Responsive text sizing

#### 3c. Features

- [ ] White background section
- [ ] 3-column layout (responsive: stacks on mobile)
- [ ] Each card: large gradient-colored number (01, 02, 03), uppercase title,
    description paragraph
- [ ] Numbers use gradient clip text effect (#3c50ca → #77d5f7)

#### 3d. Video

- [ ] Dark video thumbnail area with overlay (50% black)
- [ ] Centered play button icon (lucide `Play`)
- [ ] Text content below: "Great Modern Design / Build with usability in mind"
    with bold highlights
- [ ] Descriptive paragraph

#### 3e. Services

- [ ] Split layout: left half black bg, right half white bg
- [ ] Left: "Services We Offered" heading (white) + paragraph
- [ ] Right: 2x2 grid of 4 service cards
- [ ] Each card: icon (lucide), title, description, light border

#### 3f. Latest Works

- [ ] Centered heading "Some Of our Latest Works"
- [ ] Image carousel (use a simple CSS carousel or a lightweight solution)
- [ ] Active image: full opacity, border
- [ ] Inactive images: 50% opacity
- [ ] Navigation arrows

#### 3g. Newsletter

- [ ] White background, centered content
- [ ] Heading "Subscribe for our Newsletter"
- [ ] Subtext "We won't send any kind of spam"
- [ ] Email input with 25px border-radius, #f9f9ff bg
- [ ] "Get Started" primary-btn (gradient, pill shape)

#### 3h. Contact

- [ ] Split layout: left image, right form
- [ ] Left: contact image (picsum)
- [ ] Right: white form card with padding
- [ ] Fields: Name, Email, Message (textarea)
- [ ] "Send Message" button (gradient, pill shape)
- [ ] Form input borders: rgba(111,117,152,0.3)

#### 3i. Footer

- [ ] Black background
- [ ] Copyright text (white)
- [ ] Social icons: Facebook, Twitter, Dribbble, Behance (lucide equivalents)
- [ ] Icon buttons: #1e1e1e circle bg, hover = gradient
- [ ] Link to https://www.componentdock.com/

### 4. App composition (`src/App.tsx`)

- [ ] Import and compose all section components in order:
  Navbar → Hero → Features → Video → Services → LatestWorks → Newsletter → Contact → Footer

### 5. Tests

- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Verify 100% coverage
- [ ] Run `npm run verify:app skywork`

### 6. Docs & deploy

- [ ] No ColorLib references anywhere in `apps/skywork/`
- [ ] Footer links to componentdock.com
- [ ] Commit: `feat: add Skywork template (ColorLib Blueline)`
- [ ] PR + squash merge to main
- [ ] Surge deploy verified

## Fidelity notes

- The original uses Bootstrap 4 grid — recreate with Tailwind's grid/flex
- The original uses owl-carousel for latest works — use a simpler CSS/JS solution
- The original uses Linearicons and Font Awesome — replace with lucide-react
- The original banner uses a real photo (`header-bg.jpg`) — use picsum with
  a blue-toned seed for similar feel
- The contact image (`contact-img.jpg`) — use picsum
- The video thumbnail (`video-bg.jpg`) — use picsum with dark overlay
- All carousel/slider functionality must be pure React (no jQuery)
