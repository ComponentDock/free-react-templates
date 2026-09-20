# Template: Curriculum (Education / University Landing)

## Purpose

Recreation of ColorLib **University** — a multi-section education / university
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

## Gherkin scenarios

### Navbar

```gherkin
Feature: Navbar
  Scenario: Displays brand name "University" (text, uppercase)
  Scenario: Nav items: Home, Courses, Categories, Blog, About, Contact
  Scenario: Courses and Categories have dropdown menus
  Scenario: Right side shows Login / Register links
  Scenario: Navbar is sticky with white background and box shadow
  Scenario: Dropdown items highlight with brand primary (#11cbd7) on hover
```

### Hero

```gherkin
Feature: Hero Section
  Scenario: Full-viewport height (100vh) with background image overlay
  Scenario: Search form has keyword text input, category dropdown, difficulty dropdown, and search button
  Scenario: Search button styled with brand primary (#11cbd7) and white text
  Scenario: Tagline text "We have more than 500 courses to improve your skills"
  Scenario: "Register Now" CTA button below tagline
```

### About / Welcome

```gherkin
Feature: About Section
  Scenario: 2-column layout with text on left, video thumbnail on right
  Scenario: Heading reads "Welcome to University"
  Scenario: Description paragraph below heading
  Scenario: "Read More" button styled with brand primary
  Scenario: Video thumbnail has circular play button overlay
  Scenario: Play button triggers popup video player
```

### Features

```gherkin
Feature: Features Section
  Scenario: 4-column grid layout (2 cols on mobile)
  Scenario: Each card has an icon (flaticon), title, and description
  Scenario: Titles: Knowledge is power, Senior High School, College of Arts & Sciences, Unmatched Professor
  Scenario: Each card has a "Read More →" link
```

### Counter / Education is Life

```gherkin
Feature: Counter Section
  Scenario: Section has light gray background (bg-light)
  Scenario: Left side displays a large image
  Scenario: Right side has heading "Education is Life" + description
  Scenario: 4 animated stat counters with icons: Students (12,921), Schools (51), Books (3,902), Graduates (1,921)
  Scenario: Counter numbers animate from 0 to target value on scroll
```

### Popular Courses

```gherkin
Feature: Popular Courses Section
  Scenario: Section has light gray background
  Scenario: Centered heading "Popular Courses" with subtitle
  Scenario: "Enroll Now" button with book icon
  Scenario: Owl-carousel of course cards (scrollable)
  Scenario: Each course card has image, title, description, enrollment numbers, and price
  Scenario: Price shows original (strikethrough) and current price or "Free"
```

### Teachers

```gherkin
Feature: Teachers Section
  Scenario: 3-column grid of flip cards
  Scenario: Front face shows full background image with name and specialty overlay
  Scenario: Back face shows quote, small photo, name, and specialty
  Scenario: Hover triggers 3D flip animation
  Scenario: 3 teachers: Job Smith (Laravel Expert), Mellissa Cruz (JavaScript Guru), Aldin Powell (WordPress Ninja)
```

### Blog

```gherkin
Feature: Blog Section
  Scenario: Section has light gray background
  Scenario: 2-column layout: 1 featured post (left) + 4 small posts (right)
  Scenario: Featured post has large image, title, and meta (date, author, comments)
  Scenario: Small posts have thumbnail, title, and meta row
  Scenario: All posts are clickable links
```

### Subscribe / Newsletter

```gherkin
Feature: Subscribe Section
  Scenario: Parallax background image
  Scenario: Heading "Create cool websites" on left side
  Scenario: Email input + "Subscribe" button on right side
  Scenario: Subscribe button styled with brand primary
```

### Footer

```gherkin
Feature: Footer
  Scenario: Dark background with 4-column layout
  Scenario: Column 1: "University" name + description text
  Scenario: Column 2: Quick Links in 2-column list (Home, About, Courses, Pages, News, Support, Contact, Privacy)
  Scenario: Column 3: Blog — 3 recent posts with title and meta
  Scenario: Column 4: Contact Information (address, phone, email, hours)
  Scenario: Copyright bar at bottom with year + social icons (Facebook, Twitter, LinkedIn, Instagram)
  Scenario: Footer links to Component Dock (https://www.componentdock.com/)
```

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
