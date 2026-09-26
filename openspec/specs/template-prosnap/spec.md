# Template: ProSnap (Photography Portfolio)

## Purpose

Recreation of ColorLib "Proshoot" photography template.

- **Source:** https://colorlib.com/wp/template/proshoot/
- **Preview:** https://preview.colorlib.com/theme/proshoot/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `prosnap` (does not reuse ColorLib source name)
- **Package:** `@free-react-templates/prosnap`
- **Deploy target:** `https://prosnap.free.componentdock.com`

## Design Tokens (from live preview CSS)

| Token | Value |
|---|---|
| Brand color | `#f81c1c` (red) |
| Selection color | `#f81c1c` |
| Font — body | `"Roboto", sans-serif` |
| Font — headings | `"Oswald", sans-serif` |
| Heading color | `#242429` |
| Body text color | `#777777` |
| Body font size | `15px` / `1.625em` line-height |
| Button radius | `0px` (sharp corners) |
| Button hover bg | `#f81c1c` |
| Button hover text | `#fff` |
| Preloader bg | `#f81c1c` |
| Back-to-top bg | `#f81c1c`, border-radius `5px 5px 0 0` |
| Section padding | `140px 0` desktop, `70px 0` mobile |

### Visual Description (from screenshot)

Dark-on-white photography portfolio. Red accent brand color. Oswald headings give a bold, editorial feel. Hero section is fullscreen with split layout (text left, photographer image right). Services use icon+text in a 3-column grid. Portfolio uses a masonry-like layout with dark overlay on hover showing title + category. Pricing cards are clean white with feature checklists. Blog section mixes a featured large post with smaller side-by-side posts. Footer is a light 3-column layout with newsletter form.

## Sections (order from live preview)

1. **Header/Navbar** — Logo (left), nav links (Home, About, Projects, Pages dropdown, Blog dropdown), sticky on scroll
2. **Hero/Banner** — Fullscreen split: left column headline "Images matter" with subtitle + "Explore More" CTA button, right column photographer image, social icons sidebar (Facebook, Twitter, Instagram)
3. **About** — 2-column: left image, right heading "Let's Introduce About Myself" + paragraph + "Read More" CTA
4. **Services** — Section title "Our Services / What We Offer", 3×2 grid of 6 service cards: icon (lucide) + title + description (Fashion Photography, Nature Photography, Event Coverage, Property Tours, Multimedia Services, Wedding Photography)
5. **Portfolio/Work** — Section title "Our Portfolio / Check Our Work", masonry grid: 2 large + 3 small items, dark overlay on hover with title "2D Vinyl Design" + category "Client Project", "View More" button
6. **Pricing** — Section title "Pricing Plan / Choose Your Package", 3 cards: Wedding ($46), Studio ($76), Fashion ($96), each with subtitle, price, feature checklist (check/cross icons), "Book Now" CTA
7. **Blog** — Section title "Our Blog / Latest Good Story", featured post (full-width image + title + meta + excerpt) + 3 side posts (thumbnail + title + meta + short excerpt)
8. **Footer** — 3 columns: About Us text, Newsletter form (email input + arrow button), Follow Us (social icons: Facebook, Twitter, Dribbble, LinkedIn) + copyright line

## Gherkin Requirements

### Scenario: Hero section displays correctly
```
Given I visit the ProSnap homepage
Then I see a fullscreen hero section
And the headline reads "Images matter"
And there is an "Explore More" call-to-action button
And a photographer image appears to the right
And social media icons (Facebook, Twitter, Instagram) are visible
```

### Scenario: About section shows photographer bio
```
Given I scroll to the About section
Then I see a two-column layout with an image on the left
And the heading reads "Let's Introduce About Myself"
And a paragraph of bio text is displayed
And a "Read More" button is present
```

### Scenario: Services section shows six photography services
```
Given I scroll to the Services section
Then I see the heading "Our Services" and subheading "What We Offer"
And six service cards are displayed in a 3-column grid
And each card has an icon, a title, and a description
And the services are: Fashion Photography, Nature Photography, Event Coverage, Property Tours, Multimedia Services, Wedding Photography
```

### Scenario: Portfolio section shows masonry gallery
```
Given I scroll to the Portfolio section
Then I see the heading "Our Portfolio" and subheading "Check Our Work"
And 5 portfolio items are displayed in a masonry-like grid
And hovering over an item shows a dark overlay with title and category
And a "View More" button is present
```

### Scenario: Pricing section shows three plans
```
Given I scroll to the Pricing section
Then I see the heading "Pricing Plan" and subheading "Choose Your Package"
And three pricing cards are shown: Wedding ($46), Studio ($76), Fashion ($96)
And each card has a feature checklist with check and cross icons
And each card has a "Book Now" button
```

### Scenario: Blog section shows posts
```
Given I scroll to the Blog section
Then I see the heading "Our Blog" and subheading "Latest Good Story"
And one featured blog post with a large image is displayed
And three additional blog posts with thumbnails are shown
And each post has a title, author/date metadata, and excerpt
```

### Scenario: Footer contains newsletter and social links
```
Given I scroll to the Footer
Then I see an "About Us" column with a brief description
And a "Newsletter" column with an email input and submit button
And a "Follow Us" column with social icons (Facebook, Twitter, Dribbble, LinkedIn)
And a copyright line with "Made with ❤️ by Component Dock"
```

### Scenario: Navbar is sticky on scroll
```
Given I scroll down the page
Then the navbar remains fixed at the top of the viewport
And navigation links remain clickable
```

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Hero: split layout, headline, CTA, image, social icons
- [ ] About: 2-column layout, heading, bio, CTA
- [ ] Services: 6 cards in 3×2 grid, icon + title + description
- [ ] Portfolio: masonry grid, hover overlay, View More button
- [ ] Pricing: 3 cards, correct prices, feature lists, Book Now
- [ ] Blog: featured post + 3 side posts, metadata
- [ ] Footer: 3 columns (About, Newsletter, Social), copyright with Component Dock link
- [ ] Brand color `#f81c1c` applied to buttons, accents, hover states
- [ ] Font: Oswald for headings, Roboto for body text
- [ ] Navbar sticky on scroll
- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `picsum.photos/seed/prosnap-*`
- [ ] 100% test coverage

## Replication Notes

- **Preview source:** https://preview.colorlib.com/theme/proshoot/ (fetched successfully)
- **CSS source:** https://preview.colorlib.com/theme/proshoot/css/main.css
- **Fonts:** Oswald (headings, weight 300/500/600) + Roboto (body, weight 400/700) — loaded via Google Fonts/Cloudflare in original; use `<link>` tags in index.html
- **Icons:** Original uses Flaticon + Themify Icons; recreate with lucide-react
- **Carousel/Slider:** Original uses Owl Carousel + Isotope; replace with CSS grid/flex layouts
- **Animations:** Original uses WOW.js fade-in; use CSS animations or framer-motion
- **No assets copied:** all images replaced with picsum.photos placeholders
