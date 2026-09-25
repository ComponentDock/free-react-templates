# Template: Earworm (Podcast & Audio)

## Purpose

Recreation of ColorLib **Poca** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/poca/
- Preview: https://preview.colorlib.com/theme/poca/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/poca-free-template.jpg
- New name: `earworm` (apps/earworm, @free-react-templates/earworm)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary (brand red) | `#f55656` | CTA buttons (.poca-btn), links hover, accents |
| Heading color | `#232323` | All headings (h1–h6), dark text |
| Body text | `#666666` | Paragraphs, secondary text |
| Gray background | `#f4f4f4` | Preloader bg, alternating section bg |
| White | `#ffffff` | Page background, card backgrounds |
| Dark | `#000000` | Overlay pseudo-element, dark accents |
| Border | `#ebebeb` | Borders, dividers |
| Secondary | `#a6a6a6` | Muted labels, secondary elements |
| Font family | `HK Grotesk` (via Google Fonts) | Global font for all text and headings |
| Heading weight | 600 | All h1–h6 |
| Body weight | 400 | Paragraphs, body text |
| Body font size | 16px | Paragraphs |
| Heading line-height | 1.4 | h1–h6 |
| Paragraph line-height | 1.9 | Body paragraphs |
| Button style | `.poca-btn` — primary #f55656 bg, white text, rounded | CTA buttons ("Subscribe with iTunes", "Subscribe with RSS", "Load More") |
| Button alt style | `.btn-2` — outline/secondary variant | Secondary CTA buttons |
| Section padding | 80px top/bottom (`.section-padding-80`) | Between major sections |
| Dark overlay | `rgba(0,0,0,0.5)` on `.bg-overlay::after` | Hero/carousel slides, newsletter bg |
| Section heading | 44px, centered, with `.line` divider below | "Latest Episodes", "Featured Guests" |

## Page structure (section order, from live preview DOM)

1. **Header** — Fixed/sticky navbar. Left: logo image. Center: nav links (Home, Pages dropdown, Podcasts, About, Blog dropdown, Contact). Right: search icon + social icons (Facebook, Twitter, Pinterest, Instagram, YouTube). Mobile: hamburger toggles slide-in menu. Uses `.classy-navbar` pattern.

2. **Hero/Welcome Carousel** — Full-viewport carousel (Owl Carousel) with 3 slides. Each slide: background image with dark overlay (`rgba(0,0,0,0.5)`), centered text. Content per slide: heading ("Subscribe Today" / "Listen Now" / "Discover Today"), subtitle text, two CTA buttons ("Subscribe with iTunes" primary, "Subscribe with RSS" secondary). Below buttons: embedded music player area with episode thumbnail, published date, episode title, author/category/duration metadata, native `<audio>` player, and like/share/download action links.

3. **Latest Episodes** — White background. Section heading "Latest Episodes" centered with line divider. Filter tabs (All, Entrepreneurship, Media, Tech, Tutorials) as pill buttons. 2-column grid of 6 episode cards. Each card: thumbnail image on left, episode content on right (published date, title, author/category/duration, native audio player, like/share/download). "Load More" button centered below grid.

4. **Featured Guests** — White background. Section heading "Featured Guests" centered with line divider. 3-column (or 4 on wider screens) grid of guest cards. Each card: guest photo, name, role/title below.

5. **Newsletter** — Parallax background image with dark overlay. Two-column layout: left — heading "Sign Up To Newsletter" + subtitle; right — email input + "Subscribe" button form.

6. **Footer** — White background, 80px top padding. 4-column layout: About Us (text + copyright), Categories (nav links: Entrepreneurship, Media, Tech, Tutorials), Latest Episodes (2 episode items with date + title), Follow Us (social icons: Facebook, Twitter, Pinterest, Instagram, YouTube + App Store / Google Play badge images). Copyright line at bottom.

## Gherkin requirements

### Feature: Earworm Podcast Template

```gherkin
Feature: Earworm — Podcast & Audio Website Template
  As a user visiting the Earworm website
  I want to see a professional podcast website
  So that I can browse episodes, discover guests, and subscribe to the newsletter

  Scenario: Header displays navigation and social links
    Given I am on the Earworm homepage
    Then I see a sticky navbar
    And I see the logo on the left
    And I see navigation links: Home, Pages, Podcasts, About, Blog, Contact
    And I see a search icon and social icons (Facebook, Twitter, Pinterest, Instagram, YouTube)
    And on mobile I see a hamburger menu toggle

  Scenario: Hero carousel shows featured episode with subscribe CTAs
    Given I am on the Earworm homepage
    Then I see a full-viewport carousel with background images and dark overlays
    And I see a heading like "Subscribe Today"
    And I see subtitle text below the heading
    And I see two CTA buttons: "Subscribe with iTunes" and "Subscribe with RSS"
    And I see an episode player area with thumbnail, title, metadata, and audio controls
    And I see like, share, and download action links
    And the carousel auto-rotates through 3 slides

  Scenario: Latest Episodes section shows filterable episode grid
    Given I scroll to the Latest Episodes section
    Then I see the heading "Latest Episodes" with a line divider
    And I see filter tabs: All, Entrepreneurship, Media, Tech, Tutorials
    And I see a 2-column grid of episode cards
    And each card has a thumbnail image
    And each card shows published date, title, author, category, duration
    And each card has a native audio player
    And each card has like, share, and download links
    And I see a "Load More" button below the grid

  Scenario: Featured Guests section displays guest profiles
    Given I scroll to the Featured Guests section
    Then I see the heading "Featured Guests" with a line divider
    And I see a grid of guest cards
    And each card has a guest photo
    And each card shows the guest name and role

  Scenario: Newsletter section allows email subscription
    Given I scroll to the newsletter section
    Then I see a parallax background image with dark overlay
    And I see heading "Sign Up To Newsletter"
    And I see subtitle text "Subscribe to receive info on our latest news and episodes"
    And I see an email input field
    And I see a "Subscribe" button

  Scenario: Footer provides site information and social links
    Given I scroll to the footer
    Then I see 4 columns: About Us, Categories, Latest Episodes, Follow Us
    And I see category links: Entrepreneurship, Media, Tech, Tutorials
    And I see 2 latest episode entries with dates and titles
    And I see social icons (Facebook, Twitter, Pinterest, Instagram, YouTube)
    And I see App Store and Google Play badge images
    And I see a copyright line with Component Dock link
```

## Verification checklist

- [ ] Header: sticky navbar, logo left, nav links centered, search + social icons right, hamburger on mobile
- [ ] Hero: full-viewport carousel, 3 slides with bg images + dark overlay, heading + subtitle + 2 CTA buttons + music player area with audio controls + like/share/download
- [ ] Latest Episodes: section heading with divider, filter tabs (5 categories), 2-column card grid with thumbnail + metadata + audio player + actions, "Load More" button
- [ ] Featured Guests: section heading with divider, guest grid with photo + name + role
- [ ] Newsletter: parallax bg with overlay, heading + subtitle + email form + subscribe button
- [ ] Footer: 4 columns (About Us, Categories, Latest Episodes, Follow Us), social icons, App Store/Google Play badges, copyright with Component Dock link
- [ ] Responsive: mobile hamburger menu, stacked layouts, adjusted spacing
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `earworm.free.componentdock.com`
- [ ] Package name `@free-react-templates/earworm`, homepage `https://earworm.free.componentdock.com`
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Global font: HK Grotesk via Google Fonts
- [ ] Brand color: `#f55656` in Tailwind theme
- [ ] Dark overlay: `rgba(0,0,0,0.5)` on hero slides and newsletter
- [ ] Section padding: 80px top/bottom
