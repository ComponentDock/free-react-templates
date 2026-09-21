# Loandawn — Implementation Notes

Source: ColorLib Loanday (https://preview.colorlib.com/theme/loanday/)
New name: Loandawn (apps/loandawn)

## Section Order (implementation order)

1. Header — TopBar + Navbar components
2. Hero — background image, headline, CTA buttons, loan application form
3. HomeAbout — text + images
4. LoanServices — 5 cards with background images
5. Choose — 6 feature items (icon + text)
6. Testimonials — carousel with background image
7. Counter — 4 animated stat items
8. CallSection — background image + contact form
9. LatestBlog — 3 blog cards + View More button
10. ContactWidget — offices + phone CTA
11. Footer — about, links, social, hours, copyright

## Fidelity Notes

- All section backgrounds are image-based (use picsum.photos placeholders)
- Buttons use lime green #88C417, border-radius 2px, uppercase bold text
- Header top bar is dark navy #182143
- Font: Lato (Google Fonts, weights 300–900)
- Section padding: 100px top/bottom (.spad pattern)
- Loan form has 5 fields in a specific 2-col + 1-full + 2-col layout
- Counter numbers should animate on scroll (intersection observer)
- Testimonials use a carousel (use a lightweight carousel or custom)
- No external JS dependencies — pure React components

## Component Mapping

- TopBar.tsx — header top with address/phone/email/language
- Navbar.tsx — logo + nav links + search icon
- Hero.tsx — split layout: text+CTAs left, form right
- HomeAbout.tsx — centered title + text + images
- LoanServices.tsx — 5 service cards grid
- Choose.tsx — 6 feature items (2x3 or 3x2 grid)
- TestimonialSection.tsx — carousel with background
- CounterSection.tsx — 4 stat items with animated numbers
- CallSection.tsx — background + title + form
- LatestBlog.tsx — 3 blog post cards
- ContactWidget.tsx — offices + phone CTA
- Footer.tsx — 4-column layout + copyright bar

## CSS Token Usage in Tailwind

- @theme: --color-brand: #88C417; --color-navy: #182143;
- Font: font-family via Google Fonts link in index.html
- Button classes: bg-brand text-white font-bold uppercase tracking-wide rounded-sm
- Section spacing: py-24 (≈100px)
