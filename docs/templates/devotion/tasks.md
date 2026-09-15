# Devotion — Implementation Tasks

Source: ColorLib "Faithful" (https://colorlib.com/wp/template/faithful/)
Preview: https://preview.colorlib.com/theme/faithful/
New name: devotion

## Pre-implementation checklist

- [x] Spec written: openspec/specs/template-devotion/spec.md
- [x] Design tokens extracted from preview CSS/HTML
- [x] Screenshot reviewed (faithful-free-template.jpg)
- [ ] Tests written (RED phase)
- [ ] Implementation complete (GREEN phase)
- [ ] 100% coverage verified
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] README status updated
- [ ] Committed, PR opened, squash-merged
- [ ] Surge deployed

## Implementation tasks (in order)

### 1. Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/embrace` or `apps/benevol`)
- [ ] Rename package to `@free-react-templates/devotion`
- [ ] Update `public/CNAME` to `devotion.free.componentdock.com`
- [ ] Update `homepage` in `package.json`
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Update `index.html` title to "Devotion"

### 2. Theme tokens (src/index.css)
- [ ] Set `@theme` brand color: `--color-primary: #f23a2e`
- [ ] Set section background tokens as needed
- [ ] Load Amatic SC + Work Sans via Google Fonts `<link>` in index.html
- [ ] Remove any old app-specific theme tokens

### 3. Section components (src/components/)
Build each section component in order:
- [ ] `Navbar.tsx` — white bar, logo "Devotion", nav links, hamburger menu
- [ ] `Hero.tsx` — owl-carousel or equivalent slider with background images,
  dark overlay, white centered text, pill CTA buttons
- [ ] `UpcomingEventsBand.tsx` — red bg-primary strip with countdown/event info
- [ ] `ChurchServices.tsx` — 3-column grid, icon + title + description per item
- [ ] `FeatureCards.tsx` — 3-column grid, icon + title + description + Read More
- [ ] `GodIsLove.tsx` — dark overlay section, sermon content, Watch Video CTA
- [ ] `MoreFeatures.tsx` — additional feature items
- [ ] `OurMission.tsx` — centered mission text + Read More
- [ ] `SermonsCarousel.tsx` — audio carousel entries with mediaelement or
  custom HTML5 audio player
- [ ] `Testimonies.tsx` — carousel of testimonial cards
- [ ] `UpcomingEvents.tsx` — carousel of event cards with images
- [ ] `Footer.tsx` — dark footer, 4 columns, social icons, copyright,
    Component Dock link

### 4. App composition (src/App.tsx)
- [ ] Import and compose all section components in order

### 5. Tests
- [ ] Write tests for each component (100% coverage)
- [ ] Verify `npm run test:coverage` passes

### 6. Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Visual check: compare against screenshot

## Design notes

### Visual design (from screenshot)
- Warm, faith-based charity/church aesthetic
- Hero: large background photo of church interior with dark overlay,
  white centered text, decorative Amatic SC font
- Red accent color (#f23a2e) throughout — buttons, icons, event band
- Clean white sections with subtle gray alternation
- Church service icons in primary red color
- Dark footer contrasting with light content sections
- Pill-shaped buttons give a modern, friendly feel
- Amatic SC decorative font adds warmth to headings
- Work Sans body font keeps text readable

### Section-by-section fidelity notes

1. **Navbar:** White background, logo left, right-aligned nav links.
   Mobile: hamburger toggles slide-in menu. Match 1:1.

2. **Hero Slider:** Full-bleed background images (use picsum.photos),
   dark semi-transparent overlay, white text centered. Amatic SC for
   heading. Two slides via owl-carousel → use CSS-based slider or
   lightweight React carousel. CTA pills with primary red background.

3. **Upcoming Events Band:** `bg-primary` red strip below hero.
   "Upcoming Events" text + event description. Keep it compact.

4. **Church Services:** 3-column grid. Each item: flaticon icon
   (→ lucide-react equivalent: Church, Send, MessageCircle),
   uppercase title, description text. White background.

5. **Feature Cards:** 3-column grid similar to Church Services.
   Each card has an icon, title, and description. "Read More" pill link.

6. **God is Love:** Dark overlay background section. Heading in Amatic SC,
   preacher name, scripture quote, description, "Watch Video" CTA.

7. **More Features:** Simple section heading + content items.

8. **Our Mission:** Centered text, heading + paragraph + "Read More".

9. **Sermons Carousel:** Carousel with sermon entries. Each entry has
   title, date, and audio player UI. Use HTML5 audio or a simple player.

10. **Testimonies:** Carousel of cards with quote text and author name.

11. **Upcoming Events:** Carousel of event cards. Each card has an image,
    date badge, title, location, description.

12. **Footer:** Black background, 4 columns (About, Quick Menu, Ministries,
    Get In Touch), social icons (lucide-react), copyright with year,
    Component Dock link replacing any external attribution.

### Icon mapping (icomoon/flaticon → lucide-react)
- `flaticon-speaker` → `Volume2` or `Church`
- `flaticon-paper-plane` → `Send`
- `flaticon-chat-1` → `MessageCircle`
- `icon-clock` → `Clock`
- `icon-comments` → `MessageSquare`
- Social: `Facebook`, `Twitter`, `Instagram` → lucide equivalents
