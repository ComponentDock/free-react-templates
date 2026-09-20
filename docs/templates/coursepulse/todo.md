# CoursePulse — Implementation Notes

Source: ColorLib WebUni (https://preview.colorlib.com/theme/webuni/)
Spec: openspec/specs/template-coursepulse/spec.md

## Section Order (from live DOM)

1. Navbar
2. Hero (with signup form)
3. Categories (6 cards, 3-col grid)
4. Search (crimson bg band)
5. Featured Courses (filter tabs, 8 cards, 4-col grid)
6. Signup (split layout, teacher registration form)
7. Banner/CTA ("Join Our Community Now!")
8. Footer (5 columns, newsletter, copyright)

## Structure & Fidelity Notes

### Navbar
- Logo left, nav links right (Home, About us, Courses, News, Contact)
- Login button (.site-btn.header-btn) floated right, before nav
- Transparent overlay on hero, absolute positioned
- Mobile: hamburger icon (.nav-switch) toggles nav

### Hero
- Full-width background image (use picsum.photos/seed/coursepulse-hero/1920/948)
- Centered white heading (60px, weight 500)
- Centered white subtitle paragraph
- Inline form: Name input + Email input + "Sign Up Now" button
- Form inputs: no border, height 53px, white background

### Categories
- Section title: "Our Course Categories" (48px, centered, 110px horizontal padding)
- 3-column grid, 6 cards
- Each card: thumbnail (148px height) + text block (40px 35px padding)
- Card bg: #edf4f6, hover → #d82a4e with white text
- Course count in brand color (#d82a4e), 18px, weight 600
- Categories: IT Development (120), Web Design (70), Illustration & Drawing (55), Social Media (40), Photoshop (220), Cryptocurrencies (25)

### Search
- Crimson background (#d82a4e) band
- White heading "Search your course"
- White form bar with: Course input (bg #edf4f6) + Category input + "Search Course" button
- Inputs have bottom border focus in brand color

### Featured Courses
- Section title: "Featured Courses"
- Filter tabs: All, Finance, Design, Web Development, Photography (MixItup-style, can simplify to React state)
- 4-column grid, 8 course cards
- Each card: thumbnail with price badge ("Price: $15") top-left, title + description + "120 Students", author avatar + name + role
- Placeholder images: picsum.photos/seed/coursepulse-course-{1-8}/400/300

### Signup
- Split layout (left 50%, right 50%)
- Left: crimson bg (#d82a4e), white text
- "Sign up to became a teacher" heading
- Form: Name, Email, Phone inputs + Upload Course label + submit button
- Form card: white bg, 60px padding
- Right: background image (use picsum.photos)

### Banner/CTA
- "Join Our Community Now!" heading + subtitle, centered
- "Register Now" button centered below
- Standard section padding (115px)

### Footer
- Dark background
- 5 widget columns: Contact Info, Engineering, Graphic Design, Development, Newsletter
- Newsletter: email input + "Subscribe" button + "*We don't spam" note
- Bottom bar: Terms & Conditions / Register / Privacy links + copyright
- MUST link to https://www.componentdock.com/ (branded "Component Dock")

## Design Token Summary for Tailwind @theme

```
--color-brand: #d82a4e;
--color-heading: #474747;
--color-body: #878787;
--color-card-bg: #edf4f6;
--color-rating: #fbb710;
--color-btn-dark: #000000;
--color-btn-fade: #e4edef;
--font-family: 'Raleway', sans-serif;
```

## Component Plan

- `Navbar.tsx` — Logo, nav links, Login button, mobile toggle
- `Hero.tsx` — Background image, heading, subtitle, signup form
- `Categories.tsx` — 6 CategoryCard components, 3-col grid
- `SearchBar.tsx` — Crimson bg, search form
- `FeaturedCourses.tsx` — Filter tabs, 8 CourseCard components, 4-col grid
- `SignupSection.tsx` — Split layout, teacher registration form
- `BannerCTA.tsx` — Heading, subtitle, Register Now button
- `Footer.tsx` — 5-column widgets, newsletter, copyright, Component Dock link
