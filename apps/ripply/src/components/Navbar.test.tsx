import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const LINKS = ['Home', 'FETURES', 'About', 'SCREENSHOT', 'Price', 'Blog', 'Contact']

describe('Navbar', () => {
  it('renders the wordmark, desktop links and search icon', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Ripply' })).toHaveAttribute('href', '#home')
    for (const label of LINKS) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(1)
    }
    expect(document.querySelector('svg.lucide-search')).not.toBeNull()
  })

  it('opens and closes the mobile menu panel', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const burger = screen.getByRole('button', { name: 'Toggle menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')

    // Closed: only the desktop links exist.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)

    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    // Panel open: desktop + mobile copies.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    // A panel link click closes the panel again.
    await user.click(screen.getAllByRole('link', { name: 'Price' })[1]!)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Price' })).toHaveLength(1)

    // Re-open and close via the burger (X icon branch).
    await user.click(burger)
    await user.click(burger)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(1)
  })
})
