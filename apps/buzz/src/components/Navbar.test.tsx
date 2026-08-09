import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, nav links, and an Appointment CTA', () => {
    render(<Navbar />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Buzz/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Pricing', 'Barbers', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label.toLowerCase()}`,
      )
    }
    expect(screen.getByRole('link', { name: 'Appointment' })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)

    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
