# Aula — Implementation Notes

## Source mapping
- **ColorLib source:** University (https://colorlib.com/wp/template/university/)
- **Preview:** https://preview.colorlib.com/theme/university/
- **New name:** aula

## Section order (fidelity reference)

| # | Section | Component | Notes |
|---|---|---|---|
| 1 | Navbar | `Navbar.tsx` | White bg, uppercase brand "AULA" (.2em letter-spacing), nav links with dropdowns (Courses, Categories), Login/Register right-aligned, bottom shadow |
| 2 | Hero | `Hero.tsx` | Full-viewport bg image, rgba(0,0,0,0.1) overlay, centered search form (keyword + 2 dropdowns + Search btn), subtext, "Register Now" CTA with shadow |
| 3 | Welcome | `Welcome.tsx` | Two-col: left=text ("Welcome to Aula" h2 in #11cbd7, paragraph, "Read More" btn), right=image with circular play button overlay |
| 4 | Features | `Features.tsx` | 4-col grid: icon (lucide), heading, short text, "Read More →" link. White bg. Icons: book, graduation cap, award, user |
| 5 | Counter | `Counter.tsx` | Light gray bg, two-col: left=image, right=heading "Education is Life" + 4 stat items (icon circle + animated count + label). Stats: Students 12921, Schools 51, Books 3902, Graduates 1921 |
| 6 | Courses | `Courses.tsx` | Light gray bg, heading "Popular Courses" + "Enroll Now" btn, horizontal scroll (CSS scroll-snap or swiper). Course cards: image, title, desc, enrollment count, price (free/strikethrough) |
| 7 | Teachers | `Teachers.tsx` | Heading "Teachers", 3 flip cards. Front: bg image + name + role. Back: quote blockquote + author. CSS 3D transform on hover |
| 8 | Blog | `Blog.tsx` | Light gray bg, heading "Blog", two-col: left=featured post (large image + title + meta), right=3 sidebar posts (small thumb + title + meta). Meta: date, author, comments |
| 9 | Newsletter | `Newsletter.tsx` | Full-width #11cbd7 bg, two-col: left=heading + text, right=email input + Subscribe btn |
| 10 | Footer | `Footer.tsx` | Four-col: brand description, quick links (2-col ul), blog posts (3 items), contact info (address, phone, email, hours). Copyright + social icons. Component Dock link |

## Design token mapping to Tailwind

```css
/* index.css @theme block */
--color-brand: #11cbd7;
--font-family-body: "Rubik", sans-serif;
```

- `text-brand` → #11cbd7 (headings, links, newsletter)
- `bg-brand` → #11cbd7 (buttons, newsletter)
- `text-gray` → default body text
- Buttons: `bg-brand text-white border-2 border-transparent rounded px-6 py-2 hover:bg-transparent hover:text-black hover:border-brand`
- Hero buttons: add `shadow-[0_5px_20px_-5px_rgba(0,0,0,0.2)]` and on hover `hover:border-white hover:text-white`
- Section heading: `text-5xl font-light text-black`
- Play button: `rounded-full` overlay on image
- Dropdowns: `rounded-none` (sharp)
- Card radius: `rounded` (4px)

## Icon mapping (lucide-react)

| ColorLib icon | lucide-react replacement |
|---|---|
| flaticon-book | BookOpen |
| flaticon-student | GraduationCap |
| flaticon-diploma | Award |
| flaticon-professor | User |
| flaticon-university | Building2 |
| flaticon-books | Library |
| flaticon-mortarboard | GraduationCap |
| ion-ios-play | Play |
| ion-arrow-right-c | ArrowRight |
| ion-android-calendar | Calendar |
| ion-android-person | User |
| ion-chatbubble | MessageCircle |
| ion-android-pin | MapPin |
| ion-ios-telephone | Phone |
| ion-android-mail | Mail |
| ion-android-time | Clock |
| ion-ios-arrow-down | ChevronDown |

## Image placeholders

- Hero bg: `https://picsum.photos/seed/aula-hero/1920/1080`
- Welcome image: `https://picsum.photos/seed/aula-welcome/800/600`
- Counter image: `https://picsum.photos/seed/aula-counter/800/600`
- Course images: `https://picsum.photos/seed/aula-course-{1..6}/400/300`
- Teacher images: `https://picsum.photos/seed/aula-teacher-{1..3}/400/500`
- Blog images: `https://picsum.photos/seed/aula-blog-{1..4}/800/500`

## Implementation tasks

- [ ] Scaffold `apps/aula/` from simplest existing app
- [ ] Set up Tailwind with brand tokens in `index.css`
- [ ] Implement Navbar component
- [ ] Implement Hero component with search form
- [ ] Implement Welcome component with video overlay
- [ ] Implement Features component (4-column grid)
- [ ] Implement Counter component with animated stats
- [ ] Implement Courses carousel component
- [ ] Implement Teachers flip card component
- [ ] Implement Blog section (featured + sidebar)
- [ ] Implement Newsletter CTA
- [ ] Implement Footer with 4-column layout
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh aula
- [ ] Update TEMPLATES.md: mark [x]
