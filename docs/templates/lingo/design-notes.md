# Lingo — Design Notes

## Visual design (from DOM + CSS analysis)

### Overall aesthetic
- Education/language-learning theme with a clean, professional look
- Dark hero with centered text creates strong visual contrast
- Warm taupe register section provides a visual break between content sections
- Grid-based card layouts throughout (3-column standard, responsive stacking)

### Color palette
- Primary: deep indigo `#2e21df` — used for CTA buttons and course "paid" badges
- Secondary: warm taupe `#937c6f` — register section background (full-width)
- Accent: golden yellow `#f9cf0e` — free course badge, hover states
- Dark: `#252525` (hero + footer), `#232323` (footer body)
- Light: `#f1f1f1` (courses bg, blog categories bg), `#FFFFFF` (cards, instructor/events sections)
- Text: `#000000` (headings), `#7c7c7c` / `#929292` (body/muted)

### Typography
- Primary: Poppins (weights 400-700) — body, headings, nav
- Secondary: Montserrat — used sparingly for accents
- Loaded via Google Fonts `<link>` in `index.html`

### Button styles
- CTA: white text, indigo bg, 3px radius, uppercase, bold, ~14px 35px padding
- Free badge: golden bg, 3px radius, uppercase
- Paid badge: indigo bg, same radius
- Search button: circular 50% radius, light gray bg

### Section-by-section fidelity notes

1. **Header**: Top bar has phone + language dropdown + social icons. Main nav: 6 links. Search icon + hamburger for mobile. Logo text on left.
2. **Hero**: Full-width dark bg image, centered white text, "Learn Languages Easily" headline, subtitle, CTA button. Simple and bold.
3. **Courses**: Light gray bg. "Our Courses" title. 3 identical cards in a row. Each: image top, title, instructor+language info, lorem text, footer with student count + star rating. Free/paid badge overlaps image bottom-right.
4. **Instructors**: White bg. "Meet Our Team" title. 3 cards centered. Circular photo with hover overlay (social icons). Name, "Teacher" title, short bio below.
5. **Register**: Full-width taupe bg (#937c6f). "Courses For Free" title. Registration form with 4 text inputs in a 2x2 grid. Countdown timer area on the right side. This section is a visual break — warm color against the otherwise cool palette.
6. **Events**: White bg. "Upcoming Events" title. 3 cards. Each: image with overlaid date badge (big day number + month abbreviation), title below, category tag on right.
7. **Blog**: Light gray bg. Split layout: left 2/3 has title + 2x3 grid of small category cards (image + title). Right 1/3 has featured post (large image + category tag + title + description). The 6 categories are: travel, languages, cultures, fashion, cooking, hobbies.
8. **Footer**: Dark bg (#232323). 4-column layout: left has logo + subscribe input (newsletter), then About Us, Help & Support, Privacy & Terms columns. Copyright bar at bottom. Must include Component Dock link.

### Responsive behavior
- Hamburger menu replaces nav on mobile
- 3-col grids → 1-col stacked on mobile
- Blog split → stacked vertical on mobile
- Footer columns → stacked on mobile

### Placeholder strategy
- Course images: `https://picsum.photos/seed/lingo-course-<n>/350/200`
- Instructor photos: `https://picsum.photos/seed/lingo-instructor-<n>/200/200`
- Event images: `https://picsum.photos/seed/lingo-event-<n>/350/200`
- Blog images: `https://picsum.photos/seed/lingo-blog-<n>/800/400` (featured), `/350/200` (categories)
