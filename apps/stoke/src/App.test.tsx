import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { BAND_IDS, COMPONENTDOCK_HREF } from './content'
import { carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/**
 * Every shipped source file, read as text. Vite owns the resolution — the working
 * directory differs between a run inside the app and one driven from the repo
 * root — so the app reads its own sources through the bundler instead.
 */
const FILES: Record<string, string> = import.meta.glob('./**/*.{ts,tsx,css}', {
  query: '?raw',
  import: 'default',
  eager: true,
})

describe('App', () => {
  it('composes the page in the reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main section[id]')).map(
      (section) => section.id,
    )
    expect(ids).toEqual(['response', 'process', 'services', 'why-us', 'areas', 'testimonials', 'faq', 'contact'])
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'We will not tell you we are fast.',
    )
  })

  it('exposes every band the navigation points at', () => {
    render(<App />)
    for (const id of BAND_IDS) {
      expect(document.getElementById(id)).not.toBeNull()
    }
    expect(document.getElementById('main-content')).not.toBeNull()
  })

  it('carries the chrome: skip link, cookie strip, back-to-top and the footer credit', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      COMPONENTDOCK_HREF,
    )
  })

  it('resolves the live clock from the visitor hour', () => {
    render(<App />)
    const promise = document.querySelector('[data-clock-promise]')
    expect(promise?.textContent).not.toBe('')
  })

  it('keeps the source design own strings out of the rendered page and every shipped file', () => {
    const { container } = render(<App />)

    expect(carriesSourceText(container.textContent ?? '')).toBe(false)

    const entries = Object.entries(FILES).filter(([path]) => !path.includes('/test/provenance'))
    const offenders = entries.filter(([, text]) => carriesSourceText(text)).map(([path]) => path)

    expect(entries.length).toBeGreaterThan(20)
    expect(offenders).toEqual([])
  })

  it('proves that guard can fail', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0]} jar`)).toBe(true)
    expect(carriesSourceText('a page about a furnace and a long night')).toBe(false)
  })
})
