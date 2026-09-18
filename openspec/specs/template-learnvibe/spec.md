# Template: LearnVibe (Education Platform)

## Purpose

Recreation of ColorLib's **Etrain** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page education platform template.

- **Source:** https://colorlib.com/wp/template/etrain/
- **Preview:** https://preview.colorlib.com/theme/etrain/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/etrain-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Deploy target:** https://learnvibe.free.componentdock.com

## Design tokens

Extracted from `https://preview.colorlib.com/theme/etrain/css/style.css`:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#ee390f` | Orange-red: CTA gradient start, counter gradient |
| `--brand-secondary` | `#f9b700` | Golden yellow: CTA gradient end, counter gradient |
| `--brand-accent` | `#ff663b` | Coral: section title underline, course price, btn_4 bg, footer link hover |
| `--heading-color` | `#0c2e60` | Dark navy: all headings (h1-h6), nav, feature icon color |
| `--text-body` | `#888888` | Gray: body paragraph text |
| `--text-muted` | `#556172` | Medium gray: section subtitles ("popular courses"), learning h5 |
| `--bg-light` | `#f7f7f7` | Light gray: footer background, gray_bg utility |
| `--border-light` | `#edeff2` | Light border: feature cards, course cards, copyright divider |
| `--border-medium` | `#dedede` | Footer copyright top border, input group border |

### Fonts
| Token | Stack | Usage |
|-------|-------|-------|
| `--font-heading` | `"Poppins", sans-serif` | h1-h6, section titles |
| `--font-body` | `"Roboto", sans-serif` | Body text, nav links |
| Google Fonts import | `Open+Sans:800, Poppins:300,400,500,600,700,800, Roboto:300,400,500` | Full import in CSS |

### Buttons
| Class | Style |
|-------|-------|
| `.btn_1` | Gradient `linear-gradient(to left, #ee390f, #f9b700)`, border-radius 50px (pill), white text, 13.5px 45px padding, hover shadow `rgba(193,34,10,0.2)` |
| `.btn_2` | Transparent bg, `#0c2e60` border (1px solid), border-radius 50px, navy text, 13px 39px padding; hover transitions to gradient |
| `.btn_4` | Solid `#ff663b`, no border-radius (rectangular), white text, 3.5px 21px padding (small category/tag badge) |
| `.button` (custom) | Solid `#ff663b`, border-radius 4px, 12px 54px padding |

### Section backgrounds
- **Banner:** No explicit background-color (white/transparent), height 880px with decorative image
- **Member counter:** Linear gradient `#ee390f` → `#f9b700` (full width, warm gradient band)
- **Footer:** `#f7f7f7` light gray
- **Copyright bar:** No distinct background (extends from footer), `#dedede` top border
- **All other sections:** White / transparent

### Other tokens
- Section title underline: 80px × 2px, `#ff663b`, centered below h2
- Feature card: `border: 1px solid #f0f4f6`, hover → `#ff663b` border
- Feature icon circle: 70px width, border-radius 50%, gradient bg on hover
- Advance feature icon bg: `#fdeae5` (pinkish), `.ti-stamp` variant `#fff0e0` (peachy)
- Course card image: full-width `.special_img` class, bordered text area below

## Gherkin requirements

### Scenario: Hero / Banner section
```
Given a visitor opens the LearnVibe homepage
Then a hero section is visible with:
  - An headline: "Advance Your Career with Expert-Led Courses"
  - A subtext paragraph about gaining in-demand skills
  - A statistic line: "Join 15,000+ learners worldwide"
  - Two CTA buttons: "Browse Courses" (btn_1 gradient pill) and "Start Free Trial" (btn_2 outline pill)
And the banner occupies roughly 880px height on desktop
```

### Scenario: Features section
```
Given the visitor scrolls past the banner
Then a features section displays four columns:
  - Column 1: "Why LearnVibe?" heading + paragraph + "Learn More" button (btn_1)
  - Column 2: "Flexible Learning" feature card with icon + text
  - Column 3: "Expert Instructors" feature card with icon + text
  - Column 4: "Career Support" feature card with icon + text
And each feature card has a light border that turns coral on hover
```

### Scenario: About / Learning section
```
Given the visitor scrolls past features
Then a two-column layout appears:
  - Left column: decorative image with background pattern
  - Right column: "About us" label, "Learn Skills That Matter for Your Career" heading
    - Two bullet points with icons (hands-on projects, industry certificates)
    - "Read More" button (btn_1)
```

### Scenario: Member Counter section
```
Given the visitor scrolls past the about section
Then a full-width gradient band (orange-red to golden) shows four counters:
  - "250" — "Courses Available"
  - "15,000" — "Students Enrolled"
  - "92" — "% Career Advancement"
  - "45" — "Countries Reached"
And the numbers animate on scroll (count-up effect)
```

### Scenario: Featured Courses section
```
Given the visitor scrolls past the counter
Then a "Featured Courses" section shows three course cards:
  - Each card has: course image, category tag (btn_4 style), level badge,
    price (coral text), course title, description, duration, enrolled count,
    instructor avatar + name, star rating
  - Courses: "Full-Stack Web Development Bootcamp" ($130, Beginner, 12 weeks),
    "UX/UI Design Masterclass" ($160, Intermediate, 8 weeks),
    "Advanced WordPress Development" ($140, Advanced, 10 weeks)
```

### Scenario: Platform Features section
```
Given the visitor scrolls past courses
Then a two-column layout appears (reversed from About):
  - Left: text content — "Our platform" label, "An Advanced Learning System Built for Results" heading,
    paragraph, two sub-feature cards ("Learn Anywhere" with pencil icon, "Verified Certificates" with stamp icon)
  - Right: decorative image
And the sub-feature icons have circular backgrounds (#fdeae5 / #fff0e0)
```

### Scenario: Testimonials section
```
Given the visitor scrolls past platform features
Then a carousel section shows student testimonials:
  - Each slide: testimonial text, student name, job title, circular avatar photo
  - At least 3 testimonials visible on desktop (multi-slide layout)
  - Swiper pagination dots below
```

### Scenario: Blog section
```
Given the visitor scrolls past testimonials
Then a "Latest from Our Blog" section shows three blog cards:
  - Each card: blog image, category tag (btn_4), title, description, comment count, like count
  - Cards: "5 Study Habits That Top Students Swear By" (12 comments, 3.2k likes),
    "How to Transition Into Tech Without a CS Degree" (8 comments, 5.1k likes),
    "The Most In-Demand Tech Skills for 2025" (15 comments, 4.7k likes)
```

### Scenario: Footer
```
Given the visitor reaches the bottom of the page
Then a footer with three columns:
  - Left: logo + two paragraphs about empowering learners
  - Center: "Newsletter" heading + email input with subscribe button + social icons (Facebook, Twitter, Instagram, Email)
  - Right: "Contact us" heading + address, phone, email
And a copyright bar with "Made with ❤ by Component Dock" link to https://www.componentdock.com/
```

### Scenario: Navigation bar
```
Given a visitor views the page
Then a sticky navbar displays:
  - Logo (left)
  - Nav links: Home, About, Courses, Blog, Pages (dropdown with Pricing, FAQ, Instructors, Testimonials, Dashboard, Elements), Contact
  - "Login" button (btn_1 style, visible on lg+ screens)
  - Mobile: hamburger toggler with collapsible menu
```

## Verification checklist

- [ ] All sections match the order from the reference preview
- [ ] Design tokens (colors, fonts, radii) match the extracted values above
- [ ] Two CTA buttons use gradient pill style (btn_1) and outline pill style (btn_2)
- [ ] Member counter uses the orange-to-gold gradient background
- [ ] Section title underlines use `#ff663b` coral, 80px wide
- [ ] Course cards have bordered text area, coral price, category badges
- [ ] Testimonials use a carousel/swiper pattern
- [ ] Footer has newsletter input, social icons, contact info, and Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] App uses placeholder images from `picsum.photos`
- [ ] Icons use `lucide-react` (mapping from the original themify icons)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `learnvibe.free.componentdock.com`
- [ ] `package.json` homepage = `https://learnvibe.free.componentdock.com`
