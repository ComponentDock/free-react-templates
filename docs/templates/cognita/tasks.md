# Cognita — Task Outline & Design Notes

## Source Mapping

- **ColorLib source:** Educature (`educature`)
- **Preview URL:** https://preview.colorlib.com/theme/educature/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/educature-free-template.jpeg
- **New name:** Cognita
- **App path:** `apps/cognita`
- **Package:** `@free-react-templates/cognita`

## Implementation Tasks

### 1. Scaffold
- [ ] Copy simplest existing app as template, rename package to `@free-react-templates/cognita`
- [ ] Set `public/CNAME` to `cognita.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://cognita.free.componentdock.com`
- [ ] Update `index.html` title to "Cognita — Online Courses"
- [ ] Add Google Fonts link for Montserrat (600) and Roboto (400) in `index.html`

### 2. Design Tokens (`src/index.css`)
- [ ] Add `@theme` block with brand colors:
  - `--color-brand-teal: #39cfca`
  - `--color-brand-blue: #3279bb`
  - `--color-brand-gradient: linear-gradient(90deg, #39cfca 0%, #3279bb 100%)`
  - `--color-text-dark: #222222`
  - `--color-text-body: #777777`
  - `--color-bg-light-blue: #f1f9ff`
- [ ] Add font-family variables for Montserrat and Roboto
- [ ] Register `injectUiSource()` in `vite.config.ts`

### 3. Components (in section order)

#### Navbar.tsx
- [ ] Transparent navbar overlaying the hero
- [ ] Logo: icon (lucide-react `GraduationCap`) + "Cognita" text, white
- [ ] Nav links: Home, About, Courses, Contact (white text)
- [ ] Responsive: hamburger menu on mobile (Lucide `Menu`/`X` icons)

#### Hero.tsx
- [ ] Full-width section with brand gradient background
- [ ] Decorative educational illustrations (use placeholder images or SVG)
- [ ] Large white heading: "We Rank the Best Courses on the Web"
- [ ] White subtitle paragraph
- [ ] Search bar: white input + gradient "Search" button
- [ ] "Top courses" label in white
- [ ] Course category pill tags: outlined white border, white text, rounded-full
- [ ] Categories: Ruby On Rails, Python, Marketing, UI/UX Design, Android, Data Science, Cryptocurrency

#### About.tsx
- [ ] White background, two-column layout (image left, text right)
- [ ] Heading: "Over 2500 Courses from 5 Platform"
- [ ] Description paragraph (paraphrased)
- [ ] "Explore Courses" gradient CTA button
- [ ] Placeholder image via `picsum.photos/seed/cognita-about-1/600/400`

#### Courses.tsx
- [ ] Light blue `#f1f9ff` background
- [ ] Heading: "This is Why We Have Solid Idea"
- [ ] Description paragraph
- [ ] Grid of 14 course category cards (responsive: 4-col desktop, 2-col tablet, 1-col mobile)
- [ ] Each card: icon (lucide-react) + title
- [ ] Icons for each category (BookOpen, Code, Camera, Globe, Leaf, Briefcase, Brain, Database, Palette, Users, Heart, TrendingUp, DollarSign, User)

#### Features.tsx
- [ ] White background
- [ ] Heading: "Features That Make Us Hero"
- [ ] Description paragraph
- [ ] 3-column grid of feature cards
- [ ] Cards: Architecture (lucide `Building`), Interior Design (lucide `Paintbrush`), Concept Design (lucide `Lightbulb`)
- [ ] Each card: icon in circle, title, description

#### Faculty.tsx
- [ ] Light blue `#f1f9ff` background
- [ ] Heading: "Faculty Members"
- [ ] Description paragraph
- [ ] 4-column grid of faculty member cards
- [ ] Each card: photo placeholder (`picsum.photos/seed/cognita-faculty-N/200/200`), name, role
- [ ] Members: Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller — all "Sr. Faculty Data Science"

#### Testimonials.tsx
- [ ] White background
- [ ] Carousel/slider of testimonial cards (use `react-slick` or simple CSS scroll-snap)
- [ ] Each card: quote text, name, role
- [ ] Testimonial from Fanny Spencer (paraphrased)
- [ ] Navigation dots or arrows

#### Footer.tsx
- [ ] Brand gradient background (teal to blue)
- [ ] 4-column layout: Top Products, Quick Links, Resources, Newsletter
- [ ] Newsletter: email input + "Get Started" gradient button
- [ ] Bottom bar: copyright + "Made with Component Dock" linking to componentdock.com
- [ ] NO ColorLib attribution

### 4. App.tsx Composition
- [ ] Import and compose all section components in order
- [ ] Each section as a separate component

### 5. Tests (TDD)
- [ ] Navbar: renders links, responsive toggle
- [ ] Hero: heading visible, search bar present, tags displayed
- [ ] About: heading and CTA visible, two-column layout
- [ ] Courses: grid renders 14 categories, icons present
- [ ] Features: 3 cards with correct titles
- [ ] Faculty: 4 member cards with names and roles
- [ ] Testimonials: carousel renders, testimonial visible
- [ ] Footer: links, newsletter form, Component Dock link
- [ ] 100% coverage on all components

### 6. Verification
- [ ] `scripts/verify-app.sh cognita` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Responsive at mobile/tablet/desktop breakpoints

## Design Notes

### Color Palette
The template uses a distinctive teal-to-blue gradient as its primary brand element.
This gradient appears on: hero banner overlay, primary CTA buttons, and the full
footer. The teal (#39cfca) is a bright cyan-turquoise, the blue (#3279bb) is a
medium ocean blue. The combination gives a fresh, trustworthy, educational feel.

### Section Rhythm
Each section uses generous padding (~150px vertical). Alternating white and
light blue (#f1f9ff) backgrounds create visual separation. The pattern is:
white (hero overlay) → white (about) → light blue (courses) → white (features)
→ light blue (faculty) → white (testimonials) → gradient (footer).

### Typography
Montserrat at weight 600 for all headings gives a modern, geometric feel.
Roboto for body text is clean and readable. The heading line-height is tight
(1.2em) for impact.

### Hero Banner
The original uses a background image with educational illustrations (rocket,
beakers, pencils, rulers) floating around the edges. For the React version,
use a gradient background with decorative SVG/icon elements positioned
absolutely, or a picsum placeholder with the gradient overlay.

### Button Style
Primary buttons use the full brand gradient with white text, no border-radius
specified (likely small radius ~4px). The pill/tag buttons on the hero are
rounded-full with white border and white text — a secondary style only used
in the hero.
