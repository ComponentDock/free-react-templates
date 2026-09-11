# DataVyn — Tasks & Design Notes

## Source

- **ColorLib slug:** datarc
- **Preview URL:** https://preview.colorlib.com/theme/datarc/
- **Screenshot:** datarc-digital-agency-free-website-template.jpg

## Section order (implementation sequence)

1. **Navbar** — site name "DataVyn" + Home link + dark-mode toggle
2. **Hero** — fullscreen, indigo gradient overlay, subtitle + headline + CTA
3. **About** — light lavender bg, centered title block with heading
4. **Services** — dark bg (#222222), 4 feature cards with icons
5. **Portfolio** — filter tabs + image grid with hover overlay cards
6. **Studio CTA** — dark overlay band, white text, "Start Business" button
7. **Team** — 4 circular-avatar member cards
8. **Blog** — 4 blog post cards with image + meta + excerpt + details link
9. **Contact** — address info + contact form
10. **CTA Banner** — purple (#3d4191) bar with "Explore Services" button
11. **Footer** — 4-column (About, Nav, Newsletter, Copyright) + Component Dock link

## Design token reference (from css/main.css)

| Token              | Value                                     |
|--------------------|-------------------------------------------|
| Brand color        | #3c408f / #3d4191 (indigo family)        |
| Hero gradient      | linear-gradient(to right, rgba(60,60,143,0.95), rgba(91,97,207,0.95)) |
| Accent             | #00ff8c (bright green — button borders)   |
| Heading text       | #222222                                   |
| Subheading text    | #333333                                   |
| Body text          | #777777                                   |
| Light section bg   | #f9f9ff (lavender tint)                   |
| Dark section bg    | #222222                                   |
| CTA area bg        | #3d4191                                   |
| Font               | Poppins (300/500/600) via Google Fonts     |
| Button radius      | 20px                                      |
| Button style       | transparent bg, #00ff8c border, uppercase  |
| Team avatar radius | 50%                                       |

## Fidelity notes

- Hero uses fullscreen height with overlay gradient — match the indigo
  purple range, not blue or generic dark.
- Services section is dark (#222222) — keep this dark treatment.
- Portfolio has active tab highlighting and hover overlay cards — implement
  the filter logic + overlay effect.
- Studio CTA band has a full-width dark image/overlay — use a dark gradient
  or overlay over a picsum image.
- Team members have circular (50% radius) avatar thumbnails.
- Blog cards: image on top, date/author meta below, title, excerpt, and a
  details link with arrow icon.
- Contact section reuses the blog heading (quirk in original) — use a proper
  "Get in Touch" heading instead for clarity.
- CTA banner is indigo/purple with white text and a green-bordered button.
- Footer: dark bg, 4 columns, newsletter email input, copyright at bottom.
  Replace any ColorLib attribution with ComponentDock link.
- All primary buttons: transparent bg, #00ff8c border, border-radius 20px,
  uppercase, Poppins font.

## Components to reuse from packages/ui

- Button / ButtonLink (for CTA buttons)
- Card (for blog, team, service cards)
- Badge (for portfolio filter active state)
- cn (class merging utility)

## Images

All placeholder images: `https://picsum.photos/seed/datavyn-<n>/<w>/<h>`
