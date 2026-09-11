# DigiView — Implementation Tasks & Design Notes

**Source:** ColorLib DigiLab (`https://colorlib.com/wp/template/digilab/`)
**Preview:** `https://preview.colorlib.com/theme/digilab/`
**New name:** `digiview` → `apps/digiview/`

## Section Build Order

| #  | Component       | Notes                                                  |
|----|----------------|--------------------------------------------------------|
| 1  | Navbar          | Dark bg, sticky, green logo accent, 7 nav links        |
| 2  | Hero            | Full-viewport slider, text left / image right, green CTA|
| 3  | Services        | 6 cards on light bg, circular green-outlined icons      |
| 4  | Projects        | Dark overlay bg image, card grid with zoom hover        |
| 5  | StatsCounter    | Black bg, 4 animated counters, green numbers            |
| 6  | About           | Two-column text, green accent heading, secondary CTA    |
| 7  | Process         | Numbered steps with connecting lines                    |
| 8  | Clients         | Logo carousel/slider, light bg                          |
| 9  | FAQ             | Accordion Q&A, toggle open/close                        |
| 10 | Testimonials    | Dark bg slider, avatar + quote                          |
| 11 | Blog            | 3-card grid, featured image + title + meta              |
| 12 | Contact         | Form (name, email, subject, message), validation       |
| 13 | Footer          | 4-column dark bg, social icons, Component Dock link     |

## Design Token Mapping to Tailwind

| Original           | Tailwind class / CSS variable          |
|--------------------|----------------------------------------|
| Brand green `#31de79` | `bg-[#31de79]` / `text-[#31de79]`    |
| Dark bg `#000000` | `bg-black`                              |
| Dark section `#232931` | `bg-[#232931]`                      |
| Light section `#f8f9fa` | `bg-gray-50` / `bg-slate-50`       |
| Font Nunito Sans   | `font-['Nunito_Sans',sans-serif]` or CSS @import |
| Button radius 4px  | `rounded` or `rounded-[4px]`           |
| Card radius 10-16px| `rounded-[10px]` / `rounded-2xl`      |
| Counter numbers    | `text-[#31de79]` + animate on mount   |

## Fidelity Notes

- The original uses a **Swiper.js** slider for the hero; use a lightweight CSS-only or IntersectionObserver-based auto-advancing slider for React (keep it dependency-light).
- Stats counters animate on scroll intersection — implement with IntersectionObserver.
- The original uses Bootstrap grid (`row`/`col-md-*`); implement with Tailwind `grid` or `flex`.
- FAQ accordion should be accessible (aria-expanded, aria-controls).
- Testimonials slider: CSS snap scroll or lightweight React state.
- Clients logo carousel: CSS animation marquee or IntersectionObserver pause.
- Placeholder images: use `https://picsum.photos/seed/digiview-hero/1920/1080` etc.
