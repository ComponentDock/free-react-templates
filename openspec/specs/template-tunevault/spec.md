# Template: TuneVault (Music Streaming Landing Page)

## Purpose

TuneVault is a single-page music streaming landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "MusicLab" free template (source:
https://colorlib.com/wp/template/musiclab/), built under a DIFFERENT name
(**TuneVault**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based music streaming promo page with a dark
hero slider, two about sections (image-text pairs), a feature grid, pricing
cards, and testimonials carousel. It uses the Inter font, a vibrant blue
brand color (#42B5F2), and gradient purple-to-blue CTA buttons with 30px
rounded pill shapes. The design has a clean, modern aesthetic with a dark
hero area transitioning to light content sections.

## Reference Research (done — do not redo)

### Source mapping

- **ColorLib item:** "MusicLab" (TEMPLATES.md line 606).
- **Source URL:** https://colorlib.com/wp/template/musiclab/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/musiclab/` (HTTP 200, 32,162 bytes).
- **Preview CSS:** `assets/css/style.css` (96,391 bytes — the main
  stylesheet) plus Bootstrap, Owl Carousel, SlickNav, animate.css, etc.
- **Fonts:** "Inter" 200–900 via Google Fonts `@import` in style.css.

### Screenshot analysis

The template shows a dark hero area with a full-viewport background
(gradient dark #161a1a), a centered headline "Open the world of music. It's
all here." with two CTA buttons (gradient purple-blue filled + outlined),
and a hero image below. Below: a clean white section with numbered feature
items and an illustration, then a light grey section with icon items, a
4-column icon feature grid, two pricing cards (both $0.00/free), a
testimonial slider, and a dark footer with social links.

### Design tokens (live stylesheet, extracted from style.css)

| Token                   | Value                                           | Use                                                           |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| Font                    | "Inter", sans-serif (200–900)                   | Google Fonts `<link>` in index.html; base 16px/1.6            |
| Brand blue              | #42B5F2                                         | `.theme-bg`, `.theme-color`, section subtitles, scroll-to-top |
| Accent red              | #F15B43                                         | secondary accent, some button states                          |
| Gradient                | #ca42f2 → #6a42f2 → #4294f2 → #42b5f2 → #7db9e8 | `.btn_01` CTA gradient, `.btn_001:hover`, `.gradient-color`   |
| Dark bg                 | #161a1a → rgba(38,41,41,0.99)                   | Hero/slider, header sticky, nav submenu                       |
| Section bg              | #F5F7F9                                         | `.section-bg` on about-area2, pricing                         |
| Card bg                 | #f9f9ff                                         | `.single-card`, nice-select, form inputs                      |
| Body text               | #6D6D6D                                         | paragraphs, `.pera p`                                         |
| Headings                | #262929                                         | h1–h6, `.section-tittle h2`                                   |
| Subtitle                | #97A7AF                                         | `.section-tittle > span`, muted text                          |
| White                   | #fff                                            | footer text, button text                                      |
| Grey muted              | #828bb2                                         | some subheadings                                              |
| Border radius (buttons) | 30px                                            | `.btn_01`, `.btn_001` — pill shape                            |
| Border radius (cards)   | 0px                                             | pricing cards have no radius                                  |
| Border radius (selects) | 25px                                            | `.nice-select`                                                |
| Section padding         | 100px top/bottom                                | `.section-padding`                                            |
| Footer padding          | 97px top / 43px bottom                          | `.footer-padding`                                             |

### Section structure (from DOM, in order)

1. **Navbar** — Transparent header, logo, main menu (ul/li), "Get Start"
   CTA button (`.btn_01`), mobile hamburger menu
2. **Hero/Slider** — Full-screen dark gradient bg, centered caption with
   h1 "Open the world of music. It's all here." + subtitle + two buttons
   (`.btn_01` filled gradient + `.btn_001` outlined), hero image below
3. **About Section 1** — Two-column (image left, text right): sound icon,
   h2 "Listen to a personalized mix of tracks", 3 numbered items with
   icons (1, 2, 3) + description text
4. **About Section 2** — Two-column reversed (text left, image right),
   section-bg #F5F7F9: h2 "We are tender heart charity foundation" + 3
   finder-icon items with card backgrounds
5. **Features/Great Stuffs** — 4-column icon grid on white bg:
   "Get ready for seamless online music" headline, features:
   Offline mode, High quality audio, No ads, Unlimited skips (each with
   icon image + h3 link + description)
6. **Pricing Cards** — section-bg, 2 cards side by side:
   "Listen free or subscribe to MusicLab Premium" headline,
   card 1: "MusicBox Free" $0.00/month, 4 features + "Get Free" button
   card 2: identical (both are $0.00 in the demo — placeholder)
7. **Testimonials** — Dark bg with overlay, slider/carousel of 4
   testimonials: "Customers are loving MusicLab" headline, each has
   avatar, name, role "CEO at Creativelab", quote text
8. **Footer** — Dark bg: logo, description, social icons (Facebook,
   LinkedIn, Instagram, YouTube), Quick Links column, copyright bar

### Icon mapping (lucide — replace all original icons)

| Source glyph                    | Recreation          |
| ------------------------------- | ------------------- |
| Font Awesome fab fa-facebook    | lucide `Facebook`   |
| Font Awesome fab fa-linkedin-in | lucide `Linkedin`   |
| Font Awesome fab fa-instagram   | lucide `Instagram`  |
| Font Awesome fab fa-youtube     | lucide `Youtube`    |
| ti-check (pricing)              | lucide `Check`      |
| ti-arrow-right (nav/CTA)        | lucide `ArrowRight` |
| ti-menu (mobile)                | lucide `Menu`       |

### Picsum placeholder plan

| Slot                       | Seeds                               | Size    |
| -------------------------- | ----------------------------------- | ------- |
| Hero image (below caption) | tunevault-hero-1, tunevault-hero-2  | 800×500 |
| About 1 illustration       | tunevault-about-1                   | 600×500 |
| About 2 illustration       | tunevault-about-2                   | 600×500 |
| Feature icons (4)          | Use lucide icons inline — no photos | —       |
| Testimonial avatars (4)    | tunevault-avatar-1..4               | 80×80   |

## Gherkin Requirements

### Feature: Navbar

Scenario: Sticky transparent header on load
Given the page is loaded
Then the navbar is transparent and overlays the hero
And the logo text is visible
And the main menu links are visible on desktop
And a "Get Started" CTA button is visible

Scenario: Mobile hamburger toggle
Given the viewport is mobile (≤768px)
When the hamburger button is clicked
Then the mobile menu expands
And the menu items are visible

### Feature: Hero Section

Scenario: Hero content renders
Given the page is loaded
Then a heading "Open the world of music. It's all here." is visible
And a subtitle paragraph is visible
And two CTA buttons are visible (filled + outlined)
And a hero image is displayed below the caption

Scenario: CTA buttons are interactive
Given the hero section is visible
When the filled CTA button is clicked
Then no navigation occurs (placeholder)
When the outlined CTA button is clicked
Then no navigation occurs (placeholder)

### Feature: About Section 1

Scenario: Numbered feature list renders
Given the page scrolls to the about section
Then a heading "Listen to a personalized mix of tracks" is visible
And 3 numbered items are displayed (1, 2, 3)
And each item has an icon and description text
And an illustration image is shown alongside

### Feature: About Section 2

Scenario: Charity section renders on grey background
Given the page scrolls to the second about section
Then the section has a light grey background (#F5F7F9)
And a heading is visible
And 3 icon items with descriptions are displayed
And an illustration image is shown alongside

### Feature: Features Grid

Scenario: Four features render in a grid
Given the page scrolls to the features section
Then a heading "Get ready for seamless online music" is visible
And 4 feature cards are displayed in a row
And each card has an icon, title link, and description

### Feature: Pricing Cards

Scenario: Two pricing cards render
Given the page scrolls to the pricing section
Then a heading about free/premium is visible
And 2 pricing cards are displayed side by side
And each card shows a plan name, price, feature list, and CTA button

Scenario: Pricing card CTA is interactive
Given the pricing cards are visible
When the "Get Free" button is clicked
Then no navigation occurs (placeholder)

### Feature: Testimonials

Scenario: Testimonial carousel renders
Given the page scrolls to the testimonials section
Then a heading "Customers are loving MusicLab" is visible
And at least one testimonial slide is visible
And each slide shows an avatar, name, role, and quote

Scenario: Testimonial navigation works
Given the testimonial carousel is visible
When the next navigation dot is clicked
Then the next testimonial slide becomes active

### Feature: Footer

Scenario: Footer renders with content
Given the page scrolls to the footer
Then the footer has a dark background
And a logo is displayed
And social media icon links are visible (Facebook, LinkedIn, Instagram, YouTube)
And a Quick Links section is visible
And a copyright bar is visible at the bottom
And a Component Dock credit link is present

## Verification Checklist

- [ ] `openspec/specs/template-tunevault/spec.md` exists and is valid
- [ ] `npm run spec:validate` passes
- [ ] `apps/tunevault` exists with correct package name
- [ ] Inter font loaded via Google Fonts `<link>` in index.html
- [ ] `public/CNAME` = `tunevault.free.componentdock.com`
- [ ] `"homepage"` = `https://tunevault.free.componentdock.com`
- [ ] All sections match the source order (navbar → hero → about1 → about2 → features → pricing → testimonials → footer)
- [ ] Brand color #42B5F2 used for accent elements
- [ ] Gradient buttons (#ca42f2 → #42b5f2) with 30px border-radius
- [ ] Dark hero background (#161a1a gradient)
- [ ] Section backgrounds match: white for about1/features, #F5F7F9 for about2/pricing
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Picsum images use deterministic seeds (tunevault-*)
- [ ] `npm run verify:app -- tunevault` passes (typecheck + lint + 100% coverage + build)
- [ ] PR includes: source URL, preview URL, token list, and differences
