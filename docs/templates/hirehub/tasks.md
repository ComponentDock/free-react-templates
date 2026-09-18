# HireHub — Implementation Tasks & Design Notes

Source: ColorLib "Jobfinder" — https://colorlib.com/wp/template/jobfinder/
Preview: https://preview.colorlib.com/theme/jobfinder/
New name: hirehub

## Section-by-Section Build Order

### 1. Navbar (`Navbar.tsx`)
- Sticky white bar with logo "Hire" + bold "Hub"
- Nav links: For Candidates, For Employees (dropdown with sub-items), Contact
- "Post New Job" green pill button (right side)
- Mobile hamburger menu toggle
- Dropdown for "For Employees": Category, Browse Candidates, Post a Job, Employer Profile

### 2. Hero (`Hero.tsx`)
- Full-width background image with dark overlay (`rgba(0,0,0,0.4)`)
- Large display heading "Find Job" (use Amatic SC font via Google Fonts)
- Search form: job title input + location input + Search button (green, full-width on md+)
- "or browse by category" with inline category links below

### 3. Popular Categories (`Categories.tsx`)
- Section heading "Popular Categories"
- 8 cards in responsive grid (sm:2, md:3, lg:4 cols)
- Each card: icon (use lucide-react), category name, job count number
- Hover effect on cards (border or shadow)

### 4. Recent Jobs (`RecentJobs.tsx`)
- Two-column layout: left (col-8) = job list, right (col-4) = featured jobs carousel
- Job items: company logo placeholder, title, company, location, salary range, job type badge
- Left border color by type: info (#26baee) = Full Time, warning (#f8b500) = Freelance, danger (#f23a2e) = Part Time
- "Show More Jobs" green pill button below list

### 5. Featured Jobs Carousel (`FeaturedJobs.tsx`)
- Right sidebar carousel with Prev/Next controls
- Cards: white bg, border, padding, job title, category badge, company/location/salary, description
- Use a simple carousel (CSS scroll-snap or custom React state)

### 6. Testimonies (`Testimonies.tsx`)
- Two-column: left = image with play button overlay, right = testimonial quote
- Quote: italic text, attribution with name + role
- "Watch Video" link with arrow

### 7. CTA Banner (`CtaBanner.tsx`)
- Full-width background image with dark overlay
- "Your Dream Job" / "Is Waiting For You" headings
- Two buttons: "Find Jobs" (outline warning) + "Apply For A Job" (solid warning)

### 8. Why Choose Us (`Features.tsx`)
- 2x2 grid with border-bottom between rows, border-right between columns
- Each item: large icon (lucide-react), title, description, "Read More" link with arrow

### 9. Recent Blog (`BlogCarousel.tsx`)
- Carousel of blog cards
- Each card: image, title, date + author, excerpt text

### 10. Footer (`Footer.tsx`)
- Dark background (#0d0d0d)
- 4 columns: About (text + Read More button), Quick Menu (links), Categories (links), Social Icons
- Copyright line with Component Dock attribution link

## Design Token Mapping

| Original CSS         | Tailwind Class / Token                |
| -------------------- | ------------------------------------- |
| `#28a745`            | `@theme { --color-brand: #28a745; }`  |
| `#23923d`            | `hover:bg-[#23923d]`                  |
| `#0d0d0d`            | `bg-[#0d0d0d]`                        |
| `#f8f9fa`            | `bg-gray-50` or `bg-[#f8f9fa]`        |
| `rgba(0,0,0,0.4)`    | `bg-black/40`                         |
| `#26baee`            | `border-l-[#26baee]` (info jobs)      |
| `#f8b500`            | `border-l-[#f8b500]` (warning jobs)   |
| `#f23a2e`            | `border-l-[#f23a2e]` (danger jobs)    |
| `border-radius: 30px`| `rounded-full` (pill buttons)         |
| `border-radius: 4px` | `rounded` (standard buttons/cards)    |
| "Work Sans"          | Google Fonts `<link>` in index.html   |
| "Amatic SC"          | Google Fonts `<link>` in index.html   |

## Fidelity Notes

- Match section order exactly: Navbar → Hero → Categories → Recent/Featured Jobs → Testimonies → CTA → Features → Blog → Footer
- The hero search form has TWO text inputs side by side (not a single input)
- Job items use a left-border accent (3px solid) colored by job type — this is a key visual element
- Featured Jobs is a sidebar carousel, not a separate section
- The CTA banner reuses the same background image as the hero
- Footer is dark (#0d0d0d), not the typical dark-blue — match this exact shade
- "Amatic SC" is a handwritten/display font used ONLY for the hero h1 — don't apply it elsewhere
- The "Post New Job" navbar button is pill-shaped (30px radius), distinct from other rounded buttons
