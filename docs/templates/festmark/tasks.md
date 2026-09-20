# Festmark — Implementation Tasks

Source: ColorLib Eventro (https://preview.colorlib.com/theme/eventro/)
New name: festmark

## Component breakdown

1. **Navbar.tsx** — Transparent sticky header
   - Logo text (left)
   - Nav links: Home, About, Programs, Speakers, Blog (dropdown), Contact
   - "Buy Ticket" CTA button (purple bg, yellow text)
   - Becomes white bg + dark text on scroll (sticky behavior)
   - Mobile hamburger menu

2. **Hero.tsx** — Full-width hero slider
   - Background image (picsum.photos/seed/festmark-hero/1920/900)
   - Date label in yellow (#FDE449) Oswald font
   - Large heading "Business Conference" (Oswald, white, 120px desktop)
   - Description paragraph (white)
   - "Join Now" button (yellow bg, purple text, 5px radius)
   - "Watch Video" outlined button (white border, white text)
   - Rotated decorative "Innovated" text on right side

3. **About.tsx** — Two-column about section
   - White background
   - "About the Conference" section heading
   - Left: image (picsum.photos/seed/festmark-about/600/400)
   - Right: "Fully innovative conference" heading, description, location info with icons

4. **ProgramIntro.tsx** — Two-column tech companies section
   - White background
   - Left: heading, description text, "Join Now" button
   - Right: image (picsum.photos/seed/festmark-program/600/400)

5. **Subscribe.tsx** — Newsletter/subscribe section
   - Background image (picsum.photos/seed/festmark-subscribe/1920/400)
   - Heading "We have top executive & start up here"
   - Description text
   - Email input + "Subscribe" button (right-aligned layout)

6. **ProgramSchedule.tsx** — Tabbed schedule
   - White background
   - "Program Details" section heading
   - Tab navigation (4 dates)
   - Each tab: 3 program items
   - Each item: speaker avatar, title, description, time, speaker name

7. **Speakers.tsx** — Speaker cards grid
   - Lavender (#F6F7FF) background
   - "Our Speakers" section heading
   - 4-column grid of speaker cards
   - Each card: image, hover overlay with social icons (FB, Twitter, LinkedIn), name, role

8. **ContactCTA.tsx** — Blue CTA section
   - Blue background image (picsum.photos/seed/festmark-cta/1920/400)
   - "Book your seat" heading (white)
   - Description text (white)
   - "Buy Ticket" button (yellow bg, purple text)

9. **Footer.tsx** — Black footer
   - Black background
   - Centered social icons (Facebook, Instagram, Twitter, LinkedIn, YouTube, Tumblr)
   - Centered nav links
   - Copyright with Component Dock link

## Design notes

### Colors
- Primary: #302072 (dark purple) — headings, nav, button hover
- Accent: #FDE449 (yellow) — CTAs, highlights
- Section light bg: #F6F7FF (lavender)
- Section blue bg: #0154F7 (image overlay)
- Body text: #79709D (muted purple)
- Footer bg: #000

### Typography
- Headings: Oswald (Google Fonts) — weight 500-700
- Body: Roboto (Google Fonts) — weight 300-500

### Buttons
- Primary: yellow bg (#FDE449), purple text (#302072), 5px radius
- Hover: purple bg (#302072), white text (animated slide-in)
- Header CTA: purple bg (#302072), yellow text (#FDE449)

### Section order
1. Navbar
2. Hero (slider)
3. About (white bg)
4. Program Intro (white bg)
5. Subscribe (image bg)
6. Program Schedule (white bg, tabs)
7. Speakers (lavender bg)
8. Contact CTA (blue image bg)
9. Footer (black bg)

### Placeholder images
- Hero: https://picsum.photos/seed/festmark-hero/1920/900
- About: https://picsum.photos/seed/festmark-about/600/400
- Program intro: https://picsum.photos/seed/festmark-program/600/400
- Subscribe bg: https://picsum.photos/seed/festmark-subscribe/1920/400
- Speaker avatars: https://picsum.photos/seed/festmark-speaker-N/200/200 (N=1-4)
- CTA bg: https://picsum.photos/seed/festmark-cta/1920/400

### Fidelity notes
- Match original's transparent header → white sticky on scroll
- Hero slider: can simplify to single slide (original has 2 identical slides)
- Program tabs: implement with state, not Bootstrap JS
- Speaker hover overlay: CSS transition for social icons
- Subscribe section: right-aligned form layout
- Footer: centered layout (not multi-column)
