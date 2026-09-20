# Tribune — Implementation Notes

Source: ColorLib Plataforma (https://preview.colorlib.com/theme/plataforma/)
New name: tribune

## Section Order (fidelity notes)

1. **Navbar** — Dark bg, sticky. Logo "Tribune" left, 6 nav links center-left, "Buy ticket" right. Bootstrap-style expandable on mobile.
2. **Hero** — Full-screen bg image with dark overlay (850px). Left: subtitle "Conference 2019", heading "Business Leaders", countdown timer (Days/Hours/Minutes/Seconds). Right: registration form (Name, Position, Phone, Email, checkbox, "Join now" button). Original uses `data-scrollax` parallax on heading.
3. **Services Strip** — Solid blue bg (`#1162fb`). 4 cards in a row: Venue, Transport, Hotel, Restaurant. Each: icon (flaticon), heading, short description. Uses Bootstrap `.media` pattern.
4. **About** — Two-column (5+7 split). Left: full-height image. Right: "What is all about us?" heading, 2 body paragraphs, "Join now" blue button. White bg.
5. **Schedule** — "Conference Schedule" heading. Vertical pill tabs (Bootstrap v-pills): First Day (21 July 2019), Second Day (22 July), Third Day (23 July). Each tab: list of session items with time/title.
6. **Gallery** — "Conference Gallery" heading. 4 equal-size image links with lightbox popup (magnific-popup). Grid layout.
7. **Testimonials** — "Happy Clients" heading. Carousel/slider with client testimonials. Owl carousel in original.
8. **Pricing** — "Conference Ticket Pricing" heading. 3 cards: Personal, Small Team, Family Pack. Each: tier name, "Enjoy All The Features" subtitle, "Buy Ticket" full-width button (blue).
9. **Speakers** — "Conference Speakers" heading. 4 speaker cards: image, name, description, 3 social icon links (Facebook, Twitter, Google+).
10. **Newsletter** — Parallax bg image. "Subscribe to our Newsletter" heading, description text, email input + subscribe button.
11. **Footer** — Dark bg (`#212529`). Logo "Tribune", description, social icons. Three columns: Useful Links, Privacy, Have a Questions? (address, phone, email). Copyright with "Component Dock" link.

## Design Token Reference

- Primary: `#1162fb` (Bootstrap primary)
- Dark: `#212529` (Bootstrap dark)
- Font: Nunito Sans (Google Fonts)
- Button: Bootstrap `.btn-primary` style (~4px radius)
- Services bg: solid `#1162fb`
- Hero height: 850px
- Section spacing: Bootstrap `.ftco-section` defaults (~80px)

## Implementation Notes

- Replace jQuery countdown with React hook (useState + setInterval)
- Replace Bootstrap tabs with controlled React component
- Replace magnific-popup with a simple React lightbox or modal
- Replace owl carousel with a React carousel (or CSS scroll-snap)
- Replace `data-scrollax` parallax with CSS `background-attachment: fixed` or IntersectionObserver
- Registration form in hero: controlled form with basic validation
- Gallery: 4 picsum placeholder images with equal aspect ratio
- Speaker images: picsum placeholders
- Services icons: use lucide-react equivalents
- Newsletter: simple controlled email input
