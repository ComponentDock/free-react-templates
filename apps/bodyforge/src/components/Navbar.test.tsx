import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links and the Book Now CTA', () => {
    render(<Navbar />)

    expect(screen.getByText('BodyForge')).toBeInTheDocument()
    for (const label of ['Home', 'About Us', 'Schedule', 'Trainers', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('toggles mobile menu button between open and close states', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile menu link (the last "Home" link is the mobile one)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[homeLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const bookNowLinks = screen.getAllByRole('link', { name: 'Book Now' })
    await user.click(bookNowLinks[bookNowLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
