# Fragwave — Implementation Tasks & Design Notes

## Source
- ColorLib "Amin" — https://colorlib.com/wp/template/amin/
- Preview: https://preview.colorlib.com/theme/amin/
- Category: Gaming

## Implementation TODO

### Phase 1: Scaffold
- [ ] Copy simplest existing gaming app as base (e.g. apps/pixelpress)
- [ ] Rename package to @free-react-templates/fragwave
- [ ] Update public/CNAME to fragwave.free.componentdock.com
- [ ] Update homepage in package.json
- [ ] Run npm install at repo root to register workspace
- [ ] Set up vite.config.ts with injectUiSource()

### Phase 2: Design Tokens (src/index.css)
- [ ] @theme block: brand-red (#c20000), accent-red (#e10000), bg-dark (#080808), bg-darker (#0d0d0d), bg-card (#252525), text-primary (#ffffff), text-secondary (#c4c4c4), blue-accent (#40c4ff), purple-accent (#673ab7)
- [ ] Google Fonts: Montserrat (300-900) + Cinzel (400/700/900) in index.html
- [ ] Dark base: body bg #000, text #c4c4c4

### Phase 3: Components (src/components/)

#### Header.tsx
- [ ] TopBar: weather widget (icon + temp + city), date, login/signup link, social icons (FB, Twitter, YouTube, Instagram, email)
- [ ] Logo: centered image/text
- [ ] NavBar: hamburger icon, search icon, nav links (Home, Platform w/ mega-menu, Reviews, Windows, Videos)
- [ ] MegaMenu: desktop dropdown with nav links + 3 post thumbnails
- [ ] MobileMenu: slide-out drawer with all nav items
- [ ] MobileMenu overlay + close button

#### Hero.tsx
- [ ] Two-column: col-lg-6 left (label badge "Playstation", H3 title, author meta)
- [ ] Right column: "Trending posts" title + carousel of trending items (image + title + date + comment count)
- [ ] Label badge: inline-block, padding 4px 7px 4px 12px, bg rgba(194,0,0,0.3), transform skewX(15deg)

#### LatestPreview.tsx
- [ ] Section title "Latest Preview"
- [ ] Carousel of game preview cards (image + title overlay)
- [ ] Background: #080808

#### UpdateNews.tsx
- [ ] Section title "News & update" with red left-border accent
- [ ] Tabs: All / Platform / Hardware / Reviews (tab state)
- [ ] News cards: image + skewed label + title + author/date/comments meta
- [ ] Sidebar: social follow cards (platform icon + count + skewed follow badge), hardware guides section
- [ ] Background: #0d0d0d

#### VideoGuide.tsx
- [ ] Section title "Videos guide"
- [ ] Tabs: Playstation / Windows / Mobile / Xbox
- [ ] Video carousel: thumbnail + play button overlay + title
- [ ] Background: #080808

#### InstagramPost.tsx
- [ ] Two-column: main (col-lg-8) + sidebar (col-lg-4)
- [ ] Main: section title "Instagram", article cards (image + label + title + author/date/comments)
- [ ] Sidebar: "Best of post" ranked list with circular progress indicators + article meta
- [ ] "Follow us" section with social follow buttons
- [ ] Background: #0d0d0d

#### Footer.tsx
- [ ] Three columns: about (logo + text + social), Editor's Choice (2 items with thumbnails), Tags Cloud (pill buttons)
- [ ] Copyright bar: copyright text left, About/Subscribe/Contact/Support links right
- [ ] Link to https://www.componentdock.com/ (Component Dock branding)

### Phase 4: App.tsx
- [ ] Compose: Header → Hero → LatestPreview → UpdateNews → VideoGuide → InstagramPost → Footer

### Phase 5: Tests (TDD)
- [ ] Header.test.tsx — top bar, nav, mega-menu, mobile menu toggle
- [ ] Hero.test.tsx — label, title, author, trending carousel
- [ ] LatestPreview.test.tsx — section title, carousel items
- [ ] UpdateNews.test.tsx — tabs, news cards, sidebar
- [ ] VideoGuide.test.tsx — tabs, video cards
- [ ] InstagramPost.test.tsx — article cards, sidebar, best-of items
- [ ] Footer.test.tsx — three columns, copyright, componentdock link
- [ ] App.test.tsx — all sections render
- [ ] 100% coverage

### Phase 6: Verify
- [ ] npm run verify:app fragwave
- [ ] No ColorLib references in app code
- [ ] Placeholder images from picsum.photos/seed/fragwave-*
- [ ] Icons from lucide-react

## Design Notes

### Section order fidelity
The original has 7 major sections: Header → Hero → LatestPreview →
UpdateNews → VideoGuide → InstagramPost → Footer. Each must appear in
this exact order. The header is complex (3 sub-parts) and should be one
component.

### Dark theme pattern
Alternating dark backgrounds: hero on #000, latest-preview and video-guide
on #080808, update-news and instagram-post on #0d0d0d. Cards on #252525.
This creates subtle visual separation between sections without hard borders.

### Label badges
Category labels use a skewed rectangle (skewX(15deg)) with semi-transparent
red background. Hero uses rgba(194,0,0,0.3), news cards use rgba(194,0,0,0.5).
Inner span counter-skews text back to normal.

### Mega-menu
The Platform nav item opens a mega-menu with two columns: left column has
sub-nav links (Playstation, Windows, Mobile, Xbox), right column shows 3
post thumbnails with titles and meta. This is a hover-triggered dropdown.

### Circular progress indicators
The "Best of post" sidebar items use circular progress indicators (styled
as partial-border circles) to rank articles. Implement with CSS
conic-gradient or SVG circles.

### Follow badges
Social follow buttons in the sidebar use the same skewed-badge pattern as
category labels, with platform-specific colors.
