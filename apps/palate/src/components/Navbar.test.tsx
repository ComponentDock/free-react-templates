import { describe, expect, it, afterEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true, writable: true })
}

afterEach(() => {
  setScrollY(0)
})

describe('Navbar', () => {
  it('renders the brand, desktop links, active state and CTA pill', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Palate' })).toHaveAttribute('href', '#home')

    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of NAV_LINKS) {
      expect(mainNav.querySelector(`a[href="${link.href}"]`)).toHaveTextContent(link.label)
    }

    const home = mainNav.querySelector('a[href="#home"]')!
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home.className).toContain('text-brand')

    const cta = screen.getByRole('link', { name: 'Book a table' })
    expect(cta).toHaveAttribute('href', '#reservation')
    expect(cta.className).toContain('bg-brand')
    expect(cta.className).toContain('rounded-[5px]')

    // Desktop nav is hidden ≤991px.
    expect(mainNav.className).toContain('lg:flex')
    expect(container.querySelector('header')!.className).toContain('max-lg:bg-ink')
  })

  it('becomes a fixed white bar with black links when scrolled', () => {
    render(<Navbar />)

    setScrollY(200)
    fireEvent.scroll(window)

    const header = document.querySelector('header')!
    expect(header.className).toContain('fixed')
    expect(header.className).toContain('lg:bg-white')

    const about = screen
      .getByRole('navigation', { name: 'Main' })
      .querySelector('a[href="#about"]')!
    expect(about.className).toContain('text-ink')

    // Active link stays orange while scrolled.
    const home = screen.getByRole('navigation', { name: 'Main' }).querySelector('a[href="#home"]')!
    expect(home.className).toContain('text-brand')

    // Scrolling back up restores the transparent state.
    setScrollY(0)
    fireEvent.scroll(window)
    expect(header.className).not.toContain('fixed')
  })

  it('toggles the mobile menu with the dark toggle', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveTextContent('Menu')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav.querySelectorAll('a[href="#about"]')).toHaveLength(1)
    // Active link is orange in the mobile panel too.
    expect(mobileNav.querySelector('a[href="#home"]')!.className).toContain('text-brand')

    fireEvent.click(mobileNav.querySelector('a[href="#menu"]')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu via the Book a table CTA', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav.querySelector('a[href="#reservation"]')).toHaveTextContent('Book a table')

    fireEvent.click(mobileNav.querySelector('a[href="#reservation"]')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
