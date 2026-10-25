import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { navLinks } from '../data'

describe('Header', () => {
  it('lists the eight nav labels in the reference order', () => {
    render(<Header />)

    const primary = screen.getByRole('navigation', { name: 'Primary' })
    const labels = within(primary)
      .getAllByRole('link')
      .map((link) => link.textContent)
    expect(labels).toEqual(navLinks.map((link) => link.label))
  })

  it('renders the filled CTA in the bar, and again in the drawer', async () => {
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.getAllByRole('link', { name: 'Book a walkthrough' })).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getAllByRole('link', { name: 'Book a walkthrough' })).toHaveLength(2)
  })

  it('opens and closes the drawer, exposing the state on the trigger', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: 'Open menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('nav-drawer')).toHaveAttribute('aria-hidden', 'true')

    await user.click(trigger)

    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('nav-drawer')).toHaveAttribute('aria-hidden', 'false')
  })

  it('closes the drawer when a drawer link is used', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const drawer = screen.getByRole('navigation', { name: 'Primary mobile' })
    await user.click(within(drawer).getByRole('link', { name: 'Pricing' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the drawer when the drawer CTA is used', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const drawer = screen.getByRole('navigation', { name: 'Primary mobile' })
    await user.click(within(drawer).getByRole('link', { name: 'Book a walkthrough' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes on Escape and hands focus back to the trigger', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(trigger)

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(trigger).toHaveFocus()
  })

  it('ignores keys that are not Escape while the drawer is open', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(window, { key: 'a' })

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })
})
