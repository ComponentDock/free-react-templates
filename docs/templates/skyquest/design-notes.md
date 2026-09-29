# SkyQuest — Implementation Notes

Source: ColorLib "Colorlib Search 19" (colorlib-search-19)
Preview: https://preview.colorlib.com/theme/colorlib-search-19/ (unreachable — based on screenshot)
Spec: openspec/specs/template-skyquest/spec.md

## Structure Order

1. **App.tsx** — Root component composing Hero + SearchForm + Footer
2. **components/Hero.tsx** — Full-viewport background image section
3. **components/SearchForm.tsx** — Centered gradient card with search fields
4. **components/Footer.tsx** — Simple footer with Component Dock link

## Section-by-Section Fidelity Notes

### Hero (background)
- Full-viewport height (100vh), background image covers entire screen
- Use `picsum.photos/seed/skyquest-hero/1920/1080` as placeholder
- Object-fit: cover, centered

### SearchForm (gradient card)
- Centered absolutely or via flex on the hero
- Card: `linear-gradient(90deg, #6a9cf5, #b37ce8)` with ~80% opacity
- Rounded corners ~12px, padding ~30-40px
- Row 1 (two columns): From input + To input
  - Labels: white, bold, small caps or uppercase
  - Inputs: white bg, ~6px radius, placeholder "City, Region or Airport"
- Row 2 (four columns): Passengers + Depart + Return + Search button
  - Passengers: dropdown/select showing "1 Adult, 0 Children, 1 Room +"
  - Depart/Return: date inputs with "mm/dd/yyyy" placeholder
  - Search button: teal-green gradient (#4ecdc4 → #44b09e), white bold uppercase text, rounded

### Footer
- Simple dark footer with Component Dock attribution
- "Made with Component Dock" or similar
- Link to https://www.componentdock.com/

## Key Decisions

- No parallax, no newsletter, no multi-section layout — this is a single-purpose search form template
- The background image is the only visual element beyond the card
- Green button provides strong contrast against the purple-blue gradient
- Mobile: stack all fields vertically, card stays centered
- Since preview is unreachable, tokens are estimated from screenshot; implementer should verify on a different search-form template's CSS if available

## Design Token Summary (from screenshot)

```
Card gradient: linear-gradient(90deg, #6a9cf5, #b37ce8) ~80% opacity
Card radius: 12px
Input bg: #ffffff, radius: 6px
Label: #ffffff, bold, font-size: ~14px
Button gradient: linear-gradient(135deg, #4ecdc4, #44b09e)
Button text: #ffffff, uppercase, bold, font-size: ~14px
Font: sans-serif (recommend Inter or Poppins via Google Fonts)
```
