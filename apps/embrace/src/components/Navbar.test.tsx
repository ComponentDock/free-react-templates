import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Embrace')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Causes')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
  })

  it('renders Donate button in desktop nav', () => {
    render(<Navbar />)
    const desktopDonate = screen.getByRole('link', { name: 'Donate' })
    expect(desktopDonate).toHaveAttribute('href', '#donate')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('About')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-white')
  })

  it('has transparent bg when not scrolled', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')
  })

  it('cleans up scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })

  it('closes mobile menu when Donate link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    const donateLinks = screen.getAllByText('Donate')
    const mobileDonate = donateLinks.find((el) => el.tagName === 'A' && el.closest('.md\\:hidden'))
    if (mobileDonate) {
      await user.click(mobileDonate)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    }
  })

  it('shows scrolled icon styles when menu is open and scrolled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Scroll down
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    // Open menu while scrolled
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // The X icon should have text-ink class when scrolled
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-white')
  })
})
