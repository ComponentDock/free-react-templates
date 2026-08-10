# Vita (ColorLib Lifeleck) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vita`.

## Design notes (replication findings)

- **Original:** ColorLib "Lifeleck" — clean serif lifestyle blog template
  (source: https://colorlib.com/wp/template/lifeleck/). TEMPLATES.md has TWO
  copies (lines 269 Blog + 439 Bootstrap — duplicate rows; one recreation
  covers both; implementer marks BOTH `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/lifeleck/ (HTTP
  200, 28.9 KB; title "lifeleck BLOG || HOME"). Master stylesheet
  `css/style.css` (153 KB) fully extracted; libs: bootstrap, owl.carousel,
  animate, themify-icons, liner_icon, search.css.
- **Screenshot:** `lifeleck-free-template.jpg` (1200×946, viewed in browser)
  — white minimalist magazine layout: serif italic "Lifeleck" logo + centered
  nav (Home, Archive, Category, Pages, Contact) + search/social icons right;
  three tall banner photo cards with white text cards overlapping bottom
  (orange serif category "Fashion / Life Style" + date line); subscribe bar
  with orange rectangular button; blog grid; footer cut off in shot. Demo
  brands itself "Lifeleck"; recreation uses the NEW name **Vita** (Latin for
  "life").
- **Visual design (from DOM + CSS tokens + screenshot):** clean serif
  magazine aesthetic on white. Brand orange #fc4600 pops on category tags,
  buttons, and the sidebar underline. Serif pairing: Lora body + Cardo
  headings. All post text is centered. Section padding is generous
  (140px vertical). Footer is a light gray #f7f7f7 with 4 columns.
- **Structure (1:1, section order):**
  1. `header.main_menu` — `.container > .row.align-items-center >
.col-lg-12`: `nav.navbar` with `.navbar-brand` (serif italic logo,
     brand "Lifeleck" → "Vita") + centered `.main-menu-item` ul links: Home,
     Archive, Category, Pages (dropdown), Contact (18px Cardo #2a2a2a,
     capitalize; hover orange) + `.header_social_icon` right (search icon +
     4 social icons).
  2. `section.banner_post` — `.container-fluid > .row.justify-content-between`:
     THREE `.banner_post_1.banner_post_bg_1/2/3` (bg-image cover) each with
     `.banner_post_iner.text-center` (white card, padding 45px, absolute
     bottom -150px, left/right 0, max-width 490px, margin auto): `p`
     category tag (11px uppercase #fc4600 weight 600) + `h2` headline
     (Cardo 600 #2a2a2a, line-height 1.333) + `p` "Posted on April 15,
     2019" (13px #8a8a8a, margin-top 15px).
  3. `div.subscribe_form.padding_top.margin_top` — `.container > .col-lg-12`
     > `.subscribe_form_iner` (padding 55px, `border: 8px solid #fbf2ee`):
     > `form-row` = `col-lg-3` `h3` "Subscribe Our Newsletter" (weight 700) +
     > 3 × `col-12 col-sm-6 col-md-4 col-lg-3` (inputs + `a.btn_1` "Subscribe").
  4. `section.all_post.section_padding` — `.container > .row`:
     - `div.col-lg-8`: `div.col-lg-12` feature post
       (`.single_post.post_1.feature_post` — img + `.single_post_text.text-center`:
       `a h5` category #fc4600 + `h2` 30px + date `p`) + SEVEN
       `div.col-lg-6.col-sm-6` posts (same, `h2` 24px) + `.page_pageniation`
       (Previous / 1 2 3 / Next; `.page-link` 20px #2a2a2a border 0).
     - `div.col-lg-4` sidebar: search widget (input + `.btn_1` "search"),
       Categories (h3 with 60×2px #fc4600 underline + 6 items w/ counts:
       Culture 15, Creative Design 15, Illustration 15, Production 15,
       Mangement 15, Branding 15), Popular Feeds (3 `.single_catagory_post`
       thumb + title + "By Michal / March 30"), social share icons
       (`.social_share_icon.tags` — facebook, twitter-alt, pinterest,
       instagram).
  5. `section.social_connect_part` — full-width flex row of SIX
     `.single-social_connect` square image tiles (instagram_1..6) with hover
     `.social_connect_overlay` (icon link appears on hover).
  6. `footer.footer-area` (bg #f7f7f7, padding 130px 0 25px) — four
     `div.col-xl-3.col-lg-6.col-sm-6.single-footer-widget`: About us (text
     #7b838a), Contact Info (address / phone +8880 44338899 / email
     info@colorlib.com), Important Link (WHMCS-bridge, Search Domain, My
     Account, Shopping Cart, Our Main Shop), Newsletter (`div.form-wrap`
     input + button). Footer h4: 20px #2a2a2a weight 700 capitalize.
     `.copyright_text` row: `.copyright_part` ("Copyright © 2019 All rights
     reserved | This template is Made with ♥ by Colorlib") +
     `.footer-social` (facebook, twitter, instagram, skype).
- **Design tokens (from css/style.css + DOM):**
  - Brand orange **#fc4600** (btn_1 bg, category tags, sidebar heading
    underline, post hover); dark **#2a2a2a** (headings, nav, btn hover,
    pagination); body p **#646464/#888888** (Lora 15px, line-height 1.929);
    **#8a8a8a** (banner date 13px); **#7b838a** (footer text); **#fbf2ee**
    (subscribe 8px border); **#f7f7f7** (footer bg); white page bg.
  - Fonts: **Lora** body (400/700) + **Cardo** headings (400/700) via
    Google Fonts.
  - Buttons `.btn_1`: padding 14.5px 58px, 14px white, bg #fc4600,
    capitalize, NO radius, hover #2a2a2a, transition .4s.
  - Nav links 18px Cardo; section_padding 140px 0; sidebar h3 24px weight
    600; footer h4 20px weight 700; pagination 20px.
- **Recreation decisions:** seeded picsum placeholders
  (`picsum.photos/seed/vita-<n>/<w>/<h>` — 3 banner + 8 posts + 6 social
  tiles = 17 seeds); lucide-react icons (search, facebook, twitter,
  pinterest, instagram, skype); Lora + Cardo via Google Fonts `<link>`;
  forms (newsletter + search) with zod validation; static pagination
  (Previous 1 2 3 Next); mobile nav toggle with aria (Bootstrap collapse
  equivalent); no carousel needed.

## Implementation tasks

- [ ] Scaffold `apps/vita` (copy simplest existing app; package
      `@free-react-templates/vita`; register in package-lock via npm
      workspace install)
- [ ] `@theme` tokens: brand orange `--color-brand` (#fc4600), dark
      (#2a2a2a), grays (#646464, #888888, #8a8a8a, #7b838a), #fbf2ee,
      footer bg #f7f7f7
- [ ] Google Fonts `<link>`: Lora + Cardo in `index.html`
- [ ] Header: serif italic logo "Vita", centered nav (Home, Archive,
      Category, Pages, Contact), search + 4 social icons right; mobile
      collapse toggle
- [ ] Banner cards: 3 side-by-side bg images, white overlapping card
      (orange uppercase category tag, Cardo headline, date line)
- [ ] Subscribe form: 8px #fbf2ee border box, "Subscribe Our Newsletter"
      heading, email input + orange Subscribe button, zod validation
- [ ] All-posts: feature post (30px h2) + 7 grid posts (24px h2), centered
      text, pagination (Previous 1 2 3 Next)
- [ ] Sidebar: search widget, Categories with counts, Popular Feeds ×3,
      social share icons
- [ ] Social strip: 6 square tiles with hover overlay icon
- [ ] Footer: 4 widget columns + copyright row with social icons
- [ ] Tests (Vitest + Testing Library, 100% coverage): header/nav render,
      banner cards, subscribe validation, feature + grid posts, pagination,
      sidebar widgets, social tiles, footer
- [ ] `scripts/verify-app.sh vita`: typecheck + lint + vitest 100% + build
- [ ] Ship via PR `feat/template-vita`, merge immediately
- [ ] After merge: `[x]` on BOTH dup rows (lines 269 AND 439) in
      TEMPLATES.md + surge URL; `npm run readme:status`; deploy check
      (curl surge URL)

## Fidelity watch-outs

- The banner card text block OVERLAPS the photo's bottom edge (absolute,
  bottom -150px, centered, max-width 490px, white) — this overlap is the
  section's signature look; don't flatten it into a caption below the image.
- Category tags: 11px uppercase orange, weight 600 (banner) / h5 orange
  (posts) — NOT chips, plain text.
- Buttons are rectangular (no border radius) with generous padding
  (14.5px 58px); hover flips to dark #2a2a2a.
- All post text is centered (`.single_post_text.text-center`), including
  the feature post.
- Sidebar heading underline: short 60px orange bar, not full-width.
- Footer newsletter + search both use the same orange `.btn_1` treatment.
- Source pagination has NO active state in the index DOM — plain links.
- Demo copy is placeholder lorem — paraphrase into lifestyle/fashion blog
  copy; keep the same kinds of content.
- Grid is 8 posts total: 1 feature (full-width) + 7 (2-col).
