# Spec: template-btnridge (Bootstrap Buttons 12)

## Purpose

Btnridge is a bootstrap button component page. It recreates the ColorLib **Bootstrap Buttons 12** design (https://colorlib.com/wp/template/bootstrap-buttons-12/, preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

Recreation of ColorLib "Bootstrap Buttons V12" (`https://colorlib.com/wp/template/bootstrap-buttons-12/`) under the original name `btnridge`.

- Aesthetic: Dark theme showcase of sleek, modern Bootstrap-inspired buttons, featuring dark/black gradients, multiple sizes, rounded/pill/outline styles, and social buttons.
- Design tokens: Dark background (`#111827`, `#1f2937`), sleek border effects, vibrant accent glow (`#3b82f6` blue / `#6366f1` indigo).
- Footer: Component Dock brand link (`https://www.componentdock.com/`).

## Requirements

### Feature: template-btnridge template behaviour

#### Scenario: template-btnridge

- Gherkin feature scenarios covering Header, SizeScale, ColorPalette, SocialButtons, and Footer sections.
- 100% test coverage.
- Fully accessible with proper ARIA labels and semantic markup.
- `injectUiSource()` in `vite.config.ts`.
- `public/CNAME` with `btnridge.free.componentdock.com`.

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
