# Template: Aula (Education / University)

## Purpose

Recreation of the ColorLib "University" education template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template serves as a university/education landing page with course search, features showcase, statistics, popular courses carousel, teacher profiles, blog feed, and newsletter signup.

- **Source:** [ColorLib University](https://colorlib.com/wp/template/university/)
- **Preview:** https://preview.colorlib.com/theme/university/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/university-free-template.jpg
- **New name:** `aula` (Latin for "classroom")
- **Package:** `@free-react-templates/aula`
- **Deploy target:** `https://aula.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#11cbd7` | Cyan/teal — used for buttons, text-primary, newsletter bg, hover states |
| Font family | Rubik (weights 300, 400, 500) | Google Fonts via `<link>` |
| Body text | `gray` (#808080) | Line-height 2, font-weight 300, 16px |
| Headings | `#000` | Font-weight 300, color #000 |
| Body background | `#fff` | White |
| Button primary bg | `#11cbd7` | 2px solid transparent border |
| Button primary hover | transparent bg, `#11cbd7` border, `#000` text | Border becomes visible on hover |
| Button radius | `4px` | Slight rounded corners |
| Dropdown radius | `0px` | Sharp corners |
| Hero overlay | `rgba(0, 0, 0, 0.1)` | Subtle dark overlay on hero image |
| Hero btn shadow | `0 5px 20px -5px rgba(0,0,0,0.2)` | Shadow on hero buttons |
| Newsletter bg | `#11cbd7` | Full-width cyan section |
| Section heading size | 45px | Font-weight 300 |
| Footer bg | white (default) | Optional dark footer bg-image |
| Copyright text | 14px | Small footer text |
| Card radius | `4px` | Used on form inputs |
| Play button | `border-radius: 50%` | Circle overlay on video thumbnails |
| Flip card | 3D flip on hover | Front: bg image with name; Back: quote + author |
| Stats icons | circle, 50% radius | Icon circles with brand color |

## Gherkin requirements

### Scenario: Navbar displays correctly
- **Given** a user visits the page
- **Then** the navbar shows "AULA" brand text (uppercase, letter-spacing .2em)
- **And** nav links: Home, Courses (dropdown), Categories (dropdown), Blog, About, Contact
- **And** Login/Register links aligned right
- **And** navbar background is white with bottom shadow

### Scenario: Hero section renders with search form
- **Given** a user sees the hero
- **Then** a full-viewport background image is displayed with dark overlay
- **And** heading "Find Online Courses That Suits You" is centered
- **And** a search form with keyword input, category dropdown, difficulty dropdown, and Search button
- **And** subtext "We have more than 500 courses to improve your skills"
- **And** a "Register Now" CTA button (cyan, shadow, hover: outline white)

### Scenario: Welcome section with video
- **Given** a user scrolls past hero
- **Then** a two-column layout appears: text on left, image with play button on right
- **And** heading "Welcome to University" in brand color
- **And** descriptive paragraph text
- **And** a "Read More" button (primary style, reversed: outline on default, solid on hover)
- **And** the play button is a circle overlay on the image (magnific popup style)

### Scenario: Features section displays four cards
- **Given** a user sees the features section
- **Then** four columns appear: Knowledge is power, Senior High School, College of Arts & Sciences, Unmatched Professor
- **And** each has a flaticon icon, heading, short text, and "Read More →" link
- **And** section has white background

### Scenario: Counter section shows statistics
- **Given** a user scrolls to the counter section
- **Then** a light gray background section with two columns: image left, stats right
- **And** heading "Education is Life"
- **And** four stat items: Students (12921), Schools (51), Books (3902), Graduates (1921)
- **And** each stat has an icon circle and animated counter number

### Scenario: Popular Courses carousel
- **Given** a user sees the courses section
- **Then** a heading "Popular Courses" with "Enroll Now" button
- **And** an owl-carousel (horizontal scroll) of course cards
- **And** each card has: image, course title, description, enrollment progress, price (free or paid with strikethrough)
- **And** section has light gray background

### Scenario: Teachers flip cards
- **Given** a user scrolls to teachers
- **Then** heading "Teachers" appears
- **And** three flip cards: each with front (bg image, name, role) and back (quote, author)
- **And** 3D flip animation on hover

### Scenario: Blog section
- **Given** a user sees the blog
- **Then** heading "Blog" with light gray background
- **And** one featured post (large image + title + meta: date, author, comments)
- **And** three sidebar posts (small thumbnail + title + meta)

### Scenario: Newsletter CTA
- **Given** a user sees the newsletter
- **Then** a full-width cyan (#11cbd7) section
- **And** heading "Create cool websites"
- **And** email input + Subscribe button
- **And** descriptive text in white

### Scenario: Footer
- **Given** a user reaches the bottom
- **Then** a four-column footer: brand description, quick links (two columns), blog posts, contact information
- **And** copyright line with social media icons
- **And** footer link to Component Dock: "Made with Component Dock"

## Verification checklist

- [ ] All sections render in correct order (10 sections)
- [ ] Brand color #11cbd7 used for buttons, headings, newsletter, hover states
- [ ] Rubik font loaded via Google Fonts link
- [ ] Hero is full-viewport with background image + overlay + search form
- [ ] Search form has 3 inputs + submit button
- [ ] Welcome section: two-column with video play button overlay
- [ ] Features: 4-column grid with icons
- [ ] Counter: animated stats with icon circles
- [ ] Courses carousel: horizontal scroll of course cards with pricing
- [ ] Teachers: 3D flip cards (front/back)
- [ ] Blog: mixed layout (featured + sidebar posts)
- [ ] Newsletter: cyan background, email input + subscribe
- [ ] Footer: 4-column layout with Component Dock link
- [ ] All buttons: cyan primary, 4px radius, proper hover states
- [ ] Responsive: mobile-first with proper column stacking
- [ ] Accessibility: semantic HTML, aria-labels on interactive elements
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos
- [ ] lucide-react icons replace flaticon/ionicons
- [ ] Vitest + Testing Library with 100% coverage
