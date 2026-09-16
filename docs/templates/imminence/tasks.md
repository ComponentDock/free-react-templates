# Imminence — Task Outline

## Template Info

- **Name:** Imminence
- **Source:** ColorLib "02 Comming Soon" (https://colorlib.com/wp/template/02-comming-soon/)
- **Preview URL:** https://preview.colorlib.com/theme/02-comming-soon/ (returns 404)
- **Fallback:** https://colorlib.com/etc/cs/02-comming-soon.html + screenshot

## Design Tokens

- Font headings: Poppins
- Font body: Open Sans
- Brand pink: #F84982
- Hover pink: #e40b52
- Focus pink: #f89fbc
- Input bg: #F1F2F3
- Body text: #333
- Paragraph: #555
- Muted: #999

## Components

1. `LeftPanel` — full-height background image + centered `Countdown`
2. `Countdown` — 4 circular time units (days, hours, minutes, seconds)
3. `RightPanel` — logo, heading, description, `EmailForm`, subtext, `SocialIcons`
4. `EmailForm` — email input + "NOTIFY US" button
5. `SocialIcons` — 5 social media icon links with brand colors
6. `Footer` — hidden Component Dock link

## Tasks

- [x] Create app scaffold (package.json, index.html, vite.config.ts, etc.)
- [x] Write index.css with design tokens
- [x] Implement Countdown component + tests
- [x] Implement LeftPanel component + tests
- [x] Implement EmailForm component + tests
- [x] Implement RightPanel component + tests
- [x] Implement SocialIcons component + tests
- [x] Implement Footer component + tests
- [x] Compose App.tsx + tests
- [x] Run per-app verification gate
- [x] Commit and push branch
