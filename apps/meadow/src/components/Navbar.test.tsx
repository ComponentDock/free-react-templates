import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { navbarCta, navLinks } from '../data'

describe('Navbar', () => {
  it('renders the green navbar with all links and the Donate Now! CTA', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toHaveClass('bg-brand')
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: navbarCta })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle menu', hidden: true })).toBeInTheDocument()
  })

  it('switches to the deeper green background once the page is scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    const { unmount } = render(<Navbar />)
    fireEvent.scroll(window)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toHaveClass('bg-brand')

    window.scrollY = 120
    fireEvent.scroll(window)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toHaveClass('bg-brand-deep')
    unmount()
  })

  it('opens and closes the mobile drawer with the same links and CTA', () => {
    const { container } = render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const drawer = container.querySelector<HTMLElement>('#mobile-menu')
    expect(drawer).not.toBeNull()
    for (const link of navLinks) {
      expect(drawer!.querySelector(`a[href="${link.href}"]`)).not.toBeNull()
    }
    expect(within(drawer!).getByText(navbarCta)).toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('#mobile-menu')).toBeNull()
  })

  it('closes the drawer when a mobile link is chosen', () => {
    const { container } = render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu', hidden: true }))
    const drawer = container.querySelector('#mobile-menu')!
    const blog = drawer.querySelector('a[href="#blog"]')!
    fireEvent.click(blog)
    expect(container.querySelector('#mobile-menu')).toBeNull()
  })

  it('closes the drawer when the drawer CTA is chosen', () => {
    const { container } = render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu', hidden: true }))
    const drawer = container.querySelector<HTMLElement>('#mobile-menu')!
    const cta = within(drawer).getByText(navbarCta).closest('a')!
    fireEvent.click(cta)
    expect(container.querySelector('#mobile-menu')).toBeNull()
  })
})
