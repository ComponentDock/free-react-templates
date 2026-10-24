# Chambers Template — Task Outline

## Source

- ColorLib Lawfirm: https://colorlib.com/wp/template/lawfirm/
- Preview: https://preview.colorlib.com/theme/lawfirm/

> **Reference identity (measured 2026-10-24).** The demo directory
> `https://preview.colorlib.com/theme/lawfirm/` serves the **v3.0.2 rebuild** of this
> design (Bootstrap 5.3.8 · Swiper 14 · Jarallax · self-hosted Roboto, 8 live pages).
> The `lawfirm` catalogue entry's row thumbnail — the serif full-screen
> `…fullscreen-lawyer…` page — is a **retired** design with no demo (13 prefixes → 404)
> and no archive (both zips → 404), so rows 1387/1760/2123 all resolve to this one
> design. Measured tokens: gold `#cbb88c` (CTA fill, text `#1d2227`), ink `#1d2227`,
> deep gold `#7e6939`, panel `#f5f4f0`, strip ramp `#161a1e`/`#121518`/`#0e1013`,
> Roboto only. `#007bff` is the compiled-Bootstrap frame and is **never painted** —
> where this brief still lists it as "primary", the app lags the reference (implementer
> repaint), never the reverse. Evidence: `openspec/specs/template-chambers/spec.md`
> §Reference identity.

## Sections to implement

1. TopBar — phone, email, social icons
2. Navbar — sticky dark, brand "Chambers", 7 nav links, mobile toggle
3. Hero — bg image, overlay, headline, subtitle, 2 CTAs, video play
4. IntroFeatures — 4-column dark strip with icons
5. About — split layout (image | text + 4 features grid)
6. CounterStats — 4 stat blocks
7. PracticeAreas — 3-column grid of practice cards
8. Cases — case gallery grid
9. Attorneys — team member cards
10. Footer — 5-column footer + dark bottom bar with Component Dock link

## Design tokens

- primary: #cbb88c (gold CTA fill, text #1d2227)
- accent-deep: #7e6939
- dark bg: #1d2227 / #161a1e / #121518 / #0e1013
- panel: #f5f4f0
- font: Roboto (self-hosted on the reference, Google Fonts in the app)
- buttons: gold primary + white outline (#007bff is vendor frame, never painted)

## Verification

- [ ] Spec written and validated
- [ ] Tests at 100% coverage
- [ ] Per-app gate passes
- [ ] PR opened and merged
