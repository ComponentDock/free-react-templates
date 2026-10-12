import { render, screen } from '@testing-library/react'
import { App } from './App'
import { PAGE_TITLE, SECTION_IDS } from './lib/site'
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
  SECTION_IDS.story,
  SECTION_IDS.countdown,
  SECTION_IDS.journey,
  SECTION_IDS.gallery,
  SECTION_IDS.reservation,
  SECTION_IDS.accomodation,
  SECTION_IDS.registry,
]

describe('the Trousseau page', () => {
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

  it('offers a skip link straight into the hero', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#home')
  })

  it('lays its bands out in the order the design does', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main > section')).map((band) => band.id)

    expect(ids).toEqual(BAND_ORDER)
  })

  it('resolves every link on the page to an id that exists', () => {
    const { container } = render(<App />)

    const targets = Array.from(container.querySelectorAll('a[href^="#"]')).map((link) =>
      link.getAttribute('href'),
    )

    expect(targets.length).toBeGreaterThanOrEqual(19)
    for (const target of targets) {
      expect(container.querySelector(target as string)).not.toBeNull()
    }
  })

  it('keeps the design own strings out of the rendered page', () => {
    const { container } = render(<App />)

    expect(carriesSourceText(container.textContent ?? '')).toBe(false)
  })

  it('keeps the design own strings out of every shipped file', () => {
    const entries = Object.entries(FILES).filter(([path]) => !path.includes('/test/provenance'))
    const offenders = entries.filter(([, text]) => carriesSourceText(text)).map(([path]) => path)

    expect(entries.length).toBeGreaterThan(15)
    expect(offenders).toEqual([])
  })

  it('proves that guard can fail', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0]} jar`)).toBe(true)
    expect(carriesSourceText('a page about weddings and letters')).toBe(false)
  })
})
