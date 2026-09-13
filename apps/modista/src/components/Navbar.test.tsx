import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /MODISTA/i })).toBeInTheDocument()
    for (const link of ['Home', 'Pages', 'Shop', 'Blog', 'Lookbook', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    // Mobile nav links appear
    const mobileNav = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileNav.length).toBeGreaterThanOrEqual(2) // desktop + mobile
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders the Home dropdown variants', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Hover over Home to reveal dropdown
    const homeLink = screen.getByRole('link', { name: 'Home' })
    await user.hover(homeLink)
    expect(screen.getByText('Home Simple')).toBeInTheDocument()
    expect(screen.getByText('Carousel')).toBeInTheDocument()
    expect(screen.getByText('Fullwidth')).toBeInTheDocument()
    expect(screen.getByText('Parallax')).toBeInTheDocument()
  })
})
