import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { brandName, navLinks, pagesDropdown, searchLabel } from '../data'

describe('Navbar', () => {
  it('renders the script wordmark, magenta bar with links, active Home and search', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      if (link === 'Pages') {
        expect(within(primary).getByRole('button', { name: link })).toBeInTheDocument()
      } else {
        expect(within(primary).getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
    expect(within(primary).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
  })

  it('shows the Pages dropdown items', () => {
    render(<Navbar />)

    expect(screen.getByRole('button', { name: 'Pages' })).toHaveAttribute('aria-haspopup', 'true')
    for (const item of pagesDropdown) {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu, reflecting aria-expanded', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobile).getByText(link)).toBeInTheDocument()
    }

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    fireEvent.click(contactLinks[contactLinks.length - 1]!)

    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
