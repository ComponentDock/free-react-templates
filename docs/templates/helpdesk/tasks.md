# Helpdesk — Tasks & Design Notes

**Source**: ColorLib Callcenter  
**Preview URL**: https://preview.colorlib.com/theme/callcenter/  
**New name**: helpdesk  
**Package**: @free-react-templates/helpdesk  

## Section order (from live preview DOM)

1. **Navbar** — Fixed, white bg. Logo text with #8490ff left border. Links: Home, Feature, We Offer, About, Contact, Pages (dropdown). Uppercase 12px, Poppins.
2. **Hero/Banner** — White bg with blue watercolor brush-stroke graphic. Agent photo cutout on left, text on right: "Discover the Colorful World" (uppercase subtitle), "Efficiency Booster" (60px bold heading), lorem body, "Discover Now" CTA (gradient button, 25px radius).
3. **Features** — 3-column, white bg, section-gap padding. Illustrated icons (Online Support, 24/7 Round the Clock, Handling All Issues) + heading + body text per card.
4. **Testimonials** — Dark overlay on bg image, gradient overlay (#8490ff 90% opacity). Carousel of user cards with avatar, quote, name, title. Heading "Why Choose Us Your Fitness Builder" in white.
5. **Offered Services** — White bg. Heading "Our Offered Services" white text. 3×2 icon grid (left) + "Content Synchronization" text block + "View Details" CTA (right). Icon cards: white bg, blue box-shadow, hover border #6a9ddc.
6. **Facts/Stats** — White bg, 5-column row. Gradient text counters: 2536 Projects, 6784 Clients, 1059 Tasks, 2239 Coffee, 435 Professionals.
7. **Services** — Dark photo bg + 70% black overlay. Heading "Some Awesomeness that should share". 6 service cards (3×2): Linearicons icons, white text. Cards: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews.
8. **Info** — Full-width split. Left: photo. Right: "Responsible Customer Support" heading + text + "Learn More" CTA.
9. **About/Video** — Full-width split. Left: "We Believe that Interior beautifies the Total Architecture" + text + "See Details" CTA. Right: video thumbnail + #8490ff overlay (84% opacity) + play button.
10. **Brand Logos** — Light bg (#f9f9ff). 5 grayscale logos, full color on hover.
11. **Contact** — White bg, section-gap. Heading "If you need, Just drop us a line". Form: name, email, subject, message (textarea) + "Send Message" button.
12. **Footer** — Dark bg (#222). 3 columns: About Us, Contact Us (phone numbers in #8490ff), Newsletter (email input + arrow button). Bottom: copyright + "Component Dock" link + social icons (FB, Twitter, Dribbble, Behance).

## Key design tokens (for implementation)

- Font: Poppins (Google Fonts), weights 300-700
- Primary: #8490ff (blue-violet)
- Secondary: #62bdfc (sky blue)
- Gradient: linear-gradient(0deg, #62bdfc, #8490ff)
- Body: #777, 14px, weight 300
- Headings: #222, weight 600
- Light bg: #f9f9ff
- Footer: #222
- Button radius: 25px (primary-btn), 0px (form inputs)
- Section padding: 120px 0

## Implementation notes

- Use `https://picsum.photos/seed/helpdesk-<n>/<w>/<h>` for placeholder images
- Hero brush-stroke: use a CSS gradient or SVG approximation (no external assets)
- Feature icons: use lucide-react equivalents (Headphones, Clock, Wrench)
- Testimonial avatars: picsum photos
- Service icons (offered section): use lucide-react icons in a grid
- Brand logos: use text placeholders or simple SVG shapes
- Social icons in footer: use lucide-react (Facebook, Twitter, Dribbble, Behance)
- Counter animation: use a simple React useEffect counter or framer-motion
- Replace all Colorlib references with Component Dock branding in footer
- No reference to ColorLib in any app source files
