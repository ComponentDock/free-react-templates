# LearnPeak — Design Notes & Implementation Todo

## Source
- ColorLib: Elearn (https://colorlib.com/wp/template/elearn/)
- Preview: https://preview.colorlib.com/theme/elearn/

## Section order (top to bottom)
1. Top Bar (Register/Login, dark)
2. Header/Navbar (logo "learn", nav links, search icon, dark bg)
3. Home Slider (3 slides, centered content, background images, dark overlay)
4. Featured Course (split layout: text left, image right)
5. Courses Carousel (3 cards, Owl Carousel style, "Choose your course" heading)
6. Milestones/Counters (4 counters, dark background)
7. News/Blog (3 post previews with date badges)
8. Join CTA ("Join Our Platform Today" + register button)
9. Footer (4 columns, dark, social icons)

## Design token notes
- Primary brand: #ff6600 (orange) — buttons, tags, accents
- Secondary: #ff8a00 (lighter orange) — button bg, hover states
- Hover: #ffae00 (golden orange)
- Dark bg: #2c2b31 — top bar, navbar, milestones, footer
- Dark alt: #44425a
- Muted text: #6c6a74 (body), #918ea0 (light)
- Light bg: #f2f1f8 (faint lavender for course sections)
- Font: Montserrat only (headings + body)
- Buttons: 47px fixed height, sharp corners (no border-radius), orange bg
- Avatars: circular (50% border-radius)
- Slider: full-width background images with dark overlay, white text

## Fidelity notes per section
- **Top Bar + Navbar:** Dark background (#2c2b31). Top bar has Register/Login links. Navbar has "learn" logo on left, nav links (Home, Courses, Instructors, Events, Blog, Contact), search icon. Single dark header area.
- **Home Slider:** Owl-carousel with 3 slides. Each: background image, centered white text (logo, heading, subtitle), two orange buttons ("learn more" / "see all courses"). Auto-advancing.
- **Featured Course:** Two-column layout. Left: tag badge, price, title ("Online Literature Course"), description paragraph, author avatar+name, sales count. Right: large course background image. Light bg (#f2f1f8 or white).
- **Courses Carousel:** "Choose your course" heading + search button. 3 course cards in a horizontal carousel. Each: image with tag overlay (Featured/New), title, author avatar+name, footer with stats (reviews, students). Prev/next arrows.
- **Milestones:** Dark background (#2c2b31). 4 columns: icon + counter number + label text. White text on dark.
- **News/Blog:** 3 blog post cards. Each: date badge (day number + month), image, title, author name. Light bg.
- **Join CTA:** Simple section with "Join Our Platform Today" heading + "register now" orange button. Likely light or slightly tinted bg.
- **Footer:** Dark background (#2c2b31). 4 columns: About (logo + social icons), Links (nav), Courses (course links), Contact (address, phone, email). Component Dock link at bottom.

## Implementation todo
- [ ] Copy simplest existing app as scaffold, rename package
- [ ] Set up index.html with Google Fonts (Montserrat)
- [ ] Create TopBar.tsx (Register/Login links, dark bg)
- [ ] Create Navbar.tsx (logo, nav links, search icon)
- [ ] Create HomeSlider.tsx (3-slide carousel with centered content)
- [ ] Create FeaturedCourse.tsx (split layout: text left, image right)
- [ ] Create CoursesCarousel.tsx (3 course cards, carousel navigation)
- [ ] Create Milestones.tsx (4 counters in dark section)
- [ ] Create NewsSection.tsx (3 blog post cards)
- [ ] Create JoinCta.tsx (heading + register button)
- [ ] Create Footer.tsx (4 columns + Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Set up index.css with Tailwind theme tokens
- [ ] Write tests for all components (TDD: tests first)
- [ ] Ensure 100% coverage
- [ ] Run verify-app.sh
