import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  BAND_HEADING,
  DESKTOP_NAV_ID,
  DOCK_URL,
  FOOTER_NOTE,
  NAV,
  PAGE_TITLE,
  PANEL_NAV_LABEL,
  SECTIONS,
  SITE_NAME,
  SOCIAL,
  TOGGLER_LABEL,
  allDestinations,
} from './lib/site'
import { carriesSourceLabel, carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/** Every file that ships with the app, read through Vite so no shell is involved. */
const raw = import.meta.glob(
  ['./**/*.{ts,tsx,css}', '../index.html', '../package.json', '../public/CNAME'],
  {
    query: '?raw',
    import: 'default',
    eager: true,
  },
) as Record<string, string>

const files = Object.entries(raw)

describe('App — the whole page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('stacks the band, one section per destination, and the credit strip', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toContain('flex')
    expect(page.className).toContain('bg-page')
    expect(page.className).toContain('font-sans')
    expect(page.children[0]?.tagName).toBe('A')
    expect(page.children[1]?.tagName).toBe('SECTION')
    expect(page.children[2]?.tagName).toBe('MAIN')
    expect(page.children[3]?.tagName).toBe('FOOTER')

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip).toHaveAttribute('href', '#drum')
    expect(skip.className).toContain('sr-only')

    const band = screen.getByTestId('band')

    expect(band.className).toContain('py-28')
    expect(band).toContainElement(screen.getByTestId('bar'))
    expect(screen.getByRole('heading', { name: BAND_HEADING })).toBeInTheDocument()
    expect(container.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getByTestId('footer')).toHaveTextContent(FOOTER_NOTE)
  })

  it('materialises all five destinations the card declares, in order', () => {
    const { container } = render(<App />)

    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(5)

    for (const destination of allDestinations()) {
      const target = container.querySelector(destination)

      expect(target).not.toBeNull()
      expect(target?.tagName).toBe('SECTION')
    }

    const ids = Array.from(container.querySelectorAll('main > section')).map(
      (section) => section.id,
    )

    expect(ids).toEqual(SECTIONS.map((section) => section.id))
    expect(container.querySelectorAll('main > section')).toHaveLength(5)
  })

  it('leaves no dead link anywhere on the page', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]
    const inPage = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('#'))

    expect(anchors.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(inPage).toHaveLength(7)
    expect(inPage.map((anchor) => anchor.getAttribute('href'))).toEqual([
      '#drum',
      '#top',
      ...NAV.map((item) => item.href),
    ])

    for (const anchor of inPage) {
      expect(container.querySelector(anchor.getAttribute('href') as string)).not.toBeNull()
    }

    const leaving = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('http'))

    expect(leaving).toHaveLength(5)
    expect(leaving.map((anchor) => anchor.getAttribute('href'))).toEqual([
      ...SOCIAL.map((item) => item.href),
      DOCK_URL,
    ])
  })

  it('runs several viewports long, with a picture under the cards that declare one', () => {
    const { container } = render(<App />)
    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/windlass-')
    }
  })

  it('holds the pink accent on the row the page is on, and only there', () => {
    render(<App />)

    const rows = Array.from(
      within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link'),
    ) as HTMLAnchorElement[]

    expect(rows.filter((row) => row.getAttribute('aria-current') === 'page')).toHaveLength(1)
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(rows[0]?.className).toContain('text-accent')
    expect(rows.slice(1).every((row) => row.className.includes('hover:text-accent'))).toBe(true)
    expect(rows.every((row) => !row.className.includes('underline'))).toBe(true)
  })

  it('keeps the card in the flow, where nothing pins it', () => {
    render(<App />)

    const bar = screen.getByTestId('bar')

    expect(bar.className).not.toMatch(/sticky|fixed/)
    expect(bar.className).toContain('relative')
  })

  it('opens the panel from the toggler and follows a row out of it', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    const panel = screen.getByTestId('panel')
    const row = within(panel).getAllByRole('link')[2] as HTMLAnchorElement

    expect(screen.getByRole('navigation', { name: PANEL_NAV_LABEL })).toBeInTheDocument()

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(screen.queryByTestId('panel')).toBeNull()
  })

  it('reads every row of the model into the card without a single source string', () => {
    render(<App />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((item) => item.label))

    const text = document.body.textContent ?? ''

    expect(carriesSourceText(text)).toBe(false)
    expect(carriesSourceLabel(text)).toBe(false)
    expect(carriesSourceText([SITE_NAME, ...NAV.map((item) => item.label)].join(' '))).toBe(false)
  })

  it('ships no source strings and no source name in its own files', () => {
    expect(files.length).toBeGreaterThan(15)

    for (const [path, content] of files) {
      expect({ path, carriesSourceText: carriesSourceText(content) }).toEqual({
        path,
        carriesSourceText: false,
      })
    }
  })

  it('recognises the source strings it forbids, and nothing that merely looks like them', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0]} weekly`)).toBe(true)
    expect(carriesSourceText('A winch drum on the foredeck')).toBe(false)
    expect(carriesSourceLabel(`${['Wo', 'rk'].join('')} in the yard`)).toBe(true)
    expect(carriesSourceLabel('Working the foredeck')).toBe(false)
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('windlass.free.componentdock.com')
    expect(raw['../package.json']).toContain('"homepage": "https://windlass.free.componentdock.com"')
  })

  it('declares as many sections as it does destinations, with their own ids', () => {
    render(<App />)

    expect(SECTIONS).toHaveLength(5)

    for (const section of SECTIONS) {
      expect(screen.getByTestId(`section-${section.id}`)).toBeInTheDocument()
    }
  })
})
