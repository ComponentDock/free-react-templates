import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Prose')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(7)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    const mobileAboutLinks = screen.getAllByText('About')
    const mobileLink = mobileAboutLinks[mobileAboutLinks.length - 1]!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('starts unscrolled', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav.className).toContain('bg-navy/90')
    expect(nav.className).not.toContain('shadow-lg')
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav.className).toContain('bg-navy shadow-lg')
  })

  it('removes scroll listener on unmount', () => {
    const spy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
