# Quorum — Design Notes & Implementation Tasks

Source: ColorLib "Neutral" — https://preview.colorlib.com/theme/neutral/
New name: `quorum` (apps/quorum, @free-react-templates/quorum)

## Design Notes

### Visual Style
- Law firm template with a professional, muted aesthetic
- Primary accent: muted plum/purple `#6e5773` — used on all CTA buttons and the practice-areas sidebar
- Dark navbar (`#343a40`) that transitions on scroll
- Full-height hero with background image and semi-transparent dark overlay
- Light gray (`#f8f9fa`) alternating section backgrounds
- Body text is light gray `#999999` on white
- Font: "Nunito Sans" (Google Fonts) — round, friendly sans-serif
- Buttons have Bootstrap default border-radius, no custom shaping

### Section-by-Section Fidelity Notes

#### 1. Navbar
- Dark background, fixed/sticky
- Brand text "Quorum" (left)
- Nav links (right): Home, About, Practice Areas, Attorneys, Blog, Contact
- CTA: "Request a Quote" text link (highlighted color)
- On scroll: navbar gains `.scrolled` class with lighter bg and shadow
- Mobile: hamburger toggle, links collapse

#### 2. Hero
- Full viewport height, background image with dark overlay (`rgba(0,0,0,0.45)`)
- Heading (58px, white): "Reputation, Respect, Result"
- Subtitle (white): descriptive text
- CTA button: "Request a Quote" — brand color `#6e5773`, white text, padded (`py-3 px-4`)
- Placeholder image: `https://picsum.photos/seed/quorum-hero/1920/1080`

#### 3. Stats/Counter
- Background image with overlay (use same as hero or different)
- 4 stat items in a row: icon + animated number + label
- Stats: 50 Years of Experienced, 10000 Trusted Clients, 564 Qualified Lawyers, 300 Honors & Awards
- Icons: use lucide-react equivalents (Building2, Handshake, Scale, Award)
- Numbers animate on scroll into view (use IntersectionObserver)

#### 4. About
- Light bg (`#f8f9fa`)
- Two-column layout: image left (with video play button overlay), text right
- Subheading: "Welcome"
- Heading: "Welcome to Quorum A Law Firm" (44px)
- Two paragraphs of descriptive text
- Second about block: reversed layout (image right), "Testimonials" subheading
- Placeholder image: `https://picsum.photos/seed/quorum-about/800/600`

#### 5. Testimonials
- Light bg, same as about section
- Carousel with 3+ testimonial cards
- Each card: quote icon (left quote mark), quote text, person photo + name + role
- Use a simple carousel (CSS snap or useState-based)
- Placeholder person images: `https://picsum.photos/seed/quorum-person-{n}/100/100`

#### 6. Practice Areas
- Full-width section
- Vertical tabbed layout:
  - Left: icon list on `#6e5773` bg — 9 practice areas
  - Right: content panel with selected area's title, short excerpt, full description, "Learn More" link
- Areas: Family Law, Business Law, Insurance Law, Criminal Law, Employment Law, Financial Law, Drug Offenses, Sexual Offenses, Property Law
- Default: first tab selected
- Icons: use lucide-react (Scale, Briefcase, Shield, Gavel, Users, Coins, Pill, Heart, Home)

#### 7. Attorneys
- Light bg
- Heading: "Our Legal Attorneys" with "About Us" subheading
- 4-column grid of attorney cards
- Each card: photo (circle or square), name, role
- Attorneys: Lloyd Wilson (CEO, Founder), Rachel Parker (Business Lawyer), Ian Smith (Insurance Lawyer), Alicia Henderson (Criminal Law)
- Placeholder images: `https://picsum.photos/seed/quorum-attorney-{n}/400/400`

#### 8. Blog
- White bg
- Heading: "Our Blog" with "Blog" subheading
- 3-column card grid
- Each card: image, title, excerpt, "Read More" link, meta (author + comment count)
- Placeholder images: `https://picsum.photos/seed/quorum-blog-{n}/600/400`

#### 9. Contact
- Light bg
- Heading: "Contact Us" with "Contact" subheading
- 4-column info cards: Address, Contact Number, Email, Website
- Each with an icon and value text

#### 10. Footer
- White bg, 3-column layout
- Column 1: "About Quorum" heading + description
- Column 2: "Links" heading + nav links (Home, About, Practice Areas, Attorneys, Blog, Contact)
- Column 3: "Practice Areas" heading + area links + "Have a Questions?" heading + contact info
- Bottom: copyright line + "Component Dock" link

## Implementation Tasks

- [ ] Create apps/quorum/ scaffold (copy simplest existing app, rename package)
- [ ] Set up index.html with Nunito Sans Google Font link
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind + theme tokens (#6e5773 brand color)
- [ ] Create Navbar component (dark, sticky, responsive)
- [ ] Create Hero component (full-height bg image, overlay, heading, CTA)
- [ ] Create Stats component (4 animated counters with icons)
- [ ] Create About component (two-column with video button)
- [ ] Create Testimonials component (carousel)
- [ ] Create PracticeAreas component (vertical tabs)
- [ ] Create Attorneys component (4-column grid)
- [ ] Create Blog component (3-column cards)
- [ ] Create Contact component (4 info cards)
- [ ] Create Footer component (3 columns + copyright)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (100% coverage)
- [ ] Add public/CNAME: quorum.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Run npm install at root to register workspace
- [ ] Run scripts/verify-app.sh quorum (typecheck + lint + tests + build)
- [ ] No ColorLib references in any app code
