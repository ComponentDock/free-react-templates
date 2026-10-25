import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

/** Works both from the repo root (`--root apps/percline`) and inside the app. */
const SRC = existsSync(join(process.cwd(), 'src', 'App.tsx'))
  ? join(process.cwd(), 'src')
  : join(process.cwd(), 'apps', 'percline', 'src')
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { FAQ, FOOTER, NAV_LINKS, SERVICES, TESTIMONIALS, TIMELINE } from './content'

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
      'timeline',
      'emergency',
      'services',
      'why-us',
      'areas',
      'testimonials',
      'faq',
      'contact',
    ])

    const main = document.getElementById('main-content')
    expect(main).not.toBeNull()
    expect(container.querySelector('[data-licence-bar]')).not.toBeNull()
    expect(container.querySelector('[data-header]')).not.toBeNull()
    expect(container.querySelector('[data-sticky-call]')).not.toBeNull()
    expect(container.querySelector('[data-carousel]')).not.toBeNull()
  })

  it('keeps the band counts the reference argues with', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('[data-timeline-row]')).toHaveLength(TIMELINE.rows.length)
    expect(container.querySelectorAll('#services li')).toHaveLength(SERVICES.items.length)
    expect(container.querySelectorAll('[data-carousel-slide]')).toHaveLength(
      TESTIMONIALS.items.length,
    )
    expect(screen.getAllByRole('button', { name: /How|Does|What|Can/ })).toHaveLength(FAQ.items.length)
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

  it('ships no source-design provenance or copied asset names', () => {
    // Character codes, so this test's own source is not a hit.
    const banned = [
      [99, 111, 108, 111, 114, 108, 105, 98],
      [102, 105, 101, 108, 100, 108, 105, 110, 101],
      [75, 68, 72, 69],
    ].map((codes) => String.fromCharCode(...codes))
    const files = sourceFiles(SRC)
    const html = readFileSync(join(SRC, '..', 'index.html'), 'utf8')
    const corpus = [...files.map((path) => [path, readFileSync(path, 'utf8')] as const), [
      'index.html',
      html,
    ] as const]

    const offenders = corpus
      .filter(([, content]) => banned.some((token) => content.toLowerCase().includes(token)))
      .map(([path]) => path)

    expect(offenders).toEqual([])
  })
})
