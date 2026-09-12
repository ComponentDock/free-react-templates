# Stallion — Design Notes & Implementation Outline

Source: ColorLib "Durg" — https://preview.colorlib.com/theme/durg/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/durg-free-template.jpg

## Section order (fidelity to original)

1. Header (top bar + sticky nav)
2. Hero slider (carousel with overlay + white card)
3. Brand logos (gray bg carousel)
4. Services (3-card grid)
5. Projects (dark overlay + carousel)
6. About (image + video popup, testimonials)
7. CTA banner (bg image + overlay)
8. Address/Location (black bg, 3 columns)
9. Footer (4 columns + copyright)

## Implementation todo

- [ ] Scaffold apps/stallion from a simple existing app (copy + rename)
- [ ] Add Rubik font via Google Fonts link in index.html
- [ ] Set Tailwind theme tokens: brand-orange #ff5e13, dark-navy #020c26, body-gray #5c5c5c, gray-bg #f5f5f5, input-bg #f9f9ff
- [ ] Build Header: top bar (black bg, phone + email, nav links) + sticky main nav (white bg, logo, menu, search, "Get a quote" CTA)
- [ ] Build Hero slider: full-width carousel, dark overlay, white content card (tagline + heading + CTA button)
- [ ] Build Brand logos: gray bg section, horizontal carousel of placeholder logos
- [ ] Build Services: 3-column grid, image thumb + h3 + description + "Read More" link (orange underline hover)
- [ ] Build Projects: dark overlay bg, right-aligned text, project carousel with category + title, "More Projects" link
- [ ] Build About: two-column — left image with video play button, right title + para + "Learn More" button; below: testimonial carousel (stars, quote, author) + stat callout (350+)
- [ ] Build CTA: full-width bg image, dark overlay, heading + para + "Discuss now" button (black bg variant)
- [ ] Build Address: black bg, 3 columns — icon + h3 + text + link
- [ ] Build Footer: 4 columns (logo + social, Company links, Solutions links, Branch offices), copyright bar
- [ ] Ensure sticky header with shadow
- [ ] Ensure responsive breakpoints (single column mobile, adjusted padding)
- [ ] Add public/CNAME + package.json homepage
- [ ] Footer link to https://www.componentdock.com/

## Fidelity notes

- Buttons are square (no border-radius) — .boxed-btn and .boxed-btn2
- .boxed-btn hover: transparent bg + orange border
- .boxed-btn2 is larger padding (22px 50px) and stays solid on hover
- Hero slider: white card sits on left side of dark background image
- Project section: dark overlay 85% opacity, text on left side
- About: uses video popup (Magnific Popup) — implement as modal/lightbox
- Address section: icons are custom images, not icon fonts — use lucide-react instead
- Testimonial carousel has 5-star rating, quote icon, author photo + name + role
- Brand logos section: just a row of image placeholders, no text
