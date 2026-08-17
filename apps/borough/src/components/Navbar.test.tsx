import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, links, and Add Listing button over the hero', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /Borough/i })
    expect(brand).toHaveAttribute('href', '#home')
    expect(screen.getByText('Directory and Listing')).toBeInTheDocument()

    for (const label of ['Home', 'About', 'Listing', 'Blog', 'Contact']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', `#${label.toLowerCase()}`)
      expect(link).toHaveClass('uppercase')
    }

    expect(screen.getByRole('link', { name: 'Add Listing' })).toHaveAttribute('href', '#listing')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
  })

  it('opens and closes the mobile menu from the toggler', () => {
    render(<Navbar />)

    // lg:hidden at the jsdom 1024px viewport — the toggler is present but
    // display:none, so query with hidden:true and dispatch with fireEvent.
    const toggler = screen.getByRole('button', { name: /Menu/i, hidden: true })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { hidden: true }).length).toBeGreaterThan(5)

    const mobileHome = screen
      .getAllByRole('link', { hidden: true })
      .find((link) => link.textContent === 'Home' && link.className.includes('block'))
    expect(mobileHome).toBeDefined()
    fireEvent.click(mobileHome!)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile Add Listing button is clicked', () => {
    render(<Navbar />)
    const toggler = screen.getByRole('button', { name: /Menu/i, hidden: true })
    fireEvent.click(toggler)
    const mobileAdd = screen
      .getAllByRole('link', { hidden: true })
      .find((link) => link.textContent === 'Add Listing' && link.className.includes('block'))
    expect(mobileAdd).toBeDefined()
    fireEvent.click(mobileAdd!)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })
})
