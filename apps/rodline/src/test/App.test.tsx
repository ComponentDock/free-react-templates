import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { faq } from '../content'

/**
 * Provenance guard. The forbidden strings are assembled from pieces so this
 * test file itself never matches the repo-wide grep.
 */
const SOURCE_PHRASES = [['color', 'lib'].join(''), ['flow', 'page'].join('')] as const

function carriesSourceText(text: string): boolean {
  const lowered = text.toLowerCase()
  return SOURCE_PHRASES.some((phrase) => lowered.includes(phrase))
}

/**
 * Every shipped source file, read through the bundler rather than `fs` so the
 * check works whatever the working directory is.
 */
const SOURCES = import.meta.glob('../**/*.{ts,tsx,css}', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const INDEX_HTML = import.meta.glob('../../index.html', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

describe('App', () => {
  it('renders the reference order with one h1 and no navigation', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const ids = Array.from(main.querySelectorAll('section')).map((section) => section.id)
    expect(ids).toEqual(['', 'why-us', 'services', 'testimonials', 'faq', 'availability'])

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('banner')).toHaveLength(1)
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('answers every FAQ question in the document', () => {
    render(<App />)

    faq.items.forEach((item) => {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    })
  })

  it('carries no reference-site strings in any shipped file', () => {
    const shipped = Object.entries({ ...SOURCES, ...INDEX_HTML }).filter(
      ([path]) => !path.includes('/test/') && !path.includes('/provenance'),
    )

    expect(shipped.length).toBeGreaterThan(10)
    const offenders = shipped
      .filter(([, text]) => carriesSourceText(text))
      .map(([path]) => path)
    expect(offenders).toEqual([])

    // The guard has to be able to fail.
    expect(carriesSourceText(`${SOURCE_PHRASES[0]} template`)).toBe(true)
    expect(carriesSourceText(`${SOURCE_PHRASES[1]} landing`)).toBe(true)
  })
})
