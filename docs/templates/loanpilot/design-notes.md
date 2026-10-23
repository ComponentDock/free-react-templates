# Loanpilot — Prep Notes

## Source
- ColorLib: Loanday (https://colorlib.com/wp/template/loanday/)
- Preview: https://preview.colorlib.com/theme/loanday/
- New name: loanpilot

## Section order (top to bottom)
1. Top bar (dark navy, address/phone/email, language selector)
2. Header/Navbar (sticky, logo + nav links + search + hamburger)
3. Hero (full-width bg image, headline, subtitle, 2 green buttons, loan calculator form)
4. Home About (2-col: text left, image right; heading, description, 2 sub-items, CTA)
5. Loan Services (full-width image grid, 4 loan types with text overlay)
6. Choose (6 feature cards, 3-col grid with icons)
7. Testimonials (dark bg with image, carousel with 3 customer reviews)
8. Counter (4 stats in a row: icons + numbers + labels)
9. Call/CTA (full-width bg image, dark overlay, heading + description + button)
10. Blog/Latest (3 post cards with author info)
11. Contact Widget (bg image, office addresses, phone number)
12. Footer (dark, logo, links, social, copyright, Component Dock)

## Key design decisions
- Font: Lato (300/400/700/900) — load via Google Fonts link in index.html
- Primary green: #88C417 — use in @theme for Tailwind classes
- Sharp buttons: border-radius 2px (NOT pill-shaped)
- Dark sections: #182143 (navy) and #323232 (gray)
- Hero form: white card on right side with light gray inputs (#f6f6f6)
- Background image sections: hero, testimonial, call, contact — use dark overlays
- Counter numbers: animated count-up effect (use useEffect + intersection observer)

## Component structure
- src/components/TopBar.tsx
- src/components/Navbar.tsx
- src/components/Hero.tsx (with loan form)
- src/components/HomeAbout.tsx
- src/components/LoanServices.tsx
- src/components/Choose.tsx
- src/components/Testimonials.tsx
- src/components/Counter.tsx
- src/components/CallToAction.tsx
- src/components/Blog.tsx
- src/components/ContactWidget.tsx
- src/components/Footer.tsx

## Fidelity notes
- Match the hero's split layout (text left, form right) 1:1
- Loan services cards use background images with dark overlay and white text
- Testimonials section: dark background image with carousel
- Counter section: icons above numbers, numbers animate on scroll
- Contact widget: background image with dark overlay, two addresses + phone
- Footer: dark background, 4-column layout
- All green buttons throughout (primary CTA color)
- Form inputs have light gray background (#f6f6f6), not white
- Top bar is separate from navbar (darker navy)
