# Template: Podlane (Podcast)

## Purpose

Recreation of ColorLib **Mypodcast** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/mypodcast/
- Preview: https://preview.colorlib.com/theme/mypodcast/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mypodcast-free-template.jpg
- New name: `podlane` (apps/podlane, @free-react-templates/podlane)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand red-orange | `#ff3500` | CTA buttons (filled), play icons, selection color, link hover/active accents |
| Secondary dark | `#2e3038` | Button fill hover state, dark overlays |
| Heading color | `#FFFFFF` | All headings on dark backgrounds (hero, parallax, footer) |
| Body text | `#929191` | Paragraphs, secondary text, episode descriptions |
| Muted text | `#a5a5a5` | Body default color, tag text |
| Muted text alt | `#7b7b7b` | Additional muted labels |
| Background | `#FFFFFF` | Page background, show cards |
| Light background | `#f6f6f6` | Subtle section alternation |
| Dark background | `#1f2128` | Footer area, dark sections |
| Overlay background | `rgba(0,0,0,0.63)` | Header scroll bg, image overlays |
| Link underline | `#ffa07f` | Paragraph link bottom border (light salmon) |
| Link active | `#FF6347` | Paragraph link active state (tomato) |
| Font family — primary | `Poppins` (Google Fonts, weights 100–900) | Global font for all text, headings, paragraphs |
| Font family — secondary | `Open Sans` (Google Fonts, weights 300–800) | Imported but secondary use |
| Button style — border | white 1px solid, border-radius 21px, white text, transparent bg → on hover: white bg + `#ff3500` text | "More Info", "Amazon", "Itunes", "Spotify" buttons |
| Button style — fill | `#ff3500` bg, border-radius 21px, white text, uppercase, 42px height → on hover: `#2e3038` bg | "Browse Shows" primary CTAs |
| Header height | 86px (70px when scrolled) | Fixed transparent header |
| Section spacing | Generous padding, parallax sections use full-viewport background images | Between all major sections |

## Page structure (section order, from live preview DOM)

1. **Header** — Fixed transparent header initially, becomes semi-transparent black (`rgba(0,0,0,0.63)`) on scroll. Left: logo text "my" (thin weight) + "podcast" (bold) + play icon. Center: nav links — Home, About, Episodes, Blog, Contact. Right: "Submit a Podcast" button + social icons (Facebook, Instagram, SoundCloud, Vimeo, YouTube) + hamburger menu (mobile). Height 86px → 70px on scroll.

2. **Hero section** — Full-viewport background image with dark overlay. Content: tags (lifestyle, interview, last episode) as small pill links. Large heading "Season 4 Episode 48 available." Subtitle text. Track info bar (date, category, duration, comments). Embedded SoundCloud player iframe. "More Info" border button (pill shape, white).

3. **Shows section** — White background. 3-column grid of episode cards. Each card: square image with play icon overlay + tag pill (Music/Experiment), below image: date, episode title (long), info row with heart icon + favorite count + speech bubble icon + comment count. "Browse Shows" fill button centered below.

4. **Bi-weekly section** — Parallax background image with dark overlay. Two-column layout: Left: heading "Bi-weekly episodes", paragraph text, row of 3 border buttons (Amazon, iTunes, Spotify). Right: large show image with logo watermark overlay. Full-width parallax treatment.

5. **Shows 2 (By Category)** — White background. Title "By Category". 4-column grid of episode cards. Each card: image with play icon overlay + title overlay on dark gradient, tag pill below. "Browse Shows" fill button centered below.

6. **Footer** — Dark background (`#1f2128`). Centered logo at top. Three columns: Tags (list of 12 tag links: music, art, technology, travel & food, viral, social media, interview, development, success, live, did you know?, health), Latest Episodes (3 episode items with play SVG icon + title + date/category info), Instagram gallery (5 small square images). Bottom: social icons row (Facebook, Instagram, SoundCloud, Vimeo, YouTube) centered. Copyright line.

## Gherkin requirements

### Feature: Podlane Podcast Template

```gherkin
Feature: Podlane — Podcast Website Template
  As a user visiting the Podlane website
  I want to see a professional podcast website
  So that I can browse episodes, discover shows, and follow the podcast

  Scenario: Header displays navigation and submit CTA
    Given I am on the Podlane homepage
    Then I see a fixed transparent header
    And I see the logo text "podlane" with a play icon
    And I see navigation links: Home, About, Episodes, Blog, Contact
    And I see a "Submit a Podcast" button
    And I see social icons (Facebook, Instagram, SoundCloud, Vimeo, YouTube)
    And on scroll the header becomes semi-transparent dark

  Scenario: Hero section shows latest episode with player
    Given I am on the Podlane homepage
    Then I see a full-viewport background image
    And I see tag pills (lifestyle, interview, last episode)
    And I see a large heading "Season 4 Episode 48 available."
    And I see subtitle text describing the episode
    And I see track info (date, category, duration, comments)
    And I see an embedded audio player (SoundCloud)
    And I see a "More Info" border button

  Scenario: Shows section displays episode cards in a grid
    Given I scroll to the shows section
    Then I see a 3-column grid of episode cards
    And each card has an image with play icon overlay
    And each card has a category tag
    And each card shows the episode date and title
    And each card shows favorite count and comment count
    And I see a "Browse Shows" fill button

  Scenario: Bi-weekly section shows podcast schedule
    Given I scroll to the bi-weekly section
    Then I see a parallax background image
    And I see heading "Bi-weekly episodes"
    And I see a descriptive paragraph
    And I see three platform buttons: Amazon, Itunes, Spotify
    And I see a show image with logo watermark

  Scenario: Category section shows shows by category
    Given I scroll to the category section
    Then I see heading "By Category"
    And I see a 4-column grid of episode cards
    And each card has an image with play icon and title overlay
    And each card has a category tag
    And I see a "Browse Shows" fill button

  Scenario: Footer provides site navigation and social links
    Given I scroll to the footer
    Then I see a dark background footer
    And I see the logo centered at the top
    And I see a Tags column with 12 tag links
    And I see a Latest Episodes column with 3 episodes
    And I see an Instagram gallery with 5 images
    And I see social icons (Facebook, Instagram, SoundCloud, Vimeo, YouTube)
    And I see a copyright line with Component Dock link
```

## Verification checklist

- [ ] Header: fixed, transparent → dark on scroll, logo + nav + submit + social + hamburger
- [ ] Hero: full-viewport bg image, tags, heading, subtitle, track info, audio player, "More Info" button
- [ ] Shows: 3-column card grid, image + play icon + tag, date + title + likes/comments
- [ ] Bi-weekly: parallax bg, heading + text + 3 platform buttons + image with logo
- [ ] Category: "By Category" heading, 4-column card grid with image overlays, "Browse Shows" button
- [ ] Footer: dark bg, centered logo, tags/latest/instagram columns, social icons, copyright with Component Dock
- [ ] Responsive: mobile hamburger menu, stacked cards, adjusted spacing
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `podlane.free.componentdock.com`
- [ ] Package name `@free-react-templates/podlane`, homepage `https://podlane.free.componentdock.com`
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
