import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { MENU_ID, NAV, PAGE_TITLE } from './lib/site'

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

  it('composes the four regions in the reference order over a 200vh page', () => {
    const { container } = render(<App />)

    expect(
      Array.from(
        document.querySelectorAll('[data-testid="top-bar"], aside, header, main, footer'),
      ).map((element) => element.tagName),
    ).toEqual(['ASIDE', 'DIV', 'HEADER', 'MAIN', 'FOOTER'])

    const shell = container.firstElementChild as HTMLElement

    expect(shell).toHaveClass('flex', 'flex-col', 'min-h-[200vh]', 'bg-white')
    expect(shell).toHaveAttribute('id', 'top')
    expect(document.title).toBe(PAGE_TITLE)

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip).toHaveAttribute('href', '#hero')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'hero')
  })

  it('keeps the top bar directly above the header and the hero directly below it', () => {
    render(<App />)

    const bar = screen.getByTestId('top-bar')
    const header = screen.getByRole('banner')
    const hero = screen.getByRole('region', { name: 'Hero band' })

    expect(bar.compareDocumentPosition(header) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(header.compareDocumentPosition(hero) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      hero.compareDocumentPosition(screen.getByRole('contentinfo')) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('renders no content section at all — only the empty hero band', () => {
    render(<App />)

    expect(document.querySelectorAll('section')).toHaveLength(1)
    expect(screen.getByRole('region', { name: 'Hero band' })).toBeEmptyDOMElement()
    expect(screen.queryByRole('heading', { level: 2 })).toBeNull()
  })

  it('holds the seven-item row, the wordmark and one hamburger in the header', () => {
    render(<App />)

    const header = screen.getByRole('banner')

    expect(within(header).getByRole('link', { name: 'Menuribbon' })).toBeInTheDocument()
    expect(within(header).getByRole('button', { name: 'Toggle the site menu' })).toBeInTheDocument()
    expect(header.querySelectorAll('nav[aria-label="Primary"] > ul')[0]?.children).toHaveLength(
      NAV.length,
    )
  })

  it('opens the panel from the toggle and reports the state on both controls', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(panel()).toHaveAttribute('aria-hidden', 'true')

    await user.click(toggle())

    expect(panel()).toHaveAttribute('aria-hidden', 'false')
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(document.body.style.overflow).toBe('hidden')

    const drawer = panel()

    expect(drawer.querySelectorAll('ul')[0]?.children).toHaveLength(NAV.length)
    expect(within(drawer).getByRole('link', { name: 'Testimonials' })).toHaveAttribute(
      'href',
      '#testimonials',
    )
  })

  it('closes from all four paths, releasing the scroll lock each time', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(toggle())
    await user.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('')

    await user.click(toggle())
    fireEvent.keyDown(document, { key: 'a' })
    expect(panel()).toHaveAttribute('aria-hidden', 'false')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(panel()).toHaveAttribute('aria-hidden', 'true')

    await user.click(toggle())
    fireEvent.mouseUp(screen.getByRole('contentinfo'))
    expect(panel()).toHaveAttribute('aria-hidden', 'true')

    // A narrow viewport keeps it open; only a resize past 768px closes it.
    await user.click(toggle())
    setViewportWidth(390)
    fireEvent(window, new Event('resize'))
    expect(panel()).toHaveAttribute('aria-hidden', 'false')

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
