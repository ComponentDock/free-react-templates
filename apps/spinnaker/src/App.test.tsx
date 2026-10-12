import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  BAND_HEADING,
  CARDS,
  DESKTOP_NAV_ID,
  DOCK_URL,
  FOOTER_NOTE,
  MENU,
  MENU_AFTER_ROW,
  MENU_ID,
  MENU_LABEL,
  NAV,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
  SKIP_TARGET,
  TOGGLER_LABEL,
  cardDestinations,
  menuDestinations,
  rowDestinations,
  shot,
} from './lib/site'
import { barClass, containerClass } from './lib/styles'
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

/** The anchors the wide panel adds, in the order the panel draws them: each card twice. */
const panelAnchors = cardDestinations().flatMap((destination) => [destination, destination])

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

    expect(screen.getByTestId('band')).toContainElement(screen.getByTestId('bar'))
    expect(screen.getByRole('heading', { level: 2, name: BAND_HEADING })).toBeInTheDocument()
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

  it('leaves no dead link anywhere on the page, before or after the panel is out', () => {
    const { container } = render(<App />)

    const shut = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(shut.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(shut.map((anchor) => anchor.getAttribute('href'))).toEqual([
      SKIP_TARGET,
      '#top',
      ...rowDestinations(),
      DOCK_URL,
    ])

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const open = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(open.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(open.map((anchor) => anchor.getAttribute('href'))).toEqual([
      SKIP_TARGET,
      '#top',
      ...rowDestinations(),
      ...menuDestinations(),
      ...panelAnchors,
      DOCK_URL,
    ])

    for (const anchor of open) {
      const href = anchor.getAttribute('href') as string

      if (href.startsWith('#')) {
        expect(container.querySelector(href)).not.toBeNull()
      }
    }

    const leaving = open.filter((anchor) => anchor.getAttribute('href')?.startsWith('http'))

    expect(leaving).toHaveLength(1)
    expect(leaving.map((anchor) => anchor.getAttribute('href'))).toEqual([DOCK_URL])
  })

  it('carries the design’s four rows in the wide list, the panel row last', () => {
    render(<App />)

    const list = within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('list')
    const rows = Array.from(list.children)

    expect(rows).toHaveLength(NAV.length + 1)
    expect(rows[MENU_AFTER_ROW]?.textContent).toBe(NAV[MENU_AFTER_ROW]?.label)
    expect(
      within(rows[MENU_AFTER_ROW + 1] as HTMLElement).getByRole('button'),
    ).toHaveAccessibleName(MENU_LABEL)
    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(NAV.length)
  })

  it('paints the row the page is on amber and draws no decoration under any row', () => {
    render(<App />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows.filter((row) => row.getAttribute('aria-current') === 'page')).toHaveLength(1)
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(/(^|\s)text-accent(\s|$)/.test(rows[0]!.className)).toBe(true)
    expect(rows.slice(1).every((row) => !/(^|\s)text-accent(\s|$)/.test(row.className))).toBe(true)
    expect(rows.every((row) => !row.className.includes('underline'))).toBe(true)
    expect(rows.every((row) => !row.className.includes('uppercase'))).toBe(true)
    expect(rows.every((row) => row.className.includes('py-[19.2px]'))).toBe(true)
  })

  it('keeps the bar in the flow, inset inside the container, where nothing pins it', () => {
    render(<App />)

    const bar = screen.getByTestId('bar')

    expect(bar.className).toBe(barClass)
    expect(bar.className).not.toMatch(/sticky|fixed/)
    expect(bar.className).toContain('relative')
    expect(screen.getByTestId('bar-shell').className).toBe(containerClass)
  })

  it('runs several viewports long, on the app’s own placeholder pictures', () => {
    const { container } = render(<App />)
    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/spinnaker-')
    }

    expect(CARDS.map((card) => card.image)).toEqual([
      shot('card-1', 800, 600),
      shot('card-2', 800, 600),
      shot('card-3', 800, 600),
    ])
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
    expect(within(panel).getAllByRole('link')).toHaveLength(NAV.length)

    for (const destination of rowDestinations()) {
      expect(container.querySelector(destination)).not.toBeNull()
    }

    const row = within(panel).getAllByRole('link')[0] as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(screen.queryByTestId('panel')).toBeNull()
  })

  it('opens the wide panel onto four real links and three real cards, and follows one', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const panel = screen.getByTestId(MENU_ID)

    expect(
      within(panel)
        .getAllByRole('link')
        .map((item) => item.getAttribute('href')),
    ).toEqual([...menuDestinations(), ...panelAnchors])

    for (const item of MENU) {
      const block = container.querySelector(item.href)

      expect(block).not.toBeNull()
      expect(block?.textContent).toContain(item.label)
    }

    for (const card of CARDS) {
      const block = container.querySelector(`#${card.id}`)

      expect(block).not.toBeNull()
      expect(block?.textContent).toContain(card.title)
    }

    const first = within(panel).getAllByRole('link')[0] as HTMLAnchorElement

    first.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(first)

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('lands every card’s picture and title on the card that names it', () => {
    const { container } = render(<App />)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    for (const card of CARDS) {
      const picture = screen.getByRole('link', { name: `${card.title} preview` })
      const title = screen.getByRole('link', { name: card.title })
      const block = container.querySelector(`#${card.id}`)

      expect(picture).toHaveAttribute('href', `#${card.id}`)
      expect(title).toHaveAttribute('href', `#${card.id}`)
      expect(block?.textContent).toContain(card.title)
      expect(block?.querySelector('img')?.getAttribute('src')).toBe(card.image)
    }
  })

  it('carries no source string anywhere it renders', () => {
    render(<App />)

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const labels = [
      SITE_NAME,
      BAND_HEADING,
      TOGGLER_LABEL,
      MENU_LABEL,
      ...NAV.map((item) => item.label),
      ...MENU.map((item) => item.label),
      ...CARDS.flatMap((card) => [card.title, card.meta]),
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

    // The chrome is where the design’s own labels live, so the whole band — heading and bar, once
    // the panel is out — has to come out of the guard clean. The blocks below are the app’s own
    // prose and are checked for the source’s phrases instead.
    expect(carriesSourceLabel(screen.getByTestId('band').textContent ?? '')).toBe(false)
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
    expect(carriesSourceText('Four rows, one wide panel, three cards behind it')).toBe(false)
    expect(carriesSourceLabel(['Architec', 't'].join(''))).toBe(true)
    expect(carriesSourceLabel('Downwind school')).toBe(false)
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('spinnaker.free.componentdock.com')
    expect(raw['../package.json']).toContain(
      '"homepage": "https://spinnaker.free.componentdock.com"',
    )
  })

  it('credits the dock, and no one else, from the bottom of the page', async () => {
    render(<App />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
  })
})
