# Template: Tavola (Gastronomy / Restaurant)
<!-- prep-status: shipped-as=gastronome -->
> **SHIPPED-UNDER** — the ColorLib `pato` design this prep describes already
> ships as `apps/gastronome` (<https://gastronome.free.componentdock.com>).
> Do not scaffold `apps/tavola`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-gastronome/spec.md`.

## Purpose

- **Source Template**: ColorLib "Pato" (`https://colorlib.com/wp/template/pato/`)
- **Preview URL**: `https://preview.colorlib.com/theme/pato/`
- **New Name**: `tavola` (App path: `apps/tavola`)
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#d11a21` (Red) and `#ec1d25` (Bright Red)
  - Dark Neutral: `#111111` (Deep Charcoal / Black background for dark sections / headers)
  - Light Neutral: `#f0f0f0` (Light gray background), `#ffffff` (White)
  - Text: `#333333` (Body text), `#666666` (Muted text)
- **Font Family**:
  - Headings: `Courgette`, serif / cursive accents; `Montserrat`, sans-serif bold
  - Body: `Poppins`, sans-serif
- **Button Shapes & UI**:
  - Buttons: Rounded (`border-radius: 10px` / `bo-rad-10`, pill, or sharp overlays on image cards with hover zoom effects)
  - Section spacing: generous vertical padding (`p-t-115 p-b-120`)

## Requirements

### Feature: Tavola Restaurant Landing Page

#### Scenario: User views the hero slider

- **GIVEN** the user opens the Tavola homepage
- **WHEN** the hero section renders with its background slider images
- **THEN** the user sees welcome headings ("Welcome to Tavola Place") and a "Look Menu" CTA button

#### Scenario: User reads about the Italian restaurant story

- **GIVEN** the user scrolls to the Welcome / Our Story section
- **WHEN** the section renders with a side-by-side layout (story text on left, image on right)
- **THEN** the user reads about Italian restaurant heritage and clicks "Our Story" link

#### Scenario: User explores the menu categories

- **GIVEN** the user scrolls to the Our Menu section
- **WHEN** the grid of menu items (Lunch, Dinner, Happy Hour, etc.) appears with image backgrounds and hover zoom
- **THEN** the user can click category buttons to filter or view items

#### Scenario: User checks upcoming events

- **GIVEN** the user scrolls to the Upcoming Events slider section
- **WHEN** event slides display date badges and event descriptions
- **THEN** the user can browse scheduled wine and tasting nights

#### Scenario: User books a table

- **GIVEN** the user scrolls to the Reservation section
- **WHEN** the booking form appears with date, time, name, phone, and person count fields
- **THEN** the user can fill out the form and submit a table reservation

#### Scenario: User views customer reviews

- **GIVEN** the user scrolls to the Customer Review carousel
- **WHEN** the review slider shows customer testimonials, avatars, and star ratings
- **THEN** the user can read feedback from patrons

#### Scenario: User watches promotional video

- **GIVEN** the user scrolls to the Video parallax section
- **WHEN** the play button modal trigger is clicked
- **THEN** a video modal opens showcasing restaurant highlights

#### Scenario: User reads the latest blog posts

- **GIVEN** the user scrolls to the The Blog section
- **WHEN** recent blog cards render with publication dates and titles
- **THEN** the user can read articles about wine and culinary tips

#### Scenario: User views footer contact and hours

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer displays contact address, opening times, gallery preview, and Component Dock attribution link
- **THEN** the user sees complete business hours and contact info

## Verification checklist

- [x] App folder created at `apps/tavola` — superseded: shipped as `apps/gastronome`
- [ ] Package name `@free-react-templates/tavola`
- [ ] `public/CNAME` set to `tavola.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] All 9 main sections rendered accurately matching the Pato reference structure
- [ ] Tests passing with 100% coverage
