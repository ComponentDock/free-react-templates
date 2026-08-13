import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { blogSubmenu, brand, navLinks, phone } from '../data'

describe('Header', () => {
  it('renders the logo, nav links and phone button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: new RegExp(`${brand.name}\\.`) })).toHaveAttribute(
      'href',
      '#home-section',
    )
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const item of navLinks) {
      expect(mainNav.querySelector(`a[href="${item.href}"]`)).toHaveTextContent(item.label)
    }
    expect(screen.getByRole('link', { name: new RegExp(phone) })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })

  it('shows the Blog submenu items on hover', () => {
    render(<Header />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const sub of blogSubmenu) {
      expect(mainNav).toHaveTextContent(sub)
    }
  })

  it('becomes sticky with a shadow on scroll', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('[data-testid="site-header"]') as HTMLElement
    expect(header).not.toHaveClass('shadow-[0_10px_15px_rgba(25,25,25,0.1)]')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('shadow-[0_10px_15px_rgba(25,25,25,0.1)]')
  })

  it('cleans up the scroll listener on unmount', () => {
    const { unmount } = render(<Header />)
    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })

  it('opens and closes the mobile menu', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    // Desktop phone button + mobile panel phone link are both present.
    expect(screen.getAllByRole('link', { name: new RegExp(phone) })).toHaveLength(2)

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const link = screen
      .getByRole('navigation', { name: 'Mobile' })
      .querySelector('a[href="#team-section"]') as HTMLElement
    fireEvent.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the phone link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const phoneLinks = screen.getAllByRole('link', { name: new RegExp(phone) })
    fireEvent.click(phoneLinks[1] as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
