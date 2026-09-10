# Teller (Banker) — Implementation TODO

Source: ColorLib Banker — https://preview.colorlib.com/theme/banker/
New name: `teller` | Package: `@free-react-templates/teller`

## Section-by-section breakdown

### 1. Navbar (Navbar.tsx)

- Sticky position, z-50
- Logo: "Teller" text + orange dot span
- Nav links: Home, About Us (with dropdown), Blog, Contact
- Social icons (Facebook, Twitter, LinkedIn) as icon buttons
- Mobile: hamburger menu with slide-in drawer
- Active link color: brand orange #fd7e14
- Dropdown: orange top-border, white bg, shadow

### 2. Hero Cover (Hero.tsx)

- Full-viewport (`h-screen`) with background image (`picsum.photos/seed/teller-hero/1920/1080`)
- Dark overlay (`bg-black/40` or similar)
- Centered text: 3-slide carousel auto-rotating
  - Slide 1: "Banking Solutions" (uppercase, 4rem, white, font-weight 900)
  - Slide 2: "Financing Solutions"
  - Slide 3: "Savings Accounts"
- Each slide: heading + paragraph (1.4rem, font-weight 300, white)
- Scroll-down mouse icon at bottom

### 3. Features Row (Features.tsx)

- 3-column grid, centered text
- Icons from lucide-react: Wallet, ShoppingCart, CreditCard
- Titles: "Money Savings", "Online Shoppings", "Credit / Debit Cards"
- Short description paragraphs

### 4. Amortization/Intro (IntroSection.tsx)

- Split: left image (`picsum.photos/seed/teller-about/600/600`) with circular bg decoration (300px, light bg behind)
- Right: heading "Amortization Computation", paragraph, green checkmark list (3 items), email input + "Submit Email" pill button

### 5. About Us (AboutUs.tsx)

- Section title "About Us" + lead paragraph
- Split: left image with circle bg, right heading "We Solve Your Financial Problem" + 2 paragraphs

### 6. Team (Team.tsx)

- Section title "Meet Team"
- 4-column grid, 2 rows (8 members)
- Each card: image with social overlay on hover (FB, TW, LI, IG icons), name + position below
- Use `picsum.photos/seed/teller-person-<n>/400/400` for photos

### 7. Gallery (Gallery.tsx)

- Section title "Gallery"
- Filter buttons: All, Events, Party, Holidays (pill-shaped, brand orange when active)
- 4-column grid of images with hover search icon overlay
- Images: `picsum.photos/seed/teller-gallery-<n>/400/400`
- Simple filter logic: tag each image, show/hide on button click

### 8. How It Works (HowItWorks.tsx)

- Split: left image carousel (prev/next arrows), right text carousel synced
- 3 steps: "01. Online Applications", "02. Get an approval", "03. Card delivery"
- Each: heading + paragraph + "Learn More" button

### 9. Services (Services.tsx)

- Section title "Our Services", `bg-light` background
- 6 cards in 3-column grid
- Each: icon (lucide-react), title, description, "Learn More" link
- Services: Business Consulting (Briefcase), Credit Card (CreditCard), Income Monitoring (TrendingUp), Insurance Consulting (Shield), Financial Investment (BarChart3), Financial Management (PieChart)

### 10. Testimonials (Testimonials.tsx)

- Section title "Happy Customers"
- Carousel of 4 testimonials
- Each: blockquote (1.5rem, italic), circular customer photo (100px), name
- Centered layout, max-width 800px

### 11. Pricing (Pricing.tsx)

- Section title "Pricing", `bg-light` background
- 3 cards: Basic ($47/yr), Premium ($200/yr, popular/elevated), Professional ($750/yr)
- Each: title, price (accent #fd7e14, 3rem), feature list with green checks + strikethrough for disabled, "Buy Now" button
- Premium card: elevated shadow

### 12. FAQ (Faq.tsx)

- Section title "Frequently Ask Questions"
- 2-column grid, 8 items (4 per column)
- Each: bold heading + answer paragraph

### 13. About Features (AboutFeatures.tsx)

- Split: left image with circle bg, right 2 feature items
- "Bank Loan" (icon) + "Banking Consultation" (icon), each with heading + paragraph + "Learn More" link

### 14. Blog (Blog.tsx)

- Section title "Our Blog"
- 3-column grid of blog cards
- Each: featured image, title, meta (author + date + category), excerpt, "Continue Reading..." link

### 15. Contact (Contact.tsx)

- Section title "Contact Us", `bg-light` background
- 3-column contact info: address, phone, email (orange icons)
- Full-width form: First Name, Last Name, Email, Subject, Message, "Send Message" button
- Form on white background card

### 16. Footer (Footer.tsx)

- Dark background (#343a40)
- 3-column: About Us text, Quick Links list, Follow Us social icons
- Newsletter: email input + "Send" button
- Copyright bar: "Made with Component Dock" linking to componentdock.com

## Component mapping

```
src/App.tsx
  ├── Navbar
  ├── Hero
  ├── Features
  ├── IntroSection
  ├── AboutUs
  ├── Team
  ├── Gallery
  ├── HowItWorks
  ├── Services
  ├── Testimonials
  ├── Pricing
  ├── Faq
  ├── AboutFeatures
  ├── Blog
  ├── Contact
  └── Footer
```

## Design notes

- All pill shapes (buttons + inputs): `rounded-full`
- Brand orange in @theme: `--color-brand: #fd7e14`
- Font: Google Fonts Open Sans 300/400/700 via `<link>` in index.html
- Circle bg decoration: use a pseudo-element or absolute-positioned div with `rounded-full` and light background behind images
- Gallery filter: simple React state (no external lib needed)
- Testimonials carousel: simple interval-based rotation
- No parallax (the original uses AOS fade animations; use Tailwind animate or AOS lib)
