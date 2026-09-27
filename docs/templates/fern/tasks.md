# Fern (ColorLib Ecoverde) — Tasks

> Prep + implementation tasks for the Fern real estate template.
> Recreation name: **Fern** (NEW name — ColorLib source "Ecoverde" is forbidden).

## Source mapping

- **ColorLib item:** "Ecoverde" (TEMPLATES.md line 2588, marked `[~]`).
- **Source URL:** https://colorlib.com/wp/template/ecoverde/
- **Preview mirrors:** https://themewagon.github.io/ecoverde/,
  https://themeslab.org/html/ecoverde
- **Original stack:** Bootstrap 4, jQuery, Google Fonts (Nunito Sans),
  Font Awesome icons.

## Task list

1. [ ] **Scaffold app** — Create `apps/fern/` from the simplest existing app,
       rename package to `@free-react-templates/fern`, add Nunito Sans
       400/600/700 Google Fonts `<link>` in `index.html`, set
       `public/CNAME` = `fern.free.componentdock.com`, set `"homepage"` =
       `https://fern.free.componentdock.com`. Register workspace in
       `package-lock.json` via `npm install`.

2. [ ] **Design tokens** — Add Fern brand tokens in `src/index.css`:
       primary green `#24A148`, accent blue `#007bff`, dark ink `#0f101c`,
       light gray `#f7f7f7`, medium gray `#666666`. Set
       `--font-sans: 'Nunito Sans', ui-sans-serif, system-ui, sans-serif;`.

3. [ ] **Navbar** — White sticky navbar with "Fern" brand (green text),
       nav links (Home, About, Services, Properties, Blog, Contact),
       hamburger toggle with `aria-expanded` + mobile drawer. Test:
       links render, toggle opens/closes, mobile link click closes menu.

4. [ ] **Hero** — Full-width hero with picsum.photos background,
       dark overlay, headline "Discover Your Perfect Home", subtext,
       green "View Properties" CTA button. Test: heading, paragraph,
       button render.

5. [ ] **SearchBar** — White search form card overlapping the hero,
       with location text input, property type `<select>`, price range
       `<select>`, and green "Search" button. Test: inputs render with
       labels, button is accessible.

6. [ ] **Features** — Light gray section with 3–4 feature cards in a
       responsive grid. Each card: lucide icon, title, description.
       Test: correct number of cards, each has icon + title + description.

7. [ ] **FeaturedProperties** — White section with property card grid.
       Each card: picsum image, green price badge, title, location text,
       bed/bath/sqft icons with counts, "View Details" link. Test:
       cards render with all required fields.

8. [ ] **Cities** — Dark background section with city image cards.
       Each card: picsum background, dark overlay, city name, property
       count. Test: cards render with name + count.

9. [ ] **HowItWorks** — White section with 3-step process. Each step:
       number/icon, title, description. Test: steps render in order
       with correct content.

10. [ ] **Testimonials** — Light gray section with testimonial cards.
        Each card: quote text, author name, role, avatar placeholder.
        Test: testimonials render with all fields.

11. [ ] **Agents** — White section with agent profile cards. Each card:
        picsum photo, name, role, social icon links (Facebook, Twitter,
        Instagram, LinkedIn). Test: agents render with social links.

12. [ ] **Blog** — Light gray section with blog post cards. Each card:
        picsum image, date badge, title, excerpt, "Read More" link.
        Test: blog posts render with all fields.

13. [ ] **Footer** — Dark (#0f101c) footer with three columns (About,
        Quick Links, Contact), social icon row, copyright text, and
        Component Dock link (`https://www.componentdock.com/`). Test:
        columns render, Component Dock link present.

14. [ ] **App.tsx composition** — Wire all sections together in
        `<main>`, set `document.title` to "Fern — Real Estate Template".
        Test: all section components render, landmarks present.

15. [ ] **Verification** — Run `scripts/verify-app.sh fern`
        (typecheck → lint → vitest 100% → build) and fix until green.

16. [ ] **PR + merge** — Open PR `feat/template-fern`, merge immediately
        (`gh pr merge --squash --delete-branch`). PR description includes
        source URL, preview URL, token list, and what differs.

17. [ ] **Bookkeeping** — Mark TEMPLATES.md line 2588 `[x]` + surge URL,
        `npm run readme:status`, push.
