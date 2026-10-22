#!/usr/bin/env node
/**
 * One-off sweep helper: replace design-provenance copy with neutral
 * design-token notes, and ensure the Component Dock footer link.
 *
 * Usage: node scripts/sweep-provenance.mjs <app> [...apps] [--dry]
 *
 * Safety model: rewrites are applied ONLY inside comment spans (block, line,
 * HTML comments) and, as a fallback, to prose lines that still mention the
 * reference site. JSX/TS syntax is never touched — no whitespace or
 * punctuation normalisation runs over code.
 *
 * Idempotent: re-running on a clean app is a no-op.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const SOURCE_EXT = ['.ts', '.tsx', '.css', '.html']
const PROVENANCE = /colorlib/i

const FOOTER_LINK = `      <div className="mx-auto max-w-7xl px-4 pt-6 text-center text-xs opacity-70">
        More templates at{' '}
        <a href="https://www.componentdock.com/" className="underline underline-offset-4">
          Component Dock
        </a>
      </div>
`

// A source design's name: quoted ("Name" / “Name”) or a bare capitalised run.
const NAME = String.raw`(?:"[^"\n]{1,60}"|“[^”\n]{1,60}”|[A-Z][\w’'.\-]*(?:\s+[A-Z0-9][\w’'.\-]*)*)?`

const RULES = [
  // meta-description phrasing: "Recreated from the ColorLib X design with React"
  [
    /(?:recreated|recreation|rebuilt|ported|adapted|derived)\s+(?:from|of)\s+the\s+ColorLib[\s\S]{0,60}?(?:design|template|preview|demo)\s+with\s+React/gi,
    'built with React',
  ],
  // parenthesised source / preview URLs (optionally followed by a period)
  [/\(\s*(?:(?:live|the)\s+)?(?:(?:preview|demo|source)\s*:?\s*)?(?:https?:\/\/)?(?:www\.)?(?:preview\.)?colorlib\.com\/[^)]*\)\.?/gi, ' '],
  [/(?:https?:\/\/)?(?:www\.)?(?:preview\.)?colorlib\.com\/\S*/gi, ''],
  // selector / value references: 'ColorLib .btn-x', 'ColorLib #fff'
  [/ColorLib['’]?s?\s+(?=[.#][\w-])/gi, ''],
  // unquoted source name in front of a design noun: 'ColorLib Klift design'
  [new RegExp(String.raw`(?:the\s+)?ColorLib['’]?s?\s+[A-Z][\w’'.\-]*(?:\s+[A-Z0-9][\w’'.\-]*)*\s+(?=(?:design|template|preview|demo|stylesheet|layout)\b)`, 'g'), ''],
  // "recreated from the ColorLib "Name" design"
  [
    new RegExp(String.raw`\s*(?:recreated|recreation|rebuilt|ported|adapted|derived)\s+(?:from|of)\s+(?:the\s+)?ColorLib['’]?s?\s*${NAME}\s*(?:design|template|preview|demo|stylesheet|layout)?`, 'gi'),
    ' measured from the reference design ',
  ],
  // "from the ColorLib "Name" stylesheet"
  [
    new RegExp(String.raw`\s*from\s+(?:the\s+)?ColorLib['’]?s?\s*${NAME}\s*(?:design|template|preview|demo|stylesheet|layout)?`, 'gi'),
    ' from the reference stylesheet ',
  ],
  // "ColorLib "Name" design" (any remaining quoted form)
  [new RegExp(String.raw`ColorLib['’]?s?\s*${NAME}\s*(?:design|template|preview|demo|stylesheet|layout)?`, 'gi'), ' the reference design '],
  // possessive before a plain word: "ColorLib's standard btn pill"
  [/ColorLib['’]s\s+/gi, 'the reference '],
  // "the ColorLib font pairing"
  [/the\s+ColorLib\s+/gi, 'the reference '],
  // anything left
  [/ColorLib/gi, 'the reference design'],
  // restatement cleanups
  [/\bthe original the reference design\b/gi, 'the reference design'],
  [/\brecreated\s+from\s+design\b/gi, 'measured from the reference design'],
  [/\bthe reference design\s+(?:design|template)\b/gi, 'the reference design'],
  [/\bthe reference design design\b/gi, 'the reference design'],
  [/\bthe reference design\s+([a-z][\w-]*)\s+template\b/gi, 'the reference $1 template'],
  [/\bthe\s+live\s+preview['’]s\s+/gi, 'the reference '],
  [/\bthe\s+preview['’]s\s+/gi, 'the reference '],
  [/\bthe reference\s+(?:css|styles|assets)\/[\w./-]+\.css\b/gi, 'the reference stylesheet'],
  [/\bthe the\b/gi, 'the'],
  [/\.\s+built with React\b/g, '. Built with React'],
]

function rewriteProse(text) {
  let out = text
  for (const [re, rep] of RULES) out = out.replace(re, rep)
  out = out
    .replace(/(?<=\S)[ \t]{2,}(?=\S)/g, ' ')
    .replace(/[ \t]+([,.;:])/g, '$1')
    .replace(/[—–]\s*([,.;:])/g, '$1')
    .replace(/[—–][ \t]*(?=\n)/g, '')
    .replace(/^([ \t]*)[,.;:][ \t]*/gm, '$1')
    .replace(/^[ \t]+(?=\*\/)/gm, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]*\n[ \t]*(?=\*\/)/g, '\n')
    .replace(/\(\s*\)/g, '')
    .replace(/\(\s+(?=[.#\w])/g, '(')
    .replace(/\bthe original the reference design\b/gi, 'the reference design')
    .replace(/\bthe original the reference\b/gi, 'the reference')
  return out
}

/** Rewrite comment spans; returns new text and whether anything changed. */
function rewriteComments(text, fileIsHtml) {
  let changed = false
  const spanRe = fileIsHtml ? /<!--[\s\S]*?-->/g : /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g
  const next = text.replace(spanRe, (span) => {
    if (!PROVENANCE.test(span)) return span
    changed = true
    return rewriteProse(span)
  })
  return { text: next, changed }
}

/** Fallback: prose inside string literals / JSX text on lines that still match. */
function rewriteRemainingLines(text) {
  let changed = false
  const out = text.split('\n').map((line) => {
    if (!PROVENANCE.test(line)) return line
    if (/^\s*import\b|className=/.test(line)) return line
    changed = true
    return rewriteProse(line)
  })
  return { text: out.join('\n'), changed }
}

function filesIn(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === 'dist') continue
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) filesIn(p, acc)
    else if (SOURCE_EXT.some((e) => p.endsWith(e))) acc.push(p)
  }
  return acc
}

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const apps = args.filter((a) => !a.startsWith('--'))
let changedApps = 0
let changedFiles = 0
let footerAdds = 0
const suspicious = []

for (const app of apps) {
  const srcDir = join('apps', app, 'src')
  const htmlPath = join('apps', app, 'index.html')
  const targets = existsSync(srcDir) ? filesIn(srcDir) : []
  if (existsSync(htmlPath)) targets.push(htmlPath)
  let touched = false

  for (const file of targets) {
    if (file.includes('.test.')) continue
    const before = readFileSync(file, 'utf8')
    if (!PROVENANCE.test(before)) continue
    let after = rewriteComments(before, file.endsWith('.html')).text
    if (PROVENANCE.test(after)) after = rewriteRemainingLines(after).text
    if (after !== before) {
      touched = true
      changedFiles++
      after.split('\n').forEach((line, i) => {
        if (/\b(?:design|stylesheet|reference)(?:standard|design|gaming|template)/.test(line) || PROVENANCE.test(line)) {
          suspicious.push(`${file}:${i + 1}: ${line.trim()}`)
        }
      })
      if (!dry) writeFileSync(file, after)
    }
  }

  const footerPath = join('apps', app, 'src', 'components', 'Footer.tsx')
  if (existsSync(footerPath)) {
    const src = readFileSync(footerPath, 'utf8')
    if (!src.includes('componentdock.com')) {
      const idx = src.lastIndexOf('</footer>')
      if (idx !== -1) {
        touched = true
        footerAdds++
        if (!dry) writeFileSync(footerPath, src.slice(0, idx) + FOOTER_LINK + src.slice(idx))
      }
    }
  }

  if (touched) changedApps++
}

if (suspicious.length) {
  console.log('suspicious lines:')
  for (const s of suspicious) console.log('  ' + s)
}
console.log(`\napps touched: ${changedApps}  files rewritten: ${changedFiles}  footer links added: ${footerAdds}`)
