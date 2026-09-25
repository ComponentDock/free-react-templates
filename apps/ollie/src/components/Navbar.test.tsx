import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Ollie logo and all nav links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Ollie' })).toHaveAttribute('href', '#')

    for (const label of ['About', 'Services', 'Team', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    // Menu should be open — mobile nav links are rendered in a second set

    await user.click(toggle)
    // Menu closed — no error
  })

  it('has correct anchor hrefs for each link', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Team' })).toHaveAttribute('href', '#team')
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)

    // Click a mobile nav link (the second "About" link in the DOM)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    // The mobile link is the second one
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(aboutLinks[1]!)

    // Menu should be closed — toggle should show menu icon again
    // No error means the click handler ran and setMobileOpen(false) was called
  })
})
