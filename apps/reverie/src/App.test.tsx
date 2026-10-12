import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import {
  BLOG_TITLE,
  BRAND,
  COMPONENT_DOCK_LABEL,
  FEATURES_TITLE,
  FILTERS,
  PAGE_TITLE,
  REQUEST_TITLE,
  SERVICES_TITLE,
  SEARCH_OPEN_LABEL,
  SEARCH_TITLE,
  SECTION_IDS,
  SKIP_LABEL,
  SKIP_TARGET,
  VENDORS,
} from './lib/site'
import { carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/** The shell the app ships: the built document's head is generated from this one. */
import shell from '../index.html?raw'

/**
 * The strings no shipped file may carry: the reference's own analytics, its placeholder host and
 * its placeholder share image. Each is assembled a piece at a time, so the guard never spells out
 * any of them — a guard containing the very strings it forbids would break the rule it protects.
 */
const THIRD_PARTY_PHRASES = [
  ['gt', 'ag'].join(''),
  ['data', 'Layer'].join(''),
  ['google', 'tagmanager'].join(''),
  ['your-', 'domain.com'].join(''),
  ['og-', 'image'].join(''),
  ['G-', 'XXXX'].join(''),
]

/** The preview host's own layer — never the theme's markup and never the recreation's. */
const HOST_LAYER_PHRASES = [
  'noindex',
  'nofollow',
  'name="robots"',
  'dns-prefetch',
  'cdnjs',
  ['preview.', 'color', 'lib.com'].join(''),
]

/**
 * Every shipped source file, read as text. Vite owns the resolution — the working directory differs
 * between a run inside the app and one driven from the repo root — so the app reads its own sources
 * through the bundler instead.
 */
const FILES: Record<string, string> = import.meta.glob('./**/*.{ts,tsx,css}', {
  query: '?raw',
  import: 'default',
  eager: true,
})

describe('the Reverie page', () => {
  beforeEach(() => {
    class MockIntersectionObserver {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
      takeRecords = vi.fn(() => [])
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('is built from a banner, a main and a contentinfo landmark', () => {
    const { container } = render(<App />)
    const main = screen.getByRole('main')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(main.id).toBe('main')
    expect(main).toHaveAttribute('tabindex', '-1')
    expect(main.querySelector('footer')).toBeNull()
    expect(main.querySelector('header')).toBeNull()
    expect(container.querySelectorAll('main')).toHaveLength(1)
  })

  it('opens with a skip link and lays the bands out as the design does', () => {
    const { container } = render(<App />)

    const skip = screen.getByRole('link', { name: SKIP_LABEL })

    expect(skip).toHaveAttribute('href', SKIP_TARGET)
    expect(container.firstElementChild?.firstElementChild).toBe(skip)
    expect(skip.nextElementSibling).toBe(screen.getByRole('banner'))

    const order = [...container.querySelectorAll('main > *')].map(
      (band) => band.id || band.tagName.toLowerCase(),
    )

    expect(order).toEqual([
      SECTION_IDS.home,
      SECTION_IDS.services,
      SECTION_IDS.portfolio,
      'div',
      SECTION_IDS.request,
      SECTION_IDS.news,
      'div',
    ])
  })

  it('carries the design own headings, one h1 and the ten vendor wordmarks', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 2, name: SERVICES_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: FEATURES_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: REQUEST_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: BLOG_TITLE })).toBeInTheDocument()
    expect(container.querySelectorAll('li:not([aria-hidden])')).toContain(
      container.querySelector('li'),
    )
    expect(VENDORS).toHaveLength(10)
    expect(screen.getAllByRole('button', { name: FILTERS[1] })).toHaveLength(1)
  })

  it('leaves no dead anchor and exactly one outbound link', () => {
    const { container } = render(<App />)

    const hrefs = [...container.querySelectorAll('a')].map(
      (anchor) => anchor.getAttribute('href') as string,
    )

    expect(hrefs).not.toContain('#!')
    expect(
      hrefs.every(
        (href) =>
          href.startsWith('#') ||
          href.startsWith('tel:') ||
          href.startsWith('mailto:') ||
          href.startsWith('http'),
      ),
    ).toBe(true)
    expect(hrefs.filter((href) => href.startsWith('http'))).toEqual([
      'https://www.componentdock.com/',
    ])
    expect(hrefs.filter((href) => href.startsWith('mailto:'))).toHaveLength(1)
    expect(hrefs.filter((href) => href.startsWith('tel:'))).toHaveLength(1)
  })

  it('opens the search overlay from the bar and hands the focus back on Escape', () => {
    render(<App />)

    const magnifier = screen.getByRole('button', { name: SEARCH_OPEN_LABEL })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(magnifier)

    expect(screen.getByRole('dialog', { name: SEARCH_TITLE })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(magnifier)
  })

  it('closes on the Component Dock credit the contract requires', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const dock = within(footer).getAllByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(dock).toHaveLength(1)
    expect(dock[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(within(footer).getByText(BRAND)).toBeInTheDocument()
  })

  it('carries none of the design own strings in any shipped file', () => {
    for (const [path, text] of Object.entries(FILES)) {
      expect(carriesSourceText(text), `provenance in ${path}`).toBe(false)
    }
  })

  it('ships no third-party tag and none of the reference placeholder metadata', () => {
    for (const [path, text] of Object.entries(FILES)) {
      for (const phrase of THIRD_PARTY_PHRASES) {
        expect(text.toLowerCase().includes(phrase), `${phrase} in ${path}`).toBe(false)
      }
    }
  })

  it('spots the design own strings whole, and only whole', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0] as string} weekly`)).toBe(true)
    expect(carriesSourceText('a long table under the oak lights')).toBe(false)
  })

  it('owns its document head and carries none of the preview host layer', () => {
    const head = shell.slice(0, shell.indexOf('</head>'))

    expect(head).toContain(`<title>${PAGE_TITLE}</title>`)
    expect(head).toContain('name="description"')
    expect(head).toContain('rel="canonical" href="https://reverie.free.componentdock.com/"')
    expect(head).toContain('rel="icon"')
    expect(head).toContain('family=Cormorant+Garamond')
    expect(head).toContain('family=Raleway')
    expect(head).toContain('&display=swap')
    expect(head).not.toContain(['og', ':image'].join(''))
    expect(HOST_LAYER_PHRASES.some((phrase) => head.includes(phrase))).toBe(false)
    // The guard would catch the host's own head: this is what the reference actually serves.
    expect(
      HOST_LAYER_PHRASES.some((phrase) =>
        '<meta name="robots" content="noindex, nofollow">'.includes(phrase),
      ),
    ).toBe(true)
  })
})
