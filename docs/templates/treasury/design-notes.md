# Treasury — Implementation Notes

## Source Reference
- **ColorLib slug:** banker
- **Preview:** https://preview.colorlib.com/theme/banker/
- **Category:** Business / Finance / Banking

## Structure Order (top to bottom)
1. Navbar (sticky, transparent over hero, "Treasury." logo with orange dot)
2. Hero (full-width image bg, dark overlay, carousel of 3 slides, scroll indicator)
3. Features (3-column: Money Savings, Online Shoppings, Credit/Debit Cards)
4. About/Amortization (2-col: circular image left, heading+checklist+email form right)
5. About Us (2-col: circular image left, "We Solve Your Financial Problem" text right)
6. Team (4-col grid, 8 members with social overlay icons on hover)
7. Gallery (filter tabs: All/Events/Party/Holidays, image grid, lightbox)
8. How It Works (3-step horizontal: Online Applications, Get an approval, Card delivery)
9. Services (6 cards on light bg: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management)
10. Testimonials (4 customer quotes with names/positions)
11. Pricing (3 tiers on light bg: Basic $47, Premium $200 highlighted, Professional $750)
12. FAQ (2-column, 8 Q&A pairs)
13. About Features (circular image left, Bank Loan + Banking Consultation items right)
14. Blog (3-column grid of blog cards with images, meta, descriptions)
15. Contact (light bg: 3 info columns with icons + contact form)
16. Footer (dark #343a40: About Us, Quick Links, Follow Us, Subscribe Newsletter, copyright)

## Section-by-Section Fidelity Notes

### 1. Navbar
- Sticky position, absolute over hero (transparent bg)
- Logo: "Treasury" text + orange "." dot accent (`#fd7e14`)
- Nav links: Home, About Us (with dropdown), Blog, Contact
- Social icons: Facebook, Twitter, LinkedIn (inline, small padding)
- Mobile: hamburger toggle, slide-in mobile menu from right
- Dropdown: white bg, `2px solid #fd7e14` top border, hover bg `#eff1f3`

### 2. Hero Section
- Full-width background image with dark overlay (semi-transparent)
- Centered content with carousel (Owl Carousel in original)
- 3 slides: "Banking Solutions", "Financing Solutions", "Savings Accounts"
- Each slide: uppercase h1, paragraph description
- Scroll-down mouse indicator at bottom (smooth scroll to next section)
- AOS fade-up animations on text elements

### 3. Features Section
- 3 columns (col-md-4), centered content
- Each: SVG icon (wallet, cart, credit-card) at 25% width, card-title h3, paragraph
- AOS fade-up with staggered delays (0, 100, 200ms)
- Icons: use lucide-react equivalents (Wallet, ShoppingCart, CreditCard)

### 4. About/Amortization Section
- 2-column layout: image left (col-lg-6), content right (col-lg-5 ml-auto)
- Image in circular frame (`circle-bg` figure class)
- Heading: "Amortization Computation" (h3, black text)
- Green checkmark list (`ul-check success`): 3 items
- Email form: text input + "Submit Email" button (pill shape, orange)

### 5. About Us Section
- Centered section title "About Us" + lead paragraph
- 2-column: circular image left, text right
- Heading: "We Solve Your Financial Problem"
- 2 paragraphs of descriptive text

### 6. Team Section
- Centered "Meet Team" heading + lead text
- 4-column grid (col-md-6 col-lg-3), 8 members total (2 rows)
- Each member: photo with social overlay (Facebook, Twitter, LinkedIn, Instagram icons)
- Social icons appear over photo on hover (semi-transparent bg)
- Below photo: name (h3) + position (span)

### 7. Gallery Section
- Centered "Gallery" heading
- Filter buttons: "All" (active), "Events", "Party", "Holidays"
- Buttons are orange pill shape (`btn btn-primary`)
- Image grid: 4 columns (col-xl-3), items tagged by category
- Click opens Fancybox lightbox overlay
- Items have search icon overlay on hover

### 8. How It Works Section
- Centered "How It Works" heading
- 3 horizontal steps, each with number + title + description
- Steps: "01. Online Applications", "02. Get an approval", "03. Card delivery"
- Each step is a card-like block with border

### 9. Services Section
- Light background (`bg-light`)
- Centered "Our Services" heading
- 6 service cards in 3-column grid (2 rows)
- Each card: icon, title (h3), description paragraph
- Services: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management

### 10. Testimonials Section
- "Happy Customers" heading
- 4 testimonial cards with customer quotes
- Each: quote text, name, position
- Displayed in a row (responsive)

### 11. Pricing Section
- Light background (`bg-light`)
- "Pricing" heading
- 3 pricing tiers in 3-column grid
- Basic ($47/yr): 2 active features, 3 struck through, "Buy Now" secondary button
- Premium ($200/yr): 4 active features, 1 struck through, "Buy Now" primary (orange) button, visually highlighted
- Professional ($750/yr): all 5 features active, "Buy Now" secondary button
- Feature lists use green checkmark icons (`ul-check success`)
- Struck-through items have `class="remove"` (line-through, gray)

### 12. FAQ Section
- "Frequently Ask Questions" heading
- 2-column layout (col-lg-6 each)
- 4 questions per column (8 total)
- Each: h4 question (black text) + paragraph answer
- Questions are NOT accordion — they are all visible statically

### 13. About Features Section
- 2-column: circular image left, feature items right
- 2 features: "Bank Loan" and "Banking Consultation"
- Each: flaticon icon (use lucide-react), title, description, "Learn More" link

### 14. Blog Section
- "Our Blog" heading
- 3-column grid (col-md-6 col-lg-4)
- Each card: image, title (linked), meta (author, date, category), description, "Continue Reading..." link
- AOS fade-up with staggered delays

### 15. Contact Section
- Light background (`bg-light`)
- "Contact Us" heading
- 3 info columns: address (room icon), phone (phone icon), email (mail icon)
- Contact form in white bg (`bg-white`): First Name, Last Name, Email, Subject, Message (textarea)
- "Send Message" button (orange pill)

### 16. Footer
- Dark background (`#343a40`)
- 4-column layout: About Us text, Quick Links list, Follow Us social icons, Subscribe Newsletter form
- Copyright line with "Component Dock" link (replaces original Colorlib attribution)
- Newsletter form: email input + "Send" button
- Social icons: Facebook, Twitter, Instagram, LinkedIn

## Component Mapping (React)

| Original Section | React Component | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky, mobile hamburger, dropdown |
| Hero | `Hero.tsx` | Background image, carousel (CSS-only or simple state) |
| Features | `Features.tsx` | 3-column grid with lucide icons |
| About Amortization | `AboutAmortization.tsx` | 2-col, checklist, email form |
| About Us | `AboutUs.tsx` | 2-col, image + text |
| Team | `Team.tsx` | 4-col grid, 8 members, social overlay |
| Gallery | `Gallery.tsx` | Filter tabs, image grid, lightbox |
| How It Works | `HowItWorks.tsx` | 3-step horizontal |
| Services | `Services.tsx` | 6 cards on light bg |
| Testimonials | `Testimonials.tsx` | 4 customer quotes |
| Pricing | `Pricing.tsx` | 3 tiers, feature lists |
| FAQ | `FAQ.tsx` | 2-column, 8 items |
| About Features | `AboutFeatures.tsx` | 2-col, feature items |
| Blog | `Blog.tsx` | 3-column grid |
| Contact | `Contact.tsx` | Info columns + form |
| Footer | `Footer.tsx` | Dark bg, 4-col, Component Dock link |

## Image Placeholders
- Hero background: `https://picsum.photos/seed/treasury-hero/1920/1080`
- About images: `https://picsum.photos/seed/treasury-about/800/600`
- Team photos: `https://picsum.photos/seed/treasury-team-{1..8}/400/400`
- Gallery images: `https://picsum.photos/seed/treasury-gallery-{1..12}/600/400`
- Blog images: `https://picsum.photos/seed/treasury-blog-{1..3}/800/500`
