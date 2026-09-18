# Newscope — Implementation Tasks & Design Notes

Source: ColorLib Magnews2 (https://preview.colorlib.com/theme/magnews2/)
New name: newscope

## Section Order (top to bottom)

1. TopBar — location, weather, utility links (About, Contact, Sign up, Log in)
2. Header — logo + banner image
3. MainNav — horizontal category links (Home, News, Entertainment, Fashion, Life Style, Technology, Travel, Features)
4. FeaturedTabs — tabbed section (All, Entertainment, Fashion, Life Style, Technology, Travel) with article grids per tab
5. MainContent — two-column: large featured article (left) + stacked smaller cards (right)
6. Entertainment — sub-category tabs (All, Celebrity, Movies, Music, Games) + "View all" link, horizontal card layout
7. LatestArticles — grid of article cards with background images and overlays
8. Newsletter — subscriber count, tagline, email input + subscribe button
9. VideoSection — video thumbnail with circular play button overlay, modal player
10. Footer — dark (#222), 3 columns (Popular Posts, Categories, Contact), back-to-top button

## Fidelity Notes

### TopBar
- White background, small text, flex layout: location left, weather center, utility links right
- Font: Roboto Regular, small size (~12-13px)
- Divider line below (border-bottom, light gray)

### Header / Logo
- Full-width banner image behind logo area
- Logo text: site name in Roboto Bold
- Banner: cover image with dark overlay for text readability

### MainNav
- Horizontal list of category links
- "Home" link active/highlighted by default
- Font: Roboto Medium, ~14px
- Underline or color change on hover
- "Features" has a dropdown/mega-menu capability

### FeaturedTabs
- Bootstrap tab component (nav-pills style)
- Tab bar: horizontal pill buttons
- Content area: grid of article cards per category
- Each card: thumbnail (cover bg), category tag (border-radius 20px pill), title, date
- Active tab: filled background (#333 dark)

### MainContent
- Two-column Bootstrap grid (col-md-6 + col-md-6)
- Left: large article with full background image, dark overlay, text at bottom
- Right: 2-3 smaller cards stacked, each with background image + overlay
- Category tags: colored pills (pink, orange, green depending on category)
- Author name + date in meta line

### Entertainment
- Tab bar: All, Celebrity, Movies, Music, Games (pill-style tabs)
- "View all" link aligned right
- Horizontal scroll or grid of article cards
- Each card: thumbnail left, text right (title, author, date)
- Category tag on each card

### LatestArticles
- 3-column grid on desktop (col-sm-6 col-lg-4)
- Each card: full background image (`.bg-img1`), dark overlay
- Text at bottom: category tag, title, author, date
- Cards have consistent height

### Newsletter
- Centered layout
- Large subscriber count number
- Tagline text
- Email input + subscribe button (inline)
- Background: distinct from content (could be light gray or brand color accent)

### VideoSection
- Large video thumbnail (full-width or near-full-width)
- Circular play button overlay (50% border-radius, gray bg, white icon)
- Click opens modal video player (can be a placeholder modal in React)

### Footer
- Dark background (#222)
- 3-column layout: Popular Posts | Categories | Contact
- Popular Posts: 3 links with small thumbnails
- Categories: list with post counts in parentheses
- Contact: phone number
- "Colorlib" attribution (replace with "Component Dock" link)
- Back-to-top button: fixed, bottom-right, circular

## Component Structure

```
apps/newscope/
  src/
    App.tsx                    — composes all sections
    components/
      TopBar.tsx               — location, weather, utility links
      Header.tsx               — logo + banner
      MainNav.tsx              — horizontal category navigation
      FeaturedTabs.tsx         — tabbed article section
      MainContent.tsx          — two-column featured + grid
      Entertainment.tsx        — sub-category tabs + cards
      LatestArticles.tsx       — article card grid
      Newsletter.tsx           — subscribe form
      VideoSection.tsx         — video thumbnail + modal
      Footer.tsx               — dark footer with columns
    index.css                  — Tailwind entry + @theme tokens
    main.tsx                   — entry point (excluded from coverage)
    test/
      setup.ts                 — jest-dom import
```

## Key Implementation Details

- Use `cn()` from `packages/ui` for all class composition
- Tab switching: local state in FeaturedTabs and Entertainment components
- Placeholder images: `https://picsum.photos/seed/newscope-<n>/<w>/<h>`
- Google Fonts: Roboto (400, 500, 700, 900) via `<link>` in index.html
- Icons: lucide-react (replacing FontAwesome icons)
- Video modal: simple React modal with placeholder video embed
- Responsive: Bootstrap grid breakpoints via Tailwind responsive utilities
- Brand tokens in @theme: brand-pink (#e71d69), brand-teal (#00b5e9), brand-green (#17b978), brand-orange (#e3724a)
