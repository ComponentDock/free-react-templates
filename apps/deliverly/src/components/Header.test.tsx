import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand and desktop nav links over the hero', () => {
    render(<Header />)

    const brand = screen.getByRole('link', { name: 'Deliverly' })
    expect(brand).toHaveAttribute('href', '#home')
    expect(brand).toHaveClass('font-serif')

    for (const label of ['Home', 'Services', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label.toLowerCase()}`,
      )
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
  })

  it('opens and closes the Dropdown submenu', () => {
    render(<Header />)

    const dropdown = screen.getByRole('button', { name: /Dropdown/i })
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')
    for (const label of ['Menu One', 'Menu Two', 'Menu Three']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    fireEvent.click(screen.getByRole('link', { name: 'Menu One' }))
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu from the toggler', () => {
    render(<Header />)

    // lg:hidden at the jsdom 1024px viewport — the toggler is display:none,
    // so query with hidden:true and dispatch with fireEvent.
    const toggler = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    const mobileLinks = screen.getAllByRole('link', { hidden: true })
    expect(mobileLinks.length).toBeGreaterThan(10)

    const mobileHome = mobileLinks.find(
      (link) => link.textContent === 'Home' && link.className.includes('block'),
    )
    expect(mobileHome).toBeDefined()
    fireEvent.click(mobileHome!)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    // Sub-menu links in the mobile panel also close the menu.
    fireEvent.click(toggler)
    const mobileSubmenuLink = screen
      .getAllByRole('link', { hidden: true })
      .find((link) => link.textContent === 'Menu One' && link.className.includes('pl-8'))
    expect(mobileSubmenuLink).toBeDefined()
    fireEvent.click(mobileSubmenuLink!)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })
})
