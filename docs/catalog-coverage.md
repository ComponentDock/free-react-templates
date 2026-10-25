# Catalogue coverage — the designs ColorLib lists that `TEMPLATES.md` never recorded

The checklist is **exhausted but incomplete**. That is not a contradiction: every one of the 2,857
rows is `[x]`, and every row resolves to an app and a spec (measured 2026-10-24: 0 `- [ ]`, 0 `[~]`,
1,646 distinct design names, 1,631 distinct source slugs, 0 rows whose host has no `apps/<host>`, 0
whose host has no `openspec/specs/template-<host>/`). What nobody had measured is whether
`TEMPLATES.md` ever listed the whole catalogue. It did not.

```sh
# 1. crawl the catalogue (this host is IPv4-only; plain curl gets the IPv6 address and hangs)
for p in $(seq 1 40); do
  curl -4 -sS -A "Mozilla/5.0 (X11; Linux x86_64) Chrome/120" \
    -o /tmp/cl-p$p.html "https://colorlib.com/wp/templates/page/$p/"
done
# page 41 and beyond return the same 114,776-byte tail page with 5 links — the listing ends at 40

# 2. compare
python3 - <<'PY'
import re, glob
listing = set()
for f in glob.glob('/tmp/cl-p*.html'):
    listing |= set(re.findall(r'https?://colorlib\.com/wp/template/([a-z0-9][a-z0-9-]*)/',
                              open(f, encoding='utf-8', errors='replace').read()))
md = set(re.findall(r'https://colorlib\.com/wp/template/([a-z0-9][a-z0-9-]*)/',
                    open('TEMPLATES.md').read()))
print('listing', len(listing), 'TEMPLATES.md', len(md))
print('unlisted', len(listing - md), 'not-on-listing', len(md - listing))
PY
```

## What it measures (2026-10-24, `main` `a0142cb89`)

| | count |
| --- | ---: |
| catalogue pages crawled | 40 |
| distinct `wp/template/<slug>/` links on the listing | 1,874 |
| distinct slugs cited by `TEMPLATES.md` (2,857 rows) | 1,631 |
| **on the listing, absent from `TEMPLATES.md`** | **256** |
| — of those, standalone designs | 42 |
| — of those, snippet variants (19 families) | 214 |
| cited by `TEMPLATES.md`, absent from the listing | 13 |

All 35 standalone previews that were probed answer **HTTP 200** (6.5 s for 35 `curl -4` calls), so
none of them is a dead catalogue entry.

### The 42 standalone designs (no `-NN` suffix)

Status column: whether the slug's *name* is already in use for something else. A slug that is
"app exists (other design)" is still unbuilt — that app recreates a different ColorLib design, so the
prep needs a different invented name.

| source slug | status |
| --- | --- |
| `airwise` | **shipped** as Thermly — `apps/thermly` |
| `backstop` | preview 200, 74502 B |
| `cairn` | app exists (other design); orphan prep (other design) |
| `circles` | preview 200, 92289 B |
| `coldsnap` | preview 200, 74998 B |
| `commons` | preview 200, 84310 B |
| `curbline` | preview 200, 75675 B |
| `dowser` | preview 200, 70377 B |
| `everhot` | preview 200, 85846 B |
| `fernhill` | preview 200, 75015 B |
| `fieldline` | preview 200, 70376 B |
| `fieldnotes-student` | preview 200, 7216 B |
| `fixtura` | preview 200, 41456 B |
| `flowpage` | preview 200, 45731 B |
| `groundwork` | app exists (other design); orphan prep (other design) |
| `halfpast` | preview 200, 105852 B |
| `heatline` | preview 200, 64887 B |
| `journeyman` | preview 200, 53087 B |
| `kinetic` | app exists (other design); orphan prep (other design) |
| `lantern` | app exists (other design); orphan prep (other design) |
| `mainline` | preview 200, 69579 B |
| `marrow` | preview 200, 85785 B |
| `metroflow` | preview 200, 52720 B |
| `nightshift` | preview 200, 84493 B |
| `nodig` | preview 200, 79808 B |
| `onyx` | orphan prep (other design) |
| `ostend` | preview 200, 69797 B |
| `overprint` | preview 200, 68551 B |
| `perimeter` | preview 200, 89710 B |
| `relay-auth` | preview 200, 4052 B |
| `ridgeline` | preview 200, 92808 B |
| `rightsize` | preview 200, 77779 B |
| `rooter24` | preview 200, 53195 B |
| `springwell` | preview 200, 74202 B |
| `steelworks` | preview 200, 57659 B |
| `switchover` | preview 200, 72073 B |
| `threadline` | app exists (other design); orphan prep (other design) |
| `toolbelt` | preview 200, 66621 B |
| `trace-developer` | preview 200, 7638 B |
| `upright` | preview 200, 75500 B |
| `voltway` | preview 200, 71946 B |
| `zephyr` | orphan prep (other design) |

`airwise` is shipped as **Thermly** (`apps/thermly`, https://thermly.free.componentdock.com) with its
own row under `## Business`; `backstop` (prepped as **Flowcert**) and `circles` (prepped as
**Closeknit**) are prepped and still unbuilt, so the other 39 of the 42 remain open.

### The 214 snippet variants, by family

`card` runs to 20; the other eighteen families stop at 12 or 10.

| family | variants |
| --- | ---: |
| `card-01…20` | 20 |
| `alert-01…12` | 12 |
| `hero-01…12` | 12 |
| `pricing-table-01…12` | 12 |
| `progress-bar-01…12` | 12 |
| `shopping-cart-01…12` | 12 |
| `tabs-01…12` | 12 |
| `toast-01…12` | 12 |
| `appointment-form-01…10` | 10 |
| `breadcrumb-01…10` | 10 |
| `coming-soon-page-01…10` | 10 |
| `error-page-01…10` | 10 |
| `job-application-form-01…10` | 10 |
| `login-page-01…10` | 10 |
| `newsletter-form-01…10` | 10 |
| `offcanvas-01…10` | 10 |
| `pagination-01…10` | 10 |
| `registration-page-01…10` | 10 |
| `survey-form-01…10` | 10 |

These are the same *kind* of item the repo has shipped before — `bootstrap-buttons-*`,
`bootstrap-footer-*`, `accordion-*`, `colorlib-regform-*` are all snippet designs already in
`TEMPLATES.md`. So 214 of the 256 are not a new category of work, only unlisted instances of an old
one.

### The 13 slugs `TEMPLATES.md` cites that the listing does not

`blog-wordpress-themes`, `church-wordpress-themes`, `education-wordpress-themes`, `landing-page-wordpress-themes`, `medical-wordpress-themes`, `personal-wordpress-themes`, `portfolio-wordpress-themes`, `travel-wordpress-themes`, `wordpress-business-themes`, `wordpress-dentist-themes`, `wordpress-ecommerce-themes`, `wordpress-restaurant-themes`, `wordpress-wedding-themes`

Each is a `*-wordpress-themes` round-up page (a catalogue post, not a single design). They are rows
because a past sweep treated every `/wp/template/` URL as a design; none of them has a preview at
`preview.colorlib.com/theme/<slug>/`. Harmless as rows, but they mean `TEMPLATES.md`'s 1,646 design
count is not a count of recreatable designs.

## Why this was invisible to every existing axis

Every prep-stream audit so far reads the repo against **itself**: `verify-provenance-grammar.py`
(spec ↔ `TEMPLATES.md`), `verify-spec-row-mismatch.py` (spec ↔ row ↔ app), `verify-row-multiplicity.py`
(row ↔ app), `index-orphans.py` (spec ↔ app), `verify-catalog-collisions.py` (catalogue keys),
`audit-naming.mjs` (folder ↔ quoted source). A design that was never listed has no row, no spec and no
app, so it is absent from *both* sides of every one of those comparisons — the whole class of gap is
structurally invisible to them. It needs the upstream catalogue as the reference, which is what this
page records.

## The open decision

This run prepped **one** of the 256 (`airwise` → `thermly`) and did **not** touch `TEMPLATES.md`,
because that file is the one both implementer streams write to on every ship; appending 256 rows is a
batch decision, not a prep-run side effect. Two options:

1. **Batch-add the 35 free standalone designs** (42 minus the 7 whose names are taken) as `- [ ]`
   rows under their best-fit category sections, and add the 214 snippet variants to the existing
   snippet categories. Recovers ~249 prep targets for the pipeline.
2. **Leave the catalogue as the scope** and treat this page as the record of what was deliberately
   not shipped. Nothing is lost — the crawl is reproducible and the designs stay unclaimed.

Either way, a design that *is* prepped needs a row before its implementer can claim it; the Thermly
spec carries the exact line to paste.
