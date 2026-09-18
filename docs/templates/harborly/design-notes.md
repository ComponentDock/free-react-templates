# Harborly — Design Notes & Task Outline

Source: ColorLib "Kare" — https://preview.colorlib.com/theme/kare/

## Structure order (section-by-section)

### 1. Navbar
- Sticky top nav, logo left, centered nav links, "Donate Now" CTA right
- Links: Home, Causes, Events, Pages (dropdown), Blog (dropdown), Contact
- On scroll: solid background, slightly reduced height
- Use: `<nav>` semantic element, `position: sticky`

### 2. Hero Banner
- Full-width section with background image (use picsum.photos/seed/harborly-hero/1920/800)
- Dark overlay: `bg-black/30` or `bg-black/28`
- Centered content: large headline (text image in original → use styled h1), description paragraph
- Two buttons: primary (brand #ea2c58 bg) and secondary (white bg, dark text)
- Buttons: `rounded-none` (zero border-radius), `px-8`, `h-12`, `font-medium`

### 3. Donation Stats
- 4-column responsive grid (4 cols desktop, 2 cols tablet, 1 col mobile)
- Each box: icon (use Lucide: Heart, TrendingUp, Award, Users), h4 heading, description paragraph
- Light background: `bg-[#f9f9ff]`
- No card shadow — clean flat design

### 4. Our Major Causes
- Section heading: "Our Major Causes" centered
- Carousel of cause cards (use simple flex overflow-x-auto or CSS scroll snap for mobile-friendly version)
- Each card: image top, progress bar overlay on image, card body with raised/goal text, title, description, "Donate Here" button
- Progress bar: `#f8b600` gold fill on light gray track
- Card: `shadow-[0_7px_31px_#ddd]`, `rounded-none`

### 5. Make a Donation
- Section heading: "Make a Donation Today"
- 3-column grid of radio-button amount boxes ($10, $50, $100)
- Second row: $250 box, custom amount text input, submit button
- Each amount box: `border border-gray-300`, radio input + label with amount and "USD"
- Submit button: full-width primary button

### 6. Client Logos
- Simple horizontal logo carousel (auto-scroll or static row)
- 5 placeholder logos using picsum.photos/seed/harborly-logo-N/120/60
- Muted, low-contrast treatment

### 7. Support Campaign
- Section heading: "Support a campaign or fundraiser"
- 2-column grid of campaign cards
- Each card: thumbnail image left, title + amount right (flex row)
- Below image+text: progress bar with "Funded 76%" label
- Card: `shadow-[0_7px_31px_#ddd]`, `rounded-none`

### 8. Experience CTA
- Full-width banner with background image (picsum.photos/seed/harborly-cta/1920/400)
- Dark overlay `bg-black/40`
- Centered: heading, description, two CTA buttons (secondary style: dark bg)
- Buttons: `rounded-none`, `bg-[#222222]`, `text-white`

### 9. Footer
- 3-column layout: About Me | Newsletter | Follow Us
- About Me: heading + paragraph
- Newsletter: heading + email input + submit button (arrow icon)
- Follow Us: heading + social icons (Facebook, Twitter, Dribbble, Behance → use Lucide: Facebook, Twitter, Dribbble, Behance)
- Copyright line at bottom
- MUST include link to https://www.componentdock.com/

## Color palette for Tailwind @theme

```
--color-brand: #ea2c58;
--color-brand-dark: #222222;
--color-surface: #f9f9ff;
--color-surface-white: #ffffff;
--color-text-muted: #777777;
--color-text-light: #999999;
--color-progress: #f8b600;
--color-border: #dddddd;
```

## Implementation notes

- Font: load Roboto from Google Fonts in index.html
- Icons: replace Font Awesome / Linearicons with Lucide React equivalents
- Images: all use picsum.photos deterministic seeds
- Buttons: `rounded-none` everywhere (original has zero border-radius)
- Progress bars: simple div with percentage width, no animation needed
- Carousel: consider CSS scroll-snap for simple implementation, or basic auto-scroll
- Responsive: stack to single column on mobile, 2-col on tablet
