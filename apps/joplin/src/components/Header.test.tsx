import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders logo text', () => {
    render(<Header />)
    expect(screen.getByText('Joplin.')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Header />)
    expect(screen.getAllByText("Let's Talk").length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const btn = screen.getByTestId('mobile-menu-btn')
    expect(screen.queryByTestId('nav-mobile')).not.toBeInTheDocument()
    await user.click(btn)
    expect(screen.getByTestId('nav-mobile')).toBeInTheDocument()
    await user.click(btn)
    expect(screen.queryByTestId('nav-mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const btn = screen.getByTestId('mobile-menu-btn')
    await user.click(btn)
    expect(screen.getByTestId('nav-mobile')).toBeInTheDocument()
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(screen.queryByTestId('nav-mobile')).not.toBeInTheDocument()
  })

  it("closes mobile menu when Let's Talk is clicked", async () => {
    const user = userEvent.setup()
    render(<Header />)
    const btn = screen.getByTestId('mobile-menu-btn')
    await user.click(btn)
    expect(screen.getByTestId('nav-mobile')).toBeInTheDocument()
    const talkLinks = screen.getAllByText("Let's Talk")
    await user.click(talkLinks[talkLinks.length - 1]!)
    expect(screen.queryByTestId('nav-mobile')).not.toBeInTheDocument()
  })

  it('registers and cleans up scroll listener', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('applies solid background when scrolled', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    render(<Header />)
    const header = screen.getByTestId('header')
    // Get the scroll handler from the addEventListener call
    const scrollHandler = addSpy.mock.calls.find(([e]) => e === 'scroll')?.[1] as () => void
    // Simulate scroll down
    vi.stubGlobal('scrollY', 100)
    act(() => {
      scrollHandler()
    })
    expect(header.className).toContain('bg-white')
    // Simulate scroll back to top
    vi.stubGlobal('scrollY', 0)
    act(() => {
      scrollHandler()
    })
    expect(header.className).toContain('bg-transparent')
  })

  it('has header element with data-testid', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
