# Template: LearnField (University Education & Academic Programs)

## Purpose

**LearnField** is a single-page university education & academic programs template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Universityedu" free template (source: https://colorlib.com/wp/template/universityedu/), built under a DIFFERENT name (**LearnField**), using the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a comprehensive higher-education layout featuring a top announcement bar with countdown timer, sticky navigation header with dropdown menus and contact/social links, an immersive header slider/hero banner, a comprehensive teaching approach section, a program offering grid, an essential resources split section, top stories / latest news cards, a partner logos marquee, a trusted-by stats banner, and a rich multi-column footer with newsletter subscription.

## Design Tokens

- **Brand Primary Color**: `#007A5C` (Emerald green used for buttons, active navigation, badges, scroll-up button, and primary highlights).
- **Brand Secondary / Accent Color**: `#F15B43` (Coral/orange used for hover states, key links, bullets, and accent badges).
- **Text & Heading Colors**:
  - Headings: `#32404D` (Dark slate gray, font-family "Chivo", weight 500/900).
  - Body Text: `#5D646A` (Muted gray, font-size 16px, line-height 30px).
  - Section description/meta: `#777777`.
- **Font Family**: `"Chivo", sans-serif` (loaded via Google Fonts).
- **Section Backgrounds**:
  - Hero & Default: `#fff` (White).
  - Alternate Section Background (`.section-bg`): `#FCF2EB` (Warm cream/peach).
  - Footer & Top Bar / Gray BG (`.gray-bg`): `#F1FBFF` (Light soft blue/gray).
- **Button & UI Shapes**:
  - Buttons (`.browse-btn`, `.btn_1`): Rounded with smooth padding, hover transitions.
  - Scroll-to-top button: Circular `#007A5C` with white arrow icon.

## Gherkin Requirements & Scenarios

### Feature 1: Top Announcement Bar & Header

- **Scenario**: User views announcement banner
  - **Given** the page is loaded
  - **Then** the user sees an announcement text ("ENDS TOMORROW: Join Teachable for $4,800 in bonus content") and a live countdown timer (Days, Hours, Minutes, Seconds) with a "Learn More" button.

### Feature 2: Navigation Bar & Sticky Header

- **Scenario**: User interacts with navigation
  - **Given** the page is loaded
  - **Then** the user sees the LearnField logo, primary navigation links (Home, About, Programs, Blog, Contact), phone contact number (`0 (78) 675 3674`), and social media icons.
  - **When** the user scrolls down
  - **Then** the header becomes sticky at the top of the viewport.

### Feature 3: Hero Slider Banner

- **Scenario**: User views the hero banner
  - **Given** the hero section is displayed
  - **Then** the user sees badge ("EDUCATION & SCHOOL"), headline ("SHOWCASE COURSES, EVENTS AND MORE!"), introductory paragraph, and "Get Started Now" CTA button over a styled background overlay.

### Feature 4: Comprehensive Teaching Approach Section

- **Scenario**: User reads about teaching methodology
  - **Given** the about section is displayed
  - **Then** the user sees an institutional about image on the left and title ("A comprehensive teaching approach") with detailed paragraphs and a "Learn More" button on the right against a warm cream background (`#FCF2EB`).

### Feature 5: Programs We Offer Grid

- **Scenario**: User browses academic programs
  - **Given** the programs section is displayed
  - **Then** the user sees section title ("Programs we Offer") and two faculty cards ("Faculty of Science" and "Faculty of Arts") with imagery, descriptions, and "Learn More" links.

### Feature 6: Essential Resources Split Section

- **Scenario**: User views essential student resources
  - **Given** the resources section is displayed
  - **Then** the user sees a split layout with title ("Essential resources") and clickable resource items ("First year students", "Tuition & fees", "International students") with chevron indicators.

### Feature 7: Top Stories Grid

- **Scenario**: User browses top campus stories
  - **Given** the top stories section is displayed
  - **Then** the user sees a header with title ("Top Stories") and "More Stories" button, followed by a 3-column grid of story cards with thumbnail images and headline titles.

### Feature 8: Partners / Sponsors Marquee

- **Scenario**: User views institutional partners
  - **Given** the partner section is displayed
  - **Then** the user sees title ("Our Partners") and a row of partner/sponsor logo placeholders.

### Feature 9: Trusted By Students Banner

- **Scenario**: User views enrollment trust banner
  - **Given** the trust section is displayed
  - **Then** the user sees a split layout highlighting "TRUSTED BY OVER 6000+ STUDENTS" with descriptive copy and a "Join Now" CTA button.

### Feature 10: Footer & Newsletter Subscription

- **Scenario**: User interacts with footer
  - **Given** the footer section is displayed
  - **Then** the user sees quick links, program links, resource links, and a newsletter subscription form.
  - **And** the footer contains the mandatory copyright notice and brand attribution linking to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] TypeScript compilation passes without errors (`npm run typecheck` / `npm run verify:app`).
- [ ] Linter passes (`npm run lint`).
- [ ] All unit and component tests pass with **100% coverage** (`npm run test:coverage`).
- [ ] Build succeeds (`npm run build`).
- [ ] Footer contains the required link to `https://www.componentdock.com/`.
- [ ] App CNAME is `learnfield.free.componentdock.com`.
