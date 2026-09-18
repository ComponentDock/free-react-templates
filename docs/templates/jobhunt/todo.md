# JobHunt — Implementation Notes

Source: ColorLib "Jobsco" (`jobsco`)
Preview: https://preview.colorlib.com/theme/jobsco/

## Section order (from live preview DOM)

1. Header/Navbar (transparent, sticky, logo + nav + buttons)
2. Hero (gray bg, illustration, headline, 2 CTAs, watermark text)
3. Top Jobs (horizontal slider of job category cards)
4. About (gray bg, split: image left, text right, watermark)
5. Job Categories (3x2 grid of category cards)
6. Testimonials (slider with avatars, dot nav)
7. Footer (gray bg, 3 columns, newsletter form)

## Design tokens

- Brand blue: `#000DFF` → use as Tailwind primary
- Text dark: `#00044A`
- Text muted: `#6D6E8D`
- Section bg gray: `#F1F5F9`
- Section bg alt: `#FBFBFB`
- Font: "DM Sans" (Google Font)
- Button outlined: border `#000DFF`, text `#000DFF`, bg `#fff`, letter-spacing 3px, uppercase
- Button filled: bg `#000DFF`, text `#fff`
- Sticker badge: `#000DFF` bg, white text, small pill

## Fidelity notes

### Header/Navbar
- Transparent header that becomes sticky on scroll
- Logo image left
- Nav links center: Home, Browse Job, Page (dropdown with Blog, Candidates, Job Details, Blog Details, Element), Contact
- Buttons right: phone icon + "Post A Job" (outlined style), "Log In" (filled blue)
- Mobile: slicknav hamburger menu

### Hero
- Gray background (`#F1F5F9`)
- Left side: subtitle "Easiest way to find a perfect job", headline "Find Your Next Dream Job"
- Two CTA buttons: "Looking For a Job?" (outlined blue), "Find Talent" (filled blue)
- Right side: hero illustration image (person with laptop)
- Decorative elements: bouncing shape image, second shape image
- Large watermark text "jobs" in background

### Top Jobs
- White background
- Centered heading: "1000+" badge + "Browse From Our Top Jobs" + description
- Horizontal slider (slick carousel) of job category cards
- Each card: icon SVG image, title (e.g. "Design & creatives"), description, "Apply Now" button
- Some cards have "Remote" sticker badge (blue pill, top-right)
- 6 cards total, scrollable horizontally

### About
- Gray background (`#F1F5F9`)
- Split layout: illustration image left (col-xl-6), text right (col-xl-5)
- Heading: "We Build Lasting Relationships Between Candidates & Businesses"
- Two description paragraphs
- "Find Talent" button (outlined blue)
- Large watermark text "Talents" in background

### Job Categories
- White background
- Centered heading: "Browse From Top Categories" + description
- 3x2 grid of category cards
- Each card: icon SVG, title, description, "Browse Job" button (outlined)
- Categories: Design & creatives, Finance, Marketing, Health/Medical, Corporate, Copywriting

### Testimonials
- White background
- Centered testimonial slider (dot navigation)
- Each testimonial: quote icon image, quote text, avatar image, name, role
- Decorative T-shape image in corner
- 3 testimonial items in slider

### Footer
- Gray background (`#F1F5F9`)
- 3 columns:
  1. Logo + description paragraph + social icons (Instagram, Facebook, Twitter)
  2. Useful links: Design & creatives, Telecommunication, Restaurant, Programming, Architecture
  3. Subscribe Newsletter: heading, description, email input + "Subscribe" button
- Bottom bar: copyright with Component Dock link

## Implementation tasks

- [ ] Scaffold app from existing template (copy simplest app, rename to jobhunt)
- [ ] Install dependencies (`npm install` at root)
- [ ] Create Header component (transparent sticky, logo, nav links with dropdown, 2 buttons)
- [ ] Create Hero component (gray bg, headline, 2 CTAs, illustration, watermark, shapes)
- [ ] Create TopJobs component (horizontal slider of job category cards with Remote stickers)
- [ ] Create About component (gray bg, split layout, watermark)
- [ ] Create JobCategories component (3x2 grid of category cards)
- [ ] Create Testimonials component (slider with avatars, dot nav)
- [ ] Create Footer component (3 columns, newsletter form, social icons)
- [ ] Write tests for all components (100% coverage)
- [ ] Run typecheck, lint, tests, build
- [ ] Update TEMPLATES.md with surge URL
