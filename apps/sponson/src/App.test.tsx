import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  BAND_HEADING,
  BAND_LEAD,
  COLUMNS,
  DOCK_URL,
  FOOTER_NOTE,
  PAGE_TITLE,
  RAIL_LABEL,
  RAIL_SIGN_OFF,
  ROWS,
  SECTIONS,
  SKIP_TARGET,
  TOGGLE_LABEL,
  rowDestinations,
  shot,
} from './lib/site'
import { columnClass, pageClass, railClass, skipLinkClass, toggleClass } from './lib/styles'
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

  it('stands the burger in front of the rail, with the content column beside them', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toBe(pageClass)
    expect(page.className).toContain('bg-page')
    expect(page.className).toContain('font-sans')
    expect(Array.from(page.children).map((child) => child.tagName)).toEqual([
      'A',
      'BUTTON',
      'ASIDE',
      'DIV',
    ])

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip).toHaveAttribute('href', SKIP_TARGET)
    expect(skip.className).toBe(skipLinkClass)
    expect(container.querySelector(SKIP_TARGET)).not.toBeNull()

    expect(page.children[2]).toBe(screen.getByTestId('rail'))
    expect(page.children[3]).toBe(screen.getByTestId('column'))
  })

  it('rings the rail round the six labels the design stacks down its column', () => {
    render(<App />)

    const rail = screen.getByTestId('rail')

    expect(rail.className).toBe(railClass(false))
    expect(rail.querySelector('nav')).toHaveAccessibleName(RAIL_LABEL)

    const labels = within(rail).getAllByRole('link').slice(0, ROWS.length)

    expect(labels.map((label) => label.textContent)).toEqual(ROWS.map((row) => row.label))

    const current = labels.filter((label) => label.getAttribute('aria-current') === 'page')

    expect(current).toHaveLength(1)
    expect(current[0]).toBe(labels[0])
    expect(labels[0]?.className).toContain('text-accent')
  })

  it('lays the band and the six blocks a label points at inside the content column', () => {
    const { container } = render(<App />)

    const column = screen.getByTestId('column')

    expect(column.className).toBe(columnClass(false))

    const blocks = Array.from(container.querySelectorAll('main > section'))

    expect(blocks[0]).toBe(screen.getByTestId('band'))
    expect(blocks.slice(1).map((section) => section.id)).toEqual(
      SECTIONS.map((section) => section.id),
    )
    expect(blocks).toHaveLength(SECTIONS.length + 1)
    expect(column.querySelector('footer')).toBe(screen.getByTestId('footer'))
  })

  it('drops the design’s own band under its single heading, with the app’s copy', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(BAND_HEADING)
    expect(screen.getByText(BAND_LEAD)).toBeInTheDocument()

    for (const column of COLUMNS) {
      expect(screen.getByRole('heading', { level: 2, name: column.heading })).toBeInTheDocument()
      expect(screen.getByText(column.body)).toBeInTheDocument()
    }
  })

  it('leaves no dead link anywhere on the page, before or after the drawer is out', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    const away = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(away.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(away.map((anchor) => anchor.getAttribute('href'))).toEqual([
      SKIP_TARGET,
      ...rowDestinations(),
      '#top',
      DOCK_URL,
    ])

    for (const anchor of away) {
      const href = anchor.getAttribute('href') as string

      if (href.startsWith('#')) {
        expect(container.querySelector(href)).not.toBeNull()
      }
    }

    await user.click(screen.getByRole('button', { name: TOGGLE_LABEL }))

    const out = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(out.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(out.map((anchor) => anchor.getAttribute('href'))).toEqual(
      away.map((a) => a.getAttribute('href')),
    )
  })

  it('materialises every destination, each kept clear of the burger', () => {
    const { container } = render(<App />)

    for (const destination of rowDestinations()) {
      const block = container.querySelector(destination)

      expect(block).not.toBeNull()
      expect((block as HTMLElement).style.scrollMarginTop).toBe('300px')
    }

    expect(container.querySelector('#top')).toBe(container.firstElementChild)
  })

  it('folds the rail out of the left edge, and pushes the column and the burger with it', async () => {
    const user = userEvent.setup()

    render(<App />)

    const toggle = screen.getByRole('button', { name: TOGGLE_LABEL })

    expect(toggle.className).toBe(toggleClass(false))
    expect(toggle.className).toContain('lg:hidden')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByTestId('rail').className).toBe(railClass(false))
    expect(screen.getByTestId('column').className).toBe(columnClass(false))
    expect(document.body.classList.contains('offcanvas')).toBe(false)

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle.className).toBe(toggleClass(true))
    expect(toggle.className).toContain('translate-x-[270px]')
    expect(screen.getByTestId('rail').className).toBe(railClass(true))
    expect(screen.getByTestId('rail').className).toContain('translate-x-0')
    expect(screen.getByTestId('column').className).toBe(columnClass(true))
    expect(screen.getByTestId('column').className).toContain('translate-x-[270px]')
    expect(document.body.classList.contains('offcanvas')).toBe(true)
  })

  it('pushes the rail back on a second press, on Escape, on a scroll and on a press beyond it', async () => {
    const user = userEvent.setup()

    render(<App />)

    const toggle = screen.getByRole('button', { name: TOGGLE_LABEL })
    const isOut = () => screen.getByTestId('rail').className === railClass(true)

    await user.click(toggle)
    expect(isOut()).toBe(true)

    await user.click(toggle)
    expect(isOut()).toBe(false)

    await user.click(toggle)
    await user.keyboard('{Escape}')
    expect(isOut()).toBe(false)

    await user.click(toggle)
    fireEvent.scroll(window)
    expect(isOut()).toBe(false)

    await user.click(toggle)
    fireEvent.mouseDown(screen.getByTestId('column'))
    expect(isOut()).toBe(false)
  })

  it('pushes the rail back when one of its own labels is followed', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    await user.click(screen.getByRole('button', { name: TOGGLE_LABEL }))
    expect(screen.getByTestId('rail').className).toBe(railClass(true))

    const label = within(screen.getByTestId('rail')).getAllByRole('link')[1] as HTMLAnchorElement

    label.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(label)

    expect(screen.getByTestId('rail').className).toBe(railClass(false))
    expect(container.querySelector(label.getAttribute('href') as string)).not.toBeNull()
  })

  it('runs the page on the app’s own placeholder pictures', () => {
    const { container } = render(<App />)

    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/sponson-')
    }

    expect(SECTIONS[0]?.items[0]?.image).toBe(shot('harbour-1', 800, 600))
  })

  it('carries no source string anywhere it renders', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)

    const labels = [
      BAND_HEADING,
      RAIL_SIGN_OFF,
      TOGGLE_LABEL,
      RAIL_LABEL,
      FOOTER_NOTE,
      ...ROWS.map((row) => row.label),
      ...COLUMNS.map((column) => column.heading),
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

    await user.click(screen.getByRole('button', { name: TOGGLE_LABEL }))

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)
  })

  it('ships no source string and no source name of its own', () => {
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
    expect(carriesSourceText('Six labels, one rail, one band beside it')).toBe(false)
    expect(carriesSourceLabel(['Blog'].join(''))).toBe(true)
    expect(carriesSourceLabel('Harbour yard')).toBe(false)
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('sponson.free.componentdock.com')
    expect(raw['../package.json']).toContain('"homepage": "https://sponson.free.componentdock.com"')
  })

  it('credits the dock, and no one else, from the bottom of the page', () => {
    render(<App />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
    expect(screen.getByTestId('footer')).toHaveTextContent(FOOTER_NOTE)
  })
})
