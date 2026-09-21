# Yogavibe — Implementation Todo & Design Notes

## Source
- ColorLib: Doyoga (https://colorlib.com/wp/template/doyoga/)
- Preview: https://preview.colorlib.com/theme/doyoga/
- New name: yogavibe

## Design Notes

### Visual Aesthetic
Clean, minimal yoga/wellness feel. Soft photography with warm tones. Purple/indigo (#6610f2) as the sole brand accent color against white and near-black. Quicksand font gives a friendly, rounded feel appropriate for wellness content.

### Section Order (top to bottom)
1. **TopBar** — Dark strip with email + phone (left), social icons (right). Hidden on mobile.
2. **Navbar** — White, sticky. Logo "YOGAVIBE" left. Links: Home, Classes, About, Events, Gallery, Contact. Hamburger on mobile.
3. **Hero** — Full-viewport bg image with dark overlay. Centered: "A Yoga Studio" heading, subtitle, circular play button + "Watch the video".
4. **FeaturedClasses** — Left-aligned heading with purple underline. Description text. Previous/Next outline buttons. OwlCarousel of 4 class cards (image bg + price + name overlay).
5. **Schedule** — Heading + description. 2-column grid of 4 schedule items. Each: bg image one side, text other side (class name, desc, time, date, "Join from $15" btn).
6. **About** — Split layout: text left (5-col), two overlapping images right (6-col).
7. **Events** — 2-column cards. Each: bg image one side, text other side (title, date, desc, "Read More" btn).
8. **Gallery** — Centered heading. Filter buttons (All/Classes/Intern/Training). 3-col masonry grid. Hover overlay with search icon.
9. **Contact** — Heading "Get In Touch". Left: form (Name, Phone, Email, Message, Send). Right: contact details with icons (address, phone, email).
10. **Footer** — Dark bg. 3 cols: About text, Quick Links (2 sub-cols), Newsletter + Social. Copyright with Component Dock link.

### Key Design Tokens
- Brand: `#6610f2` (indigo/violet)
- Font: Quicksand (Google Fonts)
- Body text: `#333333`
- Muted text: `#8c8c8c`
- Buttons: Bootstrap `.btn-primary` with `#6610f2` bg, white text
- Button hover: transparent bg, `#6610f2` border, black text
- Section backgrounds: alternating white and very light gray
- Footer: dark (near-black) background
- Hero overlay: semi-transparent dark

### Layout Patterns
- Bootstrap grid (12-col) throughout
- Split layouts: 5/7 or 6/6 column splits
- Full-width sections for hero, schedule, contact heading
- Container max-width with responsive breakpoints

### Images
- Hero: large yoga practice photo (full viewport)
- Classes: individual yoga class photos
- Schedule: yoga photos as bg images for each item
- About: two overlapping portrait photos
- Events: yoga/fitness photos
- Gallery: 12 masonry images (mix of class + studio photos)
- All use picsum.photos with deterministic seeds in implementation

## Implementation Tasks

- [ ] Copy boilerplate app structure (simplest existing app as base)
- [ ] Create TopBar component (email, phone, social icons)
- [ ] Create Navbar component (logo, links, mobile hamburger, sticky)
- [ ] Create Hero component (bg image, overlay, heading, subtitle, play button)
- [ ] Create FeaturedClasses component (heading, prev/next, carousel of 4 cards)
- [ ] Create Schedule component (heading, 2-col grid of 4 items with image+text)
- [ ] Create About component (split layout, overlapping images)
- [ ] Create Events component (2-column event cards)
- [ ] Create Gallery component (filter buttons, masonry grid, hover overlay)
- [ ] Create Contact component (form + details with icons)
- [ ] Create Footer component (3 cols, newsletter, social, copyright)
- [ ] Create App.tsx composing all sections in order
- [ ] Set up Tailwind theme with brand color #6610f2
- [ ] Load Quicksand from Google Fonts in index.html
- [ ] Add placeholder images (picsum.photos seeds)
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh, fix any issues
- [ ] Update public/CNAME + package.json homepage
- [ ] Commit and open PR
