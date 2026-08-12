import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the script logo and desktop nav with dropdowns', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /^Decibel\.$/ })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'DJs', 'Shows', 'Events', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: new RegExp(`^${label}$`) })).toBeInTheDocument()
    }

    // Dropdown + nested sub menu links render inside the Shows dropdown.
    for (const label of [
      'Top 20 of The Week',
      'Featured Artist',
      'Interviews',
      'Sub Menu',
      'Menu One',
      'Menu Two',
      'Menu Three',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(mobile).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()

    // Closing via a dropdown link…
    await user.click(within(mobile).getByRole('link', { name: 'Top 20 of The Week' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    // …via a top-level link…
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Home',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    // …and via a nested sub-menu link.
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Menu Three',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
