import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Prowess logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /prowess/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /primary/i })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Programs', 'Pricing', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders a Get Started button linking to contact', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Mobile nav is not in the DOM initially
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    // Open the menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Close the menu
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('mobile nav links close the menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()

    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    await user.click(within(mobileNav).getByText('Home'))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('has a header landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
