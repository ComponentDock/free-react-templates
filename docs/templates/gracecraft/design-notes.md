# Gracecraft — Implementation Notes

**Source:** ColorLib Mimosan (https://preview.colorlib.com/theme/mimosan/)
**Preview URL:** https://preview.colorlib.com/theme/mimosan/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mimosan-free-template.jpg

## Section order and fidelity notes

### 1. TopBar

- Full-width bar with parallax background image
- Left: email + phone icon+text
- Right: social icon links (facebook, twitter, pinterest, linkedin, google-plus)
- Use lucide-react icons: Mail, Phone for contact; Lucide social icons or inline SVGs
- Text color white on dark parallax image

### 2. Header

- Sticky/fixed white header with logo on left, nav links on right
- Logo: "Gracecraft" in Old Standard TT serif, color #b10707
- Nav links: Home, About, Sermons, Events, Blog, Contact — Open Sans, text #181818
- Hamburger + search icon on far right
- Menu overlay for mobile (full-screen dark overlay with centered nav)

### 3. Hero

- Full-viewport-height parallax background image
- Centered content: headline (white, large), body text (white, smaller), CTA button
- CTA: "Join with us" — bg #b10707, text white, 160px × 46px, 3px radius
- Use picsum.photos/seed/gracecraft-hero/1920/1080 for placeholder

### 4. EventBanner

- Horizontal card layout: date badge left, event info center, countdown right
- Date badge: circular/square with day number large + month abbreviation
- Event info: "UPCOMING EVENT:" label + title + time + location
- Countdown: 4 blocks (days/hrs/min/sec) with labels below numbers
- Background: light #f9f9f9

### 5. About

- Two-column layout: left = image, right = text
- Section title "Welcome to our church" + subtitle in #7c7c7c
- Body text in #7c7c7c
- "Read story" button (bg #b10707, white text)
- Use picsum.photos/seed/gracecraft-about/600/400

### 6. Sermons

- Section title "Sermons today" centered
- 3-column card grid
- Each card: image top, title, "Pastor:" name, "Categories:" tags
- Card background white, subtle border/shadow
- Use picsum.photos/seed/gracecraft-sermon-N/400/250

### 7. Donation

- Full-width parallax background image
- Overlay card with campaign info
- Left: campaign title, description, date, categories
- Right: progress bar (animated fill), "Raised" and "Goal" amounts
- "Donate now" button (bg #b10707)
- Use picsum.photos/seed/gracecraft-donate/1920/600 for background

### 8. Quote

- Centered blockquote on white background
- Large quote icon (decorative, red #b10707)
- Quote text in italic serif
- Source attribution below

### 9. Gallery

- Flex-wrap image grid, 5-6 images in masonry-like layout
- Images link to larger view (colorbox pattern → skip overlay, just display grid)
- Use picsum.photos/seed/gracecraft-gallery-N/ (various sizes)

### 10. LatestNews

- Section title "Latest news" centered
- 3-column grid of blog post cards
- Each: image, title (h3), author + date + comment count in meta row, excerpt text
- Meta icons: user, calendar, comment

### 11. Footer

- Full-width parallax background image
- 3 columns:
  - Contact: logo, address, phone, email with icons
  - Useful links: list of nav links with angle-right icons
  - Subscribe: description text + email input + subscribe button
- Copyright row: "All rights reserved | Made with Component Dock"
- Social icons on right of copyright row

## Design token reference

```css
/* Brand colors */
--brand-primary: #b10707;
--brand-secondary: #ff6347;
--brand-accent: #ffa07f;
--brand-alert: #eb4141;

/* Text */
--text-dark: #181818;
--text-body: #353535;
--text-muted: #7c7c7c;
--text-light: #a5a5a5;

/* Backgrounds */
--bg-white: #ffffff;
--bg-light-1: #f9f9f9;
--bg-light-2: #f7f7f7;

/* Typography */
--font-body: 'Assistant', sans-serif;
--font-heading: 'Old Standard TT', serif;
--font-nav: 'Open Sans', sans-serif;

/* Buttons */
--btn-bg: #b10707;
--btn-text: #ffffff;
--btn-width: 160px;
--btn-height: 46px;
--btn-radius: 3px;
```

## Component plan

| Component   | File              | Notes                        |
| ----------- | ----------------- | ---------------------------- |
| TopBar      | `TopBar.tsx`      | Contact info + social links  |
| Header      | `Header.tsx`      | Sticky nav with mobile menu  |
| Hero        | `Hero.tsx`        | Parallax bg, headline, CTA   |
| EventBanner | `EventBanner.tsx` | Date badge + countdown timer |
| About       | `About.tsx`       | Two-column image + text      |
| Sermons     | `Sermons.tsx`     | 3-card sermon grid           |
| Donation    | `Donation.tsx`    | Parallax + progress bar      |
| Quote       | `Quote.tsx`       | Blockquote with icon         |
| Gallery     | `Gallery.tsx`     | Image grid                   |
| LatestNews  | `LatestNews.tsx`  | 3-post news grid             |
| Footer      | `Footer.tsx`      | 3-column footer + copyright  |
