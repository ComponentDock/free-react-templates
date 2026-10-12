import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  BAND_HEADING,
  CHANNELS,
  DESKTOP_NAV_ID,
  DOCK_URL,
  FILTER_EMPTY,
  FILTER_RESET_LABEL,
  FOOTER_NOTE,
  MENU,
  MENU_AFTER_ROW,
  MENU_ID,
  MENU_LABEL,
  NAV,
  PAGE_TITLE,
  SEARCH_LABEL,
  SECTIONS,
  SITE_NAME,
  SITE_TAGLINE,
  SKIP_TARGET,
  SOCIAL_LABEL,
  TOGGLER_LABEL,
  channelDestinations,
  rowDestinations,
} from './lib/site'
import { filterSummary } from './lib/search'
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

  it('stacks the band, the blocks every destination lands on, and the credit band', () => {
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

    expect(skip).toHaveAttribute('href', SKIP_TARGET)
    expect(skip.className).toContain('sr-only')
    expect(container.querySelector(SKIP_TARGET)).not.toBeNull()

    expect(screen.getByTestId('band')).toContainElement(screen.getByTestId('chrome'))
    expect(screen.getByTestId('band')).toContainElement(screen.getByTestId('bar'))
    expect(screen.getByRole('heading', { name: BAND_HEADING })).toBeInTheDocument()
    expect(container.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getByTestId('footer')).toHaveTextContent(FOOTER_NOTE)
  })

  it('materialises every block the band’s chrome declares, in the model’s own order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main > section')).map(
      (section) => section.id,
    )

    expect(ids).toEqual(SECTIONS.map((section) => section.id))
    expect(container.querySelectorAll('main > section')).toHaveLength(SECTIONS.length)

    for (const section of SECTIONS) {
      expect(screen.getByTestId(`section-${section.id}`)).toBeInTheDocument()
    }
  })

  it('leaves no dead link anywhere on the page', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]
    const inPage = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('#'))

    expect(anchors.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(inPage.map((anchor) => anchor.getAttribute('href'))).toEqual([
      SKIP_TARGET,
      ...channelDestinations(),
      '#top',
      ...rowDestinations(),
    ])

    for (const anchor of inPage) {
      expect(container.querySelector(anchor.getAttribute('href') as string)).not.toBeNull()
    }

    const leaving = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('http'))

    expect(leaving).toHaveLength(1)
    expect(leaving.map((anchor) => anchor.getAttribute('href'))).toEqual([DOCK_URL])
  })

  it('carries the design’s five rows in the wide list, the menu row second', () => {
    render(<App />)

    const list = within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('list')
    const rows = Array.from(list.children)

    expect(rows).toHaveLength(NAV.length + 1)
    expect(rows[MENU_AFTER_ROW]?.textContent).toBe(NAV[0]?.label)
    expect(within(rows[MENU_AFTER_ROW + 1] as HTMLElement).getByRole('button')).toHaveAccessibleName(
      MENU_LABEL,
    )
    expect(rows.slice(MENU_AFTER_ROW + 2).map((row) => row.textContent)).toEqual(
      NAV.slice(1).map((item) => item.label),
    )
    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(NAV.length)
  })

  it('paints the row the page is on red with no underline, and no other row with anything', () => {
    render(<App />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows.filter((row) => row.getAttribute('aria-current') === 'page')).toHaveLength(1)
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(/(^|\s)text-accent(\s|$)/.test(rows[0]!.className)).toBe(true)
    expect(rows.slice(1).every((row) => !/(^|\s)text-accent(\s|$)/.test(row.className))).toBe(true)
    expect(rows.every((row) => !row.className.includes('underline'))).toBe(true)
    expect(rows.slice(1).every((row) => row.className.includes('hover:before:w-full'))).toBe(true)
    expect(rows.every((row) => row.className.includes('before:h-[2px]'))).toBe(true)
  })

  it('keeps the chrome row fluid and the bar in the flow, where nothing pins it', () => {
    render(<App />)

    const chrome = screen.getByTestId('chrome')

    expect(chrome.className).toContain('w-full')
    expect(chrome.className).toContain('md:px-[48px]')
    expect(chrome.className).not.toContain('max-w')

    const bar = screen.getByTestId('bar')

    expect(bar.className).not.toMatch(/sticky|fixed/)
    expect(bar.className).toContain('relative')
    expect(chrome.className).not.toMatch(/sticky|fixed/)
  })

  it('stands the circles left of the wordmark and the pill field, not in the bar', () => {
    render(<App />)

    const chrome = screen.getByTestId('chrome')
    const circles = within(chrome).getByRole('list', { name: SOCIAL_LABEL })
    const wordmark = within(chrome).getByRole('link', { name: SITE_NAME })

    expect(circles.compareDocumentPosition(wordmark) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(within(screen.getByTestId('bar')).queryByRole('searchbox')).toBeNull()
    expect(wordmark).toHaveTextContent(SITE_TAGLINE)
    expect(within(chrome).getByRole('searchbox', { name: SEARCH_LABEL })).toBeInTheDocument()
  })

  it('runs several viewports long, on the app’s own placeholder pictures', () => {
    const { container } = render(<App />)
    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/mizzen-')
    }
  })

  it('narrows the page to what the field is typed into, and says how much is left', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    expect(screen.queryByTestId('filter-status')).toBeNull()

    await user.type(screen.getByRole('searchbox', { name: SEARCH_LABEL }), 'trestles')

    const blocks = container.querySelectorAll('main > section')

    expect(blocks).toHaveLength(1)
    expect(blocks[0]?.id).toBe('spars')
    expect(screen.getByTestId('filter-status')).toHaveTextContent(filterSummary(1, 'trestles'))
    expect(screen.queryByTestId('no-matches')).toBeNull()
  })

  it('says so when nothing on the page carries the query', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    await user.type(screen.getByRole('searchbox', { name: SEARCH_LABEL }), 'zzz')

    expect(container.querySelectorAll('main > section')).toHaveLength(0)
    expect(screen.getByTestId('no-matches')).toHaveTextContent(FILTER_EMPTY)
    expect(screen.getByTestId('filter-status')).toHaveTextContent(filterSummary(0, 'zzz'))
  })

  it('puts every block back, and clears the field, on one press', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    const field = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    await user.type(field, 'trestles')
    await user.click(screen.getByRole('button', { name: FILTER_RESET_LABEL }))

    expect(field).toHaveValue('')
    expect(container.querySelectorAll('main > section')).toHaveLength(SECTIONS.length)
    expect(screen.queryByTestId('filter-status')).toBeNull()
  })

  it('folds the narrow chrome open, and lands its rows on real blocks', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(screen.queryByTestId('panel')).toBeNull()
    expect(screen.queryByTestId(MENU_ID)).toBeNull()

    await user.click(toggler)

    const panel = screen.getByTestId('panel')

    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(within(panel).getAllByRole('link')).toHaveLength(NAV.length + MENU.length + 1)

    for (const destination of [...rowDestinations(), ...MENU.map((item) => item.href)]) {
      expect(container.querySelector(destination)).not.toBeNull()
    }

    const row = within(panel).getByRole('link', { name: NAV[0]!.label })

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(screen.queryByTestId('panel')).toBeNull()
  })

  it('opens the wide rigging menu onto four real cards, and follows one of them', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const menu = screen.getByTestId(MENU_ID)

    expect(
      within(menu)
        .getAllByRole('link')
        .map((item) => item.getAttribute('href')),
    ).toEqual(MENU.map((item) => item.href))

    for (const item of MENU) {
      expect(container.querySelector(item.href)).not.toBeNull()
    }

    const first = within(menu).getAllByRole('link')[0] as HTMLAnchorElement

    first.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(first)

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('lands every circle on its own card', () => {
    const { container } = render(<App />)

    for (const channel of CHANNELS) {
      const circle = screen.getByRole('link', { name: channel.label })
      const card = container.querySelector(channel.href)

      expect(card).not.toBeNull()
      expect(card?.textContent).toContain(channel.label)
      expect(circle).toHaveAttribute('href', channel.href)
    }
  })

  it('reads every row and every menu item of the model into the chrome', () => {
    render(<App />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((item) => item.label))
    expect(NAV.map((item) => item.label).concat(MENU.map((item) => item.label))).toHaveLength(8)
  })

  it('carries no source string anywhere it renders', () => {
    const { container } = render(<App />)

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const labels = [
      SITE_NAME,
      SITE_TAGLINE,
      BAND_HEADING,
      TOGGLER_LABEL,
      MENU_LABEL,
      SEARCH_LABEL,
      ...NAV.map((item) => item.label),
      ...MENU.map((item) => item.label),
      ...SECTIONS.flatMap((section) => [
        section.eyebrow,
        section.heading,
        ...section.items.map((item) => item.title),
      ]),
    ]

    for (const label of labels) {
      expect({ label, carriesSourceLabel: carriesSourceLabel(label) }).toEqual({
        label,
        carriesSourceLabel: false,
      })
    }

    // The chrome is where the design's own labels live, so the whole band — heading, chrome row
    // and bar, once the menu is open — has to come out of the guard clean. The blocks below are
    // the app's own prose and are checked for the source's phrases instead.
    const band = screen.getByTestId('band')

    expect(carriesSourceLabel(band.textContent ?? '')).toBe(false)
    expect(container.querySelectorAll('main > section').length).toBeGreaterThan(0)
  })

  it('ships no source string and no source name in its own files', () => {
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
    expect(carriesSourceText('Four circles, one wordmark, one dark bar')).toBe(false)
    expect(carriesSourceLabel(['Me', 'nu'].join(''))).toBe(true)
    expect(carriesSourceLabel('Sail loft')).toBe(false)
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('mizzen.free.componentdock.com')
    expect(raw['../package.json']).toContain('"homepage": "https://mizzen.free.componentdock.com"')
  })

  it('credits the dock, and no one else, from the bottom of the page', () => {
    render(<App />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
  })
})
