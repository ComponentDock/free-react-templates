# JobGate — Implementation Notes

## Source
- ColorLib: Comport — https://colorlib.com/wp/template/comport/
- Preview: https://preview.colorlib.com/theme/comport/

## Section implementation order

1. **Navbar** — Logo left, nav links with dropdown submenus (Blog, Pages), login/signup buttons. Use a sticky header pattern. Replace Font Awesome icons with lucide-react. Mobile hamburger menu.

2. **Banner** — Full-width split: left half background image (picsum.photos/seed/jobgate-banner/1200/640), right half text. Headline with inline orange highlight on key word.

3. **SearchBar** — Absolute-positioned orange bar overlapping the banner bottom. Three inputs: category select, location select, keyword text. Dark "find job" button. Flexbox row, responsive stack on mobile.

4. **FeatureCards** — 3-column grid of feature cards on light gray bg. Each: title, description paragraph, "explore now" link. Hover: white bg + shadow.

5. **CategoryGrid** — 4×2 grid of category cards. Each: icon (use lucide-react), category name, job count. Border + bg color transition on hover.

6. **JobListings** — Tabbed interface (Recent | Full Time | Part Time | Intern). Each tab panel: job cards with title, meta (location, field, deadline with icons), company logo image, type badge, "apply" button. "more job post" CTA at bottom.

7. **Newsletter** — Full-width section with dark overlay bg image (picsum.photos/seed/jobgate-newsletter/1200/400). Centered heading + subtext in white. Email input + orange subscribe button.

8. **Testimonials** — "Happy employee" heading. Carousel/slider (use a simple CSS or react-based slider). Each slide: employee photo + quote. Hover overlay on photo reveals name + company.

9. **NewsBlog** — 3-column grid of news cards. Each: background image (picsum.photos/seed/jobgate-news-N/600/280), date + category tags, article title link. Rounded corners.

10. **DownloadCTA** — Split layout: left text + App Store/Play Store buttons, right device image (picsum.photos/seed/jobgate-device/600/400). Download buttons: white bg, orange icon, hover = orange bg.

11. **Footer** — Dark navy bg. 3 columns: top products links, newsletter form, Instagram feed grid (8 small images). Copyright bar with social icons. Component Dock attribution.

## Fidelity notes

- **Fonts:** Poppins for headings (700 for h1, 600 for h2-h4), Open Sans for body + buttons
- **Brand color:** #ff9902 (orange) — used extensively on buttons, search bar, newsletter overlay, hover states
- **Dark sections:** #04091e navy for header light menu and footer
- **Cards:** #f9f9f9 bg, #eee border, white + shadow on hover
- **Buttons:** 3px radius, uppercase, Open Sans 600 weight
- **Inputs:** 5px radius, no border
- **Shadows:** 0 10px 20px rgba(0,0,0,0.1) on card hover
- **Tabbed jobs:** Bootstrap-style tabs, active = white bg
- **Newsletter overlay:** rgba(1,2,12,0.6) dark on background image
- **Employee hover:** rgba(255,153,2,0.7) orange overlay on photo
- **Download buttons:** white bg, 5px radius, orange icon, hover = orange bg
- **Footer social icons:** white circles, hover = orange bg

## Component mapping (suggested)

- `Navbar.tsx` — Logo, NavLinks, SubMenu, AuthButtons, MobileMenu
- `Banner.tsx` — Split layout with bg image and text
- `SearchBar.tsx` — Form with selects + input + button
- `FeatureCards.tsx` — 3-column grid of FeatureCard
- `CategoryGrid.tsx` — 4×2 grid of CategoryCard
- `JobListings.tsx` — Tabs + JobCard list per tab
- `Newsletter.tsx` — Dark overlay section with form
- `Testimonials.tsx` — Carousel of TestimonialSlide
- `NewsBlog.tsx` — 3-column grid of NewsCard
- `DownloadCTA.tsx` — Split layout with app buttons
- `Footer.tsx` — 3-column footer + copyright bar + Component Dock link

## lucide-react icon mapping

- Font Awesome map-marker → MapPin
- Font Awesome pie-chart → PieChart
- Font Awesome clock-o → Clock
- Font Awesome quote-left → Quote
- Font Awesome calendar-o → Calendar
- Font Awesome folder-open-o → FolderOpen
- Font Awesome apple → Apple
- Font Awesome android → Android
- Font Awesome facebook → Facebook
- Font Awesome twitter → Twitter
- Font Awesome dribbble → Dribbble
- Font Awesome behance → (no direct equivalent, use ExternalLink or Globe)
- Font Awesome heart-o → Heart
- Navigation arrows → ChevronRight
