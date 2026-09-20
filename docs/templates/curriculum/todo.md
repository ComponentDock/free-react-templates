# Curriculum — Implementation Notes

ColorLib source: https://colorlib.com/wp/template/university/
Preview: https://preview.colorlib.com/theme/university/
New name: curriculum
App folder: apps/curriculum

## Structure order (section components)

1. `Navbar.tsx` — Sticky white nav, brand text, dropdown menus, Login/Register
2. `Hero.tsx` — Full-viewport parallax hero with search form (3 fields + button) + CTA
3. `About.tsx` — 2-column: text + video thumbnail with play button
4. `Features.tsx` — 4-column icon cards
5. `Counter.tsx` — bg-light, image left, stats right (animated counters)
6. `PopularCourses.tsx` — bg-light, carousel of course cards
7. `Teachers.tsx` — 3-column flip cards (CSS 3D transform on hover)
8. `Blog.tsx` — bg-light, featured post + small posts
9. `Subscribe.tsx` — Parallax bg, heading + email form
10. `Footer.tsx` — 4-column dark footer + copyright + social + Component Dock link

## Design notes

- Brand color: #11cbd7 (teal/cyan) — use in @theme as `brand`
- Font: Rubik (load via Google Fonts <link> in index.html, weights 300/400/500)
- Buttons: 4px border-radius, brand bg, white text; hover = transparent bg
- Navbar: sticky, white bg, shadow `0 5px 80px -10px rgba(0,0,0,0.5)`
- Dropdown menus: sharp corners (0px radius), shadow, brand color on hover
- Hero: 100vh min-height, dark overlay on background image, centered form
- Video popup: use react-youtube or a modal for the play button trigger
- Teacher flip cards: CSS `perspective` + `transform: rotateY(180deg)` on hover
- Counters: animate number from 0 to target using IntersectionObserver + requestAnimationFrame
- Parallax: use CSS `background-attachment: fixed` (simpler than stellar.js)
- Subscribe section: parallax background with form overlay
- Footer: dark bg, 4 cols, Component Dock link replaces Colorlib attribution

## Fidelity priorities

1. Section order must match 1:1
2. Brand color #11cbd7 must be exact
3. Rubik font throughout
4. Flip-card animation on Teachers section
5. Animated counters on Stats section
6. Course carousel (can use a simple scrollable flex or a lightweight carousel lib)
7. Search form layout in hero (3 inline fields + button)
8. Parallax backgrounds on hero and subscribe sections

## Placeholder assets

- Hero bg: `https://picsum.photos/seed/curriculum-hero/1920/1080`
- About video thumb: `https://picsum.photos/seed/curriculum-about/800/450`
- Feature icons: use lucide-react (BookOpen, GraduationCap, Award, Users)
- Stats image: `https://picsum.photos/seed/curriculum-stats/600/400`
- Course images: `https://picsum.photos/seed/curriculum-course-{1..8}/400/250`
- Teacher photos: `https://picsum.photos/seed/curriculum-teacher-{1..3}/400/500`
- Blog images: `https://picsum.photos/seed/curriculum-blog-{1..5}/800/450`
- Subscribe bg: `https://picsum.photos/seed/curriculum-subscribe/1920/400`
