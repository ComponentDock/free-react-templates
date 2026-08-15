import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
})

describe('Navbar', () => {
  it('renders the Depot brand and uppercase nav links with Home active in teal', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Depot' })).toHaveAttribute('href', '#home-section')
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home.className).toContain('text-brand')
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('starts transparent and turns solid dark after scrolling', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav.className).toContain('bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(nav.className).toContain('bg-brand-dark')
  })

  it('opens and closes the mobile menu with aria-expanded reflecting state', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' })[1]!
    fireEvent.click(mobileContact)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
