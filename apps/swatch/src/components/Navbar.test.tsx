import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand and all seven anchor links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Swatch home' })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('switches to the solid blue scrolled state and cleans up the listener', () => {
    const original = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    const removeSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-scrolled', 'false')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-scrolled', 'true')
    expect(header.className).toContain('bg-brand')

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-scrolled', 'false')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
    Object.defineProperty(window, 'scrollY', {
      value: original,
      writable: true,
      configurable: true,
    })
  })

  it('opens and closes the mobile menu and links close it on click', () => {
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu', hidden: true })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)
    expect(screen.getByRole('button', { name: 'Close menu', hidden: true })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const homeLink = Array.from(mobileNav.querySelectorAll('a')).find(
      (a) => a.textContent === 'Home',
    )
    expect(homeLink).toBeTruthy()

    fireEvent.click(homeLink!)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
