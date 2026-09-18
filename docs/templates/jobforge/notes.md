# JobForge — Prep Notes

## Source
- ColorLib: Jobstart (https://colorlib.com/wp/template/jobstart/)
- Preview: https://preview.colorlib.com/theme/jobstart/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobstart-free-template.jpg

## Section order (from reference)

1. **Navbar** — white bg, brand left, nav links right, blue "Post a Job" CTA
2. **Hero** — full-width cover image + dark overlay, headline, two tabs (Find A Job / Find A Candidate), search bar
3. **Recent Jobs** — light gray bg, section heading + Post a Job button, job cards list
4. **Why JobForge** — white bg, 6 feature cards in 3-col grid (2 rows)
5. **Happy Employers (Testimonials)** — light gray bg, carousel with pagination dots
6. **Latest Blog** — white bg, 4-column blog card grid
7. **Subscribe Newsletter** — dark bg, email input + subscribe button
8. **Footer** — dark charcoal, 4 link columns + contact info + copyright

## Section-by-section fidelity notes

### Navbar
- White background, sticky on scroll
- Brand text "JobForge" on left (bold, Nunito Sans)
- Nav links: Home, Category (dropdown), Blog, About, Contact — right-aligned
- Blue "Post a Job" CTA button with `border-radius: 30px`

### Hero
- Background image: person with briefcase (`picsum.photos/seed/jobforge-hero/1920/1080`)
- Dark overlay: `rgba(0, 0, 0, 0.4)`
- Heading: "Largest Job Site On The Net" — font-weight 900, white
  - "Job" in bold, "Site" in lighter weight (original uses `<strong>` for "Job")
- Two tab buttons below heading:
  - "Find A Job" — active state: blue bg, white text
  - "Find A Candidate" — inactive: text only
- White search bar floating below tabs:
  - Keyword input, Category dropdown, Location input, blue "Search" button
  - Inputs have rounded corners, light borders
  - Search button: blue bg, white text, rounded

### Recent Jobs
- Light gray background (`#edf0f5`)
- Left: "Recent Jobs" heading
- Right: Blue "Post a Job" button
- Job cards: white bg, flex row
  - Left: company logo placeholder, title, company name, location, job type badge
  - Right: heart icon (favorite) + "Apply Job" button
  - Badge colors: blue for Part Time, green for Full Time, etc.
  - Heart icon: gray (unfavorited), red (`#f23a2e`) when active
- Pagination at bottom: numbered circles, active is blue

### Why JobForge (Features)
- White background
- Centered heading: "Why JobForge"
- 6 feature cards in 3×2 grid:
  - Search Millions of Jobs (search icon)
  - Location Search (map pin icon)
  - Top Careers (briefcase icon)
  - Search Expert Candidates (users icon)
  - Easy To Manage Jobs (settings icon)
  - Online Reviews (star icon)
- Each card: icon on top, title, description paragraph
- Use lucide-react icons

### Happy Employers (Testimonials)
- Light gray background (`#edf0f5`)
- Centered heading: "Happy Employers"
- Carousel (use simple state-based carousel, no external lib)
- Each testimonial: profile image (circle, `picsum.photos/seed/jobforge-testimonial-<n>/100/100`), name, role, quote
- Pagination dots below: gray (`#ccc`) inactive, blue (`#26baee`) active
- Auto-advance or click navigation

### Latest Blog
- White background
- Centered heading: "Latest Blog"
- 4-column responsive grid (2 col on tablet, 1 on mobile)
- Each card: image (`picsum.photos/seed/jobforge-blog-<n>/400/250`), title, meta line ("By Author · Date"), excerpt
- Cards have subtle shadow or border

### Subscribe Newsletter
- Dark background (use `#393e46` or similar dark)
- Centered heading: "Subscribe Newsletter"
- Email input + "Subscribe" button (blue)

### Footer
- Dark charcoal background (`#393e46`)
- 4 columns: For Candidates, For Employers, Archives, Company
- Contact Info section (address, phone, email — placeholder)
- Copyright bar at bottom
- MUST include "Component Dock" link to `https://www.componentdock.com/`
- NO ColorLib attribution

## Design tokens summary

| Token | Value |
|---|---|
| Brand blue | `#26baee` |
| Dark bg | `#393e46` |
| Light bg | `#edf0f5` |
| Card bg | `#fff` |
| Danger (heart) | `#f23a2e` |
| Font | Nunito Sans (Google Fonts) |
| Button radius | `30px` |
| Hero overlay | `rgba(0,0,0,0.4)` |
