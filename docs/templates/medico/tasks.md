# Medico (ColorLib "Medico") — Shipped Template Notes

> Implemented and shipped via PR #268 (merged 2026-08-11, commit `d08cd92f`)
> on `feat/template-medico`. The original prep artifact for this folder
> misattributed the template to ColorLib "Docmed" — that was WRONG: Docmed is a
> SEPARATE ColorLib template (own rows in TEMPLATES.md at lines 376/1837/2230,
> preview https://preview.colorlib.com/theme/docmed/), still unclaimed. The
> Docmed research from the old prep artifact survives in git history (the
> pre-`d08cd92f` version of `openspec/specs/template-medico/spec.md`).

## What shipped

- **Original:** ColorLib "Medico" — Medical HTML Template
  (source: https://colorlib.com/wp/template/medico/). TEMPLATES.md rows at
  lines 448 / 1865 / 2250 (Bootstrap, Health Fitness, Medical sections — one
  app, all three rows marked `[x]`).
- **Preview (reachable, HTTP 200):** https://preview.colorlib.com/theme/medico/
- **App:** `apps/medico` (package `@free-react-templates/medico`), deployed to
  https://free-react-templates-medico.surge.sh (HTTP 200, verified).
- **Spec:** `openspec/specs/template-medico/spec.md` (rewritten to describe the
  real Medico template; `npm run spec:validate` passes).

## Structure (1:1 from the preview DOM)

1. Header — top info strip + navbar (logo, Home, About, Doctors, Pages ▾
   (Services/Departments), Blog, Contact) with a blue appointment button.
2. Hero banner slider (`banner_item` / `single_item` slides).
3. About us section (`about_us`).
4. Feature/services band (`single_feature_part` with `single_feature_icon`
   circles + `top_service` strip).
5. Departments grid (`single_our_depertment` + `single_our_depertment_icon`).
6. Doctors grid (`doctor_part .single_blog_item`; DOM doctors: DR Adam
   Billiard, DR Justin Stuard, DR Fred Macyard).
7. Blog section (`blog_part` / `single_blog_text`).
8. Appointment form band (`regervation_part` / `regervation_part_iner`,
   gradient background).
9. Footer (`footer` / `single-footer-widget`) + copyright bar
   (`copyright_part`).

## Design tokens (from `medico-style.css`)

- Brand blue: `#0065e1`; secondary blues `#649bff`, `#0070fa`, `#38a4ff`.
- Appointment band gradient: `linear-gradient(to right, #649bff, #0070fa,
#649bff)`.
- Light section bg: `#f9f9ff`, `#f0e9ff`; headings `#242429`; body grays
  `#999999` / `#888888`.
- Accents: `#4cd3e3` (teal), `#f4e700` (yellow), `#f44a40` (red).
- Footer bg `#f3f6f7`; copyright bg `#0d1820` with `#0065e1` text.
- Font: Roboto (sans-serif), Google Fonts `<link>`.
- Section title h2: 48px, `#242429`.
- Images: seeded picsum placeholders; icons lucide-react; brand icons inline
  SVG.

## Notes

- This is the pipeline's de-facto naming pattern: row name "Medico" is used as
  the app name even though it matches the ColorLib slug (same as
  `thepetcare`).
- Gate: `scripts/verify-app.sh medico` passes (typecheck + lint + 100%
  coverage + build). Full gate runs in CI on merge + nightly.
