import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getAllByText(/CUDDLE/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Causes', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('shows hamburger button on mobile', () => {
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(hamburger).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    // Click a mobile link (there are two 'About' links — desktop and mobile)
    const mobileLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(mobileLinks.at(-1)!)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('applies scrolled styles when window scrolls', async () => {
    render(<Navbar />)

    // Use fireEvent to trigger scroll which React handles via the event listener
    const { fireEvent } = await import('@testing-library/react')

    // Scroll down past 80px
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    fireEvent.scroll(window)

    // The header should have bg-white/95 class
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-white/95')
  })
})
