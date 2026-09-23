# Penfolio — Design Notes & Implementation Outline

## Source
- ColorLib template: Author
- Preview: https://preview.colorlib.com/theme/author/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/author-free-template.jpg

## Section Order (top to bottom)

1. Navbar — dark bg, brand + 7 links, mobile hamburger
2. Hero — full-height split (text left, illustration right), dark overlay
3. Partners — 5 grayscale logos in a row
4. About — split: image left, bio text right
5. Counter — green bg, 4 animated counters
6. Chapter — tabbed book contents preview (8 tabs)
7. Testimonials — green bg, carousel with avatars
8. Books Grid — 8 book covers with hover overlays
9. Author Bio — photo left, key-value details right, CTA
10. Contact — heading + info + form (name, email, subject, message)
11. Footer — black bg, 3 columns, social icons, Component Dock

## Fidelity Notes

### Navbar
- Dark background (Bootstrap 4 dark navbar)
- Brand text "Penfolio" with green dot (span with color #17b978)
- Links: Home, About, Chapter, Reviews, My Books, Author, Contact
- Smooth scroll to section anchors (#home-section, #about-section, etc.)
- Mobile: hamburger toggle with collapse animation

### Hero
- Full viewport height (js-fullheight pattern)
- Split layout: ~1/3 text left, ~2/3 illustration right
- Semi-transparent dark overlay (opacity 0.5)
- Subheading: uppercase, 14px, bold, green (#17b978)
- H1: large heading, dark color
- CTA button: green (#17b978) bg, white text, rectangular (no radius)

### Partners
- 5 columns, grayscale partner logos
- Light background, no section padding top/bottom
- Animate on scroll

### About
- Split: left = large background image (book-themed), right = text
- Section id: "about-section"
- Multi-paragraph bio with font-family Open Sans

### Counter
- Solid green (#17b978) background
- 4 counters in a row: Copies Sold (1100), Copies Released (1200), Cup Of Coffee (340), Happy Readers (12000)
- Animated count-up on scroll intersection

### Chapter
- Heading: "What's Inside The Book"
- 8 pill/tab buttons: Title Page, Copyright, Table of Contents, Dedication, Foreword, Prologue, Epilogue, Epigraph
- Clicking a tab shows a description panel below
- Default: first tab active

### Testimonials
- Solid green (#17b978) background
- Carousel/slider of testimonial cards
- Each card: avatar image, quote text, name, position ("Marketing Manager")
- Navigation dots/arrows for cycling

### Books Grid
- 8 book cover images in a responsive grid (4 columns desktop, 2 mobile)
- Hover: dark overlay with book title text
- Image placeholder: picsum.photos/seed/penfolio-book-n/

### Author Bio
- Split: left = author photo with overlay, right = details
- Section id: "author-section"
- Key-value pairs: Name, DOB, Address, Zip, Email, Phone
- "View All Books" CTA with count badge

### Contact
- Heading + description
- Contact info: address, phone, email (icon + text)
- Form on light gray (#f8f9fa) background
- Fields: Name, Email, Subject, Message (textarea), Send Message button
- Form validation (required fields)

### Footer
- Solid black (#000000) background
- 3 widget columns: brand blurb + social, nav links, newsletter
- Social icons: font-awesome style (use lucide-react equivalents)
- Attribution: "Made with Component Dock" linking to componentdock.com

## Component Plan

```
src/
  App.tsx              — compose all sections
  components/
    Navbar.tsx         — dark navbar with mobile toggle
    Hero.tsx           — full-height split hero
    Partners.tsx       — logo row
    About.tsx          — split image + bio
    Counter.tsx        — animated stat counters
    Chapter.tsx        — tabbed book contents
    Testimonials.tsx   — carousel testimonials
    BooksGrid.tsx      — book cover grid
    AuthorBio.tsx      — author details + CTA
    Contact.tsx        — contact form + info
    Footer.tsx         — 3-column footer
  index.css            — Tailwind + @theme tokens
```

## Key Decisions

- Replace Bootstrap 4 classes with Tailwind utilities
- Use lucide-react for icons (replacing font-awesome)
- Animated counters: implement with IntersectionObserver + requestAnimationFrame
- Chapter tabs: controlled component with active state
- Testimonials: simple carousel with dots navigation
- Placeholder images: picsum.photos/seed/penfolio-<n>/
