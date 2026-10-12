import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  PAGE_TITLE,
  SECTION_IDS,
  STORY_TITLE,
} from './lib/site'
import { carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/** The shell the app ships: the built document's head is generated from this one. */
import shell from '../index.html?raw'

/**
 * The preview host's own layer — never the theme's markup and never the recreation's. The served
 * reference's head opens with a `robots` meta and a `cdnjs` prefetch that belong to the preview
 * host; all of it is assembled a piece at a time.
 */
const HOST_LAYER_PHRASES = [
  'noindex',
  'nofollow',
  'name="robots"',
  'dns-prefetch',
  'cdnjs',
  ['preview.', 'color', 'lib.com'].join(''),
]

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
  SECTION_IDS.details,
  SECTION_IDS.ceremony,
  SECTION_IDS.gallery,
  SECTION_IDS.contact,
]

describe('the Aisle page', () => {
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
    expect(screen.getByRole('heading', { level: 2, name: STORY_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('timer')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /Nora and Ellis/ })).toBeInTheDocument()
  })

  it('keeps one h1 on the page, in the cover', () => {
    const { container } = render(<App />)

    const headlines = screen.getAllByRole('heading', { level: 1 })

    expect(headlines).toHaveLength(1)
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(headlines[0]?.closest('section')?.id).toBe(SECTION_IDS.home)
    expect(container.querySelectorAll('h2').length).toBeGreaterThanOrEqual(5)
  })

  it('leaves no dead named anchor anywhere in the page', () => {
    const { container } = render(<App />)

    const hrefs = [...container.querySelectorAll('a')].map((anchor) => anchor.getAttribute('href') as string)

    expect(hrefs).not.toContain('#!')
    expect(hrefs.every((href) => href.startsWith('#') || href.startsWith('tel:') || href.startsWith('http'))).toBe(true)
    expect(hrefs.filter((href) => href.startsWith('http'))).toHaveLength(1)
    expect(hrefs.filter((href) => href.startsWith('tel:'))).toHaveLength(1)
  })

  it('carries none of the design own strings in any shipped file', () => {
    for (const [path, text] of Object.entries(FILES)) {
      expect(carriesSourceText(text), `provenance in ${path}`).toBe(false)
    }
  })

  it('spots the design own strings whole, and only whole', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0] as string} weekly`)).toBe(true)
    expect(carriesSourceText('a long table under the barn lights')).toBe(false)
    // The design misspells its own date; the recreation corrects it, and the guard keeps up.
    expect(carriesSourceText('23 September 2027')).toBe(false)
  })

  it('owns its document head and carries none of the preview host layer', () => {
    const head = shell.slice(0, shell.indexOf('</head>'))

    expect(head).toContain(`<title>${PAGE_TITLE}</title>`)
    expect(head).toContain('name="description"')
    expect(head).toContain('rel="icon"')
    expect(head).toContain('family=Playball')
    expect(HOST_LAYER_PHRASES.some((phrase) => head.includes(phrase))).toBe(false)
    // The guard would catch the host's own head: this is what the reference actually serves.
    expect(
      HOST_LAYER_PHRASES.some((phrase) => '<meta name="robots" content="noindex, nofollow">'.includes(phrase)),
    ).toBe(true)
  })

  it('closes on the Component Dock credit the contract requires', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const dock = within(footer).getAllByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(dock).toHaveLength(1)
    expect(dock[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(within(footer).getByText(BRAND)).toBeInTheDocument()
  })
})
