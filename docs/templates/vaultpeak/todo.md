# VaultPeak — Implementation TODO & Design Notes

**Source:** ColorLib Banker (https://preview.colorlib.com/theme/banker/)
**New name:** vaultpeak

## Structure Order (1:1 with original)

1. **Navbar** — Sticky top, logo "VaultPeak" with orange dot, links: Home, About Us (dropdown), Blog, Contact, social icons. White bg + shadow on scroll.
2. **Hero** — Full-screen background image, warm beige overlay (rgba(184,178,166,0.7)), owl-carousel of 3 text slides (Banking Solutions / Financing Solutions / Savings Accounts), scroll mouse icon.
3. **Features** — 3-column row: Money Savings (wallet), Online Shoppings (cart), Credit/Debit Cards (credit-card). Icons at w-25, centered text.
4. **Amortization** — Split: left circular-bg image, right "Amortization Computation" heading + checklist (green check icons) + email input + Submit button.
5. **About Us** — Centered section title + lead, then split: left circular-bg image, right "We Solve Your Financial Problem" + two paragraphs.
6. **Team** — 4-member grid (col-lg-3). Each: photo with social overlay (FB/TW/LI/IG), name, position.
7. **Services** — Light bg, 3-column grid × 2 rows = 6 items. Each: icon + h3 + p + "Learn More" link. Items: Business Consulting, Credit Card, Income Monitoring, Tax Management, Insurance Policy, Financial Planning.
8. **Pricing** — Light bg, 3 cards. Basic ($47), Premium ($200, highlighted with orange CTA), Professional ($750). Checklist with strikethrough on removed features.
9. **FAQ** — 2-column layout, 8 Q&A items total (4 per column). Static content, no accordion in original.
10. **Testimonials** — Carousel with 3 slides. Each: blockquote, author photo (w-50), author name.
11. **Gallery** — Filter buttons (All/Events/Party/Holidays), 4-column image grid with lightbox on click.
12. **Blog** — 3-column grid. Each: image, title, meta (author · date · tag), excerpt, "Continue Reading..." link.
13. **Contact** — Light bg, 3 info columns (address/phone/email with icons), then white form card: First Name, Last Name, Email, Subject, Message, "Send Message" button.
14. **Footer** — Dark bg (#343a40). Left: About Us text, Quick Links list, Follow Us social icons. Right: Newsletter signup. Bottom: copyright + ComponentDock link.

## Fidelity Notes

- **Colors:** Brand orange `#fd7e14`, body text gray, headings black, success green `#71bc42`, footer dark `#343a40`, section bg-light `#f8f9fa`.
- **Fonts:** Open Sans (300/400/700/900). Use Google Fonts `<link>` in index.html.
- **Buttons:** Pill shape (border-radius 30px), padding 10px 30px, orange primary, gray secondary.
- **Hero overlay:** Warm beige `rgba(184, 178, 166, 0.7)` — this gives the muted sepia tone over the hero image.
- **Circle decoration:** `.circle-bg:after` adds a 300px light gray circle offset to bottom-right of images. Implement as a pseudo-element or absolute-positioned div.
- **Dropdown:** Orange top border `2px solid #fd7e14`, white bg, subtle shadow.
- **No accordion FAQ** — the original is flat Q&A pairs, not collapsible.
- **Gallery** — uses isotope-like filtering. In React, implement with CSS grid + data-filter attributes or simple state-based show/hide.
- **Testimonials** — carousel with arrows. Use a simple React state-based carousel or CSS snap.

## Placeholder Images

- Hero: `https://picsum.photos/seed/vaultpeak-hero/1920/1080`
- About images: `https://picsum.photos/seed/vaultpeak-about1/800/600`, `https://picsum.photos/seed/vaultpeak-about2/800/600`
- Team members: `https://picsum.photos/seed/vaultpeak-team1/400/400` through `team4`
- Gallery images: `https://picsum.photos/seed/vaultpeak-gallery1/600/600` through `gallery8`
- Blog images: `https://picsum.photos/seed/vaultpeak-blog1/800/600` through `blog3`
- Service icons: Use lucide-react (Wallet, ShoppingCart, CreditCard, TrendingUp, Shield, PieChart)
