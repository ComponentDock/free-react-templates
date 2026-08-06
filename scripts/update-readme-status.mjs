#!/usr/bin/env node
/**
 * Regenerates the "## Templates" section of README.md from TEMPLATES.md and the
 * per-template OpenSpec specs. Run after every template merge:
 *
 *   node scripts/update-readme-status.mjs
 *
 * The section reports how many of the 1,646 ColorLib designs have been
 * recreated and lists each one: name, description, categories, preview link.
 */
import fs from 'node:fs'

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '')
const README_PATH = 'README.md'
const TEMPLATES_PATH = 'TEMPLATES.md'

const templates = read(TEMPLATES_PATH)

const statusRe = /^- \[( |x|~)\] \*\*(.+?)\*\*/ // any checklist item
const surgeRe = /\[(\S+?)\]\((https:\/\/free-react-templates-(\S+?)\.surge\.sh)\)/

let category = ''
const allNames = new Set() // unique template names (total catalog = 1,646)
const recreated = new Map() // app name -> { source, categories: Set, preview }

for (const line of templates.split('\n')) {
  const catMatch = line.match(/^## (.+?)(?: \(\d+\))?$/)
  if (catMatch && line.startsWith('## ')) {
    category = catMatch[1]
    continue
  }
  const item = line.match(statusRe)
  if (!item) continue
  allNames.add(item[2])
  if (item[1] !== 'x') continue
  const link = line.match(surgeRe)
  if (!link) continue
  const app = link[3]
  if (!recreated.has(app)) {
    recreated.set(app, { source: item[2], categories: new Set(), preview: link[2] })
  }
  recreated.get(app).categories.add(category)
}

const total = allNames.size

/** Meaningful description: skip boilerplate "<Name> is … monorepo" sentences. */
function describe(app, source) {
  const spec = read(`openspec/specs/template-${app}/spec.md`)
  const m = spec.match(/## Purpose\n\n([\s\S]*?)(?:\n\n|$)/)
  if (m) {
    const sentences = m[1]
      .replace(/\s+/g, ' ')
      .replace(/\(preview:[^)]*\)/g, '')
      .split('. ')
      .map((s) => s.trim() + '.')
      .filter((s) => s.length > 2 && !s.startsWith(`${app[0].toUpperCase()}${app.slice(1)} is`))
    const pick = sentences.find((s) => /ColorLib/i.test(s)) ?? sentences[0]
    if (pick) {
      const cleaned = pick
        .replace(/ \(see TEMPLATES\.md\)/g, '')
        .replace(/, built under a different name.*$/, '.')
        .replace(/^It is an original React recreation of the ColorLib free /i, 'Recreation of ColorLib ')
        .trim()
      return cleaned.length > 150 ? cleaned.slice(0, 147) + '…' : cleaned
    }
  }
  return `Recreation of ColorLib ${source}.`
}

const apps = [...recreated.keys()].sort()
const done = apps.length
const remaining = total - done

const rows = apps
  .map((app, i) => {
    const info = recreated.get(app)
    const cats = [...info.categories].sort().join(', ')
    const title = app[0].toUpperCase() + app.slice(1)
    return `| ${i + 1} | **${title}** | ${describe(app, info.source)} | ${cats} | [${app}.surge.sh](${info.preview}) |`
  })
  .join('\n')

const section = `## Templates

**Status:** ${done} / ${total} templates recreated · **${remaining} remaining**.

> Updated automatically after every template merge
> (\`node scripts/update-readme-status.mjs\`). Each row is an original React
> recreation of a ColorLib design, deployed to its own Surge subdomain.

| # | Template | Description | Categories | Preview |
| --- | --- | --- | --- | --- |
${rows}
`

let readme = read(README_PATH)
const start = readme.indexOf('## Templates')
if (start !== -1) {
  const next = readme.indexOf('\n## ', start + 2)
  const end = next === -1 ? readme.length : next
  readme = readme.slice(0, start) + section + readme.slice(end + 1)
} else {
  // Insert after the Structure section, before "## Getting started" (or append).
  const anchor = readme.indexOf('## Getting started')
  const insertAt = anchor === -1 ? readme.length : anchor
  readme = readme.slice(0, insertAt) + section + readme.slice(insertAt)
}
fs.writeFileSync(README_PATH, readme)
console.log(`README updated: ${done} recreated, ${remaining} remaining (of ${total}).`)
