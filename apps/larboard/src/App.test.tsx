import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { MENU_ID, NAV, PAGE_TITLE, PANELS } from './lib/site'
import { RESIZE_CLOSE_WIDTH } from './lib/use-off-canvas'

function panel(): HTMLElement {
  return document.getElementById(MENU_ID) as HTMLElement
}

function toggle(): HTMLElement {
  return screen.getByRole('button', { name: 'Toggle the site menu' })
}

describe('App', () => {
  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('composes the sidebar, the header, the one band and the closing strip in the source’s order', () => {
    const { container } = render(<App />)

    expect(
      Array.from(document.querySelectorAll('aside, header, main, footer')).map((el) => el.tagName),
    ).toEqual(['ASIDE', 'HEADER', 'MAIN', 'FOOTER'])

    expect(container.firstElementChild).toHaveClass('flex', 'flex-col', 'bg-white')

    const main = screen.getByRole('main')
    expect(main.querySelector('#hero')).toBeInTheDocument()
    expect(main.querySelectorAll('section')).toHaveLength(1 + PANELS.length)

    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#home')

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('never pins the header and never listens for scrolling', () => {
    const addEventListener = vi.spyOn(window, 'addEventListener')

    render(<App />)

    expect(addEventListener.mock.calls.map(([type]) => type)).not.toContain('scroll')
    expect(screen.getByRole('banner')).toHaveClass('absolute')
    expect(screen.getByRole('banner')).not.toHaveClass('fixed', 'sticky')

    addEventListener.mockRestore()
  })

  it('keeps one nav source of truth: the sidebar carries every row, the header carries none', async () => {
    const user = userEvent.setup()

    render(<App />)

    const header = screen.getByRole('banner')

    expect(within(header).queryByRole('navigation')).toBeNull()
    expect(within(header).getAllByRole('button')).toHaveLength(1)

    await user.click(toggle())

    expect(within(panel()).getAllByRole('link').map((link) => link.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
  })

  it('opens the sidebar from the hamburger and reports the state on both controls', async () => {
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

  it('dismisses the whole sidebar when the viewport is resized past 768px', async () => {
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

  it('closes the sidebar when a row is activated, so the target is never hidden behind it', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(toggle())

    const link = screen.getByRole('link', { name: 'Blog' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(document.activeElement).toBe(toggle())
  })

  it('resolves every menu row to a real in-band target and ships no dead anchor', () => {
    const { container } = render(<App />)

    expect(container.querySelector('a[href="#"]')).toBeNull()
    expect(container.querySelectorAll('a[href^="#"]').length).toBeGreaterThanOrEqual(NAV.length)

    for (const item of NAV) {
      expect(container.querySelector(item.href)).not.toBeNull()
    }
  })

  it('gives the page exactly one external destination, and it is Component Dock', () => {
    render(<App />)

    const external = Array.from(document.querySelectorAll('a[href^="http"]'))

    expect(external).toHaveLength(1)
    expect(external[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(external[0]).toHaveTextContent('Component Dock')
    expect(new URL((external[0] as HTMLAnchorElement).href).host).toBe('www.componentdock.com')
  })
})
