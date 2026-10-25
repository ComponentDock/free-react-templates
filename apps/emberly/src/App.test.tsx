import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

/** Works both from the repo root (`--root apps/emberly`) and inside the app. */
const SRC = existsSync(join(process.cwd(), 'src', 'App.tsx'))
  ? join(process.cwd(), 'src')
  : join(process.cwd(), 'apps', 'emberly', 'src')
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  AREAS,
  FAQ,
  FOOTER,
  NAV_LINKS,
  PLANS,
  PROCESS,
  SERVICES,
  TESTIMONIALS,
} from './content'

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) {
      return sourceFiles(path)
    }
    return /\.(ts|tsx|css|html)$/.test(entry) ? [path] : []
  })
}

describe('App', () => {
  it('renders the page in the reference order with exactly one h1', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)

    const ids = Array.from(container.querySelectorAll('section[id]')).map((node) => node.id)
    expect(ids).toEqual([
      'finance',
      'services',
      'seasonal',
      'process',
      'areas',
      'testimonials',
      'faq',
      'contact',
    ])

    expect(document.getElementById('main-content')).not.toBeNull()
    expect(container.querySelector('[data-licence-bar]')).not.toBeNull()
    expect(container.querySelector('[data-header]')).not.toBeNull()
    expect(container.querySelector('[data-carousel]')).not.toBeNull()
    expect(container.querySelector('[data-finance-calc]')).not.toBeNull()
  })

  it('keeps the band counts the reference argues with', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('[data-plan-card]')).toHaveLength(PLANS.items.length)
    expect(container.querySelectorAll('#services li')).toHaveLength(SERVICES.items.length)
    expect(container.querySelectorAll('[data-process-step]')).toHaveLength(PROCESS.steps.length)
    expect(container.querySelectorAll('#areas li')).toHaveLength(AREAS.towns.length)
    expect(container.querySelectorAll('[data-carousel-slide]')).toHaveLength(
      TESTIMONIALS.items.length,
    )
    expect(container.querySelectorAll('[data-faq-panel]')).toHaveLength(FAQ.items.length)
  })

  it('maps every nav label onto a band that exists', () => {
    render(<App />)
    for (const link of NAV_LINKS) {
      expect(document.getElementById(link.id)).not.toBeNull()
    }
  })

  it('attributes Component Dock in the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: FOOTER.componentDockLabel })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('ships no source-design provenance', () => {
    // Character codes, so this test's own source is not a hit.
    const banned = [
      [99, 111, 108, 111, 114, 108, 105, 98],
      [104, 101, 97, 116, 108, 105, 110, 101],
      [75, 68, 72, 69],
    ].map((codes) => String.fromCharCode(...codes))
    const html = readFileSync(join(SRC, '..', 'index.html'), 'utf8')
    const corpus = [
      ...sourceFiles(SRC).map((path) => [path, readFileSync(path, 'utf8')] as const),
      ['index.html', html] as const,
    ]

    const offenders = corpus
      .filter(([, content]) => banned.some((token) => content.toLowerCase().includes(token)))
      .map(([path]) => path)

    expect(offenders).toEqual([])
  })

  it('confines the ember accent to the seasonal band and the logo', () => {
    const offenders = sourceFiles(SRC)
      .filter((path) => path.endsWith('.tsx') && !path.includes('.test.'))
      .filter((path) => /heat-\d00/.test(readFileSync(path, 'utf8')))
      .map((path) => path.split('/').pop())

    expect(new Set(offenders)).toEqual(new Set(['SeasonalBand.tsx', 'Wordmark.tsx']))
  })

  it('ships no copied asset files', () => {
    const app = join(SRC, '..')
    for (const asset of ['logo.svg', 'logo-light.svg', 'favicon.svg']) {
      expect(existsSync(join(app, 'public', asset))).toBe(false)
    }
  })
})
