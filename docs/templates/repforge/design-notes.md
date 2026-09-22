# RepForge — Design Notes & Task Outline

## Template Overview

- **New name:** RepForge
- **ColorLib source:** Ponigym
- **Preview URL:** https://preview.colorlib.com/theme/ponigym/
- **Category:** Gym & Fitness Landing Page
- **Stack:** React 19, Tailwind CSS 4, TypeScript, Vite

---

## Section Structure (fidelity order)

| #  | Section            | Component File       | Fidelity Notes |
| -- | ------------------ | -------------------- | -------------- |
| 1  | Header             | `Navbar.tsx`         | Sticky header with logo, 6 nav links (Home, About, Schedule, Portfolio, Blog, Contact), search icon. Mobile: hamburger toggle with slide-in menu. |
| 2  | Hero               | `Hero.tsx`           | Full-width carousel (3 slides). Each: bg image, subtitle "Elite Personal Training Services", h1 "Make it Shape" (Shape in red), "Join Us Now" button. Use embla-carousel or similar. Auto-advance with dots/arrows. |
| 3  | Services           | `Services.tsx`       | Section title with red left bar. 2×2 grid of colored service cards (purple #9d69d8, blue #62b3d3, green #5acd57, coral #ed5e4c). Each: icon (lucide-react), title, description. Right column: video preview image with circular play button overlay. |
| 4  | CTA                | `Cta.tsx`            | Full-width parallax bg image. Centered: h2 "Start your Journey with our exciting offers", subtitle, "Join With Us" primary button. |
| 5  | ClassSection       | `ClassSection.tsx`   | Section title with red left bar. "View All Schedule" button on right. 5 tabs (Body Building, Racing Running, Yoga Fitness, Kick Boxing, Cardio Workout). Each tab: left image + right description + "View Schedule" link. |
| 6  | TrainerSchedule    | `TrainerSchedule.tsx`| Parallax dark bg. Section title in white. Weekly table: columns Mon–Sun, rows 10:00/14:00/16:00/18:00. Cells show workout type, time range, trainer name. Colored cell backgrounds per workout type. |
| 7  | Team               | `Team.tsx`           | Light gray bg (#f2f4f5). Section title + "View All" button. 3 trainers in alternating photo-text-photo layout. Each: photo, specialization tag, name, description, social icons (FB, Twitter, Pinterest, Vimeo via lucide-react). |
| 8  | LatestNews         | `LatestNews.tsx`     | Section title centered. 3 blog cards: image, date + comment count, title link. |
| 9  | Footer             | `Footer.tsx`         | Split layout: left = Google Map embed + map widget (address, phone); right = contact form with parallax bg (Name, Email, Subject, Message, Submit button). Bottom register bar: copyright with "Made with Component Dock", footer links, social icons. |

---

## Design Token Mapping

```
Font families:
  Headings/Buttons → Oswald (Google Fonts)
  Body/UI → Roboto (Google Fonts)

Colors (Tailwind @theme):
  --color-primary: #f34e3a     (red CTAs, accents, section bars)
  --color-heading: #191919     (all headings)
  --color-body: #8f8fa8        (paragraphs)
  --color-muted: #6e6e6e       (secondary text)
  --color-white: #ffffff       (hero text, card text)
  --color-team-bg: #f2f4f5     (team section bg)

Service card backgrounds:
  Weight Lifting → #9d69d8 (purple)
  Body Building → #62b3d3 (blue)
  Healthy → #5acd57 (green)
  Yoga → #ed5e4c (coral)

Button styles:
  .primary-btn: Oswald, uppercase, letter-spacing 2px,
    bg #f34e3a, color white, no border-radius,
    padding 12px 39px

Section spacing:
  .spad: padding-top 100px, padding-bottom 100px
  Section title ::before: 3px wide, 29px tall red bar
```

---

## Component Decomposition Notes

1. **Hero.tsx** — Consider using a simple interval-based auto-advance (no heavy carousel lib). Track active index, render all 3 slides, translate the track. Dots/arrows for manual control.

2. **ClassSection.tsx** — State-managed tab switcher. Active tab index controls which content panel is visible. Default to first tab (Body Building).

3. **TrainerSchedule.tsx** — Pure data-driven table. Define schedule data as typed array. Color-code cells by workout type. Mobile: horizontal scroll on table.

4. **Team.tsx** — 3 trainer objects with photo, tag, name, bio, social links. Use CSS grid with alternating order for the photo-text layout.

5. **LatestNews.tsx** — 3 blog post objects. Simple card layout: image, meta (date + comments), title.

6. **Footer.tsx** — Split 50/50 layout. Left: iframe map embed + overlay widget. Right: contact form. Bottom: copyright bar with Component Dock link.

---

## Fidelity Checklist

- [ ] Oswald + Roboto fonts loaded
- [ ] Brand color #f34e3a used consistently
- [ ] Section order matches original: Header → Hero → Services → CTA → Class → Schedule → Team → News → Footer
- [ ] Service cards use correct 4 background colors
- [ ] Hero has 3 carousel slides
- [ ] Class section has 5 switchable tabs
- [ ] Schedule table renders weekly grid
- [ ] Team uses alternating photo-text layout
- [ ] Footer has map + form split
- [ ] Component Dock link in footer
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Icons via lucide-react
