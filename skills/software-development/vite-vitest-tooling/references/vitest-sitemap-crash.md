# vite-plugin-sitemap crashes vitest runs (full reproduction)

Found auditing a Vite 8 + React 19 + Vitest 4 repo (template marketplace with Firebase).

## Symptom

`npm test` passes all 357 tests (exit 0) but prints an unhandled crash AFTER the summary:

```
node:fs:2914
    return binding.writeFileUtf8(
Error: ENOENT: no such file or directory, open '/root/.../dist/sitemap.xml'
    at writeFileSync (node:fs:2914:20)
    at file:///.../node_modules/vite-plugin-sitemap/dist/index.js:11212:5
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
```

Because the process still exits 0, the crash is easy to miss in CI logs (the repo's CI ran `npm test`, so it was affected).

## Root cause

`vitest.config.ts` did:

```ts
export default mergeConfig(viteConfig, defineConfig({ test: { ... } }))
```

`mergeConfig` concatenates plugin arrays, so `vite-plugin-sitemap` (a build-only plugin whose hook writes `dist/sitemap.xml`) ran during the vitest session. During tests there is no `dist/` directory → ENOENT.

## Fix

Filter the plugin out of the config before merging (see SKILL.md §1 for the code). Confirm the registered plugin name:

```bash
grep -oE 'name: "[^"]+"' node_modules/vite-plugin-sitemap/dist/index.js
# → name: "vite-plugin-sitemap"
```

After the fix, `npm test` ends with no post-summary output.

## Related observations from the same audit

- `npm run build` in a subpackage with no installed `node_modules` used a global tsc (v6) and emitted `TS5011: The 'rootDir' setting must be explicitly set` (a TS6-only error) for a project declaring `typescript: ^5.4.0`. After `npm install` in that package, the build passed untouched — the config was fine (see SKILL.md §2).
- The build itself (with `dist/` present) produced `dist/sitemap.xml` without issues; the crash is test-mode-only.
