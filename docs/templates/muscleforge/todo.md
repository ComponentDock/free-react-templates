# MuscleForge — Implementation Notes

Source: ColorLib "Gym" — https://colorlib.com/wp/template/gym/
Preview: https://preview.colorlib.com/theme/gym/
Author: codepixer (ColorLib)

## Section Order (top to bottom)

1. Header (top bar + nav)
2. Banner/Hero (fullscreen bg image, overlay, headline)
3. Offer Area (3 service cards)
4. Convert Area (BMI calculator, red bg)
5. Top Courses (6 course cards, 3x2 grid)
6. Feature Area (dark bg, alternating image+text)
7. Schedule (timetable table, Mon-Fri)
8. Team/Trainer (4 member cards, #f9f9ff bg)
9. Pricing (3 tiers, hover effect)
10. Brand Logos (partner row)
11. CTA Parallax (bg image, overlay, button)
12. Footer (social links, copyright)

## Fidelity Notes

- **Font**: Poppins (weights 300-700) loaded from Google Fonts. All headings
  and body use the same font family.
- **Brand color**: `#f6214b` — hot pink-red. Used on: BMI banner background,
  pricing card hover, primary CTA buttons, text selection highlight.
- **Button style**: Flat, no border-radius (sharp corners), `#f6214b` background,
  white text. Hover: white background, pink text + pink border.
- **Dark sections**: Feature area (`#222`), hero overlay (`rgba(0,0,0,0.5)`),
  CTA parallax overlay (`rgba(0,0,0,0.5)`).
- **Light sections**: Team area (`#f9f9ff`), price card default (`#f9f9ff`).
- **Hero**: Full-width background image, 50% black overlay, uppercase white
  text "Real Fitness Depends on Exercise", subtext "Shape your body well."
- **BMI Calculator**: Full-width red banner with 2 text inputs (height, weight)
  and a CTA button. Non-functional in original (no JS calc).
- **Schedule table**: Bootstrap bordered table, light thead, course names as
  row headers, time slots as cell content.
- **Team cards**: Photo with hover overlay showing social media icons
  (Facebook, Twitter, LinkedIn, Google+). Name and role below.
- **Pricing cards**: 3 tiers (Basic, Standard, Premium or similar). Hover
  turns bottom section red + adds box-shadow. CTA button inverts on hover.
- **CTA parallax**: Background image with dark overlay, centered text, primary
  button with transparent bg that outlines on hover.

## Component Mapping

| Section | Component | Notes |
|---|---|---|
| Header | `Header.tsx` | Top bar + nav. Sticky. Mobile hamburger. |
| Banner | `Hero.tsx` | Full-height bg image + overlay + text |
| Offer | `OfferArea.tsx` | 3-column card grid |
| BMI Calculator | `BmiCalculator.tsx` | Red banner, 2 inputs + button |
| Courses | `TopCourses.tsx` | 6 cards, image + badge + name + price |
| Features | `FeatureArea.tsx` | Dark bg, alternating image+text |
| Schedule | `ScheduleArea.tsx` | Timetable table component |
| Team | `TeamArea.tsx` | 4 trainer cards with hover overlay |
| Pricing | `PricingArea.tsx` | 3 tier cards with hover |
| Brands | `BrandArea.tsx` | Logo row |
| CTA | `CallToAction.tsx` | Parallax bg + button |
| Footer | `Footer.tsx` | Social links + copyright + ComponentDock |

## Placeholder Assets

- Hero bg: `https://picsum.photos/seed/muscleforge-hero/1920/700`
- Offer icons: `https://picsum.photos/seed/muscleforge-offer-n/200/200` (n=1,2,3)
- Course images: `https://picsum.photos/seed/muscleforge-course-n/400/300` (n=1-6)
- Feature images: `https://picsum.photos/seed/muscleforge-feat-n/400/400` (n=1,2)
- Team photos: `https://picsum.photos/seed/muscleforge-team-n/300/300` (n=1-4)
- Brand logos: `https://picsum.photos/seed/muscleforge-brand-n/150/60` (n=1-4)
- CTA bg: `https://picsum.photos/seed/muscleforge-cta/1920/500`
