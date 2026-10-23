#!/usr/bin/env node
/**
 * Naming audit — rule 5 says every recreation ships under a NEW name, so no
 * app folder may equal its source design's name.
 *
 * For each apps/<name> with openspec/specs/template-<name>/spec.md, read the
 * first `ColorLib "X"` mention (the provenance line) and compare it with the
 * folder name after normalisation (lowercase, alphanumerics only).
 *
 * Usage:
 *   node scripts/audit-naming.mjs           report only (exit 0)
 *   node scripts/audit-naming.mjs --strict  exit 1 when violations exist
 *   node scripts/audit-naming.mjs --json    machine-readable output
 *
 * The 32 apps listed today predate the rule being enforced; see
 * docs/naming-audit.md for the rename batches.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

const apps = readdirSync('apps', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

const violations = []
const unknown = []

for (const app of apps) {
  const spec = join('openspec', 'specs', `template-${app}`, 'spec.md')
  if (!existsSync(spec)) {
    unknown.push(app)
    continue
  }
  const text = readFileSync(spec, 'utf8')
  const m = text.match(/ColorLib\s+(?:free\s+)?["“]([^"”]+)["”]/)
  if (!m) {
    unknown.push(app)
    continue
  }
  const source = m[1].trim()
  if (norm(source) === norm(app)) violations.push({ app, source })
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ violations, unknown, apps: apps.length }, null, 2))
} else {
  console.log(`apps scanned: ${apps.length}`)
  console.log(`specs without a ColorLib provenance line: ${unknown.length}`)
  if (violations.length) {
    console.log(`\napps whose folder name reuses the source design name: ${violations.length}`)
    for (const v of violations) console.log(`  apps/${v.app}  <- ColorLib "${v.source}"`)
  } else {
    console.log('\nno app folder reuses its source design name')
  }
}

if (process.argv.includes('--strict') && violations.length) process.exit(1)
