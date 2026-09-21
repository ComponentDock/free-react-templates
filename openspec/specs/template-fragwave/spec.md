# Template: Fragwave (Gaming Blog / News)

## Purpose

Fragwave is a gaming news and reviews blog template in the
free-react-templates monorepo. It is a React recreation of the ColorLib free
"Amin" design (see TEMPLATES.md, Gaming category), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-themed gaming blog/magazine page with deep red accents
on a near-black background: a header with top bar (weather/date/login), a
centered logo, and a mega-menu navbar, a hero section with a featured article
and trending posts sidebar carousel, a latest-preview carousel of game
screenshots, a tabbed news & updates section with social follow sidebar, a
tabbed video-guide carousel, an Instagram-post section with articles and a
sidebar (best-of-posts), and a three-column footer (about, editor's choice,
tags cloud) with a copyright bar. Fragwave recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Amin" — free gaming website template
  (source: https://colorlib.com/wp/template/amin/).
- **Preview URL:** https://preview.colorlib.com/theme/amin/
  (HTTP 200, ~152KB HTML). Screenshot: `amin-free-template.jpg` (avif).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/amin/`
  + stylesheet `css/style.css` (79KB). The rendered DOM is the reference
  below; the TEMPLATES.md screenshot confirms the visual design: near-black
  background, white text, dark-red (#c20000) accent labels and hover states,
  Montserrat body font, Cinzel display font, gaming magazine aesthetic with
  card-based article layouts.
- **Section order (1:1):**
  1. Header (`header-section`):
     - Top bar (`ht-options`): left widget (weather icon + temp + date + login/signup link), right social icons (Facebook, Twitter, YouTube, Instagram, email).
     - Centered logo row.
     - Nav bar (`nav-options`): hamburger menu icon, search icon, desktop nav links (Home active, Platform mega-menu, Reviews dropdown, Windows dropdown, Videos dropdown) — mega-menu shows nav links + 3 post thumbnails with titles/date/comments.
  2. Hero (`hero-section`, padding-top 160px): two-column split.
     - Left column (col-lg-6): category label badge (skewed, `rgba(194,0,0,0.3)` background) "Playstation", H3 article title, author meta (avatar + name + date).
     - Right column (col-xl-4 offset): "Trending posts" sidebar title + owl-carousel of trending items (image thumbnail + title + date/comment meta).
  3. Latest Preview (`latest-preview-section`, bg `#080808`): section title "Latest Preview", owl-carousel of game preview cards (image with overlay, title text).
  4. Update News (`update-news-section`, bg `#0d0d0d`): section title "News & update" with red left-border accent. Two-column layout:
     - Main (col-lg-8): tabbed nav (All / Platform / Hardware / Reviews), news article cards (image + category label + title + meta).
     - Sidebar (col-lg-4): social follow cards (platform icons + follower counts + skewed follow badges), hardware guides section.
  5. Video Guide (`video-guide-section`, bg `#080808`): section title "Videos guide", tabbed nav (Playstation / Windows / Mobile / Xbox), owl-carousel of video cards with play button overlay and title.
  6. Instagram Post (`instagram-post-section spad`, bg `#0d0d0d`): two-column:
     - Main (col-lg-8): section title "Instagram", article cards with large image + category label + title + author/date/comments meta.
     - Sidebar (col-lg-4): "Best of post" section with ranked list items (circular progress indicator + article title + date/comments), "Follow us" section with social media follow buttons.
  7. Footer (`footer-section`): three columns:
     - Col 4: footer-about (logo, paragraph about, social icons).
     - Col 4 col-md-6: Editor's Choice — section title + 2 editor items (thumbnail + title + date/comments).
     - Col 4 col-md-6: Tags Cloud — section title + tag pill buttons (Gaming, Platform, Playstation, Hardware, Reviews, Simulation, Strategy, etc.).
     - Copyright bar: left copyright text (heart icon), right links (About / Subscribe / Contact / Support).
     - Footer links to https://www.componentdock.com/ (Component Dock branding).

- **Design tokens extracted from `css/style.css`:**
  - Fonts: Google Fonts — **"Montserrat"** (weights 300–900, body text, nav, paragraphs, labels) + **"Cinzel"** (weights 400/700/900, display/headings).
  - Brand color: `#c20000` (dark red) — primary accent for labels, active states, hover underlines.
  - Accent: `#e10000` (brighter red) — hover states on links, active tabs.
  - Label badges: `rgba(194, 0, 0, 0.3)` (hero) / `rgba(194, 0, 0, 0.5)` (news cards) with `transform: skewX(15deg)`.
  - Dark backgrounds (alternating sections): `#000` (hero), `#080808` (latest preview, video guide), `#0d0d0d` (update news, instagram post), `#252525` (cards).
  - Text colors: `#ffffff` (primary headings, nav, section titles), `#c4c4c4` (secondary/body text, meta, dates), `#111111` (on light backgrounds).
  - Muted: `#999`, `#666666`, `#555555`.
  - Blue accent: `#40c4ff` (tab links, hover states).
  - Purple: `#673ab7` (secondary accent).
  - Button: pill shape `border-radius: 60px`, red background, white text.
  - Tab active state: red bottom border.
  - Section title underline: 2px red left-border accent with `:after` pseudo-element.
  - Follow badges: skewed with `transform: skewX(15deg)`.
  - Circular progress indicators for "best of" sidebar ranking.

## Gherkin requirements

### Scenario: Header bar displays correctly

```
Given the user opens the Fragwave template
Then the top bar shows a weather widget, date, and login/signup link on the left
And social media icons (Facebook, Twitter, YouTube, Instagram, email) appear on the right
And the logo is centered below the top bar
And the nav bar contains Home, Platform (mega-menu), Reviews, Windows, Videos links
And a hamburger menu icon and search icon are visible
```

### Scenario: Hero section renders featured article and trending posts

```
Given the user views the hero section
Then a category label badge reads "Playstation" with a skewed dark-red background
And a heading displays the featured article title
And an author avatar, name, and date are shown below the title
And the right column shows a "Trending posts" sidebar with a carousel of items
And each trending item has an image thumbnail, title, date, and comment count
```

### Scenario: Latest Preview carousel displays game previews

```
Given the user scrolls to the Latest Preview section
Then the section title reads "Latest Preview"
And a carousel of game preview cards is displayed
And each card shows a game image with title text overlay
```

### Scenario: Update News section has tabbed navigation and sidebar

```
Given the user views the Update News section
Then the section title reads "News & update" with a red left-border accent
And tabs show "All", "Platform", "Hardware", "Reviews"
And "All" is the active tab by default
And clicking a tab filters the news cards to that category
And each news card shows an image, category label, title, author, date, and comment count
And the sidebar displays social follow buttons with platform icons and follower counts
And a hardware guides section appears below the social follow section
```

### Scenario: Video Guide section shows tabbed video carousel

```
Given the user views the Video Guide section
Then the section title reads "Videos guide"
And tabs show "Playstation", "Windows", "Mobile", "Xbox"
And a carousel of video cards is displayed
And each card shows a video thumbnail with a play button overlay and a title
```

### Scenario: Instagram Post section displays articles and sidebar

```
Given the user views the Instagram Post section
Then the section title reads "Instagram"
And article cards show a large image, category label, title, author, date, and comment count
And the sidebar shows a "Best of post" ranked list with circular progress indicators
And a "Follow us" section with social media follow buttons appears in the sidebar
```

### Scenario: Footer renders three columns and copyright bar

```
Given the user scrolls to the footer
Then the left column shows the logo, a paragraph, and social media icons
And the middle column shows "Editor's Choice" with 2 article items
And the right column shows "Tags Cloud" with tag pill buttons
And the copyright bar shows copyright text on the left and About/Subscribe/Contact/Support links on the right
And a link to https://www.componentdock.com/ is present (Component Dock branding)
```

### Scenario: Mobile responsiveness

```
Given the user views the template on a mobile device
Then the hamburger menu icon is visible in the header
And tapping it opens a slide-out mobile menu with all nav links
And the hero section stacks vertically (featured article above trending)
And the two-column layouts collapse to single column
And the footer columns stack vertically
```

## Verification checklist

- [ ] Header: top bar with weather, date, login; centered logo; nav with mega-menu
- [ ] Hero: featured article with label, title, author meta; trending posts carousel
- [ ] Latest Preview: carousel of game preview cards
- [ ] Update News: tabbed (All/Platform/Hardware/Reviews) news cards + social follow sidebar
- [ ] Video Guide: tabbed video carousel with play button overlays
- [ ] Instagram Post: article cards + best-of sidebar with circular progress
- [ ] Footer: about/social, editor's choice, tags cloud, copyright bar
- [ ] Footer links to https://www.componentdock.com/
- [ ] Design tokens: Montserrat + Cinzel fonts, #c20000 red accents, dark backgrounds
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos/seed/fragwave-*
- [ ] Icons from lucide-react
- [ ] Tailwind @theme with brand colors
- [ ] 100% test coverage
