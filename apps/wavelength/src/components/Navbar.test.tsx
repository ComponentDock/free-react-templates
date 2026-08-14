import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand logo with a lime dot and the desktop nav links', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: 'Wavelength.' })
    expect(brand).toHaveAttribute('href', '#home')
    expect(brand.querySelector('span')).toHaveClass('text-brand')

    // Desktop nav is hidden below lg — query with hidden: true.
    const nav = screen.getByRole('navigation', {
      name: 'Main navigation',
      hidden: true,
    })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'DJs', 'Schedule', 'Podcasts', 'Events', 'Contact']) {
      expect(screen.getByRole('link', { name: label, hidden: true })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile off-canvas menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'DJs', 'Schedule', 'Podcasts', 'Events', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a nav link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Schedule' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
