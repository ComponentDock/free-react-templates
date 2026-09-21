# LoanPath — Implementation TODO & Design Notes

**Source:** ColorLib Finloans (https://preview.colorlib.com/theme/finloans/)
**New name:** loanpath

## Structure Order (1:1 with original)

1. **Header/Navbar** — Sticky, logo "LoanPath", links: Home, Loan, About, Pages (dropdown: Apply Loan, Elements), Blog (dropdown: Blog, Single Blog), FAQ, Contact. Phone number + "Apply for a Loan" boxed-btn4 on right. Hamburger on mobile.
2. **Hero + Loan Calculator** — Full-width bg image with dark overlay (#040E27, 50% opacity). Left: headline "Get Loan for your Business growth or startup" + "How it Works" button. Right: white card form with Amount dropdown, Month dropdown, "You have to pay: $0" display, "Continue" teal button.
3. **Services** — "What we offer for you" heading + subtitle. 3 cards: Home Loan ($3000-$10000), Business Loan ($10000-$50000), Personal Loan ($1000-$5000). Each: icon, name, price range, 4 detail list items, "Apply Now" teal button.
4. **About** — "Why Choose Us?" heading. Left: illustration image. Right: paragraph + 4-item checklist + "About Us" teal button.
5. **How It Works** — "How it Works" heading + subtitle. 3 numbered steps (01, 02, 03): "Apply for loan", "Application review", "Get funding fast" each with description.
6. **Brand Logos** — Carousel of 5 partner/brand logo images.
7. **FAQ Accordion** — "Frequently ask" heading. Bootstrap-style accordion with 4+ expandable items. Questions: "Adieus who direct esteem It esteems luckily?", "Who direct esteem It esteems?", "Duis consectetur feugiat auctor?", etc.
8. **Testimonials** — Carousel of slides. Each: author photo (circular), quote icon, testimonial paragraph, "- Author Name" attribution.
9. **Apply Loan CTA** — Dark overlay banner. "Apply for a Loan for your startup, education or company" heading + "Apply Now" teal button.
10. **Footer** — Dark bg. 4 columns: (1) logo + contact info + social icons, (2) Services links, (3) Quick Links, (4) Subscribe newsletter form. Bottom: copyright + ComponentDock link.

## Fidelity Notes

- **Colors:** Brand teal `#33D4D6`, orange accent `#FD8E5E` (carousel hover), headings `#001D38`, body text `#7A838B`, dark overlay `#040E27`.
- **Fonts:** Roboto (Google Fonts). Use `<link>` in index.html.
- **Buttons:** Rectangular (no explicit border-radius), padding `11px 29px 13px 29px`. Teal bg + white text. Hover: transparent bg + teal border + teal text.
- **Hero overlay:** `#040E27` at 50% opacity — dark navy overlay.
- **Accordion:** Bootstrap collapse pattern (click to expand/collapse). In React, use state-based toggle.
- **Loan calculator:** Simple form with 2 dropdowns and calculated total. No real calculation needed — static or simple multiplication.
- **Brand logos:** Simple image carousel. Use CSS snap or basic React state carousel.
- **Testimonials:** Owl-carousel style with prev/next arrows.
- **No section-padding class** — sections have varied padding. Use appropriate Tailwind padding.

## Placeholder Images

- Hero bg: `https://picsum.photos/seed/loanpath-hero/1920/1080`
- About image: `https://picsum.photos/seed/loanpath-about/800/600`
- Service icons: Use lucide-react (Home, Building2, User)
- Brand logos: `https://picsum.photos/seed/loanpath-brand1/120/60` through `brand5`
- Testimonial author: `https://picsum.photos/seed/loanpath-author/200/200`
- Footer logo: Text-based "LoanPath" logo
