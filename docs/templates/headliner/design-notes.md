# Headliner — Design Notes

## Structure Order (top to bottom)

1. **TopBar** — Blue (#1a73e8) background, search input left, social icons right
2. **Header** — Site title "Headliner" (serif font, centered), nav links (About, Contact, Login) right-aligned
3. **CategoryNav** — Horizontal bar with category links: Lifestyle, Business, Fashion, Design, Health, Technology, Travel, Food, Creative. Uppercase, medium weight
4. **TrendingGrid** — 4-column equal-width grid. Each card: large image (16:10 ratio), "TRENDING" badge (red text), headline below image
5. **LatestPosts** — "LATEST POSTS" heading with bottom border. Two-column layout: left = featured post (large image + title), right = 2 stacked smaller posts with category badges + titles + excerpts
6. **Footer** — Simple footer with "Made with Component Dock" link + copyright

## Section-by-Section Fidelity Notes

### TopBar
- Full-width, blue (#1a73e8) background
- Left side: search input with magnifying glass icon, placeholder "Search Your Interest..."
- Right side: social icons (Twitter, Facebook, Pinterest) in white
- Height: ~45px

### Header
- White background
- Center: "Headliner" title in Playfair Display serif, large (36-40px)
- Right: "About", "Contact", "Login" links in small gray text
- Separator line (1px border-bottom #eee) below header

### CategoryNav
- White background, full-width
- Horizontal list of category links, evenly spaced
- Each link: uppercase, 13px, font-weight 500, letter-spacing 1px
- Hover: color transitions to brand-primary (#1a73e8)
- Bottom border (1px #eee)

### TrendingGrid
- White background
- 4 equal-width cards in a CSS grid (grid-template-columns: repeat(4, 1fr))
- Each card:
  - Image: 16:10 aspect ratio, object-cover
  - "TRENDING" badge: uppercase, 11px, color #e74c3c, margin-top 15px
  - Headline: 18px, font-weight 600, color #26282b, line-height 1.4
  - No card border or shadow (flat editorial style)
- Gap between cards: 30px

### LatestPosts
- Light gray or white background
- "LATEST POSTS" heading: 24px, bold, left-aligned, bottom border (3px solid)
- Two-column layout (flex or grid):
  - Left (60%): Featured post — large image (aspect 4:3), headline below
  - Right (40%): 2 smaller posts stacked vertically
    - Each: small image (thumbnail), "TRENDING" or category badge, headline, short excerpt (2-3 lines)
- Gap: 30px between columns

### Footer
- Dark background (#26282b)
- White text
- Left: "Made with Component Dock" link (https://www.componentdock.com/)
- Right: copyright text
- Padding: 40px vertical

## Replication Reference

- **Source:** ColorLib "Awesome Magazine" (https://colorlib.com/wp/template/awesome-magazine/)
- **Preview URL:** https://preview.colorlib.com/theme/awesome-magazine/ (404 — preview unavailable)
- **Fallback:** Screenshot analysis from https://colorlib.com/wp/wp-content/uploads/sites/2/awesomemagazine-free-template.jpg
- **CSS tokens extracted from:** ColorLib listing page inline CSS (`--wpex-accent`, `--wpex-body-color`, etc.)
- **Key observations from screenshot:**
  - Clean, minimal editorial layout with no shadows or rounded corners
  - Blue accent color (#1a73e8) used in top bar and link hovers
  - Serif font for main title, sans-serif for body/nav
  - 4-column trending grid is the hero section (no traditional hero/banner)
  - Category badges use colored text (no background pill)
  - Overall aesthetic: newspaper/magazine, flat design, lots of whitespace
