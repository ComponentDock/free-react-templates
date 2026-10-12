import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import shell from '../index.html?raw'
import { COPYRIGHT, MAIN_ID, PAGE_TITLE, SKIP_LABEL } from './lib/site'

/* Every shipped source file of the app, read through Vite so the guard works from any cwd. */
const SHIPPED = import.meta.glob('./**/*.{ts,tsx,css}', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/* The source design's provenance belongs to the spec and the checklist, never to the app. The
   needles are assembled at run time so this guard never spells them itself. */
const SOURCE_BRAND = ['grick', 'lo'].join('')
const SOURCE_DOMAIN = ['color', 'lib'].join('')

function carriesProvenance(text: string): boolean {
  const haystack = text.toLowerCase()
  return [SOURCE_BRAND, SOURCE_DOMAIN].some((needle) => haystack.includes(needle))
}

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('orders the bar, the main landmarks and the footer', () => {
    const { container } = render(<App />)

    const landmarks = Array.from(container.querySelectorAll('header, main, footer')).map(
      (element) => element.tagName,
    )
    expect(landmarks).toEqual(['HEADER', 'MAIN', 'FOOTER'])
    expect(container.querySelector('main')).toHaveAttribute('id', MAIN_ID)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('keeps the sections in the documented order', () => {
    render(<App />)

    const ids = Array.from(document.querySelectorAll('main > section'))
      .map((section) => section.id)
      .filter((id) => id !== '')

    expect(ids).toEqual(['home', 'listing', 'about'])
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('offers a skip link into the main landmark', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: SKIP_LABEL })).toHaveAttribute('href', `#${MAIN_ID}`)
  })

  it('links nothing off-site except Component Dock', () => {
    const { container } = render(<App />)

    const external = Array.from(container.querySelectorAll('a[href^="http"]')).map((anchor) =>
      anchor.getAttribute('href'),
    )
    expect(external).toEqual([COPYRIGHT.creditUrl])
  })

  it('carries no provenance strings in any shipped file', () => {
    expect(carriesProvenance(`${SOURCE_BRAND} weekly`)).toBe(true)

    for (const [path, content] of Object.entries(SHIPPED)) {
      expect(carriesProvenance(content), path).toBe(false)
    }
    expect(carriesProvenance(shell)).toBe(false)
  })
})
