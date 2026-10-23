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

## State after Animal Shelter → Furhaven

28 apps reuse their source name. 445 of the 1,703 specs carry no auto-detectable
`ColorLib "X"` line, so the true count can only be equal to or higher than this
list — record the mapping when those specs are next touched.

Renamed so far: `thepetcare` → `vetly` (#1810), `petcare` → `pawly` (#1812),
`animal-shelter` → `furhaven` (#1814).

| app                 | source design  |
| ------------------- | -------------- |
| apps/appco          | Appco          |
| apps/applab         | Applab         |
| apps/appli          | Appli          |
| apps/appru          | Appru          |
| apps/apps           | Apps           |
| apps/appson         | Appson         |
| apps/appy           | Appy           |
| apps/bold           | Bold           |
| apps/breed          | Breed          |
| apps/bulkapp        | BulkApp        |
| apps/chimper        | Chimper        |
| apps/colid          | Colid          |
| apps/crafted        | Crafted        |
| apps/dogger         | Dogger         |
| apps/doglife        | Doglife        |
| apps/ecobit         | Ecobit         |
| apps/farmie         | Farmie         |
| apps/favison        | Favison        |
| apps/gaas           | GaaS           |
| apps/horse-club     | Horse Club     |
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
   tests that assert them.
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

Prefer names that evoke the design (pet care → `Vetly`, horse → `Stable`), a
single lowercase word, no collision with `ls apps/`.
