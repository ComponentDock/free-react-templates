# IronShed — Implementation Task Outline

Source: ColorLib Ponigym (https://preview.colorlib.com/theme/ponigym/)
New name: ironshed

## Component structure

```
apps/ironshed/
  src/
    main.tsx              — entry point (excluded from coverage)
    App.tsx               — composes all sections
    index.css             — Tailwind entry + @theme tokens
    components/
      Navbar.tsx           — absolute transparent header with nav links
      Hero.tsx             — carousel with 3 slides
      Services.tsx         — program cards + video thumbnail
      CtaBanner.tsx        — parallax CTA section
      Classes.tsx          — tabbed class panels with switcher
      TrainerSchedule.tsx  — weekly schedule table
      Team.tsx             — 3 trainer profile cards
      LatestNews.tsx       — 3 blog post cards
      Footer.tsx           — map + contact form + copyright bar
    test/
      setup.ts             — vitest + jest-dom
```

## Section-by-section fidelity notes

### Navbar
- Absolute position (top: 0, z-index: 99), transparent background over hero
- Logo left, nav links right (Home, About, Schedule, Portfolio, Blog, Contacts)
- Search icon (lucide-react Search) on the far right
- Mobile: hamburger menu (simplified for React — use state toggle)

### Hero
- Full-viewport height carousel with 3 background image slides
- Each slide: subtitle "Elite Personal Training Services", h1 "Make it Shape" (Shape in brand color), "Join Us Now" primary button
- Use OwlCarousel behavior → React: simple CSS transition carousel or state-driven
- Background images: picsum.photos/seed/ironshed-1/1920/1080 etc.

### Services
- Two-column layout: left = section title "Our Program" + 4 service items, right = video thumbnail
- Section title has 3px left red bar accent (#f34e3a)
- 4 service items: Weight Lifting, Body Building, Healthy, Yoga — each with lucide-react icon, h5 title, paragraph
- Right column: background image with centered play button (lucide-react Play)

### CTA Banner
- Full-width section with background image (parallax-like via bg-fixed)
- Centered white text: h2 "Start your Journey with our exciting offers", subtitle, primary button "Join With Us"
- Use picsum.photos/seed/ironshed-cta/1920/600

### Classes
- Section title "Our Class" left, "View All Schedule" button right
- 6 tab panels (Body Building, Racing running, Yoga Fitness, Kick boxing, Cardio workout, Martial Arts)
- Each panel: 2-column — left image, right h3 + paragraph + "View Schedule" link
- Bottom: horizontal tab bar with thumbnail images + h5 labels for each class
- Tab switching: useState index, active panel shown, others hidden

### Trainer Schedule
- Full-width section with parallax background image
- Section title "Our Trainer" centered, white text
- Table: 8 columns (empty header + Mon-Sun), 3 rows (10:00, 14:00, 16:00)
- Cells color-coded: Gym/Running = #f34e3a, Yoga = #247cc6, Body/Box = #6dcff6, Cardio = #4cbcc3
- Each cell shows: workout type (h6), time range (span), trainer name
- Empty cells left blank

### Team
- Light gray background (#f2f4f5)
- Section title "Our Trainer" with "View All" primary button
- 3 trainer cards in a row, each with:
  - Full-width photo
  - Specialty label (span)
  - Name (h5)
  - Description paragraph
  - Social icons row (lucide-react: Facebook, Twitter, Pinterest, Video)
- Photos: picsum.photos/seed/ironshed-trainer-N/400/500

### Latest News
- Section title "Latest News" centered
- 3 blog cards in a row, each with:
  - Image (picsum.photos/seed/ironshed-news-N/400/300)
  - Date tag (calendar icon + date)
  - Comment count tag (message icon + count)
  - Article title as h5 link

### Footer
- Two-column layout:
  - Left: map embed (iframe Google Maps, use a static address placeholder)
  - Right: contact form on background image — "Request A Call Back" title, 4 fields (Name, Email, Subject, Message textarea), Submit button
- Bottom register bar:
  - Copyright text
  - Footer links: Privacy Policy, Terms Of Service, Careers
  - Social icons: facebook, twitter, instagram (lucide-react)
  - **MUST include link to https://www.componentdock.com/**

## Shared components to reuse from packages/ui
- Button / ButtonLink (if available)
- cn() utility for class composition

## Theme tokens (index.css @theme)
- `--color-brand: #f34e3a`
- `--color-heading: #111111`
- `--color-section-title: #191919`
- `--color-body-text: #8f8fa8`
- `--color-description: #6e6e6e`
- `--color-team-bg: #f2f4f5`
- `--color-schedule-gym: #f34e3a`
- `--color-schedule-yoga: #247cc6`
- `--color-schedule-body: #6dcff6`
- `--color-schedule-cardio: #4cbcc3`
- `--font-heading: Oswald, sans-serif`
- `--font-body: Roboto, sans-serif`
