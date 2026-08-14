import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand logo with a teal dot and the desktop nav links', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: 'Wavecast.' })
    expect(brand).toHaveAttribute('href', '#')
    expect(brand.querySelector('span')).toHaveClass('text-primary-600')

    // Desktop nav is hidden below lg — query with hidden: true.
    const nav = screen.getByRole('navigation', {
      name: 'Main navigation',
      hidden: true,
    })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Contact', 'Login / Register']) {
      expect(screen.getByRole('link', { name: label, hidden: true })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Dropdown/, hidden: true })).toBeInTheDocument()
  })

  it('marks the Home link as the active (teal) page', () => {
    render(<Navbar />)

    const home = screen.getByRole('link', { name: 'Home', hidden: true })
    expect(home).toHaveClass('text-primary-600')
    const about = screen.getByRole('link', { name: 'About', hidden: true })
    expect(about).not.toHaveClass('text-primary-600')
  })

  it('opens and closes the dropdown submenu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const dropdown = screen.getByRole('button', {
      name: /Dropdown/,
      hidden: true,
    })
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')

    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Menu One', 'Menu Two', 'Menu Three']) {
      expect(screen.getByRole('link', { name: item, hidden: true })).toBeInTheDocument()
    }

    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Menu One', hidden: true })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')
    const mobileNav = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    expect(mobileNav).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Contact', 'Login / Register']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('opens the dropdown submenu from the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    await user.click(within(mobileNav).getByRole('button', { name: /Dropdown/ }))

    for (const item of ['Menu One', 'Menu Two', 'Menu Three']) {
      expect(within(mobileNav).getByRole('link', { name: item })).toBeInTheDocument()
    }
  })
})
