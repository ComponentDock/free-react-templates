# JobLink Design Notes

Recreation of ColorLib "Jobhub" (https://colorlib.com/wp/template/jobhub/).

## Sections (order from preview)

1. **Navbar** — Sticky top, transparent on hero (blue bg). Brand "JobLink" with location pin icon, nav links (Home, Categories, Pages with dropdown, Log in), "Post a Job" outlined white button. Mobile hamburger.
2. **Hero** — Full-width blue gradient background (`#367FFF` to lighter blue), headline "Find your dream job.", subtitle, search form (Job title or keywords text input, Where? text input, Category select dropdown, green Search button), popular search tags below.
3. **Brand Logos** — Horizontal scrolling carousel of 5+ partner/client logos in grayscale with hover effect.
4. **Services/Categories** — Heading "Browse From Over 2000+ Jobs" (highlight "2000+" in green), subtitle, 6 category cards in responsive grid. Each card: icon, category name, short description, "Browse Job" outlined blue border link. Cards have white bg, rounded top corners, subtle shadow.
5. **Stats/Counter** — Blue gradient background with light pattern overlay. Large counter "89027+" with "Talented waiting for hire" text. Animated counter.
6. **Talent CTA** — White background. Heading "Want to hire perfect person?", descriptive paragraph, green "Browse Talents" button. Left-aligned text.
7. **Top Jobs** — Heading "Browse top jobs", subtitle. 6 job listing cards in responsive grid. Each: category icon, category name ("Design & creatives"), short description, "Apply Now" green button, "Remote" badge tag.
8. **Job Post CTA** — Two-column layout: "Post a job" (description + green button) and "Browse for job" (description + blue button).
9. **Testimonials** — Carousel with blockquotes, author name "Robart Brown", title "Creative designer at Colorlib" (paraphrase), circular avatar. Dot navigation.
10. **Newsletter/CTA** — Full-width blue background. Heading "Start finding your dream job", email input, green "Subscribe" button.
11. **Footer** — Dark background (`#111`). 4 columns: brand description, Top categories links, For employer links, Company links, Subscribe newsletter with email input. Copyright with "Component Dock" link.

## Design Tokens (from CSS)

- Primary blue: `#367FFF` (hero, sticky header, buttons, section accents)
- Accent green: `#11E276` (search button, CTAs, Browse Job links, badges)
- Dark navy text: `#1f2b7b` (headings)
- Light bg: `#f7f7f7` (alternating sections)
- Footer dark: `#111`
- Fonts: Muli (body) + Raleway (headings/nav) — Google Fonts
- Buttons: pill-shaped (border-radius: 30px), green or blue bg
- Cards: white bg, rounded top corners (10px), subtle box-shadow
- Search form: pill-shaped inputs with rounded corners

## Fidelity Notes

- Match the blue gradient hero exactly — it's the most distinctive element
- The search form is a key feature — 3 inputs side-by-side with green search button
- Brand logos carousel uses grayscale with opacity hover effect
- Service cards have a specific layout: icon top-left, text below, "Browse Job" link bottom
- Stats section has animated counter with blue gradient background
- Job listing cards are compact with category icon, name, description, and Remote badge
- Footer has 4 distinct columns plus newsletter — match the grid layout
- No ColorLib assets copied — picsum.photos for images, lucide-react for icons
- All text content is paraphrased but keeps the same structure and intent
