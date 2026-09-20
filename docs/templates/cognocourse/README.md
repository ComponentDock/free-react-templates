# Cognocourse — Design Notes & Implementation Tasks

## Source
- **ColorLib slug:** elearn
- **Preview URL:** https://preview.colorlib.com/theme/elearn/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elearn-free-template.jpg
- **Recreation name:** cognocourse

## Design Notes

### Visual Style
- Clean, professional education platform with warm orange accent on white
- Montserrat font throughout (Google Fonts), weight 300-900
- Primary accent: orange `#ff8a00` — used on all buttons, active states, tags
- Dark sections: top bar and hamburger menu use `#2c2b31`
- Headings: dark navy-purple `#44425a`
- Body text: muted gray `#6c6a74`
- Buttons are slightly rounded orange rectangles with a darker-orange arrow suffix

### Section Structure (fidelity order)

1. **Navbar**
   - Top bar: dark `#2c2b31`, white text, phone + email, Register/Login links
   - Main nav: white bg, logo "learn" (text, not image), 5 nav items (Home active)
   - Search panel: hidden by default, toggled by search icon
   - Mobile: hamburger icon toggles full-screen dark overlay menu

2. **HeroSlider**
   - Full-width image carousel (3 slides, all same content in original)
   - Dark overlay on background image
   - Centered: small logo, heading "Complete Online Courses", subtitle
   - Two orange CTA buttons side-by-side with arrow icon suffix
   - Prev/Next nav arrows below the hero content

3. **FeaturedCourse**
   - 2-column split below hero
   - Left: tag badge ("Featured" orange bg), price right-aligned, h3 title, description paragraph, author row (avatar + name + sales)
   - Right: background image fill

4. **Courses**
   - Section title "Choose your course" + subtitle
   - Search form: 2 inputs (Course, Level) + orange search button
   - Carousel of 3 course cards: image, tag, price, title, description, author row
   - Prev/Next nav arrows

5. **Milestones**
   - Full-width parallax background image
   - 4-column stats: icon (SVG) + animated counter + label
   - White text on parallax bg
   - Stats: 1,548 Online Courses / 7,286 Students / 257 Teachers / 39 Countries

6. **GroupedSections**
   - 3 equal columns inside a container:
   - Col 1 "Why Choose Us?": 4 expandable accordions (click header to toggle)
   - Col 2 "Upcoming Events": 5 events, each with orange-outlined date badge (day/month) + title + location
   - Col 3 "Latest News": 4 posts, each with thumbnail + date + title + author

7. **Video**
   - Embedded YouTube player with poster image
   - Centered in container

8. **JoinCTA**
   - Centered heading "Join Our Platform Today" + subtitle
   - Orange "register now" button centered below (absolute positioning in original)
   - White background

9. **Footer**
   - Dark `#2c2b31` bg, 4 columns:
   - Col 1: Logo + about text + social icons (4) + copyright
   - Col 2: "Quick Menu" links list
   - Col 3: "Useful Links" links list
   - Col 4: "Contact Us" (address, phone, email)
   - MUST include Component Dock link

## Implementation Tasks

- [ ] Create `apps/cognocourse/` from a template starter
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `cognocourse.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Create `src/main.tsx` entry
- [ ] Create `src/index.css` with Tailwind + `@theme` brand tokens (`--color-brand: #ff8a00`, `--color-brand-dark: #ff6600`, `--color-brand-hover: #ffae00`, `--color-dark: #2c2b31`, `--color-heading: #44425a`, `--color-body: #6c6a74`)
- [ ] Create `src/App.tsx` composing all sections
- [ ] Build `Navbar` component (top bar + nav + search toggle + mobile hamburger)
- [ ] Build `HeroSlider` component (image carousel with overlay, centered content, 2 CTAs)
- [ ] Build `FeaturedCourse` component (2-col: text left, image right)
- [ ] Build `Courses` component (search form + card carousel)
- [ ] Build `CourseCard` component (image, tag, price, title, desc, author)
- [ ] Build `Milestones` component (parallax bg, 4 animated counters)
- [ ] Build `GroupedSections` component (3-col: accordion + events + news)
- [ ] Build `Accordion` component (expand/collapse FAQ)
- [ ] Build `Events` list component
- [ ] Build `News` list component (thumbnail + meta)
- [ ] Build `VideoSection` component (embedded video)
- [ ] Build `JoinCTA` component (heading + subtitle + button)
- [ ] Build `Footer` component (4-col with Component Dock link)
- [ ] Add responsive styles (hamburger nav, stacked mobile layouts)
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run spec:validate` — verify spec is valid
- [ ] Run `scripts/verify-app.sh cognocourse` — typecheck + lint + tests + build
