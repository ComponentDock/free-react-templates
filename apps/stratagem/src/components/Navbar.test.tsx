import { describe, expect, it, vi } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Stratagem brand link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Stratagem/ })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const labels = ['Home', 'Services', 'About', 'Case Study', 'Blog', 'Contact']
    for (const label of labels) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Get a Quote CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Get a Quote/ })).toBeInTheDocument()
  })

  it('shows contact info in the top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('info@stratagem.com')).toBeInTheDocument()
    expect(screen.getByText(/601-609 6780/)).toBeInTheDocument()
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: /Open menu/ })
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuBtn)
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Close menu/ }))
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('adds scroll listener on mount and cleans up on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  it('applies scrolled styles when user scrolls down', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    render(<Navbar />)

    const scrollCall = addSpy.mock.calls.find((c) => c[0] === 'scroll')
    const handleScroll = scrollCall![1] as () => void

    // Simulate scroll past threshold — wrap in act to flush state
    act(() => {
      vi.stubGlobal('scrollY', 100)
      handleScroll()
    })

    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-white/95')
    expect(header.className).toContain('shadow-md')

    addSpy.mockRestore()
    vi.unstubAllGlobals()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /Open menu/ }))
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()

    const mobileNav = screen.getByLabelText('Mobile')
    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })
})
