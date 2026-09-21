import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the restaurant logo and subtitle', () => {
    render(<Navbar />)
    expect(screen.getByText('The Venue')).toBeInTheDocument()
    expect(screen.getByText('restaurant')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About Us', 'Menu', 'Delivery', 'Blog', 'Contact']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the reservation phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('Reservations: +34 586 778 8892')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
