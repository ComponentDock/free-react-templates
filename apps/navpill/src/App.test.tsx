import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { MENU_ID, PAGE_TITLE } from './lib/site'

function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width })
}

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

  it('composes the off-canvas panel, the header and the hero over a 200vh page', () => {
    const { container } = render(<App />)

    expect(
      Array.from(document.querySelectorAll('aside, header, main, footer')).map((el) => el.tagName),
    ).toEqual(['ASIDE', 'HEADER', 'MAIN', 'FOOTER'])

    const shell = container.firstElementChild as HTMLElement
    expect(shell).toHaveClass('flex', 'flex-col', 'min-h-[200vh]', 'bg-white')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('region', { name: 'Hero band' })).toBeInTheDocument()

    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#hero')
    expect(main).toHaveAttribute('id', 'hero')

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('never pins the header and never listens for scrolling', () => {
    const addEventListener = vi.spyOn(window, 'addEventListener')

    render(<App />)

    expect(addEventListener.mock.calls.map(([type]) => type)).not.toContain('scroll')
    expect(screen.getByRole('banner')).toHaveClass('absolute', 'top-8')
    expect(screen.getByRole('banner')).not.toHaveClass('fixed', 'sticky')

    addEventListener.mockRestore()
  })

  it('holds the six-item row beside the wordmark and the hamburger', () => {
    render(<App />)

    const header = screen.getByRole('banner')

    expect(within(header).getByRole('link', { name: 'Navpill' })).toBeInTheDocument()
    expect(within(header).getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(within(header).getAllByRole('button', { name: 'Toggle the site menu' })).toHaveLength(1)
    expect(header.querySelectorAll('nav > ul > li')).toHaveLength(6)
  })

  it('opens the panel from the toggle and reports the state on both controls', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(screen.queryByRole('complementary', { name: 'Site menu' })).toBeNull()

    await user.click(toggle())

    expect(panel()).toHaveAttribute('aria-hidden', 'false')
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(document.body.style.overflow).toBe('hidden')

    const drawer = screen.getByRole('complementary', { name: 'Site menu' })
    expect(within(drawer).getAllByRole('link')).toHaveLength(6)
  })

  it('closes from all four paths and releases the scroll lock each time', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(toggle())
    await user.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('')

    await user.click(toggle())
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(panel()).toHaveAttribute('aria-hidden', 'true')

    await user.click(toggle())
    fireEvent.mouseUp(screen.getByRole('contentinfo'))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')

    await user.click(toggle())
    setViewportWidth(1280)
    fireEvent(window, new Event('resize'))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(document.body.style.overflow).toBe('')

    setViewportWidth(window.outerWidth)
  })

  it('keeps the panel open when the press lands on the toggle or inside the drawer', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(toggle())
    fireEvent.mouseUp(toggle())
    expect(panel()).toHaveAttribute('aria-hidden', 'false')

    fireEvent.mouseUp(panel())
    expect(panel()).toHaveAttribute('aria-hidden', 'false')

    await user.click(toggle())
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
  })

  it('gives the page exactly one external destination, and it is Component Dock', () => {
    render(<App />)

    const external = Array.from(document.querySelectorAll('a[href^="http"]'))

    expect(external).toHaveLength(1)
    expect(external[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(external[0]).toHaveTextContent('Component Dock')
  })
})
