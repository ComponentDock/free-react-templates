# CleanSlate — Implementation Notes

Source: ColorLib Cleaning Company (https://preview.colorlib.com/theme/cleaningcompany/)
Note: Preview URL slug is `cleaningcompany` (no hyphen), but ColorLib page slug is `cleaning-company`.

## Section Order (implement in this order)

1. Top Bar — blue contact bar with phone, email, social icons
2. Navbar — dark sticky, logo left with yellow accent, 7 nav links, mobile hamburger
3. Hero — full-width background image, subheading + headline + blue CTA
4. Appointment Form — white bar overlapping hero, 4 form fields + submit button
5. Welcome/About — two-column: business hours card + image left, text right
6. Stats Counter — 3 animated counters (years, customers, buildings)
7. Services — "How We Works" heading + 6 service cards in 3-col grid
8. Team — "Our Team" heading + member cards with social icons
9. Testimonials — dark bg, owl-carousel-style quote cards
10. Blog — 3 blog post cards with background images
11. Parallax CTA — background image with parallax effect + CTA text
12. Pricing — light bg, 4 plan cards (Starter/Standard/Premium/Platinum)
13. Footer — dark bg, 4 columns + copyright with Component Dock link

## Fidelity Notes

### Top Bar

- Blue background `#1a73e8` (from CSS: `#top-bar-wrap { background-color: #1a73e8 }`)
- White text, phone number left, email center, social icons right
- Social icons: Facebook, Twitter, Instagram, Dribbble (use lucide-react icons)
- Sticky behavior on scroll (CSS: `.wpex-top-bar-sticky`)

### Navbar

- Dark background `#343a40` (Bootstrap `bg-dark`)
- Logo: "Cleaning" in white bold + "Company" in yellow `#f3e53d`
- Nav links: Home, About, Services, Portfolio, Pricing, Blog, Contact
- Active link: white text with yellow underline
- Mobile: hamburger icon, collapse menu (Bootstrap navbar pattern)
- Font: Roboto sans-serif

### Hero

- Full-width background image (use picsum placeholder: `https://picsum.photos/seed/cleanslate-hero/1920/800`)
- White text overlay: subheading "Leave the house cleaning chores to us" (uppercase, small)
- Main headline: "Let us do the dirty work, so you don't have to." (bold, large)
- Blue button: "Learn more" with arrow, `border-radius: 0.25rem`

### Appointment Form

- White background bar overlapping hero bottom, subtle shadow
- 4 columns: Name input, Phone input, Service dropdown, Cleaner dropdown
- Input style: underline (bottom border only), clean minimal design
- Right-aligned: solid blue "MAKE AN APPOINTMENT" button, square corners
- Dropdowns: "Select Services" with options (Office, Pool, Carpet, Kitchen, Garden, Window)
- Dropdowns: "Select Cleaners" with options (John Doe, William Smith, Danny Green, Jason Thompson)

### Welcome/About

- Two-column layout (50/50 on desktop)
- Left column:
  - Blue rounded card: "Business Hours" with opening days (Mon-Fri 9am-8pm, Sat 9am-5pm) and vacations (Sundays + Holidays)
  - Cleaner illustration image (use picsum placeholder)
- Right column:
  - Small uppercase subheading: "WELCOME TO CLEANING COMPANY" in blue
  - Large dark heading: "Let's make you fresher than ever"
  - Body text paragraph in muted gray

### Stats Counter

- White background, centered layout
- Three stat blocks in a row:
  - 45 Years Experienced (yellow number)
  - 2342 Happy Customers (yellow number)
  - 30 Building Cleaned (yellow number)
- Numbers animate count-up on scroll into view
- Yellow `#f3e53d` for counter numbers

### Services

- White background
- Heading: "How We Works" (centered)
- 3-column grid, 2 rows = 6 service cards
- Each card: icon (use lucide-react), title, description, "Read more" link
- Services: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning, Window Cleaning
- Icon style: circular colored icon container

### Team

- White background
- Heading: "Our Team" (centered)
- Description paragraph + "View All Staff" secondary button (yellow)
- 4-column grid (3 on first row, 1 on second)
- Each card: staff image (background-image style, use picsum), name, position, social icons (Twitter, Facebook, Google, Instagram)
- Hover effect: social icons fade in over image

### Testimonials

- Dark background `#343a40` (`ftco-bg-dark`)
- Subheading: "Testimonies" (centered, white)
- Heading: "Happy Customer" (centered, white)
- Carousel/slider with testimonial cards
- Each card: quote icon (fa-quote-right), avatar image, name, position, quote text
- 3 testimonial slides

### Blog

- White background
- 3 blog cards in a row
- Each card: background image (rounded), overlay with title and metadata
- Blog post titles and dates

### Parallax CTA

- Full-width background image with parallax scrolling effect
- Dark overlay
- CTA text (centered)
- Use `background-attachment: fixed` for parallax

### Pricing

- Light gray background `#f8f9fa`
- 4 pricing cards in a row
- Each card: icon (flaticon), plan name, price ($), feature list (checkmarks), "Get Started" button
- Plans: Starter ($49), Standard ($79, highlighted/active), Premium ($109), Platinum ($159)
- Standard card has active/highlighted state (yellow accent border or shadow)
- Features: Bedrooms cleaning, Vacuuming, Bathroom cleaning, Mirror cleaning, Livingroom cleaning

### Footer

- Dark background `#1d2124`
- 4 columns:
  1. Company info: "CleanSlate" heading, description, social icons (Twitter, Facebook, Instagram)
  2. Latest News: 2 blog preview cards with images
  3. Quick Links: Home, About, Services, Works, Blog, Contact
  4. Have a Questions?: Address, phone, email with icons
- Copyright bar: centered text, link to componentdock.com

## Design Tokens to Apply in Tailwind @theme

```css
@theme {
  --color-brand: #2b98f0;
  --color-brand-dark: #1a73e8;
  --color-accent: #f3e53d;
  --color-dark: #343a40;
  --color-darker: #1d2124;
  --color-heading: #212529;
  --color-body: #6c757d;
  --color-border: #dee2e6;
  --color-light-bg: #f8f9fa;
  --font-primary: 'Roboto', Arial, sans-serif;
}
```

## Component List

- TopBar (phone + email + social icons, blue bg)
- Navbar (logo + nav links + mobile toggle, dark bg)
- Hero (background image + subheading + headline + CTA button)
- AppointmentForm (4 fields + submit button, overlapping hero)
- WelcomeSection (business hours card + image + welcome text)
- StatsCounter (3 animated stat blocks)
- ServiceCards (heading + 6 service cards in grid)
- TeamSection (heading + description + member cards)
- TestimonialsCarousel (dark bg, carousel with quotes)
- BlogCards (3 blog post cards)
- ParallaxCTA (background image + CTA text)
- PricingSection (4 pricing cards, Standard highlighted)
- Footer (4 columns + copyright with Component Dock link)
