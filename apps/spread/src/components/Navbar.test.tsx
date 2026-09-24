import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Spread logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Spread')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Archive')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Mega')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
  })

  it('marks Home as active (brand color)', () => {
    render(<Navbar />)
    const home = screen.getByText('Home')
    expect(home.className).toContain('text-brand')
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Links should be visible in mobile menu
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
