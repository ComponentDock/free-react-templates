# Mingle — Implementation Notes & Design Fidelity Guide

Source: ColorLib Meetme
Preview: https://preview.colorlib.com/theme/meetme/
New name: `mingle` (apps/mingle, @free-react-templates/mingle)

## Section-by-Section Fidelity Notes

### 1. Header (Navbar)
- Transparent overlay, absolute positioned, z-index 99
- Logo image left, nav links right-aligned with 45px spacing
- Nav links: uppercase, Roboto 12px, white color
- On scroll: fixed position, black background, shadow, height reduces
- Pages and Blog have dropdown sub-menus with white background + shadow

### 2. Hero Banner
- Full-width gradient: `linear-gradient(0deg, #766dff 0%, #88f3ff 100%)`
- Min-height ~700px
- White card box (`#fff`) overlapping bottom by ~200px, `border-radius: 12px`, `box-shadow: 0px 20px 80px 0px rgba(153,153,153,0.3)`
- Two-column flex layout: profile photo left (125px padding), text right
- Text: "Hello Everybody, i am" (h6), Name (h3), Role (h4), paragraph
- Contact list: 4 items with Linearicons icons (calendar, phone, envelope, home)
- Social row: 3 icons (Facebook, Twitter, LinkedIn) in `#e8e8e8` grey circles, 5px radius, hover → gradient

### 3. Welcome / About Myself
- Two-column layout (lg:6 + lg:6)
- Left: "About Myself" h4 + paragraph + 3 stat cards
- Stat cards: 1px solid `#eeeeee` border, 5px radius, icon (gradient text), h4 number, p label
- Right: 5 skill items with progress bars
- Progress bars: 1px `#eeeeee` border + padding, track `#e8e8e8`, bar gradient purple, 10px radius, 10px height
- Skills: After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%

### 4. Tabs (Experience / Education)
- Centered section, max-width container
- Two tabs: "My Experiences" (active) + "My Education"
- Tab nav links: uppercase, Roboto 12px
- Content: timeline list with date (left) + company/role (right)
- Each timeline item: `<li>` with `<span>` (dot) + media layout
- Simple structure, no complex animation needed

### 5. Features / Offerings
- Section bg: `#f9f9ff`
- Heading: "offerings to my clients" (uppercase, Heebo, `#222222`)
- 3-column grid (col-lg-4 col-md-6)
- Feature cards: icon (Flaticon) + h4 heading + p description
- No card border, just spacing
- Hover: box-shadow + white background

### 6. Gallery (Portfolio)
- Heading: "Our Latest Featured Projects"
- Subtitle: "Who are in extremely love with eco friendly system."
- Filter buttons: All, Vector, Raster, UI/UX, Printing
- 6 project cards in 3-column grid (col-lg-4 col-md-4 col-sm-6)
- Each card: image + overlay icon (lightbox trigger) + title + subtitle
- Images have hover overlay effect
- "Load More Items" button at bottom (gradient, sharp corners)
- Use Isotope for filtering (or CSS filter equivalent in React)

### 7. Testimonials
- Section bg: `#f9f9ff`
- Heading: "Testimonials"
- Owl carousel of testimonial cards
- Each card: 1px `#eeeeee` border, 10px radius, white bg, 40px padding
- Content: italic paragraph, h4 author name (uppercase), star icons (gold `#ffc000`)
- Use a simple carousel/slider in React (no jQuery dependency)

### 8. Footer
- Background: `#000` (pure black)
- 3 columns: col-lg-5 About + col-lg-5 Newsletter + col-lg-2 Social
- About: "About Me" heading (white, Heebo, 18px) + paragraph (Roboto 14px, line-height 24px)
- Newsletter: heading + paragraph + email input + gradient submit button (42px square, arrow icon)
- Social: heading + paragraph + 4 icon circles (Facebook, Twitter, Dribbble, Behance)
- Social icons: `#e8e8e8` circles, 5px radius, hover → gradient
- Footer MUST include Component Dock link

## Design Tokens (Tailwind @theme mapping)

```css
@theme {
  --color-brand-purple: #766dff;
  --color-brand-cyan: #88f3ff;
  --color-text-heading: #222222;
  --color-text-body: #777777;
  --color-bg-light: #f9f9ff;
  --color-bg-dark: #000000;
  --color-border: #eeeeee;
  --color-progress-bg: #e8e8e8;
  --color-star: #ffc000;
}
```

## Component Plan

1. `Navbar.tsx` — transparent → fixed on scroll, logo + nav links + dropdowns
2. `Hero.tsx` — gradient banner + white card with profile photo + bio + contact
3. `About.tsx` — About Myself heading + stats + skill progress bars
4. `ExperienceTabs.tsx` — tabbed experience/education timeline
5. `Features.tsx` — 3-column feature cards on light purple bg
6. `Gallery.tsx` — filterable project grid + "Load More" button
7. `Testimonials.tsx` — carousel of testimonial cards
8. `Footer.tsx` — black footer with about, newsletter, social

## Placeholder Images

- Profile photo: `https://picsum.photos/seed/mingle-profile/400/500`
- Gallery images: `https://picsum.photos/seed/mingle-proj-{1..6}/600/600`
