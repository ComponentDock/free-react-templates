# Template: Carouseldash (UI Components / Carousel)

## Purpose

Recreation of **ColorLib "Carousel 18"** (source slug: `carousel-18`), a Bootstrap-based carousel template featuring a tabbed navigation controlling three hero slides, each with a 50/50 split image + text layout. The design is minimalist with warm earthy imagery against a clean white UI.

**Source:** https://colorlib.com/wp/template/carousel-18/
**Preview:** https://preview.colorlib.com/theme/bootstrap/carousel-18/
**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
**Category:** UI Components — Carousel

---

## Design Tokens (from preview stylesheet `css/style.css`)

### Colors

| Token                   | Value                   | Usage                                         |
| ----------------------- | ----------------------- | --------------------------------------------- |
| `--color-bg`            | `#ffffff`               | Page background, card backgrounds             |
| `--color-text-primary`  | `#000000`               | Headings, active tab text, heading links      |
| `--color-text-muted`    | `#999999`               | Paragraph body text, inactive tabs            |
| `--color-text-dim`      | `#adb5bd`               | Category labels (uppercase)                   |
| `--color-border-light`  | `#cccccc`               | Tab bar bottom border                         |
| `--color-border-accent` | `#000000`               | Active tab underline, heading link hover      |
| `--color-dots-inactive` | `rgba(255,255,255,0.5)` | Carousel dot inactive state                   |
| `--color-dots-active`   | `#ffffff`               | Carousel dot active state                     |
| `--color-nav-arrow`     | `#ffffff`               | Carousel nav arrow icons (on colored circles) |

### Typography

| Element          | Font Family                                                                                    | Weight      | Size / Details                         |
| ---------------- | ---------------------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| Body / UI        | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif` | 300 (light) | Base 1rem, line-height 1.5             |
| Headings (h1–h6) | Same as body                                                                                   | 400–700     | h2: 20px (title), 2rem (slide heading) |
| Slide heading    | `"Playfair Display", times, serif`                                                             | 400         | 2rem, line-height 1.3                  |
| Category label   | Same as body                                                                                   | 700 (bold)  | 12px, uppercase, letter-spacing 0.2rem |
| Tab labels       | Same as body                                                                                   | 400/700     | 1rem, center-aligned                   |

### Spacing & Layout

| Token                       | Value                                         |
| --------------------------- | --------------------------------------------- |
| Section vertical padding    | `7rem` (112px)                                |
| Tab padding                 | `20px` vertical                               |
| Tab bottom border (active)  | `1px solid #000` positioned at `bottom: -1px` |
| Slide image/text split      | 50% / 50% on md+, stacked on mobile           |
| Text container padding      | `50px` desktop, `20px` mobile (≤991px)        |
| Slide heading bottom margin | `30px`                                        |
| Carousel dots bottom        | `40px` from bottom                            |
| Dot size                    | `7px` diameter, `4px` gap                     |
| Nav arrow circles           | `40px` icon size                              |

### Border Radius

- Dots: `50%` (circle)
- Nav arrows: implicit circle via `border-radius: 50%` (inferred from owl.carousel defaults)

### Shadows / Effects

- Tab active state: bottom border underline (no shadow)
- Images: soft natural shadow in photography (not CSS)
- Transitions: `0.3s ease` on all links/anchors

---

## Gherkin Requirements

### Feature: Tabbed Carousel Navigation

**As a** visitor  
**I want to** switch between carousel slides using tab navigation  
**So that** I can browse multiple featured content items

#### Scenario: Initial load shows first tab active

Given the page loads  
When the carousel renders  
Then "First Tab" is visually active (dark text + bottom underline)  
And the first slide (image + text) is displayed

#### Scenario: Clicking a tab switches the active slide

Given "Second Tab" is inactive  
When the user clicks "Second Tab"  
Then "Second Tab" becomes active (dark text + underline)  
And "First Tab" becomes inactive (muted text, no underline)  
And the second slide content appears (image + "TRAVEL — SECOND TAB" label + heading + paragraph)  
And the transition is smooth (0.3s ease)

#### Scenario: Tab hover changes text color

Given a tab is inactive  
When the user hovers over it  
Then the tab text color changes to primary black (`#000`)

---

### Feature: Carousel Slide Layout

**As a** visitor  
**I want to** view each slide as a 50/50 image-text split on desktop  
**So that** I can see the visual and read the content simultaneously

#### Scenario: Desktop layout shows side-by-side image and text

Given viewport width ≥ 992px (md breakpoint)  
When a slide is active  
Then the image occupies 50% width (flex: 0 0 50%)  
And the text container occupies 50% width with 50px padding

#### Scenario: Mobile layout stacks image above text

Given viewport width ≤ 991px  
When a slide is active  
Then the image occupies full width  
And the text container occupies full width with 20px padding

---

### Feature: Slide Content Structure

**As a** visitor  
**I want to** see consistent content on each slide  
**So that** I understand the pattern and can scan quickly

#### Scenario: Each slide has category label, heading, and paragraph

Given any slide is active  
Then a category label appears: uppercase, muted color (`#adb5bd`), 12px, bold, letter-spaced  
And a heading appears: Playfair Display serif, 2rem, line-height 1.3, dark color (`#000`)  
And a paragraph appears: Roboto light, muted color (`#999999`)

#### Scenario: Category label reflects tab context

Given "Second Tab" is active  
Then the category label reads "TRAVEL — SECOND TAB"  
And similarly for Third Tab

---

### Feature: Carousel Controls (Owl Carousel)

**As a** visitor  
**I want to** navigate slides via arrows and dots  
**So that** I have multiple ways to browse

#### Scenario: Arrow navigation exists

Given the carousel is rendered  
Then left/right arrow buttons exist (positioned at 50% vertical, 20px from edges)  
And arrows are white icons on colored circles (blue/red borders in source, styleable)  
And clicking advances to previous/next slide

#### Scenario: Dot indicators exist

Given the carousel is rendered  
Then dots appear centered at bottom (40px up), 7px circles  
And inactive dots are semi-transparent white (`rgba(255,255,255,0.5)`)  
And active dot is solid white  
And clicking a dot jumps to that slide

---

### Feature: Responsive Behavior

**As a** visitor on mobile  
**I want** the layout to adapt gracefully  
**So that** content remains readable

#### Scenario: Tab bar remains usable on mobile

Given viewport < 576px  
Then tabs stack or shrink but remain clickable with 20px padding

#### Scenario: Text remains readable on mobile

Given viewport ≤ 991px  
Then text container padding reduces to 20px  
And heading size scales appropriately

---

## Verification Checklist

- [ ] Tab navigation: three tabs ("First Tab", "Second Tab", "Third Tab"), first active by default
- [ ] Active tab: dark text (`#000`) + bottom border underline (`1px solid #000` at `bottom: -1px`)
- [ ] Inactive tabs: muted text (`#999`), no underline
- [ ] Tab hover: text → `#000`
- [ ] Clicking tab switches slide content with 0.3s transition
- [ ] Each slide: 50/50 image-text split on desktop (md+), stacked on mobile
- [ ] Image: placeholder via `picsum.photos` (deterministic seed per template)
- [ ] Text container: category label (uppercase, `#adb5bd`, 12px, bold, letter-spacing 0.2rem)
- [ ] Text container: heading (Playfair Display, 2rem, line-height 1.3, `#000`)
- [ ] Text container: paragraph (Roboto 300, `#999`)
- [ ] Category label reflects active tab ("TRAVEL — FIRST/SECOND/THIRD TAB")
- [ ] Carousel arrows: left/right, vertically centered, 20px from edges
- [ ] Carousel dots: centered bottom, 40px up, 7px circles, semi-transparent inactive / solid white active
- [ ] Page padding: `7rem` vertical (112px)
- [ ] Fonts loaded via Google Fonts: Roboto (300,400,500,700) + Playfair Display (400,900)
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeScript strict mode passes
- [ ] Build succeeds
- [ ] Deploy to `carouseldash.free.componentdock.com` (public/CNAME + homepage in package.json)

---

## Implementation Notes

- Use **Owl Carousel 2** or equivalent React carousel (e.g., `embla-carousel-react` for lighter weight) — replicate the tab + carousel dual-control pattern
- Tab state controls which slide is active (controlled component)
- Images: `https://picsum.photos/seed/carouseldash-{1,2,3}/800/600` (deterministic)
- Font imports in `index.html`: `<link rel="preconnect" href="https://fonts.googleapis.com">` + Roboto + Playfair Display
- Tailwind `@theme` for design tokens; use `cn()` from `packages/ui`
- Section component: `CarouselDash.tsx` (or split: `CarouselDashTabs`, `CarouselDashSlide`, `CarouselDashContent`)
- Footer: `Made with Component Dock` link
- No ColorLib references anywhere in app code — provenance only in spec, TEMPLATES.md, PR
