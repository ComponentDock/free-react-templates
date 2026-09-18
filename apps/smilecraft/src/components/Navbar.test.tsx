import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Smilecraft' })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()

    for (const label of ['Home', 'About', 'Services', 'Doctors', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles the mobile menu on button press', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })

    const aboutLink = within(mobileNav).getByRole('link', { name: 'About' })
    await user.click(aboutLink)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes mobile menu on window resize to desktop width', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    // Simulate resize event to desktop width
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true, configurable: true })
    window.dispatchEvent(new Event('resize'))

    // Wait for the state update to propagate
    await new Promise((r) => setTimeout(r, 0))

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('keeps mobile menu open on resize to mobile width', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    // Simulate resize to mobile width - menu should stay open
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true, configurable: true })
    window.dispatchEvent(new Event('resize'))

    await new Promise((r) => setTimeout(r, 0))

    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
  })
})
