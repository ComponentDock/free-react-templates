# CoachPath — Implementation Todo

Source: ColorLib Coaching (https://colorlib.com/wp/template/coaching/)
Preview: https://preview.colorlib.com/theme/coaching/

## Component Breakdown

### 1. Navbar.tsx
- [ ] Sticky top nav with logo "CoachPath." (navy + amber dot)
- [ ] Desktop: 7 nav links (Home, About, Our Training, Testimonials, Services, Blog, Contact)
- [ ] Mobile: hamburger toggle with slide-in menu
- [ ] Smooth-scroll on link click

### 2. Hero.tsx
- [ ] Dark navy (#373a6d) full-width background
- [ ] Large heading "I'm Professional" + typed-text animation (typewriter effect)
- [ ] Subtitle paragraph
- [ ] Amber CTA button "Contact Me" — smooth-scrolls to contact section

### 3. HeroSlider.tsx
- [ ] Image carousel (2 hero images, using picsum.photos placeholders)
- [ ] Overlaps hero via negative top margin (-20%)
- [ ] Auto-rotating slider

### 4. About.tsx
- [ ] Two-column layout (col-md-5 + col-md-6)
- [ ] Left: "Welcome To My Website" heading + 3 paragraphs
- [ ] Right: 2x2 grid of icon cards (Means of Living, Transform Lives)
- [ ] Icons from lucide-react

### 5. Training.tsx
- [ ] Light-gray background section
- [ ] Centered heading "Life Coach Training" + intro paragraph
- [ ] 3-card carousel: image + title + description
- [ ] Cards: "Life Coach Training", "Release Your Potential", "Transforming Lives"
- [ ] Placeholder images via picsum.photos

### 6. Testimonials.tsx
- [ ] White background, centered heading "Happy Customers"
- [ ] Carousel of testimonial blocks
- [ ] Each: blockquote text + circular avatar + name
- [ ] 2-3 testimonials

### 7. Services.tsx
- [ ] Navy primary bg (#373a6d), heading "Our Services" (white)
- [ ] Carousel of white service cards
- [ ] Each: icon (lucide-react) + title + description
- [ ] Cards: "Online Coaching", "Release Your Potential", etc.

### 8. Blog.tsx
- [ ] White background, centered heading "Our Blog" + intro
- [ ] 2-column grid, 4 blog entries
- [ ] Each: image thumbnail (left) + title + date + excerpt + "Read More.." link

### 9. Contact.tsx
- [ ] Light-gray background, heading "Contact Me"
- [ ] 3-column contact info: Address, Phone, Email (labels in primary color)
- [ ] Form: first-name, email, message textarea, "Send Message" button
- [ ] Basic validation (required fields)

### 10. Footer.tsx
- [ ] Navy primary bg (#373a6d)
- [ ] 3-column layout: About blurb, Quick Links, Follow Us + Newsletter
- [ ] Social icons (Facebook, Twitter, Instagram, LinkedIn) via lucide-react
- [ ] Newsletter form: email input + "Send" button
- [ ] Copyright line
- [ ] Link to https://www.componentdock.com/

## Shared / Config
- [ ] Copy simplest existing app as template
- [ ] Rename package to @free-react-templates/coachpath
- [ ] Set public/CNAME to coachpath.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Register injectUiSource() in vite.config.ts
- [ ] Add Quicksand font via Google Fonts link in index.html
- [ ] Set up Tailwind theme tokens (#373a6d primary, #ffc107 warning)

## Tests (TDD)
- [ ] Navbar: renders all nav links, sticky behavior, mobile toggle
- [ ] Hero: typed-text animation, CTA button click scrolls
- [ ] About: renders heading, paragraphs, icon cards
- [ ] Training: renders carousel with 3 cards
- [ ] Testimonials: renders testimonial blocks
- [ ] Services: renders white cards on navy bg
- [ ] Blog: renders 4 entries in grid
- [ ] Contact: form fields render, validation works
- [ ] Footer: 3 columns, ComponentDock link, newsletter form
- [ ] App: composes all sections in correct order
- [ ] 100% coverage enforced

## Deploy
- [ ] Commit + push to main
- [ ] Merge PR (squash)
- [ ] Surge deploy to coachpath.free.componentdock.com
