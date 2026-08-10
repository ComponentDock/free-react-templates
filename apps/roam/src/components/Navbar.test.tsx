import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks, searchLabel } from '../data'

describe('Navbar', () => {
  it('renders the brand with tagline, centered links and a search button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'RoamTRAVEL BLOG' })).toHaveAttribute('href', '#home')
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      expect(within(primary).getByText(link)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
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
