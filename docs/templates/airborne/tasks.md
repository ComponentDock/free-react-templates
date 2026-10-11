# Airborne — implementation tasks

Recreation of ColorLib "Coming Soon V06" (source slug `comingsoon_06` — one
full-viewport hot-air-balloon photograph under a blue→green gradient wash
(`#009efd` top → `#2af598` bottom, 80% opacity), a wordmark top-left and three
square outlined social buttons top-right, then a two-column band: an uppercase
eyebrow + heavy uppercase headline + eight-card dark-navy FLIP-CLOCK countdown
on the left, and a white 390px "Newsletter" card with two centred grey pill
inputs, a green `#00b26f` pill "Subscribe" button and a spam note on the right).
Spec: `openspec/specs/template-airborne/spec.md`. New name: **airborne** (never
reuse the source slug `comingsoon_06`, the demo title "Coming Soon 6" / "Coming
Soon V06", its PNG wordmark, its photo, or its credit line, in app files).
Design notes: `docs/templates/airborne/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/airborne`
- [ ] Rename package to `@free-react-templates/airborne`; set
      `"homepage": "https://airborne.free.componentdock.com"`
- [ ] `public/CNAME` = `airborne.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/airborne`
      (`grep -c "free-react-templates/airborne" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins (400/700) + Aldrich (400) in
      `index.html`
- [ ] `@theme` tokens in `src/index.css`: wash stops `#009efd` (top) /
      `#2af598` (bottom) + solid `#30bab6` fallback at `opacity 0.8`, brand
      green `#00b26f` + hover `#333333`, clock card `#0d1629`, surface `#fff`,
      card title `#333`, input fill `#f5f5f5`, input text `#555`, placeholder
      `#999999`, note `#999`, focus bloom `rgba(0,178,111,0.5)`, error
      `#c80000`; radii 25 / 10 / 3 / 2 / 35 / 16px; transitions `.4s` (all),
      `.4s` (opacity), `.5s linear` (flip), `.5s ease-in-out` (bloom)

## Sections (component order in `App.tsx`)

- [ ] `ComingSoon.tsx` (page shell) — one `min-h-screen` wrapper with
      `pt-[24px]` and NO side/bottom padding, a background photo
      (`bg-cover bg-center bg-no-repeat`,
      `https://picsum.photos/seed/airborne-bg/1900/900`) plus an overlay layer
      `bg-[linear-gradient(to_bottom,#009efd,#2af598)] bg-[#30bab6] opacity-80`;
      stacks `TopBar` then `BodyBand`; NO navbar, NO footer band
- [ ] `TopBar.tsx` — wrapping `justify-between items-center` row with
      `padding:0 74px 175px 80px` (`pl-[20px] pr-[14px] pb-[50px]` at ≤576px);
      children: `Wordmark` (grows, `mr-[30px]`, `my-[10px]`) then `Socials`
- [ ] `Wordmark.tsx` — original white Poppins-Bold text wordmark link (no
      copied logo asset)
- [ ] `Socials.tsx` — wrapping row (`my-[10px]`) of exactly three
      `36×36px` links, `bg-transparent border-2 border-white rounded-[2px]`,
      22px white lucide `Facebook` / `Twitter` / `Youtube`, `mr-[6px]`,
      `aria-label`s, `transition-all duration-[400ms]`, hover `bg-[#00b26f]`
- [ ] `BodyBand.tsx` — wrapping `justify-around` row with `pr-[200px]`
      (`p-[15px]` at ≤1400px; `flex-col items-center` at ≤1200px); children:
      `LeftColumn` then `NewsletterCard`
- [ ] `Eyebrow.tsx` + `Headline.tsx` — eyebrow Poppins-Regular 30px/1.2 white
      UPPERCASE `pb-[10px]`; headline Poppins-Bold 70px/1.1 white UPPERCASE
      `pb-[45px]` (50px at ≤576px); column wrapper `pt-[34px] pb-[60px]`
      (centred flex column at ≤1200px)
- [ ] `FlipClock.tsx` — wrapping flex `max-w-full mb-[20px]` (centred at
      ≤1200px; `max-w-[240px] mr-[26px]` at ≤576px) rendering FOUR groups of
      TWO `41×54px` `m-[2px] rounded-[3px] bg-[#0d1629]` cards (Aldrich 35px
      white digits, flex-centred; 50px below each card row; no mid seam), a
      `26×54px` divider between groups carrying a white Aldrich 30px `":"`
      (none before the day group) and a caption (`days` / `hrs` / `min` / `sec`
      — Poppins-Regular 12px white UPPERCASE, `w-[90px]`, anchored at
      `left-100% top-100%` with `pt-[16px]`, centred) via a divider component
- [ ] `useCountdown.ts` — 1 s interval toward `now + 35 d + 18 h`; 8
      zero-padded digits (day pair + `hh` + `mm` + `ss`); expose per-card
      previous/current digits so only CHANGED cards re-flip; clear on unmount
- [ ] Flip animation — per-card CSS: active lower half `rotateX(90deg) → 0`
      over `.5s linear` delayed `.5s`, previous upper half
      `rotateX(0) → -90deg` over `.5s linear`, shadow overlays
      (`linear-gradient(to bottom, rgba(0,0,0,0.1), black)` above,
      `linear-gradient(to bottom, black, rgba(0,0,0,0.1))` below) with
      `show .5s linear` / `hide .5s .3s linear`
- [ ] `NewsletterCard.tsx` — `w-[390px] max-w-full bg-white rounded-[10px]
      pt-[50px] px-[45px] pb-[18px]` (`px-[15px]` at ≤576px); title
      Poppins-Bold 30px/1.2 `#333` UPPERCASE centred `pb-[43px]`; form
      (Name well `mb-[10px]`, Email well `mb-[20px]`), Subscribe button, note
      Poppins-Regular 13px/1.5 `#999` centred `pt-[25px] px-[15px]`
- [ ] `Field.tsx` — well `w-full h-[50px] relative`; input filling it with
      `bg-[#f5f5f5] rounded-[25px] px-[20px] text-center` Poppins-Bold 15px/1.2
      `#555` + `#999999` placeholder; focus bloom ring `rounded-[35px]`
      `rgba(0,178,111,0.5)` animating over `.5s ease-in-out` to
      `box-shadow:0 0 80px 30px` with `opacity:0`
- [ ] `SubscribeButton.tsx` — `w-full h-[50px] px-[20px] bg-[#00b26f]
      rounded-[25px]` white Poppins-Bold 15px label "Subscribe",
      `transition-all duration-[400ms]`, hover `bg-[#333333]`
- [ ] React-state validation (non-empty Name, e-mail regex
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`) → white bubble `1px solid #c80000`,
      `rounded-[16px]`, `padding 5px 30px 6px 10px`, `max-w-[70%]`, right 12px,
      vertically centred, Poppins-Bold 12px/1.4 `#c80000`, plus lucide
      `AlertCircle` 16px `#c80000` at right 18px; hidden until an invalid
      submit, then visible on field hover and always at ≤992px; cleared on
      focus; invalid submit never navigates; valid submit shows a React-state
      confirmation
- [ ] `Attribution.tsx` — Poppins-Regular 12–13px `#999` centred line under
      the note inside the card ("More templates at Component Dock") linking
      `https://www.componentdock.com/`

## Tests (Vitest + Testing Library, 100% coverage)

- [ ] Clock math (target `now + 35 d + 18 h`, 1 s tick advance, 8 digits all
      zero-padded, per-card changed-digit diffing, interval cleanup)
- [ ] Flip replay: only changed cards re-animate (assert the animation class /
      re-render on change)
- [ ] Clock geometry: 8 cards, no colon before the day group, four captions
      with the reference strings, dividers rendered between groups
- [ ] Form validation (empty Name, malformed e-mail, valid submit; bubble
      appears and clears on focus; visibility rule; no navigation on invalid;
      confirmation on valid)
- [ ] Eyebrow, headline, card title, note, three social `aria-label`s, the
      button label and the attribution render
- [ ] Attribution links Component Dock; no source-brand strings anywhere
- [ ] `scripts/verify-app.sh airborne` passes (typecheck + lint + tests + build)

## Notes

- This is a single-screen page: NO navbar, NO scrolling sections, NO footer
  band. The photograph + wash IS the design; the only chrome is the clock, the
  card and the social buttons.
- The wash paints OVER the photo (`::before`, `z-index:-1`, `opacity:0.8`) —
  render it as an absolutely-positioned overlay above the background image and
  below the content, not as a replacement for the photo.
- The reference photo (`images/bg01.jpg`) is a real hot-air-balloon sunrise
  shot — NEVER copy it; use `picsum.photos/seed/airborne-bg/1900/900`.
- This is the family's only FLIP CLOCK (siblings use plain number tiles). Keep
  the per-card before/active half structure and the `.5s linear` rotateX flip
  with its `show`/`hide` shadow gradients; it is the template's signature.
- Caption alignment is a deliberate quirk: the caption block is anchored at the
  divider's `left:100%; top:100%`, so `DAYS` / `HRS` / `MIN` / `SEC` sit to the
  RIGHT of their group, level with the colon — do not "fix" it to centre under
  the group.
- The source e-mail input is `type="text"` validated by name; keep a proper
  `type="email"`-equivalent a11y story (`aria-invalid`, `aria-describedby`) in
  the recreation while preserving the same regex behaviour.
- The Component Dock attribution is the ONLY addition vs the reference (the
  source has no footer credit) — keep it small and inside the card.
- The reference is framework-free (self-contained CSS + one plain-JS file); the
  recreation is Tailwind 4 + React state only. Never copy the source
  `style.css` (including its `all: revert` reboot guard), its class names, its
  woff2 fonts, the FontAwesome subset, the logo PNG, the photo, or the favicon.
- Behaviours to keep (both, re-implemented in React — no jQuery, no framework,
  no CDN): form validation and the per-second flip-clock countdown.
- Do not confuse this with its siblings in the same ColorLib series:
  `debut` (`comingsoon_01`) is a diagonal split (white form panel + photo panel,
  2×2 countdown, green `#57b846` accent); `premiere` (`comingsoon_02`) is a
  single centred column over a cross-fading photo slideshow with four 155px
  translucent circles and pill controls (`#846add`); `incoming`
  (`comingsoon_03`) is a translucent white card on a light photo with four dark
  rectangular tiles; `eve` (`comingsoon_04`) is the purple→violet diagonal
  gradient with four white rounded SQUARE tiles and a subscribe modal; `advent`
  (`comingsoon_05`) is the warm pink→coral gradient with a top-pinned countdown
  BAR and an inline form. Airborne is the washed-photo, TWO-COLUMN variant with
  a FLIP CLOCK and a white newsletter card — the only one of the six with
  photography, social buttons in the top bar, and flip cards.
