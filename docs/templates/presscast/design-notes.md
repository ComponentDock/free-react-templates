# Presscast — Design Notes & Implementation Outline

**Source**: ColorLib Megasis  
**Preview**: https://preview.colorlib.com/theme/megasis/  
**New name**: presscast  
**Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

---

## Section order (top → bottom)

1. **HeaderTop** — Logo center, social icons right, sign-in link far-right
2. **StickyNav** — Logo left, category nav links (Home, Science, Technology, Beauty, Health, Arts & Culture, Opinion, Videos, Gallery), search input right
3. **WhatsNews** — Featured large article left (7/12), 3 small article cards right (5/12)
4. **TechnologyGrid** — "Arts & Culture" heading + "See All", 3-column article cards
5. **TechnologyGrid2** — Second category heading + "See All", 4-column article cards (one with video play icon)
6. **WhatsNews2** — Video-focused: large video article left with play icon, 3 small cards right
7. **Newsletter** — "Subscribe to the newsletter", email input + "Send Now" button, disclaimer text
8. **Footer** — 4 columns (About, Categories, Categories, Newsletter), light gray bg
9. **FooterBottom** — Copyright + "Made with ❤️ by Component Dock" + link

---

## Fidelity notes

### Header

- Top bar has social icons (Facebook, Instagram, Twitter, YouTube, Vimeo, LinkedIn)
- Sticky nav shrinks and shows logo on left when scrolled
- Category links are plain text (no dropdown submenus needed)

### What's News sections

- Left article: full-width image, category tag overlay at bottom-left, headline, "by Author"
- Right articles: smaller image, category tag, headline, "by Author"
- Category tags are inline spans with the category name

### Technology grids

- Section title is bold with "See All" link aligned right
- Article cards: image → category tag → headline → author byline
- Cards have no visible border/shadow (clean editorial look)

### Newsletter

- Centered layout (7/12 or 8/12 column)
- Light gray background (#f7f7f7)
- Email input + "Send Now" button side by side
- Disclaimer text below

### Footer

- Dark gray/light gray background (#f7f7f7)
- 4 equal columns: About, Categories, Categories, Newsletter
- 4px solid black top border on footer area
- Copyright centered at bottom
- Replace Colorlib credit with Component Dock link

---

## Implementation checklist

- [ ] Create `apps/presscast/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/presscast`
- [ ] Set up `public/CNAME` → `presscast.free.componentdock.com`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Build components in order: HeaderTop, StickyNav, WhatsNews, TechnologyGrid, WhatsNews2, Newsletter, Footer
- [ ] Apply design tokens (Chivo, Shippori Mincho, #C70D0D)
- [ ] Use picsum.photos for all placeholder images
- [ ] Add footer link to componentdock.com
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh presscast`
- [ ] PR + merge to main
