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

## State after Farmie → Harvest

10 apps reuse their source name. 445 of the 1,703 specs carry no auto-detectable
`ColorLib "X"` line, so the true count can only be equal to or higher than this
list — record the mapping when those specs are next touched.

Renamed so far: `thepetcare` → `vetly` (#1810), `petcare` → `pawly` (#1812),
`animal-shelter` → `furhaven` (#1814), `horse-club` → `canter` (#1815), `appco` →
`flowly` (#1816), `applab` → `velocity` (#1817), `appli` → `knotly` (#1818),
`appru` → `rocket` (#1819), `apps` → `hatch` (#1820), `appson` → `takeoff`
(#1821), `appy` → `tandem` (#1822), `bold` → `strive` (#1823),
`breed` → `wagly` (#1824), `bulkapp` → `bundle` (#1825),
`chimper` → `craftora` (#1826),
`colid` → `pitchly` (#1827), `crafted` → `makerly` (#1829),
`dogger` → `barkly` (#1830), `doglife` → `houndly` (#1831),
`ecobit` → `nodely` (#1832), `farmie` → `harvest` (#1833).

| app                 | source design  |
| ------------------- | -------------- |
| apps/favison        | Favison        |
| apps/gaas           | GaaS           |
| apps/launch         | Launch         |
| apps/leopet         | Leopet         |
| apps/massive        | Massive        |
| apps/medico         | Medico         |
| apps/mosh           | Mosh           |
| apps/pawpal         | PawPal         |
| apps/petsitting     | Petsitting     |
| apps/petvet         | Petvet         |

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

## Pitfall — prep docs can seed the violation

Old prep artifacts sometimes rationalise reusing the source name ("keeps the
original name — it is already a distinct working name, not a ColorLib brand",
seen in `docs/templates/houndly/tasks.md` for Doglife). That is exactly the
rule-5 violation; a folder rename alone leaves the wrong guidance behind. Rewrite
the `Recreation name` bullet (and any `# <Name> (Colorlib <Source>)` heading) so
the prep doc states the new name and the provenance separately.
