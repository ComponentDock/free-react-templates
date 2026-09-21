import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Zestly')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Recipes' })).toHaveAttribute('href', '#recipes')
    expect(screen.getByRole('link', { name: 'Videos' })).toHaveAttribute('href', '#videos')
    expect(screen.getByRole('link', { name: 'Dishes' })).toHaveAttribute('href', '#dishes')
    expect(screen.getByRole('link', { name: 'Feedback' })).toHaveAttribute('href', '#feedback')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Mobile nav should now be visible
    const mobileNavLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileNavLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
