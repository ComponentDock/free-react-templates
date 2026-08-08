import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, links, phone, CTA and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Freightly home' })).toBeInTheDocument()
    for (const label of ['Services', 'Why Us', 'Calculator', 'Testimonials', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('1-800-SWIFT-GO').length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Get a Quote' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the .dark class on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('freightly-dark')).toBe('1')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('freightly-dark')).toBe('0')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    const mobileMenu = document.getElementById('mobile-menu')!
    expect(mobileMenu).toHaveClass('hidden')
    await user.click(menuButton)
    expect(mobileMenu).not.toHaveClass('hidden')
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getAllByRole('link', { name: 'Services' }).at(-1)!)
    expect(mobileMenu).toHaveClass('hidden')
    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Get a Quote' }).at(-1)!)
    expect(mobileMenu).toHaveClass('hidden')
  })

  it('gains a translucent shadow style after scrolling', () => {
    render(<Navbar />)
    const header = document.querySelector('header')!
    expect(header).not.toHaveClass('shadow-sm')
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('shadow-sm')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).not.toHaveClass('shadow-sm')
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
