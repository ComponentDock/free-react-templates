# Template: Curriculum (Education / University Landing)
<!-- prep-status: shipped-as=ethos -->
> **SHIPPED-UNDER** — the ColorLib `university` design this prep describes already
> ships as `apps/ethos` (<https://ethos.free.componentdock.com>).
> Do not scaffold `apps/curriculum`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-ethos/spec.md`.

## Purpose

Recreation of ColorLib "University" — a multi-section education / university
landing template with search, courses, teachers, blog, and newsletter. The
React version lives in `apps/curriculum`.

- **ColorLib source**: https://colorlib.com/wp/template/university/
- **Live preview**: https://preview.colorlib.com/theme/university/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/university-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Design language**: Clean education aesthetic — white backgrounds, teal/cyan
  accent (#11cbd7), Rubik typography, Bootstrap 4 grid, parallax image sections,
  flip-card teacher profiles, owl-carousel courses.

## Design tokens

Extracted from the preview's `css/style.css` and inline `<style>` (Rubik font
preload via Cloudflare Fonts).

| Token            | Value                                  | Notes                                      |
| ---------------- | -------------------------------------- | ------------------------------------------ |
| Brand primary    | `#11cbd7`                             | Teal/cyan — buttons, active nav, accents   |
| Heading color    | `#000000`                             | All section titles                         |
| Body text        | `gray`                                | Paragraphs, descriptions                   |
| Light text       | `#cccccc`                             | Secondary info, meta text                  |
| White            | `#FFFFFF`                             | Page background, navbar                    |
| Light gray bg    | `bg-light` (Bootstrap)                | Counter section, Popular Courses, Blog     |
| Font — body      | `"Rubik", arial, sans-serif`          | All text (weight: 300)                     |
| Font — heading   | `"Rubik", arial, sans-serif`          | Headings (weight: 300, color: #000)        |
| Border radius    | `4px`                                 | Buttons, inputs                            |
| Button bg        | `#11cbd7`                             | Primary CTA buttons                        |
| Button text      | `#FFFFFF`                             |                                            |
| Button hover     | Transparent bg, white text            | `.btn-primary:hover` removes bg            |
| Play button      | `border-radius: 50%`                  | Circular overlay on video thumbnail        |
| Hero height      | `100vh` (min 750px)                   | Full-viewport hero with overlay            |
| Navbar shadow    | `0 5px 80px -10px rgba(0,0,0,0.5)`   | Sticky header elevated                     |
| Dropdown radius  | `0px`                                 | Sharp corners on dropdown menus            |
| Parallax BGs     | `data-stellar-background-ratio="0.5"` | Hero, subscribe section                    |

## Sections (HTML order)

1. **Navbar** — White background, sticky, logo "University" (uppercase, letter-spacing), nav items: Home, Courses (dropdown), Categories (dropdown), Blog, About, Contact; right side: Login / Register links
2. **Hero** — Full-viewport parallax background image with dark overlay, centered search form (keyword input + Category dropdown + Difficulty dropdown + Search button), tagline "We have more than 500 courses to improve your skills", "Register Now" CTA button
3. **About / Welcome** — 2-column layout: left = heading "Welcome to University" + description paragraph + "Read More" button; right = video thumbnail with circular play button (popup-vimeo)
4. **Features** — 4-column icon grid: Knowledge is power, Senior High School, College of Arts & Sciences, Unmatched Professor; each with flaticon icon, title, description, "Read More →" link
5. **Counter / Education is Life** — `bg-light` background, left = large image; right = heading + description + 4 animated stat counters (12,921 Students, 51 Schools, 3,902 Books, 1,921 Graduates) with flaticon icons
6. **Popular Courses** — `bg-light` background, centered heading + "Enroll Now" button, owl-carousel of course cards (image + title + description + enrollment numbers + price with optional strikethrough)
7. **Teachers** — 3-column flip cards: front shows teacher photo (full background) + name + specialty; back shows quote + small photo + name. Hover triggers CSS 3D flip
8. **Blog** — `bg-light` background, 2-column layout: left = 1 featured post (large image + title + meta: date, author, comments); right = 4 small posts (thumbnail + title + meta)
9. **Subscribe / Newsletter** — Parallax background, heading "Create cool websites" + description + email input + "Subscribe" button
10. **Footer** — Dark background, 4 columns: About (name + text), Quick Links (2-column list), Blog (3 recent posts with meta), Contact Information (address, phone, email, hours). Copyright bar with social icons (Facebook, Twitter, LinkedIn, Instagram)

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Displays brand name "University" (text, uppercase)

- **GIVEN** the recreation is rendered
- **THEN** the Displays brand name "University" (text, uppercase) behaves as described by the fidelity notes

#### Scenario: Nav items: Home, Courses, Categories, Blog, About, Contact

- **GIVEN** the recreation is rendered
- **THEN** the Nav items: Home, Courses, Categories, Blog, About, Contact behaves as described by the fidelity notes

#### Scenario: Courses and Categories have dropdown menus

- **GIVEN** the recreation is rendered
- **THEN** the Courses and Categories have dropdown menus behaves as described by the fidelity notes

#### Scenario: Right side shows Login / Register links

- **GIVEN** the recreation is rendered
- **THEN** the Right side shows Login / Register links behaves as described by the fidelity notes

#### Scenario: Navbar is sticky with white background and box shadow

- **GIVEN** the recreation is rendered
- **THEN** the Navbar is sticky with white background and box shadow behaves as described by the fidelity notes

#### Scenario: Dropdown items highlight with brand primary (#11cbd7) on hover

- **GIVEN** the recreation is rendered
- **THEN** the Dropdown items highlight with brand primary (#11cbd7) on hover behaves as described by the fidelity notes

### Hero

Feature: Hero Section

#### Scenario: Full-viewport height (100vh) with background image overlay

- **GIVEN** the recreation is rendered
- **THEN** the Full-viewport height (100vh) with background image overlay behaves as described by the fidelity notes

#### Scenario: Search form has keyword text input, category dropdown, difficulty dropdown, and search button

- **GIVEN** the recreation is rendered
- **THEN** the Search form has keyword text input, category dropdown, difficulty dropdown, and search button behaves as described by the fidelity notes

#### Scenario: Search button styled with brand primary (#11cbd7) and white text

- **GIVEN** the recreation is rendered
- **THEN** the Search button styled with brand primary (#11cbd7) and white text behaves as described by the fidelity notes

#### Scenario: Tagline text "We have more than 500 courses to improve your skills"

- **GIVEN** the recreation is rendered
- **THEN** the Tagline text "We have more than 500 courses to improve your skills" behaves as described by the fidelity notes

#### Scenario: "Register Now" CTA button below tagline

- **GIVEN** the recreation is rendered
- **THEN** the "Register Now" CTA button below tagline behaves as described by the fidelity notes

### About / Welcome

Feature: About Section

#### Scenario: 2-column layout with text on left, video thumbnail on right

- **GIVEN** the recreation is rendered
- **THEN** the 2-column layout with text on left, video thumbnail on right behaves as described by the fidelity notes

#### Scenario: Heading reads "Welcome to University"

- **GIVEN** the recreation is rendered
- **THEN** the Heading reads "Welcome to University" behaves as described by the fidelity notes

#### Scenario: Description paragraph below heading

- **GIVEN** the recreation is rendered
- **THEN** the Description paragraph below heading behaves as described by the fidelity notes

#### Scenario: "Read More" button styled with brand primary

- **GIVEN** the recreation is rendered
- **THEN** the "Read More" button styled with brand primary behaves as described by the fidelity notes

#### Scenario: Video thumbnail has circular play button overlay

- **GIVEN** the recreation is rendered
- **THEN** the Video thumbnail has circular play button overlay behaves as described by the fidelity notes

#### Scenario: Play button triggers popup video player

- **GIVEN** the recreation is rendered
- **THEN** the Play button triggers popup video player behaves as described by the fidelity notes

### Features

Feature: Features Section

#### Scenario: 4-column grid layout (2 cols on mobile)

- **GIVEN** the recreation is rendered
- **THEN** the 4-column grid layout (2 cols on mobile) behaves as described by the fidelity notes

#### Scenario: Each card has an icon (flaticon), title, and description

- **GIVEN** the recreation is rendered
- **THEN** the Each card has an icon (flaticon), title, and description behaves as described by the fidelity notes

#### Scenario: Titles: Knowledge is power, Senior High School, College of Arts & Sciences, Unmatched Professor

- **GIVEN** the recreation is rendered
- **THEN** the Titles: Knowledge is power, Senior High School, College of Arts & Sciences, Unmatched Professor behaves as described by the fidelity notes

#### Scenario: Each card has a "Read More →" link

- **GIVEN** the recreation is rendered
- **THEN** the Each card has a "Read More →" link behaves as described by the fidelity notes

### Counter / Education is Life

Feature: Counter Section

#### Scenario: Section has light gray background (bg-light)

- **GIVEN** the recreation is rendered
- **THEN** the Section has light gray background (bg-light) behaves as described by the fidelity notes

#### Scenario: Left side displays a large image

- **GIVEN** the recreation is rendered
- **THEN** the Left side displays a large image behaves as described by the fidelity notes

#### Scenario: Right side has heading "Education is Life" + description

- **GIVEN** the recreation is rendered
- **THEN** the Right side has heading "Education is Life" + description behaves as described by the fidelity notes

#### Scenario: 4 animated stat counters with icons: Students (12,921), Schools (51), Books (3,902), Graduates (1,921)

- **GIVEN** the recreation is rendered
- **THEN** the 4 animated stat counters with icons: Students (12,921), Schools (51), Books (3,902), Graduates (1,921) behaves as described by the fidelity notes

#### Scenario: Counter numbers animate from 0 to target value on scroll

- **GIVEN** the recreation is rendered
- **THEN** the Counter numbers animate from 0 to target value on scroll behaves as described by the fidelity notes

### Popular Courses

Feature: Popular Courses Section

#### Scenario: Section has light gray background

- **GIVEN** the recreation is rendered
- **THEN** the Section has light gray background behaves as described by the fidelity notes

#### Scenario: Centered heading "Popular Courses" with subtitle

- **GIVEN** the recreation is rendered
- **THEN** the Centered heading "Popular Courses" with subtitle behaves as described by the fidelity notes

#### Scenario: "Enroll Now" button with book icon

- **GIVEN** the recreation is rendered
- **THEN** the "Enroll Now" button with book icon behaves as described by the fidelity notes

#### Scenario: Owl-carousel of course cards (scrollable)

- **GIVEN** the recreation is rendered
- **THEN** the Owl-carousel of course cards (scrollable) behaves as described by the fidelity notes

#### Scenario: Each course card has image, title, description, enrollment numbers, and price

- **GIVEN** the recreation is rendered
- **THEN** the Each course card has image, title, description, enrollment numbers, and price behaves as described by the fidelity notes

#### Scenario: Price shows original (strikethrough) and current price or "Free"

- **GIVEN** the recreation is rendered
- **THEN** the Price shows original (strikethrough) and current price or "Free" behaves as described by the fidelity notes

### Teachers

Feature: Teachers Section

#### Scenario: 3-column grid of flip cards

- **GIVEN** the recreation is rendered
- **THEN** the 3-column grid of flip cards behaves as described by the fidelity notes

#### Scenario: Front face shows full background image with name and specialty overlay

- **GIVEN** the recreation is rendered
- **THEN** the Front face shows full background image with name and specialty overlay behaves as described by the fidelity notes

#### Scenario: Back face shows quote, small photo, name, and specialty

- **GIVEN** the recreation is rendered
- **THEN** the Back face shows quote, small photo, name, and specialty behaves as described by the fidelity notes

#### Scenario: Hover triggers 3D flip animation

- **GIVEN** the recreation is rendered
- **THEN** the Hover triggers 3D flip animation behaves as described by the fidelity notes

#### Scenario: 3 teachers: Job Smith (Laravel Expert), Mellissa Cruz (JavaScript Guru), Aldin Powell (WordPress Ninja)

- **GIVEN** the recreation is rendered
- **THEN** the 3 teachers: Job Smith (Laravel Expert), Mellissa Cruz (JavaScript Guru), Aldin Powell (WordPress Ninja) behaves as described by the fidelity notes

### Blog

Feature: Blog Section

#### Scenario: Section has light gray background

- **GIVEN** the recreation is rendered
- **THEN** the Section has light gray background behaves as described by the fidelity notes

#### Scenario: 2-column layout: 1 featured post (left) + 4 small posts (right)

- **GIVEN** the recreation is rendered
- **THEN** the 2-column layout: 1 featured post (left) + 4 small posts (right) behaves as described by the fidelity notes

#### Scenario: Featured post has large image, title, and meta (date, author, comments)

- **GIVEN** the recreation is rendered
- **THEN** the Featured post has large image, title, and meta (date, author, comments) behaves as described by the fidelity notes

#### Scenario: Small posts have thumbnail, title, and meta row

- **GIVEN** the recreation is rendered
- **THEN** the Small posts have thumbnail, title, and meta row behaves as described by the fidelity notes

#### Scenario: All posts are clickable links

- **GIVEN** the recreation is rendered
- **THEN** the All posts are clickable links behaves as described by the fidelity notes

### Subscribe / Newsletter

Feature: Subscribe Section

#### Scenario: Parallax background image

- **GIVEN** the recreation is rendered
- **THEN** the Parallax background image behaves as described by the fidelity notes

#### Scenario: Heading "Create cool websites" on left side

- **GIVEN** the recreation is rendered
- **THEN** the Heading "Create cool websites" on left side behaves as described by the fidelity notes

#### Scenario: Email input + "Subscribe" button on right side

- **GIVEN** the recreation is rendered
- **THEN** the Email input + "Subscribe" button on right side behaves as described by the fidelity notes

#### Scenario: Subscribe button styled with brand primary

- **GIVEN** the recreation is rendered
- **THEN** the Subscribe button styled with brand primary behaves as described by the fidelity notes

### Footer

Feature: Footer

#### Scenario: Dark background with 4-column layout

- **GIVEN** the recreation is rendered
- **THEN** the Dark background with 4-column layout behaves as described by the fidelity notes

#### Scenario: Column 1: "University" name + description text

- **GIVEN** the recreation is rendered
- **THEN** the Column 1: "University" name + description text behaves as described by the fidelity notes

#### Scenario: Column 2: Quick Links in 2-column list (Home, About, Courses, Pages, News, Support, Contact, Privacy)

- **GIVEN** the recreation is rendered
- **THEN** the Column 2: Quick Links in 2-column list (Home, About, Courses, Pages, News, Support, Contact, Privacy) behaves as described by the fidelity notes

#### Scenario: Column 3: Blog — 3 recent posts with title and meta

- **GIVEN** the recreation is rendered
- **THEN** the Column 3: Blog — 3 recent posts with title and meta behaves as described by the fidelity notes

#### Scenario: Column 4: Contact Information (address, phone, email, hours)

- **GIVEN** the recreation is rendered
- **THEN** the Column 4: Contact Information (address, phone, email, hours) behaves as described by the fidelity notes

#### Scenario: Copyright bar at bottom with year + social icons (Facebook, Twitter, LinkedIn, Instagram)

- **GIVEN** the recreation is rendered
- **THEN** the Copyright bar at bottom with year + social icons (Facebook, Twitter, LinkedIn, Instagram) behaves as described by the fidelity notes

#### Scenario: Footer links to Component Dock (https://www.componentdock.com/)

- **GIVEN** the recreation is rendered
- **THEN** the Footer links to Component Dock (https://www.componentdock.com/) behaves as described by the fidelity notes

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar is sticky with white bg and shadow
- [ ] Hero is full-viewport with search form (3 fields + button)
- [ ] About section has video popup play button
- [ ] Features has 4 icon cards in a row
- [ ] Counter section has 4 animated numbers (countUp on scroll)
- [ ] Popular Courses carousel is scrollable with course cards
- [ ] Teachers section has 3 flip cards with hover animation
- [ ] Blog section has featured + list layout
- [ ] Subscribe section has parallax bg + email form
- [ ] Footer has 4 columns + copyright + Component Dock link
- [ ] Brand color #11cbd7 used consistently (buttons, accents, dropdown hover)
- [ ] Font is Rubik throughout (loaded via Google Fonts or CDN)
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos/seed/curriculum-*
- [ ] Icons from lucide-react (replace flaticon/ionicons)
