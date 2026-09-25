# ArchVault — Design Notes & Implementation Tasks

Source: ColorLib Archs (`https://colorlib.com/wp/template/archs/`)
Preview: `https://preview.colorlib.com/theme/archs/`
Design tokens: brand `#ff5733`, bg `#ebeef0` / `#f8f9fa`, text `#333333`, system fonts, square buttons

## Structure order (section-by-section)

### 1. Navbar
- Dark top bar: social icons (Twitter, Facebook, LinkedIn, Instagram) + email + phone
- Sticky main nav: logo left, links right
- Links: Home, About (dropdown), Our Team, Pricing, FAQ (dropdown), Projects, Blog, Services, Contact
- Dropdown submenus for About and FAQ
- Mobile: hamburger toggle, off-canvas menu
- Fidelity note: match the 2-tier navbar (top utility bar + main nav below)

### 2. Hero / Cover
- Full-width with dark overlay (`rgba(0,0,0,0.6)`)
- Background image → use `https://picsum.photos/seed/archvault-hero/1920/1080`
- Centered play button (circle with play icon)
- Large uppercase heading: "Interior Design"
- Subtitle line: em-styled text below heading
- Fidelity note: the play button links to a video; in React, show a visual button but no actual video embed

### 3. Features Bar
- 3-column row, border-bottom separator
- Each: icon (Flaticon style) + heading
- Items: "Innovative Structure", "Architectural", "Interior Design"
- Use `lucide-react` icons or similar to match the visual weight
- Fidelity note: icons are large (`display-4`), inline with heading text

### 4. About Us
- Two-column: left = large image, right = content
- "About Us" heading (h3), descriptive paragraphs
- Check-list: 4 items with green checkmark icons (`.ul-check.success`)
- CTA button: "Learn More" → primary coral, square corners
- Fidelity note: image takes 7/12 columns on desktop; content 4/12

### 5. Our Team
- Centered "Our Team" heading
- 3×2 grid of team member cards
- Each card: circular photo, name below, role, social icons (hover overlay on image)
- Fidelity note: team photos have a hover effect that reveals social icons

### 6. Pricing
- Centered "Choose Your Plan" heading
- 3-column pricing cards: Starter ($19.99), Professional ($39.99), Enterprise ($99.99)
- Each card: bordered, plan name, price (currency superscript + number + "/mo"), description, feature list
- Lower tiers have some features in muted/strikethrough style
- CTA button per card
- Fidelity note: cards have border + padding, not shadow; price uses large number with small currency prefix

### 7. FAQ
- Centered "Frequently Asked Questions" heading
- Bootstrap accordion (5 items) with expand/collapse
- Use React state for accordion behavior (single-open or multi-open)
- Fidelity note: the original uses Bootstrap collapse; replicate with state-driven open/close

### 8. Testimonials
- Centered "Testimonials" heading
- Owl-carousel with testimonial cards
- Each card: quote text, person name, role
- Carousel auto-plays and is swipeable
- Fidelity note: use a simple carousel implementation; 3 cards visible on desktop

### 9. Projects Gallery
- Centered "Our Projects" heading
- 3-column grid of project images
- Each: image with hover caption (project name + category)
- Lightbox on click
- Use `https://picsum.photos/seed/archvault-proj-<n>/600/400` for images
- Fidelity note: captions appear on hover with dark overlay

### 10. Blog / News
- Centered "Our Blog Posts" heading
- 3-column blog cards
- Each: featured image, date, title, excerpt, "Read More" link
- Use `https://picsum.photos/seed/archvault-blog-<n>/600/400` for images
- Fidelity note: date is small and muted; "Read More" is a simple text link

### 11. Services
- Centered "Our Services" heading
- 5-column row of service items with icon + title
- Items: "Innovative Structure", "Architectural Design", "Interior Design", "Modern Window Design", "Experts Architect"
- Light background (`#f8f9fa`)
- Fidelity note: on mobile these stack to 2-3 columns; on desktop they fit 5 across

### 12. Contact
- Centered "Contact Us" heading
- Two-column: left = address/phone/email; right = form (name, email, message, submit)
- Light background
- Form validation: required fields, show errors on submit
- Fidelity note: form fields have bottom-border style, not full borders

### 13. Footer
- Dark background (black)
- Multi-column: logo + description, navigation links, social icons
- Copyright line
- MUST link `https://www.componentdock.com/` with "Component Dock" branding
- Fidelity note: the original footer is simple; keep it clean

## Component list (proposed)

- `Navbar.tsx` — 2-tier sticky nav with mobile hamburger
- `Hero.tsx` — Full-width cover with overlay
- `FeaturesBar.tsx` — 3-column icon+heading row
- `About.tsx` — Two-column image + content
- `Team.tsx` — 3×2 member grid with hover social icons
- `Pricing.tsx` — 3-column pricing cards
- `FAQ.tsx` — Accordion with 5 items
- `Testimonials.tsx` — Carousel of testimonial cards
- `Projects.tsx` — Image gallery grid with hover captions
- `Blog.tsx` — 3-column blog post cards
- `Services.tsx` — 5-column service items
- `Contact.tsx` — Contact form + details
- `Footer.tsx` — Dark footer with links
