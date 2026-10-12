import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { MENU_ID, NAV, PAGE_TITLE, SECTIONS, SOCIALS, SUB_PAGES } from './lib/site'
import type { NavItem } from './lib/site'
import { isBranch } from './lib/site'
import { RESIZE_CLOSE_WIDTH } from './lib/use-off-canvas'

/** The nav row's document offset this harness emulates, in px. */
const ROW_TOP = 52

function panel(): HTMLElement {
  return document.getElementById(MENU_ID) as HTMLElement
}

function toggle(): HTMLElement {
  return screen.getByRole('button', { name: 'Toggle the site menu' })
}

function rowLabels(list: HTMLElement): (string | undefined)[] {
  return (Array.from(list.children) as HTMLElement[]).map(
    (row) => row.querySelector('a, button')?.textContent ?? undefined,
  )
}

/** Every row in the model at every depth, in menu order. */
function flatten(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => (isBranch(item) ? [item, ...flatten(item.items)] : [item]))
}

function mockLayout() {
  return vi
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(() => ({ top: ROW_TOP - window.scrollY }) as DOMRect)
}

describe('App', () => {
  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('composes the panel, the two-tier header, the band, every section and the closing strip in order', () => {
    const { container } = render(<App />)

    expect(
      Array.from(document.querySelectorAll('aside, header, main, footer')).map((el) => el.tagName),
    ).toEqual(['ASIDE', 'HEADER', 'MAIN', 'FOOTER'])

    expect(container.firstElementChild).toHaveAttribute('id', 'top')
    expect(container.firstElementChild).toHaveClass('flex', 'flex-col', 'bg-white', 'font-sans')

    const main = screen.getByRole('main')
    const bands = Array.from(main.children) as HTMLElement[]

    expect(bands).toHaveLength(1 + SECTIONS.length)
    expect(bands[0]).toHaveAttribute('id', 'hero')
    expect(bands.slice(1).map((band) => band.id)).toEqual(SECTIONS.map((section) => section.id))

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip).toHaveAttribute('href', '#start')

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('mounts the one nav model twice — the header row and the panel — and never duplicates the list', () => {
    render(<App />)

    const header = screen.getByRole('banner')

    expect(rowLabels(screen.getByTestId('desktop-nav'))).toEqual(NAV.map((item) => item.label))
    expect(rowLabels(screen.getByTestId('panel-nav'))).toEqual(NAV.map((item) => item.label))
    expect(within(header).getAllByRole('navigation')).toHaveLength(1)
    // Seven rows, the four dropdown rows and the three behind them, plus the four socials.
    expect(within(header).getAllByRole('listitem')).toHaveLength(NAV.length + 4 + 3 + SOCIALS.length)
  })

  it('pins the nav row on scroll while the utility bar is left to scroll away', () => {
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    const rect = mockLayout()

    render(<App />)

    const row = screen.getByTestId('sticky-row')

    expect(row).toHaveClass('relative', 'bg-transparent')

    scrollY.mockReturnValue(400)
    fireEvent.scroll(window)

    expect(row).toHaveClass('fixed', 'top-0', 'bg-brand')
    expect(screen.getByTestId('top-bar')).toBeInTheDocument()
    expect(screen.getByTestId('top-bar')).not.toHaveClass('fixed')

    scrollY.mockRestore()
    rect.mockRestore()
  })

  it('resolves every row and dropdown destination to a real section, with no dead anchor left', () => {
    const { container } = render(<App />)

    expect(container.querySelector('a[href="#"]')).toBeNull()

    for (const item of flatten(NAV)) {
      expect(container.querySelector(item.href)).not.toBeNull()
    }

    for (const page of SUB_PAGES) {
      expect(container.querySelector(`#${page.id}`)).not.toBeNull()
    }

    expect(container.querySelectorAll('#hero, main > section')).toHaveLength(1 + SECTIONS.length)

    const images = Array.from(container.querySelectorAll('img'))

    expect(images).toHaveLength(4)

    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/^https:\/\/picsum\.photos\/seed\/topdeck-/)
    }
  })

  it('ships one Component Dock credit and the utility bar’s four real social destinations', () => {
    const { container } = render(<App />)

    const outbound = Array.from(container.querySelectorAll('a[href^="http"]'))
    const credits = outbound.filter((link) => link.getAttribute('href') === 'https://www.componentdock.com/')

    expect(credits).toHaveLength(1)
    expect(credits[0]).toHaveTextContent('Component Dock')
    expect(outbound).toHaveLength(SOCIALS.length + 1)

    for (const link of outbound) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('opens the panel from the hamburger and reports the state on both controls', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(screen.queryByRole('complementary', { name: 'Site menu' })).toBeNull()

    await user.click(toggle())

    expect(panel()).toHaveAttribute('aria-hidden', 'false')
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(document.body.style.overflow).toBe('hidden')
    expect(within(screen.getByRole('complementary', { name: 'Site menu' })).getAllByRole('link')).toHaveLength(
      NAV.length,
    )
  })

  it('closes from the glyph, the veil and Escape, releasing the lock and returning focus each time', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(toggle())
    await user.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(toggle())

    await user.click(toggle())
    await user.click(screen.getByTestId('veil'))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(document.body.style.overflow).toBe('')

    await user.click(toggle())
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(toggle())
  })

  it('dismisses the whole panel when the viewport is resized past 768px', async () => {
    const user = userEvent.setup()
    const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(480)

    render(<App />)

    await user.click(toggle())
    expect(panel()).toHaveAttribute('aria-hidden', 'false')

    width.mockReturnValue(RESIZE_CLOSE_WIDTH + 1)
    fireEvent(window, new Event('resize'))

    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(toggle())

    width.mockRestore()
  })

  it('closes the panel when one of its rows is activated, so the target is never hidden behind it', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(toggle())

    const link = within(screen.getByTestId('panel-nav')).getByRole('link', { name: 'Timetable' })

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(document.activeElement).toBe(toggle())
  })
})
