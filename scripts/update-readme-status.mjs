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

// Marketplace catalog (Component Dock / free-templates-firebase): any TPW
// template already listed there gets a ✅ marker in the table. Reads the
// firebase repo's generated catalog.json when it exists (CIA's 6.6 work),
// otherwise falls back to the mock template names in api.ts.
const MARKETPLACE_CATALOG = '/root/free-templates-firebase/src/data/catalog.json'
const MARKETPLACE_MOCK = '/root/free-templates-firebase/src/lib/api.ts'
const inMarketplace = new Set()
const catalogRaw = read(MARKETPLACE_CATALOG)
if (catalogRaw) {
  try {
    const cat = JSON.parse(catalogRaw)
    const items = Array.isArray(cat) ? cat : (cat.templates ?? [])
    for (const t of items) if (t.slug) inMarketplace.add(String(t.slug).toLowerCase())
  } catch {
    /* ignore malformed catalog — no markers */
  }
} else {
  for (const m of read(MARKETPLACE_MOCK).matchAll(/name: '([^']+)'/g)) {
    inMarketplace.add(m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'))
  }
}

const statusRe = /^- \[( |x|~)\] \*\*(.+?)\*\*/ // any checklist item
const surgeRe = /\[(\S+?)\]\((https:\/\/free-react-templates-(\S+?)\.surge\.sh|https:\/\/(\S+?)\.free\.componentdock\.com)\)/

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
  const app = link[3] ?? link[4]
  if (!recreated.has(app)) {
    recreated.set(app, { source: item[2], categories: new Set(), preview: link[2] })
  }
  recreated.get(app).categories.add(category)
}

const total = allNames.size

/** Strip provenance/boilerplate phrases from a candidate description sentence. */
function stripSentence(s) {
  return s
    .replace(/ in the free-react-templates monorepo/gi, '')
    .replace(/ \(see TEMPLATES\.md\)/g, '')
    .replace(/, built under a different name.*$/, '')
    .replace(/It is an original React recreation of the ColorLib free "[^"]+" website template design/i, '')
    .trim()
}

/** First clean sentence of the Purpose section, provenance skipped. */
function pickSentence(sentences) {
  const first = stripSentence(sentences[0] ?? '')
  if (first && !/ColorLib|recreation/i.test(first)) return first
  return stripSentence(sentences[1] ?? '')
}

/** Normalize the picked sentence into a single clean description. */
function tidySentence(pick) {
  const cleaned = (pick.endsWith('.') ? pick : pick + '.').replace(/\.+/g, '.').replace(/^[,;: ]+|[,;: ]+$/g, '')
  return cleaned.length > 150 ? cleaned.slice(0, 147) + '…' : cleaned
}

/** Meaningful description: first sentence of Purpose, provenance stripped. */
function describe(app) {
  const fallback = `A ready-to-use ${app} template. Browse it on Component Dock: https://componentdock.com/templates/${app}`
  const spec = read(`openspec/specs/template-${app}/spec.md`)
  const m = spec.match(/## Purpose\n\n([\s\S]*?)(?:\n\n|$)/)
  if (!m) return fallback
  const para = m[1].replace(/\s+/g, ' ').replace(/\(preview:[^)]*\)/g, '').trim()
  const pick = pickSentence(para.split('. ').map((s) => s.trim()))
  return pick ? tidySentence(pick) : fallback
}

const apps = [...recreated.keys()].sort()
const done = apps.length
const remaining = total - done

const rows = apps
  .map((app, i) => {
    const info = recreated.get(app)
    const cats = [...info.categories].sort().join(', ')
    const title = app[0].toUpperCase() + app.slice(1)
    return `| ${i + 1} | **${title}**${inMarketplace.has(app) ? ' ✅' : ''} | ${describe(app)} | ${cats} | [${app}.free.componentdock.com](${info.preview}) · [Component Dock](https://componentdock.com/templates/${app}) |`
  })
  .join('\n')

const section = `## Templates

**Status:** ${done} / ${total} templates recreated · **${remaining} remaining**.

> Updated automatically after every template merge
> (\`node scripts/update-readme-status.mjs\`). Each row is an original React
> template, deployed to its own Surge subdomain. Templates marked **✅** are
> also listed in the Component Dock marketplace
> (https://componentdock.com — see the catalog with full descriptions there).

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
