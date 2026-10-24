# Lenscape — Task Outline

Source: ColorLib **Schmidt** (https://preview.colorlib.com/theme/schmidt/ — HTTP 200,
7,602 B index, re-read 2026-10-24) · new name **lenscape** · personal portfolio,
multi-page source consolidated to one page.

Companion research: `docs/templates/lenscape/design-notes.md`; contract:
`openspec/specs/template-lenscape/spec.md`.

> The brief was rewritten 2026-10-24 (it had described ColorLib Bato). Section list
> and tokens below are measured from the live Schmidt 3.0.0 preview and
> `css/style.min.css` (190,347 B, sha256 `e37589d769…`). The inner pages
> `about/services/experience/work/blog/contact.html` are all HTTP 200 and are the
> reference for the sections a one-pager has to invent.

## Section order (top → bottom, as shipped)

1. **Navbar** — wordmark “Lenscape.”, links Home · About · Services · Skills · Works · Contact; transparent over hero → `#222` bar after scroll; hamburger ≤991px
2. **Hero** — `100vh` fixed-attachment photo + **right-half gold (`#d5c455`) panel** (hidden ≤767px), subheading “UI/UX Designer & Developer”, h1 at 80px/700, two square CTAs
3. **About** — portrait/two-column split, `about-info` label list (label `#6e6218`), then the 4-counter band (number `#6e6218`, label `#666`)
4. **Services** — 4 cards, gold icon, hover fills the card gold
5. **Skills** — progress bars, gold `#d5c455` fill on a light track, `#6e6218` labels
6. **Works** — square portfolio grid, gold overlay `opacity .9` on hover
7. **Testimonials** — white cards, `50%` gold avatar circle with initials, name + role in `#6e6218`
8. **Contact** — address / email / phone column + 4-field form with gold `:focus` border
9. **Footer** — wordmark, blurb, social row, Component Dock line

## Component file plan

```
src/
  App.tsx
  index.css            (Tailwind + @theme tokens)
  main.tsx
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx          (split + counters)
    Services.tsx
    Skills.tsx
    Works.tsx
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
```

## Fidelity notes

- **Colors:** gold `#d5c455` · deep gold `#6e6218` (links, subheads, prices) · ink `#222` · body `#666` · page `#f8f8f8` · light band `#f8f9fa`. Ignore the sheet's Bootstrap vendor hexes (`#0d6efd`, `#212529`, …).
- **Font:** Poppins (Google Fonts), body 16px/1.8, h1 80px/1.2/700, section h2 40px/1.4/600, subheading 16px/700 uppercase 1px tracking (12px/500 on mobile).
- **Buttons:** square (`border-radius:0`), `9px 12px`, 12px/700 uppercase, 1px tracking, `box-shadow:0 24px 36px -11px #00000017`; gold bg with `#222` label, outline variant = gold 1px border + gold label.
- **Hero overlay:** gold panel pinned to the right 50% of the hero, not a dark scrim; it disappears on small viewports.
- **Navbar:** absolute/transparent at `top:20px` over the hero, solid `#222` once out of it; active link `#6e6218`.
- **Services hover:** whole card flips to gold — the page's signature interaction.
- **Works hover:** gold overlay at `.9` with centred title/category.
- **Skills bars:** gold fill with a gold `::after` cap; keep the two-column bar list on desktop.
- **Footer:** no dark band of its own — the source footer is a light `2em` band, 13px copyright.

## Implementation tasks

- [ ] Create `apps/lenscape/` by copying the simplest shipped app and renaming the package to `@free-react-templates/lenscape`
- [ ] `public/CNAME` = `lenscape.free.componentdock.com`; `package.json` homepage to match
- [ ] `@theme` tokens in `index.css` (gold, deep gold, ink, body, page, light band, Poppins)
- [ ] Create `Navbar` (transparent → solid on scroll, mobile toggle)
- [ ] Create `Hero` (fixed-attachment photo + right-half gold panel + two CTAs)
- [ ] Create `About` (split bio + label list + 4 counters)
- [ ] Create `Services` (4 cards, gold icon, gold hover fill)
- [ ] Create `Skills` (progress bars with accessible `role="progressbar"`)
- [ ] Create `Works` (6 square tiles, gold hover overlay)
- [ ] Create `Testimonials` (initials avatar cards)
- [ ] Create `Contact` (address column + 4-field form, gold focus ring)
- [ ] Create `Footer` (wordmark, social row, Component Dock link)
- [ ] Compose `App.tsx` in source order
- [ ] Write tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh lenscape`
- [ ] Commit and open PR
