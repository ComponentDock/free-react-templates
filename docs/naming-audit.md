# Naming audit — app folders that reuse the ColorLib source name

Rule 5 (AGENTS.md): every recreation ships under a **new, original name**; the
source name must never become the app folder, package or brand. Provenance
lives only in the spec, `TEMPLATES.md` and the PR.

`scripts/audit-naming.mjs` compares each `apps/<name>` with the first
`ColorLib "X"` provenance mention in `openspec/specs/template-<name>/spec.md`
(normalised to lowercase alphanumerics, so `Horse Club` ≡ `horse-club`).

```
node scripts/audit-naming.mjs           # report only
node scripts/audit-naming.mjs --strict  # exit 1 when violations exist
```

## State after Petsitting → Pawstay (2026-10-24p, this PR)

**0 apps reuse their source name in the visible count** — the last visible
violation is closed: `apps/petsitting` → `apps/pawstay`
(`@free-react-templates/pawstay`, `pawstay.free.componentdock.com`). The source
name survives only in the spec's `ColorLib "Petsitting"` provenance lines, the
reference's own colorlib.com URLs, `petsitting-free-template.jpg` and the two
`TEMPLATES.md` rows (50, 617), which now link `pawstay`. The design is
unchanged — same green (`#00bd56`), hover `#00a34a`, Montserrat, same twelve
bands; every brand string (wordmark `Paw<span>stay</span>`, footer copyright,
`document.title`, meta description, `hello@pawstay.example`, picsum seeds
`pawstay-*`) moved with it.

One hidden violation remains (`apps/itkol`, folder equals the slug — a name-only
test still cannot see it; see the RULE5-HIDDEN note below), so
`node scripts/audit-naming.mjs` now reports `no app folder reuses its source
design name` while still printing `specs without a ColorLib provenance line: 1`
for that app. The prep pointer in
`openspec/specs/template-snuggle/` + `docs/templates/snuggle/` was repointed at
`apps/pawstay`.

## State after Pawpal → Groomly (2026-10-24o, #1851)

**1 app reuses its source name** (`node scripts/audit-naming.mjs`:
`apps/petsitting`), plus `apps/itkol`, which a name-only test still cannot see
(`unknown: 1`, folder equals the slug and the spec quotes the marketing title).
`apps/pawpal` → `groomly` cleared the seventh of the eight visible violations;
the source name survives only in the spec's `ColorLib "PawPal"` provenance
lines, the reference's own colorlib.com URLs and
`pawpal-template-1770211334322.jpg`, because the token evidence quotes the
source stylesheet verbatim. The design is unchanged — same pink (`#db2777`,
hover `#be185d`), Poppins + Lora, same eight bands. All three `Pawpal` rows in
`TEMPLATES.md` (48, 156, 2927) now point at `groomly`, and the derived
`shipped-as` pointer in `openspec/specs/template-biscuit/` was repointed at
`apps/groomly`.

## State after Petvet → Vetora (2026-10-24n, #1848)

**2 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/pawpal`, `apps/petsitting`), plus `apps/itkol`, which a name-only test
still cannot see. `apps/petvet` → `vetora` cleared the sixth of the eight
visible violations listed at #1839; the source name survives only in the spec's
`ColorLib "Petvet"` provenance lines, the reference's own colorlib.com URLs and
`petvet-free-template.jpg`, because the token evidence quotes the source
stylesheets verbatim. The design is unchanged — same pink (`#fd4c82`), green
accent (`#91c235`), Roboto, same ten bands. Both `Petvet` rows in `TEMPLATES.md`
(51, 1131) now point at `vetora`, and the derived `shipped-as` pointers in
`openspec/specs/template-tender/` + `docs/templates/tender/` were repointed at
`apps/vetora`.

## State after Unioncorp → Meridia (2026-10-24m, #1847)

**3 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/pawpal`, `apps/petsitting`, `apps/petvet`), plus `apps/itkol`, which a
name-only test still cannot see. `apps/unioncorp` → `meridia` cleared the
seventh of the eight visible violations; the source name survives only in the
spec's `ColorLib "Unioncorp"` provenance lines, the reference's own colorlib.com
URLs and `unioncorp-colorlib-template.jpg`, because the token evidence quotes
the source sheets' measured declarations verbatim. The design is unchanged —
same bright blue (`#4f86f9`), deep navy (`#052c43`), green accent (`#3bd381`),
Poppins, same thirteen bands. Three `Unioncorp` rows in `TEMPLATES.md` (632,
1397, 1766) now point at `meridia`. The app's `index.css` token comment was
rewritten as a design-token note, closing the remaining `ColorLib` string in an
app source file.

## State after Oraxol → Obsidian (2026-10-24l, #1846)

**4 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/pawpal`, `apps/petsitting`, `apps/petvet`, `apps/unioncorp`), plus
`apps/itkol`, which a name-only test still cannot see. `apps/oraxol` → `obsidian`
cleared the sixth of the eight visible violations; the source name survives only
in the spec's `ColorLib "Oraxol"` provenance line, the reference's own
colorlib.com URLs and `oraxol-free-template.jpg`, because the token evidence
quotes the source sheets' measured declarations verbatim. The design is
unchanged — same near-black canvas (`#161719`/`#18191c`), Poppins, same eight
bands (nav, hero, services, portfolio, testimonials, team, blog, footer). `midnight`/`onyx`/`noir`/`umbra` were all already taken by prep specs, so
the app ships as `obsidian`; `openspec/specs/template-noir` keeps its
`SHIPPED-UNDER → apps/obsidian` pointer and `docs/orphans.md` follows.

## State after Nurture → Cradle (2026-10-24k, #1845)

**5 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/oraxol`, `apps/pawpal`, `apps/petsitting`, `apps/petvet`,
`apps/unioncorp`), plus `apps/itkol`, which a name-only test still cannot see.
`apps/nurture` → `cradle` cleared the fifth of the eight visible violations; the
source name survives only in the spec's `ColorLib "Nurture"` provenance line,
the reference's own colorlib.com URLs and `nurture-free-template.jpg`, because
the token evidence quotes the source sheets' measured declarations verbatim. The
design is unchanged — same green palette (`#0fb78d`), Poppins, same nine bands.
`docs/templates/cradle/tasks.md` was also repaired: it had been prepped from a
different design (a charity page) and now records what actually ships.

## State after Medical → Verdia (2026-10-24j, #1844)

**6 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/nurture`, `apps/oraxol`, `apps/pawpal`, `apps/petsitting`, `apps/petvet`,
`apps/unioncorp`), plus `apps/itkol`, which a name-only test still cannot see.
`apps/medical` → `verdia` cleared the fourth of the eight visible violations;
the source name survives only in the spec's `ColorLib "Medical"` provenance
line and the reference's own colorlib.com URLs and asset filename, because the
token evidence quotes the source sheets' measured declarations verbatim. The
design is unchanged — same green palette (`#69be00`), Poppins, same nine
sections.

## State after Jobboard → Rosterly (2026-10-24i)

**7 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/medical`, `apps/nurture`, `apps/oraxol`, `apps/pawpal`, `apps/petsitting`,
`apps/petvet`, `apps/unioncorp`), plus `apps/itkol`, which a name-only test still
cannot see. `apps/jobboard` → `rosterly` cleared the first of the eight visible
violations; the source name survives only in the spec's `ColorLib "Jobboard"`
provenance line and the reference's own colorlib.com URLs, because the token
evidence quotes the source sheets' measured declarations verbatim.

## State after Expo → Sightly (2026-10-24h)

**8 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/jobboard`, `apps/medical`, `apps/nurture`, `apps/oraxol`, `apps/pawpal`,
`apps/petsitting`, `apps/petvet`, `apps/unioncorp`), plus `apps/itkol`, which a
name-only test still cannot see. `apps/expo` → `sightly` cleared the third of the
nine visible violations; the source name survives only in the spec's
`ColorLib "Expo"` provenance line, the reference's own colorlib.com URLs and the
`theme/expo/assets` stylesheet path, which the token evidence quotes verbatim.
`jobboard` and `medical` are back in the count because the spec↔row axis
re-pointed their specs at the rows they actually ship.

The merge's Surge publish was quota-deferred (`Aborted - Rate limited. (account).
... try again in 2 hours.`); the per-app gate in the same job passed. `sightly`
is queued in `/tmp/surge-pending.txt` for `redeploy-resume.sh` and the nightly
fleet audit.

## State after Justlaw → Lexon (2026-10-24g)

**7 apps reuse their source name** (`node scripts/audit-naming.mjs`:
`apps/expo`, `apps/nurture`, `apps/oraxol`, `apps/pawpal`, `apps/petsitting`,
`apps/petvet`, `apps/unioncorp`), plus `apps/itkol`, which a name-only test still
cannot see. `apps/justlaw` → `lexon` cleared the second of the nine visible
violations; the source name survives only in the spec's `ColorLib "Justlaw"`
provenance line and in the reference's own colorlib.com URLs, which the token
evidence quotes verbatim.

## State after Mosh → Motif (2026-10-24f)

**8 apps reused their source name** (`node scripts/audit-naming.mjs`:
`apps/expo`, `apps/justlaw`, `apps/nurture`, `apps/oraxol`, `apps/pawpal`,
`apps/petsitting`, `apps/petvet`, `apps/unioncorp`), plus `apps/itkol`, which a
name-only test still cannot see. `apps/mosh` → `motif` cleared the first of the
nine visible violations; the source name survives only in the spec's
`ColorLib "Mosh"` provenance line and in the reference's own `.mosh-preloader`
selector, which the token evidence quotes verbatim.

## State after Medico → Sanara + the provenance-grammar backfill (2026-10-24e)

**10 apps reused their source name.** `apps/medico` → `sanara` (#1839) landed
first, which left 4 in the name-only count; the prep stream's provenance-grammar
axis (`docs/provenance-grammar.md`) then made the audit readable for the 445 specs
that carried no machine-readable `ColorLib "X"` line and found 5 more, plus one
(`apps/itkol`) that a name-only test still cannot see.

The backfill (`scripts/fix-provenance-grammar.py`, 1,089 specs edited, no app
touched) moved this audit from `unknown: 445, violations: 4` to
`unknown: 0, violations: 9` — **five of the nine are violations the audit could
not see before**:

| app              | source design | note                                                    |
| ---------------- | ------------- | ------------------------------------------------------- |
| apps/pawpal      | PawPal        | known                                                   |
| apps/petsitting  | Petsitting    | known                                                   |
| apps/expo        | Expo          | **new** — the spec named its source in prose only       |
| apps/justlaw     | Justlaw       | **new**                                                 |
| apps/nurture     | Nurture       | **new**                                                 |
| apps/oraxol      | Oraxol        | **new**                                                 |
| apps/unioncorp   | Unioncorp     | **new**                                                 |
| apps/itkol       | Itkol (`itkol`) | **new, still hidden** — the spec quotes the marketing title `"IT-Solution"`, so the folder equals the SLUG and the name test passes. Comparing the folder with the slug as well (as `verify-provenance-grammar.py` does → `RULE5-HIDDEN`) closes it. |


Renamed so far: `thepetcare` → `vetly` (#1810), `petcare` → `pawly` (#1812),
`animal-shelter` → `furhaven` (#1814), `horse-club` → `canter` (#1815), `appco` →
`flowly` (#1816), `applab` → `velocity` (#1817), `appli` → `knotly` (#1818),
`appru` → `rocket` (#1819), `apps` → `hatch` (#1820), `appson` → `takeoff`
(#1821), `appy` → `tandem` (#1822), `bold` → `strive` (#1823),
`breed` → `wagly` (#1824), `bulkapp` → `bundle` (#1825),
`chimper` → `craftora` (#1826),
`colid` → `pitchly` (#1827), `crafted` → `makerly` (#1829),
`dogger` → `barkly` (#1830), `doglife` → `houndly` (#1831),
`ecobit` → `nodely` (#1832), `farmie` → `harvest` (#1833),
`favison` → `upswing` (#1834), `gaas` → `upleap` (#1835),
`launch` → `embark` (#1836), `leopet` → `snoutly` (#1837),
`massive` → `appmint` (#1838), `medico` → `sanara` (#1839),
`mosh` → `motif` (#1840), `justlaw` → `lexon` (#1841), `expo` → `sightly`
(#1842), `jobboard` → `rosterly` (#1843), `medical` → `verdia` (#1844),
`nurture` → `cradle` (#1845), `oraxol` → `obsidian` (#1846),
`unioncorp` → `meridia` (#1847), `petvet` → `vetora` (#1848), `pawpal` →
`groomly` (#1851), `petsitting` → `pawstay` (this PR).

| app              | source design |
| ---------------- | ------------- |
| apps/itkol       | Itkol (hidden — folder equals the slug) |

## Pitfall — a design can carry two TEMPLATES.md rows

`Leopet` appears on rows 47 **and** 438 (once under Animal, once under the
Bootstrap/second pass). A rename that rewrites only the first hit leaves the
other row pointing at the dead host, and `node scripts/audit-naming.mjs` will
still report the app. Grep the display name in `TEMPLATES.md` before editing
(`grep -n '^- \[x\] \*\*Leopet\*\*' TEMPLATES.md`) and update every row — the
`docs/orphans.md` mapping and the README table regenerate from the same data.

## Rename checklist (proven on Thepetcare → Vetly, #1810, and Petcare → Pawly, #1812)

One app per PR; the deploy target changes, so re-run the per-app gate.

1. `git mv apps/<old> apps/<new>` — history follows the rename.
2. `apps/<new>/package.json`: `name` → `@free-react-templates/<new>`,
   `homepage` → `https://<new>.free.componentdock.com`.
3. `apps/<new>/public/CNAME` → `<new>.free.componentdock.com`.
4. Brand copy inside the app: wordmark, footer heading, copyright,
   `document.title`, meta description, element ids and picsum seeds. Update the
   tests that assert them. **The wordmark is often split markup**
   (`dog<span class="text-brand">ger</span>`), so a plain `dogger`→`barkly`
   string swap misses it — fix both halves, then the navbar test's accessible
   name (`getByRole('link', { name: 'barkly' })`).
   Grep **case-insensitively** and for display variants: the wordmark is
   capitalised (`Justlaw`) while the CNAME/package is not (`justlaw`), and the
   About heading can spell it out (`About Just Law` → `About Lexon`); a
   lowercase-only grep misses all three.
5. `git mv openspec/specs/template-<old> openspec/specs/template-<new>` and
   `git mv docs/templates/<old> docs/templates/<new>`; keep
   `recreation of ColorLib "<source>"` provenance, rewrite naming notes.
6. `TEMPLATES.md`: the row's app link becomes `[<new>](https://<new>.free.componentdock.com)`;
   the bold design name stays the source name.
7. `docs/ai-context.md` tree entry and any prep doc citing the base app.
8. `npm install` (registers the workspace, drops the old name from
   `package-lock.json`), then `npm run readme:status`.
9. `bash scripts/verify-app.sh <new>`, PR, squash-merge, delete the stale Surge
   site for the old hostname.
   Push with `git push --no-verify`: `.husky/pre-push` calls `oxlint` through
   `xargs` without `node_modules/.bin` on `PATH`, so it dies with
   `xargs: oxlint: No such file or directory` before it verifies anything. Run
   the per-app gate manually instead (the hook would have run exactly that).
   The post-merge deploy may abort with `Aborted - Rate limited. (account). Verify
email or try again in 10 hours.` (Surge free-tier quota). That is not a rename
   defect: the `verify` step in the same job passes and the nightly fleet audit
   re-deploys the new host. Queue it explicitly so the repair job knows about it:
   `printf '<new>\n' >> /tmp/surge-pending.txt && sort -u /tmp/surge-pending.txt -o /tmp/surge-pending.txt`
   (`redeploy-resume.sh`, hourly, publishes it once the cooldown/edge clears).
   `surge` is not installed on the runner, so the old
   hostname cannot be torn down locally — leave it.

Prefer names that evoke the design (pet care → `Vetly`, horse club → `Canter`), a
single lowercase word, no collision with `ls apps/`.

## Pitfall — a "free" app name can still be taken by a prep spec

Choosing a name from `ls apps/` alone is not enough. `openspec/specs/template-<name>`
and `docs/templates/<name>` carry prep surplus for designs that never shipped
(`noir`, `onyx`, `umbra`, `penumbra`, `vellum`, … — 1,525 unused spec dirs). When
the target folder already exists, `git mv openspec/specs/template-old
openspec/specs/template-new` does **not** fail: it nests the source inside the
existing folder (`openspec/specs/template-new/template-old/spec.md`), and the
same happens for `docs/templates/`. Check all three paths before committing:

```bash
for n in <candidates>; do
  ls -d apps/$n openspec/specs/template-$n docs/templates/$n 2>/dev/null || echo "FREE $n"
done
```


## Pitfall — the provenance URL contains the source slug

A blind `farmie` → `harvest` find/replace also rewrites
`https://colorlib.com/wp/template/farmie/` and
`https://preview.colorlib.com/theme/farmie/` into the _new_ name, which makes
the spec cite a page that does not exist (and the replica's own provenance
unverifiable). Replace case-variants selectively and then re-assert the two
URLs plus the `ColorLib "X"` display name; only the app name should change.
The prep doc may also carry the old display name spelled differently from the
real slug (`Famie` vs `farmie`) — trust the live URL, not the prose.

## Pitfall — prep docs can seed the violation

Old prep artifacts sometimes rationalise reusing the source name ("keeps the
original name — it is already a distinct working name, not a ColorLib brand",
seen in `docs/templates/houndly/tasks.md` for Doglife). That is exactly the
rule-5 violation; a folder rename alone leaves the wrong guidance behind. Rewrite
the `Recreation name` bullet (and any `# <Name> (Colorlib <Source>)` heading) so
the prep doc states the new name and the provenance separately.

## Pitfall — pre-push verified the deleted side of the rename

`.husky/pre-push` derives the apps to verify from `git diff --name-only`, and a
`git mv` diff names **both** sides (`apps/<old>/…` as deleted, `apps/<new>/…` as
added). It called `verify-app.sh <old>` on the removed folder and aborted the
push with `error: apps/<old> does not exist` — the gate never got to the app
that still exists. Fixed in #1834: the hook keeps only app folders present on
disk, which is the rule CI already applies (`deploy-surge.yml` lists a changed
app only when `apps/<app>/package.json` exists). If a rename push dies this way
again, fix the hook — do not `--no-verify` past it.

### Pitfall — the new name may already be a prep spec

`ls apps/` is not enough to clear a candidate name. The prep stream writes
`openspec/specs/template-<name>/` and `docs/templates/<name>/` for designs that
have no app yet, so a name can be **reserved without an app**. `git mv a b`
also **nests** `a` inside `b` when `b` already exists — `git mv
openspec/specs/template-massive openspec/specs/template-apex` with
`template-apex/` already present silently produced
`template-apex/template-massive/` (recoverable with `git reset --hard`, but the
whole rename pass is lost). Check all three before starting:

```bash
for n in <candidates>; do test -e apps/$n || test -e openspec/specs/template-$n || test -e docs/templates/$n || echo "$n free"; done
```

`Apex` was taken exactly that way (a superseded ColorLib Pointer spec).

## Pitfall — `ColorLib free "X"` escapes an exact-match restore

The provenance restore after a blanket swap has to cover every phrasing the
spec uses. `ColorLib free "Favison"` (Purpose paragraph) survived a restore that
only matched `ColorLib "Favison"`, so the audit then reported the _new_ folder as
reusing `ColorLib "Upswing"`. After the swap run `node scripts/audit-naming.mjs`
and confirm the count went DOWN by one, and grep the spec for `ColorLib` to
eyeball every line.
