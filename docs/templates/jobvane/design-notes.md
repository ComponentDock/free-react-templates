# JobVane — Design Notes & Task Outline

Source: ColorLib "Jobpply" → https://preview.colorlib.com/theme/jobpply/
New name: jobvane (apps/jobvane, @free-react-templates/jobvane)

## Section implementation order

1. **Navbar** (`components/Navbar.tsx`)
   - Dark transparent → white on scroll
   - Logo "JobVane" left, nav links right
   - Two CTA buttons: "Post a Job" (outline) + "Want a Job" (filled purple)
   - Fidelity notes: Bootstrap navbar, `.cta-colored` uses #6c63ff
   - Use `lucide-react` for Menu/X icons

2. **FeatureBar** (`components/FeatureBar.tsx`)
   - Full-width blue (#007bff) section
   - 4 feature cards in a row: icon + heading + description
   - Features: Search Millions of Jobs, Easy To Manage Jobs, Top Careers, Search Expert Candidates
   - Fidelity notes: `.services-section.bg-primary` with `.block-6` layout
   - Use Lucide: Search, Briefcase, TrendingUp, Users icons

3. **TopCategories** (`components/TopCategories.tsx`)
   - Light bg, centered heading "Top Categories"
   - 4-column grid of category items with icon, name, count
   - Categories: Web Development (354), Graphic Designer (143), Multimedia (100), Advertising (90)
   - Fidelity notes: `.category` list with `.number` count and arrow icon

4. **BrowseSpecialism** (`components/BrowseSpecialism.tsx`)
   - Full-width bg image with overlay
   - Heading "Browse Job by Specialism" + description
   - Fidelity notes: parallax bg image section
   - Use `picsum.photos/seed/jobvane-specialism/1200/600` for bg

5. **HotJobs** (`components/HotJobs.tsx`)
   - Light bg, 2-column layout: main + sidebar
   - Main: "Hot Jobs" heading with job listing cards (title, type badge, location, company, date)
   - Sidebar: "Top Recruitments" with agency cards (image, name, count)
   - Fidelity notes: `.job-post-item` cards with badge tags

6. **Testimonials** (`components/Testimonials.tsx`)
   - White bg, centered heading "Happy Clients"
   - Carousel of testimonial cards: user photo, quote, name, star rating
   - Fidelity notes: Owl Carousel → CSS carousel
   - Use `picsum.photos/seed/jobvane-person-n/100/100` for photos

7. **Candidates** (`components/Candidates.tsx`)
   - Blue (#007bff) bg, centered heading "Latest Candidates"
   - Carousel of candidate cards: photo, name, location
   - Fidelity notes: `.carousel-candidates` with `.team` cards
   - 5 candidate entries

8. **Newsletter** (`components/Newsletter.tsx`)
   - Full-width purple (#6c63ff) parallax section
   - Heading "Subscribe to our Newsletter" + email input + subscribe button
   - Fidelity notes: `.ftco-section-parallax` with `.parallax-img`

9. **Footer** (`components/Footer.tsx`)
   - Dark bg (#343a40), 4-column: About + social, Employers, Workers, Contact
   - Social: Twitter, Facebook, Instagram (Lucide icons)
   - Contact: address, phone, email
   - Copyright + Component Dock link (required)

## Design token summary

```
Primary:       #007bff (blue)
Accent/CTA:    #6c63ff (violet-purple)
Body text:     #212529
Light bg:      #f8f9fa
Dark footer:   #343a40
Font:          Nunito Sans (Google Fonts)
Icon set:      lucide-react (replaces Flaticon + Ionicons)
Button radius: 0.25rem (standard)
```

## Component dependencies

- `packages/ui`: Button, ButtonLink, cn utility
- External: Google Fonts (Nunito Sans via `<link>` in index.html)
- Images: `picsum.photos/seed/jobvane-<n>/<w>/<h>` for all placeholders
