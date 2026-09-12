# Paladin — Implementation Notes

Source: ColorLib Game Warrior (slug: `game-warrior`)
Preview: https://preview.colorlib.com/theme/gamewarrior/

## Section order (implement top → bottom)

1. Navbar — dark bg, logo left, nav right, user panel
2. Hero — full-width carousel, dark overlay, headline + CTA
3. NewsTicker — horizontal scrolling bar, category tags
4. Features — 4-col card grid with image overlays
5. RecentGames — 3-col grid, dark textured bg
6. Tournaments — 2-col, light bg, premium badges
7. Reviews — 4-col, dark bg, score badge circles
8. FooterTop — 3-col (logo, posts, comments)
9. Footer — nav links + Component Dock

## Fidelity notes

- Font: Roboto (weights 400/500/700) via Google Fonts link in index.html
- Brand color #ffb320 used for: buttons, "new" tags, hero span highlight
- Button shape: pill (border-radius: 50px), golden bg, dark text
- Category tags: "new" = #ffb320, "strategy" = #694eae, "racing" = #4eae60
- Score badges: circles (border-radius: 50%) with colored backgrounds
- Dark sections: #131313 body bg, #1f2225 alt
- Light sections: #eef2f6 / #dbe2ec
- Images: use picsum.photos/seed/paladin-N/... for all thumbnails
- Hero can be simplified to a static hero (no carousel needed)
- News ticker can be CSS animation or simple list

## Component mapping

| Original class | React component |
|---|---|
| `.header-section` | `Navbar` |
| `.hero-section` | `Hero` |
| `.latest-news-section` | `NewsTicker` |
| `.feature-section` | `Features` |
| `.recent-game-section` | `RecentGames` |
| `.tournaments-section` | `Tournaments` |
| `.review-section` | `Reviews` |
| `.footer-top-section` | `FooterTop` |
| `.footer-section` | `Footer` |

## Shared UI reuse

- Card patterns from `packages/ui` for feature/game/review cards
- `cn()` for class composition
- Button component for CTAs
