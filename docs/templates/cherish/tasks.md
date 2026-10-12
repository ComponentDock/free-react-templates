# Cherish — task outline

1. [x] Replication research: live preview DOM, `css/style.css` tokens, screenshot
2. [x] Spec: `openspec/specs/template-cherish/spec.md` (validated with the OpenSpec CLI)
3. [x] Claim: branch `feat/template-cherish`, `[~]` mark for the Dreamwed line, pushed
4. [x] Scaffold `apps/cherish` from the simplest existing app (injectUiSource kept, workspace
       registered in `package-lock.json` by a root `npm install`)
5. [x] Tests first: provenance guard, three hooks, ten section components, the whole page
6. [x] Implementation: site copy/models, class tokens, hooks, components, `App`
7. [x] Per-app gate: typecheck + lint + 100% coverage (66 tests) + build
8. [x] Measured the built page at 1440px and 375px against the source's tokens
9. [x] PR with the source mapping, tokens and deltas; merge; bookkeeping
