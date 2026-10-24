# Template: PopGift (Coupon Modal)
<!-- prep-status: shipped-as=modalbox -->
> **SHIPPED-UNDER** — the ColorLib `modal-14` design this prep describes already
> ships as `apps/modalbox` (<https://modalbox.free.componentdock.com>).
> Do not scaffold `apps/popgift`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-modalbox/spec.md`.

## Purpose

Recreation of ColorLib "Modal V14" — a free coupon form pop-up modal.
- **Source:** https://colorlib.com/wp/template/modal-14/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-14/ (note: slug includes `/bootstrap/` prefix)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Bootstrap Modal Templates (coupon/email capture popup)

## Design tokens (extracted from preview CSS)

| Token              | Value / Notes                                                        |
| ------------------ | -------------------------------------------------------------------- |
| Font family        | `"Roboto", sans-serif` (body + headings); `"Poppins"` for emphasis; `"Source Serif Pro"` loaded but minimal use |
| Brand background   | `#fff4e4` (warm cream) — `.bg-4` on modal body                      |
| Body text color    | `#000` (headings), `#777` (paragraphs)                               |
| Cancel link color  | `gray`                                                               |
| Border / dash      | `2px dashed #6c757d` on coupon code box                              |
| Button radius      | `4px` (`border-radius: 4px`) — Bootstrap `.btn`                     |
| Modal radius       | `7px` on wrapper, `0` on `.modal-content` (sharp inner corners)      |
| Modal shadow       | `0 10px 50px -10px rgba(0,0,0,0.9)`                                 |
| Modal content bg   | `#fff` (white) inside the promo area                                 |
| Coupon code bg     | `#fff` with dashed border                                            |
| Accent button      | Bootstrap `.btn-primary` (default Bootstrap blue `#0d6efd`)         |
| Secondary button   | Bootstrap `.btn-secondary` (`#6c757d` gray)                         |
| Promo image        | Left side, `flex: 0 0 200px`                                        |

## Replication notes (from preview DOM)

The template is a single centered "Launch modal" button on a full-height viewport.
Clicking it opens a centered Bootstrap modal popup with:
1. Left: promo image (200px wide, background-image)
2. Right: heading "60% off coupon", paragraph text, dashed-border coupon code box ("SUMMER60"), primary CTA button "Use a coupon", and gray cancel link "Sorry, I don't want this."

Fonts: Roboto (body/headings), Poppins (loaded via Cloudflare Fonts), Source Serif Pro (loaded).
The modal has a heavy box-shadow and rounded outer corners (7px), but sharp inner content corners.

Screenshot analysis: The background behind the modal is transparent/dimmed. The modal body is warm cream (#fff4e4). The promo image is a lifestyle/product photo. The coupon code is prominently displayed in a dashed-border box.

## Requirements

### Feature: PopGift — Coupon Form Pop-up Modal

  Background:
- **GIVEN** the user is on the PopGift page
- **THEN** the "Launch modal" button is visible in the center of the viewport

#### Scenario: Modal opens on button click

- **GIVEN** the "Launch modal" button is visible
- **WHEN** the user clicks the "Launch modal" button
- **THEN** the coupon modal dialog is displayed centered on screen
- **AND** the modal has a promo image on the left side
- **AND** the heading "60% off coupon" is visible
- **AND** the descriptive paragraph text is visible below the heading
- **AND** the coupon code "SUMMER60" is displayed in a dashed-border box
- **AND** the "Use a coupon" primary button is visible
- **AND** the "Sorry, I don't want this." cancel link is visible

#### Scenario: Modal closes on cancel click

- **GIVEN** the coupon modal is open
- **WHEN** the user clicks the "Sorry, I don't want this." cancel link
- **THEN** the modal closes and the page returns to the background state

#### Scenario: Modal closes on backdrop click

- **GIVEN** the coupon modal is open
- **WHEN** the user clicks outside the modal on the backdrop
- **THEN** the modal closes

#### Scenario: Modal closes on close button

- **GIVEN** the coupon modal is open
- **WHEN** the user clicks the X close button in the modal header
- **THEN** the modal closes

#### Scenario: Promo image is visible

- **GIVEN** the coupon modal is open
- **THEN** the promo image is displayed on the left side of the modal body
- **AND** the promo image is 200px wide

#### Scenario: Coupon code styling

- **GIVEN** the coupon modal is open
- **THEN** the coupon code has a white background
- **AND** the coupon code has a 2px dashed border
- **AND** the coupon code is centered within its container

#### Scenario: Button styling

- **GIVEN** the coupon modal is open
- **THEN** the "Use a coupon" button has rounded corners (4px radius)
- **AND** the "Use a coupon" button is a full-width block element within the modal
- **AND** the "Launch modal" trigger button is styled as a secondary button

#### Scenario: Modal visual design

- **GIVEN** the coupon modal is open
- **THEN** the modal body background is warm cream (#fff4e4)
- **AND** the modal has a heavy box-shadow (0 10px 50px -10px rgba(0,0,0,0.9))
- **AND** the modal outer wrapper has 7px border radius
- **AND** the modal content inner corners are sharp (0 radius)

#### Scenario: Accessibility — modal ARIA

- **GIVEN** the coupon modal is open
- **THEN** the modal has role="dialog"
- **AND** the modal is focus-trapped
- **AND** pressing Escape closes the modal

#### Scenario: Page layout

- **GIVEN** the user is on the PopGift page
- **THEN** the page content fills the full viewport height
- **AND** the "Launch modal" button is centered both horizontally and vertically

## Verification checklist

- [ ] Modal opens on button click
- [ ] Modal closes on cancel link click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Promo image visible and sized correctly
- [ ] Coupon code "SUMMER60" displayed with dashed border
- [ ] Heading "60% off coupon" visible
- [ ] Paragraph text visible
- [ ] "Use a coupon" button is full-width with 4px radius
- [ ] "Launch modal" button is secondary styled
- [ ] Modal background is warm cream (#fff4e4)
- [ ] Modal shadow is heavy (0 10px 50px -10px rgba(0,0,0,0.9))
- [ ] Modal outer corners are 7px rounded
- [ ] Modal inner corners are sharp (0 radius)
- [ ] Font is Roboto (Google Fonts loaded in index.html)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app source code
- [ ] 100% test coverage
- [ ] TypeScript strict — no `any`
- [ ] vitest + testing-library pass

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/modal-14/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#0d6efd` — nearest `#a33805` (d=295)
<!-- live-palette-unverified:end -->
