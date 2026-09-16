# Overture — Implementation Notes

Source: ColorLib 06 Comming Soon
Preview: https://preview.colorlib.com/theme/06-comming-soon/ (404 — design from screenshot)

## Section order (top to bottom)

1. Full-viewport background image with dark overlay
2. Centered content: heading + subtext + countdown + CTA button
3. Social links at bottom center

## Component breakdown

### App.tsx
- Full-screen container with background image
- Dark overlay div (absolute, inset-0, bg-black/40)
- Centered content wrapper (z-10, flex flex-col items-center justify-center)

### Hero.tsx
- Background image layer (absolute, full viewport)
- Dark overlay (absolute, inset-0, bg-black/40)
- Content: heading, subtext, countdown timer, CTA button
- Heading: "Coming Soon" — display serif font, white, ~3.5rem
- Subtext: sans-serif, white/90, ~500px max-width
- CTA button: pink (#e91e63), rounded-full, uppercase, bold, white text
- Thank-you state after submit

### CountdownTimer.tsx
- 4 circular elements in a flex row
- Each circle: white background, ~60px, rounded-full
- Number in pink (#e91e63), label below in white
- Real-time countdown to target date (30 days from mount)

### SocialLinks.tsx
- "Follow us for update" label
- 5 circular social icons (lucide-react or inline SVGs)
- Brand colors: FB #3b5998, Twitter #1da1f2, Google+ #dd4b39, Pinterest #bd081c, Snapchat #fffc00

### Footer.tsx
- Simple "More templates at Component Dock" link
- Links to https://www.componentdock.com/

## Design notes

- Very similar to vigil (05 Comming Soon) but with different visual treatment
- The original uses a serif display font for the heading — use Playfair Display via Google Fonts
- Countdown circles are distinctive: white bg, pink numbers, no border
- Button is fully rounded (pill shape), not just rounded corners
- Social icons use circular brand-colored backgrounds
- No navigation bar or separate footer in the original design
- Background image: use picsum.photos seed "overture" for deterministic placeholder

## Fidelity notes

- The original misspells "Coming" as "Comming" — we fix the spelling in our recreation
- Social icons: original uses Google+ which is defunct — replace with a generic link or keep for visual fidelity
- Original countdown shows "00" for all units in the screenshot — our timer should be functional
- No separate footer section — just social links at bottom
