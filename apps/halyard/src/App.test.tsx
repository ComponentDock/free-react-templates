import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  DOCK_URL,
  DRAWER_NAV_ID,
  MENU_LABEL,
  NAV,
  NAV_LEFT_ID,
  NAV_RIGHT_ID,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
} from './lib/site'

describe('App — the whole page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('stacks the bar, the band, one section per declared destination, and the credit strip', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toContain('flex')
    expect(page.className).toContain('font-sans')
    expect(page.className).toContain('bg-white')
    expect(page.children[0]?.tagName).toBe('A')
    expect(page.children[1]?.tagName).toBe('HEADER')
    expect(page.children[2]?.tagName).toBe('MAIN')
    expect(page.children[3]?.tagName).toBe('FOOTER')

    const main = screen.getByRole('main')

    expect(main.children[0]).toBe(screen.getByTestId('hero-band'))

    // The band is the only thing between the bar and the first declared section.
    expect(main.children).toHaveLength(SECTIONS.length + 1)

    const skip = screen.getByRole('link', { name: 'Skip to content' }) as HTMLAnchorElement

    expect(skip.getAttribute('href')).toBe('#bridge')
    expect(skip.className).toContain('sr-only')
  })

  it('materialises every destination the bar and the drawer declare', () => {
    render(<App />)

    for (const section of SECTIONS) {
      const node = screen.getByTestId(`${section.id}-section`)

      expect(node).toHaveAttribute('id', section.id)
      expect(node).toHaveTextContent(section.heading)
      expect(node).toHaveTextContent(section.eyebrow)
    }
  })

  it('leaves no dead link anywhere on the page', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]
    const inPage = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('#'))

    expect(anchors.length).toBeGreaterThanOrEqual(9)
    expect(inPage.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)

    for (const anchor of inPage) {
      const target = anchor.getAttribute('href')!.slice(1)

      expect(container.querySelector(`#${CSS.escape(target)}`)).not.toBeNull()
    }
  })

  it('offers the same six destinations in both of the bar’s thirds and in the drawer', async () => {
    const user = userEvent.setup()

    render(<App />)

    const left = screen.getByTestId(NAV_LEFT_ID)
    const right = screen.getByTestId(NAV_RIGHT_ID)

    expect(left.children).toHaveLength(3)
    expect(right.children).toHaveLength(3)
    expect(screen.queryByTestId(DRAWER_NAV_ID)).toBeNull()

    await user.click(screen.getByRole('button', { name: MENU_LABEL }))

    const drawer = screen.getByTestId(DRAWER_NAV_ID)

    expect(drawer.children).toHaveLength(6)
    expect(Array.from(drawer.querySelectorAll('a')).map((row) => row.textContent)).toEqual(
      NAV.map((row) => row.label),
    )

    // The left third reads first across the bar and first down the drawer.
    expect(within(left).getAllByRole('link')[0]?.textContent).toBe(
      within(drawer).getAllByRole('link')[0]?.textContent,
    )
  })

  it('closes the drawer when a destination inside it is chosen', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: MENU_LABEL }))
    await user.click(
      within(screen.getByTestId(DRAWER_NAV_ID)).getByRole('link', { name: 'Signal' }),
    )

    expect(screen.queryByTestId(DRAWER_NAV_ID)).toBeNull()
    expect(screen.getByRole('button', { name: MENU_LABEL })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('credits Component Dock once, and borrows nothing from the design’s own markup', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute('href', DOCK_URL)
    expect(container.textContent).toContain(SITE_NAME)

    // Not one class from the design's own utility namespace reaches the page, and
    // no glyph from the icon font it ships is drawn here.
    const classNames = Array.from(container.querySelectorAll('[class]')).flatMap((node) =>
      (node.getAttribute('class') ?? '').split(/\s+/),
    )

    expect(classNames.some((name) => name.startsWith('cl-'))).toBe(false)
    expect(classNames.some((name) => name.startsWith('icon-'))).toBe(false)

    // One outbound link on the whole page — the credit — and nothing else leaves it.
    const outbound = Array.from(container.querySelectorAll('a')).filter(
      (anchor) => !anchor.getAttribute('href')?.startsWith('#'),
    )

    expect(outbound.map((anchor) => anchor.getAttribute('href'))).toEqual([DOCK_URL])
  })
})
