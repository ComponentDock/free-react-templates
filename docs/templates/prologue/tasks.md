# Prologue — implementation tasks

Recreation of ColorLib "Coming Soon V14" (source slug `comingsoon_14` — the
coming-soon family's **light split-screen** page: one `min-height:100vh` flex row
at `align-items:stretch` split into an opaque WHITE **37%** left panel and a
**63%** right panel that is ONE static `1200×900` mountain/forest photograph
(`cover`/`center`, no slideshow), with ONE `rgba(0,0,0,0.5)` scrim as the row's
`::after` at `z-index:-1` that is **fully occluded** by the two opaque panels (an
invisible wash — verified pixel-exact). The white panel is a
`justify-content:space-between` column at `padding:37px 50px 52px 70px` with three
bands: a 35×43 `#333` monogram mark top-left; a hero block
(`padding:100px 0 90px 48px`, left padding 0 at ≤768px) holding a **60px
`PlayfairDisplay-Regular`** uppercase `#333` "Coming Soon" (60px at every width —
the source's ≤576px rule is a no-op), a Poppins-Regular 24px `#999` "Follow us
for update now!" line 46px below, and a **650px-wide (`max-width:calc(100% +
110px)`, 80px tall, `#ffe151` yellow, `border-radius:0`, no border,
`0 10px 15px rgba(0,0,0,0.1)` shadow → 0.2 on focus) subscribe bar** whose field is
`padding:0 80px 0 172px` Poppins-Medium 15px `#333` with a `#666` placeholder,
whose left end is a 172×80 transparent label tab decorated ONLY by
`border-left:5px solid #333` (source caption `Subcribe Now:`), and whose right end
is an **80×80** transparent arrow button (30px `#333` arrow, hover
`translateX(10px)`) — the bar overhangs the panel by 60px so part of the yellow
bar and the WHOLE arrow button sit on the photograph at ≥1200px; and a bottom band
with the uppercase `FOLLOW US` caption (Poppins 16px `#999`, `pr-[40px]`) plus
THREE 36×36 **1px `#e6e6e6` hairline rings** with 16px `#666` glyphs (hover `#333`
fill + white glyphs). Validation is the family's bordered bubble (white,
`1px solid #c80000`, `border-radius:0`, `padding:4px 25px 4px 10px`, Poppins-Medium
14px/1.4 `#c80000`, vertically centred, **`right:72px`**, glyph at
**`right:78px`**), hover-revealed above 992px and always visible at ≤992px.
Responsive: 37/63 → **60/40 at ≤1200px** → **stacked at ≤992px** (white panel full
width with 15px side padding, photo full width at `height:500px`, the page now
scrolls) → hero `padding-left:0` at ≤768px → at ≤576px the field becomes
`0 60px 0 25px`, the label tab collapses to a 5px black tick (caption hidden) and
the arrow button narrows to 60px. There is **no navbar, no footer band, no second
section and no scrolling** at desktop (`scrollHeight == clientHeight` at
1440×900).

Spec: `openspec/specs/template-prologue/spec.md`. New name: **prologue** (never
reuse the source slug `comingsoon_14`, the demo title "Coming Soon 14", its
`bg01.jpg` photograph, its 35×43 `logo.png` mark, its `fonts/*.woff2`, its
inlined fa/zmdi SVG paths, and never write its "Coming Soon" /
"Follow us for update now!" / "Email Address" / "Subcribe Now:" /
"Email is required: ex@abc.xyz" strings into app files).
Design notes: `docs/templates/prologue/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/prologue`
- [ ] Rename package to `@free-react-templates/prologue`; set
      `"homepage": "https://prologue.free.componentdock.com"`
- [ ] `public/CNAME` = `prologue.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/prologue`
      (`grep -c "free-react-templates/prologue" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Playfair Display 400;500** (the
      source's heading face) + **Poppins 400;500** (source Poppins-Regular /
      Poppins-Medium). Every source face IS on Google Fonts — no substitution
      needed. No icon font: icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: accent `#ffe151` (the subscribe bar —
      the only brand colour); ink `#333` (heading, arrow glyph, tab caption);
      muted `#999` (sub-line, social caption); `#666` (social glyphs +
      placeholder); hairline `#e6e6e6` (social rings); `#fff` (panel); validation
      red `#c80000`; body text `#666666`; shadow `rgba(0,0,0,0.1)` → `0.2` on
      focus; scrim `rgba(0,0,0,0.5)` (occluded); radii `0px` (bar, field, tab,
      bubble) and `50%` (social circles); transitions `all .4s` (field, arrow,
      circles) and `opacity .4s` (bubble). NO gradient token, NO dark-mode
      treatment, NO second accent

## Structure (component order in `App.tsx`)

- [ ] `Prologue.tsx` (page shell) — `min-h-screen w-full flex flex-wrap
    items-stretch relative z-[1]` holding `Scrim` then `ContentPanel` and
      `PhotoPanel` as its only two rendered children; NO navbar, NO footer band,
      NO second section, no scroll at 1440×900
- [ ] `Scrim.tsx` — ONE `absolute inset-0 -z-10 bg-black/50` element. It must
      paint BEHIND both panels (the white panel and the photo panel both occlude
      it) so the photograph is NOT darkened — the reference render is
      pixel-identical to the raw `bg01.jpg`; no gradient, no second overlay
- [ ] `ContentPanel.tsx` — `w-[37%] max-[1200px]:w-[60%] max-[992px]:w-full
    bg-white flex flex-col justify-between pt-[37px] px-[50px] pb-[52px]
    pl-[70px] max-[992px]:px-[15px]` with exactly THREE children in order:
      `BrandMark` → `HeroBlock` → `SocialBand`
- [ ] `PhotoPanel.tsx` — `w-[63%] max-[1200px]:w-[40%] max-[992px]:w-full
    max-[992px]:h-[500px] bg-cover bg-center bg-no-repeat` with
      `style={{backgroundImage:'url(https://picsum.photos/seed/prologue-hollow/1200/900)'}}`,
      an EMPTY element (no children, no caption, no overlay); NOT a slideshow and
      never the source `bg01.jpg`
- [ ] `BrandMark.tsx` — `block` wrapper (NO `flex-1`/`flex-grow` — unlike several
      siblings) holding the app's OWN wordmark/monogram as JSX or inline SVG,
      `#333`, at most 43px tall, `max-w-full`; never the source's 35×43 PNG or its
      glyph shapes
- [ ] `HeroBlock.tsx` — `w-full pt-[100px] pb-[90px] pl-[48px] max-[768px]:pl-0`
      holding `Heading` → `SubLine` → `SubscribeBar`
- [ ] `Heading.tsx` — `h3` Playfair Display `text-[60px] leading-[1.1]
    font-medium text-[#333] uppercase pb-[34px]`, no `letter-spacing`, NO
      italic, NO weight-900, NO size change at any breakpoint (the reference is
      60px at 1440/1180/900/765/600/400); own copy, two lines in a 365px box at
      1440×900
- [ ] `SubLine.tsx` — Poppins 400 `text-[24px] leading-[1.2] text-[#999]
    pb-[46px]`; own copy of the same kind ("follow us for updates")
- [ ] `SubscribeBar.tsx` — form `max-w-full my-[10px]` wrapping a
      `h-[80px] w-[650px] max-w-[calc(100%+110px)] relative
    max-[992px]:max-w-full` container holding `EmailField` + `SubscribeLabel` +
      `SubmitArrow`. The `calc(100% + 110px)` is what makes the bar overhang the
      panel by 60px at ≥1200px — do not replace it with `w-full` or a bare fixed
      width
- [ ] `EmailField.tsx` — `block h-full w-full pt-0 pr-[80px] pb-0 pl-[172px]
    max-[576px]:pr-[60px] max-[576px]:pl-[25px] rounded-none border-0
    bg-[#ffe151] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]
    focus:shadow-[0_10px_15px_0_rgba(0,0,0,0.2)]`, Poppins 500
      `text-[15px] leading-[1.2] text-[#333]`, `placeholder:text-[#666]`, own
      placeholder copy; validated as an e-mail even though the source field is
      `type="text"`
- [ ] `SubscribeLabel.tsx` — absolute `left-0 top-0 h-[80px] w-[172px]
    max-[576px]:w-[5px] flex items-center justify-center` with
      `border-l-[5px] border-l-[#333]`, transparent fill, NO radius, NO other
      border, Poppins 500 15px `#333` caption; the caption is hidden at ≤576px
      (`sr-only`/conditional) leaving the bare black tick; own caption copy
      (write "Subscribe Now:" correctly — the source misspells it)
- [ ] `SubmitArrow.tsx` — absolute `right-0 top-0 h-[80px] w-[80px]
    max-[576px]:w-[60px] flex items-center justify-center` button, NO
      fill/border/radius, a 30px `#333` lucide long-arrow
      (`group-hover:translate-x-[10px] transition-transform duration-[400ms]`),
      `aria-label` added (the source has none); it submits the form and never
      navigates or issues a network request for invalid input
- [ ] `SocialBand.tsx` — `flex flex-wrap items-center` with a caption span
      (Poppins 400 `text-[16px] leading-[1.2] text-[#999] uppercase pr-[40px]`,
      own copy) followed by three `SocialLink`s
- [ ] `SocialLink.tsx` — `size-9` (36×36) `rounded-full border border-[#e6e6e6]
    bg-transparent text-[#666] text-[16px] flex items-center justify-center
    my-[5px] mr-[15px] transition-all duration-[400ms]`, hover
      `bg-[#333] text-white`; lucide Facebook / Twitter / Youtube glyphs; each with
      an `aria-label` (the source's links are bare `href="#"`)
- [ ] `ValidationBubble.tsx` — white box, `border border-[#c80000] rounded-none
    py-[4px] pl-[10px] pr-[25px] max-w-[70%]`, vertically centred,
      `right-[72px]`, Poppins 500 14px/1.4 `#c80000`, `pointer-events-none`,
      opacity transition `400ms`; a 14px `#c80000` warning glyph at
      `right-[78px]`; hidden until hover above 992px and always visible at ≤992px
- [ ] `useEmailValidation.ts` — trimmed value must match
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`; invalid submit sets the field's error
      state and prevents submission (no network call, no navigation); focusing the
      field clears the error
- [ ] `Attribution.tsx` — a small low-emphasis line linking
      `https://www.componentdock.com/` branded "Component Dock", pinned
      absolutely inside the white panel (e.g. `absolute bottom-1 inset-x-0
    text-center text-[11px] text-[#999]`) so the three-band `space-between`
      geometry is untouched — the only addition vs the reference

## Do NOT

- [ ] Do NOT use a 50/50 split (that is the V12 sibling) — it is 37/63, and do NOT
      skip the two breakpoints (60/40 at ≤1200px, stacked at ≤992px with the photo
      at exactly `height:500px`)
- [ ] Do NOT make the photo a slideshow or an animated cross-fade — this slug has
      ONE static `background-image` and its `snippet.js` has no slideshow code
- [ ] Do NOT italicise the heading, bump it to weight 900 or add a ≤576px size
      change; it is upright Playfair Display 60px uppercase at every width (the
      source's `respon3` rule merely re-declares 60px)
- [ ] Do NOT turn the subscribe bar into a white pill, a bordered well or a bare
      underline — it is a square `#ffe151` bar with a shadow and NO radius/border
- [ ] Do NOT drop the `max-w-[calc(100%+110px)]` overhang or clip it with
      `overflow-hidden` — the bar crossing the seam onto the photograph (60px,
      including the whole 80×80 arrow button) is the design
- [ ] Do NOT drop the `5px solid #333` left border on the label tab, and at ≤576px
      do NOT hide the tab entirely — it collapses to a 5px black tick with the
      caption hidden while the field padding becomes `0 60px 0 25px`
- [ ] Do NOT move the bubble's offsets to the family defaults — this slug pins it
      `right-[72px]` with the glyph at `right-[78px]` (V12 uses 82/88, V13 32/38)
- [ ] Do NOT switch the socials to filled discs or translucent white rings — they
      are `1px #e6e6e6` hairline rings with 16px `#666` glyphs, hover `#333` fill +
      white glyph, behind an uppercase caption
- [ ] Do NOT render the scrim above the photograph — it is occluded by both panels
      in the reference (the photo must not be darkened) and there is no gradient
- [ ] Do NOT add a navbar, a countdown, a modal, a second section or a footer band;
      at desktop the page is exactly one viewport
- [ ] Do NOT copy the source's `bg01.jpg`, its 35×43 `logo.png`, its favicon, its
      woff2 files, its `css/style.css` (including the `all: revert` guard, the
      Bootstrap reboot and the FontAwesome subset) or its inlined fa/zmdi SVG paths
- [ ] Do NOT reference ColorLib, "Colorlib", "Coming Soon 14", `comingsoon_14`,
      "PlayfairDisplay-Regular", "Poppins-Medium" or the source's copy strings
      anywhere in `apps/prologue` (comments included — record tokens as design
      notes, not provenance)

## Verification

- [ ] `openspec validate template-prologue --type spec` passes
- [ ] `scripts/verify-app.sh prologue` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build (~2–3 min)
- [ ] Visual check against the reference screenshot (`coming-soon-14.jpg`,
      1200×972): hard vertical seam at ~38%; flat white panel with a dark monogram
      top-left, dark uppercase serif `COMING` / `SOON` stacked lower-middle, grey
      update line, mustard-yellow square bar with a black left tick and
      `Subscribe Now:` caption crossing the seam onto the photo with the arrow
      over the photo, uppercase `FOLLOW US` caption + three hairline-ring social
      icons bottom-left; cool grey-green mountain/conifer photograph right with NO
      darkening wash
- [ ] Geometry at 1440×900: no scroll (900/900); left panel 533 wide, photo 907;
      mark at (70,37); bar `118→593` while the seam is at 533 (60px overhang);
      arrow button `513→593`; social band ending at y=848
- [ ] Responsive: at 1180px the split is 60/40 and the bar is still 650px wide
      (again 60px past the seam); at 900/765/600px the panels STACK (photo 500px
      tall below, page scrolls, bar ≤ content width so no overflow); at ≤768px the
      hero `padding-left` is 0; at ≤576px the field is `0 60px 0 25px`, the tab is
      5px with its caption hidden and the button is 60px wide; the heading is 60px
      at every width
- [ ] Validation: an empty field and `foo@bar` both show the bubble and block
      submit; `name@example.com` submits with no error state and no network call;
      focusing the field clears the error; the bubble is hover-revealed above 992px
      and always visible at ≤992px
- [ ] `public/CNAME` = `prologue.free.componentdock.com`; `homepage` matches;
      lockfile registers the workspace
- [ ] PR description includes: source template (ColorLib Coming Soon V14), preview
      URL (`https://preview.colorlib.com/theme/comingsoon_14/` → HTTP 404 →
      source-zip fallback), the design tokens used (`#ffe151` accent, `#333` ink,
      `#999`/`#666` greys, `#e6e6e6` rings, `#fff` panel, `rgba(0,0,0,0.1)`/`0.2`
      shadow, `rgba(0,0,0,0.5)` occluded scrim, `#c80000` validation, Playfair
      Display 60px + Poppins 15/16/24px, the 37/63 → 60/40 → stacked ratios, the
      `calc(100% + 110px)` overhang, the 5px tab rule, the 80×80 arrow, the 72/78px
      bubble offsets) and what differs (new name, picsum placeholder photo, own
      wordmark/copy — including the source's misspelled caption corrected, lucide
      icons, an added `aria-label` on the arrow button, the Component Dock
      attribution line)
