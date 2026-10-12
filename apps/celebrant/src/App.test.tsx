import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  BRAND,
  FAQ_TITLE,
  HERO_LABEL,
  PAGE_TITLE,
  SECTION_IDS,
  SERVICES_TITLE,
} from './lib/site'
import { carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/**
 * Every shipped source file, read as text. Vite owns the resolution — `import.meta.url` is not a
 * `file:` URL under vitest, and the working directory differs between a run inside the app and one
 * driven from the repo root — so the app reads its own sources through the bundler instead.
 */
const FILES: Record<string, string> = import.meta.glob('./**/*.{ts,tsx,css}', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const BAND_ORDER = [
  SECTION_IDS.home,
  SECTION_IDS.services,
  SECTION_IDS.marriages,
  SECTION_IDS.features,
  SECTION_IDS.faq,
]

describe('the Celebrant page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('is built from a banner, a main and a contentinfo landmark', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('offers a skip link straight into the cover', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#home')
  })

  it('lays its bands out in the order the design does', () => {
    const { container } = render(<App />)

    expect([...container.querySelectorAll('main > section')].map((section) => section.id)).toEqual(BAND_ORDER)
    expect(screen.getByRole('region', { name: HERO_LABEL })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: SERVICES_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: FAQ_TITLE })).toBeInTheDocument()
  })

  it('keeps one h1 for the wordmark and a heading per band', () => {
    const { container } = render(<App />)

    const headings = screen.getAllByRole('heading')

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(BRAND)
    expect(container.querySelectorAll('h1').length).toBe(1)
    expect(container.querySelectorAll('h2').length).toBeGreaterThanOrEqual(BAND_ORDER.length)
    expect(container.querySelectorAll('h3').length).toBeGreaterThanOrEqual(4)
  })

  it('covers the first paint with the design preloader above the header', () => {
    render(<App />)

    const cover = screen.getByTestId('preloader-cover')

    expect(cover).toBeInTheDocument()
    expect(screen.getByTestId('preloader-mark')).toBeInTheDocument()
    expect(screen.getByRole('banner').compareDocumentPosition(cover) & Node.DOCUMENT_POSITION_PRECEDING).toBeTruthy()
  })

  it('carries none of the design own strings in any shipped file', () => {
    for (const [path, text] of Object.entries(FILES)) {
      expect(carriesSourceText(text), `provenance in ${path}`).toBe(false)
    }
  })

  it('spots the design own strings whole, and only whole', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0] as string} weekly`)).toBe(true)
    expect(carriesSourceText('a restored yard beside the chapel')).toBe(false)
    // The design truncated two card headings; the recreation corrects them, and the guard keeps up.
    expect(carriesSourceText('Red Wine Tasting')).toBe(false)
    expect(carriesSourceText('Invitation')).toBe(false)
  })

  it('closes on the Component Dock credit the contract requires', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const dock = within(footer).getAllByRole('link', { name: 'Component Dock' })

    expect(dock).toHaveLength(1)
    expect(dock[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
