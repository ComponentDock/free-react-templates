# Template: FrameDay (Photography Portfolio)

## Purpose

FrameDay is a photographer portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Louie" free
template (source: https://colorlib.com/wp/template/louie/), built under a
DIFFERENT name (**FrameDay**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 photographer portfolio with a fixed left
sidebar (author portrait + nav + newsletter form), a 50/50 hero split
(carousel of photos on the left, intro text with signature on the right),
an Instagram photo grid, and a dark footer with recent photos, archives,
and contact info.

## Source mapping

- **ColorLib item:** "Louie" (TEMPLATES.md line 2457; section
  "## Photography (49)" at line 2433).
- **Source URL:** https://colorlib.com/wp/template/louie/
- **Preview URL — REACHABLE (verified 2026-09-26):**
  **`https://preview.colorlib.com/theme/louie/`** (HTTP 200, 21,969 bytes).
- **Preview CSS:** `css/style.css` (2,789 lines — ALL styles, Bootstrap 4
  + custom). Fonts: Poppins (300–700), Montserrat (300–700), Herr Von
  Muellerhoff (signature) — all loaded via Cloudflare `@font-face`.

## Design tokens (extracted from preview CSS)

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Brand gold | `#ccb78f` | Sidebar logo link color, accents |
| Brand blue | `#78d5ef` | Primary button color |
| Dark bg | `#242423` | Footer background |
| Light bg | `#f8f9fa` | Hero section `.bg-light` |
| Text dark | `#212529` | Body text |
| Text muted | `#6c757d` | Secondary/muted text |
| Text light | `#bfbfbf` | Subheading color |
| Big letter | `#ededed` | Giant background name in hero |
| Border input | `#ece4d5` | Subscribe form border |
| Overlay | `rgba(0,0,0,0.2)` | Instagram hover overlay |

### Fonts

| Role | Font | Weights |
|------|------|---------|
| Body/UI | Poppins | 300, 400, 500, 600, 700 |
| Nav/headings | Montserrat | 300, 400, 500, 700 |
| Signature | Herr Von Muellerhoff | 400 |

### Layout tokens

- Sidebar: fixed left, 22% width (desktop), 270px (mobile), white
  background (`#fff`), z-index 1001
- Sidebar logo: 160×160px circle (`border-radius: 50%`)
- Hero: 50/50 split (author-image + author-info), `.bg-light` section
- Instagram grid: 5 equal columns, 200px height per image, no gutters
- Footer: 3-column grid, dark bg `#242423`, white text
- Sections: `padding: 5em 1.8em` (desktop), `3em 0` (mobile)

### Buttons

- `.btn-primary`: bg `#78d5ef`, border `#78d5ef`, text `#212529`,
  border-radius `0.25rem`
- Hover: bg `#56caeb`, border `#4ac7ea`

## Requirements

### Feature: FrameDay — Photography Portfolio Template

  As a photographer visiting FrameDay,
  I want a portfolio showcase with sidebar navigation,
  So that visitors can browse my work and contact me.

  Background:
- **GIVEN** the template is loaded in a browser
- **AND** the viewport is 1280×800

**--- Sidebar ---**

#### Scenario: Sidebar displays author info

- **THEN** the sidebar should show a circular author portrait (160px)
- **AND** the author name should be displayed below the portrait
- **AND** the sidebar should be fixed on the left side

#### Scenario: Sidebar navigation

- **THEN** the sidebar should contain a vertical nav menu
- **AND** the menu should include Home, Collection, About Me, My Services, Blog, Contact
- **AND** the active item should be visually highlighted

#### Scenario: Sidebar newsletter form

- **THEN** the sidebar should include a newsletter subscription form
- **AND** the form should have an email input and submit icon
- **AND** the input placeholder should read "Enter Email Address"

**--- Hero Section ---**

#### Scenario: Hero layout

- **GIVEN** the hero section is visible
- **THEN** the hero should be split into two 50/50 columns
- **AND** the left column should contain a photo carousel
- **AND** the right column should contain author info text

#### Scenario: Hero photo carousel

- **THEN** the left column should show a full-height image slider
- **AND** the slider should cycle through author photographs
- **AND** images should use `background-size: cover` for proper fit

#### Scenario: Hero text content

- **THEN** the hero should display a "Hello! I'm" subheading
- **AND** the author name should appear as a large heading
- **AND** a signature-style cursive name should appear below the text
- **AND** social media icons (Twitter, Facebook, Instagram) should be visible

#### Scenario: Hero big background letter

- **THEN** a large decorative name text should appear behind the heading
- **AND** it should be positioned absolutely and use color `#ededed`
- **AND** it should have a large font size

**--- Instagram Grid ---**

#### Scenario: Instagram section heading

- **THEN** the Instagram section should display "Follow me on Instagram"
- **AND** the heading should be uppercase with letter-spacing

#### Scenario: Instagram photo grid

- **THEN** the grid should show 5 equal-width photo columns
- **AND** each photo should have 200px height
- **AND** there should be no gutters between photos

#### Scenario: Instagram hover effect

- **WHEN** I hover over an Instagram photo
- **THEN** a dark overlay should appear (`rgba(0,0,0,0.2)`)
- **AND** an Instagram icon should be centered in the overlay
- **AND** the overlay should fade in with a 0.3s transition

**--- Footer ---**

#### Scenario: Footer layout

- **THEN** the footer should have a dark background (`#242423`)
- **AND** it should be divided into 3 columns

#### Scenario: Footer recent photos

- **THEN** the first column should display "Recent Photos"
- **AND** it should show 6 thumbnail images in a list

#### Scenario: Footer archives

- **THEN** the second column should display "Archives"
- **AND** it should list months with photo counts

#### Scenario: Footer contact info

- **THEN** the third column should display "Have a Questions?"
- **AND** it should show address, phone, and email with icons

#### Scenario: Footer copyright

- **THEN** the footer bottom should display a copyright notice
- **AND** it should link to https://www.componentdock.com/
- **AND** it should NOT contain any ColorLib attribution

**--- Responsive ---**

#### Scenario: Mobile sidebar toggle

- **GIVEN** the viewport is 375×667
- **THEN** the sidebar should be off-screen (translated left)
- **AND** a hamburger toggle should be visible
- **AND** clicking the toggle should slide the sidebar in

#### Scenario: Mobile hero layout

- **GIVEN** the viewport is 375×667
- **THEN** the hero columns should stack vertically
- **AND** the author info should take 70% width
- **AND** the author image should take 30% width

#### Scenario: Mobile Instagram grid

- **GIVEN** the viewport is 375×667
- **THEN** the Instagram photos should stack to single column

## Verification checklist

- [ ] Sidebar: fixed left, circular portrait, nav menu, newsletter form
- [ ] Hero: 50/50 split, photo carousel on left, text + signature on right
- [ ] Instagram: 5-column grid, 200px height, hover overlay with icon
- [ ] Footer: dark bg, 3 columns (photos, archives, contact), copyright
- [ ] Fonts: Poppins (body), Montserrat (nav), Herr Von Muellerhoff (signature)
- [ ] Colors: brand blue `#78d5ef`, dark footer `#242423`, light hero `#f8f9fa`
- [ ] Responsive: sidebar collapses to toggle on mobile, hero stacks
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests: 100% coverage with Vitest + Testing Library
