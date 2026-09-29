# QueryHub — Implementation Notes

## Structure order (top → bottom)

1. **Background** — full-viewport container with solid light ice-blue fill
2. **RoundSearchToggle** — circular white button, centered horizontally, slightly above vertical center
3. **SquareSearchToggle** — square white button, centered horizontally, slightly below round toggle
4. **Footer** — standard ComponentDock footer at bottom

## Section-by-section fidelity notes

### Background
- Full viewport height (`h-screen`), solid light ice-blue color (#daedf7)
- No gradient, no pattern, no image — single flat fill
- Use `bg-[#daedf7]` or define as Tailwind theme token

### RoundSearchToggle
- White circular button (`bg-white rounded-full`)
- Size: ~50px diameter
- Contains a magnifying glass icon (lucide-react `Search`) in light gray (#bbbbbb)
- Icon size: ~24px
- No shadow, no border — clean flat design
- On click: expands horizontally to reveal a search input field
- Transition: smooth width expansion (CSS transition or framer-motion)

### SquareSearchToggle
- White square button (`bg-white rounded-none`)
- Size: ~48px
- Contains a magnifying glass icon (lucide-react `Search`) in light gray (#bbbbbb)
- Icon size: ~24px
- No shadow, no border — clean flat design
- On click: expands horizontally to reveal a search input field
- Transition: smooth width expansion

### SearchInput (expanded state)
- White background (`bg-white`)
- No border or very subtle light gray border
- Dark text color (#333)
- Placeholder text in gray
- Auto-focuses when expanded
- Dismissable via Escape key or clicking outside
- Width: expands to ~300–400px depending on viewport

### Footer
- Standard ComponentDock footer
- "Made with Component Dock" or similar link to https://www.componentdock.com/

## Design decisions

- Preview URL returned 404; all tokens are from screenshot analysis
- This is an extremely minimal template — essentially two toggle buttons on a colored background
- The expandable behavior is the key interactive feature to implement
- No additional sections beyond the toggles and footer
- Using lucide-react for the magnifying glass icon (consistent with other templates)
- Responsive: toggles remain centered and appropriately sized on all viewports
- Touch targets should be at least 44px for mobile accessibility
