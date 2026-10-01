# Soundbite — Design Notes & Replication Record

Source: ColorLib "The Hustle Hour" (slug `hustlehour`)
Preview verified live: https://preview.colorlib.com/theme/hustlehour/ (2026-10-01)
New name: Soundbite (`apps/soundbite`, `@free-react-templates/soundbite`)

## Replication verification

Fetched the preview DOM (`/theme/hustlehour/`) and its stylesheet
(`/_astro/Base.D-0Tjs2q.css`) directly and compared against the prep draft.
Corrections applied to the spec:

- **Primary accent is RED (`#dc2626`)**, not purple. The purple in the
  design appears only as the newsletter-gradient endpoint
  (`from #ef4444 to #a855f7`) and as accent link text (`#c084fc`).
- **Hero heading** is "Stories That Inspire Action" with badge "New
  Episode Every Tuesday" (prep draft had different copy).
- **Recent Episodes grid has 6 cards** (prep draft said 3).
- **Sponsors heading** is "Proudly Supported By"; **newsletter heading**
  is "Never Miss an Episode".
- Font verified: **Outfit** (`Outfit,system-ui,sans-serif` in the live CSS).

## Verified token set

| Token       | Value                                                                          |
| ----------- | ------------------------------------------------------------------------------ |
| Font        | Outfit 300–700 (Google Fonts `<link>`)                                         |
| Primary     | red-600 `#dc2626`, hover red-500 `#ef4444`                                     |
| Gradient    | `from-red-500 to-purple-500` (newsletter banner, avatars)                      |
| Accent text | purple-400 `#c084fc`                                                           |
| Surfaces    | gray-950 `#030712` bg, gray-900 `#111827` sections, gray-800 `#1f2937` borders |
| Buttons     | pill `rounded-full` primary; `rounded-lg` secondary                            |
| Inputs      | `rounded-xl`, gray-900 bg, red-500 focus ring                                  |

## Implementation notes

- Section components in `src/components/` composed by `App.tsx`; state kept
  local (carousel index, accordion open index, form fields/errors).
- FAQ answers and the mobile menu use **conditional render** (never the
  `hidden` attribute) so inactive content is truly absent in tests.
- Forms use `noValidate` + custom per-field errors (house style: controlled
  state, guard, `role="status"` success panel).
- Brand icons (X, LinkedIn, Instagram, Spotify, Apple, YouTube) are inline
  SVGs; UI icons come from `lucide-react`.
- Scroll-driven widgets (progress bar, back-to-top) attach native scroll
  listeners with cleanup; tests drive them via dispatched scroll events.
- Images: `picsum.photos/seed/soundbite-*/...` placeholders.
