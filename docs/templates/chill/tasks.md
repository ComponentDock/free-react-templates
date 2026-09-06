# Chill (ColorLib Modal 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-chill`. Recreation name: **Chill** (NEW name —
> the ColorLib source keeps its name "Modal V03").

## Source mapping

- **ColorLib item:** "Modal 03" (TEMPLATES.md line 804; section
  "## Bootstrap Modals (20)" at line 800).
- **Source URL:** https://colorlib.com/wp/template/modal-03/
- **Preview URL — REACHABLE (verified 2026-09-06):**
  **`https://preview.colorlib.com/theme/bootstrap/modal-03/`**
  (HTTP 200, 6,137 bytes, `<title>Modal 03</title>`).
  Note the `/bootstrap/` path segment — the naive
  `https://preview.colorlib.com/theme/modal-03/` returns 404.
- **Preview CSS:** `css/style.css` (223,744 bytes — Bootstrap 4.3.1 base
  + custom template styles starting at line 8136). Custom tokens:
  Lato (300/400/700) + Pacifico (400) via Cloudflare CDN font-face.
  Scripts: jquery.min.js, popper.js, bootstrap.min.js, main.js.
  Icons: ionicons.min.css + flaticon.css (snowflake glyphs).

## Reference research (done — do not redo)

### Screenshot (`modal-03.jpg`, 1200×972 AVIF)

ColorLib page shows the template as a Bootstrap modal popup. The modal has:
- Left column (~40% width): solid teal `#39bdc8` background, large decorative
  snowflake icon (120px, top-right, 30% opacity white), "WINTER" subheading
  (14px uppercase, black, letter-spacing), "Sale" in Pacifico cursive
  (105px, black, with white snowflake icon overlaid and white underline bar),
  giant "40" (130px bold white) with sup "%" and sub "OFF", "TO ALL
  COLORLIB PRODUCTS" uppercase text.
- Right column (~60% width): background image (winter scene / dark landscape)
  with a teal "Shop now" button at the bottom.
- Close button: X at top-right, 40×40px, semi-transparent black overlay.
- Sharp corners (no border-radius on modal).
- Box shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`.
- Page behind modal: white background, "Modal 03" title, "Launch Modal 03"
  button (teal `#39bdc8`, rounded).

### Live preview DOM structure

```
<body>
  <section class="ftco-section">          <!-- white page background -->
    <div class="container">
      <div class="row justify-content-center js-fullheight">
        <div class="col-md-6 text-center d-flex align-items-center">
          <div class="wrap w-100">
            <h2 class="mb-2">Modal 03</h2>
            <button class="btn btn-primary py-3 px-4"
                    data-toggle="modal" data-target="#exampleModalCenter">
              Launch Modal 03
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="modal fade" id="exampleModalCenter">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close">X</button>       <!-- ion-ios-close -->
        </div>
        <div class="row no-gutters">
          <div class="col-md-5 d-flex">
            <div class="modal-body p-5 color-1 d-flex">
              <span class="icon-2 flaticon-snowflake"></span>  <!-- 120px bg -->
              <div class="w-100 text text-center">
                <span class="subheading">Winter</span>
                <h3 class="sale">
                  Sale
                  <span class="icon flaticon-snowflake"></span>  <!-- 60px inline -->
                </h3>
                <h2><span>40</span><sup>%</sup><sub>off</sub></h2>
                <p class="upper">To all colorlib products</p>
              </div>
            </div>
          </div>
          <div class="col-md-7 d-flex">
            <div class="modal-body p-5 img d-flex align-items-center"
                 style="background-image: url(images/bg-1.jpg);">
              <div class="text w-100">
                <a href="#" class="btn btn-primary d-block py-3">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
```

## Tasks — implementation outline

### Phase 1: Scaffolding
1. Copy simplest existing app (e.g. `apps/aurora`) to `apps/chill/`
2. Rename package to `@free-react-templates/chill`
3. Update `public/CNAME` → `chill.free.componentdock.com`
4. Update `vite.config.ts` with `injectUiSource()` helper
5. Run `npm install` at repo root to register workspace

### Phase 2: Component structure (section order)
1. `src/App.tsx` — compose ModalPage + SaleModal
2. `src/components/ModalPage.tsx` — white page with title + launch button
3. `src/components/SaleModal.tsx` — the modal dialog (centered, 700px)
4. `src/components/ModalLeftPanel.tsx` — teal left column (sale content)
5. `src/components/ModalRightPanel.tsx` — image right column (CTA)

### Phase 3: Design fidelity
- Brand color `#39bdc8` in `@theme` as `--color-brand`
- Fonts: Lato (body) + Pacifico (decorative) via Google Fonts `<link>`
- Modal: sharp corners (no rounded), shadow, max-width 700px
- Close button: 40×40px, absolute top-right, rgba(0,0,0,0.1) bg
- Snowflake icons: lucide-react Snowflake (120px bg, 60px inline)
- "Sale" heading: Pacifico, 105px, black, with white underline bar
- Discount number: 130px bold white, sup/sub for %/off
- Subheading: 14px uppercase, letter-spacing 1px, black
- CTA button: uppercase, letter-spacing 1px, 14px, teal border
- Background image: picsum.photos placeholder (seed: chill-1, 800×600)
- Footer: links to https://www.componentdock.com/

### Phase 4: Tests (TDD — write FIRST)
- ModalPage: renders title + launch button
- SaleModal: opens on button click, closes on X/backdrop/Escape
- ModalLeftPanel: renders sale content (subheading, sale text, discount)
- ModalRightPanel: renders background image + CTA button
- Accessibility: ARIA attributes, focus trap, keyboard navigation
- Design tokens: brand color, font families, modal dimensions

### Phase 5: Verification
- Run `scripts/verify-app.sh chill` (typecheck + lint + tests + build)
- Confirm 100% coverage
- Confirm no ColorLib references in app code
- Confirm footer links to Component Dock
- Confirm CNAME + homepage correct
