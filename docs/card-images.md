# Card images — the TEMPLATES.md screenshot layer, measured

Every row in `TEMPLATES.md` ends in the same citation:

```
- [x] **Modal 02** · [splitform](https://splitform.free.componentdock.com) — [colorlib](https://colorlib.com/wp/template/modal-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/modal-02.jpg)
```

That picture is two artefacts at once:

1. **the prep's visual reference** — `docs/replication.md` names the screenshot as
   reference source #2, the only design evidence left when the live preview is
   down, re-skinned or reassigned to a sibling (`theme/yummy/` → the `yummy-2`
   rebuild, `-24w`); and
2. **the row's card image** — what the marketplace renders for that listing.

Sixty-five audit axes read the row's grammar, its marker, its deploy target, its
spec's tokens, its app's palette and its sibling claims. None had ever fetched
the picture. This is that census.

Tooling: `scripts/verify-card-image.py` (read-only; offline by default,
`--network` to probe), `scripts/verify-card-image-controls.py` (18 controls,
4 GATE), `scripts/fix-card-image.py` (the two mechanical repairs below).

## Measured 2026-10-25 (main `dccbe9f5e`)

Rows read: **2,857 rows / 1,646 slugs** (the multiplicity `-25a` sized). Row
census is offline and takes under a second; the network pass probes every
distinct URL once (a slug's repeat rows reuse its image) and took **13 s** at
12 threads.

| bucket | rows before | rows after |
| --- | ---: | ---: |
| `PRESENT` — cited as `![preview](…)` | 2,851 | **2,857** |
| `NONSTANDARD` — cited as a plain `[preview](…)` link | 2 | 0 |
| `NO-IMAGE` — no uploads URL at all | **4** | **0** |
| `DEAD` — status ≠ 200 | 0 | 0 |
| `NOT-IMAGE` — 200 but not `image/*` | 0 | 0 |
| `UNREACHABLE` — transport error (note, not a verdict) | 0 | 0 |

Network facts on the 1,643 distinct URLs (pre-repair):

* **every one answers HTTP 200** — no dead card image, no WAF page behind a
  `.jpg` name; the `-23b` trap (a 403/429 read as the host's verdict) does not
  fire here, and the probe was 1,643 GETs, not the 3,218-item sweep that tripped
  Cloudflare on the preview host.
* **`.jpg` is not the format**: `image/avif` 1,336 · `image/jpeg` 307. A prep
  that curls the row's image and hands the file to a vision tool gets
  "not a recognized image" on 81 % of them — convert first (`PIL` or `ffmpeg`,
  see `docs/replication.md`).
* **no URL is shared by two different slugs** (0): the 775 multi-row slugs repeat
  their own design's image on every row (`-25a`), which is the listing habit, not
  a copy/paste that would put one design on another design's card.
* after the repair, **distinct images = 1,646 = distinct slugs**: one image per
  design, exactly.

## The defect class and its repair

`NO-IMAGE` is the one bucket that is a real prep defect: for those slugs
`docs/replication.md`'s source #2 does not exist, so the prep had no picture to
analyse and the row has no card image.

| line | slug | repair (the post's own `og:image`, 200 `image/avif`) |
| ---: | --- | --- |
| 804 | `modal-03` | `…/sites/2/modal-03.jpg` (32,336 B) |
| 1160, 2562 | `scenic` | `…/sites/2/scenic-free-template.jpg` (34,795 B) |
| 2634 | `colorlib-regform-18` | `…/sites/2/colorlib-reg-form-18.jpg` (24,952 B) |

`fix-card-image.py` derives the candidate from
`https://colorlib.com/wp/template/<slug>/`'s `og:image` and only accepts it when
it is an `…/wp-content/uploads/` URL that answers 200 with an `image/*`
content-type — a slug with no usable candidate is reported, never guessed. Two
`listed2` rows cited their image as `[preview](…)`; the same run normalised them
to `![preview](…)`. Nothing else is touched (no marker, no app link, no
ordering), and a second run is a **byte-level no-op** (verified: identical
`sha256sum`).

`scenic`'s post embeds `arcwork` thumbnails in its body gallery — the `og:image`
is still the authoritative card for the `scenic` post, which is why the repair
uses `og:image` and not "a `.jpg` found on the page".

## Re-running

```bash
python3 scripts/verify-card-image.py              # offline row census, <1 s
python3 scripts/verify-card-image.py --network    # + probe all 1,646 URLs, ~13 s
python3 scripts/verify-card-image.py --strict     # exit 1 on flags (CI-able)
python3 scripts/fix-card-image.py --dry-run       # show the repairs
```

Do not probe the *preview host* in a wide sweep from the same run: the 3,218-item
sweep of 2026-10-13b made `preview.colorlib.com` answer 403 for a while. The
`colorlib.com/wp/wp-content/uploads/` CDN served 1,643 sequential-thread probes
without complaint.

## Scope note

This axis reads the row's URL and the host's response. It does **not** decide
whether the picture depicts that design — that is a vision judgement, and the
775 multi-row slugs are guaranteed to carry one image for two listings by
construction (`-25a`). The R2 thumbnail set
(`componentdock-screenshots`, `<slug>/hero|thumb|section-N.jpg`) that the
marketplace actually serves is a different layer and is not measured here.

## Queue

Empty. `NO-IMAGE` 4 → 0, `NONSTANDARD` 2 → 0, `DEAD`/`NOT-IMAGE` 0. The next
axis should not re-run this one; re-running it is a control.
