# Template: Sulci (Accordion / Account Settings UI)
<!-- prep-status: shipped-as=expanda -->
> **SHIPPED-UNDER** — the ColorLib `accordion-05` design this prep describes already
> ships as `apps/expanda` (<https://expanda.free.componentdock.com>).
> Do not scaffold `apps/sulci`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-expanda/spec.md`.

## Purpose

Recreation of ColorLib "Accordion 05" — a Bootstrap accordion component for
account settings, location info, and hobbies. Single-page app component
demoing a collapsible settings panel.

- **ColorLib source**: https://colorlib.com/wp/template/accordion-05/
- **Preview URL**: https://preview.colorlib.com/theme/bac/accordion-05/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name**: `sulci` (single lowercase word, no collision with existing specs/apps)

## Design tokens

Extracted from the preview CSS (https://preview.colorlib.com/theme/bac/accordion-05/css/style.css):

| Token            | Value                                     | Usage                                                |
| ---------------- | ----------------------------------------- | ---------------------------------------------------- |
| Font family      | `"Poppins", Arial, sans-serif`            | Body + headings (Google Fonts weight 300–800)        |
| Brand / accent   | `#75d6d1`                                 | Icon boxes, card body background, active-state color |
| Background       | `#fafafa`                                 | Page background                                      |
| Card background  | `#ffffff`                                 | Accordion container                                  |
| Text (body)      | `gray`                                    | Body copy                                            |
| Text (headings)  | `#000000`                                 | h1–h5, h3 in accordion headers                       |
| Card body text   | `rgba(255, 255, 255, 0.8)`                | White on teal background                             |
| List item border | `1px solid rgba(255, 255, 255, 0.2555)`   | Subtle separators inside teal panels                 |
| Icon box size    | `60px × 60px`                             | Teal square behind each section icon                 |
| Shadow           | `0px 10px 29px -16px rgba(0, 0, 0, 0.12)` | Subtle drop shadow on accordion container            |
| Border radius    | `0` (sharp corners)                       | All elements: sharp, no rounding                     |
| Section padding  | `7em 0`                                   | `.ftco-section` top/bottom                           |

## HTML structure (from preview)

```
<section class="ftco-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="heading-section mb-5 pb-md-4">Accordion #05</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-6">
        <div id="accordion" class="myaccordion w-100">
          <!-- Card 1: Manage (open by default) -->
          <div class="card">
            <div class="card-header">
              <button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                <div class="heading">
                  <div class="icon"><span class="ion-ios-settings"></span></div>
                  <h3>Manage</h3>
                </div>
                <i class="fa"></i>  <!-- chevron icon -->
              </button>
            </div>
            <div id="collapseOne" class="collapse show">
              <div class="card-body">
                <ul>
                  <li><a href="#"><p><span>01</span> Account</p><i class="ion-ios-arrow-forward"></i></a></li>
                  <li><a href="#"><p><span>02</span> Settings</p><i class="ion-ios-arrow-forward"></i></a></li>
                  <li><a href="#"><p><span>03</span> Profile</p><i class="ion-ios-arrow-forward"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Card 2: Location (collapsed) -->
          <div class="card">
            <div class="card-header">
              <button data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false">
                <div class="heading">
                  <div class="icon"><span class="ion-ios-pin"></span></div>
                  <h3>Location</h3>
                </div>
                <i class="fa"></i>
              </button>
            </div>
            <div id="collapseTwo" class="collapse">
              <div class="card-body p-4">
                <p>Far far away, behind the word mountains…</p>
              </div>
            </div>
          </div>
          <!-- Card 3: Hobbies (collapsed) -->
          <div class="card">
            <div class="card-header">
              <button data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">
                <div class="heading">
                  <div class="icon"><span class="ion-ios-basketball"></span></div>
                  <h3>Hobbies</h3>
                </div>
                <i class="fa"></i>
              </button>
            </div>
            <div id="collapseThree" class="collapse">
              <div class="card-body">
                <ul>
                  <li><a href="#"><p>Playing Basketball</p><i class="ion-ios-arrow-forward"></i></a></li>
                  <li><a href="#"><p>Playing Baseball</p><i class="ion-ios-arrow-forward"></i></a></li>
                  <li><a href="#"><p>Running</p><i class="ion-ios-arrow-forward"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Visual design notes (from TEMPLATES.md screenshot)

The screenshot shows a centered accordion card on a white/light-gray page. Each
accordion panel has a teal icon box on the left, a bold label, and a chevron
that rotates on expand/collapse. Expanded panels show a teal (#75d6d1)
background with white text items separated by subtle lines. The overall
aesthetic is clean, minimal, account-settings-like with sharp corners and
Poppins typography.

## Requirements

### Feature: Sulci template behaviour

Feature: Sulci Accordion Component
As a user, I want to expand/collapse accordion sections
so I can manage my account settings.

Background:
- **GIVEN** the page is loaded
- **AND** the accordion is visible

#### Scenario: Page heading is displayed

- **THEN** I should see the heading "Accordion #05"

#### Scenario: First panel is expanded by default

- **GIVEN** the "Manage" panel is expanded
- **THEN** I should see the list items "01 Account", "02 Settings", "03 Profile"
- **AND** the chevron icon for "Manage" should indicate expanded state

#### Scenario: Clicking "Manage" collapses it

- **GIVEN** the "Manage" panel is expanded
- **WHEN** I click the "Manage" header button
- **THEN** the "Manage" panel should be collapsed
- **AND** the chevron icon for "Manage" should indicate collapsed state

#### Scenario: Clicking "Location" expands it

- **GIVEN** the "Location" panel is collapsed
- **WHEN** I click the "Location" header button
- **THEN** the "Location" panel should be expanded
- **AND** I should see descriptive text content

#### Scenario: Clicking "Hobbies" expands it

- **GIVEN** the "Hobbies" panel is collapsed
- **WHEN** I click the "Hobbies" header button
- **THEN** the "Hobbies" panel should be expanded
- **AND** I should see the list items "Playing Basketball", "Playing Baseball", "Running"

#### Scenario: Only one panel can be open at a time (accordion behavior)

- **GIVEN** the "Manage" panel is expanded
- **WHEN** I click the "Location" header button
- **THEN** the "Manage" panel should be collapsed
- **AND** the "Location" panel should be expanded

#### Scenario: Icons are displayed for each section

- **THEN** I should see an icon next to "Manage"
- **AND** I should see an icon next to "Location"
- **AND** I should see an icon next to "Hobbies"

#### Scenario: Chevron icons rotate on expand/collapse

- **GIVEN** the "Manage" panel is expanded
- **THEN** the "Manage" chevron should show expanded state
- **WHEN** I click the "Manage" header button
- **THEN** the "Manage" chevron should show collapsed state

#### Scenario: Cards have sharp corners (no border-radius)

- **THEN** the accordion container should have no border-radius

#### Scenario: Card body has teal background when expanded

- **GIVEN** the "Manage" panel is expanded
- **THEN** the expanded panel body should have background color #75d6d1

## Verification checklist

- [ ] Heading text matches: "Accordion #05"
- [ ] Three accordion cards rendered: Manage, Location, Hobbies
- [ ] "Manage" expanded by default; others collapsed
- [ ] Clicking a collapsed header expands it
- [ ] Clicking an expanded header collapses it
- [ ] Only one panel open at a time (accordion mutual exclusion)
- [ ] Icon boxes are teal (#75d6d1) squares, 60×60
- [ ] Expanded panel body has teal background with white text
- [ ] List items show number prefix (01, 02, 03) in Manage panel
- [ ] List items show arrow-right icon on the right
- [ ] Chevron rotates: down when open, right when closed
- [ ] No border-radius on any element (sharp corners)
- [ ] Drop shadow on the accordion container
- [ ] Font: Poppins (loaded via Google Fonts)
- [ ] Page background: #fafafa
- [ ] Footer links to https://www.componentdock.com/
